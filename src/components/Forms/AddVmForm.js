import React, { useEffect, useState } from 'react';
import {vmTypesUrl} from "../../routes/urlsList";


export default function AddVmForm(props) {
    const [vmTypes, setVmTypes] = useState([]);
    const [formData, setFormData] = useState({
        vm_name: '',
        vm_type: '',
    });

    useEffect(() => {
        // Fetch VM types from the backend
        const fetchVmTypes = async () => {
            try {
                const response = await fetch(vmTypesUrl);
                if (response.ok) {
                    const data = await response.json();
                    setVmTypes(data); // Update to setVmTypes(data) directly
                } else {
                    console.error('Failed to fetch VM types');
                }
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchVmTypes();
    }, []); // Empty dependency array means this effect runs once when the component mounts

    return (
        <div className="add-vm-form">
            <form className={"form-wrapper"}>
                <div>
                    {/* Label */}
                    <label htmlFor="vm_name">VM Name: </label>

                    {/* Input */}
                    <input
                        type="text"
                        name="vm_name"
                        id="vm_name"
                        placeholder="Enter VM name"
                    />
                </div>

                <div>
                    <label htmlFor="vm_type">VM Type: </label>
                    <select
                        name="vm_type"
                        id="vm_type"
                        value={formData.vm_type}
                        onChange={(e) => setFormData({ ...formData, vm_type: e.target.value })}
                    >
                        {vmTypes && vmTypes.map((typeObj) => (
                            <option key={typeObj.vm_type} value={typeObj.vm_type}>
                                {typeObj.vm_type}
                            </option>
                        ))}
                    </select>
                </div>

                <div className={"menu-container"}>
                    {/* Button */}
                    <input
                        type="button"
                        value="Add VM"
                        className={"card-btn"}
                        // onClick={props.onCreateHandler}
                        onClick={() => {
                            const formData = {
                                vm_name: document.getElementById('vm_name').value,
                                vm_type: document.getElementById('vm_type').value,
                            };
                            props.onCreateHandler(formData);
                        }}
                    />
                </div>
            </form>
        </div>
    );
}
