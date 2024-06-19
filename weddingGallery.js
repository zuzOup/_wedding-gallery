// Resize odd pictures

const img = document.getElementsByClassName("photo");
const jmenoDatum = document.getElementById("jmenoDatum");
const loading = document.getElementById("loading");

window.onload = () => {
  loading.style.visibility = "hidden";
  jmenoDatum.style.visibility = "visible";

  for (let i = 0; i < img.length; i++) {
    img[i].style.visibility = "visible";
  }
};

// gallery

const modal = document.getElementById("modal");
const bigImg = document.createElement("img");
let index;

const frames = document.getElementsByClassName("frame");

const next = document.getElementById("modalButton_next");
const prev = document.getElementById("modalButton_prev");
const modalPhoto = document.getElementById("modalPhoto");

for (let i = 0; i < frames.length; i++) {
  frames[i].addEventListener("click", () => {
    modal.classList.add("modal");
    next.classList.add("modalbutton");
    prev.classList.add("modalbutton");
    modalPhoto.classList.add("modalPhoto");

    bigImg.src = img[i].src;
    index = i;
    modalPhoto.appendChild(bigImg);
  });
}

prev.addEventListener("click", (e) => {
  e.stopPropagation();
  if (index === 0) {
    index = img.length - 1;
  } else index--;
  bigImg.src = img[index].src;
});

next.addEventListener("click", (e) => {
  e.stopPropagation();
  if (index === img.length - 1) {
    index = 0;
  } else index++;
  bigImg.src = img[index].src;
});

modal.addEventListener("click", function () {
  modalPhoto.removeChild(bigImg);
  modal.classList.remove("modal");
  next.classList.remove("modalbutton");
  prev.classList.remove("modalbutton");
  modalPhoto.classList.remove("modalPhoto");
});
