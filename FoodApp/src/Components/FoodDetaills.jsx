import { useEffect, useState } from "react";
import ItemList from "./ItemList";

export default function FoodDetails({ foodId }) {
  var URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  var apiKey = "36e4483021184220b83f749bdce6d1f1";
  var [food, setFood] = useState({});
  var [isLoading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchFood() {
      var res = await fetch(`${URL}?apiKey=${apiKey}`);
      var data = await res.json();
      console.log(data);
      setFood(data);
      setLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div>
        Food Details {foodId} {food.title}
        <img src={food.image}></img>
        <div>
          <span>
            <strong>⌚ Time to Make {food.readyInMinutes}</strong>
          </span>
          <span>👩‍👧‍👦Servings {food.servings}</span>
          <span>$ Price Per Serving {food.pricePerServing}</span>
          <span> {food.vegetarian ? "Veg" : "Non-Veg"}</span>
        </div>
      </div>
      <div>
        <h2>Ingredients</h2>
        <ItemList food={food} isLoading={isLoading} />
        <h2>Instructions</h2>
        {isLoading
          ? "Loading"
          : food.analyzedInstructions[0].steps.map((step) => (
              <li key={step.number}>{step.step}</li>
            ))}
      </div>
    </div>
  );
}
