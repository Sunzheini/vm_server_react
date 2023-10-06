export default function LoginForm(props) {
    return (
        <div className="login-form">
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
                    {/* Button */}
                    <input
                        type="button"
                        value="Login"
                        onClick={props.onLoginButtonClick}
                    />
                </div>
            </form>
        </div>
    )
}