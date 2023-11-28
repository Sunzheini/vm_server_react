// home pc
// const usersListUrl = 'http://127.0.0.1:8000/api/users/users-list/';
// const showUserUrl = 'http://127.0.0.1:8000/api/users/show-user/';
// const editUserUrl = 'http://127.0.0.1:8000/api/users/edit-user/';
// const deleteUserUrl = 'http://127.0.0.1:8000/api/users/delete-user/';
// const addUserUrl = 'http://127.0.0.1:8000/api/users/add-user/';

const usersListUrl = 'http://127.0.0.1:8000/user-management/users-list/';
const showUserUrl = 'http://127.0.0.1:8000/user-management/show-user/';
const editUserUrl = 'http://127.0.0.1:8000/user-management/edit-user/';
const deleteUserUrl = 'http://127.0.0.1:8000/user-management/delete-user/';
const addUserUrl = 'http://127.0.0.1:8000/user-management/add-user/';

// office old
// const usersListUrl = 'http://172.23.139.33:8000/api/users/users-list/';
// const showUserUrl = 'http://172.23.139.33:8000/api/users/show-user/';
// const editUserUrl = 'http://172.23.139.33:8000/api/users/edit-user/';
// const deleteUserUrl = 'http://172.23.139.33:8000/api/users/delete-user/';
// const addUserUrl = 'http://172.23.139.33:8000/api/users/add-user/';

// office new
// const usersListUrl = 'http://172.23.123.57:8000/api/users/users-list/';
// const showUserUrl = 'http://172.23.123.57:8000/api/users/show-user/';
// const editUserUrl = 'http://172.23.123.57:8000/api/users/edit-user/';
// const deleteUserUrl = 'http://172.23.123.57:8000/api/users/delete-user/';
// const addUserUrl = 'http://172.23.123.57:8000/api/users/add-user/';


export const getAllUsers = async () => {
    const response = await fetch(usersListUrl);
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
