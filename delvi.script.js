let datauser ={nama :"", jml :0, listPilihan :[], pilihanFinal: "", email :""};

//-- bagian 1: kik OK pertama--
document.getElementById('btn-ok-1').addEventListener('click', function(){
    datauser.nama =document.getElementById('input-nama').value;
    satauser.jml =perseInt(document.getElementById('input-jml'.value);

if (!datauser.nama || isNaN(datauser.jml) || datauser.jml <=0){
    alert("harus isi Nama dan jumlah pilihan y!a");
    return;
}
// buat kotak/ from pilihan 
let container2 = document.getElementById('section-2');
container2.innerHTML ="";


for (let i = 1; i <= dataUser.jml; i++) {
        container2.innerHTML =  container2.innerHTML + `
            <div class="form-group">
                <label>Pilihan ${i} :</label>
                <input type="text" class="pil-teks" placeholder="<Teks Pilihan ${i}>">
            </div>`;
    }

    container2.innerHTML =  container2.innerHTM + `<button id="btn-ok-2">OK</button>`;

    container2.classList.remove('hidden');


    // Pasang event listener untuk tombol baru
    document.getElementById('btn-ok-2').onclick = tahap2;


});

//-- tahap yang ke 2: klik OK yang ke dua (input pilihan)---

function tahapke2(){
let inputs = document.querySelectorAll('pilih- teks');
dataUser.listPilihan =Array.from(inputs).map(input => input.value);

     let adaYangKosong = false;

for (let i = 0; i < dataUser.listPilihan.length; i++) {
    if (dataUser.listPilihan[i] === "") {
        adaYangKosong = true;
        break; // Berhenti ngecek kalau sudah ketemu satu yang kosong
    }
}

if (adaYangKosong) {
    alert("Semua pilihan harus diisi teks!");
    return;
}

}

