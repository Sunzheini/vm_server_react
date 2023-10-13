const vmsListUrl = 'http://127.0.0.1:8000/api/vms/vms-list/';
const showVmUrl = 'http://127.0.0.1:8000/api/vms/show-vm/';
const editVmUrl = 'http://127.0.0.1:8000/api/vms/edit-vm/';
const deleteVmUrl = 'http://127.0.0.1:8000/api/vms/delete-vm/';
const addVmUrl = 'http://127.0.0.1:8000/api/vms/add-vm/';

export const getAllVms = async () => {
    const response = await fetch(vmsListUrl);
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
