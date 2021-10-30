var rawNodes = [
  { id: 'fa', label: "Franz Allerberger", shape: "circularImage", image: "img/franz-allerberger.jpg" },
  { id: 'ms', label: "Martin Sprenger", shape: "circularImage", image: "img/martin-sprenger.jpg" },
  { id: 'pa', label: "Petra Apfalter", shape: "circularImage", image: "img/petra-apfalter.jpg" },
  { id: 'sr', label: "Susanne Rabady", shape: "circularImage", image: "img/susanne-rabady.jpg" },
  { id: 'jr', label: "Johannes Rath", shape: "circularImage", image: "img/johannes-rath.jpg" },
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
  { id: 'hf', label: "Heinz Faßmann", shape: "circularImage", image: "img/heinz-fassmann.jpg" },
  { id: 'hk', label: "Herbert Kickl", shape: "circularImage", image: "img/herbert-kickl.jpg" },
  { id: 'sk', label: "Sebastian Kurz", shape: "circularImage", image: "img/sebastian-kurz.jpg" },

  // { id: 'jbs', label: "Juliane Bogner-Strauß", shape: "circularImage",
  //   image: "img/dummy-female.jpg"
  // },
  { id: 'ask', label: "Andrea Siebenhofer-Kroitzsch", shape: "circularImage", image: "img/andrea-siebenhofer-kroitzsch.jpg" },
  { id: 'ds', label: "Daniela Schmid", shape: "circularImage", image: "img/daniela-schmid.jpg" },
  { id: 'ah', label: "Anita Heubacher", shape: "circularImage", image: "img/anita-heubacher.jpg" },
  { id: 'bmr', label: "Beate Meinl-Reisinger", shape: "circularImage", image: "img/beate-meinl-reisinger.jpg" },
  { id: 'prw', label: "Pamela Rendi-Wagner", shape: "circularImage", image: "img/pamela-rendi-wagner.jpg" },
  { id: 'ng', label: "Nicole Grois", shape: "circularImage", image: "img/nicole-grois.jpg" },
  { id: 'cw', label: "Claudia Wild", shape: "circularImage", image: "img/claudia-wild.jpg" },
  { id: 'hs', label: "Hendrik Streeck", shape: "circularImage", image: "img/hendrik-streeck.jpg" },
  { id: 'jr2', label: "Judith Raunig", shape: "circularImage", image: "img/judith-raunig.jpg" },
  // Generalsekretär der ÖGKJ
  { id: 'rk', label: "Reinhold Kerbl", shape: "circularImage", image: "img/reinhold-kerbl.jpg" },
  { id: 'ks', label: "Katrin Skala", shape: "circularImage", image: "img/katrin-skala.jpg" },
  { id: 'ug', label: "Ulrike Guérot", shape: "circularImage", image: "img/ulrike-guerot.jpg" },
  { id: 'gp', label: "Gerhard Pöttler", shape: "circularImage", image: "img/gerhard-poettler.jpg" },
  { id: 'gk', label: "Gunnar Kaiser", shape: "circularImage", image: "img/gunnar-kaiser.jpg" },
  { id: 'cfACTA', label: "Christian Felber", shape: "circularImage", image: "img/christian-felber.jpg" },
  { id: 'mb', label: "Michael Brunner", shape: "circularImage", image: "img/michael-brunner.jpg" },
  { id: 'rb', label: "Raphael Bonelli", shape: "circularImage", image: "img/raphael-bonelli.jpg" },
  { id: 'hh', label: "Hannes Hofbauer", shape: "circularImage", image: "img/dummy-male.jpg" },
  { id: 'mm', label: "Michael Meyen", shape: "circularImage", image: "img/dummy-male.jpg" },
  { id: 'mk', label: "Martina Kaller", shape: "circularImage", image: "img/dummy-female.jpg" },
  { id: 'ak', label: "Andrea Komlosy", shape: "circularImage", image: "img/dummy-female.jpg" },
  { id: 'ca', label: "Clemens Arvay", shape: "circularImage", image: "img/clemens-arvay.jpg" },



  { id: 'aekooe', label: "Ärztekammer Oberösterreich", shape: "circularImage", image: "img/icon-institution.png", size: 20 },
  { id: 'BMBWF', label: "BMBWF", shape: "circularImage", image: "img/icon-institution.png", size: 20 },
  { id: 'BMSGPK', label: "BMSGPK", shape: "circularImage", image: "img/icon-institution.png", size: 20 },
  { id: 'AGES', label: "AGES", shape: "circularImage", image: "img/icon-institution.png", size: 20 },
  { id: 'OEFOP', label: "OEFOP", shape: "circularImage", image: "img/icon-institution.png", size: 20 },
  { id: 'ICI', label: "Initiative evidenzbasierte\nCorona-Information", shape: "circularImage", image: "img/icon-institution.png", size: 20 },
  { id: 'ampelkomm', label: "Ampel-Kommission", shape: "circularImage", image: "img/icon-institution.png", size: 20 },
  { id: 'DNEbM', label: "Netzwerk\nevidenzbasierte\nMedizin", shape: "circularImage", image: "img/icon-institution.png", size: 20 },
  { id: 'TirolerAdler', label: "Tiroler Adler", shape: "circularImage", image: "img/icon-institution.png", size: 20 },
  { id: 'NEOS', label: "NEOS", shape: "circularImage", image: "img/icon-institution.png", size: 20 },
  { id: 'FPOE', label: "FPÖ", shape: "circularImage", image: "img/icon-institution.png", size: 20 },
  { id: 'OEVP', label: "ÖVP", shape: "circularImage", image: "img/icon-institution.png", size: 20 },
  { id: 'SPOE', label: "SPÖ", shape: "circularImage", image: "img/icon-institution.png", size: 20 },
  { id: 'AIHTA', label: "AIHTA", shape: "circularImage", image: "img/icon-institution.png", size: 20 },
  { id: 'CA', label: "Corona-Aussöhnung", shape: "circularImage", image: "img/icon-institution.png", size: 20 },
  { id: 'ACU', label: "Ausserparlamentarischer Corona\nUntersuchungsausschuss", shape: "circularImage", image: "img/icon-institution.png", size: 20 },
  { id: 'AFA', label: "Rechtsanwälte für Grundrechte\nAnwälte für Aufklärung", shape: "circularImage", image: "img/icon-institution.png", size: 20 },
  { id: 'HAA', label: "Hannah-Arendt-Akademie e.V.", shape: "circularImage", image: "img/icon-institution.png", size: 20 },
  { id: 'promedia', label: "Promedia Verlag", shape: "circularImage", image: "img/icon-institution.png", size: 20 },
  { id: 'keinzustand', label: "keinzustand.at", shape: "circularImage", image: "img/icon-institution.png", size: 20 },
  { id: 'VFKI', label: "Verein für kulturelle Information", shape: "circularImage", image: "img/icon-institution.png", size: 20 },

  { id: 'IWIMED', label: "IWIMED GmbH", shape: "circularImage", image: "img/icon-company.png", size: 20 },

  { id: 'GBD', label: "Great Barrington\nDeclaration", shape: "circularImage", image: "img/icon-media.png", size: 20 },
  { id: 'offeneschulen', label: "offeneschulen.at", shape: "circularImage", image: "img/icon-media.png", size: 20 },
  { id: 'krone', label: "krone.at", shape: "circularImage", image: "img/icon-media.png", size: 20 },
  { id: 'ORF', label: "ORF", shape: "circularImage", image: "img/icon-media.png", size: 20 },
  { id: 'ServusTV', label: "Servus TV", shape: "circularImage", image: "img/icon-media.png", size: 20 },
  { id: 'NEOSlab', label: "NEOS lab", shape: "circularImage", image: "img/icon-media.png", size: 20 },
  { id: 'TT', label: "Tiroler Tageszeitung", shape: "circularImage", image: "img/icon-media.png", size: 20 },
  { id: 'PunktPRERADOVIC', label: "Punkt.PRERADOVIC", shape: "circularImage", image: "img/icon-media.png", size: 20 },
  { id: 'EbMGL', label: "EbM-Guidelines", shape: "circularImage", image: "img/icon-media.png", size: 20 },
  { id: 'wochenblick', label: "Wochenblick", shape: "circularImage", image: "img/icon-media.png", size: 20 },
  { id: 'eine-andere-freiheit', label: "Eine andere Freiheit", shape: "circularImage", image: "img/icon-media.png", size: 20 },
  { id: 'KIDS', label: 'kinder-in-die-schule.at', shape: "circularImage", image: "img/icon-media.png", size: 20 },
  { id: 'LOCKDOWN-KINDERRECHTE', label: 'LOCKDOWN KINDERRECHTE', shape: "circularImage", image: "img/icon-media.png", size: 20 },
  { id: 'ET', label: 'Epoch Times', shape: "circularImage", image: "img/icon-media.png", size: 20 },
  { id: 'kaisertv', label: "kaisertv.de", shape: "circularImage", image: "img/icon-media.png", size: 20 },
  { id: 'KURIER', label: "Kurier", shape: "circularImage", image: "img/icon-media.png", size: 20 },
  { id: 'rubikon', label: "rubikon", shape: "circularImage", image: "img/icon-media.png", size: 20 },
  { id: 'AADT', label: "#allesaufdentisch", shape: "circularImage", image: "img/icon-media.png", size: 20 },
  { id: 'LOCKDOWN2020', label: "Lockdown 2020", shape: "circularImage", image: "img/icon-media.png", size: 20 },
  { id: 'WKEB', label: "Wir können es besser", shape: "circularImage", image: "img/icon-media.png", size: 20 },
  { id: 'FALTER', label: "Falter", shape: "circularImage", image: "img/icon-media.png", size: 20 },

  { id: 'PPR', label: "Purkarthofer PR", shape: "circularImage", image: "img/icon-company.png", size: 20 },
  { id: 'ppc', label: "ppc training", shape: "circularImage", image: "img/icon-company.png", size: 20 },
  { id: 'AMS', label: "AMS", shape: "circularImage", image: "img/icon-institution.png", size: 20 },
  { id: 'ÖGKJ', label: "ÖGKJ", shape: "circularImage", image: "img/icon-institution.png", size: 20 },
  { id: 'dieBasis', label: "dieBasis", shape: "circularImage", image: "img/icon-institution.png", size: 20 },
  { id: 'RP', label: "Respekt.plus", shape: "circularImage", image: "img/icon-institution.png", size: 20 },
  { id: 'MFG', label: "MFG", shape: "circularImage", image: "img/icon-institution.png", size: 20 },
  { id: 'ZK', label: "Zukunftskonferenz 2021", shape: "circularImage", image: "img/icon-institution.png", size: 20 },
  { id: 'MWGFD', label: "MWGFD e.V.", shape: "circularImage", image: "img/icon-institution.png", size: 20 },
  { id: 'WZUG', label: "#wirzeigenunsergesicht", shape: "circularImage", image: "img/icon-institution.png", size: 20 },

  { id: 'zda', label: '"Zahlen der AGES"', shape: "circularImage", image: "img/icon-quote.jpg", size: 20 },
  { id: 'entd', label: '"Entdämonisierung"', shape: "circularImage", image: "img/icon-quote.jpg", size: 20 },
  { id: 'SW', label: '"Schwedischer Weg"', shape: "circularImage", image: "img/icon-quote.jpg", size: 20 },

  { id: 'PK2020', label: 'Primärversorgungs-\nKongress 2020', shape: "circularImage", image: "img/icon-event.png", size: 20 },
  { id: 'DNR2021', label: 'Die Nadel ruft', shape: "circularImage", image: "img/icon-event.png", size: 20 },
  { id: 'PATHOVACC2021', label: "PATHOVACC 2021", shape: "circularImage", image: "img/icon-event.png", size: 20 },
  { id: 'UNIVIERC', label: "Universität Wien\nRingvorlesung - Corona", shape: "circularImage", image: "img/icon-event.png", size: 20 },
];

