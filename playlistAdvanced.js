const songs = [
    { title: "Boss 1 (Pinch)", artist: "Sonic Advance 2", duration: 64, src: "/resources/Boss (Pinch).mp3", album: "/resources/sa2.png" },
    { title: "Musical Plant Zone 2", artist: "Sonic Advance 2", duration: 130, src: "/resources/sa2-musicalplantzone-2.mp3", album: "/resources/sa2.png" },
    { title: "Menu", artist: "Sonic Advance 1/2", duration: 64, src: "/resources/sa2-menu.mp3", album: "/resources/sa2.png" },
    { title: "Tung the Icelandic Lesbian", artist: "Kitsune²", duration: 118, src: "/resources/tung-the-icelandic-lesbian-halley-labs.mp3", album: "/resources/star-road.png" },
    { title: "Grassland", artist: "Super Mario Bros 3", duration: 106, src: "/resources/grassland-smb3.mp3", album: "/resources/smb.png" },
];

let currentSongIndex = Math.floor(Math.random() * songs.length);
const audio = document.getElementById('audio');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const albumSrc = document.getElementById('album-src');
const durationNum = document.getElementById('duration-num');
const durationSlider = document.getElementById('duration');
const playButton = document.getElementById('play');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function loadSong(index) {
    const song = songs[index];
    title.innerText = song.title;
    artist.innerText = song.artist;
    albumSrc.src = song.album;
    audio.src = song.src;
    durationSlider.max = song.duration;
    durationSlider.value = 0;
    updateDurationDisplay(0, song.duration);
}

function updateDurationDisplay(currentSeconds, totalSeconds) {
    const currentMinutes = Math.floor(currentSeconds / 60);
    const currentSecs = currentSeconds % 60;
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalSecs = totalSeconds % 60;
    durationNum.innerText = totalSeconds ? 
        `${String(currentMinutes).padStart(2, '0')}:${String(currentSecs).padStart(2, '0')} / ${String(totalMinutes).padStart(2, '0')}:${String(totalSecs).padStart(2, '0')}` : 
        '00:00 / 00:00';
}

playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playButton.innerText = 'll';
        const interval = setInterval(() => {
            if (!audio.paused) {
                durationSlider.value = Math.round(audio.currentTime);
                updateDurationDisplay(durationSlider.value, Math.round(audio.duration));
                if (durationSlider.value >= Math.round(audio.duration)) {
                    clearInterval(interval);
                }
            } else {
                clearInterval(interval);
            }
        }, 1000);
    } else {
        audio.pause();
        playButton.innerText = '▶';
    }
});

prevButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
    playButton.innerText = 'll';
});

nextButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
    playButton.innerText = 'll';
});

loadSong(currentSongIndex);
</script>
<script>
const inputRange = document.getElementById("duration");
const activeColor = "#ff9914";
const inactiveColor = "#ffde00";

inputRange.addEventListener("input", function() {
  const ratio = (this.value - this.min) / (this.max - this.min) * 100;
  this.style.background = `linear-gradient(90deg, ${activeColor} ${ratio}%, ${inactiveColor} ${ratio}%)`;
});
</script>
    <script src="/scripts/pentumbra.js"></script>
    <script src="/scripts/spa.js"></script>
    <script>
        const listItems = document.querySelectorAll('li');
  const clickSound = new Audio('fnf.mp3');
  const hoverSound = new Audio('/fun/halley-lapfox/nav.ogg');

  listItems[0].classList.add('active');

  listItems.forEach(item => {
      item.addEventListener('click', () => {
          listItems.forEach(li => li.classList.remove('active'));
          item.classList.add('active');
          clickSound.currentTime = 0;
          clickSound.play();
          hoverSound.pause(); // Cancel hover sound on click
      });

      item.addEventListener('mouseover', () => {
          hoverSound.currentTime = 0;
          hoverSound.play();
      });
  });
