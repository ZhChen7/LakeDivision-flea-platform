// pages/index/indexlistshow/indexlistshow.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: ['https://img.alicdn.com/img/bao/uploaded/i4/i2/2200574208957/O1CN01CC00Dm2G2M4QSERsW_!!2200574208957.jpg_196x196Q50s50.jpg_.webp',
      'https://img.alicdn.com/img/bao/uploaded/i4/i2/4078819345/O1CN01IHny6H2Iu3lcXpsCZ_!!2-item_pic.png_196x196Q50s50.jpg_.webp',
      'https://img.alicdn.com/img/bao/uploaded/i4/i4/72694814/O1CN01VH38GI1lQrCY7RqHw_!!72694814.jpg_420x280Q50s50.jpg_.webp',
      'https://img.alicdn.com/img/bao/uploaded/i4/i1/2138696260/O1CN019JACDc1CZ5mVuNxxC_!!94-0-lubanu.jpg_420x280Q50s50.jpg_.webp'],
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