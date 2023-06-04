let counter = 0;
const imageArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
function nextImage(){
    const image = document.getElementById("image");
    counter++;
    if (counter > imageArray.length - 1) counter = 0;
    image.src = `images/${imageArray[counter]}`;
}

function previousImage(){
    const image = document.getElementById("image");
    counter--;
    if (counter < 0) counter = imageArray.length - 1;
    image.src = `images/${imageArray[counter]}`;
}




function next() {
    const image = document.getElementById("image");
    const imageAfter = document.getElementById("image__after")
    imageAfter.display = "block";
    imageAfter.src = `images/${imageArray[counter]}`;
    counter++;
    if (counter > imageArray.length - 1) counter = 0;
    image.transform = "translateX(-1000px)";
    image.src = `images/${imageArray[counter]}`;
    imageAfter.right = "0";
    image.animationName = "next";
    imageAfter.animationName = "next";
    setTimeout(() => {
        image.style.animationName = "none";
        imageAfter.animationName = "none";
    }, 1000);
    imageAfter.right = "translateX(-1000px)";
    imageAfter.display = "none";
}