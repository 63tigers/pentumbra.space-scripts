      document.addEventListener("DOMContentLoaded", function () {
        const audioFiles = [
          '/audio/acnh/1-20 K.K. Groove.mp3',
          '/audio/acnh/1-28 K.K. Swing.mp3',
          '/audio/acnh/1-31 K.K. Soul.mp3',
          '/audio/acnh/2-06 K.K. Synth.mp3',
          '/audio/acnh/2-11 K.K. House.mp3',
          '/audio/acnh/2-17 The K. Funk.mp3',
          '/audio/acnh/2-18 K.K. Fusion.mp3',
          '/audio/acnh/3-10 K.K. Island.mp3',
          '/audio/acnh/3-12 Drivin.mp3',
          '/audio/acnh/3-25 My Place.mp3',
          '/audio/acnh/3-28 Forest Life.mp3',
          '/audio/acnh/5-20. K.K. Slack-Key Instrumental.mp3',
          '/audio/acnh/5-22. K.K. Bashment Instrumental.mp3',
          '/audio/acnh/5-26. K.K. Hop Instrumental.mp3',
          '/audio/acnh/5-30. Chillwave Instrumental.mp3',
        ];

        const audioPlayer = document.getElementById('audioPlayer');

        function playRandomAudio() {
          const randomIndex = Math.floor(Math.random() * audioFiles.length);
          audioPlayer.src = audioFiles[randomIndex];
          audioPlayer.play();
        }

        audioPlayer.addEventListener('ended', playRandomAudio);
        playRandomAudio();
      });
