function read_description() {


    if (document.getElementById("title").innerHTML == "No. 1 Beef Noodle") {
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

    if (document.getElementById("title").innerHTML == "Atlas Steak + Fish") {
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

    if (document.getElementById("title").innerHTML == "Sushi S Japanese Restaurant") {
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


    if (document.getElementById("title").innerHTML == "Grand Dynasty Seafood Restaurant") {
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

    if (document.getElementById("title").innerHTML == "Personas Patio Restaurant And Lounge") {
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

read_description();




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