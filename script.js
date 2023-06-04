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
