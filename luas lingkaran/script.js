const hitungLuas = document.getElementById("hitung-luas");
const jariJari = document.getElementById("jari-jari");
const hasil = document.getElementById("hasil");

hitungLuas.addEventListener("click", function () {
  const luas = Math.PI * jariJari.value * jariJari.value;
  const keliling = 2 * Math.PI * jariJari.value;
  hasil.innerHTML = `Luas lingkaran adalah: ${luas} cm persegi <br> Keliling lingkaran adalah: ${keliling} cm`;
});
