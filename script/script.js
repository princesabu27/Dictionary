// Get the night mode toggle element
let nightModeToggle = document.getElementById("nightModeToggle");
let fontSelector = document.getElementsByClassName("font-selector")[0];
let wordDisplay = document.getElementById("resultWord");
let nounHeading = document.getElementById("nounHeading");
let li = document.querySelectorAll("li");
let moon = document.getElementById("moon");
let fonts = document.getElementById("fonts");
let nounNewList = document.getElementById ("nounDefinition");

// for Toggle night mode........................
// Add an event listener to the toggle
nightModeToggle.addEventListener("change", function () {
  // Check if the toggle is checked
  if (this.checked) {
    // If checked, set the background color of the body to black
    document.body.style.backgroundColor = "rgba(21, 21, 21, 0.988)";
    fontSelector.style.backgroundColor = "transparent";
    wordDisplay.style.color = "white";
    moon.style.color = "White";
    fonts.style.backgroundColor = "rgba(21, 21, 21, 0.988)";
    fonts.style.color = "white";
    // document.getElementById("noResult").style.color = "white"
    document.getElementById("tryAgain").style.color = "white"



    const newList = nounNewList.querySelectorAll('li');
    

    const listItems = document.querySelectorAll('li');
            
  // Iterate through each <li> and change its font
  listItems.forEach(li => {
      li.style.color = "white" // Change to your desired font



})

    // Iterate over each <li> element and change its color
    // li.forEach((item) => {
    //   item.style.color = "white";
    // });
  } else {
    // If not checked, reset the background color to default (or any other color you prefer)
    document.body.style.backgroundColor = "white"; // Change "white" to any other color if needed
    fontSelector.style.backgroundColor = "transparent"; // Reset fontSelector background color
    wordDisplay.style.color = "black";
    moon.style.color = "black";
    fonts.style.backgroundColor = "white";
    fonts.style.color = "black";
    // document.getElementById("noResult").style.color = "black"
    document.getElementById("tryAgain").style.color = "white"


    const listItems = document.querySelectorAll('li');
    listItems.forEach(li => {
      li.style.color = "black";// Change to your desired font color



})
    // Iterate over each <li> element and change its color
    // li.forEach((item) => {
    //   item.style.color = "black";
    // });
  }
});

//  For Font change..............

function changeFontStyle() {
  var selectedFont = fonts.options[fonts.selectedIndex].value;
  resultWord.style.fontFamily = selectedFont;
  resultSynonyms.style.fontFamily = selectedFont;


  const listItems = document.querySelectorAll('li');
            
  // Iterate through each <li> and change its font
  listItems.forEach(li => {
      li.style.fontFamily = selectedFont; // Change to your desired font



})
}

document.getElementById("fonts").addEventListener("change", changeFontStyle);
