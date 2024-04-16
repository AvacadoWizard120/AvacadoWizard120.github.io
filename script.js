const gridContainer = document.getElementById('gridContainer');

fetch('maps.json')
    .then(response => response.json())
    .then(data => {
        data.maps.forEach((mapName, index) => {
            const imageUrl = `maps/${mapName}`;
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            const image = document.createElement('img');
            image.src = imageUrl;
            image.alt = mapName;
            gridItem.appendChild(image);
            gridItem.addEventListener('click', () => {
                gridContainer.removeChild(gridItem);
            });
            gridContainer.appendChild(gridItem);
        });
    })
    .catch(error => {
        console.error('Error fetching map data:', error);
    });
