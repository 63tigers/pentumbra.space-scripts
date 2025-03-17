//an extremely modified version of dokode.moe's snow code, but with stars. it spin. and the opacitys are random. 

const delay = ms => new Promise(res => setTimeout(res, ms));
const particles = [
  {s:50,fs:20,ws:10,colors: ['#FFF5AA']} //modify the star color here.
];

const styleSheet = document.createElement("style");
styleSheet.innerText = `
  @keyframes fall { 100% { margin-top: calc(100vh - 6px); } }
  @keyframes wiggle { 50% { margin-left: 10px; } }
  @keyframes spin-clockwise { 100% { transform: rotate(360deg); } }
  @keyframes spin-counterclockwise { 100% { transform: rotate(-360deg); } }
  .star {
    width: 50px;
    height: 50px;
    background: transparent;
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%); /*yeah kid thats a star*/
    background-blend-mode:screen;
    mix-blend-mode:screen;
    pointer-events:none;
    margin-top: -200px; /* Adjusted margin-top for stars container */
  }
`;
document.head.appendChild(styleSheet);

async function createParticles() {
  const holder = Object.assign(document.createElement('div'), { id: 'holder', style: 'z-index:9999;position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none' });
  document.body.appendChild(holder);

  for (let i = 0; i < 100; i++) {
    await delay(i * 100);
    const p = particles[0];
    const size = Math.floor(Math.random() * 21) + 10;
    const color = p.colors[Math.floor(Math.random() * p.colors.length)];
    const spinDirection = Math.random() < 0.5 ? 'spin-clockwise' : 'spin-counterclockwise';
    const spinSpeed = Math.random() * 5 + 5; // Random spin speed between 5s and 10s
    const opacity = Math.random() * 0.9 + 0.1; // Random opacity between 0.1 and 1
    const elem = Object.assign(document.createElement('div'), {
      className: 'star',
      style: `width:${size}px;height:${size}px;background:${color};animation:wiggle ${p.ws}s infinite, fall ${p.fs}s linear infinite, ${spinDirection} ${spinSpeed}s linear infinite;margin:10px;position:absolute;left:${Math.random() * 99}%;opacity:${opacity};`
    });
    holder.appendChild(elem);
  }
}


document.addEventListener('DOMContentLoaded', createParticles);
