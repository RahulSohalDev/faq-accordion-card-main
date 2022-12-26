function myFunction() {
  var dots = document.getElementsByClassName("arrow");
  var moreText = document.getElementsByClassName("more");
  var btnText = document.getElementById("myBtn");

  if (arrow.style.display === "none") {
    arrow.style.display = "inline";
    btnText.innerHTML = "arrow";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "more";
    moreText.style.display = "inline";
  }
}
