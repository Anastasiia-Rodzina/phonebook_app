import { useSelector } from 'react-redux';
import { NavLink} from 'react-router-dom';
import {  } from 'react-router-dom';
import { selectIsLogin } from '../../../redux/auth/auth-selectors';
import css from './nav-menu.module.css'
import menuItems from './menuItems';

const NavMenu = () => {

    const isLogin = useSelector(selectIsLogin);

    const filteredMenuItems = !isLogin ? menuItems.filter(item => !item.private) : menuItems;

    const elements = filteredMenuItems.map(({id, to, text}) => (
    <li key={id}>
        <NavLink className={css.link} to={to}>{text}</NavLink>
    </li>
    ))

    return (
        <>
         <ul className={css.menu}>{elements}</ul>
        </>
    )
}
export default NavMenu;