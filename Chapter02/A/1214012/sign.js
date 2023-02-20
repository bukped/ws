var myHeaders = new Headers();
myHeaders.append("Content-Type", "text/plain");

var raw = "{\r\n    \"nama\": \"\",\r\n    \"email\": \"\",\r\n    \"password\": \"\",\r\n    \"country\": \"\",\r\n    \"city\": \"\",\r\n}";

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://eo6zl85caopf2qh.m.pipedream.net", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));