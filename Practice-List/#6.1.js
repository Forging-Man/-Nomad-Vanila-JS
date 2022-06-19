const image = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = image[Math.floor(Math.random() * image.length)];

// img element 작성
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

// body에 img 삽입
document.body.appendChild(bgImage);
