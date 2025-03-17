//demonstration at https://pentumbra.neocities.org/art/ - view the page source if needed

const buttons = document.querySelectorAll('.button');
        const container = document.getElementById('buttonContainer');
        const radius = 300; 
        const speed = 0.002;
        let angle = 5;
        let animationId;

        function animateButtons() {
            angle += speed;
            buttons.forEach((button, index) => {
                const buttonAngle = angle + (index * (2 * Math.PI / buttons.length));
                const x = radius * Math.cos(buttonAngle) + radius; 
                const y = radius * Math.sin(buttonAngle) + radius;
                button.style.left = `${x}px`;
                button.style.top = `${y}px`;
            });
            animationId = requestAnimationFrame(animateButtons);
        }

        container.addEventListener('mouseenter', () => {
            cancelAnimationFrame(animationId);
        });

        container.addEventListener('mouseleave', () => {
            animateButtons();
        });

        animateButtons(); 
