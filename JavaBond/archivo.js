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
const Kyoto = new Destination ("Kyoto", "3 hours", "Temples, market and Ramen", 5);
const Barcelona = new Destination ("Barcelona", "3 hours", "Street art, Museums and Calçots", 5);
const Beirut = new Destination ("Beirut", "3 hours", "Market, music and lebanese food", 5);
const Cairo = new Destination ("Cairo", "3 hours", "Pharos, tombs and falafel", 5);

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