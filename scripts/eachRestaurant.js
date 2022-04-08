/**
 * Reads restaurant description info from db into respective restaurant info page
 */
function read_description() {

    // If name of the html page is "No.1 Beef Noodle", the stored values in the db will be read into the info page"
    if (document.getElementById("pageName").innerHTML == "No. 1 Beef Noodle") {
        db.collection("Restaurants").doc("6wHiDkVvtnKFtcXsd1ml")
            .onSnapshot(function(description) {
                document.getElementById("restaurantName").innerHTML = description.data().name;
                document.getElementById("description").innerHTML = description.data().details;
                document.getElementById("street-num").innerHTML = description.data().street_num;
                document.getElementById("city").innerHTML = description.data().city;
                document.getElementById("postal-code").innerHTML = description.data().postal_code;
                console.log(description.data().name);
            })
    }

    // If name of the html page is "Atlas Steak + Fish", the stored values in the db will be read into the info page"
    if (document.getElementById("pageName").innerHTML == "Atlas Steak + Fish") {
        db.collection("Restaurants").doc("IJoUurngqfP1mG7J3KLj")
            .onSnapshot(function(description) {
                document.getElementById("restaurantName").innerHTML = description.data().name;
                document.getElementById("description").innerHTML = description.data().details;
                document.getElementById("street-num").innerHTML = description.data().street_num;
                document.getElementById("city").innerHTML = description.data().city;
                document.getElementById("postal-code").innerHTML = description.data().postal_code;
                console.log(description.data().name);
            })
    }

    // If name of the html page is "Sushi S Japanese Restaurant", the stored values in the db will be read into the info page"
    if (document.getElementById("pageName").innerHTML == "Sushi S Japanese Restaurant") {
        db.collection("Restaurants").doc("V5EhN6hmoAyX3tApfN7D")
            .onSnapshot(function(description) {
                document.getElementById("restaurantName").innerHTML = description.data().name;
                document.getElementById("description").innerHTML = description.data().details;
                document.getElementById("street-num").innerHTML = description.data().street_num;
                document.getElementById("city").innerHTML = description.data().city;
                document.getElementById("postal-code").innerHTML = description.data().postal_code;
                console.log(description.data().name);
            })
    }

    // If name of the html page is "Grand Dynasty Seafood Restaurant", the stored values in the db will be read into the info page"
    if (document.getElementById("pageName").innerHTML == "Grand Dynasty Seafood Restaurant") {
        db.collection("Restaurants").doc("39vS5d6jT03GXgsK62eg")
            .onSnapshot(function(description) {
                document.getElementById("restaurantName").innerHTML = description.data().name;
                document.getElementById("description").innerHTML = description.data().details;
                document.getElementById("street-num").innerHTML = description.data().street_num;
                document.getElementById("city").innerHTML = description.data().city;
                document.getElementById("postal-code").innerHTML = description.data().postal_code;
                console.log(description.data().name);
            })
    }

    // If name of the html page is "Personas Patio Restaurant And Lounge", the stored values in the db will be read into the info page"
    if (document.getElementById("pageName").innerHTML == "Personas Patio Restaurant And Lounge") {
        db.collection("Restaurants").doc("0PrB61A6lX16bd7fdAu0")
            .onSnapshot(function(description) {
                document.getElementById("restaurantName").innerHTML = description.data().name;
                document.getElementById("description").innerHTML = description.data().details;
                document.getElementById("street-num").innerHTML = description.data().street_num;
                document.getElementById("city").innerHTML = description.data().city;
                document.getElementById("postal-code").innerHTML = description.data().postal_code;
                console.log(description.data().name);
            })
    }


}

// Calls function and reads restaurant info from db
read_description();



/**
 *  Interactive image gallery in mobile view for the restaurant info pages.
 */
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";


}

/**
 * Translation button on restaurant info pages.
 */
