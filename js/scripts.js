/*!
* Start Bootstrap - Scrolling Nav v5.0.6 (https://startbootstrap.com/template/scrolling-nav)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-scrolling-nav/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// Example in JavaScript

/*let parts = ["info", "donvitosbistro", "com", "&#46;", "&#64;"];

let securedEmail = parts[0] + parts[4] + parts[1] + parts[3] + parts[2];

document.getElementById("securedEmail").innerHTML = securedEmail;
*/
document.getElementById("reservationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    
    // Perform validation (you can add more complex validation as needed)
    if (!name || !email || !date || !time) {
      alert("Please fill in all fields.");
      return;
    }
    
    // Send reservation details to server or perform other actions
    alert("Reservation successful!\nName: " + name + "\nEmail: " + email + "\nDate: " + date + "\nTime: " + time);
    
    // Optional: Reset form after submission
    document.getElementById("reservationForm").reset();
  });

  function openMenu(evt, menuName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.className += " active";
  }

 