// pages/publish/publish.js
const app = getApp();
const db = wx.cloud.database()

let finallimgUrl=[]
let checkbox1=[]
let checkbox2=[]


Page({
  data: {
    Pinkageitems: [
      { name: 'kexiaodao', value: '可小刀'},
      { name: 'Pinkage', value: '包邮' }
    ],
    category: [
      { name: 'book', value: '书籍' },
      { name: 'articlesofdailyuse', value: '生活用品' },
      { name: '3Cshuma', value: '3C数码' },
      { name: 'Shoesclothesbeautifulmakeup', value: '鞋服美妆' },
      { name: 'other', value: '其它' }
    ],
    fileList: [],
    max:10,
    userinfo:null,
    columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
    show: false,
    Choosecitydata:'黄石'
  },


  onConfirm(event) {
    const { picker, value, index } = event.detail;
    this.setData({
      Choosecitydata:value
    })
    this.setData({
      show:false
    })
  },

  onCancel() {
    this.setData({
      show:false
    })
  },

  onClose() {
    this.setData({ show: false });
  },

  showChoosecity(){
    this.setData({ show: true });
  },

  checkboxChange: function (e) {
    checkbox1=e.detail.value
    // console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },

  checkboxChange1(e){
    // console.log(e)
    checkbox2=e.detail.value
    // console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },

  unloadimg(){
    // console.log('hello')
    let _that=this

    wx.chooseImage({
      count: 3,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths)


        _that.setData({
          fileList: _that.data.fileList.concat(tempFilePaths)
        })


        let __that=_that

        let uploads = [];
        for (let i = 0; i < tempFilePaths.length; i++) {
          uploads[i] = new Promise((resolve, reject) => {
            wx.cloud.uploadFile({
              cloudPath: new Date().getTime() + '.png', // 上传至云端的路径
              filePath: tempFilePaths[i], // 小程序临时文件路径
              success: res => {
                console.log(res)
                finallimgUrl.push(res.fileID)
                resolve(result)
              },
              fail: console.error
            })
          })
        }
        Promise.all(uploads).then((result) => {
          console.log(result)
        })
      }
    })
  },


  closeimg(e){
    let currentTargetimgindex =  e.currentTarget.dataset.index
    // console.log(currentTargetimgindex)
    this.data.fileList.splice(currentTargetimgindex,1)
    finallimgUrl.splice(currentTargetimgindex,1)

    console.log(finallimgUrl[currentTargetimgindex])


    wx.cloud.deleteFile({
      fileList: [finallimgUrl[currentTargetimgindex]],
      success: res => {
        // handle success
        console.log(res.fileList)
      },
      fail: err => {
        console.log("error")
      }
    })

    // console.log(newfileList)
     this.setData({
       fileList: this.data.fileList
    })
  },


  bindinputvalue(e){

  },


  formSubmit: function (e) {

    if(e.detail.value.textarea.length==0||e.detail.value.Wanttosell.length==0||e.detail.value.originalprice.length==0){
      wx.showToast({
        title: '输入不能为空哟！',
        icon: 'none',
        duration: 2000
      })
      return
    }

    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    let textarea= e.detail.value.textarea
    let publishimg= finallimgUrl
    let Wanttosell= e.detail.value.Wanttosell
    let originalprice= e.detail.value.originalprice
    let checkboxone=checkbox1
    let checkboxtwo=checkbox2
    let placeofdispatch=this.data.Choosecitydata


    // wx.getLocation({
    //   type: 'wgs84',
    //   success (res) {
    //     console.log(res)
    //     const latitude = res.latitude
    //     const longitude = res.longitude
    //     const speed = res.speed
    //     const accuracy = res.accuracy
    //   }
    // })


  let publishobj={
    description: textarea,
    publishimgarr: publishimg,
    Wanttosell: Wanttosell,
    originalprice:originalprice,
    checkboxone:checkboxone,
    checkboxtwo:checkboxtwo,
    publishTime:new Date().toLocaleString(),
    placeofdispatch:placeofdispatch,
    Wantpeople:1,
    Thumbupnumber:0,
    collectnumber:0,
    pageviewnumber:0,
    style: {
      "color": "red"
    },
  }

    db.collection('publish').add({
      // data 字段表示需新增的 JSON 数据
      data: publishobj
    })
          .then(res => {
            var _id=res._id
            wx.redirectTo({
              url: '../index/indexlistshow/indexlistshow?id='+_id
            })
          })
  },



  formReset: function () {
    console.log('form发生了reset事件')
  },


  onReady() {
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
                            console.log(userInfo1)

                            let userobj={
                              nickName:userInfo1.nickName,
                              country:userInfo1.country
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
              if (res.userInfo.gender === 1){
                res.userInfo.gender='帅气的小男孩'
              }else{
                res.userInfo.gender='漂亮的小女生'
              }
              _that.setData({
                userinfo:res.userInfo
              })
            }
          })
        }
      }
    })



  }

})