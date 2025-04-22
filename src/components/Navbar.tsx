
import { Link, useLocation } from "react-router-dom";
import { Home, Search, LogIn, Film } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  {
    to: "/",
    label: "Home",
    icon: Home,
  },
  {
    to: "/movies",
    label: "Movies",
    icon: Film,
  },
  {
    to: "/login",
    label: "Login",
    icon: LogIn,
  },
];

export default function Navbar() {
  const { pathname } = useLocation();
  return (
    <nav className="bg-white/90 sticky top-0 z-40 w-full shadow-sm h-16 flex items-center px-4 md:px-10 animate-fade-in">
      <div className="flex w-full max-w-7xl mx-auto items-center justify-between">
        <div className="flex gap-2 items-center text-xl font-extrabold text-[#9b87f5]">
          <Film className="w-7 h-7" />
          <Link to="/" className="text-[#1A1F2C] text-2xl font-bold hover:text-[#9b87f5] transition-colors">
            CineVerse Finder
          </Link>
        </div>
        <div className="flex gap-2">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center gap-1 px-4 py-2 rounded-md font-medium text-base transition-colors
                ${pathname === link.to ? "bg-[#9b87f5] text-white" : "text-[#221F26] hover:bg-[#ede6fc]"}
              `}
            >
              <link.icon className="w-5 h-5" />
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
