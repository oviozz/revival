
import {useAuth} from "../../auth/AuthContext.jsx";
import {Navigate, Outlet} from "react-router-dom";


const ProtectedLayout = () => {

    const {isAuthenticated, userInfo} = useAuth()

    return (
        isAuthenticated ?
            <Outlet />
            :
            <Navigate to={"/signin"} />
    )

}

export default ProtectedLayout;