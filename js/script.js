let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.scrollLeft += 1240;

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
  scrollContainer.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 420;
});

backBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 420;
});

function readMore(side) {
  /* В зависимости от левой или правой стороны, где была нажата кнопка,
    скрытый текст покажется или наоборот скроется */
  if (side === "right") {
    var dots = document.getElementById("right_dots");
    var moreText = document.getElementById("right_moreText");
    var button = document.getElementById("right_button");
  } else {
    var dots = document.getElementById("left_dots");
    var moreText = document.getElementById("left_moreText");
    var button = document.getElementById("left_button");
  }

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    button.innerHTML = "Показать больше";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    button.innerHTML = "Показать меньше";
    moreText.style.display = "inline";
  }
}

function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("container-show");
      change.target.classList.add("dogs-show");
    }
  });
}

let options = {
  threshold: [0.5],
};
let observer = new IntersectionObserver(onEntry, options);
let container_elements = document.querySelectorAll(".container");
let dogs_elements = document.querySelectorAll(".dogs");

for (let elm of container_elements) {
  observer.observe(elm);
}
for (let elm of dogs_elements) {
  observer.observe(elm);
}
