

const navbar = document.queryselector("nav");
window.addEventListener("scroll",()=>
    navbar.classList.toggle("sticky",window.scrollY > 0)
);

const menu = document.querySelector(".menu");
const toggleMenu = () => menu.classList.toggle("active");

document.querySelector("menu-btn").addEventListener("click", toggleMenu);
document.querySelector(".close-btn").addEventListener("click",toggleMenu);

document
    .querySelectorAll(".menu a")
    .forEach((link) => link.addEventListener("click",toggleMenu));
    
    const scrollRevealoption={
        distance:"50px",
        origin:"bottom",
        duration:1000,
    };
    ScrollReveal().revel(".header_image img",{
        ...scrollRevealoption,
        origin:"right",
    });
    ScrollReveal().revel(".header_content h2",{
        ...scrollRevealoption,
        delay:500,
    });
    ScrollReveal().revel(".header_content h1",{
        ...scrollRevealoption,
        delay:1000,
    });
    ScrollReveal().revel(".header_content .section_description",{
        ...scrollRevealoption,
        delay:1500,
    });
    
    
    
    
    function openModal(id) {
      document.getElementById(id).style.display = "block";
    }
    
    function closeModal(id) {
      document.getElementById(id).style.display = "none";
    }
    
    // Optional: Close modal when clicking outside the content
    window.onclick = function(event) {
      const modals = document.querySelectorAll('.modal');
      modals.forEach(modal => {
          if (event.target === modal) {
              modal.style.display = "none";
          }
      });
    }
    
//scroll reveal
const sr =ScrollReveal({
    origin:"bottom",
    distance:"40px",
    duration:1000,
    delay:40,
    easing:"ease-in-out",
});

sr.reveal(".hero-headlines",{origin:"left"});
sr.reveal(".hero-page img",{origin:"right"});
sr.reveal(".about");
sr.reveal(".about h1",{delay:"500"});
sr.reveal(".about p", {delay:"700"});
sr.reveal(".about-info",{delay:"1000"});
sr.reveal(".collection h1");
sr.reveal(".collection-container",{delay:"900"});
sr.reveal(".review h1");
sr.reveal(".review-container",{delay:"800"});
sr.reveal(".callout");
sr.reveal(".cantact");

function checkAvailability() {
  const pickupDate = document.getElementById('pickupDate').value;
  const message = document.getElementById('availabilityMessage');

  // Example of unavailable dates
  const unavailableDates = ["2025-05-28", "2025-05-30", "2025-06-01"];

  if (!pickupDate) {
    message.textContent = "Please select a pickup date.";
    message.style.color = "red";
    return;
  }

  if (unavailableDates.includes(pickupDate)) {
    message.textContent = "Sorry, no vehicles available on this date.";
    message.style.color = "red";
  } else {
    message.textContent = "Vehicle available! Proceed with booking.";
    message.style.color = "green";
  }
}



function confirmBooking(event) {
  event.preventDefault(); // Prevent form from submitting right away
  alert("Booking Successful!");
  window.location.href = "bookingava.html"; // Redirect after alert
  return false;
}