document.addEventListener('DOMContentLoaded', function() {
    var button = document.createElement('input');
    button.type = 'button';
    button.id = 'translate';
    button.value = 'Translate';
    button.className = 'btn';

    button.onclick = function() {

        // Translates into chinese based on the name of the html page
        if (document.getElementById("pageName").innerHTML == "No. 1 Beef Noodle") {
            db.collection("Restaurants_translation").doc("TqMxdmHJopj8APB6nB12")
                .onSnapshot(function(description) {
                    document.getElementById("translate-box").innerHTML = description.data().translation;
                    console.log(description.data().name);
                })
        }

        // Translates into chinese based on the name of the html page
        if (document.getElementById("pageName").innerHTML == "Atlas Steak + Fish") {
            db.collection("Restaurants_translation").doc("YGuFQuJLgN6V1a2RzrLN")
                .onSnapshot(function(description) {
                    document.getElementById("translate-box").innerHTML = description.data().translation;
                    console.log(description.data().name);
                })
        }

        // Translates into chinese based on the name of the html page
        if (document.getElementById("pageName").innerHTML == "Sushi S Japanese Restaurant") {
            db.collection("Restaurants_translation").doc("vdt0NAHJjB9EboUjGghL")
                .onSnapshot(function(description) {
                    document.getElementById("translate-box").innerHTML = description.data().translation;
                    console.log(description.data().name);
                })
        }

        // Translates into chinese based on the name of the html page
        if (document.getElementById("pageName").innerHTML == "Grand Dynasty Seafood Restaurant") {
            db.collection("Restaurants_translation").doc("f0xxPM29l2aLFskwyCnR")
                .onSnapshot(function(description) {
                    document.getElementById("translate-box").innerHTML = description.data().translation;
                    console.log(description.data().name);
                })
        }

        // Translates into chinese based on the name of the html page
        if (document.getElementById("pageName").innerHTML == "Personas Patio Restaurant And Lounge") {
            db.collection("Restaurants_translation").doc("6Nu5B0xHkPqQiTIvTm2p")
                .onSnapshot(function(description) {
                    document.getElementById("translate-box").innerHTML = description.data().translation;
                    console.log(description.data().name);
                })
        }
    };

    var container = document.getElementById('translation');
    container.appendChild(button);
}, false);


// Sets local storage to be used by populateName() in review.js
function toReview() {

    let name = document.getElementById("pageName").innerHTML;
    localStorage.setItem("val", name);

}


/**
 * Reads a user's inputs for the most recent review.
 */
