const API_URL = 'http://192.168.50.8:5000/books';


const xhr = new XMLHttpRequest();

function onRequestHandler(){
  if(this.redyState == 4 && this.status == 200 ){
    console.log(this.response);

  }

}
xhr.addEventListener("load", onRequestHandler);
xhr.open('GET', '${API_URL}/books');
xhr.send();
