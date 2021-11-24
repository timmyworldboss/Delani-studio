$(document).ready(function() {
    $("#contact form").submit(function(event) {
      var fullName = $("input#name").val();
      var email = $("input#mail").val();
      var text = $("textarea#textarea").val();
  
      $(".name").text(fullName);
      $(".mail").text(email);
      $(".text").text(text);
  
      if (fullName == "" || email == "") {
        alert("Please fill in all your details");
      } else if (text == "") {
        alert("Kindly write a message");
      } else {
        alert(
          fullName +
            " we have received your message. Thank you for reaching out to us."
        );
      }
      
      event.preventDefault();
    });
  });
  
  $("#design").click(function() {
    $("#design p").toggle();
    $("#design img").toggle();
  });
  
  $("#dev").click(function() {
    $("#dev p").toggle();
    $("#dev img").toggle();
  });
  
  $("#product").click(function() {
    $("#product p").toggle();
    $("#product img").toggle();
  });
  
  $(".col-md-3 #w1").hover(function() {
    $("#c1").toggle();
  });
  $(".col-md-3 #w2").hover(function() {
    $("#c2").toggle();
  });
  $(".col-md-3 #w3").hover(function() {
    $("#c3").toggle();
  });
  $(".col-md-3 #w4").hover(function() {
    $("#c4").toggle();
  });
  $(".col-md-3 #w5").hover(function() {
    $("#c5").toggle();
  });
  $(".col-md-3 #w6").hover(function() {
    $("#c6").toggle();
  });
  $(".col-md-3 #w7").hover(function() {
    $("#c7").toggle();
  });
  $(".col-md-3 #w8").hover(function() {
    $("#c8").toggle();
  });