// var myHeaders = new Headers();
// myHeaders.append("token", "4ff476de48821feaef000fb5d5135394");
// myHeaders.append("Content-Type", "application/json");

// var raw = JSON.stringify({
//   "first_name": "Muhammad",
//   "last_name": "Faisal",
//   "nickname": "SorenLiux",
//   "email": "MuhammadFaisal2@gmail.com",
//   "password": "Chandra1234"
// });

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow'
// };

// fetch("https://eoixeju2haq0aoe.m.pipedream.net", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

//   defineComponent({
//     async run({ steps, $ }) {
//       await $.respond({
//         status: 200,
//         headers: { "my-custom-header": "value" },
//         body: { message: "My custom response" }, // This can be any string, object, Buffer, or Readable stream
//       });
//     },
//   });

  const form = document.querySelector('form');

  form.addEventListener('submit', (e) => {

    e.preventDefault();

    const formData = new FormData(form);
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var object = {};
    formData.forEach(function(value, key){
        object;
        object[key] = value;
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(object),
      redirect: 'follow',
    };

    console.log(requestOptions);
  
    fetch("https://eoixeju2haq0aoe.m.pipedream.net", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    document.getElementById('form').reset();
  })

  