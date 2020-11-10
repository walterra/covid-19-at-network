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



  { id: 'sb', label: "Sucharit Bhakdi", shape: "circularImage", image: "img/dummy-male.jpg" },
  { id: 'fw', label: "Ferdinand Wegscheider", shape: "circularImage", image: "img/dummy-male.jpg" },
  { id: 'msNeos', label: "Mathias Strolz", shape: "circularImage", image: "img/dummy-male.jpg" },
  { id: 'cf', label: "Christian Fiala", shape: "circularImage", image: "img/dummy-male.jpg" },
  { id: 'cs', label: "Christian Schubert", shape: "circularImage", image: "img/dummy-male.jpg" },
  { id: 'mf', label: "Michael Fleischhacker", shape: "circularImage", image: "img/dummy-male.jpg" },
  { id: 'mh', label: "Martin Haditsch", shape: "circularImage", image: "img/dummy-male.jpg" },
  { id: 'as', label: "Andreas Sönnichsen", shape: "circularImage", image: "img/dummy-male.jpg" },
  { id: 'wz', label: "Wolfgang Ziegler", shape: "circularImage", image: "img/dummy-male.jpg" },
  { id: 'ra', label: "Rudi Anschober", shape: "circularImage", image: "img/rudi-anschober.jpg" },
  { id: 'hf', label: "Heinz Faßmann", shape: "circularImage", image: "img/dummy-male.jpg", size: 20},

  { id: 'jbs', label: "Juliane Bogner-Strauß", shape: "circularImage",
    image: "img/dummy-female.jpg"
  },
  { id: 'ask', label: "Andrea Siebenhofer-Kroitzsch", shape: "circularImage",
    image: "img/dummy-female.jpg"
  },
  { id: 'ds', label: "Daniela Schmid", shape: "circularImage",
    image: "img/dummy-female.jpg"
  },
  { id: 'ah', label: "Anita Heubacher", shape: "circularImage",
    image: "img/dummy-female.jpg"
  },
  { id: 'bmr', label: "Beate Meinl-Reisinger", shape: "circularImage",
    image: "img/dummy-female.jpg"
  },

  { id: 'aekooe', label: "Ärztekammer Oberösterreich", shape: "circularImage", image: "img/icon-institution.png", size: 20},
  { id: 'BMBWF', label: "BMBWF", shape: "circularImage", image: "img/icon-institution.png", size: 20},
  { id: 'BMSGPK', label: "BMSGPK", shape: "circularImage", image: "img/icon-institution.png", size: 20},
  { id: 'AGES', label: "AGES", shape: "circularImage", image: "img/icon-institution.png", size: 20},
  { id: 'OEFOP', label: "OEFOP", shape: "circularImage", image: "img/icon-institution.png", size: 20},
  { id: 'ICI', label: "Initiative evidenzbasierte\nCorona-Information", shape: "circularImage", image: "img/icon-institution.png", size: 20},
  { id: 'ampelkomm', label: "Ampel-Kommission", shape: "circularImage", image: "img/icon-institution.png", size: 20},
  { id: 'DNEbM', label: "Netzwerk evidenzbasierte Medizin", shape: "circularImage", image: "img/icon-institution.png", size: 20},
  { id: 'TirolerAdler', label: "Tiroler Adler", shape: "circularImage", image: "img/icon-institution.png", size: 20},
  { id: 'NEOS', label: "NEOS", shape: "circularImage", image: "img/icon-institution.png", size: 20},

  { id: 'IWIMED', label: "IWIMED GmbH", shape: "circularImage", image: "img/icon-company.png", size: 20},

  { id: 'offeneschulen', label: "offeneschulen.at", shape: "circularImage", image: "img/icon-media.png", size: 20},
  { id: 'krone', label: "krone.at", shape: "circularImage", image: "img/icon-media.png", size: 20},
  { id: 'ORF', label: "ORF", shape: "circularImage", image: "img/icon-media.png", size: 20},
  { id: 'ServusTV', label: "Servus TV", shape: "circularImage", image: "img/icon-media.png", size: 20},
  { id: 'NEOSlab', label: "NEOS lab", shape: "circularImage", image: "img/icon-media.png", size: 20},
  { id: 'TT', label: "Tiroler Tageszeitung", shape: "circularImage", image: "img/icon-media.png", size: 20},
  { id: 'PunktPRERADOVIC', label: "Punkt.PRERADOVIC", shape: "circularImage", image: "img/icon-media.png", size: 20},

  { id: 'zda', label: '"Zahlen der AGES"', shape: "circularImage", image: "img/icon-quote.jpg"},
  { id: 'entd', label: '"Entdämonisierung"', shape: "circularImage", image: "img/icon-quote.jpg"},


  { id: 'PK2020', label: 'Primärversorgungs-\nKongress 2020', shape: "circularImage", image: "img/icon-event.png"},
];

