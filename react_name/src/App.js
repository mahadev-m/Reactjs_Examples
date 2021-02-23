import { useState } from "react";
import "./App.css";
import Product from "./product";
import 
const products = [
  {
    id: 1,
    productName: "apple",
  },
];

const App = () => {
  const [value,setValue]=useState(false);
  return (
    <div className="App">
      <button>show</button>
      {
        value ?  
        {products.map((Product) => {
        return <div key={products.id}>{Product.productName}</div>;
      })}
      }
      
    </div>
  );
};

export default App;
