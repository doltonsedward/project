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
    ["siapa pencipta kamu", "siapa penciptamu", "siapa yang menciptakan kamu", "siapa yang membuat kamu"],

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
    ["Selamat pagi", "Pagi juga", "Pagi juga kamunya", "Pagi :D", "Pagi.."],
    ["Selamat siang", "Siang juga", "Siang juga kamunya", "Siang ;)", "Siang.."],
    ["Selamat malam", "Malam juga", "Malam juga kamunya", "Malam :)", "Malam.."],
    ["Saya diciptakan dengan kasih sayang", "Mereka banyak", "Orang orang hebat"],

    // bucin 
    ["Tau ga sebelah tulang rusuk ku ada di kamu... avv"],
    ["Ajarin aku cara dapetin kamu.. avv"],

    // respon tanya kabar dll
    ["Okay senang mengetahui nya", "Senang mengetahui nya :D", "Siap"],

    // respon baik + true
    ["Makasihh", "Oh Tentu saja ;)", "Terima kasih teman.. kamu juga", "Senang mendengar nya"],
    ["Eh tidak.. nanti saja deh"],

    // respon buruk + false
    ["Okay", "Oh okay", "Yahhh :)", "Okay nanti saja", "Okay kapan kapan saja", "Okay makasih ^_^"],

    // cover alternative + random chat
    ["Yo watsap", "Apa sayang"],
    ["Kemarin saya ketemu user random yang chatnya kasar :)"],
    [
        "Saya di desain untuk menghibur kamu", "Saya bisa menemani mu 24 jam non stop ^_^", "Bisa menemanimu yang kesepian ;)",
        "Jadikan saya teman curhat mu maka kamu akan tau kegunaan ku", "Bisa jadi teman hidupmu.. avv", "Bisa chattan seharian denganmu"
    ],

    // jawaban pertanyaan advanced
    [
        `Ini adalah beberapa kumpulan shorcut yang bisa kamu gunakan
      _help untuk kumpulan shorcut
      _jam untuk lihat jam sekarang
      _bucin untuk percakapan bucin
      _q untuk quotes
      _qmem untuk quotes meme 
      
      cara lain untuk menggunakan shorcut ialah dengan menambah bot di depan contoh:
      bothelp, botjam dll`
    ],
    [hoursNow()],
    ["tau ga?", "yaudah ajarin aku aja", "Jadi sebenarnya salah satu pencipta ku menyukai kamu"],
    [
        `“ Hidup tak selamanya tentang pacar ”`,
        `“ Hidup memang tidak adil jadi biasakan dirimu kawan ”
      - DollosChatbot 2k21`,
        `“ Dan sepahit-pahitnya kehidupan mulai melebur saat ku terbiasa dengan keberadaanmu yang manis ”`,
        `“ Jangan menyerah atas impianmu, impian memberi tujuan hidup. Ingatlah sukses bukan kunci kebahagiaan, kebahagiaan adalah kunci kesuksesan ”`,
        `“ Bukanlah kesabaran jika masih mempunyai batas, dan bukanlah keikhlasan jika masih merasakan sakit ”`,
        `“ Aku adalah hujan, kalau ga suka tidak masalah silahkan berteduh ”`,
        `“ Gapapa masuk neraka, asal usaha sendiri ”`,
        `“ Masa depan adalah milih mereka yang menyiapkan hari ini ”
      - DollosChatbot 2k21`,
        `“ Seberapa indah mimpi jika tetap mimpi? ”
      - DollosChatbot 2k21`,
        `“  ”`,
        `“  ”`
    ],
    [
        `Programmer adalah kuli dibidang komputer
      # change my mind 
      `,
        `Hacker berasal dari programmer patah hati
      # change my mind 
      `,
        `Developer adalah programmer tapi punya proyek
      # change my mind 
      `,
        `Dosen adalah guru yang patah hati
      # change my mind 
      `,
        `Pacar adalah istri versi trial
      # change my mind 
      `,
        `Python tanpa bahasa komputer dan backend web dev hanyalah bahasa scripting biasa
      # change my mind 
      `
    ],

    ["Yah kok dikosongin.. :(", "Kosong? kayak keseharianmu ya?", "Tolong diisi saya bingung mau balas apa"]
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