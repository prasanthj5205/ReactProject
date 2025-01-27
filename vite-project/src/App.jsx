import ConditionalComponent from "./Components/ConditionalComponent";
import Counter from "./Components/Counter";
import Form from "./Components/Form";
import Fruits from "./Components/Fruits";
import Hello from "./Components/Hello";
import Message from "./Components/Message";

function App() {
  var person = {
    name: "JP",
    message: "Hello",
    seatNumbers: [1, 4, 7],
  };
  return (
    <div className="App">
      {/* <Hello personDetails={person} /> */}
      {/* <Fruits /> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      <Form />
    </div>
  );
}

export default App;
