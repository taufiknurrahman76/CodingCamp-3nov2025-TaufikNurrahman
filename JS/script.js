// welcomeMessage();

function welcomeMessage() {
    let name = prompt("Please enter your name:");

    if (name != null){
    document.getElementById("welcome-speech").innerText = 'Hello, ' + name + '! Welcome to MY PROFILE.';
    }
}

 // tampilkan waktu saat ini (realtime)
function updateTime() {
  const now = new Date();
  document.getElementById("currentTime").textContent = now.toString();
}
setInterval(updateTime, 1000);
updateTime();

// event ketika tombol Submit ditekan
document.getElementById("messageForm").addEventListener("submit", function (e) {
  e.preventDefault(); // cegah reload halaman

  // ambil nilai dari input
  const nama = document.getElementById("nama").value.trim();
  const tgl = document.getElementById("tgl").value;
  const genderEl = document.querySelector('input[name="gender"]:checked');
  const pesan = document.getElementById("pesan").value.trim();

  // validasi sederhana
  if (nama === "" || tgl === "" || !genderEl || pesan === "") {
    alert("Semua kolom harus diisi terlebih dahulu!");
    return;
  }

  // tampilkan hasil ke kolom output
  document.getElementById("outNama").textContent = nama;
  document.getElementById("outTgl").textContent = tgl;
  document.getElementById("outGender").textContent = genderEl.value;
  document.getElementById("outPesan").textContent = pesan;

  // opsional: reset form setelah submit
  // e.target.reset();
});
