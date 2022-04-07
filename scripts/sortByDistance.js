// Sorts restaurants by distance from low to high and populates sort by distance.html accordingly

function sortByDistance() {

    let restaurantCardTemplate = document.getElementById("restaurantCardTemplate");
    let restaurantCardGroup = document.getElementById("restaurantCardGroup");

    db.collection("Restaurants")
        .orderBy("distance")


    .limit(5)
        .get()
        .then(allRestaurants => {
            allRestaurants.forEach(doc => {

                var restName = doc.data().name;
                var restCost = doc.data().cost;
                var restDistance = doc.data().distance;



                let testRestaurantCard = restaurantCardTemplate.content.cloneNode(true);
                testRestaurantCard.getElementById("card-title").innerHTML = restName;
                testRestaurantCard.querySelector('.card-length').innerHTML =
                    "Distance: " + doc.data().distance + " km<br>" + "Price: " + doc.data().price + "<br>" + doc.data().vacancyString;



                testRestaurantCard.querySelector('.read-more').href = "/" + restName + ".html";

                testRestaurantCard.querySelector('img').src = "./images/" + restName + ".jpg";

                restaurantCardGroup.appendChild(testRestaurantCard);

            })

        })

}

sortByDistance();