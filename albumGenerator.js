const albums = [
    /*{
        "title": "title",
        "albumCover": "source",
        "info": "year // genre",
        "rating": "&star; &star; &star; &star; &star;",
        "why": "paragraph."
    }*/
];

const container = document.getElementById('items-container');

albums.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'item';

    itemDiv.innerHTML = `
        <h1 class="title">${item.title}</h1>
        <div class="etem">
            <div>
                <img class="album-cover" src="${item.albumCover}">
            </div>
            <p class="info">${item.info}</p>
            <p class="rating">${item.rating}</p>
            <p class="why">${item.why}</p>
        </div>
    `;

    itemDiv.querySelector('.etem').addEventListener('mouseenter', () => {
        itemDiv.querySelector('.etem').classList.add('highlight');
        itemDiv.querySelector('.title').classList.add('highlight');
    });

    itemDiv.querySelector('.etem').addEventListener('mouseleave', () => {
        itemDiv.querySelector('.etem').classList.remove('highlight');
        itemDiv.querySelector('.title').classList.remove('highlight');
    });

    container.appendChild(itemDiv);
});
