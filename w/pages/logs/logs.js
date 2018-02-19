Page({
  onReady() {
    this.videoCtx = wx.createVideoContext('myVideo')
    //this.videoCtx.poster = "http://img95.699pic.com/video_cover/66/40/10/QjD7EphGefWy1517664010.jpg"
  },
  play() {
    this.videoCtx.play()
  },
  pause() {
    this.videoCtx.pause()
  }
})