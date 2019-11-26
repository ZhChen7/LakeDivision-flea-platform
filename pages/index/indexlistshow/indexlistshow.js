// pages/index/indexlistshow/indexlistshow.js

const app = getApp();
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[],
    swiperIndex: 0, //这里不写第一次启动展示的时候会有问题
    show:false,
    releaseFocus: false,
    userinfo:null,
    GetDatalist:null
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


  bindReply: function(e){
    this.setData({
      releaseFocus: true
    })
  },

  bindReplysend(){
    this.setData({
      releaseFocus: false
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


  onReady() {

  },


  onLoad:function(option){

    console.log(option);


    let _id = option.id
    let that= this
    db.collection('publish').where({
      _id: _id
    })
        .get({
          success: function(res) {
            // res.data 是包含以上定义的两条记录的数组
              console.log(res.data)


             that.setData({
                imgUrls:res.data[0].publishimgarr,
                GetDatalist:res.data[0]
             })
          }
        })
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