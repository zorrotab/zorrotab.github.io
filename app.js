// Opening and closing of navigation
document.addEventListener("DOMContentLoaded", function() {
  var navButton = document.getElementById("navButton");
  var navIcon = document.getElementById("navIcon");
  var navMenu = document.getElementById("navMenu");
  var navLinks = document.querySelectorAll("#navMenu li");

  navButton.addEventListener("click", function() {
    navIcon.classList.toggle("cross");
    navMenu.classList.toggle("active");
  });

  // Close the dropdown menu when clicking outside of it
  document.addEventListener("click", function(event) {
    var target = event.target;
    if (!target.closest("#navButton") && !target.closest("#navMenu")) {
      navIcon.classList.remove("cross");
      navMenu.classList.remove("active");
    }
  });

  // Close the dropdown menu and remove cross when a link is clicked
  navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
      navIcon.classList.remove("cross");
      navMenu.classList.remove("active");
    });
  });
});



// Adding offset to navigation to different parts of the page
 window.addEventListener('hashchange', function() {
      var headerOffset = 60; // Height of fixed header
      var jumpElement = document.getElementById(window.location.hash.substring(1));
      if (jumpElement) {
        var jumpPosition = jumpElement.getBoundingClientRect().top + window.pageYOffset - headerOffset - 100; // Adjusted position by 100px
        window.scrollTo({ top: jumpPosition, behavior: 'smooth' });
      }
    });