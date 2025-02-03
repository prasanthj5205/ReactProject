import Item from "./Item";

export default function ItemList({ food, isLoading }) {
  return (
    <div key={food.title}>
      {isLoading
        ? "Loading"
        : food.extendedIngredients.map((item) => <Item item={item} />)}
    </div>
  );
}
