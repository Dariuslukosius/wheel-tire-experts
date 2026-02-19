import { Disc3, Wrench, CircleDot, Snowflake } from "lucide-react";

const services = [
  {
    icon: Disc3,
    title: "Ratų montavimas",
    description:
      "Profesionalus ratų montavimas ir demontavimas naudojant pažangią įrangą. Atliekame sezoninį padangų keitimą, balansavimą ir ratų geometrijos reguliavimą. Greitai ir kokybiškai – jūsų automobilis bus paruoštas bet kokioms kelio sąlygoms.",
  },
  {
    icon: Wrench,
    title: "Padangų remontas",
    description:
      "Padangų pramušimų ir įpjovimų remontas profesionaliomis priemonėmis. Taisome tiek lengvųjų, tiek visureigių automobilių padangas. Naudojame tik aukštos kokybės medžiagas, kad padanga tarnautų ilgai ir saugiai.",
  },
  {
    icon: CircleDot,
    title: "Ratlankių lyginimas",
    description:
      "Deformuotų ir pažeistų ratlankių lyginimas bei restauravimas. Atkuriame pradinę ratlankio formą naudodami precizinę lyginimo įrangą. Šis procesas prailgina ratlankio tarnavimo laiką ir užtikrina sklandų važiavimą.",
  },
  {
    icon: Snowflake,
    title: "Kondicionierių pildymas",
    description:
      "Automobilio kondicionavimo sistemos diagnostika ir šaldymo agento pildymas. Patikriname sistemą dėl nuotėkių, išvalome ir užpildome tinkamu freono kiekiu. Mėgaukitės vėsiu oru salone bet kuriuo metų laiku.",
  },
];

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
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group bg-card rounded-xl p-8 border border-border hover:border-accent/40 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <service.icon className="h-7 w-7 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
