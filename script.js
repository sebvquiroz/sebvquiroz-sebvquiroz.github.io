function updateClock() {
    const startDate = new Date('2017-04-30T00:00:00');
    const now = new Date();

    const diff = now - startDate;

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('clock').innerHTML = `
        <span>7 años, 4 meses y las horas</span>
        <span>${days} días</span>
        <span>${hours} horas</span>
        <span>${minutes} minutos</span>
        <span>${seconds} segundos</span>
    `;
}

setInterval(updateClock, 1000);
updateClock(); // Inicializar al cargar la página
