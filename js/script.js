const oneProductImgsSrc = [
  {
    thumbsImg: "img/canard-jaune-1-s.png",
    picturesImg: "img/canard-jaune-1-L.png",
  },
  {
    thumbsImg: "img/canard-jaune-2-s.png",
    picturesImg: "img/canard-jaune-2-l.png",
  },
  {
    thumbsImg: "img/canard-jaune-3-s.png",
    picturesImg: "img/canard-jaune-3-l.png",
  },
  {
    thumbsImg: "img/canard-jaune-4-s.png",
    picturesImg: "img/canard-jaune-4-l.png",
  },
];


//show list of imags
let i = 0;
for (const img of oneProductImgsSrc) {
  const imgsTemplate = document.getElementById("gallery-template");
  const li = document.importNode(imgsTemplate.content, true);

  const gallery = document.getElementById("gallery-photos");
  li.querySelector("img").src = img.thumbsImg;
  li.querySelector("li").dataset.id = i;
  gallery.appendChild(li);
  i++;
  console.log(li.querySelector("li"));
}


const previousBtn = document.querySelector("#gallery .js-pictures-prev");
const nextBtn = document.querySelector("#gallery .js-pictures-next");
const galleryPhotos = document.getElementById("gallery-photos");
let currentImgSrc = document
  .querySelector("#gallery img")
  .getAttribute("src")
  .slice(0, -6);

// console.log(currentImgSrc);
// console.log(galleryPhotos.children);
// for (const li of galleryPhotos.children) {
//   // li.children.src = "go";
//   console.log(li.children[0].getAttribute("src").slice(0, -6));
//   if (li.children[0].getAttribute("src") == currentImgSrc) {
//     console.log("ok");
//   } else {
//     console.log("no");
//   }
// }

previousBtn.addEventListener("click", function (event) {
  console.log(event);
});

nextBtn.addEventListener("click", function (event) {
  console.log(event);
});
