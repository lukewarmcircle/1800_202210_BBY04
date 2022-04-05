var currentUser;

// Authenticates user login
function LoginBtn() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            currentUser = db.collection("users").doc(user.uid);
            console.log(currentUser);
            console.log("signed in");
            insertName();
            const element = document.getElementById('btn-login');
            element.remove();
            // db.collection("users").doc(user.uid)
            //     .get()
            //     .then(function(doc) {
            //         var n = doc.data().name;
            //         console.log(n);
            //         //$("#username").text(n);
            //         document.getElementById("username").innerText = n;
            //     })
        } else {
            // No user is signed in.
            console.log("not signed in");
            const element = document.getElementById('btn-logout');
            element.remove();
        }
    });
}


// Creates personalized welcome message upon login
function insertName() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if user is signed in:
        if (user) {
            // Do something for the current logged-in user here: 
            console.log(user.uid);
            //go to the correct user document by referencing to the user uid
            currentUser = db.collection("users").doc(user.uid);
            //get the document for current user.
            currentUser.get().then(userDoc => {
                var user_Name = userDoc.data().name;
                console.log(user_Name);
                //method #1:  insert with html only
                document.getElementById("insert-name").innerHTML = userDoc.data().name; //using javascript
                console.log("it worked");
                //method #2:  insert using jquery
                //$("#insert-name").text(user_Name); //using jquery
            })
        } else {
            // No user is signed in.
        }
    });
}




window.onload = insertName();