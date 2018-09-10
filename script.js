let canvas = document.getElementById('c1');
let ctx = canvas.getContext('2d');
let video = document.getElementById('video');
let button = document.querySelector("button");
let order = Array(16).fill(0,0,16);
order.foreach()
console.log(order);
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


///<summary>draws a line vertically across a canvas</summary>
///<param name = "color">the color which the line is</param>
///<param name = "pos"> the position to which the line starts</param>
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

///<summary>draws a line horizontally across a canvas</summary>
///<param name = "color">the color which the line is</param>
///<param name = "pos"> the position to which the line starts</param>
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


///<summary>Returns a canvas which can be used draw an image onto another</summary>
///<returns>canvas</returns>
///<param name = "img">an image to grab a region of </param>
///<param name = "x">the x coordinate to start at for the image</param>
///<param name = "y">the y coordinate to start at for the image</param>
///<param name = "height">the distance the crop covers vertically</param>
///<param name = "width">the distance the crop covers vertically</param>
function getRegion(img, x, y, height, width)
{

  let canvas2 = document.getElementById("c2");
  let ctx2 = canvas.getContext("3d");
  canvas2.width = width;
  canvas2.height = height;

  ctx.drawImage(img, x, y, width, height, 0 , 0, width, height);
  return canvas2;
}
function randomNum(max)
{
    return Math.floor(Math.random()*max) + 1;
}
