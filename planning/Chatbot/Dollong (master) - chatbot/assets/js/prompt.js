/*
  untuk perintah sesuai dengan rumus array untuk array pertama nya adalah 0, jadi jawabannya harus array 0 juga
  misal array pertama
  ["hi", dll....]

  jawabannya
  ["Halo", dll....]

  !noted
  tidak perlu gunakan tanda tanya di perintah / promp karena saya sudah atur tanda tanya nilai nya kosong
*/

// perintah user 
const prompts = [
    // pertanyaan formal
    ["hi", "hai", "hai kamu", "halo", "woi", "euy", "oi", "hey", "hey kamu"],
    ["apa kabar", "apa kabar hari ini", "kabarnya gimana", "gimana kabarnya"],
    ["lagi apa", "lagi apa ni", "lagi apa kamu", "ngapain", "lagi ngapain"],
    ["siapa namamu", "siapa nama kamu", "siapa kamu", "siapa ini", "dengan siapa ini", "kamu siapa", "siapa disana", "kamu ini siapa"],
    ["selamat pagi", "pagi"],
    ["selamat petang", "selamat siang", "siang"],
    ["selamat malam", "malam"],
    [
        "siapa pencipta kamu", "siapa penciptamu", "siapa yang menciptakan kamu", "siapa yang membuat kamu"
    ],

    // bucin
    ["tau apa", "gatau", "engga", "ga"],
    ["ajarin apa", "ajar apa"],

    // respon tanya kabar dll
    ["baik", "tentu saja baik"],

    // respon baik + true
    ["keren", "mantap", "boleh juga"],
    ["iya", "yaudah", "yaudah mana", "boleh", "boleh boleh", "oke", "ya", "yayaya"],

    // respon buruk + false
    ["tidak"],

    // cover alternative + random chat
    ["bro"],
    ["cerita apa"],
    ["kamu bisa apa", "bisa nya apa", "bisa apa"],

    // pertanyaan advanced
    ["_help", "bothelp"],
    ["_jam", "botjam", "jam berapa sekarang", "sekarang jam berapa", "jam berapa ini", "jam berapa", "sekarang jam"],
    ["_bucin", "botbucin"],
    ["_q", "botqtes", "botquotes"],
    ["_qmem", "botqmem", "botqmeme"],

    ["", " "]
]

// text random kalau tidak sesuai
const alternative = [
    "Hmm.. gimana ya",
    "Lalala",
    "Gini amat hidup",
    "Percakapan absurd macam apa ini",
    "Coba lagi.. mungkin ada typo",
    "Saya masih belajar sih.. ajar dong",
    "Ya sudah biarkan saya cerita",
    "Saya mau cerita boleh tidak?",
    "Saya tidak mengerti",
    "Kita memang tidak saling mengenal tapi izinkan saya menghiburmu sebisa ku.."
]

// masih planning
const happyness = [
    "haha"
]

// sesi ngoding
var date;
var hours;
var minutes;
function hoursNow() {
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    let totalDate = `sekarang jam ${hours} : ${minutes}`;

    return totalDate;
}