function LoginBtn() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            // console.log(user.uid);
            console.log("signed in");
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
LoginBtn();



