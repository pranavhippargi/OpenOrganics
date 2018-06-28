var text = document.getElementById("textArea_index");
var button = document.getElementById("submit_index_btn");
var testing_btn = document.getElementById("testing_btn");
var fname = document.getElementById("name");
var lname = document.getElementById("email").value;
var database = firebase.database();

function writeUserData() {
    console.log('In writeUserData')
    debugger
    firebase.database().ref('users').push({
      username: fname.value,
      email: email.value,
      text: text.value
    })
    .then((data) => {
      console.log(data)
      debugger
    })
    .catch((error)=> {
      console.log(error)
      debugger
    })
  }

function testing_123() {

    window.alert("Hello Worldy");
    
}