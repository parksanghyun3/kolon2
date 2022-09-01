$(document).ready(function(){

  var tl = gsap.timeline();

  tl.to(".resize_img", {
    scrollTrigger: {
      trigger: ".resize_con",
      start: "-30% top",
      end: "80% 20%",
      pin: true,
      // markers: true,
      onEnter: function(){
        $(".resize_con").addClass("onBg");
        console.log("1");
      },
      onLeave: function(){
        $(".resize_con").removeClass("onBg");
        $(".inner").removeClass("pin_out");
        gsap.to(".resize_img", {
          scrollTrigger: {
            trigger: ".heritage",
            start: "top top",
            end: "bottom top",
            pin: true,
            markers: true,
          }
        })
        console.log("2");
        
      },
      onEnterBack: function(){
        $(".resize_con").addClass("onBg");
        $(".inner").addClass("pin_out");
        console.log("3");
      },
      onLeaveBack: function(){
        $(".resize_con").removeClass("onBg");
        // gsap.to(".resize_bgimg", {
        //   backgroundSize: "100%",
        //   borderRadius: "0",
        // });
        console.log("4");
      },
    }
  })

  // .to(".resize_img", {
  //   scrollTrigger: {
  //     trigger: ".heritage",
  //     top: "top top",
  //     end: "bottom top",
  //     pin: ".resize_img",
  //     markers: true,
  //   }
  // })

});