function sortByCost() {

    let restaurantCardTemplate = document.getElementById("restaurantCardTemplate");
    let restaurantCardGroup = document.getElementById("restaurantCardGroup");

    db.collection("Restaurants")
        .orderBy("cost")


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
                    "Price: " + doc.data().price + "<br>Distance: " + doc.data().distance + " km<br>" + doc.data().vacancyString;



                testRestaurantCard.querySelector('.read-more').href = "/" + restName + ".html";

                testRestaurantCard.querySelector('img').src = "./images/" + restName + ".jpg";

                restaurantCardGroup.appendChild(testRestaurantCard);

            })

        })

}

sortByCost();