import Fruit from "./Fruit";
export default function Fruits() {
  //var Fruits = ["Apple", "Banana", "Mango", "Pineapple", "Orange"];
  var Fruits = [
    { name: "Apple", type: "fruit", soldOut: true },
    { name: "Banana", type: "fruit", soldOut: false },
    { name: "Orange", type: "fruit", soldOut: true },
  ];

  return (
    <div>
      <ul>
        {Fruits.map((fruit) => (
          //   <li key={fruit.name}>
          //     {fruit.name} {fruit.type}
          //   </li>
          <Fruit
            key={fruit.name}
            name={fruit.name}
            type={fruit.type}
            soldOut={fruit.soldOut}
          />
        ))}
      </ul>
    </div>
  );
}
