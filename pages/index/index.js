//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    show: false
  },
  listclick(){
    wx.navigateTo({
      url: './indexlistshow/indexlistshow',
    })
  },
  showPopup() {
    this.setData({ show: true });
  },

  onClose() {
    this.setData({ show: false });
  },

  onLoad: function () {
    
  },

  //页面相关事件处理函数---监听用户下拉动作
  onPullDownRefresh: function () {
    console.log('下拉！')
  },
  //页面上拉触底事件的处理函数
  onReachBottom: function () {
    console.log('上拉')
  }
  
})
