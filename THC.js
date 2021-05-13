














  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB5pW2m45rBYXt64dhE2yd6i-eZlUWvViI",
    authDomain: "terre-haute-card-shop.firebaseapp.com",
    projectId: "terre-haute-card-shop",
    storageBucket: "terre-haute-card-shop.appspot.com",
    messagingSenderId: "92579124615",
    appId: "1:92579124615:web:4bbf058e5dbd9dd9e26f22"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    

    function signUp(){
        
        var email = document.getElementById("email")
        var password = document.getElementById("password")
        
        firebase.auth().createUserWithEmailAndPassword(email.value, password.value);
        
                      
        alert("Registered");
 
    }

    function login(){
        
        var email = document.getElementById("email");
        var password = document.getElementById("password");
        
         firebase.auth().signInWithemailAndPassword(email.value, password.value);
        
        
        alert("Signed In " + email);
    }