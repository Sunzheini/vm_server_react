import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditPyscriptForm from "../Forms/EditPyscriptForm";

export default function ShowPyscript(props) {
    const { id } = useParams();
    const [pyscript, setPyscript] = useState(null);

    const [isEditing, setEditing] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (id) {
                    const pyscriptData = await props.onShowHandler(id);

                    if (pyscriptData) {
                        setPyscript(pyscriptData);
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
        const updatedPyscript = await props.onUpdateHandler(id, updatedData);

        if (updatedPyscript) {
            setPyscript(updatedPyscript); // Update the pyscript state with the new data
            setEditing(true); // Set isEditing to true after update
        } else {
            // Handle the case where the update was not successful, e.g., display an error message
        }
    };

    useEffect(() => {

    }, [pyscript]);

    return (
        <div>
            {pyscript ? (
                <div>
                    <h1>{pyscript.script_name}</h1>
                    <div className={"menu-container"}>
                        <button
                            className={"card-btn"}
                            onClick={() => setEditing(!isEditing)}>
                            {isEditing ? 'Lock' : 'Unlock'}
                        </button>
                    </div>
                    {isEditing ? (
                        <EditPyscriptForm
                            pyscript={pyscript}
                            onUpdateHandler={handleUpdate}
                            onShowHandler={props.onShowHandler}
                        />
                    ) : null}
                </div>
            ) : (
                <p>Loading pyscript data...</p>
            )}
        </div>
    );
}