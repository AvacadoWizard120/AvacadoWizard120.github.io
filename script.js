const gridContainer = document.getElementById('gridContainer');

const imagesDir = 'maps/'; // Directory where your images are stored
const imageNames = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg',
];

imageNames.forEach((imageName, index) => {
    const imageUrl = `${imagesDir}${imageName}`;
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    const image = document.createElement('img');
    image.src = imageUrl;
    image.alt = `Image ${index + 1}`;
    gridItem.appendChild(image);
    gridItem.addEventListener('click', () => {
        gridContainer.removeChild(gridItem);
    });
    gridContainer.appendChild(gridItem);
});
