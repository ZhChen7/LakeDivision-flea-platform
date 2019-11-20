// pages/index/indexlistshow/indexlistshow.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: ['https://img10.360buyimg.com/mobilecms/s250x250_jfs/t1/74132/21/14761/169293/5dc39d53Eb7598160/6e1756dce7fd4283.jpg',
      'https://img13.360buyimg.com/mobilecms/s250x250_jfs/t1/96438/29/1795/202527/5dc4d29bE7e66f381/ad9ae17970173349.jpg',
      'https://img.alicdn.com/img/bao/uploaded/i4/i4/72694814/O1CN01VH38GI1lQrCY7RqHw_!!72694814.jpg_420x280Q50s50.jpg_.webp',
      'https://img12.360buyimg.com/mobilecms/s250x250_jfs/t1/96494/24/1754/188237/5dc4eb04E76fdf5cc/87ca849bbdf813cc.jpg'],
     swiperIndex: 0, //这里不写第一次启动展示的时候会有问题
     show:false
  },


  onClickShow(){
    console.log('xxxxxxx')
    this.setData({ showbannerimg: true });
  },

  onCloseimg(){
    this.setData({ showbannerimg: false });
  },

  tapName(e){
    var index=this.data.swiperIndex
    var current=this.data.imgUrls[index]
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: this.data.imgUrls // 需要预览的图片http链接列表
    })
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