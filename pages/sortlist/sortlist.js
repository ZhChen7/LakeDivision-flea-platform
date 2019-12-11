// pages/sortlist/sortlist.js

const db = wx.cloud.database()

Page({

  data: {
    sortlistdata:null,
    activeindex:null
  },


  onLoad: function (options) {

    let that =this
    db.collection('CommoditySortList').get({
      success: function(res) {
        // res.data 是一个包含集合中有权限访问的所有记录的数据，不超过 20 条

        that.setData({
          sortlistdata:res.data[0].Alllist
        })

        // console.log(that.data.sortlistdata)

      }
    })

  },


  ItemClick(e){
    this.setData({
      activeindex:e.currentTarget.dataset.index
    })

  },

  listsurebtn(){
    let sortlistdataarr = this.data.sortlistdata
    let activeindex1 = this.data.activeindex

    wx.setStorage({
      key: "sortlistdata",
      data: sortlistdataarr[activeindex1].tag,
      success: function (res) {
          console.log(res)
           wx.navigateBack();   //返回上一个页面
      }
    })

    // wx.redirectTo({
    //   url: '/pages/publish/publish?data='+sortlistdataarr[activeindex1].tag
    // })


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