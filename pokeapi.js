const cache = {};
let cur = null;

const input = document.getElementById("input");
const display = document.getElementById("display");
const team = document.getElementById("team");

document.getElementById("find").onclick = findpokemon;
document.getElementById("add").onclick = addteam;

async function findpokemon() {
    const name = input.value.toLowerCase();

    if (cache[name]) {
        show(cache[name]);
        return;
    }

    const r = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);
    const data = await r.json();

    cache[name] = data;
    show(data);
}

function show(data) {
    cur = data;
    display.innerHTML = "";

    const img = document.createElement("img");
    img.src = data.sprites.front_default;
    display.appendChild(img);

    const audio = document.createElement("audio");
    audio.controls = true;
    audio.src = data.cries.latest;
    display.appendChild(audio);

    const grid = document.createElement("div");
    grid.className = "movegrid";

    for (let i = 0; i < 4; i++) {
        const s = document.createElement("select");
        s.className = "moves";

        // blank default option
        const blank = document.createElement("option");
        blank.value = "";
        blank.textContent = "";
        s.appendChild(blank);

        for (let j = 0; j < 30; j++) {
            const o = document.createElement("option");
            o.textContent = data.moves[j].move.name;
            o.value = data.moves[j].move.name;
            s.appendChild(o);
        }

        grid.appendChild(s);
    }

    display.appendChild(grid);
}

function addteam() {
    const card = document.createElement("div");
    card.className = "teamcard";

    const img = document.createElement("img");
    img.src = cur.sprites.front_default;

    const list = document.createElement("ul");

    const m = document.querySelectorAll(".moves");

    m.forEach(function (x) {
        if (x.value !== "") {
            const li = document.createElement("li");
            li.textContent = x.value;
            list.appendChild(li);
        }
    });

    card.appendChild(img);
    card.appendChild(list);
    team.appendChild(card);
}