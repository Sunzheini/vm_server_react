import { useState } from "react";

export default function LoginForm(props) {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log("Form Data1:", formData);

        if (!formData.username || !formData.password) {
            setError("Please provide both username and password.");
            return;
        }

        try {
            setLoading(true);
            setError(null);

            const result = await props.onLoginButtonClick(formData);

            if (result.token) {
                // Redirect or perform actions for successful login
            } else {
                setError("Wrong credentials. Please try again.");
            }
        } catch (error) {
            setError("An error occurred. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-form">
            <form>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Enter username"
                        value={formData.username}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                </div>

                {error && <div className="error">{error}</div>}

                <div>
                    <input
                        type="button"
                        value={loading ? "Logging in..." : "Login"}
                        onClick={handleSubmit}
                        disabled={loading}
                    />
                </div>
            </form>
        </div>
    );
}
