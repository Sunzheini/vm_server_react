import './App.css';
import Navigation from "./components/Navigation";
import HorizontalDivider from "./components/HorizontalDivider";
import Footer from "./components/Footer";
import MenuContainer from "./components/MenuContainer";
import AllSectionsContainer from "./components/AllSectionsContainer";


function App() {
  return (
    <div className="App">
        <header className="header">
        <Navigation/>
        <h1 className="page-title">Main Menu</h1>
      </header>
      <main>
        <div className="total-container">
          <MenuContainer/>
          <HorizontalDivider/>
          <AllSectionsContainer/>
        </div>
      </main>
    <Footer/>
    </div>
  );
}

export default App;
