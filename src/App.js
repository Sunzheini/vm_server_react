import './App.css';
import React from 'react'
import Footer from "./components/Footer/Footer";
import Timer from "./components/Tools/Timer";
import Counter from "./components/Tools/Counter";
import Header from "./components/Header/Header";
import { SampleContext } from './contexts/SampleContext'
import {Routes, Route, Link, useParams} from 'react-router-dom'
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
import {onLoginButtonClick} from "./services/loginService";
import {
  getAllUsers,
  showUser,
  editUser,
  deleteUser,
  addUser,
} from './services/userService';
import ShowUser from "./components/Users/ShowUser";


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
    // -------------------------------------------------------------
    // ToDo: delete after
    // -------------------------------------------------------------
    const [newMenuItems, setMenuItems] = React.useState(menuItems);

    const onButtonClick = (id) => {
        // setMenuItems(state => state.filter(x => x.id !== id))
        console.log(id)
    }

    const onButtonSelect = (id) => {
        setMenuItems(state => state.map(x =>
            ({...x, selected: x.id === id})
        ))
    }

    // -------------------------------------------------------------
    // Users
    // -------------------------------------------------------------
    const [users, setUsers] = React.useState([]);

    // get all users
    React.useEffect(() => {
        getAllUsers()
            .then(data => setUsers(data))
            .catch(error => console.error('Fetch error:', error));
    }, []);

    const getUserById = async (id) => {
        try {
            if (!id) {
                console.error('Invalid id:', id);
                return;
            }

            const user = await showUser(id);
            // Do something with the user data
            console.log('User:', user);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    const updateUser = async (id, updatedData) => {
        try {
            const updatedUser = await editUser(id, updatedData);
            // Do something with the updated user data
            console.log('Updated User:', updatedUser);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    const handleDeleteUser = async (id) => {
        try {
            await deleteUser(id);
            // Handle any post-deletion tasks
            console.log('User deleted:', id);
            // Update the users state to reflect the deletion
            setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    const createUser = async (newUserData) => {
        try {
            console.log('Creating user with data:', newUserData);
            const createdUser = await addUser(newUserData);
            // Do something with the created user data
            console.log('Created User:', createdUser);
            // Update the users state to include the newly created user
            setUsers((prevUsers) => [...prevUsers, createdUser]);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };
    // -------------------------------------------------------------

    // -------------------------------------------------------------
    // ToDo: delete after
    // -------------------------------------------------------------
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        getAll()
            .then(data => setData(data))
            .catch(error => console.error('Fetch error:', error));
    }, []);

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

                    <Route path={routes.login} element={
                        <div>
                            <PageTitle title="Login"/>

                            <div className="total-container">
                                <Login onLoginButtonClick={onLoginButtonClick}/>
                            </div>
                        </div>
                    }/>

                    <Route
                        path={routes.users}
                        element={
                            <div>
                                <PageTitle title="User Management"/>

                                <div className="total-container">
                                    <Users
                                        data={users}
                                        onShowHandler={getUserById}
                                        onUpdateHandler={updateUser}
                                        onDeleteHandler={handleDeleteUser}
                                        onCreateHandler={createUser}
                                    />
                                </div>
                            </div>
                        }
                    />

                    <Route
                        path={routes.user}
                        element={
                            <div>
                                <PageTitle title="User"/>
                                <div className="total-container">
                                    <ShowUser />
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
