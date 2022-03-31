function sortByVacancy() {

    let restaurantCardTemplate = document.getElementById("restaurantCardTemplate");
    let restaurantCardGroup = document.getElementById("restaurantCardGroup");

    db.collection("Restaurants")
        .orderBy("vacancy1pm")


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
                    doc.data().vacancyString + "<br>Distance: " + doc.data().distance + " km<br>" + "Price: " + doc.data().price;



                testRestaurantCard.querySelector('.read-more').href = "/" + restName + ".html";

                testRestaurantCard.querySelector('img').src = "./images/" + restName + ".jpg";

                restaurantCardGroup.appendChild(testRestaurantCard);

            })

        })

}

sortByVacancy();