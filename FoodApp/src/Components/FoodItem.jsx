export default function FoodItem({ food, setFoodId }) {
  return (
    <div>
      <img src={food.image} alt="" />
      <h1>{food.title}</h1>
      <button
        onClick={() => {
          setFoodId(food.id);
          console.log(food.id);
        }}
      >
        View Recipe
      </button>
    </div>
  );
}
