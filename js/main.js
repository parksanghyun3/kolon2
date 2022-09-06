$(document).ready(function(){
  var h = $(".heritage_conlist").outerHeight();

  var tl = gsap.timeline();


  tl.to(".scroll_wrap", {
    scrollTrigger: {
      trigger: ".heritage_inner",
      start: "top top",
      end: "bottom bottom",
      endTrigger: ".heritage_conlist",
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