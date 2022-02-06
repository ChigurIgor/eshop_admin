import './App.css';
import HeaderComponent from "./Components/Header/HeaderComponent";
import MainComponent from "./Components/Main/MainComponent";
import React, {useContext} from "react";
import {observer} from "mobx-react";
import {ProductsStoreContext} from "./index";

function App() {
    const store = useContext(ProductsStoreContext);
    const {products} = store;
    !products?.length && (store.setProducts(store.getFromLocalStorage()));

    return (
          <div className="App">
              <HeaderComponent/>
              <MainComponent/>
          </div>
  );
}

export default observer(App);
