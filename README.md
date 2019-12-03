# annutrilib
A nutrition library

This library makes it easier to use Edamam's nutrition api (https://developer.edamam.com/edamam-docs-nutrition-api). You would still need to sign up for an app_id and app_key through their platform (it's free for developers), but you can use the methods below to get nutrition data for ingredients or recipes.


## Methods

#### getRecipeNutrition(app_id, app_key, data)

The below table defines what parameters to add in data.
|   Name    |   Required    |   Description |
|---|---|---|
|   title   |   yes   | common name of the recipe |
|   ingr    |  yes    | common name of the recipe |
|   url     |  no   | url of the recipe’s location |
| summary	| no	| a short description of the recipe |
| yield	| no	| number of servings* |
| ttime	| no | total time for preparation |
| img	| no	| image link (absolute) |
| prep	| no	| preparation instructions (free text) |
| cuisine	| no	| type of cuisine |
| mealtype	| no	| type of meal |
| dishtype |	no	| type of dish |

Here's a sample data: 
```
{
  "title": "Fresh Ham Roasted With Rye Bread and Dried Fruit Stuffing",
  "prep": "1. Have your butcher bone and butterfly the ham and score the fat in a diamond pattern. ...",
  "yield": "About 15 servings",
  "ingr": [
    "1 fresh ham, about 18 pounds, prepared by your butcher (See Step 1)",
    "7 cloves garlic, minced",
    "1 tablespoon caraway seeds, crushed",
    "4 teaspoons salt",
    "Freshly ground pepper to taste",
    "1 teaspoon olive oil",
    "1 medium onion, peeled and chopped",
    "3 cups sourdough rye bread, cut into 1/2-inch cubes",
    "1 1/4 cups coarsely chopped pitted prunes",
    "1 1/4 cups coarsely chopped dried apricots",
    "1 large tart apple, peeled, cored and cut into 1/2-inch cubes",
    "2 teaspoons chopped fresh rosemary",
    "1 egg, lightly beaten",
    "1 cup chicken broth, homemade or low-sodium canned"
  ]
}
```
#### getIngredientNutrition(app_id, app_key, ingr)
You could pass in an ingredient and get nutrition information for that ingredient.
Example:
ingr = "1 large apple"