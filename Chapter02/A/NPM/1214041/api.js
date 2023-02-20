var myHeaders = new Headers();
myHeaders.append("token", "c1272dd9-a27e-45aa-bb1d-d78c4f935edc");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "first_name": "Muhammad",
  "last_name": "Faisal",
  "nickname": "SorenLiux",
  "email": "MuhammadFaisal2@gmail.com",
  "password": "Chandra1234"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://faisal.requestcatcher.com/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));