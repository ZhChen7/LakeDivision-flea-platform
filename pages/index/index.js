//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    show: false,
    index_show_list_data:[{
      numeration:'001',
      img:'https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/359295234/O1CN01TTVzaP1oXDZOTd5xo_!!359295234.jpg_580x580Q90.jpg',
      intro:'华为 p20pro6 + 128 珠光贝母全原在保99新',
      price:'￥1680',
      WantPeople:2
    },
      {
        numeration:'002',
        img:'https://img14.360buyimg.com/n7/jfs/t1/38722/13/1825/290419/5cbea1d6Eae62aeb8/82bd2ce75e8bc579.jpg',
        intro:'华为 p20pro6 + 128 珠光贝母全原在保99新',
        price:'￥1680',
        WantPeople:2
      },
      {
        numeration:'003',
        img:'https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/359295234/O1CN01TTVzaP1oXDZOTd5xo_!!359295234.jpg_580x580Q90.jpg',
        intro:'华为 p20pro6 + 128 珠光贝母全原在保99新',
        price:'￥1680',
        WantPeople:2
      },
      {
        numeration:'004',
        img:'https://img10.360buyimg.com/n7/jfs/t1/75771/27/8360/75667/5d6338f6E88f2db21/101d3ec8ac1c5c73.jpg',
        intro:'华为 p20pro6 + 128 珠光贝母全原在保99新',
        price:'￥1680',
        WantPeople:2
      }]
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
