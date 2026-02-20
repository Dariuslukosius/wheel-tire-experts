import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { services } from "@/data/services";

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Paslaugos | Jūsų Servisas – Ratų servisas Vilniuje</title>
        <meta
          name="description"
          content="Jūsų Servisas paslaugos Vilniuje: padangų montavimas, padangų remontas, ratlankių lyginimas, kondicionierių pildymas. Kasdien 9–20h."
        />
        <link rel="canonical" href="https://okra1.lt/paslaugos" />
        <html lang="lt" />
      </Helmet>

      <Header />

      <main className="pt-20">
        <section className="bg-primary py-16 sm:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Mūsų paslaugos
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              Profesionalus ratų servisas Vilniuje – pasirinkite paslaugą ir sužinokite daugiau.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.slug}
                    to={`/paslaugos/${service.slug}`}
                    className="group relative overflow-hidden rounded-2xl border border-border bg-card hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={service.heroImage}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                      <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-accent/90 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-accent-foreground" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h2 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {service.shortDescription}
                      </p>
                      <span className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                        Skaityti daugiau
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ServicesPage;
