document.addEventListener("DOMContentLoaded", function() {
    // Selección de imágenes para aplicar la animación
    const images = document.querySelectorAll('main img');

    // Añadimos la animación de entrada a las imágenes cuando están visibles en pantalla
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'scale(1)';
            }
        });
    });

    images.forEach(image => {
        image.style.transform = 'scale(0.9)';
        image.style.opacity = 0;
        observer.observe(image);
    });
});
