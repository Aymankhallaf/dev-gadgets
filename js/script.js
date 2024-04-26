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
for (const img of oneProductImgsSrc) {
  const imgsTemplate = document.getElementById("gallery-template");
  const li = document.importNode(imgsTemplate.content, true);
  const gallery = document.getElementById("gallery-photos");
  li.querySelector("img").src = img.thumbsImg;
  li.querySelector("li").dataset.id = oneProductImgsSrc.indexOf(img);
  li.querySelector("img").dataset.id = oneProductImgsSrc.indexOf(img);
  gallery.appendChild(li);
}

const previousBtn = document.querySelector("#gallery .js-pictures-prev");
const nextBtn = document.querySelector("#gallery .js-pictures-next");
const galleryPhotos = document.getElementById("gallery-photos");
let currentImg = document.querySelector("#gallery img");
let rank = parseInt(currentImg.dataset.id);

// next btn
nextBtn.addEventListener("click", () => {
  if (
    rank >= oneProductImgsSrc.length - 1 &&
    oneProductImgsSrc[rank] !== undefined
  ) {
    rank = 0;
  }
  rank++;
  currentImg.src = oneProductImgsSrc[rank].picturesImg;
});

// previous btn
previousBtn.addEventListener("click", () => {
  if (rank <= 0) {
    rank = oneProductImgsSrc.length;
  }
  rank--;
  currentImg.src = oneProductImgsSrc[rank].picturesImg;
});

galleryPhotos.addEventListener("pointerover", function (event) {
    // const isImg = event.target.nodeName === "IMG";
    if (event.target.nodeName !== "IMG") {
        return;
    }
    console.log(event.target.dataset.id);
    currentImg.src = oneProductImgsSrc[event.target.dataset.id].picturesImg;
    console.log("yes")

});
