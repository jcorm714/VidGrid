let canvas = document.getElementById('c1');
let ctx = canvas.getContext('2d');
let video = document.getElementById('video');
let button = document.querySelector("button");

$(function() {
  video.addEventListener('play', function() {
    let $this = this; //cache
    (function loop() {
      if (!$this.paused && !$this.ended) {
        ctx.drawImage($this, 0, 0);
        for(let i = 0; i < 4; i++)
        {
          drawLineVert("rgba(255,255,255,1)", canvas.width - canvas.width/4 * 1 * i);
          drawLineHorz("rgba(255,255,255,1)", canvas.heigth - canvas.height/4 * 1 * i);

        }
        setTimeout(loop, 1000 / 30); // drawing at 30fps
      }
    })();
  }, 0);
});

button.addEventListener("click", function(){
  video.play();
} );



function drawLineVert(color, pos)
{
  ctx.save();
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(pos, 0);
  ctx.lineTo(pos, canvas.height);
  ctx.stroke();
  ctx.restore();
}
function drawLineHorz(color, pos)
{
  ctx.save();
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(0, pos);
  ctx.lineTo(canvas.width, pos);
  ctx.stroke();
  ctx.restore();
}
