//unntuk wadah TEMPAT MENYIMPAN SEKALIGUS UNTUK MENGISI teks dengan variable NAMA, JUMLAH, LISTPILIHAN, PILIHANFINAL, DAN EMAIL
let datauser ={nama :"", jml :0, listPilihan :[], pilihanFinal: "", email :""};

//-- tahap yang ke 1: klik OK yang ke 1 (input pilihan)--
document.getElementById('btn-ok-1')

// proses untuk mendengar/melakukan perintah "klik"
.addEventListener('click', 
    function() {
    // digunakan utuk menampilkan kotak input NAMA dan memasukan nama di kolom ini
    dataUser.nama = document.getElementById('input-nama').value;

     // digunakan utuk menampilkan kotak input JUMLAH PILIHAN dan memasukan angka brpa yang ingin di buat di kolom ini
    dataUser.jml = parseInt(document.getElementById('input-jml').value);

    // digunakan untuk memasukan data yang sesuai dengan ketentuan. misalkan "nama" harus ada di isi, kemudian "jumlah" harus berupa angka.
    if (!dataUser.nama || isNaN(dataUser.jml) || dataUser.jml <= 0) {
        // alert artinya harus di isi semua.
        alert("Harap isi Nama dan Jumlah Pilihan dengan benar!");

        return;
    }


// buat kotak/ from pilihan yang kosong di HTML yang memiliki id="section-2"untuk menampilkannya.
let container2 = document.getElementById('section-2');
// digunnakan untuk menulis pada kotak container2.
container2.innerHTML ="";

//melakukan perulangan untuk menampilkan sebanyak apa yang kita inginkan pada kotak "JUMLAH PILIHAN". misal "mulai hitungan dari angka 1. Selama angka i masih lebih kecil atau sama dengan jumlah yang diketik user (misal user ketik 3), maka jalankan perintah di bawah."
for (let i = 1; i <= dataUser.jml; i++) {

    // digunakan untuk mengamil kotak kemudian tambahkan dengan baris HTML baru untuk  di belakangnya.
    // ${i} digunakan untuk memanggil variable ke dalam teks dan berubah otomatis. misalh pilihan 1, pilihan 2 (tergantung seberapa banyak kita memasuki jumlah angka yang di inginkan).  
        container2.innerHTML =  container2.innerHTML + `<div class="form-group"><label>Pilihan ${i} :</label>
                <input type="text" class="pil-teks" placeholder="<Teks Pilihan ${i}>">
            </div>`;
    }

// digunnakan untuk mengambil semua kotak yg sudah di input. kemudian tambah tombol button dengan tulisan 'OK' yg di bawahnya.
    container2.innerHTML =  container2.innerHTM + `<button id="btn-ok-2">OK</button>`;
// untuk menutup sementara class CSS 
    container2.classList.remove('hidden');


    // Pasang tirai untuk tombol baru
    document.getElementById('btn-ok-2').onclick = tahap2;


});

//-- tahap yang ke 2: klik OK yang ke dua (input pilihan)---

function tahapke2(){
    // querySelectorAll digunakan untuk mencari semua kotak dengan mencari semua elemen yang punya class "pil-teks"
let inputs = document.querySelectorAll('pilih- teks');

// Array.from() digunakan untuk mengubah daftar kotak tadi menjadi Array sehingga bisa menggunakan fungsi Array .map().
// input => input.value digunakan untuk melihat setiap kotak input satu persatu, lalu mengambil idi value itu.
dataUser.listPilihan =Array.from(inputs).map(input => input.value);

     let adaYangKosong = false;// sudah terisi semua

for (let i = 0; i < dataUser.listPilihan.length; i++) {// "(let i = 0; i" di mulai membuat dari 0 indek kotak kemudian "dataUser.listPilihan.length; i++"" digunakan untuk melakukan perulangan, jika saya mengetik 5 maka melakukan perulangan selama 5 kali 
    if (dataUser.listPilihan[i] === "") {//dataUser.listPilihan[i] digunakan untuk mengambil salah satu kotak dari daftar pilihan berdasarkan urutan ke-i. kemudian tanda === "" arti mengecek apakah isi kotak itu adalah teks kosong(yang user belum ketik apa-apa).
        adaYangKosong = true;// maka jika kotak lainya terisi, maka di anggap ada yang kosong.
        break; // Berhenti ngecek kalau sudah ketemu satu yang kosong
    }
}

if (adaYangKosong) { // jika variable adaYangKosong bernilai true maka ada kotak yg kosong.
    alert("Semua pilihan harus diisi teks!");// maka semua pilihan harus di isi dengan teks di sini.
    return;// berhenti
}

// untuk radio button  dan imput email 

let container3 = document.getElementById('section-3');// buat kotak/ from pilihan yang kosong di HTML yang memiliki id="section-3"untuk menampilkannya.
    let radionHtml = `<h3>Pilih salah satu:</h3>`;// digunakan untuk menampung kode HTML untuk "pilih-pilih" nanti. sehingga ak di sini membuat atau komen "pilih salah satu" supaya tidak binggung.

    dataUser.listPilihan.forEach((intem, idx) => {// forEach digunakan untuk setipa data yang ada di dalam daftar yang ada, "item" digunakan untuk menentukan isi pilihannnya."index" adalah digunakan untuk no urutan.
        
        // penjelasan ke seleuruhnnya bagian ini : digunakan untuk mengubah daftar teks yang sudah aku miliki menjadi tampilan tombol bulat yang bisa diklik oleh user di layar.
        radioHtml =  radioHtml + `
            <div class="form-group">
                <input type="radio" name="pilih_radio" value="${item}" id="rad${idx}">
                <label for="rad${idx}" style="color:black; margin-left:10px;">${item}</label>
            </div>`;
    });// "radioHtml =  radioHtml +" digunakan untuk mengambil isi radioHtml yg sudah ada, kemudian menambhkan satu blok kode HTML di bawahnya lagi. kemudian "value="${item}" digunakan untuk menyimpan data aslinya nanti
    // for="rad${idx}" digunakan untuk menghubungkan teks dengan tombol.

    radioHtml = radioHtml + `
        <div class="form-group" style="margin-top:20px;">
            <label>Email :</label>
            <input type="email" id="input-email" placeholder="contoh@mail.com">
        </div>
        <button id="btn-ok-3">OK</button>`;// digunakan untuk pengumpulan identitas dan penutup dari proses pemilihan. setelah aku memilih salah  sat dari radio button yg sudah aku buat, aku bakalan nambahin atribut berupa "EMAIL".

        
    

}

