import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditVmForm from "../Forms/EditVmForm";
import VmStatus from "./VmStatus";

export default function ShowVm(props) {
    const { id } = useParams();
    const [vm, setVm] = useState(null);

    const [isEditing, setEditing] = useState(false); // Add this line

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (id) {
                    const vmData = await props.onShowHandler(id);

                    if (vmData) {
                        setVm(vmData);
                    } else {
                        // Show an error message or redirect the vm
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
            setEditing(true); // Set isEditing to true after update
        } else {
            // Handle the case where the update was not successful, e.g., display an error message
        }
    }

    // Use useEffect to update VmStatus whenever vm changes
    useEffect(() => {

    }, [vm]);

    return (
        <div>
            {vm ? (
                <div>
                    <h1>{vm.vm_name}</h1>
                    <div className={"menu-container"}>
                        <button
                            className={"card-btn"}
                            onClick={() => setEditing(!isEditing)}>
                            {isEditing ? 'Lock' : 'Unlock'}
                        </button>
                    </div>
                    {isEditing ? (
                        <EditVmForm
                            vm={vm}
                            onUpdateHandler={handleUpdate}
                            onShowHandler={props.onShowHandler}
                        />
                    ) : null}
                </div>

            ) : (
                <p>Loading vm data...</p>
            )}

            <VmStatus vm={vm} />
        </div>
    );
}