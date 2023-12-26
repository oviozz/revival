
import {useAuth} from "../../auth/AuthContext.jsx";
import {Navigate, Outlet} from "react-router-dom";


const ProtectedLayout = () => {

    const {isAuthenticated, userInfo} = useAuth()
    console.log(isAuthenticated)
    console.log(userInfo)

    return (
        isAuthenticated ?
            <Outlet />
            :
            <Navigate to={"/home"} />
    )


}

export default ProtectedLayout;