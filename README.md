An API call request to the Recipe Search API is made in two cases:
1) User types a recipe/food/ingredient name and clicks search button
2) User clicks one of the listed top 10 healthy foods

Recipes are fetched from this URL which requires a query and id + key of the registered package account (https://api.edamam.com/api/recipes/v2?type=public&q=${query}s&app_id=${id}&app_key=${key})

The id and key are found in the registered account Dashboard > Applications > View

Favorite recipes are stored in context api and then stored in localStorage which is done inside the favorites context reducer
#
### Calorie Calculator

The calorie calculator uses the Fitness Calculator from RapidAPI (https://rapidapi.com/malaaddincelik/api/fitness-calculator) which is free with unlimited requests
