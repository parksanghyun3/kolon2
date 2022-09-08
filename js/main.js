$(document).ready(function(){
  var h = $(".heritage_conlist").outerHeight();
  var tl = gsap.timeline();
  // var txtH = $(".history_wrap").outerHeight();
  $(".heritage_conlist").each(function(i){
    tl.to($(".heritage_conlist").find(".scroll_wrap"), {
      scrollTrigger: {
        trigger: $(".heritage_conlist").eq(i).find(".heritage_inner"),
        start: "top top",
        // end: $(".history_wrap").eq(i).innerHeight() - $(".scroll_wrap").eq(i).innerHeight(),
        // end: $(window).innerHeight() - $(".history_wrap").eq(i).innerHeight(),
        end: "bottom-=100px 85%",
        endTrigger: $(".heritage_conlist").eq(i).find(".history_wrap"),
        pin: $(".heritage_conlist").eq(i).find(".scroll_wrap"),
        pinSpacing: false,
        markers: true,
        onUpdate(self){
          if(self.progress.toFixed(3) == 0) {
            $(".heritage_conlist").eq(i).removeClass("onBg");
          }
  
          if(self.progress.toFixed(3) > 0.003) { 
            $(".heritage_conlist").eq(i).addClass("onBg");
          }
  
          console.log(self.progress.toFixed(3))
          if(self.progress.toFixed(3) > 0.2) {
            // console.log("지금!");
            $(".heritage_conlist").eq(i).addClass("onScroll");
          } else {
            $(".heritage_conlist").eq(i).removeClass("onScroll");
          }
  
          if(self.progress.toFixed(3) > 0.35) {
            $(".heritage_conlist").eq(i).addClass("active");
            // console.log("나온다!");
          } else {
            $(".heritage_conlist").eq(i).removeClass("active");
          }
  
        }
      }
    })

    $(".heritage_conlist").eq(i).find(".heritage_img_list").each(function(e){
      $(window).on("scroll", function(){
        var imgSct = $(".heritage_conlist").eq(i).find(".scroll_wrap").offset().top;
        var txtSct = $(".heritage_conlist").eq(i).find(".plus_img").eq(e).offset().top;
        // var txtSct2 = $(".heritage_conlist").eq(i+1).find(".history_list").eq(e).offset().top;
  
        if(imgSct + 300 > txtSct) {
          $(".heritage_conlist").eq(i).find(".heritage_img_list").eq(e).fadeIn();
          $(".heritage_conlist").eq(i).find(".plus_img").eq(e).addClass("on");
          $(".heritage_conlist").eq(i).find(".plus_img").eq(e-1).removeClass("on");
        } else {
          $(".heritage_conlist").eq(i).find(".heritage_img_list").eq(e).fadeOut();
          $(".heritage_conlist").eq(i).find(".plus_img").eq(e).removeClass("on");
        }
      });
    });

  })


  
});