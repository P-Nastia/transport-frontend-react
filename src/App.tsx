import './App.css'
import {Route, Routes} from "react-router";
import MainLayout from "./layout/main/MainLayout.tsx";
import NotFoundPage from "./pages/common/NotFoundPage.tsx";
import UserHomePage from "./pages/user/userHomePage";
import RegisterPage from "./pages/account/registerPage";
import CreateCountryPage from "./pages/country/createCountryPage";

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<UserHomePage/>} />
                    <Route path={"/register"} element={<RegisterPage/>} />
                    <Route path={"/countries/create"} element={<CreateCountryPage/>} />
                </Route>

                <Route path="*" element={<NotFoundPage/>} />
            </Routes>
        </>
    )
}

export default App