var rawEdges = [
  { from: 'fa', to: 'AGES', title: 'Leitung Öffentliche Gesundheit', font: { align: "middle" } },
  { from: 'ds', to: 'AGES', title: 'Öffentliche Gesundheit', font: { align: "middle" } },
  { from: 'ds', to: 'ra', title: 'PK', font: { align: "middle" } },
  { from: 'ra', to: 'BMSGPK', title: 'Minister', value: 1.3 },

  { from: 'jbs', to: 'PK2020', title: 'Podiumsdiskussion' },
  { from: 'fa', to: 'PK2020', title: 'Vortrag' },
  { from: 'ms', to: 'PK2020', title: 'Vortrag' },
  { from: 'ask', to: 'PK2020', title: 'Organisatorin' },
  { from: 'ask', to: 'DNEbM', title: 'Mitglied, Programmkomitee' },

  { from: 'ask', to: 'ampelkomm', title: 'nominierte Expertin des Bundes' },
  { from: 'ds', to: 'ampelkomm', title: 'nominierte Expertin des Bundes, Sprecherin' },
  { from: 'fa', to: 'ampelkomm', title: 'nominierter Experte des Bundes, Stellvertr. Daniela Schmid' },
  { from: 'sr', to: 'ampelkomm', title: 'nominierte Expertin des Bundes' },
  { from: 'ampelkomm', to: 'BMSGPK', title: 'berichtet an' },

  { from: 'AGES', to: 'zda' },

  { from: 'mh', to: 'ORF', title: 'Im Gespräch' },
  { from: 'fa', to: 'ORF', title: 'Frühstück bei mir' },
  { from: 'as', to: 'ORF', title: 'ZiB 2 Interview' },
  { from: 'ms', to: 'ORF', title: 'ZiB 2 Interview' },
  { from: 'ms', to: 'mf', title: '"Briefwechsel"' },
  { from: 'ms', to: 'ServusTV', title: 'Corona Quartett' },
  { from: 'ms', to: 'NEOSlab', title: 'Studiogast' },
  { from: 'ms', to: 'OEFOP', title: 'Wissenschaftlicher Koordinator' },
  { from: 'as', to: 'PunktPRERADOVIC', title: 'Youtube Interview' },

  { from: 'as', to: 'DNEbM', title: 'Vorsitzender', value: 2 },
  { from: 'as', to: 'IWIMED', title: 'Beteiligung' },
  { from: 'sr', to: 'IWIMED', title: 'Beteiligung' },
  { from: 'sr', to: 'ra', title: 'PK für Kinder' },

  { from: 'mh', to: 'ICI', title: 'PK' },
  { from: 'as', to: 'ICI', title: 'PK' },
  { from: 'cf', to: 'ICI', title: 'PK', value: 2 },
  { from: 'cs', to: 'ICI', title: 'PK' },

  { from: 'fa', to: 'aekooe', title: 'PK' },
  { from: 'pa', to: 'aekooe', title: 'PK' },
  { from: 'ms', to: 'aekooe', title: 'PK' },
  { from: 'aekooe', to: 'entd', title: 'propagiert' },
  { from: 'wz', to: 'entd', title: 'propagiert' },
  { from: 'entd', to: 'krone', title: 'verbreitet', value: 1 },
  { from: 'wz', to: 'aekooe', title: 'Kurienobmann-Stellvertreter' },

  { from: 'pa', to: 'hf', title: 'PK' },
  { from: 'pa', to: 'ORF', title: 'ORF Report Interview' },
  { from: 'hf', to: 'BMBWF' },

  { from: 'ah', to: 'TT', title: 'Chefredakteurin' },
  { from: 'ah', to: 'TirolerAdler', title: 'Moderation Tiroler Adler Forum' },
  { from: 'fa', to: 'TT', title: 'Interview Tiroler Tageszeitung' },
  { from: 'ms', to: 'TT', title: 'Interview Tiroler Tageszeitung' },

  { from: 'msNeos', to: 'TirolerAdler', title: 'Gastredner Tiroler Adler Forum' },
  { from: 'msNeos', to: 'NEOS', title: 'ehem. Politiker' },
  { from: 'bmr', to: 'NEOS', title: 'Parteivorsitzende' },
  { from: 'zda', to: 'bmr', title: 'zitiert durch' },
  { from: 'NEOS', to: 'offeneschulen', title: 'Kampagne' },
  { from: 'NEOS', to: 'NEOSlab' },
  { from: 'zda', to: 'offeneschulen', title: 'zitiert durch' },
  { from: 'zda', to: 'pa', title: 'zitiert durch' },

  { from: 'sb', to: 'fw', title: 'Interview' },
  { from: 'fw', to: 'ServusTV', title: 'Moderator Der Wegscheider', value: 1.5 },
  { from: 'pa', to: 'ServusTV', title: 'Gast Corona Quartett' },
  { from: 'sb', to: 'ServusTV', title: 'Gast Corona Quartett' },
  { from: 'mf', to: 'ServusTV', title: 'Moderator Corona Quartett' },
];
