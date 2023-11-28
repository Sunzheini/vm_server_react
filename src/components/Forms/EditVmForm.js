import React, {useEffect, useState} from "react";

export default function EditVmForm(props) {
    const [formData, setFormData] = useState(props.vm);

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        const newValue = type === "checkbox" ? checked : value;

        setFormData({
            ...formData,
            [name]: newValue,
        });
    }

    const handleUpdate = (event) => {
        props.onUpdateHandler(formData);
    }

    // Specific handles
    // --------------------------------------------------------------------
    const handleUpdateName = async () => {
        // Assuming you want to update only the "vm_name" field
        await props.onUpdateHandler({
            vm_name: formData.vm_name
        });
        const updatedVm = await props.onShowHandler(props.vm.id); // Fetch updated data
        if (updatedVm) {
            setFormData(updatedVm); // Update the form data with the new data
        }
    };

    const handleMachineIsStarted = async () => {
        // Assuming you want to update only the "machine_is_started" field
        if (formData.machine_is_started === true) {
            formData.machine_is_started = false;
            formData.program_is_open = false;
            formData.program_is_compiled = false;
            formData.program_is_downloaded = false;
            formData.connection_is_online = false;
            formData.plc_is_running = false;
            formData.enabled = false;

            await props.onUpdateHandler({
                // The first key is used in the backend so make sure it is the correct one!
                machine_is_started: formData.machine_is_started,

                program_is_open: formData.program_is_open,
                program_is_compiled: formData.program_is_compiled,
                program_is_downloaded: formData.program_is_downloaded,
                connection_is_online: formData.connection_is_online,
                plc_is_running: formData.plc_is_running,
                enabled: formData.enabled,
            });
        }
        else {
            await props.onUpdateHandler({
                // The first key is used in the backend so make sure it is the correct one!
                machine_is_started: !formData.machine_is_started,
            });
        }

        const updatedVm = await props.onShowHandler(props.vm.id); // Fetch updated data
        if (updatedVm) {
            setFormData(updatedVm); // Update the form data with the new data
        }
    }

    const handlePathToSelectedProgram = async (event) => {
        const fileInput = event.target;
        const file = fileInput.files[0];
        let file_path = null;

        if (file) {
            // Assuming you want to update only the "path_to_selected_program" field
            file_path = fileInput.value; // Use the file input value as the path
            await props.onUpdateHandler({
                path_to_selected_program: file_path,
            });
            const updatedVm = await props.onShowHandler(props.vm.id); // Fetch updated data
            if (updatedVm) {
                setFormData(updatedVm); // Update the form data with the new data
            }
        }
    };

    const handleRemovePath = async () => {
        // Assuming you want to update only the "path_to_selected_program" field
        await props.onUpdateHandler({
            path_to_selected_program: '',
        });
        const updatedVm = await props.onShowHandler(props.vm.id); // Fetch updated data
        if (updatedVm) {
            setFormData(updatedVm); // Update the form data with the new data
        }
    }

    const handleProgramIsOpen = async () => {
        // Assuming you want to update only the "program_is_open" field
        await props.onUpdateHandler({
            program_is_open: !formData.program_is_open
        });
        const updatedVm = await props.onShowHandler(props.vm.id); // Fetch updated data
        if (updatedVm) {
            setFormData(updatedVm); // Update the form data with the new data
        }
    }

    const handleProgramIsCompiled = async () => {
        // Assuming you want to update only the "program_is_compiled" field
        await props.onUpdateHandler({
            program_is_compiled: true
        });
        const updatedVm = await props.onShowHandler(props.vm.id); // Fetch updated data
        if (updatedVm) {
            setFormData(updatedVm); // Update the form data with the new data
        }
    }

    const handleProgramIsDownloaded = async () => {
        // Assuming you want to update only the "program_is_downloaded" field
        await props.onUpdateHandler({
            program_is_downloaded: true
        });
        const updatedVm = await props.onShowHandler(props.vm.id); // Fetch updated data
        if (updatedVm) {
            setFormData(updatedVm); // Update the form data with the new data
        }
    }

    const handleConnectionIsOnline = async () => {
        // Assuming you want to update only the "connection_is_online" field
        await props.onUpdateHandler({
            connection_is_online: !formData.connection_is_online
        });
        const updatedVm = await props.onShowHandler(props.vm.id); // Fetch updated data
        if (updatedVm) {
            setFormData(updatedVm); // Update the form data with the new data
        }
    }

    const handlePlcIsRunning = async () => {
        // Assuming you want to update only the "plc_is_running" field
        await props.onUpdateHandler({
            plc_is_running: !formData.plc_is_running
        });
        const updatedVm = await props.onShowHandler(props.vm.id); // Fetch updated data
        if (updatedVm) {
            setFormData(updatedVm); // Update the form data with the new data
        }
    }

    const handleEnabled = async () => {
        // Assuming you want to update only the "is_enabled" field
        await props.onUpdateHandler({
            enabled: !formData.enabled
        });
        const updatedVm = await props.onShowHandler(props.vm.id); // Fetch updated data
        if (updatedVm) {
            setFormData(updatedVm); // Update the form data with the new data
        }
    }

    // --------------------------------------------------------------------

    return (
        // <form onSubmit={handleSubmit}>
        <form onSubmit={(e) => e.preventDefault()}>
            <div>
                <label htmlFor="vm_name">VM Name: </label>
                <input
                    type="text"
                    name="vm_name"
                    id="vm_name"
                    value={formData.vm_name}
                    onChange={handleChange}
                />
                <button type="button" onClick={handleUpdateName}>
                    Update Name
                </button>
            </div>

            <div>
                <button type="button" onClick={handleMachineIsStarted}>
                    {formData.machine_is_started ? "Stop" : "Start"} Machine
                </button>
            </div>

            <div>
                <label
                    htmlFor="path_to_selected_program"
                >
                    path: {formData.path_to_selected_program}
                </label>
                <input
                    type="file"
                    name="path_to_selected_program"
                    id="path_to_selected_program"
                    disabled={!formData.machine_is_started}
                    onChange={handlePathToSelectedProgram}
                />
            </div>

            <div>
                <button
                    type="button"
                    onClick={handleRemovePath}
                    disabled={!formData.machine_is_started || !formData.path_to_selected_program}
                >
                    Remove path
                </button>
            </div>

            <div>
                <button
                    type="button"
                    onClick={handleProgramIsOpen}
                    disabled={!formData.machine_is_started || !formData.path_to_selected_program}
                >
                    {formData.program_is_open ? "Close" : "Open"} Program
                </button>
            </div>

            <div>
                <button
                    type="button"
                    onClick={handleProgramIsCompiled}
                    disabled={!formData.machine_is_started|| !formData.path_to_selected_program || !formData.program_is_open}
                >
                    {formData.program_is_compiled} Compile Program
                </button>
            </div>

            <div>
                <button
                    type="button"
                    onClick={handleProgramIsDownloaded}
                    disabled={!formData.machine_is_started|| !formData.path_to_selected_program|| !formData.program_is_open || !formData.program_is_compiled}
                >
                    {formData.program_is_downloaded} Download Program
                </button>
            </div>

            <div>
                <button
                    type="button"
                    onClick={handleConnectionIsOnline}
                    disabled={!formData.machine_is_started}
                >
                    {formData.connection_is_online ? "Disconnect" : "Connect"}
                </button>
            </div>

            <div>
                <button
                    type="button"
                    onClick={handlePlcIsRunning}
                    disabled={!formData.machine_is_started}
                >
                    {formData.plc_is_running ? "Stop" : "Start"} PLC
                </button>
            </div>

            <div>
                <button
                    type="button"
                    onClick={handleEnabled}
                    disabled={!formData.machine_is_started}
                >
                    {formData.enabled ? "Set Enable to 1" : "Set Enable to 0"}
                </button>
            </div>

            {/*<div>*/}
            {/*    <button type="submit" onClick={handleUpdate}>*/}
            {/*        Update VM*/}
            {/*    </button>*/}
            {/*</div>*/}

            {props.vm.message_what_changed_last && <div>{props.vm.message_what_changed_last}</div>}
        </form>
    );
}
