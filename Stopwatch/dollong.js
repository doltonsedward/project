function Stopwatch(menit, detik, miliDetik) {
  var dalamMenit = document.getElementById("menit"),
    dalamDetik = document.getElementById("detik"),
    dalamMiliDetik = document.getElementById("miliDetik"),
    btnMulai = document.getElementById("mulai"),
    btnBerhenti = document.getElementById("berhenti"),
    btnReset = document.getElementById("reset");

  function mulaiMenghitung() {
    miliDetik++;
    if (miliDetik < 9) {
      dalamMiliDetik.innerHTML = "0" + miliDetik;
    }
    if (miliDetik > 9) {
      dalamMiliDetik.innerHTML = miliDetik;
    }
    if (miliDetik > 99) {
      detik++;
      dalamDetik.innerHTML = "0" + detik;
      miliDetik = 0;
      dalamMiliDetik.innerHTML = "0" + 0;
    }
    if (detik < 9) {
      dalamDetik.innerHTML = "0" + detik;
    }
    if (detik > 9) {
      dalamDetik.innerHTML = detik;
    }
    if (detik > 59) {
      menit++;
      dalamMenit.innerHTML = "0" + menit;
      detik = 0;
      dalamDetik.innerHTML = "0" + 0;
    }
  }

  btnMulai.onclick = () => { interval = setInterval(mulaiMenghitung) }
  btnBerhenti.onclick = () => { clearInterval(interval) }
  btnReset.onclick = () => {
    clearInterval(interval);
    menit = "00";
    miliDetik = "00";
    detik = "00";
    dalamDetik.innerHTML = detik;
    dalamMiliDetik.innerHTML = miliDetik;
    dalamMenit.innerHTML = menit;
  }
}

Stopwatch(00, 00, 00);