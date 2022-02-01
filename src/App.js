import logo from './logo.svg';
import './App.css';
import NavbarComponent from "./Components/Navbar/NavbarComponent";
import HeaderComponent from "./Components/Header/HeaderComponent";
import MainComponent from "./Components/Main/MainComponent";
import DetailsComponent from "./Components/Details/DetailsComponent";

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <NavbarComponent/>
      <MainComponent/>
    </div>
  );
}

export default App;