function populateReviewsDynamically() {


    // Reads from Reviews collection in db
    db.collection("Reviews")
        .limit(20)
        .get()
        .then(allReviews => {
            allReviews.forEach(doc => {

                // Reads reviews from db based on the page name of html file
                if (document.getElementById("pageName").innerHTML == "Sushi S Japanese Restaurant") {
                    if (doc.data().title == "Sushi S Japanese Restaurant") {
                        var reviewComment = document.getElementById("reviews").innerHTML = doc.data().comment;

                        /**
                         * If statements that control the number of displayed stars depending on user submitted review in the db
                         */
                        var starRating5 = document.getElementById("5");
                        var starRating4 = document.getElementById("4");
                        var starRating3 = document.getElementById("3");
                        var starRating2 = document.getElementById("2");
                        var starRating1 = document.getElementById("1");
                        if (doc.data().rating == "4") {
                            starRating5.style.display = "none";

                        }

                        if (doc.data().rating == "3") {
                            starRating5.style.display = "none";
                            starRating4.style.display = "none";
                        }

                        if (doc.data().rating == "2") {
                            starRating5.style.display = "none";
                            starRating4.style.display = "none";
                            starRating3.style.display = "none";
                        }

                        if (doc.data().rating == "1") {
                            starRating5.style.display = "none";
                            starRating4.style.display = "none";
                            starRating3.style.display = "none";
                            starRating2.style.display = "none";
                        }

                        /**
                         * Dynamically sets price rating based on user review
                         */
                        var costRating = document.getElementById("cost");
                        if (doc.data().cost == "5") {
                            costRating.innerHTML = "$$$$$";
                        }

                        if (doc.data().cost == "4") {
                            costRating.innerHTML = "$$$$";
                        }

                        if (doc.data().cost == "3") {
                            costRating.innerHTML = "$$$";
                        }

                        if (doc.data().cost == "2") {
                            costRating.innerHTML = "$$";
                        }

                        if (doc.data().cost == "1") {
                            costRating.innerHTML = "$";
                        }

                        // Reads name of reviewer into recent reviews
                        document.getElementById("username").innerHTML = doc.data().username;

                        // Reads recommendation verdict into recent review
                        document.getElementById("recommend").innerHTML = doc.data().recommend;

                        // Reads yes/no response for free parking into recent review
                        document.getElementById("parking").innerHTML = doc.data().freeParking;

                    }

                }

                // Reads reviews from db based on the page name of html file
                if (document.getElementById("pageName").innerHTML == "No. 1 Beef Noodle") {
                    if (doc.data().title == "No. 1 Beef Noodle") {
                        var reviewComment = document.getElementById("reviews").innerHTML = doc.data().comment;


                        /**
                         * If statements that control the number of displayed stars depending on user submitted review in the db
                         */
                        var starRating5 = document.getElementById("5");
                        var starRating4 = document.getElementById("4");
                        var starRating3 = document.getElementById("3");
                        var starRating2 = document.getElementById("2");
                        var starRating1 = document.getElementById("1");
                        if (doc.data().rating == "4") {
                            starRating5.style.display = "none";

                        }

                        if (doc.data().rating == "3") {
                            starRating5.style.display = "none";
                            starRating4.style.display = "none";
                        }

                        if (doc.data().rating == "2") {
                            starRating5.style.display = "none";
                            starRating4.style.display = "none";
                            starRating3.style.display = "none";
                        }

                        if (doc.data().rating == "1") {
                            starRating5.style.display = "none";
                            starRating4.style.display = "none";
                            starRating3.style.display = "none";
                            starRating2.style.display = "none";
                        }

                        /**
                         * Dynamically sets price rating based on user review
                         */
                        var costRating = document.getElementById("cost");
                        if (doc.data().cost == "5") {
                            costRating.innerHTML = "$$$$$";
                        }

                        if (doc.data().cost == "4") {
                            costRating.innerHTML = "$$$$";
                        }

                        if (doc.data().cost == "3") {
                            costRating.innerHTML = "$$$";
                        }

                        if (doc.data().cost == "2") {
                            costRating.innerHTML = "$$";
                        }

                        if (doc.data().cost == "1") {
                            costRating.innerHTML = "$";
                        }

                        // Reads name of reviewer into recent reviews
                        document.getElementById("username").innerHTML = doc.data().username;

                        // Reads recommendation verdict into recent review
                        document.getElementById("recommend").innerHTML = doc.data().recommend;

                        // Reads yes/no response for free parking into recent review
                        document.getElementById("parking").innerHTML = doc.data().freeParking;

                    }
                }



                // Reads reviews from db based on the page name of html file
                if (document.getElementById("pageName").innerHTML == "Grand Dynasty Seafood Restaurant") {
                    if (doc.data().title == "Grand Dynasty Seafood Restaurant") {
                        var reviewComment = document.getElementById("reviews").innerHTML = doc.data().comment;


                        /**
                         * If statements that control the number of displayed stars depending on user submitted review in the db
                         */
                        var starRating5 = document.getElementById("5");
                        var starRating4 = document.getElementById("4");
                        var starRating3 = document.getElementById("3");
                        var starRating2 = document.getElementById("2");
                        var starRating1 = document.getElementById("1");
                        if (doc.data().rating == "4") {
                            starRating5.style.display = "none";

                        }

                        if (doc.data().rating == "3") {
                            starRating5.style.display = "none";
                            starRating4.style.display = "none";
                        }

                        if (doc.data().rating == "2") {
                            starRating5.style.display = "none";
                            starRating4.style.display = "none";
                            starRating3.style.display = "none";
                        }

                        if (doc.data().rating == "1") {
                            starRating5.style.display = "none";
                            starRating4.style.display = "none";
                            starRating3.style.display = "none";
                            starRating2.style.display = "none";
                        }

                        /**
                         * Dynamically sets price rating based on user review
                         */
                        var costRating = document.getElementById("cost");
                        if (doc.data().cost == "5") {
                            costRating.innerHTML = "$$$$$";
                        }

                        if (doc.data().cost == "4") {
                            costRating.innerHTML = "$$$$";
                        }

                        if (doc.data().cost == "3") {
                            costRating.innerHTML = "$$$";
                        }

                        if (doc.data().cost == "2") {
                            costRating.innerHTML = "$$";
                        }

                        if (doc.data().cost == "1") {
                            costRating.innerHTML = "$";
                        }

                        // Reads name of reviewer into recent reviews
                        document.getElementById("username").innerHTML = doc.data().username;

                        // Reads recommendation verdict into recent review
                        document.getElementById("recommend").innerHTML = doc.data().recommend;

                        // Reads yes/no response for free parking into recent review
                        document.getElementById("parking").innerHTML = doc.data().freeParking;
                    }

                }


                // Reads reviews from db based on the page name of html file
                if (document.getElementById("pageName").innerHTML == "Atlas Steak + Fish") {
                    if (doc.data().title == "Atlas Steak + Fish") {
                        var reviewComment = document.getElementById("reviews").innerHTML = doc.data().comment;


                        /**
                         * If statements that control the number of displayed stars depending on user submitted review in the db
                         */
                        var starRating5 = document.getElementById("5");
                        var starRating4 = document.getElementById("4");
                        var starRating3 = document.getElementById("3");
                        var starRating2 = document.getElementById("2");
                        var starRating1 = document.getElementById("1");
                        if (doc.data().rating == "4") {
                            starRating5.style.display = "none";

                        }

                        if (doc.data().rating == "3") {
                            starRating5.style.display = "none";
                            starRating4.style.display = "none";
                        }

                        if (doc.data().rating == "2") {
                            starRating5.style.display = "none";
                            starRating4.style.display = "none";
                            starRating3.style.display = "none";
                        }

                        if (doc.data().rating == "1") {
                            starRating5.style.display = "none";
                            starRating4.style.display = "none";
                            starRating3.style.display = "none";
                            starRating2.style.display = "none";
                        }

                        /**
                         * Dynamically sets price rating based on user review
                         */
                        var costRating = document.getElementById("cost");
                        if (doc.data().cost == "5") {
                            costRating.innerHTML = "$$$$$";
                        }

                        if (doc.data().cost == "4") {
                            costRating.innerHTML = "$$$$";
                        }

                        if (doc.data().cost == "3") {
                            costRating.innerHTML = "$$$";
                        }

                        if (doc.data().cost == "2") {
                            costRating.innerHTML = "$$";
                        }

                        if (doc.data().cost == "1") {
                            costRating.innerHTML = "$";
                        }

                        // Reads name of reviewer into recent reviews
                        document.getElementById("username").innerHTML = doc.data().username;

                        // Reads recommendation verdict into recent review
                        document.getElementById("recommend").innerHTML = doc.data().recommend;

                        // Reads yes/no response for free parking into recent review
                        document.getElementById("parking").innerHTML = doc.data().freeParking;
                    }
                }


                // Reads reviews from db based on the page name of html file
                if (document.getElementById("pageName").innerHTML == "Personas Patio Restaurant And Lounge") {
                    if (doc.data().title == "Personas Patio Restaurant And Lounge") {
                        var reviewComment = document.getElementById("reviews").innerHTML = doc.data().comment;


                        /**
                         * If statements that control the number of displayed stars depending on user submitted review in the db
                         */
                        var starRating5 = document.getElementById("5");
                        var starRating4 = document.getElementById("4");
                        var starRating3 = document.getElementById("3");
                        var starRating2 = document.getElementById("2");
                        var starRating1 = document.getElementById("1");
                        if (doc.data().rating == "4") {
                            starRating5.style.display = "none";

                        }

                        if (doc.data().rating == "3") {
                            starRating5.style.display = "none";
                            starRating4.style.display = "none";
                        }

                        if (doc.data().rating == "2") {
                            starRating5.style.display = "none";
                            starRating4.style.display = "none";
                            starRating3.style.display = "none";
                        }

                        if (doc.data().rating == "1") {
                            starRating5.style.display = "none";
                            starRating4.style.display = "none";
                            starRating3.style.display = "none";
                            starRating2.style.display = "none";
                        }

                        /**
                         * Dynamically sets price rating based on user review
                         */
                        var costRating = document.getElementById("cost");
                        if (doc.data().cost == "5") {
                            costRating.innerHTML = "$$$$$";
                        }

                        if (doc.data().cost == "4") {
                            costRating.innerHTML = "$$$$";
                        }

                        if (doc.data().cost == "3") {
                            costRating.innerHTML = "$$$";
                        }

                        if (doc.data().cost == "2") {
                            costRating.innerHTML = "$$";
                        }

                        if (doc.data().cost == "1") {
                            costRating.innerHTML = "$";
                        }

                        // Reads name of reviewer into recent reviews
                        document.getElementById("username").innerHTML = doc.data().username;

                        // Reads recommendation verdict into recent review
                        document.getElementById("recommend").innerHTML = doc.data().recommend;

                        // Reads yes/no response for free parking into recent review
                        document.getElementById("parking").innerHTML = doc.data().freeParking;
                    }
                }
            })

        })

}
// Dynamically populates the most recent review onto restaurant info pages
populateReviewsDynamically();


