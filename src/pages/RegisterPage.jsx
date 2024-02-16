import { RegisterForm } from "components/RegisterForm/RegisterForm";
import { useSelector } from "react-redux";
import { selectAuthError, selectAuthLoading } from "../redux/auth/auth-selectors";

;

const RegisterPage = () => {
    const authLoading = useSelector(selectAuthLoading);
    const authError = useSelector(selectAuthError);

    return (
        <main>
            <h1>Please Sign Up !</h1>
            {authLoading && <p>....Register in progress</p>}
            <RegisterForm />
            {authError && <p style={{color: "red"}}>{authError}</p>}
        </main>
    )
}
export default RegisterPage;