import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Cart from "./components/Cart";

function App() {
  const [totalItem, settotalItem] = useState(0);
  return (
    <div className="App">
      <Header Total={totalItem} />
      <Cart settotalItem={settotalItem} totalItem={totalItem} />
    </div>
  );
}

export default App;
