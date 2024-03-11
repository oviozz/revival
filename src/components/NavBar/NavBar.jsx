
import NavBarLogo from "./NavBarLogo.jsx";
import { IoPersonSharp } from "react-icons/io5";
import { IoNotifications, IoHeart } from "react-icons/io5";
import {Link} from "react-router-dom";
import {useAuth} from "../../auth/AuthContext.jsx";


const NavBar = () => {

    const {token, userInfo, setAuthToken, deleteAuthToken, isAuthenticated} = useAuth();

    return (
        <div className={"flex justify-between items-center px-5 py-1 border-b-2"}>

            <Link to={'/'}>
                <NavBarLogo />
            </Link>

            <div className={"flex items-center gap-2"}>

                {
                    isAuthenticated ? (
                        <Link to={"/favorites"} className={"mr-2 font-semibold "}>
                            <IoHeart size={30} />
                        </Link>
                    ) : null
                }

                <Link onClick={deleteAuthToken} to={'/signin'} className="flex items-center  sm:border-s sm:border-gray-300 sm:my-6 sm:ps-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500"
                   href="#">
                    {
                        isAuthenticated ?
                            <div>
                                <button className={'font-semibold text-xl text-gray-900'}>Log out</button>
                            </div>

                            :
                                <button className={'font-semibold text-xl text-gray-900'}>Sign in</button>

                    }
                </Link>

            </div>

        </div>
    )

}

export default NavBar;