
import NavBarLogo from "./NavBarLogo.jsx";
import { IoPersonSharp } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import {Link} from "react-router-dom";
import {useAuth} from "../../auth/AuthContext.jsx";


const NavBar = () => {

    const {token, userInfo, setAuthToken, deleteAuthToken, isAuthenticated} = useAuth();

    return (
        <div className={"flex justify-between items-center px-5 py-1.5 border-b-2"}>

            <Link to={'/'}>
                <NavBarLogo />
            </Link>

            <div className={"flex items-center gap-2"}>

                <IoNotifications size={25} className={"mr-2"}/>

                <Link onClick={deleteAuthToken} to={'/signin'} className="flex items-center font-semibold text-xl gap-x-2 hover:text-logoBlue sm:border-s sm:border-gray-300 sm:my-6 sm:ps-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500"
                   href="#">
                    <IoPersonSharp size={25}/>
                    {
                        isAuthenticated ?
                            <div>
                                <button>Log out</button>
                            </div>

                            :
                            "Sign in"
                    }
                </Link>

            </div>

        </div>
    )

}

export default NavBar;