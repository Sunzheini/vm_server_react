import './App.css';
import React from 'react'
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { SampleContext } from './contexts/SampleContext'
import {Routes, Route, Link, useParams, useNavigate} from 'react-router-dom'
import PageTitle from "./components/MainComponents/PageTitle";
import Login from "./components/Login/Login";
import Users from "./components/Users/Users";
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
import {contentFieldUsers} from "./contexts/ContentFields";


function App() {
    // -------------------------------------------------------------
    // Users
    // -------------------------------------------------------------
    const [users, setUsers] = React.useState([]);

    const updateUser = async (id, updatedData) => {
        try {
            const updatedUser = await editUser(id, updatedData);

            console.log('Updated user:', updatedUser)

            if (updatedUser) {
                // Update the users state with the new data
                setUsers((prevUsers) =>
                    prevUsers.map((user) =>
                        user.id === id ? {...user, ...updatedUser} : user
                    )
                );

                console.log('Updated users state:', users)

                return updatedUser; // Return the updated user data
            } else {
                return null; // Handle errors and return null
            }
        } catch (error) {
            console.error('Fetch error:', error);
            return null; // Handle errors and return null
        }
    };

    // get all users
    React.useEffect(() => {
        getAllUsers()
            .then(data => setUsers(data))
            .catch(error => console.error('Fetch error:', error));
    }, [updateUser]);

    const getUserById = async (id) => {
        try {
            if (!id) {
                console.error('Invalid id:', id);
                return null; // Return null for invalid IDs
            }

            const user = await showUser(id);
            return user; // Return the user data
        } catch (error) {
            console.error('Fetch error:', error);
            return null; // Handle errors and return null
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
                                        contentField={contentFieldUsers}
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
                                    <ShowUser
                                        onShowHandler={getUserById}
                                        onUpdateHandler={updateUser}
                                        userId={useParams().id}
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
                                </div>
                            </div>
                        }
                    />
                </Routes>
            </main>

            <Footer content="&copy; 2023"/>

        </div>
        </SampleContext.Provider>
    );
}

export default App;
