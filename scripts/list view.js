function read_description() {
    db.collection("Restaurants").doc("6wHiDkVvtnKFtcXsd1ml")                                                      
    .onSnapshot(function(description) {                                                             
        console.log(description.data().name);                      
        ocument.getElementById("Rest1").innerHTML = description.data().name;      
        
      })
}
read_description()