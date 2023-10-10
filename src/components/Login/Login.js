import LoginForm from "../Forms/LoginForm";

export default function Login(props) {
    return (
        <div className="login">
            <LoginForm onLoginButtonClick={props.onLoginButtonClick} />
        </div>
    )
}
