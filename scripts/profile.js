function read_description() {


    if (document.getElementById("pageName").innerHTML == "Profile") {
        db.collection("Profile").doc("Aq6R4K3ggjpWuGRTrZIV")
            .onSnapshot(function(description) {
                document.getElementById("name").innerHTML = description.data().name;
                console.log(description.data().name);
            })
    }

}
read_description();

