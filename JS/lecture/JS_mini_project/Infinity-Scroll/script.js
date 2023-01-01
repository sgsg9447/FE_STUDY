//Helper Function to Set Attributes on DOM Elements
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

// Unsplash API
const count = 30;
const apikey = "QW0qkEjD9C4ojk-FSLpC3lKVnrlmrEnanzzJGrtIGzc";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apikey}&count=${count}`;

//Check if all images were loaded
function imageLoaded() {
  console.log("image loaded");
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true;
    console.log("ready =", ready);
  }
}

//Create Elements For Links & photos, Add to DOM
function displayPhotos() {
  imagesLoaded = 0;
  totalImages = photosArray.length;
  console.log("total images", totalImages);
  //Run function for each object in photosArray
  photosArray.forEach((photo) => {
    //create <a> to link to Unsplash
    const item = document.createElement("a");
    // item.setAttribute("href", photo.links.html);
    // item.setAttribute("target", "_blank");
    // 리팩토링!
    setAttributes(item, {
      href: photo.links.html,
      target: "_blank",
    });
    //Create <img> for photo
    const img = document.createElement("img");
    // img.setAttribute("src", photo.urls.regular);
    // img.setAttribute("alt", photo.alt_description);
    // img.setAttribute("title", photo.alt_description);
    // 리팩토링!
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    //Event Listener, check when each is finished loading
    img.addEventListener("load", imageLoaded);
    //Put <img> inside <a>, then put both inside imageContainer Element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// Get photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    //catch Error Here
  }
}

// Check to see if scrolling near bottom of page, Load More Photos
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    // console.log("window.innerHeight", window.innerHeight);
    // console.log("window.scrollY", window.scrollY);
    // console.log(
    //   "window.innerHeight +scrollY",
    //   window.scrollY + window.innerHeight
    // );
    // console.log(
    //   "document.body.offsetHeight - 1000",
    //   document.body.offsetHeight - 1000
    // );
    // console.log("load more");
    getPhotos();
  }
});

//On Load
getPhotos();
