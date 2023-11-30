import {addPyscriptUrl, editPyscriptUrl, showPyscriptUrl, deletePyscriptUrl, pyscriptsListUrl} from "../routes/urlsList";

export const getAllPyscripts = async () => {
    const response = await fetch(pyscriptsListUrl);
    const result = await response.json();
    return result;
}

export const addPyscript = async (data) => {
    const response = await fetch(addPyscriptUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
}

export const showPyscript = async (id) => {
    const response = await fetch(showPyscriptUrl + id + '/');
    const result = await response.json();
    // console.log('Received pyscript data from showPyscript:', result); // Add this line
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
