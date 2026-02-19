import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Okra1" className="h-8 w-8 rounded-md" />
            <span className="font-heading text-xl font-bold text-primary-foreground">
              Okra<span className="text-accent">1</span>
            </span>
          </div>

          <p className="text-primary-foreground/60 text-sm text-center">
            © {new Date().getFullYear()} Okra1. Visos teisės saugomos. Ratų servisas Vilniuje.
          </p>

          <a
            href="tel:+37067841599"
            className="text-primary-foreground/80 hover:text-accent transition-colors font-medium text-sm"
          >
            +370 678 41599
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
