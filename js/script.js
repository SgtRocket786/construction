document.addEventListener("DOMContentLoaded", function() {
   includeHTML();
   setupEventListeners();
   initializeSwiper();
});

function includeHTML() {
   var z, i, elmnt, file, xhttp;
   /* Loop through a collection of all HTML elements: */
   z = document.getElementsByTagName("*");
   for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("include-html");
      if (file) {
         /* Make an HTTP request using the attribute value as the file name: */
         xhttp = new XMLHttpRequest();
         xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
               if (this.status == 200) {elmnt.innerHTML = this.responseText;}
               if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
               /* Remove the attribute, and call this function once more: */
               elmnt.removeAttribute("include-html");
               includeHTML();
            }
         };
         xhttp.open("GET", file, true);
         xhttp.send();
         /* Exit the function: */
         return;
      }
   }
}

function setupEventListeners() {
   let navbar = document.querySelector('.header .navbar');
   let contactInfo = document.querySelector('.contact-info');
   let menuBtn = document.querySelector('#menu-btn');

   menuBtn.onclick = () => {
      navbar.classList.toggle('active');
   };

   document.querySelector('#info-btn').onclick = () => {
      contactInfo.classList.add('active');
   };

   document.querySelector('#close-contact-info').onclick = () => {
      contactInfo.classList.remove('active');
   };

   window.onscroll = () => {
      navbar.classList.remove('active');
      contactInfo.classList.remove('active');
   };
}

function initializeSwiper() {
   new Swiper(".home-slider", {
      loop: true,
      grabCursor: true,
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
      },
   });

   new Swiper(".reviews-slider", {
      loop: true,
      grabCursor: true,
      spaceBetween: 20,
      breakpoints: {
         640: {
            slidesPerView: 1,
         },
         768: {
            slidesPerView: 2,
         },
         991: {
            slidesPerView: 3,
         },
      },
   });

   new Swiper(".blogs-slider", {
      loop: true,
      grabCursor: true,
      spaceBetween: 20,
      breakpoints: {
         640: {
            slidesPerView: 1,
         },
         768: {
            slidesPerView: 2,
         },
         991: {
            slidesPerView: 3,
         },
      },
   });

   new Swiper(".logo-slider", {
      loop: true,
      grabCursor: true,
      spaceBetween: 20,
      breakpoints: {
         450: {
            slidesPerView: 2,
         },
         640: {
            slidesPerView: 3,
         },
         768: {
            slidesPerView: 4,
         },
         1000: {
            slidesPerView: 5,
         },
      },
   });
}
