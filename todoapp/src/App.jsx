import InlineComponent from "./Components/InlineComponent";

import Todo from "./Components/Todo";
import styles from "./App.css";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <InlineComponent />
      <Todo />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
