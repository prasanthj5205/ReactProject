import ConditionalComponent from "./Components/ConditionalComponent";
import Fruits from "./Components/Fruits";
import Hello from "./Components/Hello";

function App() {
  var person = {
    name: "JP",
    message: "Hello",
    seatNumbers: [1, 4, 7],
  };
  return (
    <div className="App">
      <Hello personDetails={person} />
      <Fruits />
      <ConditionalComponent />
    </div>
  );
}

export default App;
