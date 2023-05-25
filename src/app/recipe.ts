import {Ingredient} from "./ingredient";

export interface Recipe {
  "id": number,
  "name": string,
  "ingredients": Ingredient[],
  "readyInMinutes": number,
  "instructions": string,
  "vegetarian": boolean,
  "vegan": boolean,
  "glutenFree": boolean,
}

