// pages/product/detail.js
var app = getApp()
import utilRequest from '../../utils/request.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '商品列表',
    type: {
      isIos: false,
      name: ''
    },
    list: [

    ]
  },

  getMore: function (event) {
    console.log(event)
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;
    wx.request({
      url: utilRequest.productListUrl(options.id), //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        var list = [];
        for (var i = 0; i < res.data.length; i++) {
          list.push({
            id: res.data[i].product_id,
            title: res.data[i].name,
            image: app.getImageUrl() + '/' + res.data[i].image ,
          });
        }
        self.setData({
          list: list
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
      success: function(res){
        self.setData({
          type: {
            isIos: (res.system + '').substring(0, 3).toLocaleLowerCase() == 'ios',
            name: res.system
          }
        });
      },
      fail: function(error){
        console.log(error)
      }
    });
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