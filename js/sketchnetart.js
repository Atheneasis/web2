// Script para proyecto de net art interactivo
document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const canvasContainer = document.getElementById('netart-canvas');
    
    canvas.width = canvasContainer.offsetWidth;
    canvas.height = canvasContainer.offsetHeight;
    canvasContainer.appendChild(canvas);
    
    let hue = 0;

    function draw(e) {
        const x = e.offsetX;
        const y = e.offsetY;
        const radius = Math.random() * 10 + 5;

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;
        ctx.fill();
        hue += 5;
    }

    canvas.addEventListener('mousemove', draw);

    // Cambiar tamaño dinámicamente
    window.addEventListener('resize', function() {
        canvas.width = canvasContainer.offsetWidth;
        canvas.height = canvasContainer.offsetHeight;
    });
});
