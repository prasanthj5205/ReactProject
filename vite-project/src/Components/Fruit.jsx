export default function Fruit({ name, type, soldOut }) {
  return (
    <div>
      {name} {type} {soldOut ? "Not Available" : "Sold out"}
    </div>
  );
}
