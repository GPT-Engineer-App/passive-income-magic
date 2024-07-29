import { Home, LayoutDashboard, LogIn, UserPlus } from "lucide-react";
import Index from "./pages/Index.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Dashboard",
    to: "/dashboard",
    icon: <LayoutDashboard className="h-4 w-4" />,
    page: <Dashboard />,
  },
  {
    title: "Login",
    to: "/login",
    icon: <LogIn className="h-4 w-4" />,
    page: <Login />,
  },
  {
    title: "Register",
    to: "/register",
    icon: <UserPlus className="h-4 w-4" />,
    page: <Register />,
  },
];