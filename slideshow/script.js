var allImages = [];

var currentSlide = 1;
var startEmbed = function()
{
  allImages = location.hash.replace("#","").split(",");
  startAux();
}

var start = function()
{
  allImages = [
    'https://wallpaperscraft.com/image/starry_sky_milky_way_stars_glitter_space_118653_1920x1080.jpg',
    'https://wallpaperscraft.com/image/stars_space_sky_glitter_116409_1920x1080.jpg',
    'https://wallpaperscraft.com/image/starry_sky_space_galaxy_118132_1920x1080.jpg',
    'https://wallpaperscraft.com/image/starry_sky_galaxy_universe_sky_night_118591_1920x1080.jpg'
  ];
    startAux();
  }

  function startAux()
  {
    var markup = "";
    for(var i = 0; i < allImages.length; i++) {
      var imgURL = allImages[i];
      //markup = markup + "img src=" + imgURL + ">";
      markup = markup + "<div class='slide' style='background-image:url(" + imgURL + ")'></div>";
  }

/*
var 1 = 0;
while(i < allImages.length) {
  var imgURL = allImages[i];
  markup = markup + "<div class='slide' style ='background-image:url(" + imgURL + ")'></div>";
  i = i + 1;
}
*/

  $("#ssContainer").html(markup);

  var markup1 = "";
  for(var i = 0; i < allImages.length; i++){
    markup1 = markup1 + '<button onclick="goToSlide(' + (i + 1) + ',1000)">' + (i + 1) + '</button>';
  }
  $("#numContainer").html(markup1);


  goToSlide(1, 0);
}

var ani = "swipe";

var goToSlide = function(n, d)
{
  d = d || 0;
  if(ani === "fade"){
    $("#ssContainer .slide").stop().fadeout(d);
    $("#ssContainer .slide:nth-of-type(" + n + ")").stop().fadeIn(d);
  }
  else{
    if(n > currentSlide){
      $("#ssContainer .slide").stop()animate({"margin-left": -100%}, d);
      $("#ssContainer .slide:nth-of-type(" + currentSlide + ")").stop().animate({"margin-left":"-100%", "opacity":0}, d);
      $("#ssContainer .slide:nth-of-type(" + n + ")").stop().css({"opacity":"0"}).css({"margin-left":"100%"}).animate({"opacity":"1","margin-left":"0%"}, d);
    }
    else{
      $("#ssContainer .slide").stop()animate({"margin-left": -100%}, d);
      $("#ssContainer .slide:nth-of-type(" + currentSlide + ")").stop().animate({"margin-left":"100%", "opacity":0}, d);
      $("#ssContainer .slide:nth-of-type(" + n + ")").stop().css({"opacity":0}).css({"margin-left":"-100%"}).animate({"opacity":1,"margin-left":"0%"}, d);
    }
  }

  $("#numContainer button").removeClass("active");
  $("#numContainer button:nth-of-type(" + n +")").addClass("active");

  currentSlide = n;
}

var goNext = function()
{
  var n = currentSlide + 1;
  if (n > allImages.length){
    n = 1;
  }
  gotToSlide(n, 1000);
}

var goPrev = fuction()
{
  var n = currentSlide - 1;
  if (n < 1) {
    n = allImages.length;
  }
  goToSlide(n, 1000);
}
