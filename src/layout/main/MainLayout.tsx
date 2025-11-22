import { Outlet } from "react-router";
import MainHeader from "./MainHeader.tsx";
import MainFooter from "./MainFooter.tsx";

export const MainLayout = () => {
    return (
        <div className={" bg-[var(--bg)] text-[var(--fg)]"}>
            <MainHeader />

            <main>
                <Outlet />
            </main>

            <MainFooter />
        </div>
    );
};

export default MainLayout;
