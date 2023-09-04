import './App.css';
import Navigation from "./components/Navigation";
import HorizontalDivider from "./components/HorizontalDivider";
import Footer from "./components/Footer";
import MenuContainer from "./components/MenuContainer";
import AllSectionsContainer from "./components/AllSectionsContainer";
import PageTitle from "./components/PageTitle";
import Timer from "./components/Timer";
import Counter from "./components/Counter";


function App() {
    const navItems = [
        {
            icon: "fa-solid fa-house",
            link: "#",
            linkText: "Home"
        },
        {
            icon: "fa-solid fa-bars",
            link: "#",
            linkText: "Menu"
        }
    ]

    return (
        <div className="App">
            <header className="header">
                <Navigation
                    navItems={navItems}
                />
                <PageTitle title="Main Menu"/>
            </header>
            <main>
                <div className="total-container">
                    <MenuContainer
                        icons={["fa-solid fa-angles-left", "fa-solid fa-landmark-flag"]}
                        links={["#", "#"]}
                        linkText={["Back", "Test"]}
                    />
                    <HorizontalDivider/>
                    <AllSectionsContainer/>
                </div>
            </main>
            <Footer content="&copy; 2023"/>

            <Timer start={0}/>
            <br/>

            {/* events */}
            <Counter/>
        </div>
    );
}

export default App;
