var rawNodes = [
  {
    id: 'fa',
    label: "Franz Allerberger",
    shape: "circularImage",
    image: "img/franz-allerberger.jpg"
  },
  {
    id: 'ms',
    label: "Martin Sprenger",
    shape: "circularImage",
    image: "img/martin-sprenger.jpg"
  },
  {
    id: 'pa',
    label: "Petra Apfalter",
    shape: "circularImage",
    image: "img/petra-apfalter.jpg"
  },
  {
    id: 'sr',
    label: "Susanne Rabady",
    shape: "circularImage",
    image: "img/susanne-rabady.jpg"
  },

  { id: 'jr', label: "Johannes Rath", shape: "circularImage", image: "img/dummy-male.jpg" },
  { id: 'gw', label: "Günter Weiss", shape: "circularImage", image: "img/guenter-weiss.jpg" },
  { id: 'sb', label: "Sucharit Bhakdi", shape: "circularImage", image: "img/sucharit-bhakdi.jpg" },
  { id: 'fw', label: "Ferdinand Wegscheider", shape: "circularImage", image: "img/ferdinan-wegscheider.jpg" },
  { id: 'msNeos', label: "Mathias Strolz", shape: "circularImage", image: "img/mathias-strolz.jpg" },
  { id: 'cf', label: "Christian Fiala", shape: "circularImage", image: "img/christian-fiala.jpg" },
  { id: 'cs', label: "Christian Schubert", shape: "circularImage", image: "img/christian-schubert.jpg" },
  { id: 'mf', label: "Michael Fleischhacker", shape: "circularImage", image: "img/michael-fleischhacker.jpg" },
  { id: 'mh', label: "Martin Haditsch", shape: "circularImage", image: "img/martin-haditsch.jpg" },
  { id: 'as', label: "Andreas Sönnichsen", shape: "circularImage", image: "img/andreas-soennichsen.jpg" },
  { id: 'wz', label: "Wolfgang Ziegler", shape: "circularImage", image: "img/wolfgang-ziegler.jpg" },
  { id: 'ra', label: "Rudi Anschober", shape: "circularImage", image: "img/rudi-anschober.jpg" },
  { id: 'hf', label: "Heinz Faßmann", shape: "circularImage", image: "img/heinz-fassmann.jpg"},
  { id: 'hk', label: "Herbert Kickl", shape: "circularImage", image: "img/herbert-kickl.jpg"},
  { id: 'sk', label: "Sebastian Kurz", shape: "circularImage", image: "img/sebastian-kurz.jpg"},

  // { id: 'jbs', label: "Juliane Bogner-Strauß", shape: "circularImage",
  //   image: "img/dummy-female.jpg"
  // },
  { id: 'ask', label: "Andrea Siebenhofer-Kroitzsch", shape: "circularImage", image: "img/andrea-siebenhofer-kroitzsch.jpg"},
  { id: 'ds', label: "Daniela Schmid", shape: "circularImage", image: "img/daniela-schmid.jpg"},
  { id: 'ah', label: "Anita Heubacher", shape: "circularImage", image: "img/anita-heubacher.jpg"},
  { id: 'bmr', label: "Beate Meinl-Reisinger", shape: "circularImage", image: "img/beate-meinl-reisinger.jpg"},
  { id: 'prw', label: "Pamela Rendi-Wagner", shape: "circularImage", image: "img/pamela-rendi-wagner.jpg"},
  { id: 'ng', label: "Nicole Grois", shape: "circularImage", image: "img/dummy-female.jpg"},
  { id: 'cw', label: "Claudia Wild", shape: "circularImage", image: "img/dummy-female.jpg"},
  { id: 'hs', label: "Hendrik Streeck", shape: "circularImage", image: "img/hendrik-streeck.jpg"},

  { id: 'aekooe', label: "Ärztekammer Oberösterreich", shape: "circularImage", image: "img/icon-institution.png", size: 20},
  { id: 'BMBWF', label: "BMBWF", shape: "circularImage", image: "img/icon-institution.png", size: 20},
  { id: 'BMSGPK', label: "BMSGPK", shape: "circularImage", image: "img/icon-institution.png", size: 20},
  { id: 'AGES', label: "AGES", shape: "circularImage", image: "img/icon-institution.png", size: 20},
  { id: 'OEFOP', label: "OEFOP", shape: "circularImage", image: "img/icon-institution.png", size: 20},
  { id: 'ICI', label: "Initiative evidenzbasierte\nCorona-Information", shape: "circularImage", image: "img/icon-institution.png", size: 20},
  { id: 'ampelkomm', label: "Ampel-Kommission", shape: "circularImage", image: "img/icon-institution.png", size: 20},
  { id: 'DNEbM', label: "Netzwerk\nevidenzbasierte\nMedizin", shape: "circularImage", image: "img/icon-institution.png", size: 20},
  { id: 'TirolerAdler', label: "Tiroler Adler", shape: "circularImage", image: "img/icon-institution.png", size: 20},
  { id: 'NEOS', label: "NEOS", shape: "circularImage", image: "img/icon-institution.png", size: 20},
  { id: 'FPOE', label: "FPÖ", shape: "circularImage", image: "img/icon-institution.png", size: 20},
  { id: 'OEVP', label: "ÖVP", shape: "circularImage", image: "img/icon-institution.png", size: 20},
  { id: 'SPOE', label: "SPÖ", shape: "circularImage", image: "img/icon-institution.png", size: 20},
  { id: 'AIHTA', label: "AIHTA", shape: "circularImage", image: "img/icon-institution.png", size: 20},

  { id: 'IWIMED', label: "IWIMED GmbH", shape: "circularImage", image: "img/icon-company.png", size: 20},

  { id: 'GBD', label: "Great Barrington\nDeclaration", shape: "circularImage", image: "img/icon-media.png", size: 20},
  { id: 'offeneschulen', label: "offeneschulen.at", shape: "circularImage", image: "img/icon-media.png", size: 20},
  { id: 'krone', label: "krone.at", shape: "circularImage", image: "img/icon-media.png", size: 20},
  { id: 'ORF', label: "ORF", shape: "circularImage", image: "img/icon-media.png", size: 20},
  { id: 'ServusTV', label: "Servus TV", shape: "circularImage", image: "img/icon-media.png", size: 20},
  { id: 'NEOSlab', label: "NEOS lab", shape: "circularImage", image: "img/icon-media.png", size: 20},
  { id: 'TT', label: "Tiroler Tageszeitung", shape: "circularImage", image: "img/icon-media.png", size: 20},
  { id: 'PunktPRERADOVIC', label: "Punkt.PRERADOVIC", shape: "circularImage", image: "img/icon-media.png", size: 20},
  { id: 'EbMGL', label: "EbM-Guidelines", shape: "circularImage", image: "img/icon-media.png", size: 20},
  { id: 'wochenblick', label: "Wochenblick", shape: "circularImage", image: "img/icon-media.png", size: 20},
  { id: 'PPR', label: "Purkarthofer PR", shape: "circularImage", image: "img/icon-company.png", size: 20},
  { id: 'ppc', label: "ppc training", shape: "circularImage", image: "img/icon-company.png", size: 20},
  { id: 'AMS', label: "AMS", shape: "circularImage", image: "img/icon-institution.png", size: 20},
  { id: 'ÖGKJ', label: "ÖGKJ", shape: "circularImage", image: "img/icon-institution.png", size: 20},

  { id: 'zda', label: '"Zahlen der AGES"', shape: "circularImage", image: "img/icon-quote.jpg", size: 20},
  { id: 'entd', label: '"Entdämonisierung"', shape: "circularImage", image: "img/icon-quote.jpg", size: 20},
  { id: 'SW', label: '"Schwedischer Weg"', shape: "circularImage", image: "img/icon-quote.jpg", size: 20},

  { id: 'PK2020', label: 'Primärversorgungs-\nKongress 2020', shape: "circularImage", image: "img/icon-event.png", size: 20},
];

