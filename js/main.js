$(document).ready(function(){
  var winW = $(window).innerWidth();
  var H1 = $(".history_con").innerHeight();
  console.log(H1);
  if(winW > 768) {
    ScrollTrigger.matchMedia({
      "(min-width: 769px)"(){
        $(".heritage_conlist").each(function(i){
          var H = $(this).find(".scroll_wrap").innerHeight() - 180;
          gsap.to($(this), {
            scrollTrigger: {
              trigger: $(this).find(".scroll_wrap"),
              // trigger: $(".heritage_conlist").eq(i).find(".heritage_inner"),
              start: "top-=140px top",
              // end: $(".history_wrap").eq(i).innerHeight() - $(".scroll_wrap").eq(i).innerHeight(),
              // end: $(window).innerHeight() - $(".history_wrap").eq(i).innerHeight(),
              end: "bottom " + H,
              endTrigger: $(this).find(".history_wrap"),
              // pin: $(".heritage_conlist").eq(i).find(".scroll_wrap"),
              pin: true,
              pinSpacing: false,
              markers: true,
              onUpdate(self){
                if(self.progress.toFixed(3) == 0) {
                  $(".heritage_conlist").eq(i).removeClass("onBg");
                }
                if(self.progress.toFixed(3) > 0.003) { 
                  $(".heritage_conlist").eq(i).addClass("onBg");
                }
                // console.log(self.progress.toFixed(3))
                if(self.progress.toFixed(3) > 0.2) {
                  $(".heritage_conlist").eq(i).addClass("onScroll");
                } else {
                  $(".heritage_conlist").eq(i).removeClass("onScroll");
                }
                if(self.progress.toFixed(3) > 0.35) {
                  $(".heritage_conlist").eq(i).addClass("active");
                } else {
                  $(".heritage_conlist").eq(i).removeClass("active");
                }
              }
            }
          })
  
          $(this).find(".heritage_img_list").each(function(e){
            $(window).on("scroll", function(){
              var imgSct = $(".heritage_conlist").eq(i).find(".scroll_wrap").offset().top;
              var txtSct = $(".heritage_conlist").eq(i).find(".plus_img").eq(e).offset().top;
              // console.log(txtSct);
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
      },
    })  
  }

  if(winW <= 768) {
    $(".heritage_conlist").removeClass("onBg");
    $(".heritage_conlist").removeClass("onScroll");
    $(".heritage_conlist").removeClass("active");
  }
  
});