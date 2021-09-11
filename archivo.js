const enterName = prompt ('Hello! whats your name?');
const name = alert ('Nice to meet you ' + enterName + ", thank you for visiting Walk it! We are a small company who promotes the work of independent tour guides around the world.");
const travel = prompt ('Want to learn more?');
if (travel == "yes"){
    alert("That's great " + enterName + ", we have a wide range of walking tours in some of the most exciting destinations.")
}
else{
    alert(enterName + " ,you should get walking.")
}

function Tours (destination, duration, price, stock) {
    this.destination = destination;
    this.duration = duration;
    this.description = description;
    this.stock = stock;
    this.message = function() { console.log("Interested in walking tour of " + this.destination + ", only" + this.stock + " places left in stock.")
    }
    this.reservation = function (quantity) {
        this.stock = this.stock - quantity;
    }
    this.free = true;
}
const element1 = document.getElementById("geishaText");
element1.HTML = "The city of Kyoto blends is of vast contrast. Nested amongst modern buildings, you can stumble accross some traditional elements of Japanese culture.";

const element2 = document.getElementById("beirutText");
element2.HTML = "Beirut is a fascinating city, with so much to offer. It has a unique street art scene which makes it worth walking around and getting lost....";

const element3 = document.getElementById("gizaText");
element3.HTML = "The heat, the hustle and its unique history is what makes Cairo so speacil....";

const element4 = document.getElementById("barcelonaText");
element4.HTML = "Barcelona has one of the most important music scenes in Spain, with many top DJs and the world renowened elrow....";


const Kyoto = new Destination2 ("Kyoto", "3 hours", "Temples, market and Ramen", 5);
const Barcelona = new Destination4 ("Barcelona", "3 hours", "Street art, Museums and Calçots", 5);
const Beirut = new Destination1 ("Beirut", "3 hours", "Market, music and lebanese food", 5);
const Cairo = new Destination3 ("Cairo", "3 hours", "Pharos, tombs and falafel", 5);

Kyoto.message();
Barcelona.message();
Beirut.message();
Cairo.message();

if("stock" in Kyoto){
    if(Kyoto.stock > 0){
        alert(Kyoto.description)
    }
}
if("stock" in Barcelona){
    if(Barcelona.stock > 0){
        alert(Barcelona.description)
    }
}
if("stock" in Beirut){
    if(Beirut.stock > 0){
        alert(Beirut.description)
    }
}
if("stock" in Cairo){
    if(Cairo.stock > 0){
        alert(Cairo.description)
    }
}
Kyoto.reservation (5);
Barcelona.reservation (5);
Beirut.reservation (5);
Cairo.reservation (5);





let form = [Name, Surname, email, Text];
form.length
for(let i = 0; i < form.length; i++){
    console.log(form[i])
}
/*
const element1 = document.getElementById("geishaText");
element1.HTML = "The city of Kyoto blends is of vast contrast. Nested amongst modern buildings, you can stumble accross some traditional elements of Japanese culture.";

const element2 = document.getElementById("beirutText");
element2.HTML = "Beirut is a fascinating city, with so much to offer. It has a unique street art scene which makes it worth walking around and getting lost....";

const element3 = document.getElementById("gizaText");
element3.HTML = "The heat, the hustle and its unique history is what makes Cairo so speacil....";

const element4 = document.getElementById("barcelonaText");
element4.HTML = "Barcelona has one of the most important music scenes in Spain, with many top DJs and the world renowened elrow....";











/*
const destination = prompt (enterName + " Would you like to go to Kyoto, Cairo, Beirut or Barcelona?")
alert  (enterName + ("! ") + destination + " is a great city.");
if (destination == "Cairo") {
    alert("The pyramids were built as tombs and each stone is heavier than an elephant")
}
if (destination == "Beirut") {
alert("Beirut is one of the oldest cities in the world, dating back 5000 years.")
}
if (destination == "Osaka") {
    alert("Osaka’s Aquarium “Kaiyukan” is one of the largest aquariums in the world! ")
}
/*let ingresarNumero = parseInt (prompt("Ingresar Numero"));
for (let i = 4; i<=10; i++){
    let resultado = ingresarNumero + i ;
    alert (ingresarNumero +" + "+ i +" = " + resultado );
}*/
/*function enterEmail () {
    let enterEmail = prompt ("Enter your email address")
    alert("Your email adress is " + enterEmail)
}*/