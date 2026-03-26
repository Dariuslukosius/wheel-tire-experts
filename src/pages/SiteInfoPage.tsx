import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SiteInfoPage = () => {
  return (
    <>
      <Helmet>
        <title>Svetainės informacija | Jūsų Servisas</title>
        <meta name="description" content="Informacija apie Jūsų Servisas svetainės kūrimą, SEO optimizavimą ir techninę struktūrą." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://jususervisas.lt/svetaines-informacija" />
        <html lang="lt" />
      </Helmet>

      <Header />

      <main className="pt-20">
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors mb-6 text-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              Grįžti į pagrindinį
            </Link>
            <h1 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground">
              Svetainės informacija
            </h1>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Ši interneto svetainė sukurta autoservisui Jūsų Servisas, siekiant užtikrinti aiškų paslaugų pristatymą ir gerą matomumą „Google" paieškos sistemoje pagal autoserviso paslaugas Vilniuje. Kuriant svetainę buvo įgyvendinti techninio SEO, turinio struktūrizavimo ir greičio optimizavimo sprendimai.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Svetainė pritaikyta visiems įrenginiams, optimizuota greitam įkėlimui bei tinkamai indeksacijai paieškos sistemose. Didelis dėmesys skirtas vietiniam SEO, raktinių žodžių strategijai ir konversijų optimizavimui.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                SEO strategiją ir techninį optimizavimą įgyvendino{" "}
                <a href="https://lamalocal.lt/" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold hover:underline">LamaLocal</a> – SEO agentūra Lietuvoje, teikianti vietinio ir nacionalinio verslo matomumo didinimo sprendimus.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default SiteInfoPage;
