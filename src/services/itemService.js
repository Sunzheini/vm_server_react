const baseUrl = 'http://127.0.0.1:8000/api/';

export const getAll = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();
    return result;
}

export const createItem = async (data) => {
    const response = await fetch(baseUrl + 'add/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
}

export const deleteItem = async (id) => {
    const response = await fetch(baseUrl + 'delete/' + id + '/', {
        method: 'DELETE',
    });
    const result = await response.json();
    return result;
}
