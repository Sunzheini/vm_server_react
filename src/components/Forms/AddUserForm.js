export default function AddUserForm(props) {
    return (
        <div className="add-user-form">
            <form>
                <div>
                    {/* Label */}
                    <label htmlFor="username">Username: </label>

                    {/* Input */}
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Enter username"
                    />
                </div>

                <div>
                    {/* Label */}
                    <label htmlFor="password">Password: </label>

                    {/* Input */}
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter password"
                    />
                </div>

                <div>
                    {/* Label */}
                    <label htmlFor="is_admin">Admin: </label>

                    {/* Input */}
                    <input
                        type="checkbox"
                        name="is_admin"
                        id="is_admin"
                    />
                </div>

                <div>
                    {/* Button */}
                    <input
                        type="button"
                        value="Add User"
                        // onClick={props.onCreateHandler}
                        onClick={() => {
                            const formData = {
                                username: document.getElementById('username').value,
                                password: document.getElementById('password').value,
                                is_admin: document.getElementById('is_admin').checked,
                            };
                            props.onCreateHandler(formData);
                        }}
                    />
                </div>
            </form>
        </div>
    )
}
