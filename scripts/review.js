let restaurantName = localStorage.getItem("restaurantName");

db.collection("Restaurants").where("name", "==", restaurantName)
    .get()
    .then(queryName => {
        //see how many results you have got from the query
        size = queryName.size;
        // get the documents of query
        Names = queryName.docs;

        // We want to have one document per hike, so if the the result of 
        //the query is more than one, we can check it right now and clean the DB if needed.
        if (size = 1) {
            var thisName = Names[0].data();
            name = thisName.name;
            document.getElementById("restaurantName").innerHTML = name;
        } else {
            console.log("Query has more than one data")
        }
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });


function writeReview() {
    console.log("Review has been written to the database")
    let Title = document.getElementById("title").value;
    let Comment = document.getElementById("comment").value;
    let Recommend = document.querySelector('input[name="recommend"]:checked').value;
    let FreeParking = document.querySelector('input[name="freeParking"]:checked').value;
    let Cost = document.querySelector('input[name="cost"]:checked').value;

    console.log(Comment, Recommend, Parking, Cost);


    db.collection("Reviews").add({

        title: Title,
        comment: Comment,
        recommend: Recommend,
        freeParking: FreeParking,
        cost: Cost,


    })
}