import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

const Services = () => {
  return (
    <section id="paslaugos" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-widest">
            Ką mes siūlome
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3">
            Mūsų paslaugos
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Teikiame platų automobilių ratų ir klimato sistemos paslaugų spektrą. 
            Dirbame greitai, kokybiškai ir už prieinamą kainą.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                to={`/paslaugos/${service.slug}`}
                className="group bg-card rounded-xl overflow-hidden border border-border hover:border-accent/40 hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    width="1600"
                    height="900"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-accent/90 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {service.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-1 text-accent font-medium text-sm mt-4 group-hover:gap-2 transition-all">
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
  );
};

export default Services;
