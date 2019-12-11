//index.js
//获取应用实例
const db = wx.cloud.database()
const app = getApp()

Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    show: false,
    imgUrls:[
     'cloud://hbsell-jgvfo.6862-hbsell-jgvfo-1300713089/HomePagebanner3.jpg',
        'cloud://hbsell-jgvfo.6862-hbsell-jgvfo-1300713089/lovehs.jpg'
    ],
    swiperIndex: 0,//这里不写第一次启动展示的时候会有问题
    indexshowlistdata:[],
      show1:true,
      buttonTop: 0,
      buttonLeft: 0,
      windowHeight: '',
      windowWidth: ''
  },

  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () {
        let that=this
        db.collection('publish').get({
          success: function(res) {
            // res.data 是一个包含集合中有权限访问的所有记录的数据，不超过 20 条
            console.log(res.data)

            that.setData({
              indexshowlistdata: res.data
            });
          }
        })
    },
    detached: function () { },
  },



methods:{
  bindchange(e) {
    this.setData({
      swiperIndex: e.detail.current
    })
  },

  listclick(e){
    let index = e.currentTarget.dataset.index
    console.log(this.data.indexshowlistdata[index]._id)
    let _id = this.data.indexshowlistdata[index]._id

    wx.navigateTo({
      url: '/pages/index/indexlistshow/indexlistshow?id='+_id,
    })
  },



},



    // formSubmit: function (e) {
    //     console.log('form发生了submit事件，携带数据为：', e.detail.value)
    // },
    // formReset: function () {
    //     console.log('form发生了reset事件')
    // },

  //
  // /**
  //  * 生命周期函数--监听页面加载
  //  */
  // onLoad: function (options) {
  //   let that=this
  //   db.collection('publish').get({
  //     success: function(res) {
  //       // res.data 是一个包含集合中有权限访问的所有记录的数据，不超过 20 条
  //       console.log(res.data)
  //
  //       that.setData({
  //         indexshowlistdata: res.data
  //       });
  //     }
  //   })
  // },
  //
  //


  // //页面相关事件处理函数---监听用户下拉动作
  // onPullDownRefresh: function () {
  //   this.onLoad(); //重新加载onLoad()
  //
  //   wx.showToast({
  //     title: '刷新啦！',
  //     icon: 'none',
  //     duration: 2000
  //   })
  // },
  // //页面上拉触底事件的处理函数
  // onReachBottom: function () {
  //   wx.showToast({
  //     title: '到底啦！',
  //     icon: 'none',
  //     duration: 2000
  //   })
  // }

})
