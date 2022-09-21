const form = document.getElementById("form");
const nama = document.getElementById("nama");
const tempatlahir = document.getElementById("tempatlahir");
const tanggallahir = document.getElementById("tanggallahir");
const telp = document.getElementById("telp");
const jenislomba = document.getElementById("jenislomba");
const namaUnit = document.getElementById("namaUnit");
const namaKel = document.getElementById("namaKel");
const namaKec = document.getElementById("namaKec");

let isFormValid = 1;
form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
    if (isFormValid == 1) {
        Swal.fire(
            'Good job!',
            'Form Submitted!',
            'success'
        )
    } else {
        isFormValid = 1;
    }
});

function checkInputs() {
    //get input
    const namaValue = nama.value.trim();
    const tempatlahirValue = tempatlahir.value.trim();
    const tanggallahirValue = tanggallahir.value.trim();
    const telpValue = telp.value.trim();
    const jenislombaValue = jenislomba.value.trim();
    const namaUnitValue = namaUnit.value.trim();
    const namaKelValue = namaKel.value.trim();
    const namaKecValue = namaKec.value.trim();


    if (namaValue === "") {
        setErrorFor(nama, "nama tidak boleh kosong");
    } else {
        setSuccessFor(nama);
    }

    if (tempatlahirValue === "") {
        setErrorFor(tempatlahir, "tempat lahir tidak boleh kosong");
    } else {
        setSuccessFor(tempatlahir);
    }

    if (tanggallahirValue === "") {
        setErrorFor(tanggallahir, "tanggal lahir tidak boleh kosong");
    } else {
        setSuccessFor(tanggallahir);
    }

    if (namaUnitValue === "") {
        setErrorFor(namaUnit, "nama tidak boleh kosong");
    } else {
        setSuccessFor(namaUnit);
    }

    if (namaKelValue === "") {
        setErrorFor(namaKel, "nama tidak boleh kosong");
    } else {
        setSuccessFor(namaKel);
    }

    if (namaKecValue === "") {
        setErrorFor(namaKec, "nama tidak boleh kosong");
    } else {
        setSuccessFor(namaKec);
    }

    if (telpValue === "") {
        setErrorFor(telp, "telpon tidak boleh kosong");
    } else {
        setSuccessFor(telp);
    }

    if (jenislombaValue === "0" || "• Pilih Jenis Lomba •") {
        setErrorFor(jenislomba, "Pilih jenis lomba Anda");
    } else {
        setSuccessFor(jenislomba);
    }
    
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    small.innerText = message;
    isFormValid = 0;
    if (isFormValid == 0) {
        console.log(message);
    }
    formControl.className = "form-control error";
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}