
$(document).ready(function(){
    $(".road").hide();
  $(".croseover").hover(function(){
      $(this).find(".road").toggle(400);
  });
  
  });
  $(".click0").click(function(){
      $(".hide0").slideToggle(1000);
      $(".show0").slideToggle(1200);
    });
  
    $(".click1").click(function(){
      $(".hide1").slideToggle(1000);
      $(".show1").slideToggle(1200);
    });
  
    $(".click2").click(function(){
      $(".hide2").slideToggle(1000);
      $(".show2").slideToggle(1200);
    });
  
    $("button").click(function(party) {
         var client = document.getElementById('nameDetail').value;
         alert('Thanks ' + ' we have received your message successful. ' + '!');
         party.preventDefault();
     });
    //  *************RESET FORM*****************
     $("button").on('click', function(){
       $('form').each(function(){
         this.reset();
       });
   });
   const express = require('express');
const session = require('express-session');
const compression = require('compression');
const RedisStore = require('connect-redis')(session);
const { errorHandler } = require('./utils/error-handler');

module.exports = (app, config) => {
  
  app.use(compression());
  app.set('views', 'app/views');
  app.set('view engine', 'ejs');
  app.use(express.static('public'));
  app.use(express.static(__dirname + '/public', {
      index: false,
      extensions: ['ejs', 'html']
  }));

  app.use(session({
    store: new RedisStore({
      host: config.redis.host,
      port: config.redis.port,
      ttl: config.redis.ttl,
      db: config.redis.db
    }),
    secret: config.redis.secret,
    resave: false,
    saveUninitialized: true
  }));
  require('./routes')(app, config);
  app.use(errorHandler)
}