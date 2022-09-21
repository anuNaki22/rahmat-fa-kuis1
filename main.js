const form = document.getElementById("form");
const nama = document.getElementById("nama");
const tempatlahir = document.getElementById("tempatlahir");
const tanggallahir = document.getElementById("tanggallahir");
const telp = document.getElementById("telp");
const jenislomba = document.getElementById("jenislomba");

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
    const jenislombaValue = nama.value.trim();

    if (namaValue === "") {
        setErrorFor(nama, "nama tidak boleh kosong");
    } else {
        setSuccessFor(nama);
    }

    if (tempatlahirValue === "") {
        setErrorFor(tempatlahir, "tempatlahir tidak boleh kosong");
    } else {
        setSuccessFor(tempatlahir);
    }

    if (tanggallahirValue === "") {
        setErrorFor(tanggallahir, "tanggallahir tidak boleh kosong");
    } else {
        setSuccessFor(tanggallahir);
    }

    if (telpValue === "") {
        setErrorFor(telp, "telpon tidak boleh kosong");
    } else {
        setSuccessFor(telp);
    }

    if (jenislombaValue === "0") {
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