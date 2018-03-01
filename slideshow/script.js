var

var currentSlide = 1;

var start = function()
{
  var markup = "";
  for(var i = 0; i < alllImages.length; i++) {
    var imgURL = alllImages[i];
    //markup = markup + "img src=" + imgURL + ">";
    markup = markup + "<div class= 'slide' style='background-image:url(" + imgURL + ")'></div>";
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

  var markup1 = " ";
  for(var i = 0; i < allImages.length; i++){
    markup1 = markup1 + '<button onclick="goToSlide(' + (i + 1) + ',1000)">' + (i + 1) + '</button>';
  }
  $("numContainer").html(markup);

  gotToSlide(1, 0);
}

var goToSlide = function(n, d)
{
  d = d || 0;
  $("#ssContainer .slide").stop().fadeout(d);
  $("#ssContainer img:nth-of-type(" + n + ")").stop().fadeIn(d);

  $("#numContainer button").removeClass("active");
  $("#numContainer button:nth-of-type(" + n +")").addClass("active");

  currentSlide = n;
}

var goNext = function()
{
  var n= currentSlide + 1;
  if (n > alllImages.length){
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
