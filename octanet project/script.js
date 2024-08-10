document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('reservation-modal');
    const openButton = document.getElementById('reserve-button');
    const closeButton = document.querySelector('.close-button');

    openButton.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });
});
