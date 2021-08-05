setInterval(changeHeader, 1000)

const textArray = ["timeless", "classic", "ageless", "enduring"]
index = 0

function changeHeader() {
    header = textArray[index];
    index++;
    if (index >= 4) {
        index = 0
    }
    displayHeader(header)
}

function displayHeader(header) {
    document.querySelector("#roll").innerHTML = header;
    let domHeader = document.querySelector('#roll')
    domHeader.style.fontWeight = '500';

}


