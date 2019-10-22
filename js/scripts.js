$(document).ready(function() {
  $(".func").click(function(){
    $(".func-info").fadeToggle();
    $(".func1").fadeToggle();
  })

  $(".methods").click(function(){
    $(".methods-info").fadeToggle();
    $(".methods1").fadeToggle();
  })


  $(".arguments").click(function(){
    $(".arguments-info").fadeToggle();
    $(".arguments1").fadeToggle();
  })

  $(".strings").click(function(){
    $(".strings-info").fadeToggle();
    $(".strings1").fadeToggle();
  })

  $(".alerts").click(function(){
    $(".alerts-info").fadeToggle();
    $(".alerts1").fadeToggle();
  })


  $(".variables").click(function(){
    $(".variables-info").fadeToggle();
    $(".variables1").fadeToggle();
  })

  $(".jquery").click(function(){
    $(".jquery-info").fadeToggle();
    $(".jquery1").fadeToggle();
  })

  $(".comments").click(function(){
    $(".comments-info").fadeToggle();
    $(".comments1").fadeToggle();
  })

  $(".booleans").click(function(){
    $(".booleans-info").fadeToggle();
    $(".booleans1").fadeToggle();
  })
/*
  $(".true").click(function(){
    $(".lastpanel").removeClass();
    $(".lastpanel").addClass("green-background");
  })

  $(".false").click(function(){
    $(".lastpanel").removeClass();
    $(".lastpanel").addClass("red-background");
  })
*/

  $(".meow").click(function() {
    $("ul.cat-list").prepend("<li>Meow!</li>");
  });

  $(".bark").click(function() {
    $("ul.dog-list").prepend("<li>Bark!</li>");
  });
});
