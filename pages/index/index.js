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
      'cloud://hbsell-jgvfo.6862-hbsell-jgvfo-1300713089/lovehs.jpg',
      'cloud://hbsell-jgvfo.6862-hbsell-jgvfo-1300713089/HomePagebanner2.jpg',
      'cloud://hbsell-jgvfo.6862-hbsell-jgvfo-1300713089/HomePagebanner1.webp'
    ],
    swiperIndex: 0,//这里不写第一次启动展示的时候会有问题
    indexshowlistdata:[],
    HotList:['小米手机','华为','apple','pear','clothes'] ,
      show1:true,
      buttonTop: 0,
      buttonLeft: 0,
      windowHeight: '',
      windowWidth: '',
     ColorList: [{
       title: '嫣红',
       name: 'red'
     },
       {
         title: '桔橙',
         name: 'orange'
       },
       {
         title: '明黄',
         name: 'yellow'
       },
       {
         title: '橄榄',
         name: 'olive'
       },{
         title: '森绿',
         name: 'green',
         color: '#39b54a'
       },
       {
         title: '天青',
         name: 'cyan',
         color: '#1cbbb4'
       },
       {
         title: '海蓝',
         name: 'blue',
         color: '#0081ff'
       },
       {
         title: '姹紫',
         name: 'purple',
         color: '#6739b6'
       },
       {
         title: '木槿',
         name: 'mauve',
         color: '#9c26b0'
       },
       {
         title: '桃粉',
         name: 'pink',
         color: '#e03997'
       }],
    Allcolor: [],
    CustomBar: app.globalData.CustomBar,
    active: 0
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

  HotcloseClick(e){
    let index = e.currentTarget.dataset.index
    this.data.ColorList.splice(index,1)
    this.setData({
      ColorList: this.data.ColorList
    })

  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  onChange(event) {
    wx.showToast({
      title: `切换到标签 ${event.detail.name}`,
      icon: 'none'
    });
  }

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
