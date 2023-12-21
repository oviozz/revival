
import NavBar from "./NavBar.jsx";


function NavBarLayout(props){

    return (
        <nav>
            <NavBar />
            {props.children}
        </nav>
    )

}


export default NavBarLayout;