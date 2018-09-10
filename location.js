let canvas = document.getElementById("c1");

var locations = [
  "area1":{"x":canvas.width/4,"y":canvas.height/4;},
  "area2":{"x":canvas.width/2,"y":canvas.height/4;},
  "area3":{"x":canvas.width * (3.0/4.0),"y":canvas.height/4;},
  "area4":{"x":canvas.width,"y":canvas.height/4;},
  "area5":{"x":canvas.width/4, "y": canvas.height/2},
  "area6":{"x":canvas.width/2, "y": canvas.height/2},
  "area7":{"x":canvas.width * (3.0/4.0), "y": canvas.height/2},
  "area8":{"x":canvas.width, "y": canvas.height/2},
  "area9":{"x":canvas.width/4, "y": canvas.height*(3.0/4.0)},
  "area10":{"x":canvas.width/2, "y": canvas.height*(3.0/4.0)},
  "area11":{"x":canvas.width *(3.0/4.0), "y": canvas.height*(3.0/4.0)},
  "area12":{"x":canvas.width, "y": canvas.height*(3.0/4.0)},
  "area13":{"x":canvas.width/4, "y": canvas.height},
  "area14":{"x":canvas.width/2, "y": canvas.height},
  "area15":{"x":canvas.width*(3.0/4,0), "y": canvas.height},
  "area16":{"x":canvas.width, "y": canvas.height}
];

function picLocation(x, y)
{
  for key in locations
  {
    if(x<key.x && y <key.y)
        return key;
  }
}
