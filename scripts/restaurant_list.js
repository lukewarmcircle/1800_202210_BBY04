// Commented out after initial write of restaurant info into db

// function writeRestaurants() {
//     //define a variable for the collection you want to create in Firestore to populate data
//     var restaRef = db.collection("Restaurants");

//     restaRef.add({

//         id: "R01",
//         name: "No. 1 Beef Noodle",
//         city: "Burnaby",
//         street_num: "4741 Willingdon Ave",
//         province: "BC",
//         postal_code: "V5G 3H5",
//         cost: "2",
//         details: "No.1 Beef Noodle House, a popular Taiwanese restaurant with locations in Burnaby. First opened its doors to the public in 2005. Its original concept was family style dining which included the sharing of handcrafted, authentic Taiwanese cuisine enjoyed over engaging conversation with family and friends in an intimate and comfortable setting."
//     });

//     restaRef.add({

//         id: "R02",
//         name: "ROYAL PAAN",
//         city: "Burnaby  ",
//         street_num: "4735 Willingdon Ave",
//         city: "",
//         province: "BC",
//         postal_code: "V5G 3H5",
//         cost: "2",
//         details: "ROYAL PAAN® was established first in 2001 due to the fact that the founder wasn’t able to find the authentic Indian version of paan in Canada. After much research and experimentation, the first location was opened in Malton."
//     });

//     restaRef.add({

//         id: "R03",
//         name: "Sushi S Japanese Restaurant",
//         city: "Burnaby",
//         street_num: "4739 Willingdon Ave #1",
//         province: "BC",
//         postal_code: "V5G 3H5",
//         cost: "3",
//         details: "Sushi S Japanese Restaurant in Burnaby offers a variety of tasty sushi options. Whether you are craving sushi for dinner, grabbing a quick bite to eat, or looking for a new restaurant to order Japanese food from, our menu has something delicious for you. Discover our menu that is packed with flavour!"
//     });

//     restaRef.add({

//         id: "R04",
//         name: "Subway",
//         city: "Burnaby",
//         street_num: "4737 Willingdon Ave",
//         province: "BC",
//         postal_code: "V5H 4H8",
//         cost: "1",
//         details: "Your local Burnaby Subway® Restaurant, located at 4737 Willingdon Ave, brings delicious ingredients and mouth-watering flavors in billions of sandwich, salad and wrap combinations to you."
//     });

//     restaRef.add({

//         id: "R05",
//         name: "Grand Dynasty Seafood Restaurant",
//         city: "Burnaby",
//         street_num: "4331 Dominion St",
//         province: "BC",
//         postal_code: "V5G 1C7",
//         cost: "4",
//         details: "The elegant Grand Dynasty Seafood Restaurant is ready to impress with inspired Chinese cuisine and attentive service. Market fresh seafood and traditional made-to-order Dim Sum are served daily, along with a memorable menu of mouth-watering dishes."
//     });

//     restaRef.add({

//         id: "R06",
//         name: "Personas Patio Restaurant And Lounge",
//         city: "Burnaby",
//         street_num: "4331 Dominion St",
//         province: "BC",
//         postal_code: "V5G 1C7",
//         cost: "2",
//         details: "Share a meal, share a meeting, share a moment at Personas Patio + Restaurant + Lounge. Burnaby's newest dining and entertainment destination features live music, sports on a massive projector screen and mouth-watering dishes from our fabulous show kitchen."
//     });

//     restaRef.add({

//         id: "R07",
//         name: "Atlas Steak + Fish",
//         city: "Burnaby",
//         street_num: "4331 Dominion St",
//         province: "BC",
//         postal_code: "V5G 1C7",
//         cost: "5",
//         details: "Atlas Steak + Fish is a flirtatious and modern twist on the iconic North American steakhouse. Sip and savour in our warm and casually-elegant ambiance as we serve you with our stylish approach to hospitality and remarkable cuisine."
//     });

//     restaRef.add({

//         id: "R08",
//         name: "Villa Bistro",
//         street_num: "4331 Dominion St",
//         city: "Burnaby",
//         province: "BC",
//         postal_code: "V5G 1C7",
//         cost: "4",
//         details: "Fresh, House Made Contemporary Breakfast & Lunch"
//     });
//     restaRef.add({

//         id: "R09",
//         name: "El Inka Deli",
//         street_num: "3826 Sunset St",
//         city: "Burnaby",
//         province: "BC",
//         postal_code: "V5G 1T3",
//         cost: "2",
//         details: "El Inka Restaurant, serves Columbian, Mexican, Peruvian and Salvadorean Cuisine."
//     });
//     restaRef.add({

//         id: "R10",
//         name: "The New Cairo Café",
//         street_num: "sunset medical building, 3831 Sunset St",
//         city: "Burnaby",
//         province: "BC",
//         postal_code: "V5G 1T4",
//         cost: "1",
//         details: "A warm, welcoming cafe that serves quality sandwiches, soups, and salads at a decent price. one of the local favourites."
//     });

// }

// writeRestaurants();

function setRestaurantData(name) {
    localStorage.setItem("restaurantName", name);
}