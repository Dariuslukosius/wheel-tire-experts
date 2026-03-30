import { Disc3, Wrench, CircleDot, Snowflake, LucideIcon } from "lucide-react";
import heroPadanguMontavimas from "@/assets/hero-padangu-montavimas.jpg";
import heroPadanguRemontas from "@/assets/hero-padangu-remontas.jpg";
import heroRatlankiuLyginimas from "@/assets/hero-ratlankiu-lyginimas.jpg";
import heroKondicionieriau from "@/assets/hero-kondicionieriaus-pildymas.jpg";

export interface PriceItem {
  service: string;
  price: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ServiceData {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  fullDescription: string[];
  benefits: string[];
  processSteps?: string[];
  pricing?: string;
  priceList?: PriceItem[];
  pricingNote?: string;
  faq?: FAQ[];
  metaTitle: string;
  metaDescription: string;
}

export const services: ServiceData[] = [
  {
    slug: "padangu-montavimas",
    icon: Disc3,
    heroImage: heroPadanguMontavimas,
    title: "Padangų montavimas",
    shortDescription:
      "Greitas padangų montavimas, keitimas ir ratų balansavimas Vilniuje. 8 metų patirtis – kokybė, kuria galite pasitikėti.",
    heroTitle: "Padangų montavimas",
    heroSubtitle: "Greitas padangų montavimas, keitimas | Ratų balansavimas",
    fullDescription: [
      "Atliekame profesionalų ratų montavimą ir padangų montavimą Vilniuje jau daugiau nei 8 metus. Per šį laiką aptarnavome šimtus klientų ir sukaupėme patirtį, leidžiančią darbus atlikti greitai, tiksliai ir saugiai.",
      "Dirbame su modernia profesionalia įranga, kuri užtikrina: tikslų padangų montavimą, precizišką ratų balansavimą, minimalią padangos ir ratlankio pažeidimo riziką bei ilgesnį padangų tarnavimo laiką.",
      "Pagal Lietuvos reikalavimus padangos turi būti keičiamos sezoniškai – du kartus per metus. Tačiau svarbu ne tik pakeisti padangas, bet ir atlikti profesionalų ratų balansavimą, kuris užtikrina saugų bei komfortišką važiavimą.",
      "Po atlikto ratų montavimo: automobilis važiuoja stabiliai, nejaučiama vairo vibracija, padangos dėvisi tolygiai ir apsaugoma važiuoklė.",
    ],
    benefits: [
      "Tikslus padangų montavimas modernia įranga",
      "Preciziškas ratų balansavimas",
      "Minimali padangos ir ratlankio pažeidimo rizika",
      "Ilgesnis padangų tarnavimo laikas",
      "8 metų patirtis – kokybė, kuria galite pasitikėti",
      "Dirbame su skardiniais ir lietais ratlankiais (R13–R22)",
      "Garantija visiems atliktiems darbams",
    ],
    processSteps: [
      "Padangų nuėmimas ir išmontavimas nuo ratlankio",
      "Naujų arba sezoninių padangų montavimas ant ratlankio",
      "Profesionalus ratų balansavimas",
      "Ratų uždėjimas ir tvirtinimas ant automobilio",
      "Galutinė patikra ir slėgio reguliavimas",
    ],
    priceList: [
      { service: "Skardinis ratlankis (R13–R16) – montavimas", price: "2 €" },
      { service: "Skardinis ratlankis (R13–R16) – balansavimas", price: "3 €" },
      { service: "Skardinis ratlankis (R13–R16) – pakeitimas", price: "5 €" },
      { service: "Lietas ratlankis (R13–R16) – montavimas", price: "2 €" },
      { service: "Lietas ratlankis (R13–R16) – balansavimas", price: "4 €" },
      { service: "Lietas ratlankis (R13–R16) – pakeitimas", price: "5 €" },
      { service: "Lietas ratlankis (R17–R18) – montavimas", price: "2,5 €" },
      { service: "Lietas ratlankis (R17–R18) – balansavimas", price: "5 €" },
      { service: "Lietas ratlankis (R17–R18) – pakeitimas", price: "5 €" },
      { service: "Lietas ratlankis (R19–R20) – montavimas", price: "5 €" },
      { service: "Lietas ratlankis (R19–R20) – balansavimas", price: "5 €" },
      { service: "Lietas ratlankis (R19–R20) – pakeitimas", price: "5 €" },
      { service: "Lietas ratlankis (R21–R22) – montavimas", price: "5,5 €" },
      { service: "Lietas ratlankis (R21–R22) – balansavimas", price: "6 €" },
      { service: "Lietas ratlankis (R21–R22) – pakeitimas", price: "6 €" },
    ],
    pricingNote: "Mikroautobusų ratų montavimas už 4 vnt. – 65 €.",
    faq: [
      {
        question: "Kodėl svarbu profesionaliai montuoti ratus?",
        answer: "Ratai – viena svarbiausių automobilio dalių. Nuo jų tiesiogiai priklauso stabdymo efektyvumas, automobilio stabilumas, valdymo tikslumas ir keleivių saugumas. Jeigu padangos protektorius susidėvėjęs, diskai deformuoti ar ratai netinkamai subalansuoti – pablogėja sukibimas su kelio danga, pailgėja stabdymo kelias ir greičiau dėvisi važiuoklė.",
      },
      {
        question: "Kokias paslaugas teikiate?",
        answer: "Teikiame padangų nuėmimą, montavimą, išmontavimą, ratų uždėjimą, ratų balansavimą ir padangų remontą. Dirbame su skardiniais ir lietais ratlankiais (R13–R22). Visiems atliktiems darbams suteikiame garantiją.",
      },
      {
        question: "Kada reikia keisti padangas?",
        answer: "Pagal Lietuvos kelių eismo taisykles, žieminės padangos privalomos nuo lapkričio 10 d. iki kovo 31 d., dygliuotos – nuo lapkričio 1 d. iki balandžio 10 d., vasarinės naudojamos nuo balandžio 1 d. iki lapkričio 9 d. Tačiau svarbu vertinti realias oro sąlygas – kai temperatūra nukrenta žemiau +7 °C, žieminės padangos tampa saugesniu pasirinkimu. Minimalus protektoriaus gylis žieminėms padangoms – 3 mm, vasarinėms – 1,6 mm, tačiau gamintojai rekomenduoja keisti žiemines ties 4–5 mm, vasarines – ties 2–3 mm. Padangas taip pat būtina keisti, jei jos pažeistos, deformuotos ar netolygiai nusidėvėjusios.",
      },
      {
        question: "Kada ir kodėl būtinas ratų balansavimas?",
        answer: "Tinkamai atliktas ratų balansavimas sumažina kuro sąnaudas, užtikrina tolygų padangų dėvėjimąsi, sumažina pakabos dalių apkrovą ir išlaiko automobilio stabilumą kelyje. Balansavimą rekomenduojama atlikti kiekvieną kartą keičiant padangas – nesvarbu, ar naujos, ar naudotos. Taip pat reikalingas, jei jaučiama vibracija didesniu greičiu, automobilis traukia į vieną pusę, padangos dėvisi netolygiai arba įvažiavote į duobę ar kliudėte bordiūrą.",
      },
    ],
    metaTitle: "Padangų montavimas Vilniuje | Jūsų Servisas – nuo 2€",
    metaDescription:
      "Greitas padangų montavimas ir ratų balansavimas Vilniuje. 8 metų patirtis, moderni įranga, nuo 2€. Jūsų Servisas – skambinkite +37067841599.",
  },
  {
    slug: "padangu-remontas",
    icon: Wrench,
    heroImage: heroPadanguRemontas,
    title: "Padangų remontas",
    shortDescription:
      "Padangų pramušimų ir įpjovimų remontas profesionaliomis priemonėmis. Taisome lengvųjų automobilių padangas.",
    heroTitle: "Padangų remontas",
    heroSubtitle: "Kokybiškas padangų remontas Vilniuje",
    fullDescription: [
      "Padangos pramušimas ar įpjovimas – dažna problema kelyje. Jūsų Servisas komanda greitai ir profesionaliai sutaisys jūsų padangą, kad galėtumėte saugiai tęsti kelionę.",
      "Naudojame tik aukščiausios kokybės remonto medžiagas ir profesionalias priemones. Mūsų specialistai turi ilgametę patirtį ir geba sutaisyti net sudėtingiausius pažeidimus.",
      "Remontuojame lengvųjų automobilių padangas. Kiekviena sutaisyta padanga yra kruopščiai patikrinama, kad užtikrintume jūsų saugumą kelyje.",
    ],
    benefits: [
      "Greitas remontas – dažniausiai per 15–20 min.",
      "Aukštos kokybės remonto medžiagos",
      "Taisome pramušimus, įpjovas ir šonines deformacijas",
      "Lengvieji automobiliai",
      "Saugumo patikra po kiekvieno remonto",
      "Garantija atliktiems darbams",
    ],
    processSteps: [
      "Padangos hermetizavimas: padanga nuimama nuo ratlankio, pažeidimas užsandarinamas specialiu lopo metodu iš vidinės pusės – patikimiausias pradūrimo taisymo būdas",
      "Padangos vulkanizavimas: naudojama speciali \"žalia\" guma, kuri vulkanizavimo metu susijungia su padanga, pašalindama pažeidimą – lankstus sprendimas sudėtingesniems defektams",
      "Ventilio keitimas: jei padanga leidžia orą dėl nesandaraus ventilio, senas ventilis pakeičiamas nauju",
      "Rato remontas: atliekamas pagal pažeidimo tipą, naudojant specialias technologijas, užtikrinant ratų balansavimą ir saugų automobilio eksploatavimą",
    ],
    priceList: [
      { service: "Padangos montavimas ir rato balansavimas", price: "nuo 15 €/vnt." },
      { service: "Slėgio daviklio keitimas", price: "10 €/vnt.*" },
      { service: "Padangos remontas", price: "nuo 12 €/vnt." },
      { service: "Rato hermetizavimas", price: "15 €/vnt.*" },
    ],
    pricingNote: "*Paslaugos kaina nurodyta be padangos permontavimo paslaugos.",
    faq: [
      {
        question: "Kiek kainuoja padangų remontas?",
        answer: "Padangų remonto kaina priklauso nuo pažeidimo ir naudojamos technologijos. Atvykite į mūsų autoservisą – meistrai apžiūrės padangą ir pasiūlys optimalų remonto sprendimą.",
      },
      {
        question: "Kokia yra padangų remonto trukmė?",
        answer: "Trukmė priklauso nuo automobilio modelio ir reikalingų darbų apimties. Norėdami sužinoti preliminarią trukmę, susisiekite su mūsų specialistais.",
      },
    ],
    metaTitle: "Padangų remontas Vilniuje | Jūsų Servisas – nuo 12€",
    metaDescription:
      "Profesionalus padangų remontas Vilniuje – pramušimų, įpjovimų taisymas, hermetizavimas, vulkanizavimas. Nuo 12€. Jūsų Servisas – skambinkite +37067841599.",
  },
  {
    slug: "ratlankiu-lyginimas",
    icon: CircleDot,
    heroImage: heroRatlankiuLyginimas,
    title: "Ratlankių lyginimas",
    shortDescription:
      "Ar ratlankis sulinko? Profesionalus ratlankių lyginimas, atstatant originalią formą ir užtikrinant optimalų ratų balansą. Nuo 20 €/vnt.",
    heroTitle: "Ratlankių lyginimas Vilniuje",
    heroSubtitle: "Ar ratlankis sulinko? Mes galime padėti!",
    fullDescription: [
      "Kartais netikėtas susidūrimas su duobe ar kliūtimi kelyje gali sugadinti Jūsų automobilio ratlankį. Nesutvarkytas ratlankis ne tik sumažina komfortą, bet ir kelia pavojų Jūsų saugumui bei gali pakenkti pakabai.",
      "Jūsų Servisas siūlo profesionalų ratlankių lyginimą, atstatant originalią ratlankio formą ir užtikrinant optimalų ratų balansą.",
      "Lietų ratlankių keitimas naujais dažnai būna brangesnis, todėl lyginimas – kur kas ekonomiškesnis pasirinkimas.",
    ],
    benefits: [
      "Tikslus ratlankio formos atstatymas",
      "Moderni įranga ir saugūs, patikimi procesai",
      "Profesionalūs ir patyrę meistrai",
      "Užtikrinamas teisingas ratų balansas",
      "Ilgesnis padangų tarnavimo laikas",
      "Mažesnė pakabos remonto rizika",
      "Pašalinama vibracija dėl deformuotų ratlankių",
      "Komfortiškesnis ir saugesnis vairavimas",
    ],
    processSteps: [
      "Meistras nuima padangą nuo ratlankio",
      "Ratlankis pašildomas, kad metalas taptų lankstesnis",
      "Naudojant hidraulines ir mechanines tiesinimo stakles, ratlankis atstatomas į pradinę formą",
      "Matavimo prietaisais patikrinamas gamyklinis ratlankio tikslumas",
      "Po procedūros ratlankis vėl paruošiamas padangos montavimui – jokių oro nuostolių ir vibracijų",
    ],
    pricing: "Ratlankio lyginimas – nuo 20 €/vnt. Tiksli kaina priklauso nuo ratlankio pažeidimo tipo ir dydžio.",
    faq: [
      {
        question: "Kokia yra ratlankių lyginimo kaina?",
        answer: "Kaina priklauso nuo pažeidimo. Ne visi ratlankiai gali būti suremontuoti, todėl kviečiame kreiptis telefonu arba atvykti į Jūsų Servisas servisą.",
      },
      {
        question: "Kokia yra ratlankių lyginimo trukmė?",
        answer: "Trukmė priklauso nuo automobilio modelio ir darbų apimties. Norėdami sužinoti preliminarią trukmę, susisiekite su mūsų specialistais.",
      },
    ],
    metaTitle: "Ratlankių lyginimas Vilniuje | Jūsų Servisas – nuo 20€",
    metaDescription:
      "Profesionalus ratlankių lyginimas Vilniuje – originalios formos atstatymas, moderni įranga, nuo 20€/vnt. Jūsų Servisas – skambinkite +37067841599.",
  },
  {
    slug: "kondicionieriaus-pildymas",
    icon: Snowflake,
    heroImage: heroKondicionieriau,
    title: "Kondicionierių pildymas",
    shortDescription:
      "Automobilio kondicionavimo sistemos diagnostika ir šaldymo agento pildymas. Patikriname sistemą dėl nuotėkių, išvalome ir užpildome tinkamu freono kiekiu.",
    heroTitle: "Kondicionierių pildymas",
    heroSubtitle: "Auto kondicionieriaus diagnostika ir pildymas",
    fullDescription: [
      "Automobilio kondicionierius – svarbi komforto dalis bet kuriuo metų laiku. Jūsų Servisas atlieka pilną kondicionavimo sistemos diagnostiką ir priežiūrą.",
      "Atliekame R134a ir R1234yf freono pildymą, kruopščiai patikriname sistemos sandarumą, išsiurbiame seną freoną bei atidirbtą alyvą ir užpildome sistemą tiksliai pagal poreikį.",
      "Rekomenduojame pildyti kondicionierių kas 2 metus, net jei sistema atrodo veikianti normaliai. Reguliari priežiūra prailgina kompresoriaus tarnavimo laiką ir užtikrina efektyvų aušinimą.",
    ],
    benefits: [
      "Pildome R134a ir R1234yf freonu",
      "Atliekama sistemos sandarumo patikra",
      "Senas freonas atsiurbiamas recirkuliacijai",
      "Atidirbta alyva išsiurbiama utilizacijai",
      "Sistemos vakuumavimas ir sausinimas",
      "EU sertifikuoto freono pildymas",
      "Suteikiama 6 mėn. garantija",
    ],
    processSteps: [
      "Pildymo taškų nustatymas",
      "Pildymo įrangos adapterių pajungimas",
      "Seno freono atsiurbimas recirkuliacijai",
      "Atidirbtos alyvos išsiurbimas utilizacijai",
      "Sandarumo patikra",
      "Sistemos vakuumavimas ir sausinimas",
      "Tepalų įpylimas",
      "EU sertifikuoto freono pildymas",
    ],
    priceList: [
      { service: "R134a freonas (100 g)", price: "4 €" },
      { service: "R134a pildymo darbas", price: "25 €" },
      { service: "R1234yf freonas (100 g)", price: "8 €" },
      { service: "R1234yf pildymo darbas", price: "25 €" },
    ],
    pricingNote: "Suteikiama 6 mėn. garantija.",
    metaTitle: "Kondicionierių pildymas Vilniuje | Jūsų Servisas servisas",
    metaDescription:
      "Auto kondicionieriaus pildymas ir diagnostika Vilniuje – freono pildymas, nuotėkių paieška, antibakterinis valymas. Jūsų Servisas – skambinkite +37067841599.",
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}
