let mainImage = document.querySelector(".mainImage");
let images = document.querySelector(".images");
let image = document.querySelector(".image");

images.addEventListener("click", displayImage);

function displayImage(event){
    let selectedImageSrc = event.target.src;
    let mainImageSrc = mainImage.firstChild.src;
    event.target.src = mainImageSrc;
    mainImage.firstChild.src = selectedImageSrc;
}