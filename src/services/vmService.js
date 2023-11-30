import {addVmUrl, deleteVmUrl, editVmUrl, showVmUrl, vmsListUrl} from "../routes/urlsList";

export const getAllVms = async () => {
    const response = await fetch(vmsListUrl);
    const result = await response.json();
    return result;
}

export const addVm = async (data) => {
    const response = await fetch(addVmUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
}

export const showVm = async (id) => {
    const response = await fetch(showVmUrl + id + '/');
    const result = await response.json();
    // console.log('Received vm data from showVm:', result); // Add this line
    return result;
}

export const editVm = async (id, data) => {
    const response = await fetch(editVmUrl + id + '/', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
}

export const deleteVm = async (id) => {
    const response = await fetch(deleteVmUrl + id + '/', {
        method: 'DELETE',
    });
    const result = await response.json();
    return result;
}
