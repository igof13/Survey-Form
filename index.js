
$(document).ready(function(){

    $("button").on("mouseover", function(){
      $("p, label").css({
        "color": "red"
    });
    });

    $("button").on("click", function(){
        $("button").replaceWith("<button class='submit-btn mt-5 mb-4' type='submit'>Good bye</button>");
    });

    
  });