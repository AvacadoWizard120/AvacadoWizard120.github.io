const gridContainer = document.getElementById('gridContainer');

const imagesDir = 'maps/'; // Directory where your images are stored

fetch(imagesDir)
    .then(response => response.text())
    .then(text => {
        const parser = new DOMParser();
        const htmlDocument = parser.parseFromString(text, 'text/html');
        const imageNames = Array.from(htmlDocument.querySelectorAll('a'))
            .map(a => a.getAttribute('href'))
            .filter(href => href.match(/\.(avif|jpg|webp)$/));
        
        imageNames.forEach((imageName, index) => {
            const imageUrl = `${imagesDir}${imageName}`;
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            const image = document.createElement('img');
            image.src = imageUrl;
            image.alt = imageName;
            gridItem.appendChild(image);
            gridItem.addEventListener('click', () => {
                gridContainer.removeChild(gridItem);
            });
            gridContainer.appendChild(gridItem);
        });
    })
    .catch(error => {
        console.error('Error fetching images:', error);
    });
