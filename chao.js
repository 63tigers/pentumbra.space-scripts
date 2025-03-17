//REQUIRES CHAO MENU SPRITES FROM SONIC ADVANCED 3
        const chao = document.getElementById('chao');

        document.addEventListener('mousemove', (event) => {
            const { clientY } = event;
            const windowHeight = window.innerHeight;

            if (clientY > windowHeight * 0.75) {
                chao.style.backgroundImage = "url('/resources/down.png')";
            } else if (clientY > windowHeight * 0.5) {
                chao.style.backgroundImage = "url('/resources/downless.png')";
            } else if (clientY > windowHeight * 0.25) {
                chao.style.backgroundImage = "url('/resources/upless.png')";
            } else {
                chao.style.backgroundImage = "url('/resources/up.png')";
            }
        });
