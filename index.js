// import the module
const recipeScraper = require("recipe-scraper");

// enter a supported recipe url as a parameter - returns a promise
async function someAsyncFunc() {

  let recipe = await recipeScraper("allrecipes.com/recipe/40399/the-best-meatballs/");

}

// using Promise chaining
recipeScraper("allrecipes.com/recipe/40399/the-best-meatballs/").then(recipe => {
    console.log(recipe)
    // do something with recipe
  }).catch(error => {
    // do something with error
    console.log(error.message)
  });

  someAsyncFunc("allrecipes.com/recipe/40399/the-best-meatballs/")