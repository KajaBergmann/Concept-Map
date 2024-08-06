function showPopup(area) {
    const content = document.getElementById('popup-content');
    if (area === 1) {
        content.innerHTML = '<img src="resources/nervensystem.png" alt="Nervensystem" style="width:100%;"><br>';
    } else if (area === 2) {
        content.innerHTML = '<img src="resources/aufbau.png" alt="Aufbau" style="width:100%;"><br>';
    } else if (area === 3) {
        content.innerHTML = '<img src="resources/funktion.png" alt="Funktion" style="width:100%;"><br>';
    } else if (area === 4) {
        content.innerHTML = '<img src="resources/nervenzelle.png" alt="Nervenzelle" style="width:100%;"><br>';
    } else if (area === 5) {
        content.innerHTML = '<img src="resources/erregungsleitung.png" alt="Erregungsleitung" style="width:100%;"><br>';
    } else if (area === 6) {
        content.innerHTML = '<img src="resources/ubertragung.png" alt="Ubertragung" style="width:100%;"><br>';    
    }
    document.querySelector('.popup').style.display = 'block';
    document.querySelector('.overlay').style.display = 'block';
}

function hidePopup() {
    document.querySelector('.popup').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
}
