import './App.css'
import {Route, Routes} from "react-router";
import MainLayout from "./layout/main/MainLayout.tsx";
import NotFoundPage from "./pages/common/NotFoundPage.tsx";
import UserHomePage from "./pages/user/userHomePage";
import RegisterPage from "./pages/account/registerPage";
import CreateCountryPage from "./pages/country/create";
import CreateCityPage from "./pages/city/create";
import CitiesPage from "./pages/city/list";
import CityDetailPage from "./pages/city/item";

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<UserHomePage/>} />
                    <Route path={"/register"} element={<RegisterPage/>} />
                    <Route path={"/countries/create"} element={<CreateCountryPage/>} />

                    <Route path="cities">
                        <Route path="create" element={<CreateCityPage />} />
                        <Route index element={<CitiesPage/>} />
                        <Route path=":slug" element={<CityDetailPage/>} />
                    </Route>
                </Route>

                <Route path="*" element={<NotFoundPage/>} />
            </Routes>
        </>
    )
}

export default App
