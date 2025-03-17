//pretty inefficient playlist with lists.
document.addEventListener('DOMContentLoaded', function() {
    const playlistItems = document.querySelectorAll('#playlist li');
    const audioPlayer = document.getElementById('audioPlayer');
    let currentSong = null;

    playlistItems.forEach(item => {
        item.addEventListener('click', function() {
            const source = this.getAttribute('data-src');

            if (currentSong !== source) {
                if (currentSong) {
                    audioPlayer.pause();
                    document.querySelector('.active')?.classList.remove('active');
                }
                audioPlayer.src = source;
                audioPlayer.play();
                currentSong = source;
                this.classList.add('active');
            } else {
                audioPlayer.pause();
                currentSong = null;
                this.classList.remove('active');
            }
        });
    });

    audioPlayer.addEventListener('ended', function() {
        let nextSong = getNextSong();
        if (nextSong) {
            audioPlayer.src = nextSong.getAttribute('data-src');
            audioPlayer.play();
            document.querySelector('.active')?.classList.remove('active');
            nextSong.classList.add('active');
            currentSong = nextSong.getAttribute('data-src');
        }
    });

    function getNextSong() {
        let currentIndex = Array.from(playlistItems).findIndex(item => item.getAttribute('data-src') === currentSong);
        let nextIndex = (currentIndex + 1) % playlistItems.length;
        return playlistItems[nextIndex];
    }
});
