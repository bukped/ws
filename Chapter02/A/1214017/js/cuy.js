    const form = document.querySelector('form');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      Postdata(formData);
      resetform();
    })


  function Postdata(formData){
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
      redirect: 'follow'
    };
    
    fetch("https://gocroot-baru.herokuapp.com/insertjum", requestOptions)
      .then(response => response.text())
      .then(result => AmbilResponse(result))
      .catch(error => console.log('error', error));
  }

  function AmbilResponse(result) {
    alert(result)
  }

  function resetform(){
    document.getElementById('form').reset();
  }






