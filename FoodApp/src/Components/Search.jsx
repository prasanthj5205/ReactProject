import { useEffect } from "react";
import { useState } from "react";
import styles from "./search.module.css";

var URL = "https://api.spoonacular.com/recipes/complexSearch";
var apiKey = "36e4483021184220b83f749bdce6d1f1";
export default function Search({ foodData, setFoodData }) {
  var [query, setQuery] = useState("pizza");
  useEffect(() => {
    async function FetchFood() {
      var res = await fetch(`${URL}?query=${query}&apiKey=${apiKey}`);
      var data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    FetchFood();
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
    </div>
  );
}
