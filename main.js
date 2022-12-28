// element.addEventListener(click, ()))
//  e / event -> e - > represent elemtn on which event happen
let acc = document.getElementsByClassName("p");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");
    this.classList.remove("none");

    /* Toggle between hiding and showing the active panel */
    let more = this.nextElementSibling;
    if (more.style.display === "none") {
      more.style.display = "block";
    } else {
      more.style.display = "none";
    }
  });
}
// const accordion = document.querySelectorAll(".p");

// for (p of accordion) {
//   p.addEventListener("click", function () {
//     this.classList.toggle("active");

//     let more = this.nextElementSibling;
//     if (more.classList.contains("show")) {
//       more.classList.remove("show");
//     } else {
//       more.classList.add("show");
//     }

//     for (p of accordion) {
//       if (p != this) {
//         p.classList.remove("active");
//         p.nextElementSibling.classList.remove("show");
//       }
//     }
//   });
// }
