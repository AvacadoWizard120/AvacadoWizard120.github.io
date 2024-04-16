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
            const textOverlay = document.createElement('div');
            textOverlay.classList.add('text-overlay');
            textOverlay.innerText = mapName.split('.')[0];
            gridItem.appendChild(image);
            gridItem.appendChild(textOverlay);
            gridItem.addEventListener('click', () => {
                gridContainer.removeChild(gridItem);
                gridContainer.appendChild(gridItem);
                gridItem.classList.add('selected');
            });
            gridContainer.appendChild(gridItem);
        });
    })
    .catch(error => {
        console.error('Error fetching map data:', error);
    });
