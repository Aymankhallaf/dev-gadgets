const previousBtn = document.querySelector("#gallery .js-pictures-prev");
const nextBtn = document.querySelector("#gallery .js-pictures-next");
const galleryPhotos = document.getElementById("gallery-photos");
const currentImg = document.querySelector("#gallery img");


console.log(currentImg)
console.log(galleryPhotos.children);
for (li of galleryPhotos.children) {
// li.children.src = "go";
console.log(li.children);
}

previousBtn.addEventListener("click", function (event) {
  console.log(event);
});

nextBtn.addEventListener("click", function (event) {
  console.log(event);
});
