let lobby = null;
let currentPlayer = null;
let maps = ["Bank", "Border", "Chalet", "Clubhouse", "Coastline", "Consulate", "Fortress", "Kafe Dostoyevsky", "Kanal", "Oregon", "Outback", "Skyscraper", "Theme Park", "Villa"];

function joinOrCreateLobby() {
    const lobbyName = document.getElementById("lobbyName").value.trim();
    if (!lobbyName) {
        alert("Please enter a lobby name.");
        return;
    }

    // Your logic for joining or creating a lobby
    // This is where you would connect to a backend or handle it in the front end if it's a simple application
    // For now, let's assume you just set the lobby and current player
    lobby = {
        name: lobbyName,
        bans: [],
        currentPlayerIndex: 0
    };
    currentPlayer = lobby.currentPlayerIndex;

    document.getElementById("lobbyPage").classList.add("hidden");
    document.getElementById("mapBanPage").classList.remove("hidden");
    updateUI();
}

function banMap(map) {
    if (!lobby || currentPlayer !== lobby.currentPlayerIndex) {
        return;
    }

    if (lobby.bans.includes(map)) {
        return;
    }

    lobby.bans.push(map);
    updateUI();

    if (maps.length - lobby.bans.length === 1) {
        finalizeBans();
    } else {
        lobby.currentPlayerIndex = 1 - lobby.currentPlayerIndex;
        currentPlayer = lobby.currentPlayerIndex;
    }
}

function updateUI() {
    document.getElementById("currentPlayer").textContent = `Player ${currentPlayer + 1}`;
    const mapContainer = document.getElementById("mapContainer");
    mapContainer.innerHTML = "";
    maps.forEach((map, index) => {
        if (!lobby.bans.includes(map)) {
            const img = document.createElement("img");
            img.src = `maps/${map}.jpg`; // Assuming you have images for each map in a 'maps' folder
            img.alt = map;
            img.onclick = () => banMap(map);
            mapContainer.appendChild(img);
        }
    });
}

function finalizeBans() {
    // Your logic for finalizing bans
    // For now, let's just reset the lobby
    lobby = null;
    currentPlayer = null;

    document.getElementById("lobbyPage").classList.remove("hidden");
    document.getElementById("mapBanPage").classList.add("hidden");
}
