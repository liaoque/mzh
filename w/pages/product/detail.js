// pages/product/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: 'vero moda夏季荷叶边连衣裙',
    moreDialog:{
      show: true,
      height: 0,
      down: ''
    },
    animationData: {},
    info:{
      images:[
        'https://img.alicdn.com/bao/uploaded/i2/TB1g4L_PFXXXXcyXVXXXXXXXXXX_!!0-item_pic.jpg_560x840Q50s50.jpg_.webp',
        'https://img.alicdn.com/bao/uploaded/i2/TB1g4L_PFXXXXcyXVXXXXXXXXXX_!!0-item_pic.jpg_560x840Q50s50.jpg_.webp'
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
    console.log(height, this.data.moreDialog.show)
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