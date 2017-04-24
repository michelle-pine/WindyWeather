var c1 = new Cloud(250, 12);
var c2 = new Cloud(12, 93);
var c3 = new Cloud(560, 150);
var c4 = new Cloud(800, 130);
var c5 = new Cloud(500, 30);
var c6 = new Cloud(1000, 100);
var c7 = new Cloud(700, 5);
var c8 = new Cloud(1000, 0);
var c9 = new Cloud(900, 20);
var c10 = new Cloud(-30, 20);

//to represent the qualities of a cloud
function Cloud(ax, ay) {
  
    this.xval = Math.floor(ax);
    this.yval = Math.floor(ay);
  
  this.updateX = function() {
    this.xval = this.xval + num/8;
  }
  
  this.getX = function() {
    return this.xval;
  }
  
  this.displayCloud = function() {
    image(cloud1, this.xval, this.yval);
  }
  
  this.displayCloud2 = function() {
    image(cloud2, this.xval, this.yval);
  }
    
  this.getY = function() {
    return this.yval;
  }
  
  this.backInBounds = function() {
    if (this.xval > 1024) {
      this.xval = -300;
    }
  }
  
}

//shows all the created clouds
function showClouds() {
    updateClouds(c1, true);
    updateClouds(c2, false);
    updateClouds(c3, true);
    updateClouds(c4, false);
    updateClouds(c5, true);
    updateClouds(c6, false);
    updateClouds(c7, true);
    updateClouds(c8, false);
    updateClouds(c9, true);
    updateClouds(c10, false);
}

//updates an individual cloud
function updateClouds(c, first) {
  if (first) {
    c.updateX();
    c.backInBounds();
    c.displayCloud();
  }
  else {
    c.updateX();
    c.backInBounds();
    c.displayCloud2();
  }
}