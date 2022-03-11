function writeProfile()
var profileRef = db.collection("Profile");



writeProfile();

function changeInfo(e) {
e.preventDefault();

var name = getProfile("name");
var email = getProfile("email")
var phone = getProfile("phone")
var address = getProfile("address");

saveInfo(name, email, phone, address);
}

changeInfo(e);

function getProfile(id) {
return document.getElementbyId(id).value;

}
getProfile(id);

function saveInfo(name, email, phone, address) {
        var newProfileRef = profileRef.push();

        newProfileRef.set({
            name: name,
            email: email,
            phone: phone,
            address: address
        })

}
saveInfo(name, email, phone, address) 