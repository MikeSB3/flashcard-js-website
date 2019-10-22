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







  $(".true").click(function(){
    $(".panel-color").css("background", "#CDE7A9");

  })

  $(".false").click(function(){
    $(".panel-color").css("background", "#F3C23D");

  })












  $(".meow").click(function() {
    $("ul.cat-list").prepend("<li>Meow!</li>");

    $("ul").children("li").last().click(function(){
        $(this).remove();
    })
    $(".cat-list").before("<h4>Im a kitty cat</h4>")
  });

  $(".bark").click(function() {
    $(".dog-list").after('<p>Dogs are better</p>').first();
    $("ul.dog-list").prepend("<li>Bark!</li>");

    $("ul").children("li").last().click(function(){
        $(this).remove();
  });

  });
  $(".show").click(function() {
    $(".bark").before( $ (".spoon").fadeIn());
  });

  $(".rem").click(function(){
    $(".spoon").fadeOut();
  });

  $("#formOne").submit(function(event){
    var exampleInputEmail1Input = $("input#exampleInputEmail1").val();

    $(".exampleInputEmail1").text(exampleInputEmail1Input);
    $("#story").show();

    event.preventDefault();
  })

  $("#maroon").click(function(){
    $("body").removeClass();
    $("body").addClass("maroon");
    $("#hi5").toggle();
    $("#purp").hide();
    $("#mongoose").hide();
  });

  $("#chartruse").click(function(){
    $("body").removeClass();
    $("body").addClass("chartruse");
    $("#mongoose").toggle();
    $("#hi5").hide();
    $("#purp").hide();
  })

  $("#amethyst").click(function(){
    $("body").removeClass();
    $("body").addClass("amethyst");
    $("#purp").toggle();
    $("#hi5").hide();
    $("#mongoose").hide();
  })

});
