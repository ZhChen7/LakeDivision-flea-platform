Page({
  data: {
    cateItems: [   //展示的数据
      {
        cate_id: 1,
        cate_name: "手机",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '苹果',
              image: "https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_apple_ios-128.png"
            },
            {
              child_id: 2,
              name: '小米',
              image: "http://android-artworks.25pp.com/fs08/2017/10/09/1/110_40ff77a971b1a0155f91381a17d295f1_con.png"
            },
            {
              child_id: 3,
              name: '华为',
              image: "http://hbimg.b0.upaiyun.com/6a4ffb8a256c9cab1bab1e29a213891749539c2d249a6-89BqpS_fw658"
            },
            {
              child_id: 4,
              name: '谷歌',
              image: "https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_google-128.png"
            },
            {
              child_id: 5,
              name: '荣耀',
              image: "http://y.zdmimg.com/201812/15/5c1475dab3d2e376.jpg_d320.jpg"
            },
            {
              child_id: 6,
              name: 'vivo',
              image: "http://img4.imgtn.bdimg.com/it/u=3434869589,1704261624&fm=214&gp=0.jpg"
            },
            {
              child_id: 7,
              name: 'OPPO',
              image: "http://5b0988e595225.cdn.sohucs.com/images/20190313/dc2097c2fab0434bbdfec50dc62b9db9.png"
            },
          ]
      },
      {
        cate_id: 2,
        cate_name: "农用物资",
        ishaveChild: false,
        children:[]
      },
      {
        cate_id: 3,
        cate_name: "生鲜水果",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '草莓',
              image: "https://cdn0.iconfinder.com/data/icons/fruit-and-vegetable-15/200/strawberry_red_fruit_vegetable-128.png"
            },
            {
              child_id: 2,
              name: '菠萝',
              image: "https://cdn0.iconfinder.com/data/icons/fruit-and-vegetable-15/200/yellow_pinaple_fruit_vegetable-128.png"
            },
            {
              child_id: 3,
              name: '葡萄',
              image: "https://cdn0.iconfinder.com/data/icons/fruit-and-vegetable-15/200/purple_grave_fruit_vegetable-128.png"
            },
            {
              child_id: 4,
              name: '猕猴桃',
              image: "https://cdn0.iconfinder.com/data/icons/fruit-and-vegetable-15/200/green_kiwi_fruit_vegetable-128.png"
            }
          ]
      },
      {
        cate_id: 4,
        cate_name: "童鞋",
        ishaveChild: false,
        children:[]
      },
      {
        cate_id: 5,
        cate_name: "园艺植物",
        ishaveChild: false,
        children:[]
      },
      {
        cate_id: 6,
        cate_name: "五金工具",
        ishaveChild: false,
        children:[]
      },
      {
        cate_id: 7,
        cate_name: "游戏",
        ishaveChild: true,  //改为false则显示暂无数据
        children:
          [
            {
              child_id: 1,
              name: 'LOL',
              image: "http://hbimg.b0.upaiyun.com/1f2f78f3dbd15798e45ec009a3e850cc51ca984520dab-DnN5Zj_fw658"
            },
            {
              child_id: 2,
              name: '绝地求生',
              image: "http://img.zcool.cn/community/017e6d5b6a945fa801206a35a2770f.jpg@1280w_1l_2o_100sh.jpg"
            },
            {
              child_id: 3,
              name: '王者荣耀',
              image: "http://img.zcool.cn/community/0132c358122b50a84a0d304f275b50.png"
            },
            {
              child_id: 4,
              name: 'NBA2k',
              image: "http://img4.18183.duoku.com/uploads/allimg/160418/33-16041QUJ3.jpg"
            }
          ]
      },
      {
        cate_id: 8,
        cate_name: "电子零件",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 9,
        cate_name: "动漫/周边",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 10,
        cate_name: "图书",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 11,
        cate_name: "宠物/用品",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 12,
        cate_name: "网络设备",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 13,
        cate_name: "服饰配件",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 14,
        cate_name: "家装/建材",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 15,
        cate_name: "家纺布艺",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 16,
        cate_name: "珠宝首饰",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 17,
        cate_name: "钟表眼镜",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 18,
        cate_name: "古董收藏",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 19,
        cate_name: "女士鞋靴",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 20,
        cate_name: "办公用品",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 21,
        cate_name: "游戏设备",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 22,
        cate_name: "运动户外",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 23,
        cate_name: "实体卡/劵/票等",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 24,
        cate_name: "工艺礼品",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 25,
        cate_name: "玩具乐器",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 26,
        cate_name: "母婴用品",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 27,
        cate_name: "童装",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 28,
        cate_name: "女士服装",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 29,
        cate_name: "家具",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 30,
        cate_name: "居家日用",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 31,
        cate_name: "家用电器",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 32,
        cate_name: "个护美妆",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 33,
        cate_name: "保健护理",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 34,
        cate_name: "摩托车/用品",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 35,
        cate_name: "自行车/用品",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 36,
        cate_name: "3c数码",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 37,
        cate_name: "男士服装",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 38,
        cate_name: "其他闲置",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 39,
        cate_name: "音像",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 40,
        cate_name: "表演类门票",
        ishaveChild: false,
        children: []
      },
    ],
    curNav: 1,    //控制当前那个按钮点亮
    curIndex: 0  //根据此参数来拿第几个分类的数据
  },

  //事件处理函数  
  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      curIndex: index
    })
  }
})  
