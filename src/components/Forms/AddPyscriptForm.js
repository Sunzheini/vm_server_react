import React, { useState } from 'react';


export default function AddPyscriptForm(props) {
    const [formData, setFormData] = useState({
        vm_name: '',
        script_file: null,
    });

    const handleFormSubmit = () => {
        const scriptName = document.getElementById('script_name').value;
        const scriptFileInput = document.getElementById('script_file');
        const scriptFile = scriptFileInput.files[0];

        // Check if a script_name is provided
        if (!scriptName.trim()) {
            alert('Please enter a Py Script name.');
            return;
        }

        // Check if script_file is provided
        if (!scriptFile) {
            alert('Please choose a Py script file.');
            return;
        }

        // Check if the file has a .py extension
        if (!scriptFile.name.endsWith('.py')) {
            alert('Please choose a file with a .py extension.');
            return;
        }

        // If all validation is ok, call the onCreateHandler
        props.onCreateHandler({script_name: scriptName, script_file: scriptFile});
    };

    return (
        <div className="add-vm-form">
            <form className={"form-wrapper"} encType="multipart/form-data" method="POST">
                <div>
                    {/* Label */}
                    <label htmlFor="script_name">Py Script Name: </label>

                    {/* Input */}
                    <input
                        type="text"
                        name="script_name"
                        id="script_name"
                        placeholder="Enter Py Script name"
                    />
                </div>

                <div>
                    {/* Label for file input */}
                    <label htmlFor="script_file">Script File: </label>

                    {/* Input for file */}
                    <input
                        type="file"
                        name="script_file"
                        id="script_file"
                    />
                </div>

                <div className={"menu-container"}>
                    {/* Button */}
                    <input
                        type="button"
                        value="Add Py Script"
                        className={"card-btn"}
                        onClick={handleFormSubmit}
                    />
                </div>
            </form>
        </div>
    );
}
