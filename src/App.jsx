
import AppRouts from "AppRouts"
import Navigation from "components/Navigation/Navigation"
import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { current } from "./redux/auth/auth-operations";


export const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(current())
    }, [])
    
    return (
        <>
        <Navigation/>
        <AppRouts/>
        </>
    )
}