const images = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpeg',
    'images/6.jpg',
]

let imageIndex = 0;
const imageField = document.getElementById('slder_image')

setInterval(() => {
    if (imageIndex === images.length) {
        imageIndex = 0;
    }
    const imageUrl = images[imageIndex]
    console.log(imageIndex, imageUrl);
    imageField.setAttribute('src', imageUrl)
    imageIndex += 1
}, 1000);