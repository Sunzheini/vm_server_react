import React, {useState} from "react";

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

    // Specific handles
    // --------------------------------------------------------------------
    const handleUpdateName = async () => {
        await props.onUpdateHandler({
            vm_name: formData.vm_name
        });
        const updatedVm = await props.onShowHandler(props.vm.id); // Fetch updated data
        if (updatedVm) {
            setFormData(updatedVm); // Update the form data with the new data
        }
    };

    const handleMachineIsStarted = async () => {
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
        await props.onUpdateHandler({
            path_to_selected_program: '',
        });
        const updatedVm = await props.onShowHandler(props.vm.id); // Fetch updated data
        if (updatedVm) {
            setFormData(updatedVm); // Update the form data with the new data
        }
    }

    const handleProgramIsOpen = async () => {
        await props.onUpdateHandler({
            program_is_open: !formData.program_is_open
        });
        const updatedVm = await props.onShowHandler(props.vm.id); // Fetch updated data
        if (updatedVm) {
            setFormData(updatedVm); // Update the form data with the new data
        }
    }

    const handleProgramIsCompiled = async () => {
        await props.onUpdateHandler({
            program_is_compiled: true
        });
        const updatedVm = await props.onShowHandler(props.vm.id); // Fetch updated data
        if (updatedVm) {
            setFormData(updatedVm); // Update the form data with the new data
        }
    }

    const handleProgramIsDownloaded = async () => {
        await props.onUpdateHandler({
            program_is_downloaded: true
        });
        const updatedVm = await props.onShowHandler(props.vm.id); // Fetch updated data
        if (updatedVm) {
            setFormData(updatedVm); // Update the form data with the new data
        }
    }

    const handleConnectionIsOnline = async () => {
        await props.onUpdateHandler({
            connection_is_online: !formData.connection_is_online
        });
        const updatedVm = await props.onShowHandler(props.vm.id); // Fetch updated data
        if (updatedVm) {
            setFormData(updatedVm); // Update the form data with the new data
        }
    }

    const handlePlcIsRunning = async () => {
        await props.onUpdateHandler({
            plc_is_running: !formData.plc_is_running
        });
        const updatedVm = await props.onShowHandler(props.vm.id); // Fetch updated data
        if (updatedVm) {
            setFormData(updatedVm); // Update the form data with the new data
        }
    }

    const handleEnabled = async () => {
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
        <form
            className={"form-wrapper"}
            onSubmit={(e) => e.preventDefault()}
        >
            <div>
                <label htmlFor="vm_name">VM Name: </label>

                <div className={"input-and_button-wrapper"}>
                    <input
                        type="text"
                        name="vm_name"
                        id="vm_name"
                        value={formData.vm_name}
                        onChange={handleChange}
                    />
                    <div className={"menu-container"}>
                        <button
                            className={"card-btn"}
                            type="button"
                            onClick={handleUpdateName}>
                            <i className="fa-solid fa-arrows-rotate"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div className={"menu-container"}>
                <button type="button" className={"card-btn"} onClick={handleMachineIsStarted}>
                    {formData.machine_is_started ? "Stop" : "Start"} Machine
                </button>
            </div>

            <hr/>

            <div>
                <label
                    htmlFor="path_to_selected_program"
                >
                    Project path: {
                        formData.path_to_selected_program
                            ? formData.path_to_selected_program
                            : "not selected"
                    }
                </label>

                <div className="input-file-div">
                    <label htmlFor="path_to_selected_program" className="custom-file-button">
                        Choose File
                    </label>
                    <input
                        type="file"
                        name="path_to_selected_program"
                        id="path_to_selected_program"
                        className="input-file"
                        disabled={!formData.machine_is_started}
                        onChange={handlePathToSelectedProgram}
                    />
                </div>

            </div>

            <div className={"menu-container"}>
                <button
                    type="button"
                    className={"card-btn"}
                    onClick={handleRemovePath}
                    disabled={!formData.machine_is_started || !formData.path_to_selected_program}
                >
                    Remove path
                </button>
            </div>

            <hr/>

            <div className={"menu-container"}>
                <button
                    type="button"
                    className={"card-btn"}
                    onClick={handleProgramIsOpen}
                    disabled={!formData.machine_is_started || !formData.path_to_selected_program}
                >
                    {formData.program_is_open ? "Close" : "Open"} Program
                </button>
            </div>

            <div className={"menu-container"}>
                <button
                    type="button"
                    className={"card-btn"}
                    onClick={handleProgramIsCompiled}
                    disabled={!formData.machine_is_started|| !formData.path_to_selected_program || !formData.program_is_open}
                >
                    {formData.program_is_compiled} Compile Program
                </button>
            </div>

            <div className={"menu-container"}>
                <button
                    type="button"
                    className={"card-btn"}
                    onClick={handleProgramIsDownloaded}
                    disabled={!formData.machine_is_started|| !formData.path_to_selected_program|| !formData.program_is_open || !formData.program_is_compiled}
                >
                    {formData.program_is_downloaded} Download Program
                </button>
            </div>

            <hr/>

            <div className={"menu-container"}>
                <button
                    type="button"
                    className={"card-btn"}
                    onClick={handleConnectionIsOnline}
                    disabled={!formData.machine_is_started}
                >
                    {formData.connection_is_online ? "Disconnect" : "Connect"}
                </button>
            </div>

            <div className={"menu-container"}>
                <button
                    type="button"
                    className={"card-btn"}
                    onClick={handlePlcIsRunning}
                    disabled={!formData.machine_is_started}
                >
                    {formData.plc_is_running ? "Stop" : "Start"} PLC
                </button>
            </div>

            <div className={"menu-container"}>
                <button
                    type="button"
                    className={"card-btn"}
                    onClick={handleEnabled}
                    disabled={!formData.machine_is_started}
                >
                    {formData.enabled ? "Set Enable to 1" : "Set Enable to 0"}
                </button>
            </div>

            <hr/>

            {props.vm.message_what_changed_last &&
                <div className={"status-text-div"}>
                    {props.vm.message_what_changed_last}
                </div>}
        </form>
    );
}
