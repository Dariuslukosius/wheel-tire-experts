import { Phone, Clock, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="kontaktai" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-widest">
            Susisiekite
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3">
            Kontaktai
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Info */}
          <div className="space-y-8">
            <div id="apie" className="bg-muted rounded-xl p-8">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Apie Okra1
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Okra1 – tai profesionalus ratų servisas Vilniuje, teikiantis aukštos kokybės 
                automobilių ratų ir klimato sistemos paslaugas. Mūsų patyrusi komanda naudoja 
                modernią įrangą, kad kiekvienas klientas gautų geriausią rezultatą. Dirbame 
                greitai ir efektyviai, nes vertiname jūsų laiką.
              </p>
            </div>

            <div className="space-y-5">
              <a
                href="tel:+37067841599"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telefonas</p>
                  <p className="font-heading font-semibold text-foreground text-lg">
                    +370 678 41599
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Darbo laikas</p>
                  <p className="font-heading font-semibold text-foreground text-lg">
                    Kasdien 9:00 – 20:00
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Adresas</p>
                  <p className="font-heading font-semibold text-foreground text-lg">
                    Vilnius, Lietuva
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden border border-border shadow-sm min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9222.165941813526!2d25.284602981987515!3d54.700095911581585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd96bb29b1a6d7%3A0x99d45b9f8a7763c4!2sOkra1!5e0!3m2!1slt!2slt!4v1771493396569!5m2!1slt!2slt"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Okra1 vieta žemėlapyje"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
