import './App.css';
import React from 'react'
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { CustomContext, } from './contexts/CustomContext'
import {Routes, Route, Link, useParams, useNavigate } from 'react-router-dom'
import PageTitle from "./components/MainComponents/PageTitle";
import Login from "./components/Login/Login";
import Users from "./components/Users/Users";
import {routes} from "./routes/routesList";
import {
  getAllUsers,
  showUser,
  editUser,
  deleteUser,
  addUser,
} from './services/userService';
import {
    getAllVms,
    showVm,
    editVm,
    deleteVm,
    addVm,
} from "./services/vmService";
import {
    getAllPyscripts,
    addPyscript,
    showPyscript,
    editPyscript,
    deletePyscript,
} from "./services/pyService";
import ShowUser from "./components/Users/ShowUser";
import {
    contentFieldPyscripts,
    contentFieldUsers,
    contentFieldVms,
} from "./contexts/ContentFields";
import Vms from "./components/Vms/Vms";
import ShowVm from "./components/Vms/ShowVm";
import Home from "./components/Home/Home";
import {loginUrl} from "./routes/urlsList";
import Pyscripts from "./components/Pyscripts/Pyscripts";
import ShowPyscript from "./components/Pyscripts/ShowPyscript";


function App() {
    // -------------------------------------------------------------
    // Users
    // -------------------------------------------------------------
    const [users, setUsers] = React.useState([]);

    // useEffect is a hook that runs when the component mounts
    // fetch users when the component mounts
    React.useEffect(() => {
        updateUserList();

        // this is executed only when component unmounts
        return () => {
            console.log('Unmounting App component');
        }
    }, []); // The empty array causes this effect to only run once
    // If you pass a value to the array, it is a dependency array and when
    // changes are detected in the values of the array, the effect is run again!

    const updateUserList = () => {
        getAllUsers()
            .then(data => setUsers(data))
            .catch(error => console.error('Fetch error:', error));
    };

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

                // Call the function to update the user list
                updateUserList();

                return updatedUser; // Return the updated user data
            } else {
                return null; // Handle errors and return null
            }
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
    // Vms
    // -------------------------------------------------------------
    const [vms, setVms] = React.useState([]);

    // Use useEffect to fetch vms when the component mounts
    React.useEffect(() => {
        updateVmList();
    }, []);

    const updateVmList = () => {
        getAllVms()
            .then(data => setVms(data))
            .catch(error => console.error('Fetch error:', error));
    }

    const getVmById = async (id) => {
        try {
            if (!id) {
                console.error('Invalid id:', id);
                return null; // Return null for invalid IDs
            }

            const vm = await showVm(id);
            return vm; // Return the vm data
        } catch (error) {
            console.error('Fetch error:', error);
            return null; // Handle errors and return null
        }
    }

    const updateVm = async (id, updatedData) => {
        try {
            const updatedVm = await editVm(id, updatedData);

            console.log('Updated vm:', updatedVm)

            if (updatedVm) {
                // Update the vms state with the new data
                setVms((prevVms) =>
                    prevVms.map((vm) =>
                        vm.id === id ? {...vm, ...updatedVm} : vm
                    )
                );

                console.log('Updated vms state:', vms)

                // Call the function to update the vm list
                updateVmList();

                return updatedVm; // Return the updated vm data
            } else {
                return null; // Handle errors and return null
            }
        } catch (error) {
            console.error('Fetch error:', error);
            return null; // Handle errors and return null
        }
    }

    const handleDeleteVm = async (id) => {
        try {
            await deleteVm(id);
            // Handle any post-deletion tasks
            console.log('Vm deleted:', id);
            // Update the vms state to reflect the deletion
            setVms((prevVms) => prevVms.filter((vm) => vm.id !== id));
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }

    const createVm = async (newVmData) => {
        try {
            console.log('Creating vm with data:', newVmData);
            const createdVm = await addVm(newVmData);
            // Do something with the created vm data
            console.log('Created Vm:', createdVm);
            // Update the vms state to include the newly created vm
            setVms((prevVms) => [...prevVms, createdVm]);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }

    // -------------------------------------------------------------
    // PyScripts
    // -------------------------------------------------------------
    const [pyscripts, setPyscripts] = React.useState([]);

    // Use useEffect to fetch pyscripts when the component mounts
    React.useEffect(() => {
        updatePyScriptList();
    }, []);

    const updatePyScriptList = () => {
        getAllPyscripts()
            .then(data => setPyscripts(data))
            .catch(error => console.error('Fetch error:', error));
    }

    const getPyscriptById = async (id) => {
        try {
            if (!id) {
                console.error('Invalid id:', id);
                return null; // Return null for invalid IDs
            }

            const pyscript = await showPyscript(id);
            return pyscript; // Return the pyscript data
        } catch (error) {
            console.error('Fetch error:', error);
            return null; // Handle errors and return null
        }
    }

    const updatePyscript = async (id, updatedData) => {
        try {
            const updatedPyscript = await editPyscript(id, updatedData);

            console.log('Updated pyscript:', updatedPyscript)

            if (updatedPyscript) {
                // Update the pyscripts state with the new data
                setPyscripts((prevPyscripts) =>
                    prevPyscripts.map((pyscript) =>
                        pyscript.id === id ? {...pyscript, ...updatedPyscript} : pyscript
                    )
                );

                console.log('Updated pyscripts state:', pyscripts)

                // Call the function to update the pyscript list
                updatePyScriptList();

                return updatedPyscript; // Return the updated pyscript data
            } else {
                return null; // Handle errors and return null
            }
        } catch (error) {
            console.error('Fetch error:', error);
            return null; // Handle errors and return null
        }
    }

    const handleDeletePyscript = async (id) => {
        try {
            await deletePyscript(id);
            // Handle any post-deletion tasks
            console.log('Pyscript deleted:', id);
            // Update the pyscripts state to reflect the deletion
            setPyscripts((prevPyscripts) => prevPyscripts.filter((pyscript) => pyscript.id !== id));
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }

    const createPyscript = async (newPyscriptData) => {
        try {
            console.log('Creating pyscript with data:', newPyscriptData);
            const createdPyscript = await addPyscript(newPyscriptData);
            // Do something with the created pyscript data
            console.log('Created Pyscript:', createdPyscript);
            // Update the pyscripts state to include the newly created pyscript
            setPyscripts((prevPyscripts) => [...prevPyscripts, createdPyscript]);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }

    // -------------------------------------------------------------
    // Login
    // -------------------------------------------------------------
    const navigate = useNavigate();
    const [auth, setAuth] = React.useState({});

    const isAuthenticated = () => {
        return !!auth.result.token;
    }

    const onLoginButtonClick = async (formData) => {
        //const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;
        try {
            const response = await fetch(loginUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    //'X-CSRFToken': csrfToken,
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const result = await response.json();

                // setAuth({token: result.token});
                setAuth({result, isAuthenticated});

                console.log("Token:", result.token)     // Token: Daniel Zorov

                // Redirect to home
                navigate(routes.home);

                return result; // Return the result
            } else {
                console.error("Login failed. Response status:", response.status);
                return {error: "Login failed"}; // Return an error object
            }
        } catch (error) {
            console.error("An error occurred:", error);
            return {error: "An error occurred"}; // Return an error object
        }
    };

    // -------------------------------------------------------------
    // Return
    // -------------------------------------------------------------
    return (
        // Make SampleContext available to all components in the app
        <CustomContext.Provider value={auth}>

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
                                    <Home/>
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
                                    <Vms
                                        data={vms}
                                        onShowHandler={getVmById}
                                        onUpdateHandler={updateVm}
                                        onDeleteHandler={handleDeleteVm}
                                        onCreateHandler={createVm}
                                        contentField={contentFieldVms}
                                    />
                                </div>
                            </div>
                        }
                    />

                    <Route
                        path={routes.vm}
                        element={
                            <div>
                                <PageTitle title="Virtual Machine"/>

                                <div className="total-container">
                                    <ShowVm
                                        onShowHandler={getVmById}
                                        onUpdateHandler={updateVm}
                                        vmId={useParams().id}
                                    />
                                </div>
                            </div>
                        }
                    />

                    <Route
                        path={routes.pyscripts}
                        element={
                            <div>
                                <PageTitle title="Python Scripts"/>

                                <div className="total-container">
                                    <Pyscripts
                                        data={pyscripts}
                                        onShowHandler={getPyscriptById}
                                        onUpdateHandler={updatePyscript}
                                        onDeleteHandler={handleDeletePyscript}
                                        onCreateHandler={createPyscript}
                                        contentField={contentFieldPyscripts}
                                    />
                                </div>
                            </div>
                        }
                    />

                    <Route
                        path={routes.pyscript}
                        element={
                            <div>
                                <PageTitle title="Python Script"/>

                                <div className="total-container">
                                    <ShowPyscript
                                        onShowHandler={getPyscriptById}
                                        onUpdateHandler={updatePyscript}
                                        pyscriptId={useParams().id}
                                    />
                                </div>
                            </div>
                        }
                    />
                </Routes>
            </main>

            <Footer content="&copy; 2023"/>

        </div>
        </CustomContext.Provider>
    );
}

export default App;
