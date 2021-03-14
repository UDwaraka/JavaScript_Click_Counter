var clicks = 0;
function inc() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
};
function dec() {
    clicks -= 1;
    document.getElementById("clicks").innerHTML = clicks;
};