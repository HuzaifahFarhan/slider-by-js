  function nextSlide() {
  var source = document.getElementById("carousel").getAttribute("src");
  var element = document.getElementById("carousel-container");
  if (source === "/asssets/images/carousel 1.jpg") {
    source = "/asssets/images/carousel 2.jpg";
    element.innerHTML = `<img src = "${source}" alt="" id="carousel" />`;
  } else if (source === "/asssets/images/carousel 2.jpg") {
    source = "/asssets/images/carousel 3.jpg";
    element.innerHTML = `<img src = "${source}" alt="" id="carousel" />`;
  } else if (source === "/asssets/images/carousel 3.jpg") {
    source = "/asssets/images/carousel 1.jpg";
    element.innerHTML = `<img src = "${source}" alt="" id="carousel" />`;
  }
}

function timer() {
  setTimeout(() => {
    nextSlide();
  }, 2000);
}

timer();

function prevSlide() {
  var source = document.getElementById("carousel").getAttribute("src");
  var element = document.getElementById("carousel-container");
  if (source === "/asssets/images/carousel 1.jpg") {
    source = "/asssets/images/carousel 3.jpg";
    element.innerHTML = `<img src = "${source}" alt="" id="carousel" />`;
  } else if (source === "/asssets/images/carousel 2.jpg") {
    source = "/asssets/images/carousel 1.jpg";
    element.innerHTML = `<img src = "${source}" alt="" id="carousel" />`;
  } else if (source === "/asssets/images/carousel 3.jpg") {
    source = "/asssets/images/carousel 2.jpg";
    element.innerHTML = `<img src = "${source}" alt="" id="carousel" />`;
  }
}