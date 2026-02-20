import { useParams, Navigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, ArrowLeft, CheckCircle2, Euro, HelpCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getServiceBySlug, services } from "@/data/services";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/" replace />;
  }

  const otherServices = services.filter((s) => s.slug !== slug);
  const Icon = service.icon;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "AutoRepair",
      name: "Jūsų Servisas",
      telephone: "+37067841599",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Vilnius",
        addressCountry: "LT",
      },
    },
    areaServed: "Vilnius",
  };

  const faqJsonLd = service.faq && service.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  } : null;

  return (
    <>
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
        <meta property="og:title" content={service.metaTitle} />
        <meta property="og:description" content={service.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="lt_LT" />
        <link rel="canonical" href={`https://okra1.lt/paslaugos/${service.slug}`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        {faqJsonLd && (
          <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        )}
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-16 sm:py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={service.heroImage}
              alt={service.heroTitle}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/80" />
          </div>
          <div className="relative z-10 container mx-auto px-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors mb-8 text-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              Grįžti į pagrindinį
            </Link>
            <div className="flex items-center gap-5 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center">
                <Icon className="h-8 w-8 text-accent" />
              </div>
              <div>
                <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground">
                  {service.heroTitle}
                </h1>
                <p className="text-primary-foreground/70 text-lg mt-1">
                  {service.heroSubtitle}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {/* Main content */}
              <div className="lg:col-span-2 space-y-6">
                {service.fullDescription.map((paragraph, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed text-lg">
                    {paragraph}
                  </p>
                ))}

                <div className="mt-10 bg-card rounded-xl border border-border p-8">
                  <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">
                    Privalumai
                  </h2>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Process Steps */}
                {service.processSteps && service.processSteps.length > 0 && (
                  <div className="mt-8 bg-card rounded-xl border border-border p-8">
                    <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">
                      Kaip atliekama paslauga
                    </h2>
                    <ol className="space-y-4">
                      {service.processSteps.map((step, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center font-heading font-bold text-accent text-sm">
                            {i + 1}
                          </span>
                          <span className="text-foreground pt-1">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {/* Pricing */}
                {(service.pricing || service.priceList) && (
                  <div className="mt-8 bg-accent/5 rounded-xl border border-accent/20 p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Euro className="h-6 w-6 text-accent" />
                      <h2 className="font-heading text-2xl font-semibold text-foreground">
                        Paslaugų kainos
                      </h2>
                    </div>
                    {service.pricing && (
                      <p className="text-foreground text-lg">{service.pricing}</p>
                    )}
                    {service.priceList && (
                      <div className="space-y-3">
                        {service.priceList.map((item, i) => (
                          <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                            <span className="text-foreground">{item.service}</span>
                            <span className="font-heading font-semibold text-accent whitespace-nowrap ml-4">{item.price}</span>
                          </div>
                        ))}
                        {service.pricingNote && (
                          <p className="text-muted-foreground text-sm mt-3">{service.pricingNote}</p>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* FAQ */}
                {service.faq && service.faq.length > 0 && (
                  <div className="mt-8">
                    <div className="flex items-center gap-3 mb-6">
                      <HelpCircle className="h-6 w-6 text-accent" />
                      <h2 className="font-heading text-2xl font-semibold text-foreground">
                        Dažnai užduodami klausimai
                      </h2>
                    </div>
                    <div className="space-y-4">
                      {service.faq.map((item, i) => (
                        <div key={i} className="bg-card rounded-xl border border-border p-6">
                          <h3 className="font-heading font-semibold text-foreground mb-2">
                            {item.question}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="bg-accent/10 rounded-xl p-8 mt-8">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    Reikia {service.title.toLowerCase().includes("kondicion") ? "kondicionieriaus pildymo" : service.title.toLowerCase()}?
                  </h3>
                  <p className="text-muted-foreground mb-5">
                    Skambinkite mums ir atvykite be eilės. Dirbame kasdien nuo 9:00 iki 20:00.
                  </p>
                  <a
                    href="tel:+37067841599"
                    className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-heading font-semibold hover:opacity-90 transition-opacity"
                  >
                    <Phone className="h-5 w-5" />
                    +370 678 41599
                  </a>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="space-y-6">
                <div className="bg-card rounded-xl border border-border p-6">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
                    Kitos paslaugos
                  </h3>
                  <div className="space-y-3">
                    {otherServices.map((s) => {
                      const OtherIcon = s.icon;
                      return (
                        <Link
                          key={s.slug}
                          to={`/paslaugos/${s.slug}`}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                            <OtherIcon className="h-5 w-5 text-accent" />
                          </div>
                          <span className="font-medium text-foreground text-sm">
                            {s.title}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <div className="bg-primary rounded-xl p-6">
                  <h3 className="font-heading text-lg font-semibold text-primary-foreground mb-2">
                    Darbo laikas
                  </h3>
                  <p className="text-primary-foreground/70 text-sm mb-4">
                    Kasdien 9:00 – 20:00
                  </p>
                  <a
                    href="tel:+37067841599"
                    className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity w-full justify-center"
                  >
                    <Phone className="h-4 w-4" />
                    Skambinti
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Recommended services */}
        <section className="py-14 sm:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground text-center mb-10">
              Kitos mūsų paslaugos
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {otherServices.map((s) => {
                const OtherIcon = s.icon;
                return (
                  <Link
                    key={s.slug}
                    to={`/paslaugos/${s.slug}`}
                    className="group bg-card rounded-xl overflow-hidden border border-border hover:border-accent/40 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="relative h-36 overflow-hidden">
                      <img
                        src={s.heroImage}
                        alt={s.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                      <div className="absolute top-3 left-3 w-10 h-10 rounded-lg bg-accent/90 flex items-center justify-center">
                        <OtherIcon className="h-5 w-5 text-accent-foreground" />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-heading text-base font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                        {s.title}
                      </h3>
                      <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                        {s.shortDescription}
                      </p>
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

export default ServicePage;
