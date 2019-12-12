// pages/chatroom/chatroom.js
//获取应用实例
const db = wx.cloud.database()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:null, //储存当前用户信息
    textInputValue:'', // 储存输入内容
    chats:[], //储存聊天记录
    openId:'', //当前用户的 openId
     InputBottom: 0,
      toView: 'msg',
      sellerdata: null,
      RoomId: '',
      ReceiverOpenId: ''
  },


    InputFocus(e) {
        this.setData({
            InputBottom: e.detail.height
        })
    },
    InputBlur(e) {
        this.setData({
            InputBottom: 0
        })
    },

    onGotUserInfo(e) {
    if(e.detail.userInfo){
      this.setData({
        userInfo:e.detail.userInfo
      })
    }

    let _that=this
    // 查看是否授权
    wx.getSetting({
      success: function(res){
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function(res) {

              console.log(res)

              //用户已经授权过
              let userInfo1=res.userInfo

              wx.cloud.callFunction({
                name: 'login',
                complete: res => {
                  db.collection('user').where({
                    _openid:res.result.openid
                  })
                      .get({
                        success: function(res) {
                          // res.data 是包含以上定义的两条记录的数组
                          if(res.data.length>0){
                            return
                          }else{
                            let userobj={
                              nickName:userInfo1.nickName,
                              country:userInfo1.country,
                              ChatHead:userInfo1.avatarUrl
                            }

                            db.collection('user').add({
                              // data 字段表示需新增的 JSON 数据
                              data: userobj
                            })
                                .then(res => {
                                })
                          }
                        }
                      })
                }
              })
            }
          })
        }
      }
    })
  },



  onTextInput(e){
    this.setData({
      textInputValue:e.detail.value
    })

  },



  onSend(){
      let that = this
    if(!this.data.textInputValue){
       return
    }

    const doc={
      avatar: this.data.userInfo.avatarUrl,
      nickName: this.data.userInfo.nickName,
      msgText:'text',
        RoomId: this.data.RoomId,
      textContent:this.data.textInputValue,
      sendTime:new Date(),
      practicalTime:this.Transfertime(Date.now()),
      sendTimeTs:Date.now()
    }


      db.collection('chatroom').add({
      // data 字段表示需新增的 JSON 数据
      data:doc
    })
        .then(res => {
            that.setData({
                textInputValue: '',
                toView: 'msg'
            })
        })


  },


  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {

      // this.setData({
      //     ReceiverOpenId:options.ReceiverOpenId
      // })
      //
      this.setData({
          ReceiverOpenId: 'oN3c_5fCjC8pH_e4veY15EStOdbo'
      })

    // 查看是否授权
    let that=this
    wx.getSetting({
      success: function(res){
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function(res) {
                console.log(res)
              that.setData({
                  userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
 onReady() {

      let that =this
      let ReceiverOpenId = this.data.ReceiverOpenId

      const p =new Promise((resolve,reject)=>{
          wx.cloud.callFunction({
              name: 'login',
              complete: res => {
                  that.setData({
                      openId :res.result.openid
                  })
                  resolve(res)
              }
          })
      }).then(
          value => {
              if (!that.data.RoomId) {
                  that.setData({
                      RoomId: value.result.openid + ReceiverOpenId
                  })
              }

              db.collection('chatroom').where({
                  RoomId: value.result.openid + ReceiverOpenId, // 填入当前用户 openid
              }).watch({
                  onChange:this.onChange.bind(this),
                  onError(err) {
                      console.log(err)
                  }
              })

          }
      )
  },


    Transfertime(timechuo) {
        var time=+ timechuo
        var date = new Date(time + 8 * 3600 * 1000); // 增加8小时
        return date.toJSON().substr(0, 19).replace('T', ' ');
    },


    onChange(snapshot) {

     console.log(snapshot)


    //监听开始时的初始化数据

    if(snapshot.type === 'init'){
      this.setData({
        chats:[
            ...this.data.chats,
            ...[...snapshot.docs].sort((x,y)=>x.sendTimeTs-y.sendTimeTs)
        ]
      })
    }else{

      const chats=[...this.data.chats]
      for (const docChange of snapshot.docChanges){

        switch (docChange.queueType) {

          case 'enqueue':
            chats.push(docChange.doc)
                break
        }
      }

      this.setData({
        chats:chats.sort((x,y)=>x.sendTimeTs-y.sendTimeTs)
      })

    }


  },





  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})