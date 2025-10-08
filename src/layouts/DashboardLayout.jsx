import { Outlet } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
    return (
        <div className="flex bg-background text-foreground min-h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <DashboardHeader />
                <main className="p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default DashboardLayout;