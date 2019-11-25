//index.js
//获取应用实例
const DB = wx.cloud.database().collection("list")


Page({
  data: {
    show: false,
    imgUrls:['http://q0hfh28wl.bkt.clouddn.com/mmexport1572933342587.jpg',
   'http://q0hfh28wl.bkt.clouddn.com/timg.jpg',
    'http://q0hfh28wl.bkt.clouddn.com/mmexport1572933388916.webp',
    'http://q0hfh28wl.bkt.clouddn.com/CEEA0838C309EFBC5B0A016FC9CC21B9.jpg'],
    swiperIndex: 0,//这里不写第一次启动展示的时候会有问题
    indexshowlistdata:[{
      numeration:'001',
      img:'https://img11.360buyimg.com/jdcms/s150x150_jfs/t1/77198/3/15292/206296/5dcadc9fEbd06bb37/a74616e7b2006039.jpg.webp',
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
      },
      {
        numeration: '005',
        img: 'https://img10.360buyimg.com/n7/jfs/t1/75771/27/8360/75667/5d6338f6E88f2db21/101d3ec8ac1c5c73.jpg',
        intro: '华为 p20pro6 + 128 珠光贝母全原在保99新',
        price: '￥1680',
        WantPeople: 2
      },
      {
        numeration: '006',
        img: 'https://img10.360buyimg.com/n7/jfs/t1/75771/27/8360/75667/5d6338f6E88f2db21/101d3ec8ac1c5c73.jpg',
        intro: '华为 p20pro6 + 128 珠光贝母全原在保99新',
        price: '￥1680',
        WantPeople: 2
      }],
      show1:true,
      buttonTop: 0,
      buttonLeft: 0,
      windowHeight: '',
      windowWidth: ''

  },

// 云函数
  qiuhe(){
      wx.cloud.callFunction({
        name:"add",
        data:{
          a:9,
          b:22
        },
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


  ToPublish(){
    console.log('xxx')
    wx.navigateTo({
      url: '../publish/publish',
    })
  },


    formSubmit: function (e) {
        console.log('form发生了submit事件，携带数据为：', e.detail.value)
    },
    formReset: function () {
        console.log('form发生了reset事件')
    },

    onLoad: function (options) {

    },


  //页面相关事件处理函数---监听用户下拉动作
  onPullDownRefresh: function () {
    wx.showToast({
      title: '下拉事件',
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
