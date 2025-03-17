//paragraphs and sources are kept because i may use this again in the future

const audioSources = [  
        {  
           src: '/audio/cotd/1471.ogg',  
           paragraphs: [  
              "Log Entry: 1471. Date: September 2nd, 1945 -- Dear diary, Another day, another failure. This time subject N3WB just looks blankly at the floor. The Russian subject still smells like urine, even after he was given a bath and deloused twice. And I think I might have killed the specimen from Mexico. His spleen is on the floor and hes not moving anymore. I can verify with certainty, however, that the barrier is not located in the spleen. Dr. Maxis -- no matter the cost. I wonder what he might think of the experiments on the little girl."  
           ]  
        },  
        {  
           src: '/audio/cotd/1472.ogg',  
           paragraphs: [  
              "Log Entry: 1472. Date: September 10th, 1945 -- Dear diary, today was a good day. The swelling has subsided, the ice helps. They made leberwurst for lunch. It was --. I still have not had any luck reprogramming any of the live specimens. Dr. Maxis --  key to unlocking the human mind will be more easily discovered on someone who isnt dead yet. I am not convinced. The army is stored until I can break this, this trust barrier. Oh, apparently someone in security found a spy on the move. Theyre delivering him from Verruckt, to replace the one that I broke."  
           ]  
        },  
        {  
           src: '/audio/cotd/1473.ogg',  
           paragraphs: [  
              "Log Entry: 1473. Date: September 17th, 1945. -- Dear diary, Today-- Get your hands off me you damn dirty Nazi! -- Uh-oh! This doesnt look good... -- Yeah, thats right, You want some of this? Im taking you home in bags, freak! -- Nein! I dont think so, American! -- Okay. -- I suppose this must be the replacement specimen. Time to get to work."  
           ]  
        },  
        {  
           src: '/audio/cotd/1474.ogg',  
           paragraphs: [  
              "Log Entry: 1474. Date: September 20th, 1945 -- Dear Diary, It would seem that the OSS realized that weve captured one of their spies. They tried to send a rescue team into Verrückt that was aw-?-the first batch of test subjects. I suspect that there are others moles in the organization. Dr. Harvey Yena and Dr. Peter McCain, to be precise. Dr. Maxis any Americans in Group 935, no matter how much genius they hold. Stupid Americans with their apple pies and baseball and children, but I digress. The new American test subject is interesting and muscle-y. His intellect seems low, but his will is strong. Like the others, he doesnt seem to know who he is anymore. Unlike the others, he keeps breaking the restraints and yelling at me. Test subject N3WB is still staring at the floor, muttering what sounds like some kind of proverb over and over again. I think his mind may have been destroyed by the process. Oh well. The Russian subject recently begun responding to stimuli, but only after injecting him with a new serum made primarily from vodka. Perhaps this is a breakthrough in the-"  
           ]  
        },  
        {  
           src: '/audio/cotd/1475.ogg',  
           paragraphs: [  
              'Log Entry: 1475. Date: October 1st, 1945. -- Dear diary, ---. As for the control group tests, they have been put on hold. Recently, I discovered that Doctor Maxis does not plan on mass producing the DG-2 as he swore he would. If he wont move those plans forward, then I wont continue following his dream of an undead army! He doesnt deserve his perch of power! He doesnt know what to do with it! But I know just what to do with him... and Ill take care of that little brat when I get the chance too...'  
           ]  
        }  
      ];  
  
     function typeOutText(textArray, element) {  
       let index = 0;  
       let charIndex = 0;  
       let interval;  
  
       const typeNextChar = () => {  
         if (index < textArray.length) {  
           if (charIndex < textArray[index].length) {  
             element.textContent += textArray[index][charIndex];  
             charIndex++;  
           } else {  
             charIndex = 0;  
             index++;  
             element.textContent += '\n\n';  
             setTimeout(typeNextChar, 500); // Wait 0.5 seconds before starting the next paragraph  
             return;  
           }  
           interval = setTimeout(typeNextChar, 50); // Continue typing
         } else {  
           clearTimeout(interval);  
         }  
       };  
       typeNextChar();  
     }  
  
     function playRandomAudio() {  
       const randomIndex = Math.floor(Math.random() * audioSources.length);  
       const selectedAudio = audioSources[randomIndex];  
       const audioPlayer = document.getElementById('audioPlayer');  
       const textElement = document.getElementById('text');  
  
       audioPlayer.src = selectedAudio.src;  
       audioPlayer.play();  
       textElement.textContent = '';  
       typeOutText(selectedAudio.paragraphs, textElement);  
     }  
  
     document.addEventListener('DOMContentLoaded', playRandomAudio);  
