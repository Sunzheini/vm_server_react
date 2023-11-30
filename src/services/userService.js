import {addUserUrl, deleteUserUrl, editUserUrl, showUserUrl, usersListUrl} from "../routes/urlsList";

export const getAllUsers = async () => {
    const response = await fetch(usersListUrl);
    const result = await response.json();
    return result;
}

export const addUser = async (data) => {
    const response = await fetch(addUserUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
}

export const showUser = async (id) => {
    const response = await fetch(showUserUrl + id + '/');
    const result = await response.json();
    // console.log('Received user data from showUser:', result); // Add this line
    return result;
}

export const editUser = async (id, data) => {
    const response = await fetch(editUserUrl + id + '/', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
}

export const deleteUser = async (id) => {
    const response = await fetch(deleteUserUrl + id + '/', {
        method: 'DELETE',
    });
    const result = await response.json();
    return result;
}
