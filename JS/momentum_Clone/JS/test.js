const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
const bgImageURL = `./Images/${chosenImage}`;
bgImage.src = bgImageURL;
document.body.style.backgroundImage = `url(${bgImageURL})`;
document.body.appendChild(bgImage);


// const bgImages = [
//     "0.jpeg",
//     "1.jpeg",
//     "2.jpeg",
//     "3.jpeg",
//     "4.jpeg",
//     "5.jpeg",
//   ];
//   const selectedImg = bgImages[Math.floor(Math.random() * bgImages.length)];
//   const bgImage = document.createElement("img");
//   const bgImageUrl = `Images/${selectedImg}`;
//   bgImage.classList.add("hidden");
//   bgImage.src = bgImageUrl;
//   document.body.style.backgroundImage = `url(${bgImageUrl})`;
//   document.body.appendChild(bgImage);
  