/**
 * Writes seating availability from firebase into respective restaurant info pages
 */
function getVacancy() {

    // Reads db vacancy data for Grand Dynasty Seafood Restaurant and writes into html as a string based on numeric values
    if (document.getElementById("pageName").innerHTML == "Grand Dynasty Seafood Restaurant") {


        db.collection("Restaurant_vacancy").doc("PNrwlwPA24kSKN3dLHuH")
            .onSnapshot(function(description) {

                if (description.data().time13pm == "0" || description.data().time13pm == "1") {
                    document.getElementById("vacancy").innerHTML = "Lots of available seating";
                }

                if (description.data().time13pm == "2" || description.data().time13pm == "3") {
                    document.getElementById("vacancy").innerHTML = "Some available seating";
                }

                if (description.data().time13pm == "4" || description.data().time13pm == "5") {
                    document.getElementById("vacancy").innerHTML = "Limited seats available";
                }

                if (description.data().time13pm == "99") {
                    document.getElementById("vacancy").innerHTML = "No seats available";
                }

            })
    }


    // Reads db vacancy data for No.1 Beef Noodle and writes into html as a string based on numeric values
    if (document.getElementById("pageName").innerHTML == "No. 1 Beef Noodle") {


        db.collection("Restaurant_vacancy").doc("fbXNUnDiLfkha7zibTOg")
            .onSnapshot(function(description) {

                if (description.data().time13pm == "0" || description.data().time13pm == "1") {
                    document.getElementById("vacancy").innerHTML = "Lots of available seating";
                }

                if (description.data().time13pm == "2" || description.data().time13pm == "3") {
                    document.getElementById("vacancy").innerHTML = "Some available seating";
                }

                if (description.data().time13pm == "4" || description.data().time13pm == "5") {
                    document.getElementById("vacancy").innerHTML = "Limited seats available";
                }

                if (description.data().time13pm == "99") {
                    document.getElementById("vacancy").innerHTML = "No seats available";
                }

            })
    }


    // Reads db vacancy data for Sushi S Japanese Restaurant and writes into html as a string based on numeric values
    if (document.getElementById("pageName").innerHTML == "Sushi S Japanese Restaurant") {


        db.collection("Restaurant_vacancy").doc("KC5oSTSTD82MQRjVVhpW")
            .onSnapshot(function(description) {

                if (description.data().time13pm == "0" || description.data().time13pm == "1") {
                    document.getElementById("vacancy").innerHTML = "Lots of available seating";
                }

                if (description.data().time13pm == "2" || description.data().time13pm == "3") {
                    document.getElementById("vacancy").innerHTML = "Some available seating";
                }

                if (description.data().time13pm == "4" || description.data().time13pm == "5") {
                    document.getElementById("vacancy").innerHTML = "Limited seats available";
                }

                if (description.data().time13pm == "99") {
                    document.getElementById("vacancy").innerHTML = "No seats available";
                }

            })
    }


    // Reads db vacancy data for Personas Patio Restaurant and Lounge and writes into html as a string based on numeric values
    if (document.getElementById("pageName").innerHTML == "Personas Patio Restaurant And Lounge") {


        db.collection("Restaurant_vacancy").doc("v3ZoiB0VkF1ZmOiRivlh")
            .onSnapshot(function(description) {

                if (description.data().time13pm == "0" || description.data().time13pm == "1") {
                    document.getElementById("vacancy").innerHTML = "Lots of available seating";
                }

                if (description.data().time13pm == "2" || description.data().time13pm == "3") {
                    document.getElementById("vacancy").innerHTML = "Some available seating";
                }

                if (description.data().time13pm == "4" || description.data().time13pm == "5") {
                    document.getElementById("vacancy").innerHTML = "Limited seats available";
                }

                if (description.data().time13pm == "99") {
                    document.getElementById("vacancy").innerHTML = "No seats available";
                }

            })
    }

    // Reads db vacancy data for Atlas Steak + Fish and writes into html as a string based on numeric values
    if (document.getElementById("pageName").innerHTML == "Atlas Steak + Fish") {


        db.collection("Restaurant_vacancy").doc("awnsahmEHZjnAFTXvmKd")
            .onSnapshot(function(description) {

                if (description.data().time13pm == "0" || description.data().time13pm == "1") {
                    document.getElementById("vacancy").innerHTML = "Lots of available seating";
                }

                if (description.data().time13pm == "2" || description.data().time13pm == "3") {
                    document.getElementById("vacancy").innerHTML = "Some available seating";
                }

                if (description.data().time13pm == "4" || description.data().time13pm == "5") {
                    document.getElementById("vacancy").innerHTML = "Limited seats available";
                }

                if (description.data().time13pm == "99") {
                    document.getElementById("vacancy").innerHTML = "No seats available";
                }

            })
    }
}

