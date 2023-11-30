import React, { useState } from "react";

export default function UserUpdateForm(props) {
    const [formData, setFormData] = useState(props.user);

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
                <label htmlFor="username">Username: </label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    value={formData.username}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="password">Password: </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="is_admin">Admin: </label>
                <input
                    type="checkbox"
                    name="is_admin"
                    id="is_admin"
                    checked={formData.is_admin}
                    onChange={handleChange}
                />
            </div>

            <div className={"menu-container"}>
                <button className={"card-btn"} type="submit">Update User</button>
            </div>
        </form>
    );
}
