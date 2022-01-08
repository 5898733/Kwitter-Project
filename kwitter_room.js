var firebaseConfig = {
      apiKey: "AIzaSyCAoKyPCi3O0I-I5rntkhWQmaaeLOh0Hsc",
      authDomain: "kwitter-2a550.firebaseapp.com",
      databaseURL: "https://kwitter-2a550-default-rtdb.firebaseio.com",
      projectId: "kwitter-2a550",
      storageBucket: "kwitter-2a550.appspot.com",
      messagingSenderId: "675677751595",
      appId: "1:675677751595:web:6baadb81eeabc0a1b21d6e"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
