function isinama() {
    var name = "Dian Putra Anugrahnu"
    var awal = document.getElementById("awal");
    awal.textContent = "Hi, Nama Saya  " + name + ".";
  }



  
  //profile
const btn = document.querySelector('#btn');   
var nama = document.getElementById("nama");
var today = new Date();
    var tgl = document.getElementById("tgl");
    var jenis = document.getElementsByName("jenis");
    var pesan = document.getElementById("pesan");
    var kluaran = document.getElementById("kluaran");
         
        const radioButtons = document.querySelectorAll('input[name="jenis"]');
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            let selectedSize;
            for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    selectedSize = radioButton.value;
                    break;
                }
            }

            if(nama.value == "") {
                alert("Nama Tidak Boleh Kosong");
              }
              else if (tgl.value == "") {
                alert("Tanggal Tidak Boleh Kosong");
              }
              else if (selectedSize.value == "") {
                alert("Jenis Kelamin Tidak Boleh Kosong");
              }
              else if (pesan.value == "") {
                alert("Pesan Tidak Boleh Kosong");
              }
              else {
                output.innerHTML = "Current time : " + today + "<br>" + "Nama : " + nama.value + "<br>" + "Tanggal Lahir : " + tgl.value + "<br>" + "Jenis Kelamin : "+ selectedSize + "<br>" + "Pesan : " + pesan.value;
              }
        });

    