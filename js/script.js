// function userScroll() {
//   const navbar = document.querySelector(".navbar");

//   window.addEventListener("scroll", () => {
//     if (window.scrollY > 50) {
//       navbar.classList.add("bg-dark");
//       navbar.classList.add("navbar-sticky");
//     } else {
//       navbar.classList.remove("bg-dark");
//       navbar.classList.remove("navbar-sticky");
//     }
//   });
// }

// window.addEventListener("DOMContentLoaded", userScroll);

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);
// console.log("hi");
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

document.querySelectorAll(".service-btn").forEach(function (button) {
  button.addEventListener("click", function () {
    var targetModalId = button.getAttribute("data-bs-target");
    var targetModal = document.querySelector(targetModalId);
    var modal = new bootstrap.Modal(targetModal);
    modal.show();
    // When modal is hidden, force remove the modal backdrop
    targetModal.addEventListener("hidden.bs.modal", function () {
      document.querySelector(".modal-backdrop").remove();
    });
  });
});

window.addEventListener("load", function () {
  new Glider(document.querySelector(".glider"), {
    testimonial_config: {
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
    },
  });
});
