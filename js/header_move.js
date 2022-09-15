$(function(){
    var menu = $(".menu li");
    var contents = $("#main > section");
      
        menu.click(function(e){
      e.preventDefault();
      var target = $(this);
      var index = target.index();
      var section = contents.eq(index);
      var offset = section.offset().top;
      $("html,body").animate({scrollTop:offset},600);
    });
})