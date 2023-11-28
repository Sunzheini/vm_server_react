// home pc
// const loginUrl = 'http://127.0.0.1:8000/api/login/';
const loginUrl = 'http://127.0.0.1:8000/login/';

// office old
// const loginUrl = 'http://172.23.139.33:8000/api/login/';

// office new
// const loginUrl = 'http://172.23.123.57:8000/api/login/';


export const onLoginButtonClick = async (formData) => {
    //const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;

    console.log("Form Data2:", formData);

    try {
        const response = await fetch(loginUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                //'X-CSRFToken': csrfToken,
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            const result = await response.json();
            console.log("Login success. Result:", result);
            localStorage.setItem('token', result.token);
            console.log("Token:", result.token)     // Token: Daniel Zorov
            return result; // Return the result
        } else {
            console.error("Login failed. Response status:", response.status);
            return { error: "Login failed" }; // Return an error object
        }
    } catch (error) {
        console.error("An error occurred:", error);
        return { error: "An error occurred" }; // Return an error object
    }
};
