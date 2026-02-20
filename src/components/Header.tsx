import { Phone, Clock, MapPin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Okra1 logotipas" className="h-10 w-10 rounded-lg" />
          <span className="font-heading text-2xl font-bold text-primary">
            Okra<span className="text-accent">1</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Apie mus
          </Link>
          <Link to="/paslaugos" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Paslaugos
          </Link>
          <Link to="/#kontaktai" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Kontaktai
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>Kasdien 9:00–20:00</span>
          </div>
          <a
            href="tel:+37067841599"
            className="flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">+370 678 41599</span>
            <span className="sm:hidden">Skambinti</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
