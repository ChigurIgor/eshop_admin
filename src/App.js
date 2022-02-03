import './App.css';
import HeaderComponent from "./Components/Header/HeaderComponent";
import MainComponent from "./Components/Main/MainComponent";
import React, {createContext} from "react";
import ProductsStore from "./Stores/ProductsStore";
export const ProductsStoreContext = createContext({});

function App() {
  return (
      <ProductsStoreContext.Provider value = {new ProductsStore()}>
          <div className="App">
              <HeaderComponent/>
              <MainComponent/>
          </div>
      </ProductsStoreContext.Provider>

  );
}

export default App;
