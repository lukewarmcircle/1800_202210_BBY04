function writeTranslation() {
    //define a variable for the collection you want to create in Firestore to populate data
    var translationRef = db.collection("Restaurants_translation");

    translationRef.add({

        name: "No. 1 Beef Noodle",
        translation: "No. 1 Beef Noodle是間坐落於本拿比市的熱門台式餐廳。於2005年開幕，這間餐廳提供了道地的手工台灣料理，並主打溫馨和樂的用餐環境。"

    });

    translationRef.add({

        name: "Atlas Steak + Fish",
        translation: "Atlas Steak + Fish是個現代感與風情碰撞的指標性北美式牛排館。請盡情啜飲我們隨興的優雅，在氛圍中享用時興的服務與卓越的餐點。"
        

    });

    translationRef.add({

        name: "Sushi S Japanese Restaurant",
        translation: "Sushi S Japanese Restaurant提供各式各樣的美味壽司。無論你是嘴饞、匆忙用餐、找尋新的日式餐點，我們的菜單都有合適的餐點。請前來挖掘我們引以為豪的餐點內容吧！"

    });

    translationRef.add({

        name: "Grand Dynasty Seafood Restaurant",
        translation: "金殿皇朝海鮮料理多年來深得閣下的支持，不論籌辦大型婚宴或典雅的小型聚餐，都能滿足您的獨特要求，是大溫少數的高級食肆。星級配搭，提供最周全的聚餐、婚宴服務。"

    });

    translationRef.add({

        name: "Personas Patio Restaurant And Lounge",
        translation: "分享餐點，分享會面，分享時光，就在Personas Patio + Restaurant + Lounge。這不僅是本拿比最新的用餐地點，也是娛樂的目的地。無論是現場演奏、轉播即時運動賽事，都能一併搭配我們美味的餐點一併享用。"
    });

}

writeTranslation();
