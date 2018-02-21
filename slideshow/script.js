var

var currentSlide = 1;

var start = function()
{
  var markup = "";
  for(var i = 0; i < alllImages.length; i++) {
    var imgURL = alllImages[i];
    //markup = markup + "img src=" + imgURL + ">";
    markup = markup + "div class= 'slide' style='background-image:url(" + imgURL + ")'></div>";
  }

  $("#ssContainer").html(markup);

  var markup1 = " ";
  for(var i = 0; i < allImages.length; i++){
    markup1 = markup1 + '<button onclick="goToSlide(' + (i + 1)')"'
  }


  gotToSlide(1);
}

var goToSlide = function(n, d){
  d = d || 0;
  $("#ssContainer .slide").stop().fadeout(d);
  $("#ssContainer img:nth-of-type("+ n +")").stop().fadeIn(d);
  currentSlide = n;
}

var goNext = function(){
  var n= currentSlide + 1;
  if (n > alllImages.length){
    n = 1;
  }
  gotToSlide(n, 100);
}

}
