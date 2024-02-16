import css from './navigation.module.css';
import NavAuth from './NavAuth/NavAuth';
import NavMenu from './NavMenu/NavMenu';
import NavUser from './NavUser/NavUser';
import { useSelector } from 'react-redux';
import { selectIsLogin } from '../../redux/auth/auth-selectors';
import { Link } from 'react-router-dom';


const Navigation = () => {

    const isLogin = useSelector(selectIsLogin);
     return (
        <div className={css.navigation}>
        <Link to='/'>Logo</Link>
        <NavMenu/>
        {isLogin ? <NavUser/> : <NavAuth/>}
       
        </div>
     )
}
export default Navigation;