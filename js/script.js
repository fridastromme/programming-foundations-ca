// Question 1

var outOfStock = false;

if (outOfStock === true) {
	console.log("Out of stock");
} else {
	console.log("In stock");
}


// Question 2


for(var i = 15; i <= 25; i++) {

    var num1 = 17;
    var num2 = 20;

    if (i === num1 || num2){
        console.log(i);
    }
}

// Question 3

var games = [
	{
		title: "Grand Theft Auto",
		rating: 4.48,
	},
	{
		title: "Portal 2",
		rating: 3.5,
	},
	{
		title: "Team Fortress",
		rating: null,
	},
	{
		title: "The Witcher",
		rating: 3.0,
	},
	{
		title: "The Elder Scrolls",
		rating: 2.9,
	},
];

var gamesContainer = document.querySelector("ul");

for (var i = 0; i < games.length; i++) {
   

    var rating = games[i].rating;

    if ((rating < 3.5) && (rating !== null)) {

        gamesContainer.innerHTML += "<li>" + games[i].title + " - " + games[i].rating + "</li>";
}
}


// Question 4

function whatIDontLike(unlikable) {
    var typeofUnlikable = typeof unlikable;

    if (typeofUnlikable === "string") {
    console.log("I dont like" + " " + unlikable);
    }

    if (typeofUnlikable !== "string")
    console.log("Please send in a string")
}

whatIDontLike("smalltalk");


// Question 5

function musicalInstruments(instrument1, instrument2){
    
    var convertedInstrument1 = parseFloat(instrument1);
    var convertedInstrument2 = parseFloat(instrument2);
    var subtracted = (instrument1 - instrument2);

    if (isNaN(convertedInstrument1) || (isNaN(convertedInstrument2))) {
        return "Invalid argument(s)";
} else 

return subtracted;

}

var subtract = document.querySelector("#subtraction");

subtract.innerHTML = musicalInstruments(8, 3);


// Question 6

var button = document.querySelector(".price");

var pageTitle = document.querySelector("title");
var background = document.querySelector("body");
var title = document.querySelector("h1");
//var titleLink = document.createElement("a");

var links = document.querySelector("ul");

function changeHTML() {
    pageTitle.innerHTML = "Updated title";
    background.style.backgroundColor = "yellow";
    title.style.color = "green";
    title.style.fontFamily = "impact";
    title.innerHTML = "<h1><a href=#>" + "Programming Foundations Course Assignment" + "</a></h1>";
    links.style.listStyle = "none";
    links.style.padding = "0px";

}

button.onclick = changeHTML;


// Question 7

var toys = [
	{
		name: "Lego",
		price: 15.6,
	},
	{
		name: "Master of the Universe",
		price: "28.3",
	},
	{
		name: "Barbie",
		price: null,
	},
	{
		name: "Mr Potato Head",
		price: 89.99,
	},
];


    for (var i = 0; i < toys.length; i++) {

    console.log(toys[i].price);
 }

    sum = (15.6 + 28.3 + null + 89.99);

    console.log(sum);

var toysSum = document.querySelector("#total");

function displaySum() {
    toysSum.innerHTML = sum;

}

displaySum();





