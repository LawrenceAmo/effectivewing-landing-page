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
              var first_name = document.getElementById("firstName").value;
              var last_name = document.getElementById("lastName").value;
              //var role = document.getElementById("role").value;
              var cd = Date.now();

                  auth.createUserWithEmailAndPassword(email, password).then(cred =>{
                  sessionStorage.setItem("email", email);               
                    }).catch(err =>{
                      document.getElementById("err").innerHTML = err.message;
                      document.getElementById("err").style.display = "block";
                    })                          
              
              db.collection('User').add({                  
                firstName: first_name,
                lastName: last_name,
                balance: 0,
                referrals: 0,
                uid: '',
                email: email,
                coin: 300,
                code: cd
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
              sessionStorage.setItem("email", email);
                  window.location.replace("user.html");
                 
              }).catch(err =>{
                document.getElementById("err").innerHTML = err.message;
                document.getElementById("err").style.display = "block";
              })            
        }

        auth.onAuthStateChanged(user =>{         
          if(user){
            document.getElementById("register").classList = "d-none "; 
            document.getElementById("login").classList = "d-none ";
            document.getElementById("logout").classList = "nav-item  py-0  ";
           var admin = document.getElementById("admin");          
           admin.classList =  "nav-link ml-2 ";          
           admin.innerHTML = user.email;          
          }
        })

