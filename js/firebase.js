



        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
            apiKey: "AIzaSyBcLvo-SBRFOkiAZ9cdiE6rwQEnsSF-s_c",
            authDomain: "effectivewingv1.firebaseapp.com",
            databaseURL: "https://effectivewingv1.firebaseio.com",
            projectId: "effectivewingv1",
            storageBucket: "effectivewingv1.appspot.com",
            messagingSenderId: "1062369936617",
            appId: "1:1062369936617:web:e775a0f2f7a786fac21c78",
            measurementId: "G-ZYV3FHCBFR"
          };
          firebase.initializeApp(firebaseConfig);
          
          var auth = firebase.auth();
          var db = firebase.firestore();          
       
          function signup() {
              var email = document.getElementById("email").value;
              var password = document.getElementById("password").value;
          
              auth.createUserWithEmailAndPassword(email, password).then(cred =>{               
                  window.location.replace("user.html");                 
              }).catch(err =>{
                document.getElementById("err").innerHTML = err.message;
                document.getElementById("err").style.display = "block";
              })     
          }

          /// Log out
          function logout() {
            auth.signOut().then(() =>{             
              window.location.replace("../index.html");               
            })             
        }


          /// Log in
          function signin() {
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;

            auth.signInWithEmailAndPassword(email, password).then(cred =>{
               
                  window.location.replace("user.html");
                 
              }).catch(err =>{
                document.getElementById("err").innerHTML = err.message;
                document.getElementById("err").style.display = "block";
              })            
        }

       

