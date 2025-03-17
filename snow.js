//an extremely modified version of dokode.moe's snow code. its seasonal and the colors change based on the season. scrolling down a web page results in the snows opacity being changed. also the opacity is already random. eh

//change the colors here. add more if needed. ws stands for the wiggle speed i dont even know if the wiggle works but if it does then yeaah. fs stands for the fall speed.
const delay = ms => new Promise(res => setTimeout(res, ms));
const particles = [
  {s:3,fs:10,ws:10,colors: ['#ff99df', '#7eff64', '#ff64ce']}, // Spring colors
  {s:4,fs:25,ws:1.5,colors: ['#7eff64', '#fffa64', '#ffce64']}, // Summer colors
  {s:5,fs:15,ws:2,colors: ['#ff852b', '#ff622b', '#ff452b']}, // Fall colors
  {s:6,fs:10,ws:10,colors: ['#ffffff', '#defcff', '#f4feff', '#62f1ff']} // Winter colors
];


const styleSheet = document.createElement("style");
styleSheet.innerText = `
  @keyframes fall { 100% { margin-top: calc(100vh - 6px); } }
  @keyframes wiggle { 50% { margin-left: 10px; } }
`;
document.head.appendChild(styleSheet);

async function createParticles() {
  const holder = Object.assign(document.createElement('div'), { id: 'holder', style: 'z-index:9999;position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none' });
  document.body.appendChild(holder);
  const currentSeason = new Date().getMonth(); 
  const seasonParticles = currentSeason < 2 || currentSeason === 11 ? particles[3] : 
                         currentSeason < 5 ? particles[0] : 
                         currentSeason < 8 ? particles[1] : 
                         particles[2];

  for (let i = 0; i < 100; i++) {
    await delay(i * 100);
    const p = seasonParticles;
    const size = Math.floor(Math.random() * 4) + 3; // Random size between 3 and 6
    const color = p.colors[Math.floor(Math.random() * p.colors.length)];
    const elem = Object.assign(document.createElement('div'), {
      style: `width:${size}px;height:${size}px;background:${color};animation:wiggle ${p.ws}s infinite, fall ${p.fs}s linear infinite;position:absolute;left:${Math.random() * 99}%;`
    });
    holder.appendChild(elem);
  }
}

function toggle() {
  const holder = document.getElementById('holder');
  holder ? holder.remove() : createParticles();
}

document.addEventListener('DOMContentLoaded', toggle);

window.addEventListener('scroll', () => {
  const holder = document.getElementById('holder');
  if (holder) {
    const scrollY = window.scrollY;
    const opacity = Math.max(0, 1 - scrollY / 500);
    holder.style.opacity = opacity;
  }
});
