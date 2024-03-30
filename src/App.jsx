
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
import {ProjectsProvider} from "./hooks/useProjectsContext.jsx";
import {SurveysProvider} from "./hooks/useSurveysContext.jsx";
import {BuildingChooseProvider} from "./hooks/useBuildingChoose.jsx";
import HomePage from "./pages/HomeClientPage/HomePage.jsx";
import HomeDetailPage from "./pages/HomeClientPage/HomeDetailPage.jsx";
import {Toaster} from "react-hot-toast";
import FavoritesDashboard from "./pages/FavoritesDashBoard/FavoritesDashboard.jsx";
import {FavoriteBuildingDataProvider} from "./hooks/useFavoriteData.jsx";

function App() {
    return (
        <AuthProvider>
            <NavBarLayout>
                <Routes>
                    <Route path={"/client"} element={
                        <BuildingChooseProvider>
                            <HomePage />
                        </BuildingChooseProvider>
                    } />
                    <Route path={"/client/detail"} element={
                        <BuildingChooseProvider>
                            <HomeDetailPage />
                        </BuildingChooseProvider>
                    } />
                    <Route path={'/signin'} element={<Signin />} />
                    <Route path={'/signup'} element={<Signup />} />
                    <Route path={'/frogot'} element={<FrogotPassword />} />

                    <Route element={<ProtectedLayout />}>
                        <Route path={"/"} element={
                            <ProjectsProvider>
                                <HomeDashBoard />
                            </ProjectsProvider>
                        } />
                        <Route path={"/:projectID"} element={
                            <SurveysProvider>
                                <SurveyDashBoard />
                            </SurveysProvider>
                        } />
                        <Route path={"/:projectID/:surveyID"} element={
                            <FavoriteBuildingDataProvider>
                                <BuildingChooseProvider>
                                    <BuildingDashBoard />
                                </BuildingChooseProvider>
                            </FavoriteBuildingDataProvider>
                        } />
                        <Route path={"/favorites"} element={
                            <FavoriteBuildingDataProvider>
                                <FavoritesDashboard />
                            </FavoriteBuildingDataProvider>
                        } />
                    </Route>
                </Routes>
                <Toaster position="bottom-right" reverseOrder={false}/>
            </NavBarLayout>
        </AuthProvider>
    )
}

export default App
