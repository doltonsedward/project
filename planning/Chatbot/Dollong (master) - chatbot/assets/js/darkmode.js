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