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

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onUpdateHandler(formData);
    };

    return (
        <form className={"form-wrapper"} onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="description">Description: </label>
                <input
                    type="text"
                    name="description"
                    id="description"
                    value={formData.description}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="script">Script: </label>
                <input
                    type="text"
                    name="script"
                    id="script"
                    value={formData.script}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="is_active">Active: </label>
                <input
                    type="checkbox"
                    name="is_active"
                    id="is_active"
                    checked={formData.is_active}
                    onChange={handleChange}
                />
            </div>

            <div className={"menu-container"}>
                <button className={"card-btn"} type="submit">Update Pyscript</button>
            </div>
        </form>
    );
}