
import NavBarLogo from "./NavBarLogo.jsx";
import NavBarProfile from "./NavBarProfile.jsx";


const NavBar = () => {

    return (
        <div className={"flex justify-between items-center px-5 py-3 border-b bg-gray-100"}>
            <NavBarLogo />
            <NavBarProfile />
        </div>
    )

}

export default NavBar;