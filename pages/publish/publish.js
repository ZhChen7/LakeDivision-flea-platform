// pages/publish/publish.js
const app = getApp();
const db = wx.cloud.database()

let finallimgUrl = []

Page({
    data: {
        Pinkageitems: [
            {name: 'kexiaodao', value: '可小刀'},
            {name: 'Pinkage', value: '包邮'}
        ],
        category: [
            {name: 'book', value: '书籍'},
            {name: 'articlesofdailyuse', value: '生活用品'},
            {name: '3Cshuma', value: '3C数码'},
            {name: 'Shoesclothesbeautifulmakeup', value: '鞋服美妆'},
            {name: 'other', value: '其它'}
        ],
        fileList: [],
        max: 10,
        userinfo: null,
        columns: ['杭州', '宁波', '温州', '嘉兴', '湖州', '黄石', '武汉', '鄂州', '北京', '宜昌'],
        show: false,
        region: ['湖北省', '黄石市', '黄石港区'],
        Alldata: ['生鲜水果'],
        boxid: '',
        UsedOptions: [{value: '全新', IsSelect: false, color: 'bg-pink'},
            {value: '不讲价', IsSelect: false, color: 'bg-olive'},
            {value: '仅自提', IsSelect: false, color: 'bg-blue'},
            {value: '可借', IsSelect: false, color: 'bg-pink'}],

        UsedOption: [],
        colorList: ["bg-pink", "bg-olive", "bg-blue", "bg-purple"],
        IstoBottom: false
    },


    ToAlllistPage() {

        this.setData({
            IstoBottom: true
        })

        wx.navigateTo({
            url: '/pages/sortlist/sortlist',
            events: {
                // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
                acceptDataFromOpenedPage: function (data) {
                    console.log(data)
                },
                someEvent: function (data) {
                    console.log(data)
                }
            }
        })
    },

    menuArrow: function (e) {
        this.setData({
            menuArrow: e.detail.value
        });
    },

    onConfirm(event) {
        const {picker, value, index} = event.detail;
        this.setData({
            Choosecitydata: value
        })
        this.setData({
            show: false
        })
    },

    onCancel() {
        this.setData({
            show: false
        })
    },

    onClose() {
        this.setData({show: false});
    },

    showChoosecity() {
        this.setData({show: true});
    },


    checkboxChange: function (e) {
        // console.log('checkbox发生change事件，携带value值为：', e.detail.value)

        let checkarr = e.detail.value
        this.setData({
            UsedOption: e.detail.value
        })
    },


    unloadimg() {
        // console.log('hello')
        let _that = this
        wx.chooseImage({
            count: 3,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success(res) {
                // tempFilePath可以作为img标签的src属性显示图片
                const tempFilePaths = res.tempFilePaths
                console.log(tempFilePaths)

                _that.setData({
                    fileList: _that.data.fileList.concat(tempFilePaths)
                })

                let __that = _that
                let uploads = [];
                for (let i = 0; i < tempFilePaths.length; i++) {
                    uploads[i] = new Promise((resolve, reject) => {
                        wx.cloud.uploadFile({
                            cloudPath: new Date().getTime() + '.png', // 上传至云端的路径
                            filePath: tempFilePaths[i], // 小程序临时文件路径
                            success: res => {
                                console.log(res)
                                finallimgUrl.push(res.fileID)
                                resolve(result)
                            },
                            fail: console.error
                        })
                    })
                }
                Promise.all(uploads).then((result) => {
                    console.log(result)
                })
            }
        })
    },


    closeimg(e) {
        let currentTargetimgindex = e.currentTarget.dataset.index
        // console.log(currentTargetimgindex)
        this.data.fileList.splice(currentTargetimgindex, 1)
        finallimgUrl.splice(currentTargetimgindex, 1)

        console.log(finallimgUrl[currentTargetimgindex])


        wx.cloud.deleteFile({
            fileList: [finallimgUrl[currentTargetimgindex]],
            success: res => {
                // handle success
                console.log(res.fileList)
            },
            fail: err => {
                console.log("error")
            }
        })

        this.setData({
            fileList: this.data.fileList
        })
    },


    RegionChange: function (e) {
        this.setData({
            region: e.detail.value
        })
    },


    bindinputvalue(e) {

    },


    formSubmit: function (e) {

        if (e.detail.value.textarea.length == 0 || e.detail.value.Wanttosell.length == 0 || e.detail.value.originalprice.length == 0) {
            wx.showToast({
                title: '输入不能为空哟！',
                icon: 'none',
                duration: 2000
            })
            return
        }

        console.log('form发生了submit事件，携带数据为：', e.detail.value)
        let textarea = e.detail.value.textarea
        let publishimg = finallimgUrl
        let Wanttosell = e.detail.value.Wanttosell  //想卖的价格
        let originalprice = e.detail.value.originalprice  //原始价格
        let placeofdispatch = this.data.region  //地点
        let Allofsort = this.data.Alldata  //全部分类
        let CommonUse = this.data.UsedOption

        // wx.getLocation({
        //   type: 'wgs84',
        //   success (res) {
        //     console.log(res)
        //     const latitude = res.latitude
        //     const longitude = res.longitude
        //     const speed = res.speed
        //     const accuracy = res.accuracy
        //   }
        // })


        let publishobj = {
            description: textarea,
            publishimgarr: publishimg,
            Wanttosell: Wanttosell,
            originalprice: originalprice,
            publishTime: new Date().toLocaleString(),
            placeofdispatch: placeofdispatch,
            Allofsort: Allofsort,
            CommonUse: CommonUse,
            Wantpeople: 1,
            Thumbupnumber: 0,
            collectnumber: 0,
            pageviewnumber: 0,
            style: {
                "color": "red"
            },
        }


        db.collection('publish').add({
          // data 字段表示需新增的 JSON 数据
          data: publishobj
        })
              .then(res => {
                var _id=res._id
                wx.redirectTo({
                  url: '../index/indexlistshow/indexlistshow?id='+_id
                })
              })
    },


    formReset: function () {
        console.log('form发生了reset事件')
    },


    onLoad: function (options) {

        // let that =this
        // wx.getStorage({//获取本地缓存
        //   key:"sortlistdata",
        //   success:function(res){
        //     console.log(res)
        //       that.setData({
        //         Alldata:res.data,
        //         boxid:'bottombox'
        //       });
        //   },
        // })

    },


    onShow() {
        let that = this
        if (this.data.IstoBottom) {
            wx.getStorage({//获取本地缓存
                key: "sortlistdata",
                success: function (res) {
                    console.log(res)
                    that.setData({
                        Alldata: res.data,
                        boxid: 'bottombox'
                    });
                },
            })
        }
    },

    onReady() {

        let _that = this
        // 查看是否授权
        wx.getSetting({
            success: function (res) {
                if (res.authSetting['scope.userInfo']) {
                    wx.getUserInfo({
                        success: function (res) {

                            //用户已经授权过
                            let userInfo1 = res.userInfo

                            wx.cloud.callFunction({
                                name: 'login',
                                complete: res => {
                                    db.collection('user').where({
                                        _openid: res.result.openid
                                    })
                                        .get({
                                            success: function (res) {
                                                // res.data 是包含以上定义的两条记录的数组
                                                if (res.data.length > 0) {
                                                    return
                                                } else {
                                                    console.log(userInfo1)

                                                    let userobj = {
                                                        nickName: userInfo1.nickName,
                                                        country: userInfo1.country,
                                                        ChatHead: userInfo1.avatarUrl
                                                    }

                                                    db.collection('user').add({
                                                        // data 字段表示需新增的 JSON 数据
                                                        data: userobj
                                                    })
                                                        .then(res => {
                                                        })
                                                }

                                            }
                                        })

                                }
                            })
                            if (res.userInfo.gender === 1) {
                                res.userInfo.gender = '帅气的小男孩'
                            } else {
                                res.userInfo.gender = '漂亮的小女生'
                            }
                            _that.setData({
                                userinfo: res.userInfo
                            })
                        }
                    })
                }
            }
        })


    }

})
