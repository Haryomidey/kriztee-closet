import { useAuth } from "../contexts/AuthContext";

const DashboardHeader = () => {
    const { user, logout } = useAuth();

    return (
        <header className="w-full flex justify-between items-center bg-secondary border-b border-border p-4">
            <h1 className="text-xl font-bold text-primary">Dashboard</h1>
            <div className="flex items-center gap-4">
                <span className="text-muted-foreground hidden sm:inline">{user?.name || "User"}</span>
                <button
                    onClick={logout}
                    className="px-3 py-1 rounded bg-primary text-primary-foreground hover:bg-muted transition text-sm"
                >
                    Logout
                </button>
            </div>
        </header>
    );
};

export default DashboardHeader;