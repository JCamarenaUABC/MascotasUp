// 1: Select the element with the ID 'about'. 
//    Store the element in the variable `about`.
const about = document.getElementById("about");
about.style.border = "2px solid firebrick";

// 2: Select all the <h2> elements in the document.
//    Set the color of the <h2> elements to a different color.
var h2 = document.getElementsByTagName("h2");

for(var x=0; x<h2.length; x++){
    h2[x].style.backgroundColor="red";
}


// 3: Select all elements with the class '.card'. 
//    Set their background color to the color of your choice.
var card = document.getElementsByClassName("card");

for(var x=0; x<h2.length; x++){
    card[x].style.backgroundColor="green";
}

// 4: Select only the first <ul> in the document.
//    Assign it to a variable named `ul`.
var ul = document.getElementsByTagName("ul")[0];
ul.style.border = "2px solid indigo";

// 5: Select only the second element with the class '.container'.
//    Assign it to a variable named `container`.
const container = document.getElementsByClassName("container");
container[1].style.backgroundColor = "royalblue";

// 6: Select all <a> elements that have a 'title' attribute. 
//    Set their color value to the color of your choice.
var atitle = document.querySelectorAll("a[title]");

for(var x=0; x<h2.length; x++){
    atitle[x].style.backgroundColor="green";
}


