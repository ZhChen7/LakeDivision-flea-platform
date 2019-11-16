// pages/index/indexlistshow/indexlistshow.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: ['http://q0hfh28wl.bkt.clouddn.com/mmexport1572933342587.jpg',
      'http://q0hfh28wl.bkt.clouddn.com/timg.jpg',
      'http://q0hfh28wl.bkt.clouddn.com/mmexport1572933388916.webp',
      'http://q0hfh28wl.bkt.clouddn.com/CEEA0838C309EFBC5B0A016FC9CC21B9.jpg'],
     swiperIndex: 0 //这里不写第一次启动展示的时候会有问题
  },


  bindchange(e) {
    this.setData({
      swiperIndex: e.detail.current
    })
  },

  onClickLeft() {
    wx.navigateBack({
      delta: 1, // 回退前 delta(默认为1) 页面
    })
  },
  onClickRight() {
    this.setData({ show: true });
  },
  onClose() {
    this.setData({ show: false });
  },
  onClickIcon() {
    console.log('点击图标');
  },
  onClickButton() {
    console.log('点击按钮');
  },



  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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