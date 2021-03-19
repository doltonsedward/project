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
    ["selamat malam", "malam"],
    ["siapa pencipta kamu", "siapa penciptamu", "siapa yang menciptakan kamu", "siapa yang membuat kamu"],

    // bucin
    ["tau apa", "gatau", "engga", "ga"],
    ["ajarin apa", "ajar apa"],

    // respon tanya 
    ["baik"],

    // cover alternative + random chat
    ["cerita apa"],

    // pertanyaan advanced
    ["_help"],
    ["_jam", "jam berapa sekarang", "sekarang jam berapa", "jam berapa ini", "jam berapa", "sekarang jam"],
    ["_bucin"],

    ["", " "]
]

// jawaban bot
const replies = [
    // jawaban untuk pertanyaan formal
    ["Halo", "Hai", "Iya, selamat datang", "Hai.. apa kabar hari ini", "Halo, selamat datang di chatbot :D", "Iya", "Iya.."],
    [
        "Wo jelas baik.. bagaimana dengan mu", "Tentu baik, kamu?", "Baik.. aku mau nanya nih",
        "Baik.. gimana kabar mu?", "Sepertinya baik", "Tentu saja baik"
    ],
    ["Biasalaaah", "lagi memikirkan hidup kedepannya", "Hanya berdiam diri disini karena saya di desain hanya untuk membalas chat mu"],
    [
        "Namaku DollosChat", "DollosChat.. nama yang keren bukan?", "DollosChat biasa disingkat DC", "Chatbot DC",
        "Oh iya kenalin aku DollosChat", "Biasa dipanggil DollosChat :D"
    ],
    ["Selamat pagi", "Pagi juga", "Pagi juga kamunya", "Pagi :D"],
    ["Selamat malam", "Malam juga", "Malam juga kamunya", "Malam :)"],
    ["Saya diciptakan dengan kasih sayang", "Mereka banyak", "Orang orang hebat"],

    // bucin
    ["tau ga sebelah tulang rusuk ku ada di kamu... avv"],
    ["ajarin aku cara dapetin kamu.. avv"],

    // respon tanya 
    ["Okay senang mengetahui nya", "Senang mengetahui nya :D", ""],

    // cover alternative + random chat
    ["kemarin saya ketemu user random yang chatnya kasar :)"],

    // jawaban pertanyaan advanced
    [
        `Ini adalah beberapa kumpulan shorcut yang bisa kamu gunakan
      _help untuk kumpulan shorcut
      _jam untuk lihat jam sekarang
      _bucin untuk percakapan bucin`
    ],
    [hoursNow()],
    ["tau ga?", "yaudah ajarin aku aja"],

    ["Yah kok dikosongin.. :(", "Kosong? kayak keseharianmu ya?", "Tolong diisi saya bingung mau balas apa"]
]

// text random kalau tidak sesuai
const alternative = [
    "Hmm.. gimana ya",
    "Gini amat hidup",
    "Percakapan absurd macam apa ini",
    "Coba lagi.. mungkin ada typo",
    "Saya masih belajar sih.. ajar dong",
    "Ya sudah biarkan saya cerita",
    "Saya tidak mengerti.. :("
]

// masih planning
const happyness = [
    "haha"
]

// bagian sini masih planning
const coronavirus = ["Stay at homee!", "Pakai maskermu", "Tentu, saya tidak terkena covid", "Terkadang begitu"]

// sesi ngoding
var date;
var hours;
var minutes;
function hoursNow() {
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    return this.innerHTML = "sekarang sudah jam " + hours + ":" + minutes;
}