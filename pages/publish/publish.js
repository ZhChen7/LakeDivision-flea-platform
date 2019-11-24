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
     'https://img.yzcdn.cn/vant/cat.jpeg',
     'http://q0hfh28wl.bkt.clouddn.com/3AA05DD719CC259FD1FF0B6A882A4BB4.jpg',
      'https://img.yzcdn.cn/vant/cat.jpeg',
      'http://q0hfh28wl.bkt.clouddn.com/3AA05DD719CC259FD1FF0B6A882A4BB4.jpg',
      'https://img.yzcdn.cn/vant/cat.jpeg',
      'http://q0hfh28wl.bkt.clouddn.com/3AA05DD719CC259FD1FF0B6A882A4BB4.jpg',
      'https://img.yzcdn.cn/vant/cat.jpeg',
      'http://q0hfh28wl.bkt.clouddn.com/3AA05DD719CC259FD1FF0B6A882A4BB4.jpg'
    ]
  },

  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },


  unloadimg(){
    console.log('hello')

    var _that=this

    wx.chooseImage({
      count: 5,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths)

        console.log(_that.data.fileList)

        var newarr = _that.data.fileList.concat(tempFilePaths)
        _that.setData({
          fileList: newarr
        })

        var uploads = [];
        for (var i = 0; i < tempFilePaths.length; i++) {
          uploads[i] = new Promise((resolve, reject) => {
            wx.cloud.uploadFile({
              cloudPath: new Date().getTime() + '.png', // 上传至云端的路径
              filePath: tempFilePaths[0], // 小程序临时文件路径
              success: res => {
                resolve(result)
                console.log(res)
              },
              fail: console.error
            })
          })
        }
        Promise.all(uploads).then((result) => {
          resolve(result)
          console.log('1111')
        })
      }
    })
  },


  closeimg(e){
    console.log(e)
    console.log('hello world')
  },


  delete(){
    console.log('xxxx')
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