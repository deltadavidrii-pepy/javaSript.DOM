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

    container2.innerHTML 
)

})