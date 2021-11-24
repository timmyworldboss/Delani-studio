
$(document).ready(function () {
  $("#des,#design").click(function () {
      $(".hide0").toggle();
      $("#design").toggle();
  });
  $("#dev,#development").click(function () {
      $(".hide1").toggle();
      $("#development").toggle();
  });
  $("#prod,#product").click(function () {
      $(".hide2").toggle();
      $("#product").toggle();
  });
  $("#row1").hover(function () {
      $(".portfolio1").css({"opacity": "0.2", "transition": "2s"});
      $("#text1").show();

  }, function () {
      $(".portfolio1").css("opacity", "1");
      $("#text1").hide();
  });
  $("#row2").hover(function () {
      $(".portfolio2").css({"opacity": "0.2", "transition": "2s"});
      $("#text2").show();

  }, function () {
      $(".portfolio2").css("opacity", "1");
      $("#text2").hide();
  });
  $("#row3").hover(function () {
      $(".portfolio3").css({"opacity": "0.2", "transition": "2s"});
      $("#text3").show();

  }, function () {
      $(".portfolio3").css("opacity", "1");
      $("#text3").hide();
  });
  $("#row4").hover(function () {
      $(".portfolio4").css({"opacity": "0.2", "transition": "2s"});
      $("#text4").show();

  }, function () {
      $(".portfolio4").css("opacity", "1");
      $("#text4").hide();
  });
  $("#row5").hover(function () {
      $(".portfolio5").css({"opacity": "0.2", "transition": "2s"});
      $("#text5").show();

  }, function () {
      $(".portfolio5").css("opacity", "1");
      $("#text5").hide();
  });
  $("#row6").hover(function () {
      $(".portfolio6").css({"opacity": "0.2", "transition": "2s"});
      $("#text6").show();

  }, function () {
      $(".portfolio6").css("opacity", "1");
      $("#text6").hide();
  });
  $("#row7").hover(function () {
      $(".portfolio7").css({"opacity": "0.2", "transition": "2s"});
      $("#text7").show();

  }, function () {
      $(".portfolio7").css("opacity", "1");
      $("#text7").hide();
  });
  $("#row8").hover(function () {
      $(".portfolio8").css({"opacity": "0.2", "transition": "s"});
      $("#text8").show();

  }, function () {
      $(".portfolio8").css("opacity", "1");
      $("#text8").hide();
  });

});
var submission = function () {
  var email = document.getElementById("email")
  if (email == "") {
      alert("")
  } else {
      alert(' Your message has been received. Thank you for reaching out to us.')
  }
}

