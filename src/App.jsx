
import './App.css'
import NavBar from "./components/NavBar/NavBar.jsx";
import NavBarLayout from "./components/NavBar/NavBarLayout.jsx";
import Button from "./components/CompAssests/Button.jsx";
import HomeDashBoard from "./pages/HomeDashBoard/HomeDashBoard.jsx";
import CreateProjectModal from "./pages/HomeDashBoard/CreateProjectModal.jsx";
import {Route, Routes} from "react-router-dom";
import SurveyDashBoard from "./pages/SuveryDashBoard/SurveyDashBoard.jsx";
import Signin from "./pages/AuthPage/Signin.jsx";
import BuildingDashBoard from "./pages/BuildingDashBoard/BuildingDashBoard.jsx";
import Signup from "./pages/AuthPage/Signup.jsx";
import FrogotPassword from "./pages/AuthPage/FrogotPassword.jsx";
import {AuthProvider} from "./auth/AuthContext.jsx";
import ProtectedLayout from "./pages/ProtectedPageLayout/ProtectedLayout.jsx";
import {UserProjectsProvider} from "./hooks/useUserProjectsContext.jsx";

function App() {
    return (
        <AuthProvider>
            <NavBarLayout>
                <Routes>
                    <Route path={"/home"} element={<h1>Not Logged in</h1>} />
                    <Route path={'/signin'} element={<Signin />} />
                    <Route path={'/signup'} element={<Signup />} />
                    <Route path={'/frogot'} element={<FrogotPassword />} />

                    <Route element={<ProtectedLayout />}>
                        <Route path={"/"} element={
                            <UserProjectsProvider>
                                <HomeDashBoard />
                            </UserProjectsProvider>
                        } />
                        <Route path={"/:project"} element={<SurveyDashBoard />} />
                        <Route path={"/:project/:survey"} element={<BuildingDashBoard />} />
                    </Route>
                </Routes>
            </NavBarLayout>
        </AuthProvider>
    )
}

export default App
