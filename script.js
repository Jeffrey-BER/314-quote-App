// References
const getQuoteBtn = document.getElementById("getQuooteBtn");
const quoteList = document.getElementById("quoteList");
// Listeners
getQuoteBtn.addEventListener("click", getQuote); // Remove parentheses after getQuote
// Constants
const fatchAdd = "https://dummy-apis.netlify.app/api/quote";

// State
const state = {
  quotes: [
    { quote: "initialQuote1", author: "Aaron" },
    { quote: "initialQuote2", author: "Aaron" },
  ],
};

// Function to render quotes
function render() {
  console.log("render function entered ");
  // Clearing the list
  quoteList.innerHTML = "";

  // Looping over the list in the state
  state.quotes.forEach((element) => {
    // Creating elements
    const newLi = document.createElement("li"); // Create new list item
    const quoteText = document.createTextNode(
      "Quote: " + element.quote + " - Author: " + element.author
    ); // Concatenate quote and author into a single string
    // Adding them to the DOM
    newLi.appendChild(quoteText);

    quoteList.appendChild(newLi);
    console.log("render exit");
  });
}

console.log("App Started");

function getQuote() {
  fetch(fatchAdd)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Received quote:", data);
      // Update the state with the received data
      state.quotes.push({ quote: data.quote, author: data.author });
      // Render the UI with the updated state
      render();
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

// Initial render
render();
