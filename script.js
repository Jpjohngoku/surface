let currentIndex = 1;
const totalImages = 17;

function nextImage() {
    currentIndex++;
    if (currentIndex > totalImages) {
        currentIndex = 1;
    }
    updateImage();
}

function prevImage() {
    currentIndex--;
    if (currentIndex < 1) {
        currentIndex = totalImages;
    }
    updateImage();
}

function updateImage() {
    const images = document.querySelectorAll('.carousel');
    images.forEach((image, index) => {
        if (index + 1 === currentIndex) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}