var rawEdges = [
  { from: 'fa', to: 'AGES', title: 'Leitung Öffentliche Gesundheit', font: { align: "middle" }, length: 30, value: 1.5 },
  { from: 'fa', to: 'ra', title: 'Allerberger testet Anschober zumeist<br/>persönlich – inzwischen zweimal pro Woche. (25.12.2020)', font: { align: "middle" }, length: 30, value: 1.5 },
  { from: 'ds', to: 'AGES', title: 'Öffentliche Gesundheit', font: { align: "middle" } },
  { from: 'ds', to: 'ra', title: 'PK', font: { align: "middle" }, length: 30 },
  { from: 'ra', to: 'BMSGPK', title: 'Minister', value: 2, length: 60, arrows: { middle: { enabled: false }} },
  { from: 'ÖGKJ', to: 'BMSGPK', title: 'Fachinformation für BMSGPK' },

  // { from: 'jbs', to: 'PK2020', title: 'Podiumsdiskussion', value: 1.3 },
  { from: 'fa', to: 'PK2020', title: 'Vortrag' },
  { from: 'ms', to: 'PK2020', title: 'Vortrag, Organisator' },
  { from: 'ask', to: 'PK2020', title: 'Organisatorin' },
  { from: 'ask', to: 'DNEbM', title: 'Mitglied, Programmkomitee', length: 30 },

  { from: 'ask', to: 'ampelkomm', title: 'nominierte Expertin des Bundes', length: 30 },
  { from: 'ds', to: 'ampelkomm', title: 'nominierte Expertin des Bundes, Sprecherin' },
  { from: 'fa', to: 'ampelkomm', title: 'nominierter Experte des Bundes, Stellvertr. Daniela Schmid' },
  { from: 'sr', to: 'ampelkomm', title: 'nominierte Expertin des Bundes' },
  { from: 'ampelkomm', to: 'BMSGPK', title: 'berichtet an', length: 50 },

  { from: 'AGES', to: 'zda' },

  { from: 'mh', to: 'ORF', title: 'Ö1 Im Gespräch' },
  { from: 'fa', to: 'wochenblick', title: 'Artikel zu Frühstück bei mir' }, // https://www.wochenblick.at/ages-infektiologe-allerberger-jeder-wird-das-corona-virus-bekommen/
  { from: 'mh', to: 'wochenblick', title: 'Artikel' }, // https://www.wochenblick.at/ages-infektiologe-allerberger-jeder-wird-das-corona-virus-bekommen/
  { from: 'wochenblick', to: 'hk', title: 'Martin-Haditsch-Artikel zitiert durch' },
  { from: 'hk', to: 'FPOE', title: 'geschäftsführender Klubobmann' },
  { from: 'SW', to: 'hk', title: '"Schweden sei ohne einschränkende Maßnahmen viel besser gefahren."' },
  { from: 'fa', to: 'ORF', title: 'Frühstück bei mir' },
  { from: 'as', to: 'ORF', title: 'ZiB 2 Interview' },
  { from: 'ms', to: 'ORF', title: 'ZiB 2 Interview' },
  { from: 'ms', to: 'mf', title: '"Briefwechsel"' },
  { from: 'ms', to: 'ServusTV', title: 'Corona Quartett' },
  { from: 'ms', to: 'NEOSlab', title: 'Studiogast' },
  { from: 'ms', to: 'OEFOP', title: 'Wissenschaftlicher Koordinator' },
  { from: 'mh', to: 'PunktPRERADOVIC', title: 'Youtube Interview', length: 60 },
  { from: 'as', to: 'PunktPRERADOVIC', title: 'Youtube Interview: "Wir brauchen das schwedische Modell"', length: 60 },
  { from: 'as', to: 'SW', title: 'Youtube Interview: "Wir brauchen das schwedische Modell"', length: 60 },

  { from: 'gw', to: 'DNEbM', title: 'Zitat OEGIT' },
  { from: 'gw', to: 'TT', title: 'Interview mit Anita Heubacher' },
  { from: 'as', to: 'EbMGL', title: 'Autor' },
  { from: 'as', to: 'DNEbM', title: 'Vorsitzender', value: 1.3 },
  { from: 'as', to: 'GBD', title: 'Unterzeichner' },
  { from: 'as', to: 'IWIMED', title: 'Beteiligung' },
  { from: 'sr', to: 'EbMGL', title: 'Autorin' },
  { from: 'sr', to: 'IWIMED', title: 'Beteiligung' },
  { from: 'sr', to: 'ra', title: 'PK für Kinder' },
  { from: 'ng', to: 'ÖGKJ', title: 'Referatsleiterin ÖGKJ' },
  { from: 'ng', to: 'ICI', title: 'PK' },

  { from: 'mh', to: 'ICI', title: 'PK' },
  { from: 'as', to: 'ICI', title: 'PK' },
  { from: 'cf', to: 'ICI', title: 'PK', value: 1.3 },
  { from: 'cs', to: 'ICI', title: 'PK' },
  { from: 'PPR', to: 'ICI', title: 'ICI-PK Organisator' },
  { from: 'jr', to: 'ICI', title: 'ICI Team' },
  { from: 'jr', to: 'ppc', title: 'Geschäftsführer' },
  { from: 'ppc', to: 'AMS', title: 'AMS Kursangebot' },

  { from: 'gw', to: 'aekooe', title: 'PK' },
  { from: 'fa', to: 'aekooe', title: 'PK' },
  { from: 'pa', to: 'aekooe', title: 'PK', length: 30 },
  { from: 'ms', to: 'aekooe', title: 'PK' },
  { from: 'aekooe', to: 'entd', title: 'propagiert' },
  { from: 'wz', to: 'entd', title: 'propagiert' },
  { from: 'entd', to: 'krone', title: 'verbreitet', value: 1 },
  { from: 'wz', to: 'aekooe', title: 'Kurienobmann-Stellvertreter' },

  { from: 'pa', to: 'hf', title: 'PK' },
  { from: 'pa', to: 'ORF', title: 'ORF Report Interview' },
  { from: 'pa', to: 'SW', title: '"Schweden ist einen sehr guten Weg gegangen"' },
  { from: 'fa', to: 'SW', title: 'Einladung Anders Tegnell', length: 30 },
  { from: 'hf', to: 'BMBWF' },
  { from: 'hf', to: 'OEVP' },
  { from: 'sk', to: 'OEVP' },
  { from: 'prw', to: 'SPOE' },

  { from: 'ah', to: 'TT', title: 'Chefredakteurin' },
  { from: 'ah', to: 'TirolerAdler', title: 'Moderation Tiroler Adler Forum' },
  { from: 'fa', to: 'TT', title: 'Interview Tiroler Tageszeitung' },
  { from: 'ms', to: 'TT', title: 'Interview Tiroler Tageszeitung' },

  { from: 'hs', to: 'TirolerAdler', title: 'Distance Talk'},

  // https://www.facebook.com/GrazPublicHealth/posts/5051991171493223
  { from: 'ms', to: 'hs', title: 'Martin Sprenger: „Streeck gefällt mir“'},

  { from: 'msNeos', to: 'TirolerAdler', title: 'Gastredner Tiroler Adler Forum' },
  { from: 'msNeos', to: 'NEOS', title: 'ehem. Politiker' },
  { from: 'bmr', to: 'NEOS', title: 'Parteivorsitzende', length: 30, value: 1.3 },
  { from: 'zda', to: 'bmr', title: 'zitiert durch' },
  { from: 'NEOS', to: 'offeneschulen', title: 'Kampagne' },
  { from: 'NEOS', to: 'NEOSlab' },
  { from: 'zda', to: 'offeneschulen', title: 'zitiert durch' },
  { from: 'zda', to: 'pa', title: 'zitiert durch' },
  { from: 'zda', to: 'prw', title: 'zitiert durch' },

  { from: 'sb', to: 'fw', title: 'Interview' },
  { from: 'fw', to: 'ServusTV', title: 'Moderator Der Wegscheider', value: 1.3 },
  { from: 'pa', to: 'ServusTV', title: 'Gast Corona Quartett' },
  { from: 'sb', to: 'ServusTV', title: 'Gast Corona Quartett' },
  { from: 'mf', to: 'ServusTV', title: 'Moderator Corona Quartett' },

  { from: 'BMSGPK', to: 'AIHTA', title: 'Gesellschafter' },
  { from: 'cw', to: 'AIHTA', title: 'Geschäftsführerin der AIHTA GmbH', value: 1.3, length: 30 },
  { from: 'cw', to: 'DNEbM', title: 'Institutsmitgliedschaft', length: 30 },
  { from: 'AIHTA', to: 'DNEbM', title: 'Partner' },
  { from: 'SW', to: 'cw', title: 'Leider gibt es nur wenige mutige Länder, etwa Schweden, die einen anderen Weg wagen.' },
];

// global for node scripts
getRawNodes = () => rawNodes;
getRawEdges = () => rawEdges;
