export const brands = [
  {
    id: 'schindler',
    name: 'Schindler',
    logo: '/logos/schindler.svg',
    color: 'from-blue-500 to-blue-700',
    colorBadge: 'bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20',
    description: 'Documentation technique complète pour les ascenseurs Schindler',
    categories: [
      {
        name: 'Manoeuvres',
        docs: [
          { title: 'Default MICV', description: 'Commandes et fonctions terminal MICV', type: 'html', href: '/doc/schindler-micv', internal: true },
          { title: 'SX', description: 'Codes défauts manœuvre SX', type: 'html', href: '/doc/schindler-sx', internal: true },
          { title: 'IVXVF', description: 'Journal des erreurs manœuvre IVXVF (102 codes)', type: 'html', href: '/doc/schindler-ivxvf', internal: true },
          { title: 'Mic C', description: 'Manoeuvre Miconic C', type: 'html', href: '/docs/micC.html' },
          { title: 'Dyn 2', description: 'Manoeuvre Dynatron 2', type: 'html', href: '/docs/DYN2.html' },
          { title: 'Dynatron S', description: 'LEDs RDS1 et RDS2 Dynatron S', type: 'html', href: '/doc/schindler-dynatron-s', internal: true },
        ]
      },
      {
        name: 'Miconic',
        docs: [
          { title: 'Légende Miconic', description: 'Légendes et symboles Miconic', type: 'html', href: '/docs/miconic.html' },
          { title: 'Miconic B', description: 'Codes LED PE80 carte Miconic B', type: 'html', href: '/doc/schindler-miconic-b', internal: true },
          { title: 'Miconic BX', description: 'Codes erreurs élévateur MS225 (0300-0318)', type: 'html', href: '/doc/schindler-miconic-bx', internal: true },
        ]
      },
      {
        name: 'Légendes & Références',
        docs: [
          { title: 'Légende RC', description: 'Légende des cartes RC', type: 'html', href: '/docs/LegendeRC.html' },
          { title: 'Error Log 5500', description: 'Journal des erreurs 5500', type: 'pdf', href: '/docs/ERROR LOG 5500.pdf' },
          { title: 'BX Total', description: 'Documentation BX complète', type: 'pdf', href: '/docs/BX.pdf' },
          { title: 'Aide 5500', description: 'Documentation aide S5500', type: 'pdf', href: '/docs/S5500.pdf' },
          { title: 'Aide 3100 à 5300', description: 'Documentation aide 3100 à 5300', type: 'html', href: '/docs/3100 A 5300.html' },
        ]
      },
      {
        name: 'SMART',
        docs: [
          { title: 'Codes Erreurs SMART', description: 'Codes LED carte SMIC — SMART MRL 001/002/002DE', type: 'html', href: '/doc/schindler-smart-erreurs', internal: true },
          { title: 'Diagnostic Cabine SMART', description: 'Codes erreurs diagnostique avancé SMART 002', type: 'html', href: '/doc/schindler-smart-diagnostic', internal: true },
          { title: 'SMART 001/002', description: 'Manoeuvre SMART 001 et 002', type: 'html', href: '/docs/schindler/smart001002.html' },
          { title: 'SMART (Suite)', description: 'Documentation SMART complémentaire', type: 'html', href: '/docs/schindler/smart.html' },
        ]
      },
      {
        name: 'Eurolift',
        docs: [
          { title: 'Eurolift Complet', description: 'Documentation Eurolift complète (par Otis)', type: 'pdf', href: '/docs/Eurolift.doc.pdf' },
          { title: 'Affichage Eurolift', description: 'Codes affichage état SMLCD Eurolift', type: 'html', href: '/doc/schindler-eurolift', internal: true },
        ]
      },
    ]
  },
  {
    id: 'otis',
    name: 'Otis',
    logo: '/logos/otis.svg',
    color: 'from-red-500 to-red-700',
    colorBadge: 'bg-red-500/10 text-red-400 ring-1 ring-red-500/20',
    description: 'Documentation technique complète pour les ascenseurs Otis',
    categories: [
      {
        name: 'RCB & MCS',
        docs: [
          { title: 'RCB I', description: 'Modes opérationnel, motion, entrées et événements', type: 'html', href: '/doc/otis-rcb1', internal: true },
          { title: 'RCB II', description: 'Modes opérationnel, motion, entrées et événements', type: 'html', href: '/doc/otis-rcb2', internal: true },
          { title: 'MCS 220 - État LEDs', description: 'Vérification de l\'état des LEDs MCS 220', type: 'html', href: '/doc/otis-mcs220', internal: true },
          { title: 'MCS 311-321-411-413', description: 'Documentation MCS complète', type: 'pdf', href: '/docs/OTIS.pdf' },
          { title: 'Outil BABASS MCS', description: 'Outil de maintenance MCS', type: 'pdf', href: '/docs/Outil_MCS.pdf' },
          { title: 'Raccourci BABASS Otis', description: 'Raccourcis outil BABASS', type: 'pdf', href: '/docs/Carte RCB2 OU MCSS.pdf' },
        ]
      },
      {
        name: 'Manoeuvres',
        docs: [
          { title: 'OVF10', description: 'Codes événements OVF10', type: 'html', href: '/doc/otis-ovf10', internal: true },
          { title: 'MLI', description: 'Manoeuvre MLI', type: 'html', href: '/docs/otis/mli.html' },
          { title: 'MP1ME (NE/MS/NH300)', description: 'Voyants, Mode Motion et Opérationnel', type: 'html', href: '/doc/otis-mp1me', internal: true },
          { title: 'Élevonic 401', description: 'Documentation Élevonic 401', type: 'html', href: '/docs/otis/Elev401/E401_1.html' },
        ]
      },
      {
        name: 'Références',
        docs: [
          { title: 'Légende Otis', description: 'Noms et fonctions des composants Otis', type: 'html', href: '/doc/otis-legende', internal: true },
          { title: 'GEN2 CR1', description: 'Documentation GEN2 CR1', type: 'pdf', href: '/docs/GEN2 CR1.pdf' },
          { title: 'Schéma sécurité MCS', description: 'Schémas de sécurité des MCS', type: 'pdf', href: '/docs/Doc2.pdf' },
          { title: 'OPTIMA 4001', description: 'Gestion des menus OPTIMA 4001', type: 'html', href: '/docs/GESTION DES MENUS O4000 v05.html' },
        ]
      },
    ]
  },
  {
    id: 'autinor',
    name: 'Autinor',
    logo: '/logos/autinor.svg',
    color: 'from-emerald-500 to-emerald-700',
    colorBadge: 'bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20',
    description: 'Documentation technique pour les ascenseurs Autinor',
    categories: [
      {
        name: 'Défauts',
        docs: [
          { title: 'Défauts MLI', description: 'Codes défauts variateur MLI', type: 'html', href: '/doc/autinor-defmli', internal: true },
          { title: 'Défauts A190/200', description: 'Codes défauts A190 et A200 (01 à 80)', type: 'html', href: '/doc/autinor-a190200', internal: true },
          { title: 'Défauts A191', description: 'Codes défauts A191 (01 à 79)', type: 'html', href: '/doc/autinor-a191', internal: true },
          { title: 'Défauts A50', description: 'Codes défauts A50 (40 à 63)', type: 'html', href: '/doc/autinor-a50', internal: true },
          { title: 'Défauts H50', description: 'Codes défauts hydraulique H50', type: 'html', href: '/doc/autinor-h50', internal: true },
          { title: 'Défauts M-Lift', description: 'Codes défauts M-Lift', type: 'html', href: '/doc/autinor-mlift', internal: true },
        ]
      },
      {
        name: 'Paramètres & E/S',
        docs: [
          { title: 'Paramètres MLI', description: 'Liste des paramètres manœuvre MLI', type: 'html', href: '/doc/autinor-params-mli', internal: true },
          { title: 'Entrées/Sorties MLI', description: 'Table des entrées et sorties MLI', type: 'html', href: '/doc/autinor-es-mli', internal: true },
          { title: 'VEC01', description: 'Codes de défauts VF : Carte VEC01', type: 'html', href: '/doc/autinor-vec01', internal: true },
        ]
      },
    ]
  },
  {
    id: 'thyssenkrupp',
    name: 'ThyssenKrupp',
    logo: '/logos/thyssen.svg',
    color: 'from-purple-500 to-purple-700',
    colorBadge: 'bg-purple-500/10 text-purple-400 ring-1 ring-purple-500/20',
    description: 'Documentation technique pour les ascenseurs ThyssenKrupp',
    categories: [
      {
        name: 'Manoeuvres',
        docs: [
          { title: 'API C', description: 'Codes défauts variateur API C', type: 'html', href: '/doc/thyssen-apic', internal: true },
          { title: 'CPI', description: 'Codes défauts variateur CPI', type: 'html', href: '/doc/thyssen-cpi', internal: true },
          { title: 'D6C', description: 'Paramètres opérateur portes D6C (P1-P14)', type: 'html', href: '/doc/thyssen-d6c', internal: true },
          { title: 'Tableau de Bord LINK', description: 'Principe de réglage et paramétrage', type: 'html', href: '/doc/thyssen-link', internal: true },
          { title: 'D4/6 V2', description: 'Réglages potentiomètres opérateur portes', type: 'html', href: '/doc/thyssen-d46', internal: true },
        ]
      },
      {
        name: 'Variateurs',
        docs: [
          { title: 'VF16K KEB', description: 'Documentation variateur VF16K KEB', type: 'pdf', href: '/docs/KEB VF16K.pdf' },
          { title: 'ThyssenKrupp MCI', description: 'Documentation MCI', type: 'pdf', href: '/docs/THYSSENKRUPP-MCI.pdf' },
        ]
      },
    ]
  },
  {
    id: 'kone',
    name: 'Kone',
    logo: '/logos/kone.svg',
    color: 'from-sky-500 to-sky-700',
    colorBadge: 'bg-sky-500/10 text-sky-400 ring-1 ring-sky-500/20',
    description: 'Documentation technique pour les ascenseurs Kone',
    categories: [
      {
        name: 'Manoeuvres',
        docs: [
          { title: 'Kone V3F10', description: 'Erreurs temporaires et permanentes V3F10', type: 'html', href: '/doc/kone-v3f10', internal: true },
          { title: 'EPB-1 Servoconfort', description: 'Codes défauts display EPB-1 (= + lettre)', type: 'html', href: '/doc/kone-epb1', internal: true },
          { title: 'EPB-2 Servoconfort', description: 'Codes défauts display EPB-2 (numéro + code lettre)', type: 'html', href: '/doc/kone-epb2', internal: true },
          { title: 'Défauts Resolve LCE', description: 'Défauts Resolve LCE', type: 'html', href: '/doc/kone-lce', internal: true },
        ]
      },
      {
        name: 'Variateurs & Portes',
        docs: [
          { title: 'ATV58', description: 'Codes défauts variateur ATV58', type: 'html', href: '/doc/kone-atv58', internal: true },
          { title: 'TMS600', description: 'Défauts et fonctions variateur TMS600', type: 'html', href: '/doc/kone-tms600', internal: true },
          { title: 'TMS600c', description: 'LEDs de signalisation TMS600c', type: 'html', href: '/doc/kone-tms600c', internal: true },
          { title: 'Display Board', description: 'LEDs et codes 7 segments carte affichage', type: 'html', href: '/doc/kone-display', internal: true },
        ]
      },
    ]
  },
  {
    id: 'autres',
    name: 'Autres Marques',
    logo: '/logos/other.svg',
    color: 'from-slate-500 to-slate-700',
    colorBadge: 'bg-slate-500/10 text-slate-400 ring-1 ring-slate-500/20',
    description: 'Documentation pour CG2A, Sodimas, Wegam, Amphitech, Sanei et autres',
    categories: [
      {
        name: 'CG2A',
        docs: [
          { title: 'CG2A Micro2000', description: 'Codes défauts armoire CG2A Micro2000', type: 'html', href: '/doc/cg2a-micro2000', internal: true },
          { title: 'CG2A Turbo 3000', description: 'Codes défauts variateur Turbo 3000', type: 'html', href: '/doc/cg2a-turbo3000', internal: true },
          { title: 'CG2A Turbo 3000B', description: 'Codes et menus Turbo 3000 V41/V42/V43', type: 'html', href: '/doc/cg2a-turbo3000b', internal: true },
        ]
      },
      {
        name: 'Portes',
        docs: [
          { title: 'Selcom RCF 1', description: 'Programmation opérateur portes RCF 1', type: 'html', href: '/doc/selcom-rcf1', internal: true },
        ]
      },
      {
        name: 'Siminor',
        docs: [
          { title: 'Défauts Siminor', description: 'Codes défauts LEDs V1/V2/V3 Siminor', type: 'html', href: '/doc/siminor-defauts', internal: true },
          { title: 'Paramètres Resolve', description: 'Paramètres Resolve Siminor', type: 'html', href: '/docs/parametre_resolve.html' },
        ]
      },
      {
        name: 'Hydraulique',
        docs: [
          { title: 'Blain EV10/EV100', description: 'Électrovannes et réglages', type: 'html', href: '/doc/hydro-blain', internal: true },
          { title: 'GMV 3010 EN', description: 'Réglages et composants centrale hydraulique', type: 'html', href: '/doc/hydro-gmv', internal: true },
          { title: 'Mode Programme', description: 'Mode programme hydraulique', type: 'html', href: '/docs/MODE PROGRAMME.html' },
        ]
      },
      {
        name: 'Amphitech / Wegam',
        docs: [
          { title: 'Amphitech PTU', description: 'Programmation PTU 61 à 63', type: 'html', href: '/doc/amphitech-ptu', internal: true },
          { title: 'Wegam MPSA', description: 'Présentation carte et LEDs', type: 'html', href: '/docs/Wegam/mpsa.html' },
        ]
      },
      {
        name: 'Divers',
        docs: [
          { title: 'Défauts OLEOMATE', description: 'Codes défauts armoire Oléomate', type: 'html', href: '/doc/divers-oleomate', internal: true },
          { title: 'Défauts ASCIMATE', description: 'Codes défauts armoire Ascimate', type: 'html', href: '/doc/divers-ascimate', internal: true },
          { title: 'Code Couleurs Résistances', description: 'Table des codes couleurs résistances', type: 'html', href: '/docs/DIVERS/resistance.html' },
          { title: 'Lexique Schindler/Otis', description: 'Lexique termes techniques', type: 'html', href: '/docs/lexique.html' },
          { title: 'État Ascenseur IHM', description: 'État ascenseur sur IHM', type: 'doc', href: '/docs/Etat de l ascenseur.doc' },
          { title: 'Schémas Armoire', description: 'Schémas armoire électrique', type: 'pdf', href: '/docs/Schemas_armoire.pdf' },
          { title: 'Variables et Paramètres', description: 'Variables et paramètres généraux', type: 'pdf', href: '/docs/Variables et Parametres.pdf' },
          { title: 'Paramètres Terminal', description: 'Paramètres terminal de maintenance', type: 'pdf', href: '/docs/Parametres Terminal maintenance.pdf' },
        ]
      },
      {
        name: 'Identification Matériel',
        docs: [
          { title: 'Identification Freins', description: 'Identification des électro-freins', type: 'html', href: '/docs/Freins/identfrein.html' },
          { title: 'Identification Serrures', description: 'Identification des serrures', type: 'html', href: '/docs/serrures/identserrures.html' },
        ]
      },
    ]
  },
  {
    id: 'mea',
    name: 'MEA',
    logo: '/logos/mea.svg',
    color: 'from-orange-500 to-orange-700',
    colorBadge: 'bg-orange-500/10 text-orange-400 ring-1 ring-orange-500/20',
    description: 'Documentation technique pour les cartes manoeuvre MEA (Sharp)',
    categories: [
      {
        name: 'Manoeuvres',
        docs: [
          { title: 'MEA NG01', description: 'Affichage LED carte manoeuvre NG01', type: 'html', href: '/doc/mea-ng01', internal: true },
          { title: 'MEA NG02', description: 'Codes défauts display 7 segments NG02', type: 'html', href: '/doc/mea-ng02', internal: true },
          { title: 'MEA NG12', description: 'Codes défauts display 7 segments NG12 (avec détails)', type: 'html', href: '/doc/mea-ng12', internal: true },
          { title: 'Mode Programme NG02', description: 'Mode programmation NG02', type: 'html', href: '/docs/MODE PROG_ng02.html' },
        ]
      },
      {
        name: 'Manuels',
        docs: [
          { title: 'Manuel EVOLUTION SECA', description: 'Manuel Evolution SECA v2-24', type: 'pdf', href: '/docs/Manuel_EVOLUTION_SECA_v2-24.pdf' },
          { title: 'Résolution de Pannes', description: 'Manuel résolution de pannes', type: 'pdf', href: '/docs/Manuel Resolution de Pannes.pdf' },
          { title: 'Résolution Pannes ARCA', description: 'Manuel résolution pannes ARCA', type: 'pdf', href: '/docs/Resolution de Pannes ARCA.pdf' },
        ]
      },
    ]
  },
];

export const stats = {
  totalDocs: 90,
  brands: 8,
  categories: 27,
  pdfDocs: 25,
};
