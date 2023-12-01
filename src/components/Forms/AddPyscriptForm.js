import React, { useState } from 'react';


export default function AddPyscriptForm(props) {
    const [formData, setFormData] = useState({
        vm_name: '',
        script_file: null,
    });

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
                        onClick={() => {
                            const formData = {
                                script_name: document.getElementById('script_name').value,
                                script_file: document.getElementById('script_file').files[0],
                            };
                            props.onCreateHandler(formData);
                        }}
                    />
                </div>
            </form>
        </div>
    );
}
