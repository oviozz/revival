
import NavBar from "./NavBar.jsx";


function NavBarLayout(props){

    return (
        <nav>
            <NavBar />
            <main className={'p-5'}>
                {props.children}
            </main>
        </nav>
    )

}


export default NavBarLayout;