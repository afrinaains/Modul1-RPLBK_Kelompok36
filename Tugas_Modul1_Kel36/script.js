const final = async () => {
    await output();
    await akhir ();
}
const nama = () => {
    namaSaya = document.getElementById("namaSaya").value;
  (namaSaya == "" || !namaSaya) ?
      alert ("Data Masih Kosong!!!") || console.log("Silakan isi nama anda terlebih dahulu!") : final()
}
const akhir = () => 
    console.log ("Halo kak!");

const output = () => {
    hasilnama= namaSaya;
    setTimeout( () => console.log (hasilnama) ,2000) ;
    setTimeout( () => console.log ("Selamat Datang di Tugas Modul 1 RPLBK Kelompok 36") ,1000) ;
    setTimeout( () => console.log ("Semoga betah ya kak! fufu"), 3000);
}
const nim = () => {
    nimSaya = document.getElementById("nimSaya").value;
  (nimSaya == "" || !nimSaya) ?
      alert ("Data Masih Kosong!!!") || console.log("Silakan isi NIM anda terlebih dahulu!") : hasilnim()
}
const hasilnim = () => {
    old=nimSaya
    setTimeout( () => console.log (old+" ") ,2000);
    setTimeout( () => console.log ("NIM Anda adalah") ,1000) ;
}
const umur = () => {
    umurSaya = document.getElementById("umurSaya").value;
  (umurSaya == "" || !umurSaya) ?
      alert ("Data Masih Kosong!!!") || console.log("Silakan isi umur anda terlebih dahulu!") : hasilumur()
}
const hasilumur = () => {
    old=umurSaya
    setTimeout( () => console.log (old+" tahun") ,2000);
    setTimeout( () => console.log ("Umur Anda adalah") ,1000) ;
}