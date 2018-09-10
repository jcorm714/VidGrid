let can = document.getElementById("c1");

var locations = {
  "area1":{"x":can.width/4,"y":can.height/4},
  "area2":{"x":can.width/2,"y":can.height/4},
  "area3":{"x":can.width * (3.0/4.0),"y":can.height/4},
  "area4":{"x":can.width,"y":can.height/4},
  "area5":{"x":can.width/4, "y": can.height/2},
  "area6":{"x":can.width/2, "y": can.height/2},
  "area7":{"x":can.width * (3.0/4.0), "y": can.height/2},
  "area8":{"x":can.width, "y": can.height/2},
  "area9":{"x":can.width/4, "y": can.height*(3.0/4.0)},
  "area10":{"x":can.width/2, "y": can.height*(3.0/4.0)},
  "area11":{"x":can.width *(3.0/4.0), "y": can.height*(3.0/4.0)},
  "area12":{"x":can.width, "y": can.height*(3.0/4.0)},
  "area13":{"x":can.width/4, "y": can.height},
  "area14":{"x":can.width/2, "y": can.height},
  "area15":{"x":can.width*(3.0/4,0), "y": can.height},
  "area16":{"x":can.width, "y": can.height}
};

function picLocation(x, y)
{
  for(key in locations)
  {
    if(x<key.x && y <key.y)
        return key;
  }
}
