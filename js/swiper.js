let swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: true,
      spaceBetween: 30,

      autoplay: { 
        delay: 6500, 
      },


    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 40
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 40
      }
  
    
    }, 
    
   
  });