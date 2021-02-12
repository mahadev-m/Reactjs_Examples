import "./styles.css";
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState("Some value");

  const getValue = () => {
    setValue("New Value");
  };
  return (
    <div className="APP">
      <h1>{value}</h1>
      <button onClick={() => getValue()}>Trigger</button>
    </div>
  );
};
export default App;
