import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import API from "../api/axios"; // your axios instance

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // ✅ Fetch logged-in user
    const fetchUser = useCallback(async () => {
        try {
            const { data } = await API.get("/auth/me");
            setUser(data.user);
        } catch (error) {
            setUser(null);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchUser();
    }, [fetchUser]);

    // ✅ Login
    const login = async (credentials) => {
        try {
            const { data } = await API.post("/auth/login", credentials);
            localStorage.setItem("token", data.token);
            setUser(data.user);
            toast.success("Logged in successfully 🎉");
            navigate("/dashboard");
        } catch (error) {
            toast.error(error.response?.data?.message || "Login failed");
        }
    };

    // ✅ Register
    const register = async (newUser) => {
        try {
            const { data } = await API.post("/auth/register", newUser);
            localStorage.setItem("token", data.token);
            setUser(data.user);
            toast.success("Account created 🎉");
            navigate("/dashboard");
        } catch (error) {
            toast.error(error.response?.data?.message || "Registration failed");
        }
    };

    // ✅ Logout
    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
        toast.success("Logged out 👋");
        navigate("/login");
    };

    return {
        user,
        loading,
        login,
        register,
        logout,
        fetchUser,
    };
};

export default useAuth;