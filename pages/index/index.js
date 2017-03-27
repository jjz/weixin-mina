//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  onFlexClick: function () {
    wx.navigateTo({
      url: '../flex/flex'
    })
  },
  onIconClick: function () {
    wx.navigateTo({
      url: '../icon/icon'
    })
  },
  onTextClick: function () {
    wx.navigateTo({
      url: "../text/text"
    })
  },
  onProgressClick: function () {
    wx.navigateTo({
      url: "../progress/progress"
    })
  },
  onCalculator: function () {
    wx.navigateTo({
      url: "../calculator/calculator"
    })
  },
  onDataClick:function(){
    wx.navigateTo({
      url: '../data/data',
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  onPullDownRefresh: function() {
  
  },onReachBottom: function() {
    // Do something when page reach bottom.
  },
  onShareAppMessage: function () {
   // return custom share data when user share.
  },
})
