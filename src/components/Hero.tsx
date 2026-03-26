import { Phone, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Jūsų Servisas ratų servisas - profesionali dirbtuvė"
          width="1600"
          height="900"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Profesionalus ratų servisas{" "}
            <span className="text-gradient">Vilniuje</span>
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Ratų montavimas, padangų remontas, ratlankių lyginimas ir kondicionierių pildymas. 
            Dirbame kasdien nuo 9:00 iki 20:00.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+37067841599"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-heading font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              <Phone className="h-5 w-5" />
              Skambinti dabar
            </a>
            <a
              href="#paslaugos"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg font-heading font-semibold text-lg hover:bg-primary-foreground/10 transition-colors"
            >
              Mūsų paslaugos
            </a>
          </div>
        </div>
      </div>

      <a
        href="#paslaugos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 animate-bounce"
        aria-label="Slinkti žemyn"
      >
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>
  );
};

export default Hero;
