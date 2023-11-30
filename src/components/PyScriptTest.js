import React, {useState} from 'react';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [scriptName, setScriptName] = useState('');

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };

    const handleScriptNameChange = (event) => {
        const name = event.target.value;
        setScriptName(name);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!file) {
            alert('Please select a file');
            return;
        }

        const formData = new FormData();
        formData.append('script_name', scriptName);
        formData.append('script_file', file);

        try {
            const response = await fetch('your-backend-endpoint', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                alert('File uploaded successfully');
            } else {
                alert('Failed to upload file');
            }
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <label>
                Script Name:
                <input type="text" value={scriptName} onChange={handleScriptNameChange}/>
            </label>
            <br/>
            <label>
                Select File:
                <input type="file" onChange={handleFileChange}/>
            </label>
            <br/>
            <button type="submit">Upload</button>
        </form>
    );
};

export default UploadForm;
