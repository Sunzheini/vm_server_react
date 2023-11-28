import React, { useEffect, useState } from 'react';


export default function AddVmForm(props) {
    const [vmTypes, setVmTypes] = useState([]);
    const [formData, setFormData] = useState({
        vm_name: '',
        vm_type: '', // Set a default value or leave it empty based on your requirements
    });

    useEffect(() => {
        // Fetch VM types from the backend
        const fetchVmTypes = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/virtual-machines/vm-types/');
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
            <form>
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

                <div>
                    {/* Button */}
                    <input
                        type="button"
                        value="Add VM"
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
