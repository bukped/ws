var myHeaders = new Headers();
myHeaders.append("token", "2f5d962d-d296-48a7-a772-10ede8b2390d");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://ghifar.requestcatcher.com/test", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

// Mencegah form untuk melakukan submit sebelum di-validasi
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  validateForm();
});

// Melakukan validasi pada setiap input
function validateForm() {
  const namaInput = document.querySelector('#nama');
  const emailInput = document.querySelector('#email');
  const hapeInput = document.querySelector('#hape');

  if (namaInput.value.trim() === '') {
    setErrorFor(namaInput, 'Nama lengkap harus diisi');
  } else {
    setSuccessFor(namaInput);
  }

  if (emailInput.value.trim() === '') {
    setErrorFor(emailInput, 'Email harus diisi');
  } else if (!isValidEmail(emailInput.value.trim())) {
    setErrorFor(emailInput, 'Email tidak valid');
  } else {
    setSuccessFor(emailInput);
  }

  if (hapeInput.value.trim() === '') {
    setErrorFor(hapeInput, 'Nomor HP harus diisi');
  } else if (!isValidPhoneNumber(hapeInput.value.trim())) {
    setErrorFor(hapeInput, 'Nomor HP tidak valid');
  } else {
    setSuccessFor(hapeInput);
  }
}

// Menandai input yang tidak valid dengan style merah dan menampilkan pesan error
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const errorMessage = formControl.querySelector('.error-message');
  formControl.className = 'mb-5 error';
  errorMessage.innerText = message;
}

// Menandai input yang valid dengan style hijau
function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'mb-5';
}

// Mengecek apakah email valid
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Mengecek apakah nomor HP valid
function isValidPhoneNumber(phoneNumber) {
  const phoneRegex = /^\d{10,12}$/;
  return phoneRegex.test(phoneNumber);
}