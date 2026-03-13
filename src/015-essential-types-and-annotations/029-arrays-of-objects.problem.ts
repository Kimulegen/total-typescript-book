/* solution 1 */
// type Recipe = {
//   title: string;
//   instructions: string;
//   ingredients: { name: string; quantity: string}[]
// };

/* solution 2 */
// type Recipe = {
  // title: string;
  // instructions: string;
  // ingredients: Array<{ name: string; quantity: string}>
// };

/* solution 3 */
// type Ingredient = { name: string; quantity: string}
// type Recipe = {
//   title: string;
//   instructions: string;
//   ingredients: Ingredient[]
// };

/* solution 4 */
type Ingredient = { name: string; quantity: string}
type Recipe = {
  title: string;
  instructions: string;
  ingredients: Array<Ingredient>
};

const processRecipe = (recipe: Recipe) => {
  // Do something with the recipe in here
};

processRecipe({
  title: "Chocolate Chip Cookies",
  ingredients: [
    { name: "Flour", quantity: "2 cups" },
    { name: "Sugar", quantity: "1 cup" },
  ],
  instructions: "...",
});
