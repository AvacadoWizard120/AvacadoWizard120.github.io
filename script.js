const gridContainerTop = document.getElementById('gridContainerTop');
const gridContainerBottom = document.getElementById('gridContainerBottom');

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
            gridItem.addEventListener('click', function() {
                gridItem.classList.add('selected');
                if (gridContainerTop.contains(gridItem)) {
                    gridContainerTop.removeChild(gridItem);
                    gridContainerBottom.appendChild(gridItem);
                }
            });
            gridContainerTop.appendChild(gridItem);
        });
    })
    .catch(error => {
        console.error('Error fetching map data:', error);
    });
