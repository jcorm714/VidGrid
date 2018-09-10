let canvas = document.getElementById('c1');
let ctx = canvas.getContext('2d');
let video = document.getElementById('video');
let button = document.querySelector("button");

$(function() {
  video.addEventListener('play', function() {
    let $this = this;
    (function loop() {
      if (!$this.paused && !$this.ended) {

        ctx.drawImage($this, 0, 0);
        for(let i = 0; i < 4; i++)
        {
          drawLineVert("rgba(255,255,255,1)", canvas.width - canvas.width/4 * i);
          drawLineHorz("rgba(255,255,255,1)", canvas.height- canvas.height/4 * i);
          
        }
        setTimeout(loop, 1000 / 30);
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
function getRegion(img, x, y, height, width)
{
  let canvas2 = document.getElementById("c2");
  let ctx2 = canvas.getContext("3d");
  canvas2.width = width;
  canvas2.height = height;

  ctx.drawImage(img, x, y, width, height, 0 , 0, width, height);
  return canvas2;
}
