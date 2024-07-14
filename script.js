const siBtn = document.getElementById('siBtn');
const noBtn = document.getElementById('noBtn');
const message = document.getElementById('message');

const phrases = [
    "¿Estás segura?",
    "Piénsalo bien...",
    "¿De verdad quieres decir que no?",
    "Última oportunidad...",
    "¡Vamos, anímate!",
    "No seas así...",
    "¿Qué te cuesta decir que sí?",
    "Confía en mí",
    "¡No te arrepentirás!"
];

siBtn.addEventListener('click', () => {
    message.textContent = "¡Sabía que sí querías!";
    noBtn.style.display = 'none';
});

noBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Mostrar una frase aleatoria
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    message.textContent = randomPhrase;
    
    // Mover el botón "No" a una posición aleatoria dentro de los límites de la pantalla
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;
    const x = Math.max(0, Math.min(maxX, Math.random() * maxX));
    const y = Math.max(0, Math.min(maxY, Math.random() * maxY));
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    
    // Cambiar el tamaño del botón "Sí" aleatoriamente
    const newSize = Math.floor(Math.random() * (150 - 100 + 1)) + 100; // Entre 100% y 150%
    siBtn.style.transform = `scale(${newSize / 100})`;
});