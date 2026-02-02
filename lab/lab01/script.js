
function temperature() {
    let c = document.getElementById("celsius").value;
    let f = (c * 9 / 5) + 32;
    document.getElementById("fahrenheit").value = f;
}


function weight() {
    let kg = document.getElementById("kilo").value;
    let lbs = kg * 2.205;
    document.getElementById("pounds").value = lbs;
}

function distance() {
    let km = document.getElementById("km").value;
    let miles = km * 0.62137;
    document.getElementById("miles").value = miles;
}