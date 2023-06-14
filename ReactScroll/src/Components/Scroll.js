// Get the container element by its id

 export const Scroll = () => {

    
    
    


const container = document.getElementById("app");

// Get the input element by its id
const input = document.getElementById("input");

// Get the button element by its id
const button = document.getElementById("button");

// Get the error element by its id
const error = document.getElementById("error");

// const generateCards = () => {
//   const cards = [];

//   for (let i = 1; i <= 20; i++) {
//     const card = document.createElement("div");

//     card.className = "card";

//     card.id = `card-${i}`;

//     const title = document.createElement("h3");

//     title.textContent = `Card ${i}`;

//     const content = document.createElement("p");

//     content.textContent = "This is a card component.";

//     card.appendChild(title);
//     card.appendChild(content);

//     cards.push(card);
//   }

//   return cards;
// };

// Create a function to scroll the container element by a given amount
const scrollContainer = (amount) => {
  // Scroll to that amount smoothly using native Javascript features
  container.scrollTo({
    top: amount,
    behavior: "smooth",
  });
};

// Create a function to handle the button click
const handleClick = () => {
  // Get the input value and parse it as a number
  const value = Number(input.value);
  
  console.log("Is this running")

  // Validate the input value
  if (!value || isNaN(value) || value < 1 || value > 100) {
    // Set the error message and return
    error.textContent = "Please enter a valid number between 1 and 100";
    return;
  }

  // Clear the error message
  error.textContent = "";

  // Get the viewport height
  const viewportHeight = window.innerHeight;

  // Get the page height
  const pageHeight = container.scrollHeight;

  // Calculate the available scrollable space
  const scrollableSpace = pageHeight - viewportHeight;

  // Calculate the percentage of the input value
  const percentage = value / 100;

  // Calculate the amount to scroll
  const amount = scrollableSpace * percentage;

  console.log("this is the amount");
  console.log(amount);
  
  
  scrollContainer(amount);
};

// Generate some cards and append them to the container element
// const cards = generateCards();
// cards.forEach((card) => {
//   container.appendChild(card);
// });

// Add an event listener to the button element for click events
button.addEventListener("click", handleClick);



return(
    <div id="app">
      <h1>Javascript Scroll Program</h1>
      <div className="input-container">
        <label htmlFor="input">Enter a number between 1 and 100</label>
        <input type="number" id="input" min="1" max="100" />
        <button id="button">Scroll</button>
        <span id="error"></span>
      </div>
      <div className="card-container"></div>
    </div>
    
    
    
    
    
    
)



}