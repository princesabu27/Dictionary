// Global declarations
let searchBar = document.getElementById("searchBar");
let searchButton = document.getElementById("searchButton");
let resultWord = document.getElementById("resultWord");
let resultSounding = document.getElementById("resultSounding");
let resultSource = document.getElementById("resultSource");
let resultSynonyms = document.getElementById("resultSynonyms");
const audioPlayer = document.getElementById("audioPlayer");
const playButton = document.getElementById("playButton");
let noResult = document.getElementById("noResult");
let tryAgain = document.getElementById("tryAgain");
let audioSource;
let myJson;
let verbContainer = document.getElementById("verbContainer");
let verbMeaningCOntainer = document.getElementById("verbMeaningCOntainer");
let nounMeaningContainer = document.getElementById("nounMeaningContainer");
let nounContainer = document.getElementById("nounContainer");
// let verbDefinitions;
let meanings;
// let nounDef;
// let verbDef
// let nounDefinition;

let newVerbDef = document.getElementById("verbDefinition");

let newNounDef = document.getElementById("nounDefinition");

// Function for search option
searchButton.addEventListener("click", function () {
  let searchText = searchBar.value;
  let myApi =
    "https://api.dictionaryapi.dev/api/v2/entries/en/" +
    encodeURIComponent(searchText);

  // Make the API request
  fetch(myApi)
    .then((response) => response.json())
    .then((data) => {
      myJson = data;
      // console.log(myJson);

      // display and hide the containers.........................................
      document.getElementsByClassName("no-message")[0].style.display = "none";
      document.getElementsByTagName("main")[0].style.display = "flex";

// .....................................................................................




const resultWordElement = document.getElementById("resultWord");
let wordColor = resultWordElement.style.color;


// console.log(wordColor)

// ...............................................................



      // CLear all li...................................................................
      const listItems = newNounDef.querySelectorAll("li");
      const newItems = newVerbDef.querySelectorAll("li");

      // Iterate over the NodeList and remove each <li> element
      listItems.forEach((item) => {
        item.parentNode.removeChild(item);
      });

      newItems.forEach((item) => {
        item.parentNode.removeChild(item);
      });

      // ........................................................................................

      // (DOM) display result word
      resultWord.textContent = myJson[0].word || "No word found";

      // (DOM) display sounding
      if (myJson[0].phonetic == undefined) {
        resultSounding.textContent = myJson[0].phonetics[1].text;
      } else {
        resultSounding.textContent = myJson[0].phonetic;
      }

      // (DOM) Noun Meaning................................................................

      // (DOM) Verb meaning...................................................................

      // Extract the definitions for the verb part of speech

      // ........................................................................

      // (DOM) Audio playing
      // console.log(data[0]['phonetics'][2]['audio'])

      // ...............................................................................

      // .........................................................................

      audioPlayer.setAttribute("src", data[0]["phonetics"][0]["audio"]);

      // myJson[0].phonetics[0].audio;
      //   myJson[0].phonetics[1].text;
      // resultSounding.textContent = myJson[0].phonetic || "";

      // ..........................................................................

      // (DOM) Audio playing
      // console.log(data[0]['phonetics'][2]['audio'])
      // audioPlayer.setAttribute('src', data[0]['phonetics'][2]['audio']);

      // audioSOurce = data[0]['phonetics'][2]['audio']

      // (DOM) display synonyms, safely check nested properties...............................
      // let synonyms = data.meanings?.[0]?.definitions?.[0]?.synonyms;
      // if (synonyms && synonyms.length > 0) {
      //   resultSynonyms.textContent = synonyms.join(", ");
      // } else {
      //   resultSynonyms.textContent = "No synonyms found";
      // }

      meanings = myJson[0].meanings;
      meanings.find((item) => {
        if (item.partOfSpeech == "noun") {
          let mySynonyms = data[0].meanings[0].synonyms;
          console.log(mySynonyms);
          let synonymsString = mySynonyms.join(", ");

          resultSynonyms.textContent = synonymsString;
          // const namesString = names.join(", ");

          // let nounSynonyms = " "

          //             for (let obj of item.synonyms) {
          //               nounSynonyms += JSON.stringify(obj) + " ";
          //           }
          // resultSynonyms.textContent = nounSynonyms;
        }
      });

      // let mySynonyms = data[0].

      //(DOM) noun  meaning..........................................................................

      // meanings = myJson[0].meanings;

      // meanings.find((item) => {
      //   if (item.partOfSpeech == "noun") {
      //     let nounDef = item.definitions;
      //     nounDef.forEach((element) => {
      //       // nounDefinition.createElement

      //       console.log(`noun ${element.definition}`);
      //     });
      //   }
      // });

      let nounMeaning = data[0].meanings.find(
        (meaning) => meaning.partOfSpeech === "noun"
      );
      console.log(nounMeaning);

      if (nounMeaning == undefined) {
        nounContainer.style.display = "none";
        nounMeaningContainer.style.display = "none";
      } else {
        nounContainer.style.display = "flex";
        nounMeaningContainer.style.display = "flex";
        // Get the <ul> element where the definitions will be appended
        const nounDefinition = document.getElementById("nounDefinition");
        // const errorMessages = document.getElementById('error-message');

        if (nounMeaning && nounMeaning.definitions.length > 0) {
          // Create <li> elements for each definition and append to the <ul>
          nounMeaning.definitions.forEach((definitionObj) => {
            const li = document.createElement("li");
            li.textContent = definitionObj.definition;
            nounDefinition.appendChild(li);
            li.style.color = wordColor;
          });
        } else {
          document.getElementsByClassName("noun-container")[0].style.display =
            "none";
          // Display an error message if no definitions are found
          // errorMessages.textContent = "No definitions available for the verb.";
        }
      }

      //(DOM) verb meaning..........................................................................

      // meanings = myJson[0].meanings;
      // meanings.find((item) => {
      //   if (item.partOfSpeech == "verb") {
      //     let verbDef = item.definitions;
      //     verbDef.forEach((element) => {
      //       // nounDefinition.createElement

      //       console.log(`verb ${element.definition}`);
      //     });
      //   }
      // });

      let verbMeaning = data[0].meanings.find(
        (meaning) => meaning.partOfSpeech === "verb"
      );

      console.log(verbMeaning);

      if (verbMeaning == undefined) {
        verbContainer.style.display = "none";
        verbMeaningCOntainer.style.display = "none";
      } else {
        verbContainer.style.display = "flex";
        verbMeaningCOntainer.style.display = "flex";
        // Get the <ul> element where the definitions will be appended
        const verbDefinition = document.getElementById("verbDefinition");
        // const errorMessage = document.getElementById('error-message');

        if (verbMeaning && verbMeaning.definitions.length > 0) {
          // Create <li> elements for each definition and append to the <ul>
          verbMeaning.definitions.forEach((definitionObj) => {
            let li = document.createElement("li");
            li.textContent = definitionObj.definition;
            verbDefinition.appendChild(li);

            li.style.color = wordColor;

          
          });

          
        } else {
          // document.getElementsByClassName("noun-container")[0].style.display = "none";
          // Display an error message if no definitions are found
          // errorMessage.textContent = "No definitions available for the verb.";
        }
      }

      // definitionsList

      // if(meanings.partOfSpeech == 'noun'){
      //   let nounDefinition = array.forEach(element => {

      //   });
      // }

      // const nounDefinitions = data[0].meanings.find(
      //   meaning => meaning.partOfSpeech === "noun").definitions;

      // (DOM) display source.................................................
      let source = myJson[0].sourceUrls?.[0] || "No source URL found";

      if (source == "No source URL found") {
        document.getElementsByTagName("footer")[0].style.display = "none";
      } else {
        resultSource.textContent = source;
      }
    })

    // Error.........................................................................
    .catch((error) => {
      console.error("Error fetching data:", error);
      resultWord.textContent = "No definition found";
      document.getElementsByClassName("no-message")[0].style.display = "block";
      noResult.textContent = myJson.title;
      tryAgain.textContent = myJson.message;
      document.getElementsByTagName("main")[0].style.display = "none";
      // resultSounding.textContent = "No sound found";
      // resultSynonyms.textContent = "no content fount";
      // resultSource.textContent = "";
    });
});

// ................................................................................................
//Audio  Play Button ..............................................................................
playButton.addEventListener("click", () => {
  audioPlayer.play();
});
