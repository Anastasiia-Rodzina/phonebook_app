import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import { Suspense, lazy } from 'react';
import { Route, Routes} from 'react-router-dom';
const HomePage = lazy(() => import('pages/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage.jsx'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

const AppRouts = ()=> {

return (
    <Suspense fallback ={<>Loading ...</>}>
    <Routes>
<Route path='/' element={<HomePage/>}/>
<Route element={<PublicRoute/>}>
    <Route path='/register' element={<RegisterPage/>} />
    <Route path='/login' element={<LoginPage/>} />
</Route>
<Route element={<PrivateRoute/>}>
    <Route path='/contacts' element={<ContactsPage/>} />
</Route>
<Route path='*' element={<NotFoundPage/>} />
    </Routes>
   </Suspense>
)
}
export default AppRouts;