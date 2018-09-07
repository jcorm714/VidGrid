

var vidProcess;

vidProcess.Load = function load() {
  this.video = getElementById('video');
  this.c1 = document.getElementById('c1');
  this.ctx1 = this.c1.getContext('2s');
  let self = this;
  this.video.addEventListener("play", function(){
    self.width = self.video.Width/2;
    self.height = self.video.Height/2;
  })
}
