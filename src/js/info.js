var modal = document.getElementById('infoModal');
var infoBtn = document.getElementById('infoBtn');
var closeBtn = document.getElementsByClassName('closeBtn')[0];

infoBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}
