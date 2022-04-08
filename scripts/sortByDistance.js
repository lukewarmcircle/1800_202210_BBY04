/**
 * Sorts restaurants by distance from low to high and populates sort by sortByDistance.html accordingly 
 */

function sortByDistance() {

    let restaurantCardTemplate = document.getElementById("restaurantCardTemplate");
    let restaurantCardGroup = document.getElementById("restaurantCardGroup");

    // Sort restaurant collection by distance from low to high
    db.collection("Restaurants")
        .orderBy("distance")

    // Selects 5 restaurants from db to sort
    .limit(5)
        .get()
        .then(allRestaurants => {
            allRestaurants.forEach(doc => {

                var restName = doc.data().name;
                var restCost = doc.data().cost;
                var restDistance = doc.data().distance;



                // Reads restaurant info from db into the current card template
                let testRestaurantCard = restaurantCardTemplate.content.cloneNode(true);
                testRestaurantCard.getElementById("card-title").innerHTML = restName;
                testRestaurantCard.querySelector('.card-length').innerHTML =
                    "Distance: " + doc.data().distance + " km<br>" + "Price: " + doc.data().price + "<br>" + doc.data().vacancyString;


                /* Reads restaurant name from db into the href of the "more info" button. For this reason, our some image/html file names contain
                   spaces to match the way they are written in the db. 
                */
                testRestaurantCard.querySelector('.read-more').href = "/" + restName + ".html";

                /* Reads image from local folder into card template based on restaurant name stored in DB. For this reason, our some image/html file
                   names contain spaces to match the way they are written in the db.
                */
                testRestaurantCard.querySelector('img').src = "./images/" + restName + ".jpg";

                // Appends current card to the list
                restaurantCardGroup.appendChild(testRestaurantCard);

            })

        })

}

sortByDistance();