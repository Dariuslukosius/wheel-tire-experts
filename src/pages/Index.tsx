import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Jūsų Servisas",
  description:
    "Profesionalus ratų servisas Vilniuje – ratų montavimas, padangų remontas, ratlankių lyginimas, kondicionierių pildymas.",
  telephone: "+37067841599",
  openingHours: "Mo-Su 09:00-20:00",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vilnius",
    streetAddress: "Žirmūnų g. 54A",
    postalCode: "09100",
    addressCountry: "LT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "54.7001",
    longitude: "25.2846",
  },
  url: "https://jususervisas.lt",
  priceRange: "€€",
  areaServed: "Vilnius",
  serviceType: [
    "Ratų montavimas",
    "Padangų remontas",
    "Ratlankių lyginimas",
    "Kondicionierių pildymas",
  ],
};

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Jūsų Servisas – Ratų servisas Vilniuje | Montavimas, Remontas, Lyginimas</title>
        <meta
          name="description"
          content="Jūsų Servisas – profesionalus ratų servisas Vilniuje. Ratų montavimas, padangų remontas, ratlankių lyginimas ir kondicionierių pildymas. Kasdien 9-20h. Skambinkite +37067841599."
        />
        <meta
          name="keywords"
          content="ratų servisas, ratų montavimas Vilnius, padangų remontas, ratlankių lyginimas, kondicionierius, Jūsų Servisas, padangų servisas Vilniuje"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Jūsų Servisas – Ratų servisas Vilniuje" />
        <meta
          property="og:description"
          content="Profesionalus ratų montavimas, padangų remontas, ratlankių lyginimas ir kondicionierių pildymas Vilniuje."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="lt_LT" />
        <link rel="canonical" href="https://jususervisas.lt" />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:image" content="/og-image.png" />
        <html lang="lt" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Header />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
