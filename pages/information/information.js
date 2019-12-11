// pages/information/information.js
const app = getApp();
Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 页面的初始数据
   */
  data: {
    listheader:['消息','好友'],
    TabCur: 0,
    scrollLeft:0,
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    hidden: true
  },

  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function (res) {
      let list = [];
      for (let i = 0; i < 26; i++) {
        list[i] = String.fromCharCode(65 + i)
      }
      this.setData({
        list: list,
        listCur: list[0]
      })
    },
    detached: function () { },
  },





  // onLoad() {
  //   let list = [];
  //   for (let i = 0; i < 26; i++) {
  //     list[i] = String.fromCharCode(65 + i)
  //   }
  //   this.setData({
  //     list: list,
  //     listCur: list[0]
  //   })
  // },


  onReady() {
    let that = this;
    wx.createSelectorQuery().select('.indexBar-box').boundingClientRect(function(res) {
      that.setData({
        boxTop: res.top
      })
    }).exec();
    wx.createSelectorQuery().select('.indexes').boundingClientRect(function(res) {
      that.setData({
        barTop: res.top
      })
    }).exec()
  },


 methods:{
   tabSelect(e) {
     this.setData({
       TabCur: e.currentTarget.dataset.id,
       scrollLeft: (e.currentTarget.dataset.id-1)*60
     })
   },

   //获取文字信息
   getCur(e) {
     this.setData({
       hidden: false,
       listCur: this.data.list[e.target.id],
     })
   },

   setCur(e) {
     this.setData({
       hidden: true,
       listCur: this.data.listCur
     })
   },
   //滑动选择Item
   tMove(e) {
     let y = e.touches[0].clientY,
         offsettop = this.data.boxTop,
         that = this;
     //判断选择区域,只有在选择区才会生效
     if (y > offsettop) {
       let num = parseInt((y - offsettop) / 20);
       this.setData({
         listCur: that.data.list[num]
       })
     };
   },

   //触发全部开始选择
   tStart() {
     this.setData({
       hidden: false
     })
   },

   //触发结束选择
   tEnd() {
     this.setData({
       hidden: true,
       listCurID: this.data.listCur
     })
   },
   indexSelect(e) {
     let that = this;
     let barHeight = this.data.barHeight;
     let list = this.data.list;
     let scrollY = Math.ceil(list.length * e.detail.y / barHeight);
     for (let i = 0; i < list.length; i++) {
       if (scrollY < i + 1) {
         that.setData({
           listCur: list[i],
           movableY: i * 20
         })
         return false
       }
     }
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