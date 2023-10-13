import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditVmForm from "../Forms/EditVmForm";

export default function ShowVm(props) {
    const { id } = useParams();
    const [vm, setVm] = useState(null);

    const [isEditing, setEditing] = useState(false); // Add this line

    // Inside your ShowVm component
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (id) {
                    const vmData = await props.onShowHandler(id);
                    // console.log("Received vm data:", vmData);

                    if (vmData) {
                        setVm(vmData);
                    } else {
                        // Handle the case where vm data is null
                        // You can show an error message or redirect the vm
                    }
                }
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchData();
    }, [id, props]);

    const handleUpdate = async (updatedData) => {
        const updatedVm = await props.onUpdateHandler(id, updatedData);

        if (updatedVm) {
            setVm(updatedVm); // Update the vm state with the new data
            setEditing(false); // Set isEditing to false after update
        } else {
            // Handle the case where the update was not successful, e.g., display an error message
        }
    }

    return (
        <div>
            {vm ? (
                <div>
                    <h1>{vm.vm_name}</h1>
                    <button onClick={() => setEditing(true)}>Unlock</button>
                    {isEditing ? (
                        <EditVmForm vm={vm} onUpdateHandler={handleUpdate}/>
                    ) : null}
                </div>
            ) : (
                <p>Loading vm data...</p>
            )}
        </div>
    );
}