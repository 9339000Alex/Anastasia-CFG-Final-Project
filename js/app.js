// Store the recipes as an array of objects. They could be extended to
// include a link, image, description, etc
var recipes = [
  { name: "Lasagna", rating: 5, image: 'lasagna.jpeg', ingredients: [" Pasta sheets", " olive oil, plus a little for the dish", " minced beef", " tomato sauce", " white sauce", " mozzarella cheese"] },
  { name: "Salmon, rice, nori", image: 'salmon.jpeg', rating: 3, ingredients: [" Salmon fillet" , " white rice" , " nori sheets", "teriaki sauce - optional" ]},
  { name: "Beef and broccoli", image: 'beef.jpeg', rating: 3.5, ingredients: [" Flank Steak", " broccoli florets", " soy sauce", " sesame seed oil", " chilli flakes", " minced garlic", " fresh ginger"] },
  { name: "Mushroom risotto", image: 'risotto.webp', rating: 4.5, ingredients: [" Risotto rice", " chestnut mushrooms", " dried mushrooms", " pancetta", " Parmesan cheese", " butter" ] }
];

// Save the DOM element where we want to show results as a variable, so we
// can use it later
var resultsSection = document.getElementById("results");

// When the content loads, add the recipes to the page.
document.addEventListener('DOMContentLoaded', function() {
  // Loop through the recipes...
  for (let i=0; i<recipes.length; i++) {
    // Add each item from the recipes list to the #results section.
    // += means 'whatever resultsSection.innerHTML is now, plus this next thing'
    resultsSection.innerHTML += `
      <div>
        <h2>${recipes[i].name}</h2>
        <p>Difficulty: ${recipes[i].rating} out of 5 👨‍🍳 </p>
        <p>Ingredients: ${recipes[i].ingredients} </p>
      </div>
    `;
  }
});

// This function runs when the user clicks the search button.
function showResults() {
  // Get the user input
  var input = document.getElementById("searchInput").value;

  // Use the inbuilt Array.filter() method to filter the recipes, and the
  // String.includes() method to check whether the recipe name contains the
  // user search input string.
  // To compare, we lowercase both the recipe name and the input so it doesn't
  // matter if the case is different.
  var searchResults = recipes.filter(function(recipes) {
    return recipes.name.toLowerCase().includes(input.toLowerCase())
  });

  // This line has two functions, to show the user what they searched for and to
  // clear all the recipes out of the resultsSection before adding the search results
  resultsSection.innerHTML = `<p>You searched for ${input}, here's some recipe ideas for you...</p>`;

  for (let i=0; i<searchResults.length; i++) {
    // Add each item from the recipes list to the #results section
    resultsSection.innerHTML += `
      <div>
        <h2>${searchResults[i].name}</h2>
        <p>Rating: ${searchResults[i].rating} out of 5 stars ⭐ </p>
      </div>
    `;
  }

  // Show a friendly message if there were no results
  if (searchResults.length == 0) {
    resultsSection.innerHTML += "<h2>Sorry, no results :(</h2>";
  }
}

// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector(
	'.social-panel-container'
);

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible');
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible');
});

