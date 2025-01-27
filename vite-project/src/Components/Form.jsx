import { useState } from "react";

export default function Form() {
  var [name, setName] = useState({ firstName: "", lastName: "" });
  function handleClick(e) {
    e.preventDefault();
    console.log(name);
  }
  return (
    <div>
      {name.firstName}-{name.lastName}
      <form>
        <input
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          type="text"
          value={name.firstName}
        ></input>
        <input
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          type="text"
          value={name.lastName}
        ></input>
        <button onClick={(e) => handleClick(e)}>Add</button>
      </form>
    </div>
  );
}
