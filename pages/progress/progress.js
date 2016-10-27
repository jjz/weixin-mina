Page( {
  data: {
    // text:"这是一个页面"
    percent: 0
  },
  onLoad: function( options ) {
    // 页面初始化 options为页面跳转所带来的参数
    this._updatePercent();

  },
  onReady: function() {
    // 页面渲染完成
  },
  onShow: function() {
    // 页面显示
  },
  onHide: function() {
    // 页面隐藏
  },
  onUnload: function() {
    // 页面关闭
  },
  _updatePercent: function() {
    let _self = this;
    setTimeout( function() {
      let percent = _self.data.percent;
      if( percent < 100 ) {
        percent = percent + 5
        _self.setData( {
          percent: percent
        })
        _self._updatePercent()
      }
    }, 1000 );


  }
})