var rawEdges = [
  { from: 'fa', to: 'AGES', title: 'Leitung Öffentliche Gesundheit', font: { align: "middle" }, length: 30 },
  // Faßmann-PK zu Tests an Schulen https://orf.at/stories/3196627/
  { from: 'fa', to: 'hf', title: 'Faßmann-PK zu Tests an Schulen (9.1.2021)' },
  { from: 'fa', to: 'ra', title: 'Allerberger testet Anschober zumeist<br/>persönlich – inzwischen zweimal pro Woche. (25.12.2020)', font: { align: "middle" }, length: 30 },
  { from: 'ds', to: 'AGES', title: 'Öffentliche Gesundheit', font: { align: "middle" } },
  { from: 'ds', to: 'ra', title: 'PK', font: { align: "middle" }, length: 30 },
  { from: 'ra', to: 'BMSGPK', title: 'Minister', value: 2, length: 60, arrows: { middle: { enabled: false } } },
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
  { from: 'mh', to: 'ServusTV', title: 'Auf der Suche nach der Wahrheit' },
  { from: 'mh', to: 'RP', title: 'Mitgründer' },
  // Martin Haditsch Interview Epoch Times https://www.youtube.com/watch?v=MaL0ZgcVvGg
  { from: 'mh', to: 'ET', title: 'Mitgründer' },
  // https://www.wochenblick.at/ages-infektiologe-allerberger-jeder-wird-das-corona-virus-bekommen/
  { from: 'fa', to: 'wochenblick', title: 'Artikel zu Frühstück bei mir' },
  { from: 'mh', to: 'wochenblick', title: 'Artikel' },
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
  { from: 'ms', to: 'KIDS', title: 'Initiator' },
  { from: 'ms', to: 'eine-andere-freiheit', title: 'Interview' },
  { from: 'ms', to: 'LOCKDOWN-KINDERRECHTE', title: 'Credit' },

  { from: 'jr2', to: 'KIDS', title: 'Unterzeichnerin Offnener Brief' },
  { from: 'jr2', to: 'LOCKDOWN-KINDERRECHTE', title: '"Ein Dokumentarfilm von Patricia Marchart und Judith Raunig"' },
  { from: 'jr2', to: 'ORF', title: 'Im Zentrum 20.09.2021' },
  { from: 'jr2', to: 'ServusTV', title: 'Talk im Hangar-7 19.09.2021' },

  { from: 'mh', to: 'PunktPRERADOVIC', title: 'Youtube Interview', length: 60 },
  { from: 'as', to: 'PunktPRERADOVIC', title: 'Youtube Interview: "Wir brauchen das schwedische Modell"', length: 60 },
  // https://www.acu-austria.at/immunitaet-vs-impfung-punkt-preradovic-mit-ddr-christian-fiala/
  { from: 'cf', to: 'PunktPRERADOVIC', title: 'Youtube Interview', length: 60 },
  { from: 'as', to: 'SW', title: 'Youtube Interview: "Wir brauchen das schwedische Modell"', length: 60 },

  { from: 'gw', to: 'DNEbM', title: 'Zitat OEGIT' },
  { from: 'gw', to: 'TT', title: 'Interview mit Anita Heubacher' },

  { from: 'as', to: 'EbMGL', title: 'Autor' },
  { from: 'as', to: 'DNEbM', title: 'Vorsitzender', value: 1.3 },
  { from: 'as', to: 'GBD', title: 'Unterzeichner' },
  { from: 'as', to: 'IWIMED', title: 'Beteiligung' },
  { from: 'as', to: 'LOCKDOWN-KINDERRECHTE', title: 'Credit' },
  { from: 'as', to: 'dieBasis', title: 'Bundestagsdirektkandidat für dieBasis' },
  { from: 'as', to: 'RP', title: 'Autor' },
  // Papa Talk https://www.servustv.com/aktuelles/v/aa-28t4bshw12111/ (inkl. Clemens Arvay)
  { from: 'as', to: 'ServusTV', title: 'Papa Talk 08.09.2021' },
  { from: 'cs', to: 'ServusTV', title: 'Papa Talk 08.09.2021' },
  { from: 'ca', to: 'ServusTV', title: 'Papa Talk 08.09.2021' },

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
  { from: 'pa', to: 'KIDS', title: 'Unterzeichnerin Offener Brief' },

  { from: 'fa', to: 'SW', title: 'Einladung Anders Tegnell', length: 30 },
  { from: 'hf', to: 'BMBWF' },
  { from: 'hf', to: 'OEVP' },
  { from: 'sk', to: 'OEVP' },
  { from: 'prw', to: 'SPOE' },

  { from: 'ah', to: 'TT', title: 'Chefredakteurin' },
  { from: 'ah', to: 'TirolerAdler', title: 'Moderation Tiroler Adler Forum' },
  { from: 'fa', to: 'TT', title: 'Interview Tiroler Tageszeitung' },
  { from: 'ms', to: 'TT', title: 'Interview Tiroler Tageszeitung' },

  { from: 'hs', to: 'TirolerAdler', title: 'Distance Talk' },

  // https://www.facebook.com/GrazPublicHealth/posts/5051991171493223
  { from: 'ms', to: 'hs', title: 'Martin Sprenger: „Streeck gefällt mir“' },

  { from: 'msNeos', to: 'TirolerAdler', title: 'Gastredner Tiroler Adler Forum' },
  { from: 'msNeos', to: 'NEOS', title: 'ehem. Politiker' },
  { from: 'msNeos', to: 'BMBWF', title: 'Berater' },
  { from: 'bmr', to: 'NEOS', title: 'Parteivorsitzende', length: 30, value: 1.3 },
  { from: 'zda', to: 'bmr', title: 'zitiert durch' },
  { from: 'NEOS', to: 'offeneschulen', title: 'Kampagne' },
  { from: 'NEOS', to: 'NEOSlab' },
  { from: 'zda', to: 'offeneschulen', title: 'zitiert durch' },
  { from: 'zda', to: 'pa', title: 'zitiert durch' },
  { from: 'zda', to: 'prw', title: 'zitiert durch' },

  { from: 'sb', to: 'fw', title: 'Interview' },
  { from: 'sb', to: 'ServusTV', title: 'Gast Corona Quartett' },
  { from: 'sb', to: 'dieBasis', title: 'Kandidatur Bundestagswahl' },

  { from: 'fw', to: 'ServusTV', title: 'Moderator Der Wegscheider', value: 1.3 },
  { from: 'pa', to: 'ServusTV', title: 'Gast Corona Quartett' },
  { from: 'mf', to: 'ServusTV', title: 'Moderator Corona Quartett' },

  { from: 'BMSGPK', to: 'AIHTA', title: 'Gesellschafter' },
  { from: 'cw', to: 'AIHTA', title: 'Geschäftsführerin der AIHTA GmbH', value: 1.3, length: 30 },
  { from: 'cw', to: 'DNEbM', title: 'Institutsmitgliedschaft', length: 30 },
  { from: 'AIHTA', to: 'DNEbM', title: 'Partner' },
  { from: 'SW', to: 'cw', title: 'Leider gibt es nur wenige mutige Länder, etwa Schweden, die einen anderen Weg wagen.' },

  { from: 'rk', to: 'eine-andere-freiheit', title: 'Interview' },
  { from: 'rk', to: 'SW', title: 'Länder wie Schweden gute Beispiele' },
  { from: 'rk', to: 'ÖGKJ', title: 'Generalsekretär' },
  // Faßmann-PK zu Tests an Schulen https://orf.at/stories/3196627/
  { from: 'rk', to: 'hf', title: 'Faßmann-PK zu Tests an Schulen (9.1.2021)' },
  { from: 'rk', to: 'ORF', title: 'ZiB 2 Interview' },

  { from: 'ks', to: 'eine-andere-freiheit', title: 'Interview' },
  { from: 'cf', to: 'eine-andere-freiheit', title: 'Credit' },

  { from: 'ug', to: 'eine-andere-freiheit', title: 'Interview' },
  { from: 'ug', to: 'ServusTV', title: 'diverse Talk-Show-Einladungen' },
  // https://www.diepresse.com/5987129/ein-bisschen-servus-tv-bei-im-zentrum-aber-mit-minister
  { from: 'ug', to: 'ORF', title: 'Im Zentrum 31.5.2021' },

  { from: 'cs', to: 'eine-andere-freiheit', title: 'Credit' },

  { from: 'ks', to: 'LOCKDOWN-KINDERRECHTE', title: 'Credit' },
  { from: 'cs', to: 'LOCKDOWN-KINDERRECHTE', title: 'Credit' },
  { from: 'cs', to: 'GBD', title: 'Unterzeichner' },
  { from: 'cs', to: 'RP', title: 'Schriftführer Stellvertreter' },
  // https://www.youtube.com/watch?v=Riad0QKltd4&t=139s
  { from: 'cs', to: 'kaisertv', title: 'Youtube Interview, 01.09.2021' },
  { from: 'gk', to: 'kaisertv', title: 'Gunnar Kaiser betreibt seit 2016 KaiserTV' },
  { from: 'gk', to: 'ZK', title: 'Vortrag' },
  { from: 'cfACTA', to: 'ZK', title: 'Vortrag' },
  // https://kurier.at/meinung/gastkommentar/alternativen-zu-lockdown-und-impfzwang/401407287
  { from: 'cfACTA', to: 'KURIER', title: 'Gastkommentar: Alternativen zu Lockdown und Impfzwang' },
  { from: 'cfACTA', to: 'CA', title: 'Co-Autor' },
  { from: 'cs', to: 'CA', title: 'Co-Autor' },
  { from: 'ug', to: 'CA', title: 'Co-Autorin' },
  { from: 'jr2', to: 'CA', title: 'Co-Autorin' },
  { from: 'cf', to: 'LOCKDOWN-KINDERRECHTE', title: '"in Cooperation mit"' },
  { from: 'ICI', to: 'LOCKDOWN-KINDERRECHTE', title: '"mit freundlicher Unterstützung"' },
  { from: 'ICI', to: 'ZK', title: 'Vortrag ICI-Mitglied Jesper Larsson Träff' },

  { from: 'cf', to: 'MFG', title: 'Parteiobmann Stv.' },
  { from: 'cf', to: 'ORF', title: 'Interview OE1 28.09.2021' },
  { from: 'cf', to: 'RP', title: 'Zitat Flyer "Respekt Jugend!"' },
  { from: 'gp', to: 'MFG', title: 'Finanzreferent' },
  { from: 'gp', to: 'ICI', title: 'Gelistet auf der "Über uns" Seite' },
  { from: 'gp', to: 'wochenblick', title: 'Interview 06.09.2021' },
  { from: 'FPOE', to: 'wochenblick', title: '2019: FPÖ-Politiker inserierten um 116.000 Euro in rechten Medien' },
  { from: 'MFG', to: 'ServusTV', title: 'Talk im Hangar-7, Joachim Aigner, Spitzenkandidat MFG, 23.09.2021' },
  { from: 'mb', to: 'MFG', title: 'Parteiobmann MFG' },

  // ACU
  { from: 'mb', to: 'ACU', title: 'Mitglied/Impressum Kontakt' },
  { from: 'mh', to: 'ACU', title: 'Mitglied' },
  { from: 'cf', to: 'ACU', title: 'Mitglied' },
  { from: 'RP', to: 'ACU', title: 'ACU-A, eine Initiative von AFA und Respekt.plus' },
  { from: 'AFA', to: 'ACU', title: 'ACU-A, eine Initiative von AFA und Respekt.plus' },

  // https://www.mwgfd.de/unsere-mitglieder/
  { from: 'sb', to: 'MWGFD', title: 'Vereinsvorsitzender' },
  { from: 'mh', to: 'MWGFD', title: 'Vereinsmitglied' },
  { from: 'cs', to: 'MWGFD', title: 'Vereinsmitglied' },
  { from: 'as', to: 'MWGFD', title: 'Vereinsmitglied' },

  // https://wirzeigenunsergesicht.org/
  // https://www.ots.at/presseaussendung/OTS_20210611_OTS0021/mehr-als-120-aerztinnen-kritisieren-covid-impfung-von-kindern
  { from: 'PPR', to: 'WZUG', title: 'APA OTS Aussendung 11.06.2021' },
  { from: 'as', to: 'WZUG', title: 'Video-Statement' },
  { from: 'cs', to: 'WZUG', title: 'Video-Statement' },
  { from: 'WZUG', to: 'wochenblick', title: 'Artikel 11.06.2021, 24.06.2021' },

  // Die Nadel ruft
  { from: 'rb', to: 'DNR2021', title: 'Vortrag' },
  { from: 'cs', to: 'DNR2021', title: 'Vortrag' },
  { from: 'gk', to: 'DNR2021', title: 'Vortrag' },
  { from: 'mh', to: 'DNR2021', title: 'Vortrag (angefragt)' },
  { from: 'ca', to: 'DNR2021', title: 'Vortrag' },

  // PATHOVACC 2021
  { from: 'fa', to: 'PATHOVACC2021', title: 'Vortrag' },
  { from: 'mb', to: 'PATHOVACC2021', title: 'Vortrag' },

  // Rechtsanwälte für Grundrechte - Anwälte für Aufklärung
  { from: 'mb', to: 'AFA', title: 'Kontakt/Impressum' },

  // Hannah-Arendt-Akademie e.V.
  // https://www.rubikon.news/artikel/akademie-der-denker
  { from: 'rubikon', to: 'HAA', title: 'Artikel "Akademie der Denker"' },
  { from: 'as', to: 'HAA', title: 'Fachbereich Medizin' },
  { from: 'ug', to: 'HAA', title: 'Fachbereich Politikwissenschaften' },
  { from: 'gk', to: 'HAA', title: 'Fachbereich Philosophie' },

  // #allesaufdentisch
  { from: 'ms', to: 'AADT', title: 'Interview' },
  // { from: 'schabus', to: 'AADT', title: 'Interview' },
  { from: 'rb', to: 'AADT', title: 'Interview' },
  { from: 'ug', to: 'AADT', title: 'Interview' },
  { from: 'mb', to: 'AADT', title: 'Interview' },
  { from: 'cs', to: 'AADT', title: 'Interview' },
  { from: 'rk', to: 'AADT', title: 'Interview' },
  { from: 'mh', to: 'AADT', title: 'Interview' },

  // Universität Wien - Ringvorlesung - Corona
  // https://ufind.univie.ac.at/de/course.html?lv=070262&semester=2021W
  { from: 'as', to: 'UNIVIERC', title: 'Vortragender' },
  { from: 'ms', to: 'UNIVIERC', title: 'Vortragender' },
  { from: 'cs', to: 'UNIVIERC', title: 'Vortragender' },
  { from: 'mm', to: 'UNIVIERC', title: 'Vortragender' },
  { from: 'mk', to: 'UNIVIERC', title: 'Vortragende' },
  { from: 'ak', to: 'UNIVIERC', title: 'Vortragende' },

  // promedia verlag
  { from: 'promedia', to: 'ZK', title: 'Promotion' },
  { from: 'promedia', to: 'VFKI', title: 'gegruendet durch Verlag' },
  { from: 'VFKI', to: 'keinzustand', title: 'durchfuehrende Initiative' },
  { from: 'promedia', to: 'keinzustand', title: 'Promotion' },
  { from: 'promedia', to: 'LOCKDOWN2020', title: 'Herausgebender Verlag' },
  { from: 'as', to: 'LOCKDOWN2020', title: 'Beitrag' },
  { from: 'hh', to: 'keinzustand', title: 'Initiator' },
  { from: 'mk', to: 'keinzustand', title: 'Beitrag' },
  { from: 'ak', to: 'keinzustand', title: 'Beitrag' },
  { from: 'hh', to: 'ZK', title: 'Moderation' },
  { from: 'hh', to: 'LOCKDOWN2020', title: 'Herausgeber' },
  { from: 'ak', to: 'LOCKDOWN2020', title: 'Textbeitrag' },
  // https://www.rubikon.news/autoren/hannes-hofbauer
  { from: 'hh', to: 'rubikon', title: 'diverse Artikel' },
  { from: 'mm', to: 'rubikon', title: 'diverse Artikel' },

  // Zukunftskonferenz 2021
  // https://web.archive.org/web/20210909192047/https://zukunftskonferenz.live/programm/
  { from: 'mm', to: 'ZK', title: 'Vortrag' },
  { from: 'mb', to: 'ZK', title: 'Vortrag: Rechtsstaat im Koma: Die überfällige Entpolitisierung der Justiz' },
  // https://www.o94.at/programm/sendung/id/1848330
  // https://respekt.plus/2021/08/13/zukunftskonferenz-weil-es-anders-geht/
  { from: 'RP', to: 'ZK', title: '"Gemeinschaftsprojekt" Zukunftskonferenz' },
  { from: 'ak', to: 'ZK', title: 'Vortrag' },

  // Wir koennen es besser,
  { from: 'ca', to: 'WKEB', title: 'Autor' },
  // https://www.amazon.de/Wir-k%C3%B6nnen-besser-Umweltzerst%C3%B6rung-Corona-Pandemie-ebook/dp/B088KPYTBF
  { from: 'cs', to: 'WKEB', title: 'Pressestimme' },
  { from: 'as', to: 'WKEB', title: 'Vorwort und Pressestimme' },
  // https://www.falter.at/zeitung/20201028/gelesen/_1c07226cbd
  { from: 'ms', to: 'WKEB', title: 'Buchbesprechung Falter' },
  { from: 'ms', to: 'FALTER', title: 'Buchbesprechung' },
  { from: 'FALTER', to: 'WKEB', title: 'Buchbesprechung' },

];

// global for node scripts
getRawNodes = () => rawNodes;
getRawEdges = () => rawEdges;
