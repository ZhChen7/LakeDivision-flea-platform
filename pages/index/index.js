//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
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
