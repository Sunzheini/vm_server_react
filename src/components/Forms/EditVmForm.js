import React, { useState } from "react";

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

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onUpdateHandler(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="vm_name">VM Name: </label>
                <input
                    type="text"
                    name="vm_name"
                    id="vm_name"
                    value={formData.vm_name}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="is_started">Started </label>
                <input
                    type="checkbox"
                    name="is_started"
                    id="is_started"
                    checked={formData.is_started}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="is_compiled">Compiled </label>
                <input
                    type="checkbox"
                    name="is_compiled"
                    id="is_compiled"
                    checked={formData.is_compiled}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="is_downloaded">Downloaded </label>
                <input
                    type="checkbox"
                    name="is_downloaded"
                    id="is_downloaded"
                    checked={formData.is_downloaded}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="is_online">Online </label>
                <input
                    type="checkbox"
                    name="is_online"
                    id="is_online"
                    checked={formData.is_online}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="is_running">Running </label>
                <input
                    type="checkbox"
                    name="is_running"
                    id="is_running"
                    checked={formData.is_running}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="is_enabled">Enabled </label>
                <input
                    type="checkbox"
                    name="is_enabled"
                    id="is_enabled"
                    checked={formData.is_enabled}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="param_name">Parameter Name: </label>
                <input
                    type="text"
                    name="param_name"
                    id="param_name"
                    value={formData.param_name}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="param_value">Parameter Value: </label>
                <input
                    type="text"
                    name="param_value"
                    id="param_value"
                    value={formData.param_value}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="is_read">Read </label>
                <input
                    type="checkbox"
                    name="is_read"
                    id="is_read"
                    checked={formData.is_read}
                    onChange={handleChange}
                />
            </div>

            <div>
                <button type="submit">Update VM</button>
            </div>
        </form>
    );
}
