// home pc
// const vmsListUrl = 'http://127.0.0.1:8000/api/vms/vms-list/';
// const showVmUrl = 'http://127.0.0.1:8000/api/vms/show-vm/';
// const editVmUrl = 'http://127.0.0.1:8000/api/vms/edit-vm/';
// const deleteVmUrl = 'http://127.0.0.1:8000/api/vms/delete-vm/';
// const addVmUrl = 'http://127.0.0.1:8000/api/vms/add-vm/';

const vmsListUrl = 'http://127.0.0.1:8000/virtual-machines/vms-list/';
const showVmUrl = 'http://127.0.0.1:8000/virtual-machines/show-vm/';
const editVmUrl = 'http://127.0.0.1:8000/virtual-machines/edit-vm/';
const deleteVmUrl = 'http://127.0.0.1:8000/virtual-machines/delete-vm/';
const addVmUrl = 'http://127.0.0.1:8000/virtual-machines/add-vm/';

// office old
// const vmsListUrl = 'http://172.23.139.33:8000/api/vms/vms-list/';
// const showVmUrl = 'http://172.23.139.33:8000/api/vms/show-vm/';
// const editVmUrl = 'http://172.23.139.33:8000/api/vms/edit-vm/';
// const deleteVmUrl = 'http://172.23.139.33:8000/api/vms/delete-vm/';
// const addVmUrl = 'http://172.23.139.33:8000/api/vms/add-vm/';

// office new (172.23.123.57)
// const vmsListUrl = 'http://172.23.123.57:8000/api/vms/vms-list/';
// const showVmUrl = 'http://172.23.123.57:8000/api/vms/show-vm/';
// const editVmUrl = 'http://172.23.123.57:8000/api/vms/edit-vm/';
// const deleteVmUrl = 'http://172.23.123.57:8000/api/vms/delete-vm/';
// const addVmUrl = 'http://172.23.123.57:8000/api/vms/add-vm/';


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
