$(document).ready(function(){
    //this fuction adds smooth scrolling to html
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
  });
  
  $(document).ready(function() {
    $('#contactUs form').submit(function() {
      var nameInput = $('input#name').val();
      var emailInput = $('input#email').val();
      var mrssageInput = $('input#message').val();
      alert('Thank you '+ nameInput + ', we have received your message!')
    //  document.getElementById("#contactUs").reset();
      event.preventDefault();
    });
  });
  
  //what we do click toggles
  $(document).ready(function() {
    $('#designIcon').click(function(){
      $('#designIcon img').toggle();
      $('#designP').toggle();
    });
  });
  
  $(document).ready(function() {
    $('#developmentIcon').click(function(){
      $('#developmentIcon img').toggle();
      $('#developmentP').toggle();
    });
  });
  
  $(document).ready(function() {
    $('#productManagementIcon').click(function(){
      $('#productManagementIcon img').toggle();
      $('#productManagementP').toggle();
    });
  });
  
  //portfolio hover toggles
  $(document).ready(function() {
    $('#blackProject').hover(function(){
      $('#blackProject').toggle();
      $('#blackProjectH2').toggle();
    });
  });
  
  $(document).ready(function() {
    $('#haveAGoodDayProject').hover(function(){
      $('#haveAGoodDayProject').toggle();
      $('#haveAGoodDayProjectH2').toggle();
    });
  });
  
  $(document).ready(function() {
    $('#mightyOntarioProject').hover(function(){
      $('#mightyOntarioProject').toggle();
      $('#mightyOntarioProjectH2').toggle();
    });
  });
  
  $(document).ready(function() {
    $('#buttonStylesProject').hover(function(){
      $('#buttonStylesProject').toggle();
      $('#buttonStylesProjectH2').toggle();
    });
  });
  
  $(document).ready(function() {
    $('#materialImageProject').hover(function(){
      $('#materialImageProject').toggle();
      $('#materialImageProjectH2').toggle();
    });
  });
  
  $(document).ready(function() {
    $('#burnedLogoProject').hover(function(){
      $('#burnedLogoProject').toggle();
      $('#burnedLogoProjectH2').toggle();
    });
  });
  
  $(document).ready(function() {
    $('#jimCarreyProject').hover(function(){
      $('#jimCarreyProject').toggle();
      $('#jimCarreyProjectH2').toggle();
    });
  });
  
  $(document).ready(function() {
    $('#baileyWonderProject').hover(function(){
      $('#baileyWonderProject').toggle();
      $('#baileyWonderProjectH2').toggle();
    });
  });