function tickUp() {
    let c = document.getElementById("counter");
    let n = parseInt(c.textContent);
    c.textContent = n + 1;
}

function tickDown() {
    let c = document.getElementById("counter");
    let n = parseInt(c.textContent);
    c.textContent = n - 1;
}

function runForLoop() {
    let n = parseInt(document.getElementById("counter").textContent);
    let s = "";

    for (let i = 0; i <= n; i++) {
        s += i + " ";
    }

    document.getElementById("forLoopResult").textContent = s.trim();
}

function showOddNumbers() {
    let n = parseInt(document.getElementById("counter").textContent);
    let s = "";

    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            s += i + " ";
        }
    }

    document.getElementById("oddNumberResult").textContent = s.trim();
}

function addMultiplesToArray() {
    let n = parseInt(document.getElementById("counter").textContent);
    let a = [];

    for (let i = n; i >= 5; i--) {
        if (i % 5 === 0) {
            a.push(i);
        }
    }

    console.log(a);
}

function printCarObject() {
    let t = document.getElementById("carType").value;
    let m = document.getElementById("carMPG").value;
    let c = document.getElementById("carColor").value;

    let o = {
        cType: t,
        cMPG: m,
        cColor: c
    };

    console.log(o);
}

function loadCar(n) {
    let o;

    if (n === 1) o = carObject1;
    else if (n === 2) o = carObject2;
    else if (n === 3) o = carObject3;

    document.getElementById("carType").value = o.cType;
    document.getElementById("carMPG").value = o.cMPG;
    document.getElementById("carColor").value = o.cColor;
}

function changeColor(n) {
    let p = document.getElementById("styleParagraph");

    if (n === 1) p.style.color = "red";
    else if (n === 2) p.style.color = "green";
    else if (n === 3) p.style.color = "blue";
}