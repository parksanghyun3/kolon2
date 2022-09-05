$(document).ready(function(){
  var h = $(".info_wrap").innerHeight();
  console.log(h);
  var tl = gsap.timeline();
  var progress = tl.progress(); 
  tl.to(".scroll_wrap", {
    scrollTrigger: {
      trigger: ".info_wrap",
      start: "top 30%",
      end: "bottom 30%",
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
        if(self.progress.toFixed(3) > 0.4) {
          console.log("지금!");
          $(".heritage_conlist").addClass("onScroll");

        } else {
          $(".heritage_conlist").removeClass("onScroll");
        }

        if(self.progress.toFixed(3) > 0.45) {
          $(".heritage_conlist").addClass("active");
          console.log("나온다!");
        }
      }
    }
  })
  // .to(".heritage_inner", {
  //   width: "1200px"
  // });
});