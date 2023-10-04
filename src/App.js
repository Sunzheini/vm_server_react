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
import SingleItemPage from "./components/SingleItemPage";

import { SampleContext } from './contexts/SampleContext'

import { Routes, Route, Link } from 'react-router-dom'



const navItems = [
        {
            // always have id to use on keys
            id: 0,
            // icon: "fa-solid fa-house",
            link: <Link to="/"><i className="fa-solid fa-house"></i>&nbsp;&nbsp;Home</Link>,
            // linkText: "Home"
        },
        {
            id: 1,
            // icon: "fa-solid fa-bars",
            link: <Link to="/menu"><i className="fa-solid fa-bars"></i>&nbsp;&nbsp;Menu</Link>,
            // linkText: "Menu"
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
    // const [name, setName] = React.useState('')
    // const [description, setDescription] = React.useState('3')

    const [formValues, setFormValues] = React.useState({
        name: '',
        description: '3'
      });

    React.useEffect(() => {
        setTimeout(() => {
            setPName('My Name')
        }   , 3000)
    }, [])

    const onChangeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(formValues.name);
    }

    // -------------------------------------------------------------

    return (
        // Make SampleContext available to all components in the app
        <SampleContext.Provider value={"something"}>

        <div className="App">
            <header className="header">
                <Routes>
                    {/* if the route is /, render this */}
                    <Route path='/' element={
                        // if you want to render multiple components, wrap them in a div
                        <div>
                            <Navigation navItems={navItems}/>
                            <PageTitle title="Main Menu"/>
                        </div>
                    } />

                    {/* if the route is /about, render this */}
                    <Route path='/menu' element={<h4>Menu</h4>} />

                    {/* in all other cases */}
                    <Route path='*' element={<h1>404</h1>} />

                    <Route path="/item/:itemName" element={<SingleItemPage />} />
                </Routes>
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
                        onChange={onChangeHandler}
                        onSubmit={onSubmitHandler}
                        formValues={formValues}
                    />
                </div>
            </main>
            <Footer content="&copy; 2023"/>

            <Timer start={0}/>
            <br/>

            {/* events */}
            <Counter canReset/>

        </div>
        </SampleContext.Provider>
    );
}

export default App;
