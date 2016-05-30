 var controller = new ScrollMagic.Controller();

   $(function () { // wait for document ready
    var processor = TweenMax.to("#processor", 1, {top: "33.43%", ease: Linear.easeNone});
    var cooler = TweenMax.to("#cooler", 1, {top: "22.66%", ease: Linear.easeNone});
     var slogan = TweenMax.to("#slogan", 1, {opacity: "1", ease: Linear.easeNone});
        // build scene
        new ScrollMagic.Scene({duration: 600})
                .setPin("#home")
                .addTo(controller);
          new ScrollMagic.Scene({duration: 300})
                .setTween(processor)
                .addTo(controller);
        new ScrollMagic.Scene({duration: 300, offset: 300})
                .setTween(cooler)
                .addTo(controller);
         new ScrollMagic.Scene({
                        duration: 0,
                        offset: 600
                    })
                .setTween(slogan)
                .addTo(controller);
      });