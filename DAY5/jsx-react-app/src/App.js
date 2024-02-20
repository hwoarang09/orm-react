import logo from "./logo.svg";
import "./App.css";

import DataBindingTest from "./DataBindingTest";

import PrimitiveTypeEvent from "./PrimitiveTypeEvent";

import ReferTypeEvent from "./ReferTypeEvent";

import ProductManager from "./ProductManager";
import ProductList from "./ProductList";
function App() {
  return (
    <div className="App">
      {/* <DataBindingTest></DataBindingTest>
      <hr></hr>
      <PrimitiveTypeEvent></PrimitiveTypeEvent>
      <hr></hr>
      <ReferTypeEvent></ReferTypeEvent>

      <hr></hr>
      <ProductManager></ProductManager> */}
      <ProductList></ProductList>
    </div>
  );
}

export default App;