// Writes vacancy data into restaurant info html pages
getVacancy();

/**
 *  Reads distance values from db into respective restaurant info pages
 */
function getDistance() {

    // Reads db distance data if the html page name matches restaurant name
    if (document.getElementById("pageName").innerHTML == "Atlas Steak + Fish") {
        db.collection("Restaurant_distance").doc("atlas")
            .onSnapshot(function(description) {


                document.getElementById("distance").innerHTML = description.data().distance;
            })
    }

    // Reads db distance data if the html page name matches restaurant name
    if (document.getElementById("pageName").innerHTML == "Sushi S Japanese Restaurant") {
        db.collection("Restaurant_distance").doc("sushiS")
            .onSnapshot(function(description) {


                document.getElementById("distance").innerHTML = description.data().distance;
            })
    }

    // Reads db distance data if the html page name matches restaurant name
    if (document.getElementById("pageName").innerHTML == "Personas Patio Restaurant And Lounge") {
        db.collection("Restaurant_distance").doc("personas")
            .onSnapshot(function(description) {


                document.getElementById("distance").innerHTML = description.data().distance;
            })
    }

    // Reads db distance data if the html page name matches restaurant name
    if (document.getElementById("pageName").innerHTML == "No. 1 Beef Noodle") {
        db.collection("Restaurant_distance").doc("beefNoodle")
            .onSnapshot(function(description) {


                document.getElementById("distance").innerHTML = description.data().distance;
            })
    }

    // Reads db distance data if the html page name matches restaurant name
    if (document.getElementById("pageName").innerHTML == "Grand Dynasty Seafood Restaurant") {
        db.collection("Restaurant_distance").doc("grandDynasty")
            .onSnapshot(function(description) {


                document.getElementById("distance").innerHTML = description.data().distance;
            })
    }
}

// Writes distance data into restaurant info pages
getDistance();