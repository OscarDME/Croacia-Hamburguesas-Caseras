// lib/copy.js
// Jedini izvor istine za CIJELI vidljivi tekst na landing stranici.
// Svaki string koji korisnik može pročitati na ekranu MORA biti ovdje.

export const copy = {
  metadata: {
    title: "101 Domaći Burger | Digitalna Knjiga Recepata",
    description:
      "Digitalna knjiga recepata za domaće burgere. 101 jednostavan, sočan i preukusan recept za pripremu neodoljivih burgera kod kuće.",
  },

  promoBar: {
    text: "Specijalna vremenski ograničena ponuda",
    icon: "flame",
  },

  hero: {
    eyebrow: "Digitalna knjiga recepata za domaće burgere",
    headline: {
      pre: "101 domaći burger s kojim ćeš",
      accent: "oduševiti sve kod kuće",
    },
    subheadline:
      "Otkrij jednostavne, sočne i brutalno dobre recepte za neodoljive burgere bez nepotrebnog kompliciranja, bacanja love i ovisnosti o brzoj hrani.",
    paragraph:
      "Pretvori svaki obrok u poseban trenutak uz jednostavne i ukusne ideje, stvorene za guštanje s obitelji i ekipom.",
    stats: [
      { value: "101", label: "ukusna ideja" },
      { value: "Domaće", label: "s okusom pravog restorana" },
    ],
    bullets: [
      "101 različit recept",
      "Sočni i jednostavni burgeri",
      "Pristupačne i svakodnevne namirnice",
      "Opcije s junetinom, piletinom i još puno toga",
      "Idealan izbor za večere i druženja",
      "Domaći okus restoranske kvalitete",
    ],
    cta: "ŽELIM SVOJIH 101 BURGERA",
    trust: [
      { icon: "lock", text: "Trenutni pristup" },
      { icon: "mail", text: "Stiže na tvoj e-mail" },
      { icon: "card", text: "Sigurno plaćanje" },
    ],
    image: "/hero-mockup.webp",
    imageAlt: "Paket 101 Domaći Burger - Digitalna knjiga",
    badge: "101 ukusna ideja",
  },

  story: {
    eyebrow: "Dobra hrana ne mora nužno dolaziti iz dostave",
    headline: {
      pre: "Ne moraš ni izaći iz kuće da bi uživao/la u",
      accent: "stvarno savršenom burgeru",
    },
    paragraphs: [
      {
        text: "Ponekad problem nije u tome što nismo gladni… problem je što nemamo ideju kako pripremiti nešto sočno, drugačije i s onim okusom koji te tjera da tražiš još.",
        style: "default",
      },
      {
        text: "Pripremljeno kod kuće s neodoljivim okusom",
        style: "bold-accent",
      },
    ],
    painsTitle: "Kad ponestane ideja ili opcija, dogodi se sljedeće:",
    pains: [
      "Završiš tako da stalno pripremaš jedno te isto",
      "Burgeri ti ispadnu suhi ili potpuno bezukusni",
      "Ne znaš kako dobro iskombinirati umake, sireve i dodatke",
      "Naručuješ junk food, a mogao/la si napraviti top klopu doma",
      "Ostaneš bez ideja za večeru ili vikend",
    ],
    bridge:
      "Razlika je u tome što, kad imaš jasne recepte, provjerene kombinacije okusa i jednostavne korake, svaki burger postaje nešto zbilja posebno.",
    image: "/chef-hamburguesas.webp",
    imageAlt: "Domaći burger, spreman za posluživanje",
  },

  steps: {
    eyebrow: "Samo 3 koraka do kućnog gušta",
    headline: {
      pre: "Napokon jednostavan način za pripremu",
      accent: "neodoljivih domaćih burgera",
      post: "za cijelu obitelj",
    },
    subheadline:
      "Uživaj u sočnim, jednostavnim i preukusnim receptima bez izlaska iz kuće, bez kompliciranja i bez da vam stalno ista hrana dosadi.",
    paragraph:
      "Sve što trebaš je odabrati recept, ispratiti par jednostavnih koraka i uživati u klopi zbog koje će svi tražiti repete.",
    items: [
      {
        number: "01",
        title: "Odaberi burger za svaku priliku",
        body: "Od brze večere preko tjedna do opuštenog vikenda s obitelji – imat ćeš hrpu ukusnih ideja da napraviš nešto drugačije, bez puno razmišljanja.",
      },
      {
        number: "02",
        title: "Pripremi bogate i domaće recepte",
        body: "Prati jednostavne kombinacije s junetinom, piletinom, sirevima, umacima i prilozima kako bi složio/la sočne burgere s onim pravim domaćim štihom.",
      },
      {
        number: "03",
        title: "Uživaj u hrani koja okuplja ljude",
        body: "Posluži domaće, neodoljive burgere i pretvori svaki obrok u vrhunski trenutak za druženje s obitelji i prijateljima.",
      },
    ],
    cta: "ŽELIM SVOJIH 101 BURGERA",
    trust: [
      { icon: "lock", text: "Trenutni pristup" },
      { icon: "mail", text: "Stiže na tvoj e-mail" },
      { icon: "card", text: "Sigurno plaćanje" },
    ],
  },

  benefits: {
    eyebrow: "Više okusa, manje muke",
    headline: {
      pre: "Što se mijenja kada imaš",
      accent: "101 ideju",
      post: "za pripremu burgera kod kuće",
    },
    subheadline:
      "Prestani improvizirati s jednim te istim stvarima i pretvori svaki obrok u nešto domaće, fino i stvoreno za uživanje u društvu.",
    items: [
      {
        title: "Nikad ne ostaješ bez ideja",
        body: "Uvijek ćeš pri ruci imati drugačiji recept da na brzinu i bez stresa spremiš nešto ukusno.",
        icon: "sparkles",
      },
      {
        title: "Posebniji obroci",
        body: "Pretvori najobičniju večeru u pravi gastro doživljaj koji ćeš podijeliti s najdražima.",
        icon: "heart",
      },
      {
        title: "Vrhunski okus bez izlaska",
        body: "Pravi sočne, domaće burgere u kombinacijama koje imaju okus kao da su iz restorana.",
        icon: "home",
      },
      {
        title: "Manje kompliciranja",
        body: "Jednostavni recepti, dostupni sastojci i koraci koje svatko može pratiti.",
        icon: "zap",
      },
      {
        title: "Opcije za svaku priliku",
        body: "Od brzinske večere do lijenog vikenda kod kuće ili druženja s prijateljima.",
        icon: "users",
      },
      {
        title: "Kraj žudnji za brzom hranom",
        body: "Kad ti se jede nešto zbilja dobro, možeš to napraviti sam/a, bez čekanja dostave.",
        icon: "utensils",
      },
    ],
    closing: {
      pre: "S ovom knjigom, pravljenje burgera kod kuće prestaje biti dosadno i postaje najlakši način da",
      accent: "razmaziš sve oko sebe nečim stvarno finim.",
    },
  },

  features: {
    eyebrow: "Sve što ti treba da digneš burgere na novu razinu",
    headline: {
      pre: "101 domaći burger s kojim svaki obrok postaje",
      accent: "neodoljiv",
    },
    subheadline:
      "Praktična knjiga recepata za pripremu sočnih, raznovrsnih i preukusnih burgera bez stresa, s opcijama za svaki ukus, trenutak i želju.",
    items: [
      {
        emoji: "🍔",
        eyebrow: "Po tvom guštu",
        title: "Burgeri za svaku želju",
        body: "Otkrij klasične, kremaste, hrskave, ljute, bogate ili malo lakše recepte i biraj prema onome što ti se danas jede.",
      },
      {
        emoji: "👨‍🍳",
        eyebrow: "Korak po korak",
        title: "Jednostavna priprema",
        body: "Prati jasne upute za slaganje svakog burgera bez pogađanja mjera, omjera ili redoslijeda slaganja.",
      },
      {
        emoji: "🥬",
        eyebrow: "Sastojci",
        title: "Različiti dodaci i kombinacije",
        body: "Koristi junetinu, piletinu, razne sireve, slaninu, povrće, gljive, avokado, kisele krastavce i dodatke za stvaranje potpuno novih okusa.",
      },
      {
        emoji: "🔥",
        eyebrow: "Više okusa",
        title: "Umaci i posebni detalji",
        body: "Daj svojim burgerima karakter uz domaće preljeve, kremaste umake, BBQ, senf, začine i one male detalje koji čine ogromnu razliku.",
      },
      {
        emoji: "🏡",
        eyebrow: "Za ekipu",
        title: "Ideje za druženja i vikende",
        body: "Pripremi burgere stvorene za dijeljenje s obitelji, posluživanje gostima ili jednostavno za malo posebniji ručak kod kuće.",
      },
      {
        emoji: "🚚",
        eyebrow: "Bez dostave",
        title: "Vrhunska klopa bez naručivanja",
        body: "Utoli glad kod kuće s receptima koji su bogati, domaći i sto puta bolji od bilo kakvog naručenog fast fooda.",
      },
    ],
    cta: "ŽELIM SVOJIH 101 BURGERA",
    trust: [
      { icon: "lock", text: "Trenutni pristup" },
      { icon: "mail", text: "Stiže na tvoj e-mail" },
      { icon: "card", text: "Sigurno plaćanje" },
    ],
  },

  carouselSection: {
    eyebrow: "Jednostavni recepti za kućni gušt",
    headline: {
      pre: "Vrhunski domaći burgeri u",
      accent: "jednostavnim i praktičnim varijantama",
    },
    images: [
      { src: "/carousel/slide-1.webp", alt: "Sočni domaći burger poslužen na dasci" },
      { src: "/carousel/slide-2.webp", alt: "Burger sa slaninom i topljenim sirom" },
      { src: "/carousel/slide-3.webp", alt: "Raznovrsni domaći burgeri" },
      { src: "/carousel/slide-4.webp", alt: "Proces slaganja burgera" },
    ],
    chips: [
      "BRZA PRIPREMA",
      "DOSTUPNI SASTOJCI",
      "DOMAĆI OKUS",
      "IDEALNO ZA DRUŠTVO",
    ],
    forYouTitle: "„101 Domaći Burger“ je za tebe ako:",
    forYou: [
      {
        title: "Želiš skuhati nešto ukusno bez stresa:",
        body: "recepti koje je lako pratiti, osmišljeni tako da napraviš odlične burgere bez satima stajanja za štednjakom.",
      },
      {
        title: "Tražiš brze ideje za klopu kod kuće:",
        body: "praktične opcije za one dane kad ti se jede nešto fino, ali ti se neda previše razmišljati o kuhanju.",
      },
      {
        title: "Voliš razmaziti obitelj ili prijatelje:",
        body: "sočni, domaći i brutalno dobri burgeri za dijeljenje tijekom večere, vikenda ili okupljanja.",
      },
      {
        title: "Želiš raznolikost bez kompliciranih recepata:",
        body: "kombinacije s junetinom, piletinom, sirevima, umacima, povrćem i dodacima, tako da nikad ne jedete jedno te isto.",
      },
      {
        title: "Preferiraš domaće ispred dostave:",
        body: "napravi sam/a bogate, praktične i puno zasitnije burgere kad god te uhvati želja.",
      },
    ],
    cta: "ŽELIM SVOJIH 101 BURGERA",
    trust: [
      { icon: "lock", text: "Trenutni pristup" },
      { icon: "mail", text: "Stiže na tvoj e-mail" },
      { icon: "card", text: "Sigurno plaćanje" },
    ],
    a11yPrev: "Prethodni recept",
    a11yNext: "Sljedeći recept",
    a11yDot: "Na recept",
  },

  bonuses: {
    eyebrow: "Uključeni bonusi na ograničeno vrijeme",
    headline: {
      pre: "Ako kupiš",
      accent: "101 Domaći Burger",
      post: ", dobivaš i ove poklone",
    },
    intro:
      "Upotpuni svoje burgere praktičnim vodičima za izradu domaćih umaka i preljeva koji svaki recept dižu na višu razinu.",
    items: [
      {
        badge: "🎁 BONUS 1",
        title: "Vodič za domaće umake",
        body: "Jednostavni recepti za pripremu kremastih, BBQ, ljutih i preukusnih umaka uz koje će tvoji burgeri biti još bolji.",
        priceLabel: "Posebna vrijednost:",
        priceValue: "Uključeno besplatno",
        image: "/bonuses/bono-salsas.webp",
        imageAlt: "Vodič za domaće umake",
      },
      {
        badge: "🎁 BONUS 2",
        title: "Vodič za domaće preljeve",
        body: "Nauči raditi praktične i fine preljeve, savršene za burgere, krumpiriće, salate i razna domaća jela.",
        priceLabel: "Posebna vrijednost:",
        priceValue: "Uključeno besplatno",
        image: "/bonuses/bono-aderezos.webp",
        imageAlt: "Vodič za domaće preljeve",
      },
    ],
    outro: {
      pre: "S ovim bonusima moći ćeš svojim burgerima dati onaj ekstra okus zbog kojeg se svaki običan recept čini",
      accent: "puno posebnijim.",
    },
    cta: "ŽELIM SVOJIH 101 BURGERA",
    trust: [
      { icon: "lock", text: "Trenutni pristup" },
      { icon: "mail", text: "Stiže na tvoj e-mail" },
      { icon: "card", text: "Sigurno plaćanje" },
    ],
  },

  recap: {
    eyebrow: "Sve je uključeno uz jedan pristup",
    headline: {
      pre: "Sve što dobivaš za pripremu",
      accent: "neodoljivih domaćih burgera",
    },
    subheadline:
      "Glavna knjiga recepata plus dodatni vodiči za zaokruživanje tvojih burgera preukusnim umacima, preljevima i savršenim kombinacijama.",
    paragraph: "Danas ne moraš puno razmišljati da bi počeo/la",
    body: "Dobivaš pristup praktičnoj kolekciji recepata i ideja za pripremu sočnih, domaćih i jednostavnih burgera, zajedno s dodatnim materijalima koji će pojačati okus svakog obroka.",
    highlight:
      "✨ Uključuje glavnu knjigu recepata i posebne bonuse s kojima ćeš unaprijediti svoje domaće kreacije",
    cta: "ŽELIM SVOJIH 101 BURGERA",
    trust: [
      { icon: "lock", text: "Trenutni pristup" },
      { icon: "mail", text: "Stiže na tvoj e-mail" },
      { icon: "card", text: "Sigurno plaćanje" },
    ],
  },

  testimonials: {
    eyebrow: "Iskustva ljudi koji vole kuhati kod kuće",
    headline: {
      pre: "Pogledaj što kažu oni koji već pripremaju",
      accent: "vrhunske domaće burgere",
    },
    subheadline:
      "Stvarne priče ljudi koji su htjeli više ideja, više okusa i posebnije obroke, a da ne ovise stalno o dostavi.",
    items: [
      {
        name: "Marija L.",
        role: "Kuha za svoju obitelj",
        avatar: "/testimonials/avatar-1.webp",
        quote:
          "Totalno me oduševilo jer više ne radim stalno jedan te isti burger. Sad imam hrpu ideja i doma pravim skroz drugačije i puno ukusnije burgere.",
      },
      {
        name: "Marko P.",
        role: "Idealno za vikende",
        avatar: "/testimonials/avatar-2.webp",
        quote:
          "Kombinacije umaka i dodataka su vrh. Burgeri mi ispadnu s okusom doslovno kao iz restorana, a napravim ih u vlastitoj kuhinji.",
      },
      {
        name: "Ana R.",
        role: "Više okusa bez naručivanja",
        avatar: "/testimonials/avatar-3.webp",
        quote:
          "Kupila sam knjigu jer sam htjela prestati naručivati junk food toliko često. Sad kad nam se jede nešto takvo, bez beda složimo burgere doma.",
      },
      {
        name: "Ivan M.",
        role: "Jednostavni i praktični recepti",
        avatar: "/testimonials/avatar-4.webp",
        quote:
          "Recepti su ful jednostavni za pratiti. Ne moraš biti nikakav masterchef, samo izabereš ideju i začas imaš top klopu na stolu.",
      },
      {
        name: "Ivana G.",
        role: "Savršeno za druženja",
        avatar: "/testimonials/avatar-5.webp",
        quote:
          "Super mi je što ima opcija za svačiji ukus. Organizirali smo burger-večer s ekipom i doslovno su svi tražili repete.",
      },
    ],
    cta: "ŽELIM SVOJIH 101 BURGERA",
    trust: [
      { icon: "lock", text: "Trenutni pristup" },
      { icon: "mail", text: "Stiže na tvoj e-mail" },
      { icon: "card", text: "Sigurno plaćanje" },
    ],
    starsAlt: "5 od 5 zvjezdica",
  },

  finalCta: {
    eyebrow: "🔥 Specijalna vremenski ograničena ponuda",
    headline: {
      pre: "Preuzmi",
      accent: "101 Domaći Burger",
      post: "s uključenim bonusima",
    },
    subheadline:
      "Pripremaj sočne, jednostavne i nevjerojatno ukusne burgere kod kuće, uz praktične recepte za večere, vikende, druženja i iznenadnu glad.",
    badge: "🎁 Uključuje knjigu recepata + bonus poklone",
    productName: {
      pre: "101 Domaći",
      accent: "Burger",
    },
    productTagline:
      "Jednostavni, ukusni i praktični recepti za pripremu burgera s onim pravim, restoranskim štihom kod kuće.",
    bullets: [
      "Glavna knjiga sa 101 idejom za domaće burgere",
      "Klasični, kremasti, hrskavi, ljuti i bogati recepti",
      "Opcije s junetinom, piletinom, sirom, slaninom, povrćem i dodacima",
      "Upute korak po korak za kuhanje bez muke",
      "Bonus 1: Vodič za domaće umake",
      "Bonus 2: Vodič za domaće preljeve",
      "Ideje za brze večere, vikende i druženja s ekipom",
      "Trenutni pristup digitalnoj knjizi",
    ],
    closing: {
      pre: "Idealno ako želiš jesti fino bez ovisnosti o dostavi:",
      body: "imat ćeš praktične ideje za izradu sočnih burgera kod kuće i guštanje s obitelji ili prijateljima.",
    },
    priceOldLabel: "Prije:",
    priceOld: "29.90 €",
    priceNote: "Ponuda vrijedi samo danas",
    priceNow: "8.90",
    priceCurrency: "€",
    priceFooter: "Trenutni digitalni pristup glavnom proizvodu i uključenim bonusima.",
    urgency: "Zadnji primjerci po posebnoj cijeni",
    discountPct: "70%",
    discountLabel: "POPUST",
    button: "DA, ŽELIM 101 BURGER",
    trust: [
      { icon: "lock", text: "Sigurno plaćanje" },
      { icon: "mail", text: "Pristup preko e-maila" },
      { icon: "zap", text: "Trenutna isporuka" },
    ],
    imageAlt: "Paket 101 Domaći Burger s uključenim bonusima",
  },

  faq: {
    eyebrow: "Često postavljana pitanja",
    headline: {
      pre: "Odgovaramo na tvoja pitanja prije nego kreneš raditi",
      accent: "domaće burgere",
    },
    subheadline:
      "Ovdje su najčešći odgovori vezani uz knjigu recepata, bonuse i pristup proizvodu.",
    items: [
      {
        q: "Kako ću dobiti recepte?",
        a: "Nakon što završiš plaćanje, dobit ćeš digitalni pristup receptima odmah na e-mail koji si unio/la prilikom kupnje.",
      },
      {
        q: "Mogu li ih čitati na mobitelu?",
        a: "Da. Možeš ih otvoriti s mobitela, tableta ili računala. Treba ti samo internetska veza da bi pristupio/la materijalima.",
      },
      {
        q: "Moram li biti iskusan kuhar?",
        a: "Ne. Recepti su osmišljeni tako da budu jednostavni, praktični i vrlo jasni, čak i ako nemaš puno iskustva u kuhinji.",
      },
      {
        q: "Što točno uključuje kupnja?",
        a: "Dobivaš glavnu digitalnu knjigu „101 Domaći Burger“, kao i posebne bonuse – vodiče za domaće umake i preljeve.",
      },
      {
        q: "Jesu li recepti komplicirani?",
        a: "Ma kakvi. Cijela poanta je da doma složiš fantastičan burger bez teških procesa ili sastojaka koje ne možeš nigdje kupiti.",
      },
      {
        q: "Kada mogu početi?",
        a: "Možeš početi čim dobiješ pristup. Jednostavno izabereš recept i pratiš korake.",
      },
    ],
    cta: "ŽELIM SVOJIH 101 BURGERA",
    trust: [
      { icon: "lock", text: "Sigurno plaćanje" },
      { icon: "mail", text: "Trenutni pristup" },
      { icon: "burger", text: "Uključeni bonusi" },
    ],
  },

  closing: {
    eyebrow: "Započni još danas u svojoj kuhinji",
    headline: {
      pre: "Pripremi svoje prve",
      accent: "domaće burgere",
      post: "već ovog tjedna",
    },
    paragraph:
      "Nabavi knjigu recepata, izaberi svoj prvi burger i pretvori svaki obrok u vrhunski trenutak za druženje.",
    cta: "ŽELIM SVOJIH 101 BURGERA",
    whatsapp: "Javi nam se na WhatsApp",
    imageAlt: "Domaći burger, spreman za posluživanje",
  },

  footer: {
    brand: "Crearis",
    tagline: "Digitalna knjiga recepata za domaće burgere",
    rightsPrefix: "©",
    rightsSuffix: "Crearis. Sva prava pridržana.",
    disclaimer:
      "Ova stranica nije povezana, udružena, odobrena niti sponzorirana od strane Facebooka, niti je pregledana, testirana ili podržana od strane Facebooka na bilo koji način. Facebook je registrirani zaštitni znak tvrtke Meta Platforms, Inc.",
  },
};