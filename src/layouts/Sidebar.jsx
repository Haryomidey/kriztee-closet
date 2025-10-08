import { FaUsers, FaChartLine, FaDollarSign, FaClock } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
    const location = useLocation();

    const links = [
        { name: "Overview", icon: <FaChartLine />, path: "/dashboard" },
        { name: "Users", icon: <FaUsers />, path: "/dashboard/users" },
        { name: "Revenue", icon: <FaDollarSign />, path: "/dashboard/revenue" },
        { name: "Reports", icon: <FaChartLine />, path: "/dashboard/reports" },
        { name: "Settings", icon: <FaClock />, path: "/dashboard/settings" },
    ];

    return (
        <aside className="w-64 bg-secondary border-r border-border p-6 hidden md:block min-h-screen">
            <h2 className="text-2xl font-bold mb-8 text-primary">MyApp Dashboard</h2>
            <nav className="space-y-4">
                {links.map((link) => (
                    <Link
                        key={link.name}
                        to={link.path}
                        className={`flex items-center gap-3 p-2 rounded hover:bg-primary hover:text-primary-foreground transition ${
                            location.pathname === link.path ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                        }`}
                    >
                        {link.icon}
                        {link.name}
                    </Link>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;