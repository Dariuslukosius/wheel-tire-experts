import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Okra1",
  description:
    "Profesionalus ratų servisas Vilniuje – ratų montavimas, padangų remontas, ratlankių lyginimas, kondicionierių pildymas.",
  telephone: "+37067841599",
  openingHours: "Mo-Su 09:00-20:00",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vilnius",
    addressCountry: "LT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "54.7001",
    longitude: "25.2846",
  },
  url: "https://okra1.lt",
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
        <title>Okra1 – Ratų servisas Vilniuje | Montavimas, Remontas, Lyginimas</title>
        <meta
          name="description"
          content="Okra1 – profesionalus ratų servisas Vilniuje. Ratų montavimas, padangų remontas, ratlankių lyginimas ir kondicionierių pildymas. Kasdien 9-20h. Skambinkite +37067841599."
        />
        <meta
          name="keywords"
          content="ratų servisas, ratų montavimas Vilnius, padangų remontas, ratlankių lyginimas, kondicionierius, Okra1, padangų servisas Vilniuje"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Okra1 – Ratų servisas Vilniuje" />
        <meta
          property="og:description"
          content="Profesionalus ratų montavimas, padangų remontas, ratlankių lyginimas ir kondicionierių pildymas Vilniuje."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="lt_LT" />
        <link rel="canonical" href="https://okra1.lt" />
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
