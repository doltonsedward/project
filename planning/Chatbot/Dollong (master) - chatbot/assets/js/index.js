document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input");
  inputField.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      let input = inputField.value;
      inputField.value = "";
      output(input);
    }
  });
  const submitButton = document.getElementById("submitBtn");
  submitButton.addEventListener("click", (sbmit) => {
    let input = inputField.value;
    inputField.value = "";
    output(input);
  });
});

function output(input) {
  let product;

  /*
    RegEx menghapus yang bukan kata/karakter spasi
    ketika ada spasi
    hapus nilai dan gantikan dengan nilai baru
  */

  let teks = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
  teks = teks
    .replace(/ anu/g, "") // anu itu -> itu
    .replace(/anu /g, "")
    .replace(/ anu /g, "")
    .replace(/ sih/g, "")
    .replace(/avv/g, "")
    .replace(/ kabs/g, "")
    .replace(/okay/g, "oke")

    // kamu
    .replace(/ km/g, " kamu")
    .replace(/ kmu/g, " kamu")
    .replace(/ kau/g, " kamu")
    .replace(/ mu/g, " kamu")
    .replace(/ lu/g, "kamu")
    .replace(/ u /g, "kamu")
    .replace(/bang /g, "bro")
    .replace(/jadi /g, "")

    .replace(/wkwk/g, "")
    .replace(/ kok/g, "")
    .replace(/ saja/g, "")
    .replace(/ sj/g, "")
    .replace(/ aja/g, "")
    .replace(/ uga/g, " juga")
    .replace(/wah /g, "")

    .replace(/kntl /g, "")
    .replace(/ kntl/g, "")
    .replace(/njir/g, "")
    .replace(/njir lah/g, "")

    .replace(/ bot/g, "")
    .replace(/[?]/g, "")
    .replace(/ v/g, "") // untuk chat seperti -> :v
    .replace(/ [?]/g, "");

  if (compare(prompts, replies, teks)) {
    // Mencari kata kunci yang benar dari prompts
    product = compare(prompts, replies, teks);
  } else if (teks.match(/(makasih|thanks)/gi)) {
    product = "Sama sama"
  } else {
    // Jika semua salah alihkan percakapan ke alternative / teks random
    product = alternative[Math.floor(Math.random() * alternative.length)];
  }


  // Update DOM
  addChat(input, product);
}

function compare(promptsArray, repliesArray, string) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < promptsArray.length; x++) {
    for (let y = 0; y < promptsArray[x].length; y++) {
      if (promptsArray[x][y] === string) {
        let replies = repliesArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        // inner Loop berhenti ketika nilai dari prompt nya di temukan atau sama dengan yang di replies
        break;
      }
    }
    if (replyFound) {
      // Loop luar berhenti kalau nilai dari prompt nya di temukan melalui array
      break;
    }
  }
  return reply;
}

function addChat(input, product) {
  const messagesContainer = document.getElementById("messages");

  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `<img src="assets/user.png" class="avatar"><span>${input}</span>`;
  messagesContainer.appendChild(userDiv);

  let botDiv = document.createElement("div");
  let botImg = document.createElement("img");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botImg.src = "assets/bot-mini.png";
  botImg.className = "avatar";
  botDiv.className = "bot response";
  botText.innerText = "Mengetik..";
  botDiv.appendChild(botText);
  botDiv.appendChild(botImg);
  messagesContainer.appendChild(botDiv);
  // Biarkan percakapan tetap berlanjut
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  // Bagian delay palsu
  setTimeout(() => {
    botText.innerText = `${product}`;
    textToSpeech(product)
  }, 2000)
}

