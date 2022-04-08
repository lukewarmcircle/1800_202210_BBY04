let restaurantName = localStorage.getItem("restaurantName");

/**
 * Reads restaurant name from db into restaurantName span in review.html
 */
db.collection("Restaurants").where("name", "==", restaurantName)
    .get()
    .then(queryName => {

        size = queryName.size;

        Names = queryName.docs;


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


/**
 * Writes user reviews from review.html into db.
 */
function writeReview() {
    console.log("Review has been written to the database")

    // Selects user inputs from reviw form and stores them into variables
    let Title = document.getElementById("title").value;
    let Comment = document.getElementById("comment").value;
    let Recommend = document.querySelector('input[name="recommend"]:checked').value;
    let FreeParking = document.querySelector('input[name="freeParking"]:checked').value;
    let Cost = document.querySelector('input[name="cost"]:checked').value;
    let Rating = document.querySelector('input[name="stars"]:checked').value;
    let Username = document.getElementById("username").value;

    console.log(Comment, Recommend, Parking, Cost, Rating, Username);


    // Writes user input variables from review form into db
    db.collection("Reviews").add({

        title: Title,
        comment: Comment,
        recommend: Recommend,
        freeParking: FreeParking,
        cost: Cost,
        rating: Rating,
        username: Username,


    })

    // After review inputs are written, redirect to a success page
    .then(function() {
        window.location.href = "/reviewThanks.html";
    })


}


// Allows for clickable rating stars on the review page
$(':radio').change(function() {
    console.log('New star rating: ' + this.value);
});


// Auto-populates name of restaurant to reduce user input error
function populateName() {
    var name2 = localStorage.getItem("val");
    document.getElementById("title").value = name2;
}

populateName();

// Changes sizing of the disabled input text box for restaurant name
document.getElementById("title").style.width = "300px";