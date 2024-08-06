function showPopup(area) {
    const content = document.getElementById('popup-content');
    if (area === 1) {
        content.innerHTML = '<img src="resources/nervensystem.png" alt="Nervensystem" style="width:100%;"><br>';
    } else if (area === 2) {
        content.textContent = 'Information for Area 2';
    } else if (area === 3) {
        content.textContent = 'Information for Area 3';
    }
    document.querySelector('.popup').style.display = 'block';
    document.querySelector('.overlay').style.display = 'block';
}

function hidePopup() {
    document.querySelector('.popup').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
}
