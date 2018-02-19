// pages/product/types.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "current": 0,
    "animation" :0,
    "animationData": {},
    "toView":'go0',
    "typeList": [
      {
        'id': 1,
        'title': '衣服',
        'list': [
          {
            "url": "/pages/product/list?id=60",
            "title": "夹克",
            "logo": "https://a3.vimage1.com/upload/goadmin/2017/11/13/48/15105421512781.png"
          },
          {
            "url": "/pages/product/list?id=61",
            "title": "风衣",
            "openType": "",
            "logo": "https://a3.vimage1.com/upload/goadmin/2017/10/23/82/15087476108290.jpg"
          }/*, {
            "url": "/pages/product/list",
            "title": "T恤",
            "logo": "https://a3.vimage1.com/upload/goadmin/2017/08/02/78/15016695733849.png"
          },
          {
            "url": "/pages/product/list?id=2",
            "title": "衬衫",
            "openType": "",
            "logo": "https://a4.vimage1.com/upload/category/2017/06/15/137/2a1ac06f-3505-45ee-a944-8bf133915acf.png"
          }, {
            "url": "/pages/product/list",
            "title": "T恤",
            "logo": "https://a3.vimage1.com/upload/goadmin/2017/08/02/78/15016695733849.png"
          },
          {
            "url": "/pages/product/list?id=2",
            "title": "衬衫",
            "openType": "",
            "logo": "https://a4.vimage1.com/upload/category/2017/06/15/137/2a1ac06f-3505-45ee-a944-8bf133915acf.png"
          }*/
        ]
      },
      {
        'id': 2,
        'title': '裤子',
        'list': [
          {
            "url": "/pages/product/list?id=2",
            "title": "休闲裤",
            "logo": "https://a4.vimage1.com/upload/category/2017/08/02/98/b6171eb1-5106-46d3-8b6b-87fbcbb6f032.png"
          },
          {
            "url": "/pages/product/list?id=2",
            "title": "西裤",
            "openType": "",
            "logo": "https://a4.vimage1.com/upload/category/2017/08/02/76/6cee160a-c0bb-4e6d-8395-6217ca122292.png"
          }
        ]
      },
      {
        'id': 3,
        'title': '套装',
        'list': [
          {
            "url": "/pages/product/list?id=1",
            "title": "西装",
            "logo": "https://a3.vimage1.com/upload/goadmin/2017/06/26/174/14984729305460.png"
          }
        ]
      },
      {
        'id': 4,
        'title': '其他',
        'list': [
          {
            "url": "/pages/product/list?id=1",
            "title": "皮带",
            "logo": "https://a4.vimage1.com/upload/category/2017/04/12/19/5275620a-a3c2-461d-ab8b-99e5821fc5f4.jpg"
          },
          {
            "url": "/pages/product/list?id=2",
            "title": "皮夹",
            "openType": "",
            "logo": "https://a3.vimage1.com/upload/goadmin/2017/08/05/142/15019020644282.jpg"
          },
          {
            "url": "/pages/product/list?id=2",
            "title": "领带",
            "openType": "",
            "logo": "https://a4.vimage1.com/upload/category/2017/08/03/166/4c028d73-9677-4e89-a674-9e9741d486c5.png"
          }
        ]
      }
    ]
  },

  tapType: function (event) {
    var index = event.currentTarget.dataset.bannerIndex;
    if (index == this.data.current) {
      return;
    }
    var id = 'go' + index;
    this.setData({
      current: index,
      toView: id
    });

    
    // var query = wx.createSelectorQuery()
    // query.select(id).boundingClientRect(function(res){
    //   console.log(res, this)
    
    //   this.animation.translateY(-res.top).step();
    //   this.setData({
    //     animationData: this.animation.export()
    //   })

    // }.bind(this));

    // query.select(id).fields( {
    //   dataset: true,
    //   size: true,
    //   rect: true,
    //   scrollOffset: true,
    //   properties: ['scrollX', 'scrollY']
      // this.animation.translateY(-res.top).step();
      // this.setData({
      //   animationData: this.animation.export()
      // })



    // }, function (res) {
    //   console.log(res, this)
    // }.bind(this)
    // );
    // query.exec(function (res) {
    //   console.log(res, this)
    //   //       this.animation.translateY(-res.top).step();
    //   //       this.setData({
    //   //         animationData: this.animation.export()
    //   //       })

    // });

    // query.exec();

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var animation = wx.createAnimation({
    //   duration: 1000,
    //   timingFunction: "ease",
    //   delay: 0
    // })
    // this.animation = animation;
    var query = wx.createSelectorQuery()
    query.select('.product-type').boundingClientRect(function (res) {
    //  console.log(res)
    }).exec();
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