const enterName = prompt ('Hello! whats your name?');
const name = alert ('Nice to meet you ' + enterName + ", thank you for visiting Walk it! We are a small company who promotes the work of independent tour guides around the world.");
const travel = prompt ('Want to learn more?');
if (travel == "yes"){
    alert("That's great " + enterName + ", we have a wide range of walking tours in some of the most exciting destinations.")
}
else{
    alert(enterName + " ,you should get walking.")
}

class tours {
    constructor(destination, duration, price, stock) {
        this.destination = destination;
        this.duration = duration;
        this.price= price;
        this.stock = stock;
        this.message = function () {
            console.log("Interested in walking tour of " + this.destination + ", only" + this.stock + " places left in stock.");
        };
        this.reservation = function (quantity) {
            this.stock = this.stock - quantity;
        };
        this.free = true;
    }
}

document.getElementById("geishaText").innerHTML = "The city of Kyoto blends is of vast contrast. Nested amongst modern buildings, you can stumble accross some traditional elements of Japanese culture.";
document.getElementById("beirutText").innerHTML = "Beirut is a fascinating city, with so much to offer. It has a unique street art scene which makes it worth walking around and getting lost....";
document.getElementById("gizaText").innerHTML = "The heat, the hustle and its unique history is what makes Cairo so speacil...."
document.getElementById("barcelonaText").innerHTML = "Barcelona has one of the most important music scenes in Spain, with many top DJs and the world renowened elrow....";

document.getElementById("destinationTitle").innerHTML = "DESTINATIONS, new ones added weekly."



/*const element1 = new Destination2 ("Kyoto", "3 hours", "Temples, market and Ramen", 5);
const element4 = new Destination4 ("Barcelona", "3 hours", "Street art, Museums and Calçots", 5);
const element2 = new Destination1 ("Beirut", "3 hours", "Market, music and lebanese food", 5);
const element3 = new Destination3 ("Cairo", "3 hours", "Pharos, tombs and falafel", 5);*/

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


