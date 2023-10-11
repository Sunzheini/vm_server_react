import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditUserForm from "../Forms/EditUserForm";

export default function ShowUser(props) {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    const [isEditing, setEditing] = useState(false); // Add this line

    // Inside your ShowUser component
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (id) {
                    const userData = await props.onShowHandler(id);
                    // console.log("Received user data:", userData);

                    if (userData) {
                        setUser(userData);
                    } else {
                        // Handle the case where user data is null
                        // You can show an error message or redirect the user
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
            setEditing(false); // Set isEditing to false after update
        } else {
            // Handle the case where the update was not successful, e.g., display an error message
        }
    };

    return (
        <div>
            {user ? (
                <div>
                    <h1>{user.username}</h1>
                    <button onClick={() => setEditing(true)}>Unlock</button>
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
