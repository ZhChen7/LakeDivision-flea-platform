const app = getApp()

Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    TabCur: 0,
    MainCur: 0,
    VerticalNavTop: 0,
    list: [],
    load: true
  },


  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function (res) {
      wx.showLoading({
        title: '加载中...',
        mask: true
      });

      let list = [{}];
      let listdata = ['a', 'b', 'c']


      for (let i = 0; i < listdata.length; i++) {
        list[i] = {};
        list[i].name = listdata[i];
        list[i].id = i;
      }

      this.setData({
        list: list,
        listCur: list[0]
      })

    },
    detached: function () {
    },
  },


  ready() {
    wx.hideLoading()
  },

  methods: {
    tabSelect(e) {
      this.setData({
        TabCur: e.currentTarget.dataset.id,
        MainCur: e.currentTarget.dataset.id,
        VerticalNavTop: (e.currentTarget.dataset.id - 1) * 50
      })
    },
    VerticalMain(e) {
      let that = this;
      let list = this.data.list;

      let tabHeight = 0;

      if (this.data.load) {
        for (let i = 0; i < list.length; i++) {
          let view = wx.createSelectorQuery().select("#main-" + list[i].id);

          view.fields({
            size: true
          }, data => {

            list[i].top = tabHeight;
            tabHeight = tabHeight;

            list[i].bottom = tabHeight;
          }).exec();
        }
        that.setData({
          load: false,
          list: list
        })
      }
      let scrollTop = e.detail.scrollTop + 20;
      for (let i = 0; i < list.length; i++) {
        if (scrollTop > list[i].top && scrollTop < list[i].bottom) {
          that.setData({
            VerticalNavTop: (list[i].id - 1) * 50,
            TabCur: list[i].id
          })
          return false
        }
      }
    }
  }
})