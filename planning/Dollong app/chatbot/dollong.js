// dark theme
if (localStorage.getItem('preferredTheme') == 'dark') {
    setDarkMode(true)
}

function setDarkMode(isTrue) {
    var dbtn = document.getElementById('darkBtn');
    var lbtn = document.getElementById('lightBtn');

    if (isTrue) {
        lbtn.style.display = "block"
        dbtn.style.display = "none"
        localStorage.setItem('preferredTheme', 'dark');
    } else {
        lbtn.style.display = "none"
        dbtn.style.display = "block"
        localStorage.removeItem('preferredTheme');
    }

    document.body.classList.toggle('darkmode');
}
// tutup

// testing
var random = Math.floor(Math.random() * 5);
console.log(random);

function task() {
    var perintah = document.getElementById("userBox").value;
    var pesan = document.getElementById("chatLog");
    return { pesan, perintah };
}

function talk() {
    var { pesan, perintah } = task();
    pesan.innerHTML += "<div id='quest'><span>" + perintah + "</span></div>";

    if (perintah in otak) {
        pesan.innerHTML += "<div id='answer'><span>" + otak[perintah] + "</span></div><br>";
    } else if (perintah == '') {
        pesan.innerHTML += "<div id='answer'><span>" + "Tolong inputnya diisi" + "</span></div><br>";
    } else if (perintah == 'dollong') {
        pesan.innerHTML += "<div id='answer'><span>" + "Hai " + perintah + "</span></div><br>";
    } else {
        pesan.innerHTML += "<div id='answer'><span>" + random + "</span></div><br>";
    }
}


