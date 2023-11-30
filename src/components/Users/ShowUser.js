import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditUserForm from "../Forms/EditUserForm";

export default function ShowUser(props) {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    const [isEditing, setEditing] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (id) {
                    const userData = await props.onShowHandler(id);

                    if (userData) {
                        setUser(userData);
                    } else {
                        // Handle the case
                    }
                }
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchData();
    }, [id, props]);

    const handleUpdate = async (updatedData) => {
        const updatedUser = await props.onUpdateHandler(id, updatedData);

        if (updatedUser) {
            setUser(updatedUser); // Update the user state with the new data
            setEditing(true); // Set isEditing to true after update
        } else {
            // Handle the case where the update was not successful, e.g., display an error message
        }
    };

    return (
        <div>
            {user ? (
                <div>
                    <h1>{user.username}</h1>
                    <div className={"menu-container"}>
                        <button
                            className={"card-btn"}
                            onClick={() => setEditing(!isEditing)}>
                            {isEditing ? 'Lock' : 'Unlock'}
                        </button>
                    </div>
                    {isEditing ? (
                        <EditUserForm user={user} onUpdateHandler={handleUpdate}/>
                    ) : null}
                </div>
            ) : (
                <p>Loading user data...</p>
            )}
        </div>
    );
}
