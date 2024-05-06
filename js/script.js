function toggleNavbar() {
  var navbar = document.getElementById("navbarNav");
  if (navbar.style.display === "flex") {
    navbar.style.display = "none";
  } else {
    navbar.style.display = "flex";
  }
}
document.getElementById("toggleButton").addEventListener("click", toggleNavbar);
var navbarLinks = document.querySelectorAll("#navbarNav a");
navbarLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    // Close the navbar when a link is clicked
    var navbar = document.getElementById("navbarNav");
    navbar.style.display = "none";
  });
});

//replace hero text
// Replace Text In Header
const checkReplace = document.querySelector(".replace-me");
if (checkReplace !== null) {
  const replace = new ReplaceMe(checkReplace, {
    animation: "animated fadeIn",
    speed: 2000,
    separator: ",",
    loopCount: "infinite",
    autoRun: true,
  });
}

document.addEventListener("DOMContentLoaded", function () {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  $(document).ready(function () {
    $("#service-card-1").click(function () {
      $("#serviceModal1").modal("show");
    });
  });
  $(document).ready(function () {
    $("#service-card-2").click(function () {
      $("#serviceModal2").modal("show");
    });
  });
  $(document).ready(function () {
    $("#service-card-3").click(function () {
      $("#serviceModal3").modal("show");
    });
  });
});

// document.querySelectorAll(".service-btn").forEach(function (button) {
//   button.addEventListener("click", function () {
//     var targetModalId = button.getAttribute("data-bs-target");
//     var targetModal = document.querySelector(targetModalId);
//     var modal = new bootstrap.Modal(targetModal);
//     modal.show();
//     // When modal is hidden, force remove the modal backdrop
//     targetModal.addEventListener("hidden.bs.modal", function () {
//       document.querySelector(".modal-backdrop").remove();
//     });
//   });
// });

//modal close functionality
document.addEventListener("DOMContentLoaded", function () {
  let currentModal = document.querySelector(".modal");
  if (currentModal) {
    // Check if modal exists
    currentModal.addEventListener("click", function (event) {
      if (event.target.classList.contains("modal-link")) {
        event.preventDefault(); // Prevent default link behavior
        let modalInstance = bootstrap.Modal.getInstance(currentModal);
        if (modalInstance) {
          // Check if modal instance exists
          let linkedContent = event.target.getAttribute("href");
          modalInstance.hide(); // Close the modal
          let targetElement = document.querySelector(linkedContent);
          if (targetElement) {
            //delay the scroll
            setTimeout(function () {
              targetElement.scrollIntoView({ behavior: "smooth" }); // Scroll to target section
            }, 300);
          }
        }
      }
    });
  }
});

var glider = new Glider(document.querySelector(".glider"), {
  draggable: true,
  slidesToScroll: 1,
  slidesToShow: 1,
  scrollLock: true,
  dots: "#dots",
  arrows: {
    prev: ".glider-prev",
    next: ".glider-next",
  },
  responsive: [
    {
      // screens greater than >= 775px
      breakpoint: 775,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 2,
        slidesToScroll: "auto",
        itemWidth: 150,
        duration: 0.25,
      },
    },
    {
      // screens greater than >= 1024px
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        itemWidth: 150,
        duration: 0.25,
      },
    },
  ],
});

document
  .querySelector(".glider")
  .addEventListener("glider-loaded", function (event) {
    glider.refresh(true);
  });
