$(document).ready(function(){
  var h = $(".info_wrap").outerHeight();
  var h2 = $(".history_wrap").outerHeight();
  var h3 = $(".info_wrap").outerHeight();
  var h4 = $(".scroll_wrap").outerHeight();
  var height = h3 + h4;
  var tl = gsap.timeline();
  tl.to(".scroll_wrap", {
    scrollTrigger: {
      trigger: ".scroll_wrap",
      start: "-30% top",
      end: height + " 30%",
      pin: ".scroll_wrap",
      pinSpacing: false,
      markers: true,
      onUpdate(self){
        if(self.progress.toFixed(3) == 0) {
          $(".heritage_conlist").removeClass("onBg");
        }

        if(self.progress.toFixed(3) > 0.003) { 
          $(".heritage_conlist").addClass("onBg");
        }

        console.log(self.progress.toFixed(3))
        if(self.progress.toFixed(3) > 0.2) {
          console.log("지금!");
          $(".heritage_conlist").addClass("onScroll");
        } else {
          $(".heritage_conlist").removeClass("onScroll");
        }

        if(self.progress.toFixed(3) > 0.35) {
          $(".heritage_conlist").addClass("active");
          console.log("나온다!");
        } else {
          $(".heritage_conlist").removeClass("active");
        }

      }
    }
  })
  
});