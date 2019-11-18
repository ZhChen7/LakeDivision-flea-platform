// pages/publish/publish.js
Page({

  data: {
    Pinkageitems: [
      { name: 'kexiaodao', value: '可小刀', checked: 'true' },
      { name: 'Pinkage', value: '包邮' }
    ],
    category: [
      { name: 'book', value: '书籍' },
      { name: 'Pinkage', value: '生活用品', checked: 'true' },
      { name: 'Pinkage', value: '3C数码' },
      { name: 'Pinkage', value: '鞋服美妆' },
      { name: 'Pinkage', value: '其它' }
    ],
    fileList: [
      { url: 'https://img.yzcdn.cn/vant/cat.jpeg', name: '图片1' },
      { url: 'http://q0hfh28wl.bkt.clouddn.com/3AA05DD719CC259FD1FF0B6A882A4BB4.jpg', name: '图片1' }
      // Uploader 根据文件后缀来判断是否为图片文件
      // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
    ]
  },

  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },


  afterRead(event) {
    const { file } = event.detail;
    // 当设置 mutiple 为 true 是 file 是一个数组，mutiple 默认为 false，file 是一个对象
    wx.uploadFile({
      url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
      filePath: file.path,
      name: 'file',
      formData: { 'user': 'test' },
      success (res){
        // 上传完成需要更新fileList
        const { fileList = [] } = this.data;
        fileList.push({ ...file, url: res.data });
        this.setData({ fileList });
      }
    });
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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