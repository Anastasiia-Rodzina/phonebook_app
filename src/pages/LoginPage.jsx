import { LoginForm } from "components/LoginForm/LoginForm";
import { useSelector } from "react-redux";
import { selectAuthError, selectAuthLoading } from "../redux/auth/auth-selectors";


const LoginPage = () => {
    const authLoading = useSelector(selectAuthLoading);
    const authError = useSelector(selectAuthError);

    return (
        <main >
            <h1>Please Log in !</h1>
            {authLoading && <p>....LogIn in progress</p>}
            <LoginForm />
            {authError && <p style={{color: "red"}}>{authError}</p>}
        </main>
    )
}
export default LoginPage;