// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});


// Nav hamburgerburger selections

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
  });

  // Close hamburger menu when a link is clicked

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// Stop scrolling when modal is open

        //when modal is open 
document.querySelector("#project-card-1").addEventListener('click', function() {
  document.querySelector(".modal").style.display = 'flex';
  document.querySelector("body").style.overflow = 'hidden';
  
});

document.querySelector("#project-card-2").addEventListener('click', function() {
  document.querySelector(".modal").style.display = 'flex';
  document.querySelector("body").style.overflow = 'hidden';
  
});

document.querySelector("#project-card-3").addEventListener('click', function() {
  document.querySelector(".modal").style.display = 'flex';
  document.querySelector("body").style.overflow = 'hidden';
  
});

/* when modal is closed */
document.querySelector("#modal__close-1").addEventListener('click', function() {
  document.querySelector(".modal").style.display = 'none';
  document.querySelector("body").style.overflow = 'visible';
});

document.querySelector("#modal__close-2").addEventListener('click', function() {
  document.querySelector(".modal").style.display = 'none';
  document.querySelector("body").style.overflow = 'visible';
});

document.querySelector("#modal__close-3").addEventListener('click', function() {
  document.querySelector(".modal").style.display = 'none';
  document.querySelector("body").style.overflow = 'visible';
});


//Navigation Highlight while scrolling

// $(document).ready(function(){

//   $("section").mouseenter(function(){
//      var id = $(this).attr('id');
//      $('a').removeClass('active');
//      $("[href=#"+id+"]").addClass('active');
//   });

// });