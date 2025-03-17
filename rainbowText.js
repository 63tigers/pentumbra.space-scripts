const colors = ['red', 'orangered', 'yellow', 'lime', 'blue', '#9700ee', '#ee004f'];
const textElement = document.getElementById('rainbow');
const text = textElement.innerText.split('');
let index = 0;

function changeColors() {
  textElement.innerHTML = text.map((letter, i) => {
    const colorIndex = (i + index) % colors.length;
    return `<span style="color: ${colors[colorIndex]}">${letter}</span>`;
  }).join('');
  index++;
}

textElement.addEventListener('mouseover', () => {
  textElement.innerHTML = text.map(letter => `<span style="color: white">${letter}</span>`).join('');
});

textElement.addEventListener('mouseout', changeColors);

setInterval(changeColors, 200);
