//index.js
//获取应用实例
const db = wx.cloud.database()


Page({
  data: {
    show: false,
    imgUrls:['http://q0hfh28wl.bkt.clouddn.com/mmexport1572933342587.jpg',
   'http://q0hfh28wl.bkt.clouddn.com/timg.jpg',
    'http://q0hfh28wl.bkt.clouddn.com/mmexport1572933388916.webp',
    'http://q0hfh28wl.bkt.clouddn.com/CEEA0838C309EFBC5B0A016FC9CC21B9.jpg'],
    swiperIndex: 0,//这里不写第一次启动展示的时候会有问题
    indexshowlistdata:[],
      show1:true,
      buttonTop: 0,
      buttonLeft: 0,
      windowHeight: '',
      windowWidth: ''

  },

// 云函数
  qiuhe(){
      wx.cloud.callFunction({
        name:"getpublishData",
        success(res){
            console.log(res)
        }
      })
  },



  getID(){
    wx.cloud.callFunction({
      name: "getopenid",
      success(res) {
        console.log(res)
      },
      fail(res){
        console.log("获取失败")
      }
    })
  },
  getshuju(){
    wx.cloud.callFunction({
      name: "getshuju",
      success(res) {
        console.log(res)
      },
      fail(res) {
        console.log("获取失败")
      }
    })
  },




  bindchange(e) {
    this.setData({
      swiperIndex: e.detail.current
    })
  },



  listclick(e){

    let index = e.currentTarget.dataset.index
    console.log(this.data.indexshowlistdata[index]._id)
    let _id = this.data.indexshowlistdata[index]._id

    wx.navigateTo({
      url: './indexlistshow/indexlistshow?id='+_id,
    })
  },






  showPopup() {
    this.setData({ show: true });
  },

  onClose() {
    this.setData({ show: false });
  },


  // ToPublish(){
  //   wx.navigateTo({
  //     url: '../publish/publish',
  //   })
  // },

  onGotUserInfo(e){
    console.log(e.detail)
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)

    if (e.detail.userInfo){
          wx.navigateTo({
            url: '../publish/publish',
          })
    }
    else if(e.detail.userInfo == undefined){
      wx.showToast({
        title: '请先授权登录哟!',
        icon: 'none',
        duration: 2000
      })
    }
  },

    formSubmit: function (e) {
        console.log('form发生了submit事件，携带数据为：', e.detail.value)
    },
    formReset: function () {
        console.log('form发生了reset事件')
    },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that=this
    db.collection('publish').get({
      success: function(res) {
        // res.data 是一个包含集合中有权限访问的所有记录的数据，不超过 20 条
        console.log(res.data)


        that.setData({
          indexshowlistdata: res.data
        });
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },


  //页面相关事件处理函数---监听用户下拉动作
  onPullDownRefresh: function () {
    this.onLoad(); //重新加载onLoad()

    wx.showToast({
      title: '刷新啦！',
      icon: 'none',
      duration: 2000
    })
  },
  //页面上拉触底事件的处理函数
  onReachBottom: function () {
    wx.showToast({
      title: '到底啦！',
      icon: 'none',
      duration: 2000
    })
  }

})
