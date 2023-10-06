import './App.css';
import React from 'react'
import Footer from "./components/Footer/Footer";
import Timer from "./components/Tools/Timer";
import Counter from "./components/Tools/Counter";
import Header from "./components/Header/Header";
import { SampleContext } from './contexts/SampleContext'
import { Routes, Route, Link } from 'react-router-dom'
import {createItem, deleteItem, getAll} from "./services/itemService";
import PageTitle from "./components/MainComponents/PageTitle";
import MenuContainer from "./components/MainComponents/MenuContainer";
import HorizontalDivider from "./components/MainComponents/HorizontalDivider";
import AllSectionsContainer from "./components/MainComponents/AllSectionsContainer";
import NewItemForm from "./components/Forms/NewItemForm";
import Login from "./components/Login/Login";
import Users from "./components/Users/Users";
import Vms from "./components/Vms/Vms";
import {routes} from "./routes/routesList";


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
        getAll()
            .then(data => setData(data))
            .catch(error => console.error('Fetch error:', error));
    }, []);

    // -------------------------------------------------------------
    // Post new Item to API
    const onSubmitHandler = (e) => {
        e.preventDefault();

    const newItem = {
        name: formValues.name,
    };

    // Send a POST request to create the new item
    createItem(newItem)
        .then((createdItem) => {
            // Update the data state to include the newly created item
            setData((prevData) => [...prevData, createdItem]);
            console.log('Item created:', createdItem);
        })
        .catch((error) => console.error('Fetch error:', error));
    }

    // Delete
    const onDeleteHandler = (id) => {
        // Send a DELETE request to delete the item
        deleteItem(id)
            .then(() => {
                // Update the data state to remove the deleted item
                setData((prevData) => prevData.filter((item) => item.id !== id));
                console.log('Item deleted:', id);
            })
            .catch((error) => console.error('Fetch error:', error));
    }


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

    // -------------------------------------------------------------
    // -------------------------------------------------------------

    const onLoginButtonClick = () => {
        console.log('Login button clicked');
    }

    // -------------------------------------------------------------

    return (
        // Make SampleContext available to all components in the app
        <SampleContext.Provider value={"something"}>

        <div className="App">
            <Header/>

            <main>
                <Routes>
                    <Route
                        path={routes.home}
                        element={
                            <div>
                                <PageTitle title="Main Menu"/>

                                <div className="total-container">
                                    <MenuContainer
                                        menuItems={newMenuItems}   // pass items
                                        onButtonClick={onButtonClick}
                                        onButtonSelect={onButtonSelect}
                                    />
                                    <HorizontalDivider/>
                                    <AllSectionsContainer
                                        data={data}
                                        onDeleteHandler={onDeleteHandler}
                                    />

                                    <HorizontalDivider/>
                                    <NewItemForm
                                        placeholder={placeholderName}
                                        onChange={onChangeHandler}
                                        onSubmit={onSubmitHandler}
                                        formValues={formValues}
                                    />
                                </div>
                            </div>
                        }
                    />

                    <Route
                        path={routes.login}
                        element={
                            <div>
                                <PageTitle title="Login"/>

                                <div className="total-container">
                                    <Login />
                                </div>
                            </div>
                        }
                    />

                    <Route
                        path={routes.users}
                        element={
                            <div>
                                <PageTitle title="User Management"/>

                                <div className="total-container">
                                    <Users
                                        data={data}
                                        onDeleteHandler={onDeleteHandler}
                                    />

                                </div>
                            </div>
                        }
                    />

                    <Route
                        path={routes.vms}
                        element={
                            <div>
                                <PageTitle title="Virtual Machines"/>

                                <div className="total-container">
                                    <Vms
                                        data={data}
                                        onDeleteHandler={onDeleteHandler}
                                    />
                                </div>
                            </div>
                        }
                    />
                </Routes>
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
