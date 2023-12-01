import {addPyscriptUrl, editPyscriptUrl, showPyscriptUrl, deletePyscriptUrl, pyscriptsListUrl} from "../routes/urlsList";

export const getAllPyscripts = async () => {
    const response = await fetch(pyscriptsListUrl);
    const result = await response.json();
    return result;
}

export const addPyscript = async (data) => {
    console.log('data:', data);

    const formData = new FormData();
    formData.append('script_name', data.script_name);
    // check if there is a file to upload
    if (data.script_file) {
        formData.append('script_file', data.script_file);
    }

    const response = await fetch(addPyscriptUrl, {
        method: 'POST',
        body: formData,
        headers: {
            // Include any additional headers if needed
        },
    });

    const result = await response.json();
    return result;
};

export const showPyscript = async (id) => {
    const response = await fetch(showPyscriptUrl + id + '/');
    const result = await response.json();
    return result;
}

export const editPyscript = async (id, data) => {
    const response = await fetch(editPyscriptUrl + id + '/', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
}

export const deletePyscript = async (id) => {
    const response = await fetch(deletePyscriptUrl + id + '/', {
        method: 'DELETE',
    });
    const result = await response.json();
    return result;
}
