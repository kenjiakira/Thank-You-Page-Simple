
function createParticles() {
    const container = document.getElementById('particle-container');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        particle.style.width = `${Math.random() * 10 + 2}px`;
        particle.style.height = particle.style.width;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.opacity = Math.random();

        particle.style.animation = `float ${Math.random() * 10 + 5}s ease-in-out infinite alternate`;

        container.appendChild(particle);
    }
}

document.addEventListener('DOMContentLoaded', createParticles);
