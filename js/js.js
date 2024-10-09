window.onscroll = () => {

    searchForm.classList.remove('active');

    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }

}


            //...............................Login form............................


let loginForm = document.querySelector('.login-form-container');

                document.querySelector('#login-btn').onclick = () => {
                    loginForm.classList.toggle('active');
                }


                document.querySelector('#close-login-btn').onclick = () => {
                    loginForm.classList.remove('active');
                    loginForm.classList.add('remove');
                }




window.onload = () => {
    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }

}




searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}



//..................Swiper slider animation....................



var swiper = new Swiper(".books-slider", {
    loops:true,
    centeredSlides : false,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        
      },
      1024: {
        slidesPerView: 3,
       
      },
    },
  });



// .............................Featured Selection....................


var swiper = new Swiper(".featured-slider", {
    spacebetweeen: 10, 
    loops:true,
    centeredSlides : false,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },

      450: {
        slidesPerView: 2,
       
      },
      768: {
        slidesPerView: 3,
        
      },
      1024: {
        slidesPerView: 4,
       
      },
    },
  });



  // .................arrivals Selection.apply.apply.apply.....................


  var swiper = new Swiper(".arrivals-slider", {
    spacebetweeen: 10, 
    loops:true,
    centeredSlides : false,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },


    breakpoints: {
      0: {
        slidesPerView: 1,
      },

      768: {
        slidesPerView: 2,
        
      },
      1024: {
        slidesPerView: 3,
       
      },
    },
  });

/* ..............................client reviews section....................... */


  var swiper = new Swiper(".reviews-slider", {
    grabCursor:true,
    spacebetweeen: 10, 
    loops:true,
    centeredSlides : false,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },


    breakpoints: {
      0: {
        slidesPerView: 1,
      },

      768: {
        slidesPerView: 2,
        
      },
      1024: {
        slidesPerView: 3,
       
      },
    },
  });