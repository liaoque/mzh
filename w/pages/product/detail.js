// pages/product/detail.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    moreDialog:{
      show: true,
      height: 0,
      down: ''
    },
    type: {
      isIos: false,
      name: ''
    },
    animationData: {},
    info:{
      images:[
        // 'https://img.alicdn.com/bao/uploaded/i2/TB1g4L_PFXXXXcyXVXXXXXXXXXX_!!0-item_pic.jpg_560x840Q50s50.jpg_.webp',
        // 'https://img.alicdn.com/bao/uploaded/i2/TB1g4L_PFXXXXcyXVXXXXXXXXXX_!!0-item_pic.jpg_560x840Q50s50.jpg_.webp'
      ],
    }
  },

  moreContent: function(event){
    var show =true, down='', height = '0';
    if (this.data.moreDialog.show){
      show = false;
      down = 'down';
      height = this.data.moreDialog.height ;
    }
    this.animation.height(height).step()
    this.setData({
      animationData: this.animation.export(),
      moreDialog: {
        down: down,
        show:show,
        height: this.data.moreDialog.height 
      }
    })

   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;
    console.log(this)
    wx.request({
      url: app.getBaseUrl() + '/product/info/' + options.id, //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        var imageList = [];
        for (var i = 0; i < res.data.images.length; i++) {
          imageList.push(app.getImageUrl() + '/' + res.data.images[i].image );
        }
        wx.setNavigationBarTitle({
          title: res.data.name
        })
        self.setData({
          title: res.data.name,
          info: {
            images: imageList
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var self = this;
    wx.getSystemInfo({
      success: function (res) {
        self.setData({
          type: {
            isIos: (res.system + '').substring(0, 3).toLocaleLowerCase() == 'ios',
            name: res.system
          }
        });
      },
      fail: function (error) {
        console.log(error)
      }
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var animation = wx.createAnimation();
    this.animation = animation;
    this.animation.height(0).step()
    this.setData({
      animationData: this.animation.export()
    })
    wx.createSelectorQuery().select('#moreDialogcCntent').boundingClientRect(function (rect) {
      this.data.moreDialog.height = rect.height;
    }.bind(this)).exec()
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