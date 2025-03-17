        var phrase = [
            "hmmmmm",
            "hmmmmm...............",
            "hmmmmm???!?!?!...",
        ];

        document.getElementById('phrasebut').onclick = function() {
            var randomIndex = Math.floor(Math.random() * phrase.length);
            document.getElementById('phrase').innerText = phrase[randomIndex];
        };

/*
    <button id="phrasebut">text</button>
    <span id="phrase"></span> */
