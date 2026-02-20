import { Disc3, Wrench, CircleDot, Snowflake, LucideIcon } from "lucide-react";

export interface ServiceData {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  fullDescription: string[];
  benefits: string[];
  metaTitle: string;
  metaDescription: string;
}

export const services: ServiceData[] = [
  {
    slug: "ratu-montavimas",
    icon: Disc3,
    title: "Ratų montavimas",
    shortDescription:
      "Profesionalus ratų montavimas ir demontavimas naudojant pažangią įrangą. Atliekame sezoninį padangų keitimą, balansavimą ir ratų geometrijos reguliavimą.",
    heroTitle: "Ratų montavimas",
    heroSubtitle: "Greitas ir profesionalus ratų montavimas Vilniuje",
    fullDescription: [
      "Okra1 siūlo profesionalų ratų montavimo servisą Vilniuje, naudojant naujausią ir moderniausią įrangą. Mūsų patyrę specialistai atlieka visus ratų montavimo darbus greitai ir kokybiškai.",
      "Atliekame sezoninį padangų keitimą – tiek žieminių ant vasarinių, tiek atvirkščiai. Kiekvienas ratas yra kruopščiai subalansuojamas, kad užtikrintume sklandų ir saugų važiavimą.",
      "Taip pat atliekame ratų geometrijos reguliavimą, kuris padeda prailginti padangų tarnavimo laiką ir sumažina degalų sąnaudas. Mūsų įranga leidžia tiksliai nustatyti ir sureguliuoti visus geometrijos parametrus.",
    ],
    benefits: [
      "Modernia įranga – tikslus ir greitas montavimas",
      "Sezoninis padangų keitimas per 20–30 min.",
      "Profesionalus ratų balansavimas",
      "Ratų geometrijos reguliavimas",
      "Dirbame su visų markių automobiliais",
      "Prieinamos kainos ir greitas aptarnavimas",
    ],
    metaTitle: "Ratų montavimas Vilniuje | Okra1 servisas",
    metaDescription:
      "Profesionalus ratų montavimas Vilniuje – sezoninis keitimas, balansavimas, geometrijos reguliavimas. Okra1 – greitai ir kokybiškai. Skambinkite +37067841599.",
  },
  {
    slug: "padangu-remontas",
    icon: Wrench,
    title: "Padangų remontas",
    shortDescription:
      "Padangų pramušimų ir įpjovimų remontas profesionaliomis priemonėmis. Taisome tiek lengvųjų, tiek visureigių automobilių padangas.",
    heroTitle: "Padangų remontas",
    heroSubtitle: "Kokybiškas padangų remontas Vilniuje",
    fullDescription: [
      "Padangos pramušimas ar įpjovimas – dažna problema kelyje. Okra1 komanda greitai ir profesionaliai sutaisys jūsų padangą, kad galėtumėte saugiai tęsti kelionę.",
      "Naudojame tik aukščiausios kokybės remonto medžiagas ir profesionalias priemones. Mūsų specialistai turi ilgametę patirtį ir geba sutaisyti net sudėtingiausius pažeidimus.",
      "Remontuojame tiek lengvųjų automobilių, tiek visureigių ir komercinių transporto priemonių padangas. Kiekviena sutaisyta padanga yra kruopščiai patikrinama, kad užtikrintume jūsų saugumą kelyje.",
    ],
    benefits: [
      "Greitas remontas – dažniausiai per 15–20 min.",
      "Aukštos kokybės remonto medžiagos",
      "Taisome pramušimus, įpjovas ir šonines deformacijas",
      "Lengvieji, visureigiai ir komerciniai automobiliai",
      "Saugumo patikra po kiekvieno remonto",
      "Garantija atliktiems darbams",
    ],
    metaTitle: "Padangų remontas Vilniuje | Okra1 servisas",
    metaDescription:
      "Profesionalus padangų remontas Vilniuje – pramušimų, įpjovimų taisymas. Greitas aptarnavimas, aukšta kokybė. Okra1 – skambinkite +37067841599.",
  },
  {
    slug: "ratlankiu-lyginimas",
    icon: CircleDot,
    title: "Ratlankių lyginimas",
    shortDescription:
      "Deformuotų ir pažeistų ratlankių lyginimas bei restauravimas. Atkuriame pradinę ratlankio formą naudodami precizinę lyginimo įrangą.",
    heroTitle: "Ratlankių lyginimas",
    heroSubtitle: "Precizinis ratlankių lyginimas ir restauravimas",
    fullDescription: [
      "Duobėtos Lietuvos keliai dažnai pažeidžia ratlankius. Okra1 turi profesionalią ratlankių lyginimo įrangą, kuri leidžia atkurti pradinę ratlankio formą be jokių pėdsakų.",
      "Mūsų precizinė lyginimo technologija tinka tiek plieniniams, tiek lengvo lydinio ratlankiams. Procesas yra kruopštus ir kontroliuojamas – kiekvienas ratlankis yra tikrinamas prieš ir po lyginimo.",
      "Ratlankio lyginimas yra ekonomiškas sprendimas, palyginus su nauju ratlankiu. Be to, tai padeda išvengti padangos slėgio praradimo ir vibracijos važiuojant.",
    ],
    benefits: [
      "Plieninių ir lengvo lydinio ratlankių lyginimas",
      "Precizinė, kompiuteriu valdoma įranga",
      "Atkuriama pradinė ratlankio forma",
      "Ekonomiška alternatyva naujam ratlankiui",
      "Pašalinamos vibracijos ir oro nuotėkiai",
      "Vizualinė ir techninė kokybės kontrolė",
    ],
    metaTitle: "Ratlankių lyginimas Vilniuje | Okra1 servisas",
    metaDescription:
      "Ratlankių lyginimas ir restauravimas Vilniuje – precizinė įranga, plieniniai ir lengvo lydinio ratlankiai. Okra1 – skambinkite +37067841599.",
  },
  {
    slug: "kondicionieriaus-pildymas",
    icon: Snowflake,
    title: "Kondicionierių pildymas",
    shortDescription:
      "Automobilio kondicionavimo sistemos diagnostika ir šaldymo agento pildymas. Patikriname sistemą dėl nuotėkių, išvalome ir užpildome tinkamu freono kiekiu.",
    heroTitle: "Kondicionierių pildymas",
    heroSubtitle: "Auto kondicionieriaus diagnostika ir pildymas",
    fullDescription: [
      "Automobilio kondicionierius – svarbi komforto dalis bet kuriuo metų laiku. Okra1 atlieka pilną kondicionavimo sistemos diagnostiką ir priežiūrą.",
      "Mūsų paslaugos apima šaldymo agento lygio patikrinimą, sistemos nuotėkių diagnostiką, senosios medžiagos išsiurbimą ir naujo freono užpildymą tiksliai pagal gamintojo specifikacijas.",
      "Rekomenduojame pildyti kondicionierių kas 2 metus, net jei sistema atrodo veikianti normaliai. Reguliari priežiūra prailgina kompresoriaus tarnavimo laiką ir užtikrina efektyvų aušinimą.",
    ],
    benefits: [
      "Pilna sistemos diagnostika ir nuotėkių paieška",
      "Senojo šaldymo agento išsiurbimas",
      "Užpildymas pagal gamintojo specifikacijas",
      "Antibakterinis sistemos valymas",
      "Tinka R134a ir R1234yf šaldymo agentams",
      "Rekomenduojama kas 2 metus",
    ],
    metaTitle: "Kondicionierių pildymas Vilniuje | Okra1 servisas",
    metaDescription:
      "Auto kondicionieriaus pildymas ir diagnostika Vilniuje – freono pildymas, nuotėkių paieška, antibakterinis valymas. Okra1 – skambinkite +37067841599.",
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}
