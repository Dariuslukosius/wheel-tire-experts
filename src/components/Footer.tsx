import { Phone, Clock, MapPin, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { services } from "@/data/services";

const Footer = () => {
  return (
    <footer className="bg-primary pt-14 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Okra1" className="h-9 w-9 rounded-md" />
              <span className="font-heading text-xl font-bold text-primary-foreground">
                Okra<span className="text-accent">1</span>
              </span>
            </Link>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Profesionalus ratų servisas Vilniuje – padangų montavimas, remontas, ratlankių lyginimas ir kondicionierių pildymas.
            </p>
            <a
              href="https://www.facebook.com/okra1servisas/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-accent transition-colors mt-4 text-sm"
            >
              <Facebook className="h-5 w-5" />
              Facebook
            </a>
          </div>

          {/* Paslaugos */}
          <div>
            <h3 className="font-heading font-semibold text-primary-foreground mb-4">
              Paslaugos
            </h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/paslaugos/${s.slug}`}
                    className="text-primary-foreground/60 hover:text-accent transition-colors text-sm"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Naudingi linkai */}
          <div>
            <h3 className="font-heading font-semibold text-primary-foreground mb-4">
              Naudingi nuorodos
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/#apie" className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">
                  Apie mus
                </a>
              </li>
              <li>
                <Link to="/paslaugos" className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">
                  Visos paslaugos
                </Link>
              </li>
              <li>
                <a href="/#kontaktai" className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">
                  Kontaktai
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/okra1servisas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/60 hover:text-accent transition-colors text-sm"
                >
                  Svetainės informacija
                </a>
              </li>
            </ul>
          </div>

          {/* Kontaktai */}
          <div>
            <h3 className="font-heading font-semibold text-primary-foreground mb-4">
              Kontaktai
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-primary-foreground/60 text-sm">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+37067841599" className="hover:text-accent transition-colors">
                  +370 678 41599
                </a>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/60 text-sm">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <span>Kasdien 9:00 – 20:00</span>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/60 text-sm">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>Žirmūnų g. 54A, Vilnius, 09100</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6">
          <p className="text-primary-foreground/40 text-sm text-center">
            © {new Date().getFullYear()} Okra1. Visos teisės saugomos.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
