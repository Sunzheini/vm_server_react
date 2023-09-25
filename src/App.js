import './App.css';
import React from 'react'
import Navigation from "./components/Navigation";
import HorizontalDivider from "./components/HorizontalDivider";
import Footer from "./components/Footer";
import MenuContainer from "./components/MenuContainer";
import AllSectionsContainer from "./components/AllSectionsContainer";
import PageTitle from "./components/PageTitle";
import Timer from "./components/Timer";
import Counter from "./components/Counter";
import NewItemForm from "./components/NewItemForm";


const navItems = [
        {
            // always have id to use on keys
            id: 0,
            icon: "fa-solid fa-house",
            link: "#",
            linkText: "Home"
        },
        {
            id: 1,
            icon: "fa-solid fa-bars",
            link: "#",
            linkText: "Menu"
        }
    ]


const menuItems = [
    {
        id: 0,
        icon: "fa-solid fa-angles-left",
        link: "#",
        linkText: "Back"
    },
    {
        id: 1,
        icon: "fa-solid fa-landmark-flag",
        link: "#",
        linkText: "Test"
    }
]


function App() {
    // implement delete on buttons
    const [newMenuItems, setMenuItems] = React.useState(menuItems);

    const onButtonClick = (id) => {
        // setMenuItems(state => state.filter(x => x.id !== id))
        console.log(id)
    }
    // -------------------------------------------------------------
    // select button

    const onButtonSelect = (id) => {
        setMenuItems(state => state.map(x =>
            ({...x, selected: x.id === id})
        ))
    }

    // -------------------------------------------------------------
    // fetch data from API
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        fetch('http://127.0.0.1:8000/api/')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Fetch error:', error));
    }, [])

    // -------------------------------------------------------------
    // Forms

    const [placeholderName, setPName] = React.useState('My Namez')
    const [name, setName] = React.useState('')
    const [description, setDescription] = React.useState('3')

    React.useEffect(() => {
        setTimeout(() => {
            setPName('My Name')
        }   , 3000)
    }, [])

    const onUserNameChange = (e) => {
        const newName = e.target.value;
        setName(newName)
        console.log(newName)
    }

    const onSubmitHandler = (e) => {
        console.log(name)
        console.log(description)
    }

    const onChangeDesc = (e) => {
        const newDescription = e.target.value;
        setDescription(newDescription);
        console.log(newDescription); // Log the updated value
    }

    // -------------------------------------------------------------

    return (
        <div className="App">
            <header className="header">
                <Navigation navItems={navItems}/>
                <PageTitle title="Main Menu"/>
            </header>
            <main>
                <div className="total-container">
                    <MenuContainer
                        menuItems={newMenuItems}   // pass items
                        onButtonClick={onButtonClick}
                        onButtonSelect={onButtonSelect}
                    />
                    <HorizontalDivider/>
                    <AllSectionsContainer data={data}/>

                    <HorizontalDivider/>
                    <NewItemForm
                        placeholder={placeholderName}
                        onChange={onUserNameChange}
                        onSubmit={onSubmitHandler}
                        onChangeDesc={onChangeDesc}
                    />
                </div>
            </main>
            <Footer content="&copy; 2023"/>

            <Timer start={0}/>
            <br/>

            {/* events */}
            <Counter canReset/>
        </div>
    );
}

export default App;
