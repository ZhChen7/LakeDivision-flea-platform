var app = getApp()
Page({
  data: {
    current: 0,
    listgoods: [{
      "id": '01',
      "name": "商品标题1",
      "price": "100",
      "type": "",
      "pic_url": "http://p5.qhimg.com/bdm/768_474_0/t019e08ebfa47d7cc34.jpg"
    }, {
      "id": '02',
        "name": "商品标题2",
      "pic_url": "http://p9.qhimg.com/bdm/384_237_0/t0106f7563d217303f1.jpg",
      "price": "200",
      "type": ""
    }, {
      "id": '03',
        "name": "商品标题3",
      "price": "300",
      "type": "",
        "pic_url": "http://p0.qhimg.com/bdm/768_474_0/t01e6b6d9824ac2c8ff.jpg"
    } 
    ],
    swiper: {
      indicatorDots: false,
      autoplay: false,
      interval: 5000,
      duration: 1000
    }
  },
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh')
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    console.log(this.data.listgoods);
    switch1(this.data.listgoods);
    function switch1(odata) {
      for (var i = 0; i < odata.length - 1; i++) {
        for (var j = 0; j < odata.length - i - 1; j++) {
          if (parseInt(odata[j].price) > parseInt(odata[j + 1].price)) {
            var temp = odata[j];
            odata[j] = odata[j + 1];
            odata[j + 1] = temp;
          }
        }
      }
    }
  },
  //详情页跳转
  lookdetail: function (e) {
    var lookid = e.currentTarget.dataset;
    console.log(e.currentTarget.dataset.id);
    wx.navigateTo({
      //url: "/pages/detail/detail?id=" + lookid.id
      //这里没写完 大概是跳进一个展示的页面
      url: '/pages/index/indexlistshow/indexlistshow?id=' + lookid.id,
    })
  },
  switchSlider: function (e) {
    this.setData({
      current: e.target.dataset.index
    })
  },
  changeSlider: function (e) {
    this.setData({
      current: e.detail.current
    })
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }

})
