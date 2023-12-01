import React, { useState } from "react";

export default function EditPyscriptForm(props) {
    const [formData, setFormData] = useState(props.pyscript);

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        const newValue = type === "checkbox" ? checked : value;

        setFormData({
            ...formData,
            [name]: newValue,
        });
    };

        // Specific handles
    // --------------------------------------------------------------------
    const handleUpdateName = async () => {
        await props.onUpdateHandler({
            script_name: formData.script_name
        });
        const updatedPyscript = await props.onShowHandler(props.pyscript.id); // Fetch updated data
        if (updatedPyscript) {
            setFormData(updatedPyscript); // Update the form data with the new data
        }
    };

    const handleScriptIsExecuted = async () => {
        await props.onUpdateHandler({
            script_is_executed: true
        });
        const updatedPyscript = await props.onShowHandler(props.pyscript.id); // Fetch updated data
        if (updatedPyscript) {
            setFormData(updatedPyscript); // Update the form data with the new data
        }
    }

    return (
        <form
            className={"form-wrapper"}
            onSubmit={(e) => e.preventDefault()}
        >
            <div>
                <label htmlFor="script_name">Script Name: </label>

                <div className={"input-and_button-wrapper"}>
                    <input
                        type="text"
                        name="script_name"
                        id="script_name"
                        value={formData.script_name}
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
                <button
                    type="button"
                    className={"card-btn"}
                    onClick={handleScriptIsExecuted}
                    // disabled={!formData.path_to_selected_program}
                >
                    {formData.script_is_executed} Execute Script
                </button>
            </div>

            <hr/>

            {props.pyscript.script_status &&
                <div className={"status-text-div"}>
                    {props.pyscript.script_status}
                </div>}
        </form>
    );
}