import { Phone, Clock, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "@/assets/logo.png";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const Header = () => {
  const [open, setOpen] = useState(false);

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
          <a href="#kontaktai" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Kontaktai
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>Kasdien 9:00–20:00</span>
          </div>
          <a
            href="tel:+37067841599"
            className="hidden sm:flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
          >
            <Phone className="h-4 w-4" />
            <span>+370 678 41599</span>
          </a>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors" aria-label="Meniu">
                <Menu className="h-6 w-6 text-foreground" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="sr-only">Navigacija</SheetTitle>
              <nav className="flex flex-col gap-6 mt-8">
                <Link to="/" onClick={() => setOpen(false)} className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                  Apie mus
                </Link>
                <Link to="/paslaugos" onClick={() => setOpen(false)} className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                  Paslaugos
                </Link>
                <a href="#kontaktai" onClick={() => setOpen(false)} className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                  Kontaktai
                </a>
                <hr className="border-border" />
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Kasdien 9:00–20:00</span>
                </div>
                <a
                  href="tel:+37067841599"
                  className="flex items-center gap-2 bg-accent text-accent-foreground px-4 py-3 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity justify-center"
                >
                  <Phone className="h-4 w-4" />
                  <span>+370 678 41599</span>
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
