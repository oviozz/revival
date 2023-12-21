
import './App.css'
import NavBar from "./components/NavBar/NavBar.jsx";
import NavBarLayout from "./components/NavBar/NavBarLayout.jsx";
import Button from "./components/CompAssests/Button.jsx";
import HomeDashBoard from "./pages/HomeDashBoard/HomeDashBoard.jsx";
import CreateProjectModal from "./pages/HomeDashBoard/CreateProjectModal.jsx";

function App() {

    return (
        <NavBarLayout>
            <HomeDashBoard />
        </NavBarLayout>
    )

}

export default App
