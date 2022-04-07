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

                document.getElementById("insert-name").innerHTML = userDoc.data().name;
                console.log("it worked");

            })
        } else {

            console.log("no user is signed in");
        }
    });
}




window.onload = insertName();