import { NavLink} from 'react-router-dom';
import css from './nav-auth.module.css';


const NavAuth = () => {
    return (
        <div className={css.auth}>
        <NavLink to="/register" className={css.link}>Register</NavLink>
       <NavLink to="/login" className={css.link}>Login</NavLink>
        </div>
    )
}
export default NavAuth;