const cakes = (recipe, available) => {
  const recipeKeys = Object.keys(recipe);
  const availableKeys = Object.keys(available);

  const notAllIngredients = !recipeKeys.every(key => availableKeys.includes(key));
  if (notAllIngredients) return 0;

  const matches = recipeKeys.filter(key => availableKeys.includes(key));

  return Math.floor(Math.min(...matches.map(match => available[match] / recipe[match])));
};

cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 });

cakes({ apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 }, { sugar: 500, flour: 2000, milk: 2000 });