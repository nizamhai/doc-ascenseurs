export const docs = {

  // ===================== AUTINOR =====================

  'autinor-a191': {
    slug: 'autinor-a191',
    brandId: 'autinor',
    brand: 'Autinor',
    title: 'Défauts A-191',
    subtitle: 'Codes défauts 01 à 79',
    color: 'emerald',
    type: 'fault-codes',
    sections: [
      {
        title: 'Défauts 01 à 42',
        entries: [
          { code: '01', label: 'Défaut de masse', desc: 'Contrôle 24/12/5v + équilibre 0v/+24 avec masse' },
          { code: '02', label: 'Temporisation PV' },
          { code: '03', label: "Temporisation d'inspection" },
          { code: '04', label: 'Coupure avant le "6"' },
          { code: '05', label: 'Thermique de ventilation (THV)' },
          { code: '06', label: 'Absence répétitive du "10" au recalage' },
          { code: '08', label: 'Suspension de départ (SUSD)' },
          { code: '09', label: 'Sonde thermique ou thermocontact de sécurité (STH)' },
          { code: '10', label: 'Inversion du sens de rotation', desc: 'Détection par capteur' },
          { code: '11', label: 'Impossibilité de lecture du capteur ou fusion fusible Fu3, Fu4' },
          { code: '12', label: "Non décollage d'un contacteur à l'arrivée" },
          { code: '13', label: 'Contacteur GV non décollé au passage PV' },
          { code: '14', label: 'Contacteur PV ne colle pas lors de sa commande' },
          { code: '15', label: 'Non collage du contacteur MO ou DE ou fusion du fusible Fu9 (24R)' },
          { code: '16', label: 'Fin de course haut inspection actionné (FREV)' },
          { code: '17', label: 'Manque ou inversion de phase' },
          { code: '18', label: "Recalage impossible par suite d'information erronée du capteur" },
          { code: '19', label: 'Coupure du "8" en marche' },
          { code: '21', label: 'Absence du "10" (portes palières battantes)' },
          { code: '22', label: 'Intégrateur de glissement' },
          { code: '23', label: 'Coupure du "6" en marche ou shunt 0v/CS en paroi lisse' },
          { code: '26', label: 'Coupure anormalement longue du faisceau CAA du capteur' },
          { code: '27', label: 'Coupure anormalement longue du faisceau CAB du capteur' },
          { code: '28', label: 'Un des contacteurs non décollé lors de la commande de démarrage' },
          { code: '29', label: 'Contacteur GV ne colle pas à sa commande' },
          { code: '30', label: 'Contacteur PV est collé lors de la commande de GV' },
          { code: '31', label: 'Défaut de surcharge (SU)' },
          { code: '36', label: 'Niv. principal supérieur au niv. le plus haut', desc: 'Problème de programmation' },
          { code: '37', label: 'Programmation du niv. supérieur plus grande que 23 ou 11 en niv. sélectifs' },
          { code: '38', label: 'Niv. recalage, rappel auto ou MHS plus élevé que le niv. supérieur' },
          { code: '39', label: 'Tension secteur trop faible', desc: 'Contrôlé à partir du 24v=' },
          { code: '40', label: 'Tension secteur trop élevée', desc: 'Contrôlé à partir du 24v=' },
          { code: '41', label: '"8" coupé, portes auto fermées avec orientation départ' },
          { code: '42', label: "Prog. erroné du nombre d'opérateur de porte (> à 2) ou EEROM HS" },
        ]
      },
      {
        title: 'Défauts 43 à 79',
        entries: [
          { code: '43', label: 'Fin de course nécessaire sur opérateur cabine' },
          { code: '44', label: 'Absence du "10" (opérateur 1 ou 2)' },
          { code: '46', label: "Blocage de porte en ouverture opérateur n°1" },
          { code: '47', label: "Blocage de porte en ouverture opérateur n°2" },
          { code: '48', label: "Blocage de porte en fermeture opérateur n°1" },
          { code: '49', label: "Blocage de porte en fermeture opérateur n°2" },
          { code: '50', label: 'Fonction MHS enclenchée (Mise hors service)' },
          { code: '51', label: 'Fonction PRIC enclenchée (Priorité cabine)' },
          { code: '52', label: 'Coupure du "10" en marche' },
          { code: '53', label: 'Fonction pompier en cours' },
          { code: '54', label: 'Fonction Non Stop ou Complet en cours (NS)' },
          { code: '55', label: 'Non décollage du contacteur ISO' },
          { code: '56', label: 'Non collage du contacteur ISO lors de sa commande' },
          { code: '57', label: "Dépassement de la zone d'iso. lors de mouvements en isonivelage" },
          { code: '58', label: "Pompage ISO : nombre de coups d'iso. supérieur au nbre. autorisé" },
          { code: '59', label: "Durée du mouvement en ISO supérieur à la temporisation d'ISO" },
          { code: '60', label: 'Altitude maximum programmée trop élevée' },
          { code: '61', label: 'Erreur de programmation des niveaux' },
          { code: '62', label: 'Défaut du capteur O03' },
          { code: '63', label: 'Cabine simultanément présente en haut et en bas (EM & ED ouverts) ou capteur O03 non alimenté' },
          { code: '64', label: "Manoeuvre de rappel ET d'inspection enclenchées" },
          { code: '65', label: 'Défaut définitif de régulation' },
          { code: '66', label: 'Défaut provisoire de régulation' },
          { code: '69', label: "Mise à l'arrêt au niv. le plus bas après coupure du hors course haut de sécurité", desc: 'Version hyd. H191' },
          { code: '70', label: 'Taquets non rétractés lors de leur commande' },
          { code: '71', label: 'Taquets relâchés en marche' },
          { code: '72', label: "Taquets non relâchés à l'arrêt" },
          { code: '73', label: "Défaut de niveau d'huile de la cuve" },
          { code: '74', label: "Niv. d'huile minimum dans la cuve ou fusion fusible Fu9" },
          { code: '75', label: 'Non collage contacteur étoile ou fusible Fu9 hs ou coupure contact surpression sur distributeur' },
          { code: '76', label: 'Non collage contacteur triangle ou fusion fusible Fu9 ou coupure contact surpression sur distributeur' },
          { code: '77', label: 'Non collage contacteur ligne ou fusion fusible Fu9 ou coupure contact surpression sur distributeur' },
          { code: '78', label: 'Non décollage du contacteur étoile ou triangle' },
          { code: '79', label: "Température de l'huile dans la cuve trop élevée" },
        ]
      }
    ]
  },

  'autinor-a190200': {
    slug: 'autinor-a190200',
    brandId: 'autinor',
    brand: 'Autinor',
    title: 'Défauts A-190 / A-200',
    subtitle: 'Codes défauts 01 à 80',
    color: 'emerald',
    type: 'fault-codes',
    sections: [
      {
        title: 'Défauts 01 à 40',
        entries: [
          { code: '01', label: 'Défaut de masse' },
          { code: '02', label: 'Intégrateur de glissement' },
          { code: '03', label: 'Temporisation de petite vitesse' },
          { code: '04', label: 'Temporisation de protection de mouvement en révision' },
          { code: '05', label: '"6" coupé à l\'arrêt' },
          { code: '06', label: 'Détection de surcharge' },
          { code: '07', label: 'SCMT mauvais verrouillage' },
          { code: '08', label: 'SCMT mauvais verrouillage sur 1er départ avant recalage' },
          { code: '09', label: "Appareil n'arrive pas à recaler, vérifier écrans" },
          { code: '10', label: 'Non départ sur absence du "8" après recalage' },
          { code: '11', label: 'Inversion simultanée des faisceaux capteur ou fusion du fusible 24v' },
          { code: '12', label: 'Non décollage du relais descente' },
          { code: '13', label: 'Non décollage du relais montée' },
          { code: '14', label: 'Non décollage du relais GV' },
          { code: '15', label: 'Non décollage du relais PV' },
          { code: '16', label: 'Non départ absence du "8" pendant recalage' },
          { code: '18', label: 'Non collage du relais DE' },
          { code: '19', label: 'Non collage du relais MO' },
          { code: '20', label: 'Non collage du relais GV' },
          { code: '21', label: 'Non collage du relais PV' },
          { code: '22', label: "Contact ED coupé et cabine au dessus de l'écran codé" },
          { code: '24', label: 'Non décollage du contacteur DE' },
          { code: '25', label: 'Non décollage du contacteur MO' },
          { code: '26', label: 'Non décollage du contacteur GV' },
          { code: '27', label: 'Non décollage du contacteur PV' },
          { code: '28', label: 'Défaut du faisceau A (CAA) longue coupure en marche' },
          { code: '29', label: 'Défaut du faisceau B (CAB) longue coupure en marche' },
          { code: '30', label: 'Non collage du contacteur DE' },
          { code: '31', label: 'Non collage du contacteur MO' },
          { code: '32', label: 'Non collage du contacteur GV' },
          { code: '33', label: 'Non collage du contacteur PV' },
          { code: '34', label: 'Absence de la PROM options' },
          { code: '35', label: 'Défaut interne, veuillez contacter notre SAV' },
          { code: '36', label: 'Court-circuit du +24v des quittances d\'ordres et le 0v' },
          { code: '37', label: "Blocage de porte en ouverture opérateur n°1" },
          { code: '38', label: "Blocage de porte en fermeture opérateur n°1" },
          { code: '39', label: "Non décollage du relais d'ouverture n°1 (OU1)" },
          { code: '40', label: "Non décollage du relais de fermeture n°1 (FE1)" },
        ],
        note: 'SCMT = Sécurité de came mobile temporisée'
      },
      {
        title: 'Défauts 41 à 80',
        entries: [
          { code: '41', label: "Absence de tension d'injection du moteur de porte n°1", desc: 'Possible que si carte alpha 61/68' },
          { code: '43', label: "Blocage de porte en ouverture opérateur n°2" },
          { code: '44', label: "Blocage de porte en fermeture opérateur n°2" },
          { code: '45', label: "Non décollage du relais d'ouverture n°2 (OU2)" },
          { code: '46', label: "Non décollage du relais de fermeture n°2 (FE2)" },
          { code: '47', label: "Absence de tension d'injection du moteur de porte n°2", desc: 'Possible que si carte alpha 61/68' },
          { code: '49', label: 'Erreur de raccordement sur opérateur de porte' },
          { code: '50', label: 'Absence de la mémoire programme 3 ou version ne correspond pas à la version du programme principal' },
          { code: '51', label: "Manque carte de porte alors que l'option est prévue ou carte 1er service raccordée alors qu'il y a 2 services" },
          { code: '52', label: "1 option codée dans la PROM option alors qu'elle n'est pas dans la mémoire programme 3" },
          { code: '53', label: 'Arrêt sur FDC révision (réserve haute)' },
          { code: '54', label: "Défaut d'arrêt anticonformatique" },
          { code: '55', label: 'Coupure du "6" en marche non mémorisée' },
          { code: '56', label: 'Coupure du "6" en marche mémorisée (SP)' },
          { code: '57', label: 'Coupure du "8" en marche' },
          { code: '58', label: 'Coupure du "10" en marche' },
          { code: '59', label: "Non décollage du relais SH6", desc: "Shuntage du bp arrêt en cabine pour l'option service pompier" },
          { code: '60', label: 'Non décollage du relais SH8', desc: "Shuntage des sécurités de porte en cas d'iso. ou d'ouv. av. arrêt" },
          { code: '61', label: 'Non collage du relais SH6' },
          { code: '62', label: 'Non collage du relais SH8' },
          { code: '63', label: 'Non élimination des condos. en monophasé' },
          { code: '64', label: "Court-circuit d'une ampoule de quittance d'ordre" },
          { code: '65', label: 'Manque de phase' },
          { code: '66', label: 'Carte sur équipement non conforme' },
          { code: '67', label: 'Défaut de thermique de ventilation' },
          { code: '68', label: 'Défaut de sonde thermique' },
          { code: '69', label: "Mode de fonctionnement inconnu pour l'opérateur n°1" },
          { code: '70', label: "Mode de fonctionnement inconnu pour l'opérateur n°2" },
          { code: '71', label: "Mode de fonctionnement inconnu pour l'opérateur aux. n°1" },
          { code: '72', label: "Mode de fonctionnement inconnu pour l'opérateur aux. n°2" },
          { code: '73', label: 'Niveau supérieur nul ou supérieur à 23 niv. dans la PROM option' },
          { code: '74', label: 'Dans la PROM option erreur de programme du bit ISO' },
          { code: '75', label: 'Absence de la carte ISO alors que nécessaire' },
          { code: '76', label: 'Présence de carte ISO alors que inutile' },
          { code: '77', label: 'Disparition du faisceau A simultanément avec apparition du faisceau B' },
          { code: '78', label: 'Apparition du faisceau A simultanément avec apparition du faisceau B' },
          { code: '79', label: 'Défaillance du circuit des sécurités de la carte ISO' },
          { code: '80', label: "Carte micro en place n'a pas assez de mémoire RAM pour le programme installé", desc: 'Veuillez contacter notre SAV' },
        ]
      }
    ]
  },

  'autinor-vec01': {
    slug: 'autinor-vec01',
    brandId: 'autinor',
    brand: 'Autinor',
    title: 'Codes de défauts VF : Carte VEC01',
    subtitle: 'Pile de défauts adresses 28 à 31',
    color: 'emerald',
    type: 'fault-codes',
    sections: [
      {
        title: 'Codes défauts VEC01',
        entries: [
          { code: '00', label: 'Fonctionnement correct' },
          { code: '10', label: 'Inversion du sens de rotation', desc: 'Détection par capteur' },
          { code: '11', label: "Changement d'état simultané des signaux a et b" },
          { code: '22', label: 'Perte de la référence v2 sans retour lecture capteur' },
          { code: '52', label: 'Coupure du « 10 » en marche' },
          { code: '62', label: 'Défaut capteur O03' },
          { code: '77', label: 'Non collage du contacteur L' },
          { code: '78', label: 'Non collage du contacteur S' },
          { code: '80', label: 'Absence de tension condensateur (tc)' },
          { code: '81', label: 'Courant moyen supérieur à la puissance autorisée' },
          { code: '82', label: 'Vitesse réelle supérieure de 15% à la vitesse nominale Vn programmée' },
          { code: '83', label: "Vitesse d'inspection supérieure à 0,60 m/s" },
          { code: '84', label: "Vitesse d'isonivelage supérieure à 0,30 m/s" },
          { code: '85', label: 'Tension de récupération supérieure à 650 volt' },
          { code: '86', label: 'Absence de tension lors de la commande de mouvement' },
          { code: '87', label: 'Non décollage du contacteur « ligne »' },
          { code: '88', label: 'Commande « montée » et « descente » simultanée' },
          { code: '89', label: 'Température du radiateur supérieure à 40°' },
          { code: '90', label: 'Courant onduleur supérieur au courant max.' },
          { code: '91', label: 'Défaut du transistor N°1 du haut' },
          { code: '92', label: 'Défaut du transistor N°2 du haut' },
          { code: '93', label: 'Défaut du transistor N°1 du milieu' },
          { code: '94', label: 'Défaut du transistor N°2 du milieu' },
          { code: '95', label: 'Défaut du transistor N°1 du bas' },
          { code: '96', label: 'Défaut du transistor N°2 du bas' },
          { code: '97', label: 'Défaut du transistor de récupération' },
          { code: '98', label: 'Pente (Pt) non adaptée à Vn' },
          { code: '99', label: "Défaut d'écriture dans l'E²rom" },
          { code: '100', label: 'Intensité moteur supérieure à l\'intensité maximale' },
          { code: '101', label: 'Défaut codeur incrémental' },
          { code: '102', label: 'Vitesse Codeur +/-15% Consigne' },
          { code: '103', label: "Défaut armoire en approche directe" },
          { code: '104', label: 'Défaut de raccordement du capteur de courant' },
        ]
      }
    ]
  },

  // ===================== OTIS =====================

  'otis-ovf10': {
    slug: 'otis-ovf10',
    brandId: 'otis',
    brand: 'Otis',
    title: 'OVF 10',
    subtitle: 'Codes événements',
    color: 'red',
    type: 'fault-codes',
    sections: [
      {
        title: 'Système (SYS)',
        entries: [
          { code: '0', label: 'SYS:WARMSTART fatal', desc: "Reset programme sans coupure d'alimentation" },
          { code: '1', label: 'SYS:Shut Down fatal', desc: "Affiche le nombre de pannes. En tapant [BLEU]-[DOWN] on peut visualiser le défaut cause de la panne" },
          { code: '2', label: 'SYS:DDP fatal', desc: 'Le drive a détecté un DDP' },
          { code: '3', label: 'SYS:E2P missing fatal', desc: "Il n'y a pas d'EEPROM sur la carte DCB" },
          { code: '4', label: 'SYS:E2P written', desc: 'Des paramètres ont été modifiés depuis la dernière mise sous tension' },
          { code: '5', label: 'SYS:E2P Default', desc: 'Tous les paramètres ont été programmés à leur valeur par défaut' },
          { code: '6', label: 'SYS:E2P UnvPara', desc: "Certains paramètres dans l'EEPROM sont hors limite ou en conflit avec d'autres" },
          { code: '7', label: 'SYS:Inputs lost', desc: 'Le drive ne voit plus les entrées U, D ou T' },
          { code: '9', label: 'SYS:Power Fail', desc: "Tension d'alimentation secteur trop basse" },
          { code: '10', label: 'SYS:(<)24V Supply fatal', desc: "Pas d'alimentation 24 Volts (fatal à 3 essais)" },
          { code: '11', label: 'SYS:not all errors', desc: 'Uniquement visibles dans les erreurs sauvegardées [M]-[2]-[2]-[2]' },
        ]
      },
      {
        title: 'Onduleur (INV)',
        entries: [
          { code: '21', label: 'INV:(>)Volt DC', desc: 'Surtension dans le circuit continu aux bornes des condensateurs dans le rack' },
          { code: '23', label: 'INV:(<)Volt DC', desc: 'Tension dans le circuit continu trop basse' },
          { code: '25', label: 'INV:> Curr IGBT', desc: 'Surintensité dans les transistors IGBT' },
          { code: '26', label: 'INV:Mod stopped', desc: 'Défaut dans le contrôle de la fréquence' },
          { code: '27', label: 'INV:DCLI Offset', desc: 'Pour engineering' },
          { code: '28', label: 'INV:DCLI Not 0', desc: 'Pour engineering' },
        ]
      },
      {
        title: 'Contrôle Machine (MC)',
        entries: [
          { code: '37', label: 'MC:EMERGENCY ST', desc: "Arrêt d'urgence provoqué par une ouverture de la chaîne de sécurité avant l'arrêt normal" },
          { code: '38', label: 'MC:T with INS', desc: "Pendant une course en inspection l'entrée T est activée" },
          { code: '39', label: 'MC:both U & D', desc: 'Les entrées U et D sont actives en même temps' },
          { code: '40', label: 'MC:T w/o UD', desc: "L'entrée T est activée alors que U ou D ne sont pas actifs" },
          { code: '41', label: 'MC:U/D changed', desc: "Pendant une course les entrées U et D ont changé d'état en même temps" },
          { code: '42', label: 'MC:UD not drop', desc: "Les entrées U ou D restent actives après l'arrêt normal dans DZ" },
          { code: '43', label: 'MC:/OP -> no T', desc: "L'entrée T doit être activée quand OP retombe. Sinon => défaut" },
          { code: '44', label: 'MC:OP -> no /T', desc: "L'entrée T doit être désactivée quand OP recolle. Sinon => défaut" },
          { code: '45', label: 'MC:U_DC notOFF', desc: 'Le drive est encore sous tension après que U et D soient retombés' },
        ]
      },
      {
        title: 'Système de Nivellement (MLS)',
        entries: [
          { code: '51', label: 'MLS:< ACC DIST', desc: "La distance d'accélération est trop courte pour la valeur calculée" },
          { code: '52', label: 'MLS:< Dec Dist', desc: 'La distance de décélération est trop courte' },
          { code: '53', label: 'MLS:Dec by LS', desc: 'La décélération a été activée par le switch LS' },
          { code: '54', label: 'MLS:Tdec expird', desc: 'Le contrôleur a désactivé trop tard la commande de T' },
          { code: '55', label: 'MLS:(<)Creep Time', desc: 'La vitesse creep speed est trop courte (< à 0,5 s.)' },
          { code: '56', label: 'MLS:(<)Const Time', desc: 'La période de creep speed constante est trop courte' },
          { code: '57', label: 'MLS:No 2nd LV', desc: "L'OVF10 ne détecte pas le deuxième LV" },
          { code: '58', label: 'MLS:LV sequence', desc: "L'OVF10 ne détecte pas 1LV et 2LV dans le bon ordre" },
          { code: '59', label: 'MLS:LV Lost Idl', desc: 'Perte des informations LV1 et LV2 alors que la cabine est arrêtée dans le DZ' },
          { code: '60', label: 'MLS:LV Missed', desc: "L'OVF10 ne détecte pas les LV dans le temps précalculé" },
          { code: '61', label: 'MLS:LV Lost', desc: "L'OVF10 a perdu les informations LV alors qu'il avait détecté le DZ" },
          { code: '62', label: 'MLS:LV Cnt Err', desc: "L'OVF10 a détecté moins de Door Zone que de niveaux programmés" },
          { code: '63', label: 'MLS:LV Trig Err', desc: "La mesure de la vitesse pendant la creep speed n'a pas pu être faite" },
          { code: '64', label: 'MLS:LV w. Noise', desc: 'Problème de détection des LV. Les signaux peuvent être parasités' },
          { code: '65', label: 'MLS:Halt wo SWI', desc: "Information pour l'engineering" },
          { code: '66', label: 'MLS:invld . CrSp', desc: 'La vitesse de creep speed ne correspond pas à la valeur programmée dans "CRE SPE"' },
          { code: '69', label: 'MLS:LV failures', desc: 'Trop d\'évènements montrant des problèmes de détection des LV' },
        ]
      },
      {
        title: 'Drive (DRV)',
        entries: [
          { code: '78', label: 'DRV:OverLd > 0,5s', desc: 'Surintensité sur le moteur détectée pendant plus de 0,5 s' },
          { code: '79', label: 'DRV:No Cal Init', desc: "La calibration automatique ne s'est pas déclenchée" },
          { code: '80', label: 'DRV:Failed Cal', desc: 'Un autre défaut est survenu pendant la routine de calibration automatique' },
          { code: '81', label: 'DRV:Out of Cal', desc: "Le système n'arrive plus à compenser les variations de charges" },
          { code: '82', label: 'DRV:Volt Boost', desc: 'Ce défaut se produit si la creep speed est trop longue' },
          { code: '83', label: 'DRV: > Reduction', desc: 'Surintensité moteur trop importante, le système ne peut pas réduire plus son profil' },
        ]
      }
    ]
  },

  // ===================== THYSSENKRUPP =====================

  'thyssen-apic': {
    slug: 'thyssen-apic',
    brandId: 'thyssenkrupp',
    brand: 'ThyssenKrupp',
    title: 'Code Défaut API C',
    subtitle: 'Variateur API C',
    color: 'purple',
    type: 'fault-codes',
    sections: [
      {
        title: 'Codes défauts API C',
        entries: [
          { code: '0', label: "Pas d'entrée", desc: "Pas d'erreur" },
          { code: '1', label: 'Marche', desc: "L'API C est remise en route" },
          { code: '2', label: 'Erreur Watchdog', desc: 'Temps Watchdog dépassé' },
          { code: '3', label: 'NVRAM', desc: "Paramètres usine / Heures de fonctionnement à 0 / Effacement de la pile de défauts" },
          { code: '5', label: 'NVRAM défectueuse', desc: 'Défaut checksum / Format donnée EPROM/NVRAM' },
          { code: '6', label: 'Température Radiateur', desc: 'Surchauffe Radiateur' },
          { code: '7', label: 'Température du moteur', desc: 'Surchauffe Moteur' },
          { code: '8', label: 'Sous-tension U_ZK', desc: 'Tension continue ZK écroulée' },
          { code: '9', label: 'Réseau faible', desc: 'Tension réseau est trop faible' },
          { code: '10', label: 'Chute de tension CC', desc: 'Chute de tension ZK' },
          { code: '11', label: 'Problème de ZK', desc: 'Problème tension continue à la charge' },
          { code: '12', label: 'Surtension de ZK', desc: 'Tension réseau est trop élevée' },
          { code: '13', label: 'API C prêt' },
          { code: '14', label: 'Court-circuit', desc: 'Défaut dans le module de puissance' },
          { code: '15', label: 'Surtension réseau', desc: 'La tension réseau est trop haute' },
          { code: '16', label: "Erreur d'encodeur", desc: 'Problème sur le générateur' },
          { code: '17', label: "Défaut d'alimentation", desc: "Défaut dans une ou plusieurs tensions: +15V, -15V, +5V, +15V TR, U_ZK" },
          { code: '18', label: 'Contrôle connecteur', desc: 'Un connecteur est débranché' },
          { code: '19', label: 'Défaut réseau', desc: 'Le secteur est absent' },
          { code: '20', label: 'Pile effacée', desc: 'La pile de défaut a été effacée' },
          { code: '21', label: 'Freinage défectueux', desc: 'Le module de freinage est défectueux' },
          { code: '22', label: 'Défaut alimentation', desc: 'Alimentation 24Vcc défectueuse' },
        ]
      }
    ]
  },

  'thyssen-cpi': {
    slug: 'thyssen-cpi',
    brandId: 'thyssenkrupp',
    brand: 'ThyssenKrupp',
    title: 'Code Défaut CPI',
    subtitle: 'Variateur CPI',
    color: 'purple',
    type: 'fault-codes',
    sections: [
      {
        title: 'Codes défauts CPI',
        entries: [
          { code: '-', label: "Pas d'entrée", desc: 'Pas de défaut' },
          { code: '-', label: 'Marche', desc: 'Le variateur a été remis sous tension' },
          { code: '-', label: 'Erreur Watchdog', desc: "Défaut d'initialisation du processeur C167" },
          { code: '-', label: 'SMR à la TCM', desc: 'Message de défaut vers TCM (uniquement avec TCM)' },
          { code: '-', label: 'Plus de SMR', desc: 'Disparition du défaut SMR' },
          { code: '-', label: 'Pas de puissance reconnue', desc: 'Valeur indéfinie sur conversion A/D canaux 14 et 15' },
          { code: '-', label: 'Défaut EEPROM', desc: 'Le checksum EEPROM est erroné / Défaut sur format EPROM' },
          { code: '-', label: 'Temp. du dissipateur', desc: 'Dépassement de la température admise sur le dissipateur' },
          { code: '-', label: 'Temp. moteur', desc: 'Dépassement de la température admise sur le moteur' },
          { code: '-', label: 'Défaut de masse', desc: 'Somme des trois courants de phases non nulle / Défaut d\'init. proc F240' },
          { code: '-', label: 'Surtension CC', desc: 'Tension du pont continu trop élevée' },
          { code: '-', label: 'Chute de tension', desc: 'Tension du pont continu trop faible' },
          { code: '-', label: 'Protection partie puissance', desc: 'Surcourant / Défaut de tension' },
          { code: '-', label: 'Surcourant', desc: 'Courant trop élevé' },
          { code: '-', label: 'Erreur Time-out DSP', desc: "Défaut initialisation du proc signaux F240" },
          { code: '-', label: 'Erreur boucle de courant DSP', desc: 'Le proc F240 ne traite plus la boucle de courant' },
          { code: '-', label: 'Reset DSP', desc: 'Le proc a provoqué un reset' },
          { code: '-', label: 'Chute de tension +/-15v ou pont CC>850v', desc: "Défaut sur la tension d'alimentation ou sur la tension de pont continu" },
          { code: '-', label: 'Vitesse réelle = Vitesse réf +10%', desc: 'Défaut de suivi de consigne' },
          { code: '-', label: 'Erreur CAN', desc: 'Manoeuvre ne répond plus' },
          { code: '-', label: 'Défaut encodeur', desc: 'Défaut encodeur' },
          { code: '-', label: 'Repère positionné', desc: 'Positionnement d\'un repère par le CAN' },
          { code: '-', label: 'Pile défaut effacée', desc: 'Effacement pile défaut' },
        ]
      }
    ]
  },

  // ===================== KONE =====================

  'kone-v3f10': {
    slug: 'kone-v3f10',
    brandId: 'kone',
    brand: 'Kone',
    title: 'KONE V3F10',
    subtitle: 'Erreurs temporaires et permanentes',
    color: 'sky',
    type: 'fault-codes',
    sections: [
      {
        title: 'Erreurs Temporaires',
        note: "Automatiquement effacées après 2 sec. en absence de commande de déplacement. Pour afficher de nouveau ces codes, couper et rétablir le courant.",
        entries: [
          { code: 'Uu1', label: 'Sous tension' },
          { code: 'Oc', label: 'Sur Intensité' },
          { code: 'ou', label: 'Sur Tension' },
          { code: 'oL1', label: 'Surcharge' },
          { code: 'oL2', label: 'Surcharge' },
          { code: 'oL3', label: 'Couple trop élevé' },
          { code: 'SE1', label: 'Erreur signal de contrôle' },
          { code: 'SE2', label: 'Pas de courant moteur' },
        ]
      },
      {
        title: 'Erreurs Permanentes',
        note: "Les codes d'erreurs suivants restent affichés jusqu'à la disparition du défaut.",
        entries: [
          { code: 'Uu2', label: 'Circuit de commande sous alimenté' },
          { code: 'Fu', label: 'Fusibles brûlés' },
          { code: 'oH', label: 'Température radiateur trop élevée' },
          { code: 'rr', label: 'Défaut transistor de freinage' },
          { code: 'CPF01', label: 'Défaut inverter' },
          { code: 'CPF04', label: 'Défaut inverter' },
        ]
      }
    ]
  },
  // ===================== AUTINOR (suite) =====================

  'autinor-a50': {
    slug: 'autinor-a50',
    brandId: 'autinor',
    brand: 'Autinor',
    title: 'Défauts A-50',
    subtitle: 'Codes défauts 40 à 63',
    color: 'emerald',
    type: 'fault-codes',
    sections: [
      {
        title: 'Codes défauts A-50',
        entries: [
          { code: '40', label: "Lecture de 2 écrans rapprochés type ISO à l'arrêt en sens opposé à la lecture ou en PV" },
          { code: '41', label: 'Non départ sur absence du "8" malgré les portes fermées' },
          { code: '42', label: 'Cellule de porte auto coupée + de 30 sec.' },
          { code: '43', label: 'Non collage du relais de zone' },
          { code: '44', label: 'Collage anormal du relais de zone' },
          { code: '45', label: 'Non collage du relais ZOMI' },
          { code: '46', label: 'Collage anormal du relais ZOMI' },
          { code: '48', label: 'Plaque ISO raccordée alors que pas nécessaire (pas iso/ouv.av.arrêt)' },
          { code: '49', label: 'Plaque ISO non raccordée alors que nécessaire' },
          { code: '50', label: 'Défaut interne, veuillez contacter notre SAV' },
          { code: '51', label: 'Option Iso ou Ouv.av.arrêt demandée 1 Vn impossible' },
          { code: '52', label: "Appareil au dessus du niv. sup. alors que taquets encore posés" },
          { code: '53', label: 'Défaut après détection taquets posés alors que la cab. est en marche' },
          { code: '54', label: 'Erreur PROM option pour ISO + rattrapage montée' },
          { code: '55', label: 'Non collage du relais de shuntage du "8"' },
          { code: '56', label: 'Décollage du relais de shuntage du "8" en marche' },
          { code: '57', label: 'Erreur PROM option pour la table des niveaux' },
          { code: '58', label: "Taquets restés rétractés alors que la commande est coupée" },
          { code: '63', label: 'Défaut interne, veuillez contacter notre SAV' },
        ]
      }
    ]
  },

  'autinor-h50': {
    slug: 'autinor-h50',
    brandId: 'autinor',
    brand: 'Autinor',
    title: 'Défauts H-50',
    subtitle: 'Codes défauts hydraulique',
    color: 'emerald',
    type: 'fault-codes',
    sections: [
      {
        title: 'Codes défauts H-50',
        entries: [
          { code: '01', label: 'Relais de masse' },
          { code: '02', label: 'Temporisation de petite vitesse' },
          { code: '03', label: 'Temporisation de révision' },
          { code: '04', label: 'Coupure des sécurités' },
          { code: '05', label: 'Thermique de ventilation' },
          { code: '06', label: 'Mauvais verrouillage' },
          { code: '08', label: 'Suspension de départ' },
          { code: '09', label: 'Sonde thermique' },
          { code: '10', label: 'Inversion de phase' },
          { code: '11', label: 'Interprétation impossible du capteur' },
          { code: '12', label: 'Non collage du contacteur de ligne' },
          { code: '13', label: 'Non décollage du contacteur' },
          { code: '14', label: 'Non collage du relais GVD' },
          { code: '15', label: 'Non décollage du relais GVD' },
          { code: '16', label: 'FDC haut pour la révision' },
          { code: '17', label: 'Manque de phase' },
          { code: '18', label: 'Recalage impossible info. erronée capteur' },
          { code: '19', label: 'Coupure après les sécurités' },
          { code: '21', label: 'Mauvais verrouillage' },
          { code: '22', label: 'Intégrateur de glissement' },
          { code: '23', label: 'Coupure avant le "6"' },
          { code: '26', label: 'Défaut capteur faisceau A' },
          { code: '27', label: 'Défaut capteur faisceau B' },
          { code: '28', label: 'Non collage du relais GVM' },
          { code: '29', label: 'Non décollage du relais GVM' },
          { code: '30', label: 'Non collage du relais PVD' },
          { code: '31', label: 'Détection de surcharge' },
          { code: '32', label: 'Non décollage du relais PVD' },
          { code: '34', label: 'Défaut de blocage de porte' },
          { code: '35', label: "N° opérateur inconnu par la carte" },
          { code: '36', label: 'Non collage du relais PVM' },
          { code: '37', label: 'Non décollage du relais PVM' },
          { code: '38', label: 'Non collage du contacteur étoile' },
          { code: '39', label: 'Non décollage du contacteur étoile' },
          { code: '40', label: 'Non collage du contacteur triangle' },
          { code: '41', label: '"8" coupé porte fermée' },
          { code: '42', label: 'Non décollage du contacteur triangle' },
          { code: '43', label: 'Non collage du relais SH8' },
          { code: '44', label: 'Non décollage du relais SH8' },
          { code: '45', label: "Non collage de l'électrovanne" },
          { code: '46', label: "Non décollage de l'électrovanne" },
          { code: '50', label: 'Défaut interne, veuillez contacter notre SAV' },
          { code: '52', label: 'Les taquets sont encore posés au dessus du niv. sup.' },
          { code: '53', label: 'Mise en panne après détection taquets posés en marche' },
          { code: '58', label: 'Mise en panne après rétraction taquets' },
        ]
      }
    ]
  },

  'autinor-mlift': {
    slug: 'autinor-mlift',
    brandId: 'autinor',
    brand: 'Autinor',
    title: 'Défauts M-Lift',
    subtitle: 'Codes défauts M-Lift',
    color: 'emerald',
    type: 'fault-codes',
    sections: [
      {
        title: 'Codes défauts M-Lift',
        note: 'Se référer également à la documentation Autinor officielle pour les codes complets.',
        entries: [
          { code: '01', label: 'Défaut de masse' },
          { code: '02', label: 'Temporisation PV' },
          { code: '03', label: "Temporisation d'inspection" },
          { code: '05', label: 'Thermique de ventilation' },
          { code: '09', label: 'Sonde thermique' },
          { code: '10', label: 'Inversion du sens de rotation' },
          { code: '11', label: 'Impossibilité de lecture du capteur' },
          { code: '17', label: 'Manque ou inversion de phase' },
          { code: '22', label: 'Intégrateur de glissement' },
          { code: '31', label: 'Défaut de surcharge' },
        ]
      }
    ]
  },

  'autinor-defmli': {
    slug: 'autinor-defmli',
    brandId: 'autinor',
    brand: 'Autinor',
    title: 'Défauts MLI',
    subtitle: 'Codes défauts variateur MLI',
    color: 'emerald',
    type: 'fault-codes',
    sections: [
      {
        title: 'Codes défauts MLI',
        entries: [
          { code: '10', label: 'Inversion du sens de rotation', desc: 'Détection par capteur' },
          { code: '22', label: 'Perte de la référence v2' },
          { code: '52', label: 'Coupure du "10" en marche' },
          { code: '62', label: 'Défaut capteur O03' },
          { code: '81', label: 'Courant moyen supérieur à la puissance autorisée' },
          { code: '82', label: 'Vitesse réelle supérieure de 15% à Vn programmée' },
          { code: '83', label: "Vitesse d'inspection supérieure à 0,60 m/s" },
          { code: '84', label: "Vitesse d'isonivelage supérieure à 0,30 m/s" },
          { code: '85', label: 'Tension de récupération supérieure à 650V' },
          { code: '86', label: 'Absence de tension lors de la commande de mouvement' },
          { code: '87', label: 'Non décollage du contacteur ligne' },
          { code: '88', label: 'Commande montée et descente simultanée' },
          { code: '89', label: 'Température du radiateur supérieure à 40°' },
          { code: '90', label: 'Courant onduleur supérieur au courant max.' },
          { code: '91', label: 'Défaut du transistor N°1 du haut' },
          { code: '92', label: 'Défaut du transistor N°2 du haut' },
          { code: '93', label: 'Défaut du transistor N°1 du milieu' },
          { code: '94', label: 'Défaut du transistor N°2 du milieu' },
          { code: '95', label: 'Défaut du transistor N°1 du bas' },
          { code: '96', label: 'Défaut du transistor N°2 du bas' },
          { code: '97', label: 'Défaut du transistor de récupération' },
          { code: '98', label: 'Pente (Pt) non adaptée à Vn' },
          { code: '99', label: "Défaut d'écriture dans l'E²rom" },
        ]
      }
    ]
  },

  // ===================== OTIS (suite) =====================

  'otis-rcb1': {
    slug: 'otis-rcb1',
    brandId: 'otis',
    brand: 'Otis',
    title: 'RCB I',
    subtitle: 'Modes opérationnel, motion, entrées et événements',
    color: 'red',
    type: 'fault-codes',
    sections: [
      {
        title: 'Mode Opérationnel',
        entries: [
          { code: 'ACP', label: 'Manoeuvre anti-vandale' },
          { code: 'ANS', label: 'Anti-nuisance actionné' },
          { code: 'ATT', label: 'Service liftier' },
          { code: 'DBF', label: 'Erreur du contrôle Moteur/Frein (Défaut DBS)' },
          { code: 'CHC', label: 'Suppression des appels palier' },
          { code: 'COR', label: 'Initialisation/Recalage' },
          { code: 'CTL', label: 'Rappel de la cabine à un niveau programmé' },
          { code: 'DCP', label: 'Cabine retardée' },
          { code: 'DHB', label: 'Maintien des portes ouvertes par action du DHB' },
          { code: 'DTC', label: 'Tempo de protection des portes en fermeture écoulée' },
          { code: 'DTO', label: 'Tempo de protection des portes en ouverture écoulée' },
          { code: 'EFO', label: 'Manoeuvre incendie (pompier phase 1)' },
          { code: 'EFS', label: 'Manoeuvre pompier' },
          { code: 'EHS', label: 'Manoeuvre urgence hôpital / Manoeuvre président' },
          { code: 'EMT', label: 'Manoeuvre urgence hôpital (phase 1)' },
          { code: 'EPC', label: 'Attente de recalage en manoeuvre courant secours' },
          { code: 'EPR', label: 'Fonctionnement en manoeuvre courant secours' },
          { code: 'EPW', label: 'Manoeuvre courant de secours' },
          { code: 'EQO', label: 'Manoeuvre tremblement de terre' },
          { code: 'ESB', label: "Interrupteur d'arrêt d'urgence actionné" },
          { code: 'GCB', label: 'Suppression des envois et des appels' },
          { code: 'IDL', label: 'Disponible' },
          { code: 'INI', label: 'Initialisation du système' },
          { code: 'INS', label: 'Mode Inspection' },
          { code: 'ISC', label: 'Service indépendant' },
          { code: 'LNS', label: 'Non stop (80% de la charge)' },
          { code: 'MIT', label: 'Pointe montée' },
          { code: 'NAV', label: 'Non disponible' },
          { code: 'NOR', label: 'Mode Normal' },
          { code: 'OLD', label: 'Signal de surcharge (110% de la charge)' },
          { code: 'PKS', label: 'Manoeuvre parking' },
          { code: 'PRK', label: 'Parking en zone' },
          { code: 'RIOT', label: 'Manoeuvre anti-émeute' },
          { code: 'SHO', label: 'Manoeuvre Shabbat' },
          { code: 'WCO', label: 'Manoeuvre sauvage' },
        ]
      },
      {
        title: 'Mode Motion',
        entries: [
          { code: 'Mu', label: 'Mouvement en direction montée' },
          { code: 'Md', label: 'Mouvement en direction descente' },
          { code: 'M-', label: 'Pas de mouvement' },
          { code: 'M*', label: 'Pas prêt / non disponible' },
        ]
      },
      {
        title: 'Définition des Entrées',
        entries: [
          { code: 'ACSC', label: 'Interrupteur manoeuvre anti-vandale (cabine)' },
          { code: 'ACSH', label: 'Interrupteur manoeuvre anti-vandale (palier)' },
          { code: 'AMF', label: 'Position au dessus de la mi-course (tremblement terre)' },
          { code: 'ASL', label: 'Second interrupteur pompier au palier' },
          { code: 'ATK', label: 'Interrupteur à clé de manoeuvre liftier' },
          { code: 'CCBL', label: 'Envoi cabine au niveau extrême bas' },
          { code: 'CCTL', label: 'Envoi cabine au niveau extrême haut' },
          { code: 'CCOC', label: 'Interrupteur de suppression des envois cabine (cabine)' },
          { code: 'CCOH', label: 'Interrupteur de suppression des envois cabine (palier)' },
          { code: 'CHCC', label: 'Interrupteur de suppression des appels palier (cabine)' },
          { code: 'CHCS', label: 'Interrupteur de suppression des appels palier (contrôleur)' },
          { code: 'CRC', label: 'Contact de lecteur de badge' },
          { code: 'CTL', label: 'Contact à clé de rappel de la cabine (palier)' },
          { code: 'DCB', label: 'Bouton de fermeture des portes' },
          { code: 'DCL', label: 'Interrupteur fin de course en fermeture des portes' },
          { code: 'DDO', label: 'Suppression des manoeuvres de portes' },
          { code: 'DHB', label: 'Bouton de maintien des portes ouvertes' },
          { code: 'EDP', label: 'Système électronique de réouverture des portes' },
          { code: 'EFK', label: 'Interrupteur de manoeuvre pompier' },
          { code: 'EFO', label: 'Manoeuvre incendie' },
          { code: 'EQS', label: 'Manoeuvre tremblement de terre' },
          { code: 'ESK', label: 'Manoeuvre prioritaire' },
          { code: 'GCB', label: 'Suppression des envois et des appels' },
          { code: 'ISS', label: 'Interrupteur manoeuvre Indépendant' },
          { code: 'NSB', label: 'Bouton de non stop en manoeuvre liftier' },
          { code: 'NU', label: 'Manoeuvre courant secours' },
          { code: 'PKS', label: 'Interrupteur de manoeuvre Parking (palier)' },
          { code: 'RB', label: 'Reset des envois cabine' },
          { code: 'RIOT', label: 'Interrupteur manoeuvre anti-émeute' },
          { code: 'SSBM', label: 'Synthétiseur de voix' },
          { code: 'UPC', label: 'Contact pour pointe montée' },
          { code: 'WCOS', label: 'Interrupteur de manoeuvre sauvage' },
        ]
      },
      {
        title: 'Liste des Événements',
        entries: [
          { code: '-', label: 'Software reset', desc: 'Reset par programme' },
          { code: '-', label: 'Hardware reset', desc: 'Reset par "Watchdog"' },
          { code: '-', label: 'Illegal interr.', desc: 'Une interruption illégale a eu lieu' },
          { code: '-', label: 'car was NAV', desc: 'Cabine non disponible' },
          { code: '-', label: 'EPO shut down', desc: 'Cabine en panne durant le mode EPO' },
          { code: '-', label: 'door prot. close', desc: 'Protection en fermeture des portes déclenchée' },
          { code: '-', label: 'door prot. open', desc: 'Protection en ouverture des portes déclenchée' },
          { code: '-', label: 'Car was delayed', desc: 'Cabine retardée (DOB - LRD)' },
          { code: '-', label: 'DBSS fault', desc: 'Erreur du DBSS (contrôle Moteur / Frein)' },
          { code: '-', label: 'MCSS msg check', desc: 'Données invalides transmises du MCSS' },
          { code: '-', label: 'MCSS msg timeout', desc: 'Pas de message reçu du MCSS depuis 2 secondes' },
          { code: '-', label: 'RSLC lost sync', desc: 'Erreur synchronisation sur ligne série cabine' },
          { code: '-', label: 'RSLH lost sync', desc: 'Erreur synchronisation sur ligne série palière' },
          { code: '-', label: 'RSLG lost sync', desc: 'Erreur synchronisation sur ligne série du groupe' },
        ]
      }
    ]
  },

  'otis-rcb2': {
    slug: 'otis-rcb2',
    brandId: 'otis',
    brand: 'Otis',
    title: 'RCB II',
    subtitle: 'Modes opérationnel, motion, entrées et événements',
    color: 'red',
    type: 'fault-codes',
    sections: [
      {
        title: 'Mode Opérationnel',
        entries: [
          { code: 'ACP', label: 'Manoeuvre anti-vandale' },
          { code: 'ANS', label: 'Anti-nuisance actionné' },
          { code: 'ARE', label: 'Manoeuvre de dépannage automatique' },
          { code: 'ATT', label: 'Service liftier' },
          { code: 'CES', label: 'Manoeuvre envoi cabine "Express"' },
          { code: 'CHC', label: 'Suppression des appels palier' },
          { code: 'COR', label: 'Initialisation/Recalage' },
          { code: 'CRL', label: 'Lecteur à badge pour mise hors service à niveau' },
          { code: 'CRO', label: 'Manoeuvre sur lecteur de badge' },
          { code: 'CTL', label: 'Rappel de la cabine à un niveau programmé' },
          { code: 'DBF', label: 'Erreur du contrôle Moteur/Frein (Défaut DBSS)' },
          { code: 'DCP', label: 'Cabine retardée' },
          { code: 'DHB', label: 'Manoeuvre de maintien des portes ouvertes' },
          { code: 'DOS', label: 'Interrupteur de maintien des portes en ouverture' },
          { code: 'DTC', label: 'Tempo de protection des portes en fermeture' },
          { code: 'DTO', label: 'Tempo de protection des portes en ouverture' },
          { code: 'EFO', label: 'Manoeuvre incendie (pompier phase 1)' },
          { code: 'EFP', label: 'Recalage en manoeuvre pompier' },
          { code: 'EFS', label: 'Manoeuvre pompier' },
          { code: 'EHS', label: 'Manoeuvre urgence hôpital / Manoeuvre président' },
          { code: 'EMT', label: 'Manoeuvre urgence hôpital (Phase 1)' },
          { code: 'EPC', label: 'Attente de recalage en courant secours' },
          { code: 'EPD', label: 'Arrêt de la manoeuvre courant secours' },
          { code: 'EPR', label: 'Fonctionnement en manoeuvre courant secours' },
          { code: 'EPW', label: 'Manoeuvre courant de secours' },
          { code: 'EQO', label: 'Manoeuvre tremblement de terre' },
          { code: 'ESB', label: "Interrupteur d'arrêt d'urgence" },
          { code: 'GCB', label: 'Suppression des envois et des appels cabines' },
          { code: 'IDL', label: 'Disponible' },
          { code: 'INI', label: 'Initialisation du système' },
          { code: 'INS', label: 'Mode Inspection' },
          { code: 'ISC', label: 'Manoeuvre indépendant' },
          { code: 'LNS', label: 'Non stop (80% de la charge)' },
          { code: 'NAV', label: 'Non disponible' },
          { code: 'NOR', label: 'Mode Normal' },
          { code: 'OHT', label: 'Contact thermique du Drive déclenché' },
          { code: 'OLD', label: 'Signal de surcharge (110% de la charge)' },
          { code: 'PKS', label: 'Manoeuvre parking' },
          { code: 'REC', label: 'Manoeuvre initialisation' },
          { code: 'ROT', label: 'Manoeuvre anti-émeute' },
          { code: 'SCO', label: 'Manoeuvre navette' },
          { code: 'SHO', label: 'Manoeuvre Shabbat' },
          { code: 'WCO', label: 'Manoeuvre sauvage' },
          { code: 'WCS', label: 'Manoeuvre chaise roulante pour handicapé' },
        ]
      },
      {
        title: 'État Motion',
        entries: [
          { code: 'Mu', label: 'Motion montée avec puissance motrice sur le Drive' },
          { code: 'Md', label: 'Motion descente avec puissance motrice sur le Drive' },
          { code: 'M-', label: 'Motion sans direction avec puissance motrice' },
          { code: 'M*', label: 'Motion non prêt avec puissance motrice' },
          { code: 'mu', label: 'Motion montée sans puissance motrice' },
          { code: 'md', label: 'Motion descente sans puissance motrice' },
          { code: 'm-', label: 'Motion sans direction sans puissance motrice' },
          { code: 'm*', label: 'Motion non prêt sans puissance motrice' },
        ]
      },
      {
        title: 'Liste des Événements',
        entries: [
          { code: '-', label: 'total runs', desc: 'Nombre de démarrages depuis la mise sous tension' },
          { code: '-', label: 'powered on', desc: "Date et heure de la mise sous tension de l'OCSS" },
          { code: '-', label: 'power failure', desc: "Date et heure de la dernière coupure d'alimentation" },
          { code: '-', label: 'Software reset', desc: 'Reset par programme' },
          { code: '-', label: 'Hardware reset', desc: 'Reset par "Watchdog"' },
          { code: '-', label: 'Ring comm reset', desc: 'Messages erronés sur les Ring 1 et Ring 2' },
          { code: '-', label: 'car was NAV', desc: 'Cabine non disponible' },
          { code: '-', label: 'EPO shut down', desc: 'Cabine en panne pendant le mode EPO' },
          { code: '-', label: 'door prot. close', desc: 'Protection en fermeture des portes déclenchée' },
          { code: '-', label: 'door prot. open', desc: 'Protection en ouverture des portes déclenchée' },
          { code: '-', label: 'DBSS fault', desc: 'Erreur du DBSS (Contrôle du Moteur / Frein)' },
          { code: '-', label: 'MCSS msg check', desc: 'Donnée invalide transmise par le MCSS' },
          { code: '-', label: 'EFO - P mismatch', desc: 'Erreur de programmation pour niveau EFO' },
          { code: '-', label: 'ASL - P mismatch', desc: 'Erreur de programmation pour niveau ASL' },
          { code: '-', label: 'EFS - T mismatch', desc: 'Erreur de programmation pour le type de AFS' },
        ]
      }
    ]
  },

  'otis-mcs220': {
    slug: 'otis-mcs220',
    brandId: 'otis',
    brand: 'Otis',
    title: 'État LED MCS 220',
    subtitle: 'Vérification de l\'état des LEDs',
    color: 'red',
    type: 'fault-codes',
    sections: [
      {
        title: 'Vérification des LEDs',
        entries: [
          { code: 'BC', label: 'Allumée : Commande frein actionnée' },
          { code: 'VLC', label: 'Allumée : Commande des sorties 110V OK' },
          { code: 'GPR/J', label: 'Éteinte : Simplex / Allumée : Fonction groupe OK / Clignotante : Relais de phase déclenché' },
          { code: 'NOR/diag', label: 'Allumée : Mode NORMAL (TCI sur NOR) / Clignotante : Information diagnostic disponibles' },
          { code: 'INS', label: 'Éteinte : Mode NORMAL / Allumée : Mode INSPECTION / Clignotante : Mauvaise séquence TCI-Lock' },
          { code: 'ES', label: 'Éteinte : Chaîne des sécurités OK / Allumée : Chaîne des sécurités coupée' },
          { code: 'DW', label: 'Allumée : Portes paliers fermées' },
          { code: 'DFC', label: 'Allumée : Portes paliers et cabine complètement fermées' },
          { code: 'DOL', label: 'Allumée : Portes complètement ouvertes' },
          { code: 'DOB', label: 'Allumée : Demande de ré-ouverture des portes' },
          { code: 'LV', label: 'Allumée : Cabine dans zone des portes' },
          { code: 'RSL', label: 'Clignotante : Communication des lignes série OK' },
          { code: 'MP', label: 'Éteinte : Fonctionnement normal / Allumée : Protection thermique MPD du moteur déclenchée' },
        ]
      }
    ]
  },

  'otis-mp1me': {
    slug: 'otis-mp1me',
    brandId: 'otis',
    brand: 'Otis',
    title: 'NE/MS/NH300 (MP1ME)',
    subtitle: 'Voyants, Mode Motion et Mode Opérationnel',
    color: 'red',
    type: 'fault-codes',
    sections: [
      {
        title: 'Interprétation des voyants (allumés)',
        entries: [
          { code: 'VLC', label: 'Le microprocesseur de la carte logique est alimenté' },
          { code: 'DUP', label: 'La manoeuvre DUPLEX est connectée' },
          { code: 'DW', label: 'Consulter le schéma (plusieurs interprétations)' },
          { code: 'DFC', label: 'Chaîne de sécurité + portes verrouillées' },
          { code: '/ES', label: 'Chaîne de sécurité fermée' },
          { code: '/INS', label: "L'appareil est en mode NORMAL" },
          { code: 'ISS', label: 'Option CLÉ INDÉPENDANT activée' },
          { code: '/DOL', label: 'Les portes sont complètement ouvertes' },
          { code: 'LNS', label: 'La cabine est chargée à plus de 80%' },
          { code: 'RUN', label: "Indication de fonctionnement ou d'arrêt" },
          { code: 'DOB', label: "Le bouton de ré-ouverture de porte est activé" },
          { code: 'DZ', label: 'La cabine est dans une zone de déverrouillage' },
          { code: 'IPD', label: 'Impulsion de comptage ou top de ralentissement descente' },
          { code: 'IPU', label: 'Impulsion de comptage ou top de ralentissement montée' },
          { code: '/2LS', label: 'Si éteinte, cabine dans zone de recalage haute' },
          { code: '/1LS', label: 'Si éteinte, cabine dans zone de recalage basse' },
        ]
      },
      {
        title: 'Mode Motion (Affichage Fixe)',
        entries: [
          { code: '1', label: 'RUN (en attente de 1A)' },
          { code: '2', label: 'Déplacement Grande Vitesse' },
          { code: '3', label: 'Phase de ralentissement/arrêt' },
          { code: '4', label: 'INSPECTION' },
          { code: '5', label: 'Tempo DDP ou DD3P' },
          { code: '6', label: 'Coupure des sécurités' },
          { code: '7', label: 'Fermeture des portes' },
          { code: '8', label: 'Portes fermées, appareil au repos' },
          { code: '9', label: 'Ouverture des portes' },
          { code: 'A', label: 'Temporisation des portes' },
          { code: 'B', label: 'Attente autorisation fermeture des portes' },
          { code: 'C', label: 'RUN (en déplacement sur 3CL)' },
          { code: 'D', label: 'Renivelage montée' },
          { code: 'E', label: 'Renivelage descente' },
          { code: 'F', label: 'Appareil disponible avec RLEV non autorisé' },
        ]
      },
      {
        title: 'Mode Opérationnel (Affichage Clignotant)',
        entries: [
          { code: 'RIEN', label: 'Défaut 24 volts' },
          { code: '1', label: 'Mode NORMAL' },
          { code: '2', label: 'Cabine au niveau principal' },
          { code: '3', label: 'Manoeuvre PKS' },
          { code: '4', label: 'Mode INSPECTION' },
          { code: '5', label: 'LNS est activée' },
          { code: '6', label: "L'arrêt d'urgence ESS est activé" },
          { code: '7', label: "L'arrêt d'urgence ESB est activé" },
          { code: '8', label: 'ISS (Fermeture des portes et envoi cabine)' },
          { code: '9', label: 'ISS (Portes ouvertes)' },
          { code: 'A', label: 'ISS (Portes ouvertes sans envoi)' },
          { code: 'B', label: 'EFS/EFO (Cabine en déplacement vers le niveau pompier)' },
          { code: 'C', label: 'EFS (Fermeture des portes en envoi cabine)' },
          { code: 'D', label: 'EFS (Portes ouvertes)' },
          { code: 'E', label: 'EFS (Cabine en déplacement)' },
          { code: 'F', label: 'EPO (Attente de recalage)' },
          { code: '10', label: 'EPO (Déplacement vers niveau EPO)' },
          { code: '11', label: 'EPO (Cabine portes ouvertes au niveau EPO)' },
          { code: '12', label: 'EPO (Appareil arrêté pendant EPO)' },
          { code: '13', label: 'Cabine sans fonction — En recalage' },
          { code: '14', label: 'SAPB:RUN (en déplacement)' },
          { code: '15', label: 'SAPB:CCP (priorité aux envois)' },
          { code: '16', label: 'LWO: surcharge' },
          { code: '17', label: 'MPD actionné — RUN et RLEV interdits' },
          { code: '18', label: 'Parking en Zone' },
          { code: '19', label: 'En attente avec priorité cabine' },
          { code: '1A', label: 'Manoeuvre ISS/CHCS' },
          { code: '1B', label: 'SKL actionné' },
          { code: '1C', label: 'ARBL: retour automatique au NP' },
          { code: '1D', label: 'DHB actionné' },
          { code: '20', label: 'Cabine différée' },
          { code: '21', label: 'ANS actionné' },
          { code: '22', label: 'Tempo après réouverture' },
          { code: '23', label: 'Perte de DZ en WRR' },
          { code: '24', label: 'Erreur de position' },
          { code: '25', label: 'DOP: protection ouverture des portes' },
          { code: '26', label: 'DCP: protection fermeture des portes' },
          { code: '2B', label: 'Paramètre programmé incorrect' },
          { code: '2C', label: 'Erreur de synchronisation du 24 volts' },
          { code: '35', label: 'Séquence UIS/DIS incorrecte' },
          { code: '36', label: 'DDP: pendant ouverture de valve' },
          { code: '37', label: 'DDP: pendant fermeture de valve' },
          { code: '38', label: 'DDP: pendant RLEV montée' },
          { code: '39', label: 'DDP: pendant RLEV descente' },
          { code: '3A', label: 'DDP: pendant la grande vitesse' },
          { code: '3B', label: 'DDP: pendant le ralentissement' },
          { code: '3C', label: 'Erreur permanente de synchro sur le 24 volt' },
        ]
      }
    ]
  },

  // ===================== SCHINDLER =====================

  'schindler-micv': {
    slug: 'schindler-micv',
    brandId: 'schindler',
    brand: 'Schindler',
    title: 'Défauts MICV',
    subtitle: 'Commandes et fonctions terminal MICV',
    color: 'blue',
    type: 'fault-codes',
    sections: [
      {
        title: 'Commandes du terminal',
        entries: [
          { code: 'EA', label: 'Ordres cabine' },
          { code: 'HAUT', label: 'Commande montée' },
          { code: 'AS', label: 'Flèches de direction' },
          { code: 'EK', label: 'Entrées info' },
          { code: 'VSR', label: 'Ampli' },
          { code: 'AVANT DER', label: 'Avant dernier étage' },
          { code: 'PAK', label: 'Microprocesseur' },
          { code: 'PEC', label: 'Tachy' },
          { code: 'SUA', label: 'Dialogue' },
          { code: 'BAS', label: 'Commande descente' },
          { code: 'UVPN', label: 'Alimentation' },
          { code: 'AK', label: 'Armoire dans le local' },
          { code: 'UC', label: 'Appels des étages montée' },
          { code: 'DC', label: 'Appels des étages descente' },
        ]
      },
      {
        title: 'Divers fonctions',
        entries: [
          { code: 'AD/RE/FA', label: 'Enlèvement fatal' },
          { code: 'AD/RE/RE', label: 'Reset' },
          { code: 'AD/RE/DO', label: 'Maintien portes fermées' },
          { code: 'AD/RE/CL', label: 'Libère porte' },
          { code: 'INIT ALL', label: 'Réinitialise système' },
          { code: 'INIT SYSTEM', label: 'Efface tout' },
          { code: 'LG', label: 'Mot de passe' },
          { code: 'LN', label: 'N° appareil' },
          { code: 'CC', label: 'Ordre cabine' },
          { code: 'UT/LI/MO', label: 'Pour reparamétrer' },
          { code: 'LM/', label: 'List memory' },
          { code: 'M-M', label: 'Modif memory' },
          { code: 'LO', label: 'Pour sortir' },
          { code: 'OD', label: 'Ouverture porte' },
          { code: 'CD', label: 'Fermeture porte' },
        ]
      }
    ]
  },

  // ===================== MEA =====================

  'mea-ng02': {
    slug: 'mea-ng02',
    brandId: 'mea',
    brand: 'MEA',
    title: 'MEA NG02',
    subtitle: 'Liste des défauts et mode programme',
    color: 'amber',
    type: 'fault-codes',
    sections: [
      {
        title: 'Utilisation',
        note: 'Pression sur DEF : les défauts défilent 1 par 1. Pression sur DEF et PRG : effacement de tous les défauts. Pression sur DEF (1 seconde) : mode programme.',
        entries: []
      },
      {
        title: 'Liste des défauts (Page 1)',
        entries: [
          { code: '-', label: 'Recalage effectué', desc: "Coupure secteur, fin d'inspection, suite à défaut ih ou 1b" },
          { code: '-', label: 'Contrôle retombée des contacteurs', desc: 'Un des contacts entre CCO et REF est resté ouvert' },
          { code: '-', label: 'PV trop longue', desc: 'La PV a duré plus de 7 ou 14 secondes (paramétrable)' },
          { code: '-', label: 'Surcharge', desc: "L'entrée SUR est alimentée" },
          { code: '-', label: 'Défaut de sens', desc: 'Intervient uniquement au recalage (voir AGH, AGB et le capteur)' },
          { code: '-', label: 'Antipatinage descente', desc: "Les faisceaux du capteur n'ont pas bougé pendant + de 20s" },
          { code: '-', label: 'Antipatinage montée', desc: "Les faisceaux du capteur n'ont pas bougé pendant + de 20s" },
          { code: '-', label: 'Masse', desc: 'Le connecteur REF ou 24CC ou DO1 ou TH1 ou TH2 a une liaison avec la terre' },
          { code: '-', label: 'Détection incendie', desc: "Au moins une des entrées incendie n'a pas été alimentée" },
          { code: '-', label: 'Secours tobia active', desc: "L'entrée EL3 de la carte NG12 est alimentée" },
          { code: '-', label: 'Boîte arrêt GV bas', desc: "Actionné quand ascenseur en haut" },
          { code: '-', label: 'Boîte arrêt GV haut', desc: "Actionné quand ascenseur en bas" },
          { code: '-', label: 'Extrêmes simultanés', desc: 'Les entrées AGH et AGB sont coupées en même temps' },
          { code: '-', label: 'Coupure de SE3 en marche' },
          { code: '-', label: 'Coupure de SE4 en marche' },
          { code: '-', label: 'Défaut verrouillages', desc: 'Voir paramètre DP. Retrancher 20 de l\'indication pour le niveau du défaut' },
          { code: '-', label: 'Coupure sécurité 6 en marche', desc: 'Retrancher 50 de l\'indication pour le niveau de la coupure' },
          { code: '-', label: 'Antipatinage ouverture porte A', desc: "FCOA n'a pas été actionné dans les temps" },
          { code: '-', label: 'Antipatinage fermeture porte A', desc: "FCFA n'a pas été actionné dans les temps" },
          { code: '-', label: 'Antipatinage ouverture porte B', desc: "FCOB n'a pas été actionné dans les temps" },
        ]
      },
      {
        title: 'Liste des défauts (Page 2)',
        entries: [
          { code: '-', label: 'Antipatinage fermeture porte B', desc: "FCFB n'a pas été actionné dans les temps" },
          { code: '0A', label: 'Court circuit sur DO1' },
          { code: '0t', label: 'Sonde thermique', desc: 'Voir les entrées TH1, TH2' },
          { code: '0H', label: 'Défaut mémoire électrique' },
          { code: '0L', label: 'Défaut liaison série' },
        ]
      }
    ]
  },

  // ===================== CG2A =====================

  'cg2a-micro2000': {
    slug: 'cg2a-micro2000',
    brandId: 'autres',
    brand: 'CG2A',
    title: 'CG2A Micro2000',
    subtitle: 'Codes défauts armoire CG2A Micro2000',
    color: 'slate',
    type: 'fault-codes',
    sections: [
      {
        title: 'Codes défauts CG2A Micro2000',
        entries: [
          { code: '01', label: 'Masse fugitive' },
          { code: '02', label: 'Contacteurs' },
          { code: '03', label: 'Capteur anomalie d\'un faisceau' },
          { code: '04', label: 'Défaut PV ou taque à l\'arrêt' },
          { code: '05', label: 'Phases' },
          { code: '06', label: 'Sens' },
          { code: '07', label: 'Intégrateur' },
          { code: '08', label: 'Masse' },
          { code: '09', label: 'Boîtes extrêmes' },
          { code: '10', label: 'Verrouillages et si ISO contrôle ISO' },
          { code: '11', label: 'Mode révision' },
          { code: '12', label: 'Info sonde thermique' },
          { code: '13', label: 'Info et défaut surcharge' },
          { code: '14', label: 'Cellule' },
          { code: '15', label: 'Réouverture' },
          { code: '16', label: 'Pompier' },
        ]
      }
    ]
  },

  'cg2a-turbo3000': {
    slug: 'cg2a-turbo3000',
    brandId: 'autres',
    brand: 'CG2A',
    title: 'CG2A Turbo 3000',
    subtitle: 'Codes défauts variateur Turbo 3000',
    color: 'slate',
    type: 'fault-codes',
    sections: [
      {
        title: 'Codes défauts Turbo 3000',
        entries: [
          { code: '01', label: 'Capteur', desc: 'Temps de coupure faisceau A et B supérieur à 1,5 seconde' },
          { code: '02', label: 'Contacteurs', desc: 'Contrôle que les contacteurs M,D,PV,GV sont bien commandés. Entrées de la carte turbo GVS,PVS,MDS=1(9v) au repos' },
          { code: '03', label: 'Capteur', desc: 'Coupure 2 fois du MÊME faisceau sans donner l\'autre' },
          { code: '04', label: 'Défaut PV', desc: 'Arrêt de la PV si temps supérieur à 10s. En hydraulique on contrôle également le retour taquet (entrée CTAQ)' },
          { code: '05', label: 'Défaut de phase', desc: 'Manque ou inversion de phase' },
          { code: '06', label: 'Défaut de sens', desc: 'Déplacement en sens opposé à l\'ordre donné' },
          { code: '07', label: 'Intégrateur', desc: 'Contrôle du temps de course entre chaque écran. Défaut lancé si ce temps est supérieur à 12 ou 20 sec' },
          { code: '08', label: 'Masse', desc: 'Défaut permanent sur circuits: 24Vcc à la masse, entrées de carte 12 ou 24V, circuit voyant blocage, flèche de sens en collective, sorties multiplexeurs' },
          { code: '09', label: 'Boîtes extrêmes', desc: 'Apparaît si les deux boîtes EM et ED sont actionnées en même temps' },
          { code: '10', label: 'Came et contrôle ISO', desc: 'Défaut de verrouillage: Information donnée si 8S établi et pas 10S (tempo 9s entre chaque défaut). Défaut ISO: en hydraulique avec ISO portes ouvertes (absence CISO)' },
          { code: '11', label: 'Révision', desc: 'Information révision. Entrée REV=1 en marche normale (9v)' },
          { code: '12', label: 'Sonde thermique', desc: 'Entrée STH=0V défaut sonde moteur. Défaut présent: 12 clignote, Défaut disparaît: 12 Fixe (RAZ pour remise en service)' },
          { code: '13', label: 'Surcharge', desc: 'Entrée SU à 9v si défaut, 0v en normal. L\'appareil reste porte ouverte tant que l\'information est présente' },
          { code: '14', label: 'Cellule', desc: 'Entrée CEP à 9v si faisceau obstrué ou cellule HS' },
        ]
      }
    ]
  },

  'schindler-smart-erreurs': {
    slug: 'schindler-smart-erreurs',
    brandId: 'schindler',
    brand: 'Schindler',
    title: 'Codes Erreurs SMART',
    subtitle: 'Codes erreurs LED carte SMIC — SMART MRL 001/002/002DE',
    color: 'blue',
    sections: [
      {
        title: "Circuit SMIC 1.Q (ECU)",
        entries: [
          { code: "circuit-smic-1-q-ecu__p01-eteinte", label: "P01 éteinte", desc: "24VDC manquant" },
          { code: "circuit-smic-1-q-ecu__p03-eteinte", label: "P03 éteinte", desc: "12VDC manquant" },
          { code: "circuit-smic-1-q-ecu__vcc-eteinte", label: "VCC éteinte", desc: "Défaut du circuit SCIL" },
          { code: "circuit-smic-1-q-ecu__rkph-eteinte", label: "RKPH éteinte", desc: "Mauvais sens des phases" },
          { code: "circuit-smic-1-q-ecu__ispt-eteinte", label: "ISPT éteinte", desc: "Circuit de sécurité ouvert entre XISPT(1-2)" },
          { code: "circuit-smic-1-q-ecu__isk-eteinte", label: "ISK éteinte", desc: "Circuit de sécurité ouvert entre XISPT-2 et XESE-3" },
        ]
      },
      {
        title: "Circuit SMIC 2.Q (ECU)",
        entries: [
          { code: "circuit-smic-2-q-ecu__p01-eteinte", label: "P01 éteinte", desc: "24VDC manquant" },
          { code: "circuit-smic-2-q-ecu__p02-eteinte", label: "P02 éteinte", desc: "24VDC manquant" },
          { code: "circuit-smic-2-q-ecu__vdd1-eteinte", label: "VDD1 éteinte", desc: "12VDC manquant" },
          { code: "circuit-smic-2-q-ecu__vcc-eteinte", label: "VCC éteinte", desc: "Défaut du circuit SCIL" },
          { code: "circuit-smic-2-q-ecu__rkph-eteinte", label: "RKPH éteinte", desc: "Mauvais sens des phases" },
          { code: "circuit-smic-2-q-ecu__rkph-dis-eteinte", label: "RKPH-DIS éteinte", desc: "Mauvais sens des phases du câblage du module de secours SEM" },
          { code: "circuit-smic-2-q-ecu__ispt-eteinte", label: "ISPT éteinte", desc: "Circuit de sécurité ouvert entre XISPT(1-2)" },
          { code: "circuit-smic-2-q-ecu__isk-eteinte", label: "ISK éteinte", desc: "Circuit de sécurité ouvert entre XISPT-2 et XESE-3" },
        ]
      },
      {
        title: "Circuit SMIC 4.Q/42.Q (ECU)",
        entries: [
          { code: "circuit-smic-4-q-42-q-ecu__p01-eteinte", label: "P01 éteinte", desc: "24VDC manquant" },
          { code: "circuit-smic-4-q-42-q-ecu__p02-eteinte", label: "P02 éteinte", desc: "24VDC manquant" },
          { code: "circuit-smic-4-q-42-q-ecu__vdd1-eteinte", label: "VDD1 éteinte", desc: "12VDC manquant" },
          { code: "circuit-smic-4-q-42-q-ecu__vcc-eteinte", label: "VCC éteinte", desc: "Défaut du circuit SCIL" },
          { code: "circuit-smic-4-q-42-q-ecu__ispt-eteinte", label: "ISPT éteinte", desc: "Circuit de sécurité ouvert entre XISPT(1-2)" },
          { code: "circuit-smic-4-q-42-q-ecu__isk-eteinte", label: "ISK éteinte", desc: "Circuit de sécurité ouvert entre XISPT-2 et XKHA-1" },
          { code: "circuit-smic-4-q-42-q-ecu__enable-eteinte", label: "ENABLE éteinte", desc: "Alimentation générale déclenchée et alimentation secourue pour la Led LUET non présente" },
          { code: "circuit-smic-4-q-42-q-ecu__luet-allumee", label: "LUET allumée", desc: "En fonctionnement normal le circuit de sécurité est ouvert entre XISPT(1) et XISPT(3)" },
        ]
      },
      {
        title: "Circuit SMIC — SERVICE / WDOG",
        entries: [
          { code: "circuit-smic__service", label: "SERVICE", desc: "En fonctionnement normal : éteinte. Allumée en service" },
          { code: "circuit-smic__wdog-non-clignotante-1-hz", label: "WDOG Non clignotante (1 Hz)", desc: "Défaut de programme — faire un reset (bouton RESET du circuit SCIT)" },
        ]
      },
      {
        title: "Circuit SMIC (ECU) — TRIP / KS / ERR / DOOR / DRIVE",
        entries: [
          { code: "circuit-smic-ecu__trip1", label: "TRIP1", desc: "En fonctionnement normal : éteinte" },
          { code: "circuit-smic-ecu__trip2", label: "TRIP2", desc: "En fonctionnement normal : éteinte" },
          { code: "circuit-smic-ecu__trip1-et-trip2", label: "TRIP1 et TRIP2", desc: "Erreur fatale de la manœuvre — 1 clignotement : erreur circuit sécurité, 2 : perte position, 3 : erreur programme" },
          { code: "circuit-smic-ecu__ks-kse", label: "KS/KSE", desc: "KS/KSE = 0 : contacteurs non contrôlés. Faire un reset (bouton RESET du circuit SCIC)" },
          { code: "circuit-smic-ecu__err", label: "ERR", desc: "Éteinte = normal. Clignotement rapide = programme invalide. Clignotement lent = erreur circuit sécurité" },
          { code: "circuit-smic-ecu__door-clignotement-en-permanence", label: "DOOR Clignotement en permanence", desc: "Erreur dans le module de porte — voir nombre de clignotements pour le code détaillé" },
          { code: "circuit-smic-ecu__drive-clignotement-en-permanence", label: "DRIVE Clignotement en permanence", desc: "Erreur dans le module d'entraînement — 1 cligno : circuit sécurité ne se ferme pas" },
          { code: "circuit-smic-ecu__drive-clignote-depend-du-nombre-de-clignotement", label: "DRIVE Clignote (nb clignotements)", desc: "2=contacteurs incorrects, 3=TRIP activé, 4=DRIVE non prêt, 5=enclenchement contacteurs, 7=erreur programme, 8=KSKB actif" },
        ]
      },
      {
        title: "Combinaison plusieurs LED — circuit SCIC (ECU)",
        entries: [
          { code: "combinaison-de-plusieurs-led-du-circuit-scic-ecu__wdog-drive-err-clignotent-lentement", label: "WDOG + DRIVE + ERR clignotent lentement", desc: "État spécial de la manœuvre" },
          { code: "combinaison-de-plusieurs-led-du-circuit-scic-ecu__wdog-door-drive-err-clignotent-lentement", label: "WDOG + DOOR + DRIVE + ERR clignotent lentement", desc: "La carte SIM n'est pas présente" },
        ]
      },
      {
        title: "Circuit SDIC (ECU)",
        entries: [
          { code: "circuit-sdic-ecu__p01-eteinte", label: "P01 éteinte", desc: "24VDC manquant" },
          { code: "circuit-sdic-ecu__vcc-eteinte", label: "VCC éteinte", desc: "Défaut de l'alimentation interne du circuit SDIC" },
          { code: "circuit-sdic-ecu__wdog-eteinte-ou-allumee-en-permanence", label: "WDOG éteinte ou allumée en permanence", desc: "Défaut dans le programme / défaut de communication sur le bus" },
          { code: "circuit-sdic-ecu__err-allumee-en-permanence", label: "ERR allumée en permanence", desc: "Digisens débranché (XLD)" },
          { code: "circuit-sdic-ecu__wdog-err-clignotement-a-une-frequence-de-2-hz", label: "WDOG + ERR clignotement à 2 Hz", desc: "Bandeau cabine COP débranché" },
        ]
      },
    ]
  },

  'schindler-smart-diagnostic': {
    slug: 'schindler-smart-diagnostic',
    brandId: 'schindler',
    brand: 'Schindler',
    title: 'Diagnostic Cabine SMART',
    subtitle: 'Lecture des défauts en cabine — Schindler SMART 002',
    color: 'blue',
    sections: [
      {
        title: "Codes erreurs — Diagnostique Avancé SMART 002",
        note: "Accessible en mettant le micro-switch n°5 (SCIC) sur la position ON. Le code s'affiche sur le CPID (affiche « Er »), l'ACID et les LOPM/LIN.",
        entries: [
          { code: "smart-diag__00", label: "00", desc: "Pas d'erreur enregistrée" },
          { code: "smart-diag__01", label: "01", desc: "Circuit de sécurité ouvert" },
          { code: "smart-diag__02", label: "02", desc: "Ouverture du circuit de sécurité au niveau des portes pendant une course" },
          { code: "smart-diag__03", label: "03", desc: "Problème dans la séquence normale de fermeture des portes" },
          { code: "smart-diag__04", label: "04", desc: "Cabine arrêtée en dehors de la zone de porte" },
          { code: "smart-diag__05", label: "05", desc: "Bouton d'appel ou d'ordre coincé" },
          { code: "smart-diag__06", label: "06", desc: "L'ascenseur ne démarre pas" },
          { code: "smart-diag__07", label: "07", desc: "Défaut d'alimentation des circuits bionic" },
          { code: "smart-diag__08", label: "08", desc: "Non utilisé" },
          { code: "smart-diag__09", label: "09", desc: "Procédure d'autocontrôle défaillante" },
          { code: "smart-diag__10", label: "10", desc: "Temps de course trop long" },
          { code: "smart-diag__11", label: "11", desc: "Position perdue" },
          { code: "smart-diag__12", label: "12", desc: "Surchauffe" },
          { code: "smart-diag__13", label: "13", desc: "Problème dans la séquence normale d'ouverture des portes" },
          { code: "smart-diag__25", label: "25", desc: "Temps de verrouillage trop long" },
          { code: "smart-diag__26", label: "26", desc: "Erreur KSKB" },
          { code: "smart-diag__27", label: "27", desc: "Erreur ouverture anticipée" },
          { code: "smart-diag__28", label: "28", desc: "Erreur générale de porte" },
          { code: "smart-diag__29", label: "29", desc: "Erreur de direction de l'entraînement" },
          { code: "smart-diag__30", label: "30", desc: "Erreur de retour contact entraînement" },
          { code: "smart-diag__31", label: "31", desc: "Erreur générale d'entraînement" },
          { code: "smart-diag__32", label: "32", desc: "Erreur générale de sim card" },
          { code: "smart-diag__33", label: "33", desc: "Erreur générale EEPROM" },
          { code: "smart-diag__34", label: "34", desc: "Mesure de charge pontée" },
          { code: "smart-diag__35", label: "35", desc: "Mesure de charge non calibrée" },
          { code: "smart-diag__36", label: "36", desc: "Mauvaise calibration de charge" },
          { code: "smart-diag__37", label: "37", desc: "Erreur générale mesure de charge" },
          { code: "smart-diag__38", label: "38", desc: "Erreur générale ascenseur" },
          { code: "smart-diag__39", label: "39", desc: "Réservé" },
          { code: "smart-diag__40", label: "40", desc: "Mode normal" },
          { code: "smart-diag__41", label: "41", desc: "Défaut d'alimentation principal" },
          { code: "smart-diag__42", label: "42", desc: "L'ascenseur est en mode inspection" },
          { code: "smart-diag__43", label: "43", desc: "Le service pompier est actif" },
          { code: "smart-diag__44", label: "44", desc: "Réservé" },
          { code: "smart-diag__45", label: "45", desc: "La réservation est active" },
          { code: "smart-diag__46", label: "46", desc: "L'ascenseur est alimenté par une source de secours" },
          { code: "smart-diag__55", label: "55", desc: "Manœuvre électrique de rappel active" },
          { code: "smart-diag__56", label: "56", desc: "Service pompier actif" },
          { code: "smart-diag__57", label: "57", desc: "Mode de non autorisation" },
          { code: "smart-diag__58", label: "58", desc: "Ascenseur en pleine charge" },
          { code: "smart-diag__59", label: "59", desc: "Mode maintenance actif" },
        ]
      },
    ]
  },

  // ===================== DIVERS =====================

  'divers-oleomate': {
    slug: 'divers-oleomate',
    brandId: 'autres',
    brand: 'Divers',
    title: 'Défauts OLEOMATE',
    subtitle: 'Codes défauts armoire Oléomate',
    color: 'slate',
    type: 'fault-codes',
    sections: [
      {
        title: 'Appels',
        note: 'Appel niveau bas = TP1 + TP3. Appel niveau haut = TP1 + TP4.',
        entries: []
      },
      {
        title: 'Codes défauts',
        entries: [
          { code: '00', label: 'Pas de défaut' },
          { code: '01', label: 'Mémoire électronique' },
          { code: '02', label: 'Retour des contacteurs' },
          { code: '03', label: 'Capteur' },
          { code: '04', label: 'Temporisation petite vitesse' },
          { code: '05', label: 'Ordre de phase' },
          { code: '06', label: 'Sens de déplacement de la cabine' },
          { code: '07', label: 'Temporisation intégrateur de glissement' },
          { code: '08', label: 'Problème de masse' },
          { code: '09', label: 'Extrêmes simultanés (EB et EM)' },
          { code: '10', label: 'Came verrouillage' },
          { code: '11', label: 'Fonctionnement en révision' },
          { code: '12', label: 'Sonde thermique' },
        ]
      }
    ]
  },

  'divers-ascimate': {
    slug: 'divers-ascimate',
    brandId: 'autres',
    brand: 'Divers',
    title: 'Défauts ASCIMATE',
    subtitle: 'Codes défauts armoire Ascimate',
    color: 'slate',
    type: 'fault-codes',
    sections: [
      {
        title: 'Codes défauts',
        entries: [
          { code: '00', label: 'OK' },
          { code: '01', label: 'Mémoire électrique' },
          { code: '02', label: 'Retour des contacteurs' },
          { code: '03', label: 'Capteur' },
          { code: '04', label: 'Petite vitesse' },
          { code: '05', label: 'Ordre des phases' },
          { code: '06', label: 'Sens de déplacement cabine' },
          { code: '07', label: 'IG' },
          { code: '08', label: 'Masse' },
          { code: '09', label: 'Extrêmes simultanés' },
          { code: '10', label: 'Came verrouillage' },
          { code: '11', label: 'Fonction révision' },
          { code: '12', label: 'Sonde thermique' },
          { code: '13', label: 'Surcharge' },
          { code: '14', label: 'Cellule' },
          { code: '15', label: 'Choc' },
          { code: '16', label: 'Fonction pompier' },
          { code: '17', label: 'Faisceaux' },
          { code: '18', label: 'Suspension palière' },
          { code: '19', label: 'Fonction liftier' },
          { code: '20', label: '------------' },
          { code: '21', label: 'Présence technicien' },
        ]
      }
    ]
  },

  'mea-ng01': {
    slug: 'mea-ng01',
    brandId: 'mea',
    brand: 'MEA',
    title: 'MEA NG01',
    subtitle: 'Liste des défauts NG01',
    color: 'amber',
    type: 'fault-codes',
    sections: [
      {
        title: 'Codes défauts',
        entries: [
          { code: '-', label: 'Défaut fin de course', desc: 'Norme oléodynamique — réarmer le relais FC' },
          { code: '-', label: 'Contrôle retombée des contacteurs' },
          { code: '-', label: 'Petite vitesse trop longue' },
          { code: '-', label: 'Surcharge' },
          { code: '-', label: 'Ordre des phases' },
          { code: '-', label: 'Défaut de sens' },
          { code: '-', label: 'Anti-patinage moteur traction (20 sec)' },
          { code: '-', label: 'Masse 24v' },
          { code: '-', label: 'Extrêmes simultanés' },
          { code: '-', label: 'Défaut de verrouillage', desc: 'Reste affiché après disparition du défaut' },
          { code: '-', label: 'CCO toujours valide en marche' },
          { code: '-', label: 'Anti-patinage moteur porte', desc: 'Défaut verrouillage + 2 sec' },
          { code: '-', label: 'En révision', desc: 'Après la révision faire un appel' },
          { code: '-', label: 'Détection de sonde thermique', desc: 'Reste affiché après disparition du défaut' },
          { code: '-', label: 'Cellules, chocs ou réouverture actionnés' },
          { code: '-', label: 'Mode pompier' },
          { code: '-', label: 'Défaut de mémoire électrique' },
          { code: '-', label: 'Défaut de cohérence des paramètres et de la mémoire électrique' },
          { code: '-', label: 'Court-circuit sur sortie multiplexeur ou commande d\'afficheur' },
          { code: '-', label: 'Court-circuit sur sortie statique voyant d\'occupation' },
          { code: '-', label: 'Recalage' },
        ]
      }
    ]
  },

  'hydro-blain': {
    slug: 'hydro-blain',
    brandId: 'autres',
    brand: 'Hydraulique',
    title: 'Blain EV10 / EV100',
    subtitle: 'Électrovannes et réglages',
    color: 'slate',
    type: 'fault-codes',
    sections: [
      {
        title: 'Électrovannes',
        entries: [
          { code: 'EV', label: 'Électrovanne Arrêt Montée (si EV100)' },
          { code: 'EV', label: 'Électrovanne PV montée' },
          { code: 'EV', label: 'Électrovanne PV descente' },
          { code: 'EV', label: 'Électrovanne Arrêt Descente' },
          { code: '-', label: 'Vanne Descente Manuel' },
          { code: '-', label: 'Valve de Surpression' },
          { code: '-', label: 'Sécurité Piston (si appareil mouflé)' },
        ]
      },
      {
        title: 'Réglage des vis',
        entries: [
          { code: 'VIS 1', label: 'Réglage du BY-PASS' },
          { code: 'VIS 2', label: 'Démarrage Montée' },
          { code: 'VIS 3', label: 'Ralentissement Montée' },
          { code: 'VIS 4', label: 'Petite Vitesse Montée' },
          { code: 'VIS 5', label: 'Arrêt en Montée (si EV100)' },
          { code: 'VIS 6', label: 'Démarrage Descente' },
          { code: 'VIS 7', label: 'Grande Vitesse Descente' },
          { code: 'VIS 8', label: 'Ralentissement Descente' },
          { code: 'VIS 9', label: 'Petite Vitesse Descente' },
        ]
      }
    ]
  },

  'hydro-gmv': {
    slug: 'hydro-gmv',
    brandId: 'autres',
    brand: 'Hydraulique',
    title: 'GMV 3010 EN',
    subtitle: 'Réglages et composants centrale hydraulique',
    color: 'slate',
    type: 'fault-codes',
    sections: [
      {
        title: 'Réglages',
        entries: [
          { code: '-', label: 'Vis de pression de sécurité', desc: 'Visser pour augmenter la pression maxi' },
          { code: '-', label: 'Vis de petite vitesse (D-E Montée, H-I Descente)', desc: 'Dévisser pour augmenter la petite vitesse' },
          { code: '-', label: 'Vis de décélération (CD Montée, GH Descente)', desc: 'Visser pour augmenter le temps de passage GV-PV' },
          { code: '-', label: 'Vis d\'accélération en montée', desc: 'Visser pour démarrage lent' },
          { code: '-', label: 'Vis d\'essai de la valve parachute', desc: 'Visser à fond pour provoquer la prise' },
          { code: '-', label: 'Robinet d\'isolement du manomètre' },
          { code: '-', label: 'Réglage pression sur piston (2/1 mouflé)' },
          { code: '-', label: 'Vis de grande vitesse', desc: 'Régler de manière à ce que l\'huile ne revienne pas à la cuve' },
          { code: '-', label: 'Réglage Vitesse Descente', desc: 'Visser pour augmentation' },
          { code: '-', label: 'Manoeuvre Secours Descente' },
          { code: '-', label: 'Manoeuvre Secours Montée' },
          { code: '-', label: 'Vis Purge PAM' },
          { code: '-', label: 'Vis réglage pression pompe à main' },
        ]
      },
      {
        title: 'Composants',
        entries: [
          { code: 'VRP', label: 'Vanne Anti-retour' },
          { code: '-', label: 'Vanne régulatrice d\'équilibrage' },
          { code: 'VML', label: 'Électrovanne de nivelage' },
          { code: 'VMD', label: 'Électrovanne de descente' },
          { code: '-', label: 'Vanne de sécurité' },
          { code: 'VRF', label: 'Vanne régulatrice de débit' },
          { code: '-', label: 'Vanne anti-retour' },
          { code: 'VRFP', label: 'Valve régulatrice de débit parallèle' },
          { code: '-', label: 'Valve de pression' },
          { code: 'VMP', label: 'Électrovanne démarrage étoile-triangle' },
          { code: 'VSMA', label: 'Valve manuelle anti-descente du piston' },
        ]
      }
    ]
  },

  'thyssen-link': {
    slug: 'thyssen-link',
    brandId: 'thyssenkrupp',
    brand: 'ThyssenKrupp',
    title: 'Tableau de Bord LINK',
    subtitle: 'Principe de réglage et paramétrage',
    color: 'purple',
    type: 'fault-codes',
    sections: [
      {
        title: 'Accès au menu Paramétrage',
        note: '(1) Appuyer sur les touches ◄ et ► en même temps. (2) Entrer le code : 9012 (code par défaut). (3) Valider avec la touche ✓.',
        entries: []
      },
      {
        title: 'Menu Paramétrage',
        entries: [
          { code: 'Langue', label: 'Vérifier si le paramètre Langue est correct' },
          { code: 'Accès', label: 'Attribuer le tableau de bord à l\'accès correspondant', desc: '1 = accès principal, 1bis = 2ème tableau accès principal, 2 = accès secondaire, 2bis = 2ème tableau accès secondaire' },
          { code: 'TVal', label: 'Temps de Validation et Temps d\'affichage' },
          { code: 'Date/Heure', label: 'Vérifier si la date et l\'heure sont correctes' },
        ]
      }
    ]
  },

  'thyssen-d46': {
    slug: 'thyssen-d46',
    brandId: 'thyssenkrupp',
    brand: 'ThyssenKrupp',
    title: 'D4/6 V2',
    subtitle: 'Position des potentiomètres sur la carte',
    color: 'purple',
    type: 'fault-codes',
    sections: [
      {
        title: 'Réglages potentiomètres',
        entries: [
          { code: 'DEOU', label: 'Vitesse en début d\'ouverture', desc: 'Tourner le potentiomètre DEOU du côté + pour augmenter, côté - pour diminuer' },
          { code: 'VROU', label: 'Vitesse d\'ouverture', desc: 'Tourner le potentiomètre VROU du côté + pour augmenter, côté - pour diminuer' },
          { code: 'RLOU', label: 'Vitesse en fin d\'ouverture', desc: 'Tourner le potentiomètre RLOU du côté + pour augmenter, côté - pour diminuer' },
          { code: 'VRFE', label: 'Vitesse en fermeture', desc: 'Tourner le potentiomètre VRFE du côté + pour augmenter, côté - pour diminuer' },
          { code: 'RLFE', label: 'Vitesse de fin de fermeture (sur opérateurs V2.2)', desc: 'Tourner le potentiomètre RLFE du côté + pour augmenter, côté - pour diminuer' },
        ]
      }
    ]
  },

  // ===================== MEA =====================

  'mea-ng01': {
    slug: 'mea-ng01',
    brandId: 'mea',
    brand: 'MEA',
    title: 'MEA NG01',
    subtitle: 'Affichage LED sur carte manoeuvre NG01',
    color: 'orange',
    codeStyle: 'lcd',
    sections: [
      {
        title: 'Codes défauts',
        entries: [
          { code: 'image002', codeImgs: ['/mea/ng01/image002.gif'], label: 'Le point indique que au moins une des deux boîtes extrêmes est actionnée.' },
          { code: 'image010', codeImgs: ['/mea/ng01/image010.gif'], label: 'Coupure d\'un faisceau capteur > 2 secondes en marche.' },
          { code: 'image012', codeImgs: ['/mea/ng01/image012.gif'], label: 'Non retombée d\'un contacteur (voir entrée CCO).' },
          { code: 'image014', codeImgs: ['/mea/ng01/image014.gif'], label: 'PV supérieur à 7/14 secondes suivant paramétrage.' },
          { code: 'image016', codeImgs: ['/mea/ng01/image016.gif'], label: 'Surcharge appareil au niveau porte ouverte.' },
          { code: 'image018', codeImgs: ['/mea/ng01/image018.gif'], label: 'Inversion de phases.' },
          { code: 'image020', codeImgs: ['/mea/ng01/image020.gif'], label: 'Inversion de sens de déplacement.' },
          { code: 'image022', codeImgs: ['/mea/ng01/image022.gif'], label: 'Anti-patinage moteur traction (20 sec)' },
          { code: 'image024', codeImgs: ['/mea/ng01/image024.gif'], label: 'Détection d\'une masse.' },
          { code: 'image026', codeImgs: ['/mea/ng01/image026.gif'], label: 'Les deux fin de course PV sont coupés.' },
          { code: 'image028', codeImgs: ['/mea/ng01/image028.gif'], label: 'Attente de la dernière sécurité après un ordre de départ. (réglable potentiomètre P9, P21).' },
          { code: 'image030', codeImgs: ['/mea/ng01/image030.gif'], label: 'Sonde thermique, changement d\'état entre TH1, TH2.' },
          { code: 'image032', codeImgs: ['/mea/ng01/image032.gif'], label: 'Défaut de mémoire EEPROM.' },
          { code: 'image034', codeImgs: ['/mea/ng01/image034.gif'], label: 'Incohérence de paramétrage.' },
          { code: 'image036', codeImgs: ['/mea/ng01/image036.gif'], label: 'Court-circuit sur une des sorties : DO1, DO2, MU1, MU2, MU3.' },
          { code: 'image038', codeImgs: ['/mea/ng01/image038.gif'], label: 'Courant supérieur à 1,2 A sur la sortie VOC.' },
          { code: 'image040', codeImgs: ['/mea/ng01/image040.gif'], label: 'Protection de porte.' },
          { code: 'image041+image042', codeImgs: ['/mea/ng01/image041.jpg','/mea/ng01/image042.jpg'], label: 'Recalage' },
        ]
      },
      {
        title: 'Fonctions affichées',
        entries: [
          { code: 'image004', codeImgs: ['/mea/ng01/image004.gif'], label: 'En révision' },
          { code: 'image006', codeImgs: ['/mea/ng01/image006.gif'], label: 'En pompier' },
          { code: 'image008', codeImgs: ['/mea/ng01/image008.gif'], label: 'Cellule de porte actionnée' },
        ]
      },
    ]
  },

  'mea-ng02': {
    slug: 'mea-ng02',
    brandId: 'mea',
    brand: 'MEA',
    title: 'MEA NG02',
    subtitle: 'Codes défauts affichés sur le display 7 segments NG02',
    color: 'orange',
    codeStyle: 'lcd',
    sections: [
      {
        title: 'Codes défauts',
        entries: [
          { code: '01',   codeImgs: ['/mea/code0.jpg','/mea/code1.jpg'], label: 'L\'appareil a effectué un recalage (coupure secteur, fin d\'inspection, suite à défaut)' },
          { code: '02',   codeImgs: ['/mea/code0.jpg','/mea/code2.jpg'], label: 'Contrôle retombée des contacteurs (un des contacts entre CCO et REF est resté ouvert)' },
          { code: '03',   codeImgs: ['/mea/code0.jpg','/mea/code3.jpg'], label: 'PV trop longue (paramétrable) — a duré plus de 7 ou 14 secondes' },
          { code: '04',   codeImgs: ['/mea/code0.jpg','/mea/code4.jpg'], label: 'Surcharge (l\'entrée SUR est alimentée)' },
          { code: '06',   codeImgs: ['/mea/code0.jpg','/mea/code6.jpg'], label: 'Défaut de sens (intervient uniquement au recalage — voir AGH, AGB et le capteur)' },
          { code: '7b',   codeImgs: ['/mea/code7.jpg','/mea/codeb.jpg'], label: 'Antipatinage descente (les faisceaux du capteur n\'ont pas bougé pendant + de 20s)' },
          { code: '7HH',  codeImgs: ['/mea/code7.jpg','/mea/codehh.jpg'], label: 'Antipatinage montée (les faisceaux du capteur n\'ont pas bougé pendant + de 20s)' },
          { code: '08',   codeImgs: ['/mea/code0.jpg','/mea/code8.jpg'], label: 'Masse : le connecteur REF ou 24CC ou DO1 ou TH1 ou TH2 a une liaison avec la terre' },
          { code: '0E',   codeImgs: ['/mea/code0.jpg','/mea/codee.jpg'], label: 'Détection incendie — au moins une des entrées incendie n\'a pas été alimentée' },
          { code: 'to.',  codeImgs: ['/mea/codet.jpg','/mea/codeobas.jpg'], label: 'Secours tobia actif (l\'entrée EL3 de la carte NG12 est alimentée)' },
          { code: '9b',   codeImgs: ['/mea/code9.jpg','/mea/codeb.jpg'], label: 'Boîte arrêt GV bas actionnée quand ascenseur en haut (si AGB ok → ascenseur en service)' },
          { code: '9HH',  codeImgs: ['/mea/code9.jpg','/mea/codehh.jpg'], label: 'Boîte arrêt GV haut actionnée quand ascenseur en bas (si AGH ok → ascenseur en service)' },
          { code: '9A',   codeImgs: ['/mea/code9.jpg','/mea/codea.jpg'], label: 'Extrêmes simultanés (les entrées AGH et AGB sont coupées en même temps)' },
          { code: '13',   codeImgs: ['/mea/code1.jpg','/mea/code3.jpg'], label: 'Coupure de l\'entrée SE3 pendant la marche' },
          { code: '14',   codeImgs: ['/mea/code1.jpg','/mea/code4.jpg'], label: 'Coupure de l\'entrée SE4 pendant la marche' },
          { code: '20+31',codeImgs: ['/mea/code2.jpg','/mea/code0.jpg','/mea/code3.jpg','/mea/code1.jpg'], label: 'Défaut verrouillages — retrancher 20 de l\'indication pour obtenir le niveau du défaut' },
          { code: '50+61',codeImgs: ['/mea/code5.jpg','/mea/code0.jpg','/mea/code6.jpg','/mea/code1.jpg'], label: 'Coupure sécurité 6 en marche — retrancher 50 de l\'indication pour obtenir le niveau' },
          { code: 'A0',   codeImgs: ['/mea/codea.jpg','/mea/code0.jpg'], label: 'Antipatinage ouverture porte A (FCOA n\'a pas été actionné dans les temps)' },
          { code: 'AF',   codeImgs: ['/mea/codea.jpg','/mea/codef.jpg'], label: 'Antipatinage fermeture porte A (FCFA n\'a pas été actionné dans les temps)' },
          { code: 'b0',   codeImgs: ['/mea/codeb.jpg','/mea/code0.jpg'], label: 'Antipatinage ouverture porte B (FCOB n\'a pas été actionné dans les temps)' },
          { code: 'bF',   codeImgs: ['/mea/codeb.jpg','/mea/codef.jpg'], label: 'Antipatinage fermeture porte B (FCFB n\'a pas été actionné dans les temps)' },
          { code: '0A',   codeImgs: ['/mea/code0.jpg','/mea/codea.jpg'], label: 'Court-circuit sur DO1' },
          { code: '0t',   codeImgs: ['/mea/code0.jpg','/mea/codet.jpg'], label: 'Sonde thermique (voir les entrées TH1, TH2)' },
          { code: '0H',   codeImgs: ['/mea/code0.jpg','/mea/codeh.jpg'], label: 'Défaut mémoire électrique' },
          { code: '0L',   codeImgs: ['/mea/code0.jpg','/mea/codel.jpg'], label: 'Court-circuit ou surcharge, sortie VOC ou sortie voyants enregistrés' },
          { code: '0F',   codeImgs: ['/mea/code0.jpg','/mea/codef.jpg'], label: 'Défaut oléo (l\'entrée OLE est ou a été alimentée — voir paramètre FC)' },
          { code: '1HH',  codeImgs: ['/mea/code1.jpg','/mea/codehh.jpg'], label: 'Alimentation carte de base < 17V en marche (dès que la tension est correcte → recalage)' },
          { code: '1b',   codeImgs: ['/mea/code1.jpg','/mea/codeb.jpg'], label: 'Alimentation carte de base < 17V à l\'arrêt (dès que la tension est correcte → recalage)' },
          { code: '0o̅',   codeImgs: ['/mea/code0.jpg','/mea/codeo_haut.jpg'], label: 'CCO toujours valide en marche' },
          { code: 'bA',   codeImgs: ['/mea/codeb.jpg','/mea/codea.jpg'], label: 'Mémorisation du bouton d\'arrêt (en porte manuelle la borne 3 est coupée pendant la marche)' },
          { code: 'dE',   codeImgs: ['/mea/coded.jpg','/mea/codee.jpg'], label: 'Décalage sélection — le point pile à niveau est allumé alors qu\'au moins une des deux LED FAI/FAS est éteinte' },
          { code: 'Ad',   codeImgs: ['/mea/codea.jpg','/mea/coded.jpg'], label: 'Arrêt de la cabine hors zone de porte — après 5 arrêts, effacement des appels et recalage' },
          { code: 'AN',   codeImgs: ['/mea/codea.jpg','/mea/coden.jpg'], label: 'Anti nuisance — effacement des envois cabine après un nombre d\'arrêts sans que la cellule soit actionnée' },
          { code: 'dI',   codeImgs: ['/mea/coded.jpg','/mea/codei.jpg'], label: 'Dispatcher — si l\'entrée SE6 est coupée plus de 3 mn, la sortie ISO de la carte est activée' },
        ]
      },
      {
        title: 'Fonctions affichées',
        entries: [
          { code: '0r',   codeImgs: ['/mea/code0.jpg','/mea/coder.jpg'], label: 'Révision — faire un appel au palier pour repartir' },
          { code: '0CC',  codeImgs: ['/mea/code0.jpg','/mea/codecc.jpg'], label: 'Cellule, Choc — réouverture porte A' },
          { code: '1CC',  codeImgs: ['/mea/code1.jpg','/mea/codecc.jpg'], label: 'Cellule, Choc — réouverture porte B' },
          { code: '0P',   codeImgs: ['/mea/code0.jpg','/mea/codep.jpg'], label: 'Pompier' },
          { code: '0_',   codeImgs: ['/mea/code0.jpg','/mea/code_.jpg'], label: 'Recalage' },
          { code: '17',   codeImgs: ['/mea/code1.jpg','/mea/code7.jpg'], label: 'Liftier' },
          { code: 'CC',   codeImgs: ['/mea/codec.jpg','/mea/codec.jpg'], label: 'Complet' },
          { code: 'CA',   codeImgs: ['/mea/codec.jpg','/mea/codea.jpg'], label: 'Pas de communication entre armoires — vérifier paramètres DL et CD, et les 2 interfaces de communication' },
          { code: '.HH',  codeImgs: ['/mea/code.jpg','/mea/codehh.jpg'], label: 'Incohérence des paramètres entre les 2 armoires (nombre de niveaux, type de manœuvre, norme U36)' },
          { code: 'LLN',  codeImgs: ['/mea/codell.jpg','/mea/coden.jpg'], label: 'L\'armoire concernée est indisponible — les appels sont pris en charge par l\'autre armoire' },
        ]
      },
    ]
  },

  'mea-ng12': {
    slug: 'mea-ng12',
    brandId: 'mea',
    brand: 'MEA',
    title: 'MEA NG12',
    subtitle: 'Codes défauts affichés sur le display 7 segments NG12 (avec détails)',
    color: 'orange',
    codeStyle: 'lcd',
    sections: [
      {
        title: 'Codes défauts',
        entries: [
          { code: '01', codeImgs: ['/mea/code0.jpg','/mea/code1.jpg'], label: 'Coupure secteur' },
          { code: '02', codeImgs: ['/mea/code0.jpg','/mea/code2.jpg'], label: 'Contrôle retombée des contacteurs' },
          { code: '03', codeImgs: ['/mea/code0.jpg','/mea/code3.jpg'], label: 'PV trop longue' },
          { code: '04', codeImgs: ['/mea/code0.jpg','/mea/code4.jpg'], label: 'Surcharge' },
          { code: '06', codeImgs: ['/mea/code0.jpg','/mea/code6.jpg'], label: 'Défaut de sens' },
          { code: '08', codeImgs: ['/mea/code0.jpg','/mea/code8.jpg'], label: 'Masse sur le 24V carte' },
          { code: '0A', codeImgs: ['/mea/code0.jpg','/mea/codea.jpg'], label: 'Court-circuit sur DO1' },
          { code: '0E', codeImgs: ['/mea/code0.jpg','/mea/codee.jpg'], label: 'Détection Incendie' },
          { code: '0F', codeImgs: ['/mea/code0.jpg','/mea/codef.jpg'], label: 'Défaut oléo' },
          { code: '0H', codeImgs: ['/mea/code0.jpg','/mea/codeh.jpg'], label: 'Défaut mémoire électrique' },
          { code: '0L', codeImgs: ['/mea/code0.jpg','/mea/codel.jpg'], label: 'Court-circuit sortie "VOC" ou sur une sortie de la carte voyant' },
          { code: '0t', codeImgs: ['/mea/code0.jpg','/mea/codet.jpg'], label: 'Sonde thermique' },
          { code: '0o̅', codeImgs: ['/mea/code0.jpg','/mea/codeo_haut.jpg'], label: 'Défaut entrée CCO' },
          { code: '13', codeImgs: ['/mea/code1.jpg','/mea/code3.jpg'], label: 'Coupure sécurité en marche' },
          { code: '14', codeImgs: ['/mea/code1.jpg','/mea/code4.jpg'], label: 'Coupure sécurité 4 en marche' },
          { code: '1HH', codeImgs: ['/mea/code1.jpg','/mea/codehh.jpg'], label: 'Baisse tension 24V d\'alimentation de la carte pendant le déplacement de l\'ascenseur' },
          { code: '1b', codeImgs: ['/mea/code1.jpg','/mea/codeb.jpg'], label: 'Baisse tension 24V' },
          { code: '2043', codeImgs: ['/mea/code2.jpg','/mea/code0.jpg','/mea/code4.jpg','/mea/code3.jpg'], label: 'Défaut de verrouillage — retrancher 20 de l\'indication pour obtenir le niveau' },
          { code: '5073', codeImgs: ['/mea/code5.jpg','/mea/code0.jpg','/mea/code7.jpg','/mea/code3.jpg'], label: 'Coupure sécurité 6 en marche — retrancher 50 de l\'indication pour obtenir le niveau' },
          { code: '7HH', codeImgs: ['/mea/code7.jpg','/mea/codehh.jpg'], label: 'Antipatinage moteur traction en montée' },
          { code: '7d', codeImgs: ['/mea/code7.jpg','/mea/coded.jpg'], label: 'Antipatinage moteur traction en descente' },
          { code: '9t', codeImgs: ['/mea/code9.jpg','/mea/codet.jpg'], label: 'Arrêt GV bas resté actionné' },
          { code: '9HH', codeImgs: ['/mea/code9.jpg','/mea/codehh.jpg'], label: 'Arrêt GV haut resté actionné' },
          { code: '9A', codeImgs: ['/mea/code9.jpg','/mea/codea.jpg'], label: 'Extrêmes simultanés' },
          { code: 'A0', codeImgs: ['/mea/codea.jpg','/mea/code0.jpg'], label: 'Antipatinage porte A en ouverture' },
          { code: 'AF', codeImgs: ['/mea/codea.jpg','/mea/codef.jpg'], label: 'Antipatinage porte A en fermeture' },
          { code: 'bA', codeImgs: ['/mea/codeb.jpg','/mea/codea.jpg'], label: 'Mémorisation du bouton d\'arrêt' },
          { code: 'b0', codeImgs: ['/mea/codeb.jpg','/mea/code0.jpg'], label: 'Antipatinage porte B en ouverture' },
          { code: 'bF', codeImgs: ['/mea/codeb.jpg','/mea/codef.jpg'], label: 'Antipatinage porte B en fermeture' },
          { code: 'dE', codeImgs: ['/mea/coded.jpg','/mea/codee.jpg'], label: 'Décalage de sélection' },
          { code: 'to.', codeImgs: ['/mea/codet.jpg','/mea/codeobas.jpg'], label: 'Détection du fonctionnement en mode secours Tobia intégré' },
          { code: 'AN', codeImgs: ['/mea/codea.jpg','/mea/coden.jpg'], label: 'Antinuisance' },
          { code: 'Ad', codeImgs: ['/mea/codea.jpg','/mea/coded.jpg'], label: 'Arrêt dépassé' },
          { code: 'dI', codeImgs: ['/mea/coded.jpg','/mea/codei.jpg'], label: 'Dispatcher' },
        ]
      },
      {
        title: 'Fonctions affichées',
        entries: [
          { code: '0r', codeImgs: ['/mea/code0.jpg','/mea/coder.jpg'], label: 'Révision (faire un appel au palier pour repartir)' },
          { code: '0CC', codeImgs: ['/mea/code0.jpg','/mea/codecc.jpg'], label: 'Cellule, Choc, réouverture porte A' },
          { code: '1CC', codeImgs: ['/mea/code1.jpg','/mea/codecc.jpg'], label: 'Cellule, Choc, réouverture porte B' },
          { code: '0P', codeImgs: ['/mea/code0.jpg','/mea/codep.jpg'], label: 'Pompier' },
          { code: '0_', codeImgs: ['/mea/code0.jpg','/mea/code_.jpg'], label: 'Recalage' },
          { code: '17', codeImgs: ['/mea/code1.jpg','/mea/code7.jpg'], label: 'Liftier' },
          { code: 'CC', codeImgs: ['/mea/codec.jpg','/mea/codec.jpg'], label: 'Complet' },
        ]
      },
      {
        title: 'Mode Programme',
        note: '1) + ou - pour changer de paramètre  •  2) DEF pour visualiser la valeur  •  3) + ou - pour incrémenter la valeur  •  4) PRG pour sortir du mode programme',
        entries: [
          { code: 'FC', codeImgs: ['/mea/codef.jpg','/mea/codec.jpg'], label: 'Fin de course oléo — 00=normal ou 01=défaut' },
          { code: 'PC', codeImgs: ['/mea/codep.jpg','/mea/codec.jpg'], label: 'Tempo priorité cabine (unité en seconde)' },
          { code: 'SP', codeImgs: ['/mea/codes.jpg','/mea/codep.jpg'], label: 'Tempo stat porte ouverte (unité en seconde)' },
          { code: 'rA', codeImgs: ['/mea/coder.jpg','/mea/codea.jpg'], label: 'Tempo retour auto (unité en minute)' },
          { code: 'dP', codeImgs: ['/mea/coded.jpg','/mea/codep.jpg'], label: 'Tempo défaut de pêne (unité en seconde)' },
          { code: 'rE', codeImgs: ['/mea/coder.jpg','/mea/codee.jpg'], label: 'Vitesse révision — 00=PV ou 01=GV' },
          { code: 'PA', codeImgs: ['/mea/codep.jpg','/mea/codea.jpg'], label: 'Porte A — 00=H/T ou 01=S/T' },
          { code: 'Pd', codeImgs: ['/mea/codep.jpg','/mea/coded.jpg'], label: 'Porte B — 00=H/T ou 01=S/T' },
          { code: 'C1', codeImgs: ['/mea/codec.jpg','/mea/code1.jpg'], label: 'Valeur compteur 1' },
          { code: 'C2', codeImgs: ['/mea/codec.jpg','/mea/code2.jpg'], label: 'Valeur compteur 2' },
          { code: 'C3', codeImgs: ['/mea/codec.jpg','/mea/code3.jpg'], label: 'Valeur compteur 3' },
          { code: 'C4', codeImgs: ['/mea/codec.jpg','/mea/code4.jpg'], label: 'Valeur compteur 4' },
        ]
      },
    ]
  },

  // ===================== KONE =====================

  'kone-epb1': {
    slug: 'kone-epb1',
    brandId: 'kone',
    brand: 'Kone',
    title: 'EPB-1 Servoconfort',
    subtitle: 'Codes défauts affichés sur le display EPB-1 (= + caractère)',
    color: 'sky',
    codeStyle: 'lcd',
    sections: [
      {
        title: 'Codes défauts',
        entries: [
          { code: '=A',   codeImg: ['/epb1/CODE_EG.JPG','/epb1/code_A.jpg'],      label: 'Défaut ouverture porte cabine', desc: 'L\'ordre d\'ouverture de la porte cabine a été donné et 15 secondes après, la porte n\'a pas atteint son fin de course ouverture' },
          { code: '=b',   codeImg: ['/epb1/CODE_EG.JPG','/epb1/CODE_B.JPG'],      label: 'Frein reste levé' },
          { code: '=9',   codeImg: ['/epb1/CODE_EG.JPG','/epb1/CODE_9.JPG'],      label: 'Frein ne s\'est pas levé' },
          { code: '=C',   codeImg: ['/epb1/CODE_EG.JPG','/epb1/code_C.jpg'],      label: 'Défaut fermeture porte / verrouillage paliers', desc: 'Le contrôle fermeture porte cabine (gâche) ou le contrôle verrouillage porte palières n\'est pas obtenu après 15 secondes' },
          { code: '=CH',  codeImg: ['/epb1/CODE_EG.JPG','/epb1/CODE_CH.JPG'],     label: 'Contact de réouverture coincé (bouton coincé)', desc: 'En porte automatique un contact de réouverture est resté fermé' },
          { code: '=d',   codeImg: ['/epb1/CODE_EG.JPG','/epb1/CODE_D.JPG'],      label: 'Temps de course dépassé ou recalage échoué', desc: 'Le temps de course entre deux tops d\'information niveau à niveau est supérieur au temps programmé, ou le recalage ne s\'effectue pas après 4 tentatives' },
          { code: '=E',   codeImg: ['/epb1/CODE_EG.JPG','/epb1/code_E.jpg'],      label: 'Relais 521:U et 521:N alimentés simultanément' },
          { code: '=F',   codeImg: ['/epb1/CODE_EG.JPG','/epb1/code_F.jpg'],      label: 'Top d\'arrêt non trouvé 10s après début ralentissement', desc: '10 secondes après le début de ralentissement, la cabine n\'a pas rencontré son top d\'arrêt (identique pour appareil à 1 ou 2 vitesses)' },
          { code: '=HH',  codeImg: ['/epb1/CODE_EG.JPG','/epb1/code_HH.jpg'],     label: 'Contacteur resté au collage avant enregistrement' },
          { code: '=Hin', codeImg: ['/epb1/CODE_EG.JPG','/epb1/CODE_HIN.JPG'],    label: 'Contacteur 201:U ou 201:N ne va pas au collage', desc: 'En phase de départ le contacteur 201:U ou 201:N ne va pas au collage' },
          { code: '=h',   codeImg: ['/epb1/CODE_EG.JPG','/epb1/CODE_H.JPG'],      label: 'Sélection décalée (deux lignes d\'impulsion)' },
          { code: '=L',   codeImg: ['/epb1/CODE_EG.JPG','/epb1/code_L.jpg'],      label: 'Contacts de ralentissement 136:N et 136:U ouverts ensemble' },
          { code: '=L̲',   codeImg: ['/epb1/CODE_EG.JPG','/epb1/code_Linv.jpg'],   label: 'Ordre enregistré sur fin de gaine', desc: 'Un ordre montée ou descente est enregistré alors que la cabine est déjà sur un contact fin de gaine' },
          { code: '=o.',  codeImg: ['/epb1/CODE_EG.JPG','/epb1/code_obas.jpg'],   label: 'Sélection ne lit pas les infos de ralentissement', desc: 'Configuration deux lignes d\'oscillateurs ou impulseur — pendant le fonctionnement, la sélection ne lit pas une ou plusieurs informations de ralentissement' },
          { code: '=o̅',   codeImg: ['/epb1/CODE_EG.JPG','/epb1/code_ohau.jpg'],   label: 'Info d\'arrêt 62:U ou 62:N non donnée', desc: 'Dans la configuration deux lignes d\'oscillateurs, une info d\'arrêt 62:U ou 62:N n\'est pas donnée' },
          { code: '=P',   codeImg: ['/epb1/CODE_EG.JPG','/epb1/CODE_P.JPG'],      label: 'Cabine ne quitte pas son étage', desc: 'Un ordre de montée ou descente est donné mais la cabine ne quitte pas son étage' },
          { code: '=S',   codeImg: ['/epb1/CODE_EG.JPG','/epb1/code_S.jpg'],      label: 'Chaîne de sécurité s\'ouvre pendant la course' },
          { code: '=t',   codeImg: ['/epb1/CODE_EG.JPG','/epb1/CODE_T.JPG'],      label: 'Thermique déclenché' },
          { code: '=u.',  codeImg: ['/epb1/CODE_EG.JPG','/epb1/code_ubas.jpg'],   label: 'Signal oscillateur reste donné au passage d\'un top', desc: 'Pendant une course au passage d\'un top oscillateur ou impulseur, le signal reste donné' },
          { code: '=rin', codeImg: ['/epb1/CODE_EG.JPG','/epb1/CODE_RIN.JPG'],    label: 'Course de synchronisation en cours (recalage)' },
          { code: '=o̅-',  codeImg: ['/epb1/CODE_EG.JPG','/epb1/code_ohau-.jpg'],  label: 'Erreur de programmation des switchs' },
          { code: '=LHB', codeImg: ['/epb1/CODE_EG.JPG','/epb1/code_LHB.jpg'],    label: 'Appareil en inspection' },
          { code: '==.',  codeImg: ['/epb1/CODE_EG.JPG','/epb1/code_egalbas.jpg'],label: 'Appareil hors service' },
          { code: '=4̲',   codeImg: ['/epb1/CODE_EG.JPG','/epb1/code_4barre.jpg'], label: 'Mauvaise fonction de la RAM du micro' },
          { code: '=2=',  codeImg: ['/epb1/CODE_EG.JPG','/epb1/code_2egal.jpg'],  label: 'Pas de communication entre les deux micros' },
          { code: '=2̲',   codeImg: ['/epb1/CODE_EG.JPG','/epb1/code_2barre.jpg'], label: 'Mauvaise fonction de la mémoire ROM de l\'esclave' },
          { code: '=n̅',   codeImg: ['/epb1/CODE_EG.JPG','/epb1/code_uinvhau.jpg'],label: 'Micro principal sans communication avec secondaire', desc: 'Pendant une période le micro principal n\'a pu communiquer avec le secondaire' },
          { code: '=n.',  codeImg: ['/epb1/CODE_EG.JPG','/epb1/code_uinvbas.jpg'],label: 'Micro stoppe sa transmission (défaut de carte)' },
          { code: '=c.',  codeImg: ['/epb1/CODE_EG.JPG','/epb1/code_cbas.jpg'],   label: 'Contacts 523 et 203:H trouvés fermés au démarrage' },
          { code: '=C̲',   codeImg: ['/epb1/CODE_EG.JPG','/epb1/code_Cinver.jpg'], label: 'Contacteur 203:H n\'a pas coupé 2s après l\'information' },
          { code: '=F̲A',  codeImg: ['/epb1/CODE_EG.JPG','/epb1/code_Finvera.jpg'],label: 'Contact 523 retombé avant l\'arrêt de l\'appareil' },
          { code: '=F̲',   codeImg: ['/epb1/CODE_EG.JPG','/epb1/code_Finver.jpg'], label: 'Contact 523 non retombé après l\'arrêt de la cabine' },
          { code: '=U',   codeImg: ['/epb1/CODE_EG.JPG','/epb1/code_U.jpg'],      label: 'Top d\'arrêt non trouvé lors du ralentissement' },
          { code: '=n',   codeImg: ['/epb1/CODE_EG.JPG','/epb1/code_Uinv.jpg'],   label: 'Défaut au démarrage étoile triangle' },
          { code: '=r̲',   codeImg: ['/epb1/CODE_EG.JPG','/epb1/code_rinver.jpg'], label: 'Marche en renivelage' },
          { code: '=18',  codeImg: ['/epb1/CODE_EG.JPG','/epb1/CODE1_8.JPG'],     label: 'Circuit ULN 2003 hors service' },
        ]
      },
      {
        title: 'LEDs de la carte EPB-1',
        note: 'Chaque LED indique l\'état d\'un circuit. Une LED allumée signifie que le signal correspondant est actif.',
        entries: [
          { code: 'L1',  label: 'Grande vitesse active' },
          { code: 'L2',  label: 'Petite vitesse active' },
          { code: 'L3',  label: 'Enregistrement active' },
          { code: 'L4',  label: 'Mode inspection active' },
          { code: 'L5',  label: 'Enregistrement descente' },
          { code: 'L6',  label: 'État des contacts de gaine (136)', desc: 'Éteinte si les contacts sont ouverts simultanément' },
          { code: 'L7',  label: 'État contacteur fermeture porte' },
          { code: 'L8',  label: 'État contacteur ouverture porte A' },
          { code: 'L9',  label: 'État du processeur' },
          { code: 'L10', label: 'État contacteur ouverture porte B' },
          { code: 'L11', label: 'Alimentation +24V présente' },
          { code: 'L12', label: 'Alimentation +5V présente' },
          { code: 'L13', label: 'Oscillateur montée' },
          { code: 'L14', label: 'Ligne sécurité + préliminaire de porte' },
          { code: 'L15', label: 'Ligne sécurité + préliminaire + verrouillage de portes' },
          { code: 'L16', label: 'Oscillateur descente' },
        ]
      },
    ]
  },

  'kone-epb2': {
    slug: 'kone-epb2',
    brandId: 'kone',
    brand: 'Kone',
    title: 'EPB-2 Servoconfort',
    subtitle: 'Codes défauts affichés sur le display EPB-2 (numéro + code lettre)',
    color: 'sky',
    codeStyle: 'lcd',
    sections: [
      {
        title: 'Codes défauts',
        entries: [
          { code: '1 =A',    codeImgs: ['/epb2/code1.jpg','/epb2/code_egalbas.jpg','/epb2/code_A.jpg'],       label: 'Pas de signal d\'ouverture 85:SGA 15 sec après ordre ouverture' },
          { code: '2 =b',    codeImgs: ['/epb2/code2.jpg','/epb2/code_egalbas.jpg','/epb2/code_b.jpg'],       label: 'Le frein reste levé. Portes cabines fermées tant que contact frein pas revenu normal' },
          { code: '3 =9',    codeImgs: ['/epb2/code3.jpg','/epb2/code_egalbas.jpg','/epb2/code_9.jpg'],       label: 'Le frein ne s\'est pas levé' },
          { code: '4 =C',    codeImgs: ['/epb2/code4.jpg','/epb2/code_egalbas.jpg','/epb2/code_C.jpg'],       label: 'Contrôle fermeture porte ou verrouillage palières non obtenu — annulation après 5 essais' },
          { code: '5 =CH',   codeImgs: ['/epb2/code5.jpg','/epb2/code_egalbas.jpg','/epb2/code_ch.jpg'],      label: 'En porte auto un contact de réouverture est resté fermé — la porte reste ouverte' },
          { code: '6 =d',    codeImgs: ['/epb2/code6.jpg','/epb2/code_egalbas.jpg','/epb2/code_d.jpg'],       label: 'Temps de course entre niveaux trop long (antipatinage) — appareil à l\'arrêt portes ouvertes' },
          { code: '7 =E',    codeImgs: ['/epb2/code7.jpg','/epb2/code_egalbas.jpg','/epb2/code_E.jpg'],       label: 'L\'appareil ne s\'est pas recalé après 3 essais — cabine stoppe' },
          { code: '8 =F',    codeImgs: ['/epb2/code8.jpg','/epb2/code_egalbas.jpg','/epb2/code_F.jpg'],       label: 'Après 15 sec en PV pas de top d\'arrêt — arrêt immédiat, tentative ouverture si en zone porte' },
          { code: '10 =Hin', codeImgs: ['/epb2/code1.jpg','/epb2/code0.jpg','/epb2/code_egalbas.jpg','/epb2/code_hin.jpg'], label: 'Un contacteur est resté collé avant un enregistrement — enregistrement annulé, portes ouvertes' },
          { code: '11 =h',   codeImgs: ['/epb2/code1.jpg','/epb2/code1.jpg','/epb2/code_egalbas.jpg','/epb2/code_h.jpg'],   label: 'Déplacement de cabine sans appel — arrêt au 1er niveau rencontré' },
          { code: '12 =L',   codeImgs: ['/epb2/code1.jpg','/epb2/code2.jpg','/epb2/code_egalbas.jpg','/epb2/code_L.jpg'],   label: 'Contacts 136:U et 136:N (ralentissement) ouverts ensemble — cabine gardée à l\'étage' },
          { code: '13 =L̲',   codeImgs: ['/epb2/code1.jpg','/epb2/code3.jpg','/epb2/code_egalbas.jpg','/epb2/code_Linv.jpg'], label: 'Enregistrement montée/descente alors que cabine déjà en extrême — appel effacé' },
          { code: '14 =o.',  codeImgs: ['/epb2/code1.jpg','/epb2/code4.jpg','/epb2/code_egalbas.jpg','/epb2/code_obas.jpg'], label: 'Config 2 lignes impulseurs : sélection ne lit pas une/des info(s) de ralentissement' },
          { code: '16 =P',   codeImgs: ['/epb2/code1.jpg','/epb2/code6.jpg','/epb2/code_egalbas.jpg','/epb2/code_p.jpg'],   label: 'Non départ de cabine au bout de 5 sec (élec.) ou 8 sec (hydr.) après un ordre' },
          { code: '17 =S',   codeImgs: ['/epb2/code1.jpg','/epb2/code7.jpg','/epb2/code_egalbas.jpg','/epb2/code_S.jpg'],   label: 'Coupure de chaîne de sécurité en marche — arrêt immédiat' },
          { code: '18 =t',   codeImgs: ['/epb2/code1.jpg','/epb2/code8.jpg','/epb2/code_egalbas.jpg','/epb2/code_t.jpg'],   label: 'Contact 90° déclenché ou thermistance déclenchée — arrêt à un étage portes ouvertes' },
          { code: '19 =u.',  codeImgs: ['/epb2/code1.jpg','/epb2/code9.jpg','/epb2/code_egalbas.jpg','/epb2/code_ubas.jpg'], label: 'Signal d\'un top oscillateur ou impulseur resté donné plus de 15 sec' },
          { code: '20 =rin', codeImgs: ['/epb2/code2.jpg','/epb2/code0.jpg','/epb2/code_egalbas.jpg','/epb2/code_rin.jpg'], label: 'Course de synchronisation (recalage)' },
          { code: '22 =LHB', codeImgs: ['/epb2/code2.jpg','/epb2/code2.jpg','/epb2/code_egalbas.jpg','/epb2/code_LHB.jpg'], label: 'Appareil en inspection' },
          { code: '23 ==.',  codeImgs: ['/epb2/code2.jpg','/epb2/code3.jpg','/epb2/code_egalbas.jpg','/epb2/code_egalbas.jpg'], label: 'Appareil hors service' },
          { code: '24 =L̲m',  codeImgs: ['/epb2/code2.jpg','/epb2/code4.jpg','/epb2/code_egalbas.jpg','/epb2/code2_L-GLmir_inv.jpg'], label: 'Signal "contacteur principal" de V3F-20 absent sur EPB pendant démarrage ou arrêt' },
          { code: '25 =L̲r',  codeImgs: ['/epb2/code2.jpg','/epb2/code5.jpg','/epb2/code_egalbas.jpg','/epb2/code2_L-GLmir_180.jpg'], label: 'V3F-20 perd la position cabine en gaine et communique qu\'une marche de synchronisation est nécessaire' },
          { code: '26 =Lh',  codeImgs: ['/epb2/code2.jpg','/epb2/code6.jpg','/epb2/code_egalbas.jpg','/epb2/code_L_h1.jpg'], label: 'Le V3F-20 exécute la marche d\'initiation' },
          { code: '27 =L̲i',  codeImgs: ['/epb2/code2.jpg','/epb2/code7.jpg','/epb2/code_egalbas.jpg','/epb2/code2_L-GL_inv.jpg'], label: 'Communication série absente entre les deux armoires (carte EPB) — uniquement installation duplex' },
          { code: '28 =n.',  codeImgs: ['/epb2/code2.jpg','/epb2/code8.jpg','/epb2/code_egalbas.jpg','/epb2/code_uinvbas.jpg'], label: 'Arrêt transmission du microprocesseur' },
          { code: '29CC =',  codeImgs: ['/epb2/code2.jpg','/epb2/code9.jpg','/epb2/codecc.jpg','/epb2/code_egalbas.jpg'], label: 'Démarrage TAC-M : relais de signal d\'arrêt (523) activé pendant le démarrage' },
          { code: '31 =F̲A',  codeImgs: ['/epb2/code3.jpg','/epb2/code1.jpg','/epb2/code_egalbas.jpg','/epb2/code_Finvera.jpg'], label: 'Décélération d\'étage TAC-M : relais de signal d\'arrêt (523) non activé' },
          { code: '33 =U',   codeImgs: ['/epb2/code3.jpg','/epb2/code3.jpg','/epb2/code_egalbas.jpg','/epb2/code_U.jpg'], label: 'HYD : pas de top d\'arrêt durant la petite vitesse' },
          { code: '36 =y',   codeImgs: ['/epb2/code3.jpg','/epb2/code6.jpg','/epb2/code_egalbas.jpg','/epb2/code_y.JPG'], label: 'V3F : alarme sur V3F' },
          { code: '37 =rin2',codeImgs: ['/epb2/code3.jpg','/epb2/code7.jpg','/epb2/code_egalbas.jpg','/epb2/code_rin2.JPG'], label: 'HYD : marche en nivelage descente' },
          { code: '38 =rau', codeImgs: ['/epb2/code3.jpg','/epb2/code8.jpg','/epb2/code_egalbas.jpg','/epb2/code_rau.JPG'], label: 'HYD : marche en nivelage montée' },
          { code: '90',      codeImgs: ['/epb2/code9.jpg','/epb2/code0.jpg'], label: 'Défaillance interne' },
          { code: '91',      codeImgs: ['/epb2/code9.jpg','/epb2/code1.jpg'], label: 'Défaut ChA ou ChB ou ChC' },
          { code: '92',      codeImgs: ['/epb2/code9.jpg','/epb2/code2.jpg'], label: 'Croisement du câblage ChA et ChB ou mauvaise polarité 77' },
          { code: '93',      codeImgs: ['/epb2/code9.jpg','/epb2/code3.jpg'], label: 'Nombre incorrect de drapeaux d\'étage ou étages mal programmés' },
          { code: '94',      codeImgs: ['/epb2/code9.jpg','/epb2/code4.jpg'], label: 'Distance de décélération trop longue' },
          { code: '95',      codeImgs: ['/epb2/code9.jpg','/epb2/code5.jpg'], label: 'ChD ne fonctionne pas' },
          { code: '↓↓',      codeImgs: ['/epb2/code - Bas.jpg','/epb2/code - Bas.jpg'], label: 'Pendant la fonction H1 ou H7, le commutateur ChC arrêt ou 77 manque' },
          { code: '↑↑',      codeImgs: ['/epb2/code - Haut.jpg','/epb2/code - Haut.jpg'], label: 'Pendant la fonction H7, les positions de drapeau d\'étage sont incorrectes' },
        ]
      },
      {
        title: 'LEDs de la carte EPB-2',
        entries: [
          { code: 'L1',  label: 'Surveille la commande de relais K7' },
          { code: 'L2',  label: 'Surveille la commande de relais K6' },
          { code: 'L3',  label: 'Surveille la commande de relais K5' },
          { code: 'L4',  label: 'Surveille la commande de relais K4' },
          { code: 'L5',  label: 'Surveille la commande de relais K3' },
          { code: 'L6',  label: 'Surveille la commande de relais K2' },
          { code: 'L7',  label: 'Surveille la commande de relais K1' },
          { code: 'L8',  label: 'Surveille la présence de +24 Vcc après le fusible F3' },
          { code: 'L9',  label: 'Surveille la présence de +5 Vcc — allumée = alimentation correcte' },
          { code: 'L10', label: 'Surveille le chien de garde maître/esclave — clignote si communication OK' },
          { code: 'L11', label: 'Surveille le circuit START PERMIT — allumée quand cabine au repos à l\'étage' },
          { code: 'L12', label: 'Surveille le relais de surcharge moteur — allumée quand thermistance ou contact fermé' },
          { code: 'L13', label: 'Surveille le commutateur 136:U (rephasage haut) — allumée quand cabine en haut' },
          { code: 'L14', label: 'Surveille la décélération descente et/ou commutateur d\'arrêt 61:N' },
          { code: 'L15', label: 'Surveille la décélération montée et/ou commutateur d\'arrêt 61:U — allumée au repos étage' },
          { code: 'L16', label: 'Surveille le commutateur 136:N (rephasage bas) — allumée quand cabine en bas' },
          { code: 'L17', label: 'Surveille la chaîne de sécurité jusqu\'au bouton d\'arrêt' },
          { code: 'L18', label: 'Surveille la chaîne jusqu\'au contact portes palières (portes manuelles)' },
          { code: 'L19', label: 'Surveille la chaîne jusqu\'au contact porte cabine' },
          { code: 'L20', label: 'Surveille la chaîne jusqu\'au contact verrou de porte palière' },
          { code: 'L21', label: 'Surveille la commande fermeture porte accès principal et/ou secondaire' },
          { code: 'L22', label: 'Surveille la commande ouverture porte accès secondaire' },
          { code: 'L23', label: 'Contrôle la commande ouverture porte accès principal' },
          { code: 'L24', label: 'Contrôle le commutateur magnétique de zone de porte (30) — avec EXP 2 A/G' },
        ]
      },
    ]
  },

  'kone-lce': {
    slug: 'kone-lce',
    brandId: 'kone',
    brand: 'Kone',
    title: 'Défauts Resolve LCE',
    subtitle: 'Défauts LCE 1 et LCE 2',
    color: 'sky',
    sections: [
      {
        title: 'Défauts généraux LCE',
        entries: [
          { code: '0001', label: 'Antipatinage' },
          { code: '0003', label: 'Survitesse' },
          { code: '0004', label: 'Synchronisation échouée après trois commandes consécutives' },
          { code: '0007', label: 'Interrupteur zone de porte 30 ou B30 bloqué' },
          { code: '0008', label: 'Mémoire NVRAM défaillante ou insuffisante sur carte LCECPU' },
          { code: '0012', label: 'Anti-dérive non relâché après deux commandes consécutives (appareil hydraulique)' },
          { code: '0013', label: 'Anti-dérive non activé après deux commandes consécutives (appareil hydraulique)' },
          { code: '0014', label: 'Circuit sup. zone de porte non relâché après deux commandes consécutives' },
          { code: '0015', label: 'Circuit sup. zone de porte non activé après deux commandes consécutives' },
          { code: '0019', label: 'Contrôle interrupteur fin de course du vérin pour appareils hydrauliques' },
          { code: '0021', label: 'Circuit de sécurité coupé' },
          { code: '0022', label: 'Contact porte palière ouvert pendant le déplacement' },
          { code: '0023', label: 'Contact porte cabine ouverte pendant le déplacement' },
          { code: '0025', label: 'Pas d\'autorisation de départ — Défaut du Start permit' },
          { code: '0026', label: 'Panne provenant du système de commande' },
          { code: '0028', label: 'En porte battante, la cellule de sécurité est coupée' },
          { code: '0036', label: 'V2 : Contacteurs principaux relâchés pendant la marche' },
          { code: '0037', label: 'V2 : Défaut ouverture du frein' },
          { code: '0039', label: 'Bouton de bypass 77 bloqué' },
          { code: '0042', label: 'Contrôle éclairage cabine' },
          { code: '0044', label: 'Fermeture de porte échouée après trop de tentatives' },
          { code: '0047', label: 'Problème sur contact préliminaire' },
          { code: '0048', label: 'Dispositif de réouverture actif plus de 1 minute' },
          { code: '0049', label: 'Temps de fermeture trop long' },
          { code: '0050', label: 'Anti-dérive non activé, première fois (appareil hydraulique)' },
          { code: '0051', label: 'Démarrage impossible' },
          { code: '0052', label: 'Les interrupteurs de synchronisation haut et bas sont actifs simultanément' },
          { code: '0058', label: 'Délai limite commande non dépassé' },
          { code: '0059', label: 'Anti-dérive non relâché, première fois (appareil hydraulique)' },
          { code: '0060', label: 'Pas de signal Pickup' },
          { code: '0061', label: 'Temps nudging trop long' },
          { code: '0071', label: 'Pas d\'aimant zone porte (30 ou B30)' },
          { code: '0072', label: 'Erreur aimant bloqué 61:U' },
          { code: '0073', label: 'Aimant 61:N introuvable' },
          { code: '0074', label: 'Erreur aimant bloqué 61:N' },
          { code: '0075', label: 'Aimant 61:U introuvable' },
          { code: '0076', label: 'Circuit de contrôle zone de porte non relâché la première fois' },
          { code: '0077', label: 'Fin de course ouverture porte inactif en permanence' },
          { code: '0078', label: 'Appel de cabine bloqué' },
          { code: '0079', label: 'Appel palier bloqué' },
          { code: '0082', label: 'Circuit de contrôle zone de porte non activé la première fois' },
          { code: '0083', label: 'Position perdue' },
          { code: '0084', label: 'Fin de course ouverture porte actif en permanence' },
          { code: '0085', label: 'Interrupteur empêchant l\'ouverture porte sur ON' },
          { code: '0086', label: 'Autorisation démarrage continuellement sur ON' },
          { code: '0089', label: 'Contrôle DOM a échoué' },
          { code: '0091', label: 'Perturbations BAR ChA, ChB, ChC ou B30' },
          { code: '0092', label: 'BAR ChA, ChB fils croisés ou polarité 77 fausse' },
          { code: '0093', label: 'Mauvais nombre de zone de porte' },
          { code: '0094', label: 'Distance décélération trop longue' },
          { code: '0095', label: 'Contact de porte palière ne s\'ouvre pas' },
          { code: '0096', label: 'Contact fin de course ouverture porte cabine ne s\'ouvre pas' },
          { code: '0097', label: 'Contacteur reste collé' },
          { code: '0098', label: 'Contacteur reste ouvert' },
          { code: '0099', label: 'Tacho a échoué trop de fois' },
          { code: '0140', label: 'Info contact porte cabine décalée' },
          { code: '0141', label: 'Info contact porte palière décalée' },
          { code: '0142', label: 'Défaut relais porte cabine/palière' },
          { code: '0143', label: 'Arrêt descente en fin de course non maîtrisé' },
          { code: '0144', label: 'Arrêt montée ou fin de course non maîtrisé' },
          { code: '0145', label: 'Dispositif EBD défaillant' },
          { code: '0146', label: 'Batterie EBD défaillante' },
          { code: '0148', label: 'ACUM fonctionnant' },
          { code: '0149', label: 'V2 : 77:U manquant' },
          { code: '0153', label: 'V2 : 77:N manquant' },
          { code: '0154', label: 'V2 : NTS décélération' },
          { code: '0155', label: 'V2 : Combinaison NTS contact invalide' },
          { code: '0156', label: 'V2 : NTS contact faute' },
          { code: '0170', label: 'Défaut réseau tension' },
        ]
      },
      {
        title: 'Pannes module LCEDRV',
        entries: [
          { code: '0101', label: 'Arrêt module' },
          { code: '0102', label: 'Monospace — Surintensité RMS' },
          { code: '0102', label: 'Resolve — Bouton LCEDRV est amortisseur coincé' },
          { code: '0103', label: 'Résistance de freinage' },
          { code: '0104', label: 'Moteur surchauffé' },
          { code: '0105', label: 'Monospace — Tension AC' },
          { code: '0105', label: 'Resolve — Défaut V3F10' },
          { code: '0106', label: 'Monospace — Inverser non OK' },
          { code: '0106', label: 'Resolve — Défaut interne carte LCEDRV' },
          { code: '0107', label: 'LWD échoue' },
          { code: '0108', label: 'Panne Moteur / Tachy / Résolveur' },
          { code: '0109', label: 'Position perdue' },
          { code: '0110', label: 'Radiateur transistor trop chaud empêche le démarrage' },
        ]
      },
      {
        title: 'Pannes module lors de la configuration',
        entries: [
          { code: '0111', label: 'Drapeau 61:N au-dessous de 61:U' },
          { code: '0112', label: '61:U/N dépassement trop petit' },
          { code: '0113', label: 'Erreur interrupteur de synchronisation' },
          { code: '0114', label: 'Étages trop proches' },
          { code: '0115', label: 'Erreur de mise à l\'échelle' },
          { code: '0116', label: 'La traction n\'a pas de mémo de gaine' },
        ]
      },
      {
        title: 'Carte connexion toit cabine LCECCB',
        entries: [
          { code: '1101', label: 'Carte de connexion transversale toit de cabine défaillante' },
        ]
      },
      {
        title: 'Carte extension COP LCECEB — Côté A',
        entries: [
          { code: '1201', label: 'Première carte d\'extension COP défaillante' },
          { code: '1202', label: 'Deuxième carte d\'extension COP défaillante' },
          { code: '1203', label: 'Troisième carte d\'extension COP défaillante' },
        ]
      },
      {
        title: 'Carte extension COP LCECEB — Côté B',
        entries: [
          { code: '2201', label: 'Première carte d\'extension COP défaillante' },
          { code: '2202', label: 'Deuxième carte d\'extension COP défaillante' },
          { code: '2203', label: 'Troisième carte d\'extension COP défaillante' },
        ]
      },
      {
        title: 'Carte boîte à boutons cabine LCECOB — Côté A',
        entries: [
          { code: '1301', label: 'Carte armoire de commande cabine côté avant défaillante' },
        ]
      },
      {
        title: 'Carte boîte à boutons cabine LCECOB — Côté B',
        entries: [
          { code: '2301', label: 'Carte armoire de commande cabine côté arrière défaillante' },
        ]
      },
      {
        title: 'Carte commande étage LCEFCB — Côté A',
        entries: [
          { code: '1401', label: 'Carte premier étage défaillante' },
          { code: '1402', label: 'Carte deuxième étage défaillante' },
          { code: '1403', label: 'Carte troisième étage défaillante' },
          { code: '1404', label: 'Carte quatrième étage défaillante' },
          { code: '1405', label: 'Carte cinquième étage défaillante' },
          { code: '14nn', label: 'Carte étage nn défaillante' },
        ]
      },
      {
        title: 'Carte commande étage LCEFCB — Côté B',
        entries: [
          { code: '2401', label: 'Carte premier étage défaillante' },
          { code: '2402', label: 'Carte deuxième étage défaillante' },
          { code: '2403', label: 'Carte troisième étage défaillante' },
          { code: '2404', label: 'Carte quatrième étage défaillante' },
          { code: '2405', label: 'Carte cinquième étage défaillante' },
          { code: '24nn', label: 'Carte étage nn défaillante' },
        ]
      },
      {
        title: 'Carte option étage LCEFOB — Côté A',
        entries: [
          { code: '1501', label: 'Carte option premier étage défaillante' },
          { code: '1502', label: 'Carte option deuxième étage défaillante' },
          { code: '1503', label: 'Carte option troisième étage défaillante' },
          { code: '1504', label: 'Carte option quatrième étage défaillante' },
          { code: '1505', label: 'Carte option cinquième étage défaillante' },
          { code: '15nn', label: 'Carte option étage nn défaillante' },
        ]
      },
      {
        title: 'Carte option étage LCEFOB — Côté B',
        entries: [
          { code: '2501', label: 'Carte premier étage défaillante' },
          { code: '2502', label: 'Carte deuxième étage défaillante' },
          { code: '2503', label: 'Carte troisième étage défaillante' },
          { code: '2504', label: 'Carte quatrième étage défaillante' },
          { code: '2505', label: 'Carte cinquième étage défaillante' },
          { code: '25nn', label: 'Carte étage nn défaillante' },
        ]
      },
      {
        title: 'Carte communication LCEGTW',
        entries: [
          { code: '1601', label: 'Carte passerelle défaillante' },
        ]
      },
      {
        title: 'Carte option LCLOPT — Côté A',
        entries: [
          { code: '1701', label: 'Carte première option défaillante' },
          { code: '1702', label: 'Carte deuxième option défaillante' },
          { code: '1703', label: 'Carte troisième option défaillante' },
          { code: '1704', label: 'Carte quatrième option défaillante' },
          { code: '17nn', label: 'Carte option nn défaillante' },
        ]
      },
      {
        title: 'Carte option LCLOPT — Côté B',
        entries: [
          { code: '2701', label: 'Carte première option défaillante' },
          { code: '2702', label: 'Carte deuxième option défaillante' },
          { code: '2703', label: 'Carte troisième option défaillante' },
          { code: '2704', label: 'Carte quatrième option défaillante' },
          { code: '27nn', label: 'Carte option nn défaillante' },
          { code: '3500', label: 'Défaut carte FOB' },
        ]
      },
    ]
  },

  'kone-tms600': {
    slug: 'kone-tms600',
    brandId: 'kone',
    brand: 'Kone',
    title: 'Variateur TMS600',
    subtitle: 'Documentation défauts et fonctions variateur TMS600',
    color: 'sky',
    sections: [
      {
        title: 'Défauts TMS600',
        note: 'Le variateur TMS600 mémorise les défauts. Utiliser le balayage des fautes actives pour les consulter.',
        entries: [
          { code: 'EF', label: 'Défaut de terre', desc: 'Court-circuit entre une phase moteur et la terre' },
          { code: 'OC', label: 'Surintensité', desc: 'Courant de sortie excessif' },
          { code: 'OV', label: 'Surtension bus DC', desc: 'La tension du bus DC a dépassé la valeur limite' },
          { code: 'UV', label: 'Sous-tension bus DC', desc: 'La tension du bus DC est tombée en dessous de la valeur limite' },
          { code: 'OH', label: 'Surchauffe variateur', desc: 'Température du variateur trop élevée' },
          { code: 'OL1', label: 'Surcharge moteur', desc: 'Courant moteur trop élevé pendant trop longtemps' },
          { code: 'OL2', label: 'Surcharge variateur', desc: 'Courant de sortie variateur trop élevé' },
          { code: 'PF', label: 'Coupure alimentation', desc: 'Perte d\'une ou plusieurs phases d\'alimentation' },
        ]
      },
      {
        title: 'Balayage des fautes actives',
        entries: [
          { code: 'F1', label: 'Surtension', desc: 'Tension d\'alimentation supérieure à la valeur admissible' },
          { code: 'F2', label: 'Sous-tension', desc: 'Tension d\'alimentation inférieure à la valeur admissible' },
          { code: 'F3', label: 'Température trop élevée', desc: 'La température interne dépasse la valeur maximale' },
          { code: 'F4', label: 'Surintensité', desc: 'Courant de sortie trop élevé — vérifier moteur et câblage' },
          { code: 'F5', label: 'Perte de phase moteur', desc: 'Absence d\'une phase sur le moteur' },
          { code: 'F6', label: 'Frein non libéré', desc: 'Le frein n\'a pas été libéré correctement' },
          { code: 'F7', label: 'Frein non serré', desc: 'Le frein ne s\'est pas resserré correctement' },
          { code: 'F8', label: 'Erreur encodeur', desc: 'Perte du signal encodeur ou signaux incorrects' },
        ]
      },
      {
        title: 'Reset variateur — carte processeur',
        note: 'La carte peut être resetée avec le bouton TEST-LED ou en coupant un coup instant DEF.',
        entries: [
          { code: 'A01', label: 'Défaut de démarrage', desc: 'Après 5 tentatives sans succès' },
          { code: 'A02', label: 'Défaut fin de course haut' },
          { code: 'A03', label: 'Défaut fin de course bas' },
          { code: 'A04', label: 'Perte signal de vitesse' },
          { code: 'A05', label: 'Défaut contacteur principal' },
          { code: 'A06', label: 'Défaut contacteur montée' },
          { code: 'A07', label: 'Défaut contacteur descente' },
          { code: 'A08', label: 'Temps de déplacement dépassé' },
          { code: 'A09', label: 'Porte cabine ouverte en déplacement' },
          { code: 'A10', label: 'Porte palière ouverte en déplacement' },
          { code: 'A11', label: 'Survitesse détectée' },
          { code: 'A12', label: 'Défaut tachy' },
          { code: 'A13', label: 'Circuit sécurité ouvert' },
          { code: 'A14', label: 'Défaut alimentation 24V' },
          { code: 'A15', label: 'Erreur mémoire EEPROM' },
          { code: 'A16', label: 'Erreur configuration' },
          { code: 'A17', label: 'Défaut communication sérielle' },
          { code: 'A18', label: 'Défaut carte option' },
          { code: 'A19', label: 'Perte de synchronisation' },
          { code: 'A20', label: 'Erreur de position' },
          { code: 'A21', label: 'Défaut frein électromagnétique' },
          { code: 'A22', label: 'Courant moteur insuffisant' },
          { code: 'A23', label: 'Erreur sens de marche' },
          { code: 'A24', label: 'Dépassement zone d\'arrêt' },
          { code: 'A25', label: 'Mauvais positionnement à l\'étage' },
          { code: 'A26', label: 'Contacteur relais de sortie défaillant' },
          { code: 'A27', label: 'Défaut alimentation carte' },
          { code: 'A28', label: 'Surchauffe moteur (thermistance)' },
          { code: 'A29', label: 'Défaut de freinage' },
          { code: 'A30', label: 'Recalage impossible' },
          { code: 'A31', label: 'Erreur nombre d\'étages' },
          { code: 'A32', label: 'Porte non fermée après nudging' },
          { code: 'A33', label: 'Cellule porte active trop longtemps' },
          { code: 'A34', label: 'Nombre de tentatives d\'ouverture porte dépassé' },
          { code: 'A35', label: 'Défaut opérateur de porte' },
          { code: 'A36', label: 'Erreur interrupteur fin de course' },
          { code: 'A37', label: 'Perte de phase alimentation' },
          { code: 'A38', label: 'Asymétrie tension alimentation' },
          { code: 'A39', label: 'Température radiateur excessive' },
          { code: 'A40', label: 'Défaut de mise à la terre' },
          { code: 'A41', label: 'Surintensité à l\'accélération' },
          { code: 'A42', label: 'Temps de vol dépassé' },
          { code: 'A43', label: 'Erreur profil de déplacement' },
          { code: 'A44', label: 'Défaut carte entrées/sorties' },
          { code: 'A45', label: 'Signal de position invalide' },
        ]
      },
    ]
  },

  'kone-tms600c': {
    slug: 'kone-tms600c',
    brandId: 'kone',
    brand: 'Kone',
    title: 'TMS600c — LEDs de signalisation',
    subtitle: 'Description des LEDs sur la carte de signalisation TMS600c',
    color: 'sky',
    sections: [
      {
        title: 'LEDs carte de signalisation',
        note: 'Chaque LED indique l\'état d\'un circuit de sécurité ou de contrôle.',
        entries: [
          { code: 'SECUR', label: 'Allumée si la chaîne de sécurité située avant les portes est correcte' },
          { code: 'MANU', label: 'Pour ascenseur avec portes manuelles — Allumée si contact de porte palière est correct' },
          { code: 'CAB', label: 'Allumée si contact porte cabine correct' },
          { code: '61:U', label: 'Allumée si oscillateur 61:U est activé' },
          { code: '61:N', label: 'Allumée si oscillateur 61:N est activé' },
          { code: '30', label: 'Allumée si oscillateur 30 est activé' },
          { code: '30:B', label: 'Pour ascenseur avec 2 portes d\'accès — Allumée si oscillateur B30 est activé' },
          { code: 'SYNC', label: 'Clignote si l\'ascenseur n\'a pas de position cabine affichée — doit effectuer une course de synchronisation' },
          { code: 'CONTR', label: 'Contrôle pour le départ autorisé — doit être allumée à l\'arrêt — contrôle que les contacteurs sont bien retombés' },
          { code: 'FAUT', label: 'Allumée si un défaut a été mémorisé (défaut de démarrage après 5 tentatives)' },
          { code: 'DOOR', label: 'Allumée si la porte est en position fermée' },
          { code: 'UP', label: 'Allumée lors d\'une commande de montée' },
          { code: 'DOWN', label: 'Allumée lors d\'une commande de descente' },
          { code: 'FAST', label: 'Allumée lors d\'un déplacement grande vitesse' },
          { code: 'SLOW', label: 'Allumée lors d\'un déplacement petite vitesse' },
          { code: 'BRAKE', label: 'Allumée si le frein est commandé' },
          { code: 'POWER', label: 'Allumée si l\'alimentation 24V est présente' },
        ]
      },
    ]
  },

  'kone-atv58': {
    slug: 'kone-atv58',
    brandId: 'kone',
    brand: 'Kone',
    title: 'Variateur ATV58 — SODIMAS SODIVAR',
    subtitle: 'Codes défauts variateur ATV58',
    color: 'sky',
    sections: [
      {
        title: 'Codes défauts ATV58',
        entries: [
          { code: 'PHF', label: 'Coupure PH.RES', desc: 'Variateur mal alimenté ou fusion de fusible' },
          { code: 'USP', label: 'Sous Tension', desc: 'Réseau trop faible — Baisse de tension passagère — Résistance de charge détériorée' },
          { code: 'OSF', label: 'Surtension', desc: 'Réseau trop fort' },
          { code: 'OHF', label: 'Surchauffe Variateur', desc: 'Température radiateur trop élevée' },
          { code: 'OLF', label: 'Surchauffe', desc: 'Déclenchement thermique par surcharge prolongée' },
          { code: 'ObF', label: 'Freinage Excessif', desc: 'Freinage trop brutal ou charge entraînante' },
          { code: 'OPF', label: 'Coupure PH.MOT', desc: 'Coupure d\'une phase en sortie variateur' },
          { code: 'OCF', label: 'Surintensité', desc: 'Rampe trop courte — Inertie ou charge trop forte — Blocage mécanique' },
          { code: 'SCF', label: 'Court-circuit moteur', desc: 'Court-circuit ou mise à la terre en sortie de variateur' },
          { code: 'CrF', label: 'Relais charge', desc: 'Défaut de commande du relais de charge — Résistance de charge détériorée' },
          { code: 'SLF', label: 'Coupure RS485', desc: 'Mauvais raccordement sur la prise du terminal variateur' },
          { code: 'EEF', label: 'Défaut EEPROM', desc: 'Erreur de mémorisation en EEPROM' },
          { code: 'InF', label: 'Défaut interne', desc: 'Défaut interne — Défaut en connectique' },
          { code: 'EPF', label: 'Défaut externe', desc: 'Défaut déclenché par un organe externe' },
          { code: 'SOF', label: 'Survitesse', desc: 'Instabilité — Charge entraînante trop forte' },
          { code: 'CnF', label: 'Défaut Réseau com', desc: 'Moteur bloqué' },
          { code: 'ILF', label: 'Défaut com interne', desc: 'Défaut de communication entre la carte option et la carte contrôle' },
          { code: 'CFF', label: 'Erreur changement de carte', desc: 'Erreur lors d\'un changement de carte' },
          { code: 'CFI', label: 'Défaut config', desc: 'La configuration envoyée au variateur par liaison série est incohérente' },
          { code: 'SPF', label: 'Coupure RET.VIT', desc: 'Absence de retour vitesse encodeur — Connectique codeur' },
          { code: 'AnF', label: 'Dévirage', desc: 'Non suivi de la rampe — Vitesse inverse à la consigne' },
        ]
      },
      {
        title: 'Messages d\'alarme au démarrage',
        entries: [
          { code: 'ERR.CALIBRE-ENT', label: 'Changement du calibre de carte puissance' },
          { code: 'ERR.OPTION-ENT', label: 'Changement du type de carte option ou installation d\'une carte option' },
          { code: 'OPT.RETIREE-ENT', label: 'Carte option ôtée' },
          { code: 'CKS.EEPROM-ENT', label: 'Configuration mémorisée incohérente — Appui ENT : RgLUsine?' },
        ]
      },
    ]
  },

  'kone-display': {
    slug: 'kone-display',
    brandId: 'kone',
    brand: 'Kone',
    title: 'Display Board — Carte affichage',
    subtitle: 'Signification des LEDs et codes 7 segments',
    color: 'sky',
    sections: [
      {
        title: 'LEDs vertes — Signal normal',
        note: 'Une LED verte allumée indique un état normal. Elle peut rester allumée en permanence.',
        entries: [
          { code: 'D1', label: 'Alimentation +5V présente' },
          { code: 'D2', label: 'Alimentation +12V présente' },
          { code: 'D3', label: 'Alimentation -12V présente' },
          { code: 'D4', label: 'Alimentation +24V présente' },
          { code: 'D5', label: 'Communication CPU active' },
          { code: 'D6', label: 'Circuit sécurité correct' },
          { code: 'D7', label: 'Porte cabine fermée et verrouillée' },
          { code: 'D8', label: 'Porte palière fermée et verrouillée' },
          { code: 'D9', label: 'Zone porte active (61:U)' },
          { code: 'D10', label: 'Zone porte active (61:N)' },
          { code: 'D11', label: 'Zone d\'arrêt (oscillateur 30)' },
          { code: 'D12', label: 'Frein électromagnétique alimenté' },
          { code: 'D13', label: 'Contacteur montée activé' },
          { code: 'D14', label: 'Contacteur descente activé' },
          { code: 'D15', label: 'Commande départ (Start permit)' },
          { code: 'D16', label: 'Mode inspection actif' },
          { code: 'D17', label: 'Mode normal de service' },
        ]
      },
      {
        title: 'Codes pannes affichage 7 segments',
        note: 'Ces codes apparaissent sur l\'affichage 7 segments de la carte processeur.',
        entries: [
          { code: 'E1', label: 'Défaut alimentation' },
          { code: 'E2', label: 'Défaut circuit de sécurité' },
          { code: 'E3', label: 'Défaut porte cabine' },
          { code: 'E4', label: 'Défaut porte palière' },
          { code: 'E5', label: 'Défaut contacteur' },
          { code: 'E6', label: 'Défaut frein' },
          { code: 'E7', label: 'Défaut communication — carte processeur défaillante' },
        ]
      },
    ]
  },


  // ===================== CONVERTED FROM HTML =====================

  'schindler-ivxvf': {
    slug: 'schindler-ivxvf',
    brandId: 'schindler',
    brand: 'Schindler',
    title: 'Codes Erreurs IVXVF',
    subtitle: 'Journal des erreurs — Manoeuvre IVXVF',
    color: 'blue',
    sections: [
      {
        title: "Codes erreurs IVXVF",
        entries: [
          { code: "001 NormalStop", label: "ARRET NORMAL", desc: "" },
          { code: "002 ExceptionMC", label: "INTERFERENCE ELECTRO MAGNETIQUE", desc: "" },
          { code: "003 NoKSE-STDSTL", label: "Position KSE Incorrect", desc: "" },
          { code: "004 InvidMovement", label: "Deplacement Manuel Cabine", desc: "" },
          { code: "005 SH-ON-STDSTL", label: "SH ou SH1 reste Tire", desc: "" },
          { code: "006 SB-on-STDSTL", label: "SB Reste Tire", desc: "" },
          { code: "007 SH- Fault", label: "Contact AUX: SH/SH1/RH/RH1 DEFAUT", desc: "" },
          { code: "008 SB- Fault", label: "AUX/de SB- DEFAUT", desc: "" },
          { code: "009 KB-Fault", label: "Contacts KB/KB1 DEFAUT", desc: "" },
          { code: "010 FC-Fault", label: "Arret D'urgence par PVF", desc: "" },
          { code: "011 FC-BLock", label: "Blocage par PVF", desc: "" },
          { code: "012 DIrection ERR", label: "Deplacement dans Mauvais SENS", desc: "" },
          { code: "013 OverSeepd", label: "Vitesse Elevee", desc: "" },
          { code: "014 UnderSpeed", label: "Vitesse Basse", desc: "" },
          { code: "015 NoTarget-Low", label: "KSE Bas Defaut", desc: "" },
          { code: "016 No Target-up", label: "KSE Haut- Defecteux", desc: "" },
          { code: "017 OverSpeed _KSE", label: "Vitesse Elevee aux EXtremes", desc: "" },
          { code: "018 NoLower_KSE", label: "KSE Bas decalle", desc: "" },
          { code: "019 No UPPER_KSE", label: "KSE Haut Decalle", desc: "" },
          { code: "020 Position Lost", label: "Position erronne course D'apprentissage", desc: "" },
          { code: "021 HIgher Prio", label: "Course prioritaire detecte", desc: "" },
          { code: "022 MasK_Erased", label: "Suppression Types de Course", desc: "" },
          { code: "023 JHC_Pressed", label: "Arret par JHC", desc: "" },
          { code: "024 JHC1-Pressed", label: "Arret Par_JHC1", desc: "" },
          { code: "025 JHSG-Pressed", label: "Arret Par-JHSG", desc: "" },
          { code: "026 JHR-Pressed", label: "Arret Par-JHR", desc: "" },
          { code: "027 JHM-Pressed", label: "Arret Par-JHM", desc: "" },
          { code: "028 OverTempMotor", label: "Temperature Moteur Elevee", desc: "" },
          { code: "029 TripBlocked", label: "Blocage Par Maneouvre", desc: "" },
          { code: "030 NewTripBlocked", label: "Nouvel course bloque parManeuvre", desc: "" },
          { code: "031 PrepNewDest", label: "Annul Course parManoeuvre avant ouverture du Frein", desc: "" },
          { code: "032 PrepClearDest", label: "Invers,sens,manoeuvre avant Frein", desc: "" },
          { code: "033 RelvNewDest", label: "Nouvel Course,initialise,pendant,Renivelage", desc: "" },
          { code: "034 SH-TimeOUT", label: "Retard sur contact,AUX:SH-SH1-RH-RH1", desc: "" },
          { code: "035 FC-Timeout", label: "PVF,ne,communique pas,Avec IVXVF", desc: "" },
          { code: "036 NoStartOk", label: "Temps collage Contacteur&ou,Convertisseur trop long", desc: "" },
          { code: "037 CarAtLevel", label: "Ascenceur,recois appel etage present", desc: "" },
          { code: "038 UnKnownFloor", label: "destin::recu en dehord du,domaine connu par IVXVF", desc: "" },
          { code: "039 NoDirRelv", label: "Demande Renivelage en dehors ZONE", desc: "" },
          { code: "040 NoPHS-Learn", label: "Debut course,PHS hors fanion", desc: "" },
          { code: "041 ErrTachoFact", label: "longueur Fanion incoherente>>apprentissage", desc: "" },
          { code: "042 Low-KSE-Low", label: ">>apprentisage longueur-KSE-bas courte", desc: "" },
          { code: "043 Low-KSE-High", label: "IDEM 042 sauf trop LONG", desc: "" },
          { code: "044 Upper-KSE", label: "distance KSE-Haut trop Long", desc: "" },
          { code: "045 NoFloorTop", label: ">>apprentissage si PHS hors fanion apres Arret haut de gaine>>apprentissage STOP", desc: "" },
          { code: "046 ErrFloorTop", label: "Nb niveaux incorrect", desc: "" },
          { code: "047 Err-Reveling", label: "Distance Renivelage trop Longue", desc: "" },
          { code: "048 invidTripType", label: "ERR>>SOFT", desc: "" },
          { code: "049 ErrFloorCTP", label: "ERR>>SOFT", desc: "" },
          { code: "050 NoDistRevlt", label: "ERR>>SOFT", desc: "" },
          { code: "051 Zero- Param", label: "ValeurD'1 parametre a Zero", desc: "" },
          { code: "052 OverFlowCTP", label: "Zone-RAM-Trop petite", desc: "" },
          { code: "053 No-STR-COM", label: "pas de COMM>avec Man-euvre", desc: "" },
          { code: "054 PCT-Checksum", label: "ERR>>de Checksum", desc: "" },
          { code: "055 No PVF-Com", label: "pas de COMM>>avec PVF", desc: "" },
          { code: "056 Car NoStop", label: "deceleration trop longue", desc: "" },
          { code: "057 PVF-No Stop", label: "remise Zero PVF trop long", desc: "" },
          { code: "058 SH-No Stop", label: "SH SH1 Trop long", desc: "" },
          { code: "059 single Reset", label: "reset de l'IVXVF", desc: "" },
          { code: "060 Double Reset", label: "Double Reset", desc: "" },
          { code: "061 RSE1-Fault", label: "defaut RSE1/RSE11( controle raentissement)", desc: "" },
          { code: "062 RSE2-Fault", label: "defaut RSE2/RSE21", desc: "" },
          { code: "063 RSE3-Fault", label: "Defaut RSE3/RSE31", desc: "" },
          { code: "064 PHS-Fault", label: "Defaut de cellule PHS", desc: "" },
          { code: "065 PHNR-D-Fault", label: "Defaut de cellule PHNR-D", desc: "" },
          { code: "066 NoGet-Answer", label: "Mauvaise COMM>>avec Man-euvre", desc: "" },
          { code: "067 KUET-Fault", label: "Defaut Pontage Porte", desc: "" },
          { code: "068 SGRB-Fault", label: "Defaut De Contacteur SGRB", desc: "" },
          { code: "069 SBNH-Fault", label: "Defaut de Contacteur SBNH", desc: "" },
          { code: "O70 SW-Warning", label: "ERR>>SOFT", desc: "" },
          { code: "071 SW-Error", label: "ERR>>SOFT", desc: "" },
          { code: "072 Safety 110V", label: "Defaut Alim>110V", desc: "" },
          { code: "073 Safety SPT", label: "Ouverture securite Font de Fosse", desc: "" },
          { code: "074 Safety KNE", label: "Ouverture circuit Securite Cabine", desc: "" },
          { code: "075 Safety RTS", label: "Ouverture Securite porte palieres", desc: "" },
          { code: "076 Safety END", label: "Ouverture Circuit securite fin de Circuit", desc: "" },
          { code: "077 LM-PrintsErr", label: "Fonctionnement defecteux PESEE", desc: "" },
          { code: "078 LM-NoCommiss", label: "PESEE Non Ajuste", desc: "" },
          { code: "079 Topt-Fault", label: "Defaut sur optocoupleur en //sur SH:SH1", desc: "" },
          { code: "080 OVER-tempPVF", label: "Temperature Eleve CONVERTISSEUR", desc: "" },
          { code: "081 TripV-Tacho", label: "Defaut TSDI (Tachy de position)", desc: "" },
          { code: "082 No Supply 12V", label: "Defaut ALIM Sauvegarde 12V", desc: "" },
          { code: "083 NoSupply 24V", label: "Defaut ALIM 24V", desc: "" },
          { code: "084 DMS-Spoiled", label: "Defaut D'une sonde DMS", desc: "" },
          { code: "085 LM-ComErr", label: "Defaut COMM>> boitier DMS", desc: "" },
          { code: "086 RUET-Fault", label: "Defaut relais preparation course", desc: "" },
          { code: "087 RTSC-Fault", label: "Defaut Relais RTSC", desc: "" },
          { code: "088 Tacho-Fault", label: "Defaut TACHY", desc: "" },
          { code: "089 TripTimeExp", label: "Temps de course MAX depasse", desc: "" },
          { code: "090 StopOver-Fault", label: "???????", desc: "" },
          { code: "091 SMPB-Fault", label: "????????", desc: "" },
          { code: "092 IVXVF-HW-Fault", label: "?????????", desc: "" },
          { code: "093 ACCessSwitch", label: "Action dispositif Deplac;Cabine extremes", desc: "" },
          { code: "094 Door Contact", label: "ACTION de KTS au KTC porte ouverte", desc: "" },
          { code: "095 ETSL-OverSP", label: "Vitesse Eleve aux EXtremeS", desc: "" },
          { code: "096 ETSL -vaneERR", label: "90% de la survitsse aux Extremes", desc: "" },
          { code: "097 ETSL-DeviceERR", label: "Capteurs controle ralentissement sales", desc: "" },
          { code: "098 COM-Busreconf", label: "?????????", desc: "" },
          { code: "099 RSK-Fault", label: "defaut relais RSK", desc: "" },
          { code: "100 RFE-Fault", label: "deF/relais RFE", desc: "" },
          { code: "101 RTRT-Fault", label: "relais RTRT hs", desc: "" },
          { code: "102 RKUET-Fault", label: "relais RKUET hs", desc: "" },
        ]
      },
    ]
  },

  'schindler-miconic-bx': {
    slug: 'schindler-miconic-bx',
    brandId: 'schindler',
    brand: 'Schindler',
    title: 'Miconic BX — Codes erreurs',
    subtitle: 'Codes d\'erreurs élévateur MS225 (0300 à 0318)',
    color: 'blue',
    sections: [
      {
        title: "Codes d'erreurs",
        entries: [
          { code: "03 04:E_DOOR_KSKB", label: "E DOOR KSKB", desc: "Contact limiteur de force fermeture trop fréquent 03 05:E_DOOR_WRONG_EVENT Interne(En vue du débogage)" },
          { code: "03 06:E_DOOR_WRONG_EVENT_2", label: "E DOOR WRONG EVENT 2", desc: "Interne(En vue du débogage)" },
          { code: "03 07:E_DOOR_WRONG_EVENT_3", label: "E DOOR WRONG EVENT 3", desc: "Interne(En vue du débogage)" },
          { code: "03 08:E_DOOR_WRONG_EVENT_4", label: "E DOOR WRONG EVENT 4", desc: "Interne(En vue du débogage)" },
          { code: "03 09:E_DOOR_WRONG_CMD_VALUE", label: "E DOOR WRONG CMD VALUE", desc: "Commande erronée envoyée à la porte de la cabine(valeur de la plage 1;11)" },
          { code: "03 10:E_DOOR_WRONG_MOTION_VALUE", label: "E DOOR WRONG MOTION VALUE", desc: "Interne(En vue du débogage)" },
          { code: "03 11:E_DOOR_WRONG_DRIVER_EVENT", label: "E DOOR WRONG DRIVER EVENT", desc: "Non utilisée 03 12:E_DOOR_CLOSED_WITH_ WRONG_COMMAND Signal capteur/contacts différent de la normal 03 13:E_DOOR_SHAFT_ERROR PHS en contradiction avec les commandes de porte 03 14:E_DOOR_PRE_OPENING La préouverture n'a pas fonctionné 03 15:E_DOOR_NOT_RECOVERABLE ???? 03 16:E_DOOR_HEARTBEAT_ERROR ???? 03 17:E_DOOR_UNEXPECTED_STATE ???? 03 18:E_DOOR_SDIC_HEARTBEAT ???? 03 XX:E_DOOR_LAST Identificateur de fin de liste De 0000 à 0018 De 0300 à 0318 Retour Acceuil" },
        ]
      },
    ]
  },

  'schindler-miconic-b': {
    slug: 'schindler-miconic-b',
    brandId: 'schindler',
    brand: 'Schindler',
    title: 'Miconic B — Défauts',
    subtitle: 'Codes LED PE80 carte manœuvre Miconic B',
    color: 'blue',
    sections: [
      {
        title: "Indicateurs LED",
        entries: [
          { code: "LFN", label: "LED verte LFN", desc: "Allumée: La manoeuvre est en service normal" },
          { code: "LT-O", label: "LED rouge LT-O", desc: "Allumée: Porte cabine ouverte" },
          { code: "LSPT-O", label: "LED jaune LSPT-O", desc: "Allumée: Arrêt sur aucun appel(Course de correction, rappel automatique au niveau principal ,distribution de cabine libre,perte de sens. La" },
        ]
      },
    ]
  },

  'schindler-dynatron-s': {
    slug: 'schindler-dynatron-s',
    brandId: 'schindler',
    brand: 'Schindler',
    title: 'Dynatron S — LEDs',
    subtitle: 'Informations des diodes électro-luminescentes RDS1 et RDS2',
    color: 'blue',
    sections: [
      {
        title: "Indicateurs LED",
        entries: [
          { code: "DYNATRON", label: "DYNATRON", desc: "S RDS1 et RDS2 Information des Diodes électro-luminescentes Vcc (Verte) en RDS2 / P5 en RDS1 Allumée = +5V correct Eteinte = +5V en panne P/N (Verte) " },
          { code: "LIB", label: "LIB", desc: "Allumée = Alimentation Triphase correct Eteinte = Module au repos ou absence d'une ou plusieurs phases" },
          { code: "TACHO", label: "TACHO", desc: "(Verte) Allumée = Information tachymétrique correct Cl igno te = Information tachymétrique incorrect Eteinte = Information tachymétrique défectueuse" },
          { code: "SH", label: "SH", desc: "en RDS1 Allumée =" },
          { code: "SRU", label: "SRU", desc: "/ D actif Eteinte =" },
          { code: "KHS", label: "KHS", desc: "en RDS1 Allumée = Course à vitesse \"Arret bref\" Cl igno te = Course à vitesse \"Intermédiaire\" Eteinte = Course à vitesse \"Nominal\"" },
          { code: "STOER", label: "STOER", desc: "(Rouge) Allumée = Module" },
          { code: "LTRT", label: "LTRT", desc: "(Verte) Allumée = Relais" },
          { code: "RTRT", label: "RTRT", desc: "activé vit Eteinte = Relais" },
          { code: "LSA", label: "LSA", desc: "(Verte) Allumée = Relais" },
          { code: "RSA", label: "RSA", desc: "activé Eteinte = Relais" },
          { code: "LKVZ", label: "LKVZ", desc: "(Verte) Allumée = Relais" },
          { code: "RKVZ", label: "RKVZ", desc: "activé Eteinte = Relais" },
        ]
      },
    ]
  },

  'schindler-eurolift': {
    slug: 'schindler-eurolift',
    brandId: 'schindler',
    brand: 'Schindler',
    title: 'Eurolift — Affichage SMLCD',
    subtitle: 'Codes d\'affichage d\'état sur le SMLCD',
    color: 'blue',
    sections: [
      {
        title: "Affichage SMLCD",
        entries: [
          { code: "1", label: "Etat du téléchargement du logitiel LON/BIO \"%\" clignotant=Téléchargement du logitiel \"?\" =Les noeuds LON ou BIO doivent être figés \"?\" clignotant=Commande \"Freezze Node Tree\" en cours \"!\" clignotant=Echec de la commande \"Freezze Node Tree\" \"!\" =Détection d'un nouveau noeud ou disparition d'un noeud LON/BIO Aucun symbole =\"Freezze Node Tree\" effectué et aucun changement d'état des noeuds", desc: "" },
          { code: "2", label: "M =Ascenseur Maitre sinon rien", desc: "" },
          { code: "3", label: "* clignotant=\"service Visite\"actif", desc: "" },
          { code: "4", label: "Charge en cabine en % de la charge nominale", desc: "" },
          { code: "5", label: "Nom ou numéro de l'ascenseur", desc: "" },
          { code: "6", label: "Etat de l'entraînement: \"0\" =Entaînement à l'arrêt \"+\" =Entaînement en accélération \"=\" =Entaînement à vitesse constante \"-\" =Entaînement en décélération \"F\" =Entaînement indisponible \"?\" =Etat inconnu", desc: "" },
          { code: "7", label: "Etat de la cabine \"=\" =Arrêt de la cabine dans la zone de porte \"#\" =Arrêt de la cabine en dehors de la zone de porte \"fleche montée\" =Déplacement montée \"fleche descente\" =Déplacement descente \"?\" =Etat inconnu", desc: "" },
          { code: "8", label: "Position de la cabine", desc: "" },
          { code: "9", label: "Statut de la manoeuvre:En cas de défaut de la manoeuvre le numéro de l'erreur est afficé en alternance", desc: "" },
          { code: "10", label: "En cas de coupure de courant: Tiret en bas : la cabine est sous le niveau le plus proche Tiret en haut : la cabine est au dessus du niveau le plus proche", desc: "" },
          { code: "11", label: "En cas de coupure de courant,distance du niveau le plus proche", desc: "" },
          { code: "12", label: "Etat des porte 1/2 = Côté de la porte = Porte ouverte = Mouvement de fermeture = Mouvement d'ouverture = Porte visuellement fermée = Porte verrouillée = Porte arrêtée = Etat inconnu", desc: "" },
          { code: "13", label: "Vitesse de la cabine.En cas d\"erreur de l'entraînement le numéro de l'erreur est affiché en alternance avec le statut de l'entraînement", desc: "" },
          { code: "14", label: "Etat de la manoeuvre/Service", desc: "" },
        ]
      },
    ]
  },

  'schindler-sx': {
    slug: 'schindler-sx',
    brandId: 'schindler',
    brand: 'Schindler',
    title: 'Manoeuvre SX — Codes défauts',
    subtitle: 'Codes défauts et causes — Manoeuvre SX',
    color: 'blue',
    sections: [
      {
        title: "Codes SX",
        entries: [
          { code: "sx__opn-no-ket-s", label: "Opn no KET-S", desc: "Fin- de course KET-S / HS" },
          { code: "sx__eeprom-full", label: "EEPROM full", desc: "defaut PROG" },
          { code: "sx__opg-no-ket-s-o", label: "Opg no KET-S/O", desc: "Pb porte /relais STO/KETS ou KETO bloq:" },
          { code: "sx__opg-no-ket-o", label: "Opg no KET-O", desc: "fin de course KET-O /HS" },
          { code: "sx__motor-temp", label: "Motor Temp", desc: "Temperature Moteur" },
          { code: "sx__moteur-temp", label: "Moteur Temp", desc: "sois moteur levageKTHMH/KTHMT porte" },
          { code: "sx__wrong-floor", label: "Wrong FLoor", desc: "INfo Gaine/SElecteur" },
          { code: "sx__outside-zone", label: "Outside Zone", desc: "Defaut Info Gaine" },
          { code: "sx__cid-no-ket-o", label: "Cid no KET-O", desc: "KET-O porte /HS" },
          { code: "sx__start-ispt", label: "Start ISPT", desc: "Securite fond Fosse HS(entre ISPT/IUSK)" },
          { code: "sx__start-isk", label: "Start ISK", desc: "Securite Porte Cabine" },
          { code: "sx__rel-timeout", label: "Rel. Timeout", desc: "Erreur Info Gaine// ou Hydraulique" },
          { code: "sx__sh-not-on", label: "SH not ON", desc: "Absence ALIM relais SH" },
          { code: "sx__rkuet-not-on", label: "RKUET not ON", desc: "absence ALIM relais RKUET" },
          { code: "sx__rkuet-not-off", label: "RKUET not OFF", desc: "relais RKUET defecteux" },
          { code: "sx__start-rts", label: "Start RTS", desc: "Securite entre ISPT et RTS Coupe" },
          { code: "sx__rr-d-not-on", label: "RR-D not ON", desc: "non ALIM RR-D" },
          { code: "sx__rfe-not-on", label: "RFE not ON", desc: "Pas D'alim sur RFE" },
          { code: "sx__no-if", label: "No IF", desc: "absense Deplacement Cabine Abs:ALIM puissance Disfonction KS si IG Disfonction Tachy" },
          { code: "sx__sfa-not-on", label: "SFA not ON", desc: "ABS:: ALIM relais SFA" },
          { code: "sx__sr-u-not-on", label: "SR-U not ON", desc: "abs:: ALIM relais SR-U" },
          { code: "sx__sr-d-not-on", label: "SR-D not ON", desc: "ALIM//HS relais SR-D" },
          { code: "sx__sre-a-not-on", label: "SRE-A not ON", desc: "ALIM//HS relais SRE-A" },
          { code: "sx__sf-not-on", label: "SF not ON", desc: "ALIM//HS relais SF" },
          { code: "sx__sre-not-on", label: "SRE not ON", desc: "ALIM//HS relais SRE" },
          { code: "sx__sb-not-on", label: "SB not ON", desc: "ALIM//HS relais SB" },
          { code: "sx__no-rkvz", label: "No RKVZ", desc: "Led module DYN S allume DEF ::liaison" },
          { code: "sx__rfe-r-not-on", label: "RFE/R not ON", desc: "ALIM//HS relais RFE" },
          { code: "sx__swa-not-on", label: "SWA not ON", desc: "ALIM//HS relais SWA" },
          { code: "sx__kni-a-not-on", label: "KNI/A not ON", desc: "ALIM//HS relais RNFNP" },
          { code: "sx__no-rsa", label: "No RSA", desc: "Def: DYN S / voir Pb d'ecceleration" },
          { code: "sx__sre-a-not-off", label: "SRE-A not OFF", desc: "relais SRE-A defectueux" },
          { code: "sx__no-kb-kb1-on", label: "No KB/KB1 ON", desc: "FREIN defaut + contacts(KB)" },
          { code: "sx__sh1-not-on", label: "SH1 not ON", desc: "non ALIM// SH1" },
          { code: "sx__no-ks-ks1", label: "No KS/KS1", desc: "Tachy HS//Selecteur//Info KS" },
          { code: "sx__no-kse", label: "No KSE", desc: "defaut Info /KS/KSE" },
          { code: "sx__car-not-def", label: "Car not def", desc: "Reediter PROG::SOM defectueux" },
          { code: "sx__time-changed", label: "Time changed", desc: "Orloge Modifiee" },
          { code: "sx__unexpected-rsa", label: "Unexpected RSA", desc: "Defaut DYN S" },
          { code: "sx__clg-no-ket-o-s", label: "CLg no KET-O/S", desc: "ALIM//STS...porte Bloque....ou Contact" },
        ]
      },
    ]
  },

  'siminor-defauts': {
    slug: 'siminor-defauts',
    brandId: 'autres',
    brand: 'Siminor',
    title: 'Défauts Siminor',
    subtitle: 'Codes défauts par combinaison de LEDs V1/V2/V3 — valide quand V14 allumée',
    color: 'slate',
    sections: [
      {
        title: "Indication défauts (LEDs V1/V2/V3)",
        note: "Valable uniquement lorsque V14 est allumée, de V1 à V3",
        entries: [
          { code: "V1 V2 V3 NON Allume", label: "Erreur programme", desc: "" },
          { code: "V1 allumé", label: "Détection de patinage", desc: "" },
          { code: "V2 allumé", label: "Contrôle tps de PV =provoque recalage", desc: "" },
          { code: "V1 V2 allumé", label: "Non départ voir elecromecanique", desc: "" },
          { code: "V3 allumé", label: "Coupure chaîne de sécurité en mouvement", desc: "" },
          { code: "V1 V3 Allumé", label: "Verrouillage porte impossible (vérifier serrure came)", desc: "" },
          { code: "V2 V3 Allumé", label: "Inversion de phases (vérifier les phases ou inverser les impulser B1,B2)", desc: "" },
          { code: "V1 V2 V3 Allumé", label: "Appel permanent a l'étage (vérifier le bouton réouverture et les boutons d'appels ou envois)", desc: "" },
        ]
      },
    ]
  },

  'otis-legende': {
    slug: 'otis-legende',
    brandId: 'otis',
    brand: 'Otis',
    title: 'Légende Composants Otis',
    subtitle: 'Noms et fonctions des composants Otis',
    color: 'red',
    sections: [
      {
        title: "Légende",
        entries: [
          { code: "NT", label: "Relais sur circuit reouverture porte ('SGS ' SGL )", desc: "" },
          { code: "SGS", label: "contact reouvreture de porte vers relais NT", desc: "" },
          { code: "DC", label: "relais fermeture porte", desc: "" },
          { code: "DO", label: "relais ouverture porte", desc: "" },
          { code: "S", label: "relais demarrage moteur traction (MA)", desc: "" },
          { code: "MA", label: "moteur traction", desc: "" },
          { code: "IE", label: "relais 1er vitesse", desc: "" },
          { code: "FE", label: "relais 2eme vitesse", desc: "" },
          { code: "2E", label: "relais 3eme vitesse", desc: "" },
          { code: "LNS", label: "contact surcharge ( coupe les appels paliers)", desc: "" },
          { code: "STX", label: "relais effacement etage ( ST )", desc: "" },
          { code: "NTX", label: "decoller il donne la reouverture des portes", desc: "" },
          { code: "SUD", label: "relais suicide colle au demarrage", desc: "" },
          { code: "Q", label: "relais controle de charge", desc: "" },
          { code: "C", label: "relais controle chaine securites", desc: "" },
          { code: "K", label: "relais demarrage generatrice", desc: "" },
          { code: "DDP", label: "detecteur de patinage (controle d'adherence )", desc: "" },
          { code: "DM", label: "moteur operateur", desc: "" },
          { code: "GA", label: "generatrice", desc: "" },
          { code: "3P", label: "relais protection surcharge intensite", desc: "" },
          { code: "XQ", label: "relais controle exitation dans GSF", desc: "" },
          { code: "GSF", label: "enroulemement exitation generatrice", desc: "" },
          { code: "OS", label: "contact regulateur", desc: "" },
          { code: "ES", label: "bouton arret", desc: "" },
          { code: "3LS", label: "fin de course bas", desc: "" },
          { code: "2LS", label: "fin de course monte", desc: "" },
          { code: "SOS", label: "contact parachute", desc: "" },
          { code: "BTS", label: "contact mou de ruban", desc: "" },
          { code: "ILS", label: "inter F/D/C descente de non ralentissement", desc: "" },
          { code: "LV2", label: "impulseur agit en monte", desc: "" },
          { code: "LV1", label: "impulseur agit en descente", desc: "" },
          { code: "ATC", label: "relais d'acceleration", desc: "" },
          { code: "INA", label: "provoque le DDP 7/8", desc: "" },
          { code: "LV3", label: "contact (micro) sur selecteur", desc: "" },
          { code: "LV4", label: "idem LV3", desc: "" },
          { code: "DZH", label: "Plot d'ouverture porte sur selecteur", desc: "" },
        ]
      },
    ]
  },

  'autinor-params-mli': {
    slug: 'autinor-params-mli',
    brandId: 'autinor',
    brand: 'Autinor',
    title: 'Paramètres MLI',
    subtitle: 'Liste des paramètres manœuvre MLI Autinor',
    color: 'emerald',
    sections: [
      {
        title: "Paramètres",
        entries: [
          { code: "autinor-mli-param__00", label: "00 — V0 — VITESSE TRAINANTE OU D'ISONIVELAGE ( H", desc: "" },
          { code: "autinor-mli-param__01", label: "01 — V1 — VITESSE INTERMÉDIAIRE OU D'INSPECTION ( H", desc: "" },
          { code: "autinor-mli-param__02", label: "02 — V2 — GRANDE VITESSE ( H", desc: "" },
          { code: "autinor-mli-param__03", label: "03 — Vn — VITESSE NOMINALE ( BONDS DE 0,1 M/S ) 04 P", desc: "" },
          { code: "autinor-mli-param__05", label: "05 — Ac — ACCÉLÉRATION( SECONDES ) 06 S", desc: "" },
          { code: "autinor-mli-param__07", label: "07 — SF — STABILISATION POUR LA LEVÉE DU FREIN 08", desc: "" },
          { code: "autinor-mli-param__09", label: "09 — th — THERMIQUE MOTEUR 0A IG INTÉGRATEUR DE GLISSEMENT ( 0,1 SECONDES ) 0B", desc: "" },
          { code: "autinor-mli-param__0E", label: "0E — hd — HARDWARE 0F", desc: "" },
          { code: "autinor-mli-param__10", label: "10 — nr — NOMBRE DE RÉSISTANCE DE PRÉCISION 0,068 W 11 M", desc: "" },
          { code: "autinor-mli-param__12", label: "12 — dt — COUPLE MINIMUM DESCENTE 13 E", desc: "" },
          { code: "autinor-mli-param__DE", label: "DE — CRANS — MINIMUM A VOIR 14 A", desc: "" },
        ]
      },
    ]
  },

  'autinor-es-mli': {
    slug: 'autinor-es-mli',
    brandId: 'autinor',
    brand: 'Autinor',
    title: 'Entrées/Sorties MLI',
    subtitle: 'Table des entrées et sorties MLI Autinor',
    color: 'emerald',
    sections: [
      {
        title: "Entrées/Sorties",
        entries: [
          { code: "es-mli__00", label: "00 — En — V2 — V1 — V0 — D — M — Vµ — Vr — DISJON", desc: "" },
          { code: "es-mli__01", label: "01 — So — L — SECU — VENT — STOPR — DEFDEF — DEFPRO", desc: "" },
          { code: "es-mli__02", label: "02 — t° — TEMPÉRATURE DU RADIATEUR (DEGRES)", desc: "" },
          { code: "es-mli__05", label: "05 — tc — TENSION CONDENSATEUR ( BOND DE 10 VOLTS ).", desc: "" },
          { code: "es-mli__06", label: "06 — Fr — FRÉQUENCE ( HERTZ ).", desc: "" },
          { code: "es-mli__07", label: "07 — cA — CAPTEUR. — CAA — CAB", desc: "" },
          { code: "es-mli__08", label: "08 — vI — VITESSE INSTANTANÉE (M/S)", desc: "" },
          { code: "es-mli__09", label: "09 — vi — VITESSE INSTANTANÉE (M/S)", desc: "" },
          { code: "es-mli__0a", label: "0A — DO — INUTILISÉ", desc: "" },
          { code: "es-mli__0b", label: "0B — Do — DISTANCE DE RALENTISSEMENT POUR VO ( MM, DIZAINE, UNIT).", desc: "" },
          { code: "es-mli__0c", label: "0C — DI — DISTANCE DE RALENTISSEMENT POUR V1 ( MM, MILLIER, CENT).", desc: "" },
          { code: "es-mli__0d", label: "0D — Di — DISTANCE DE RALENTISSEMENT POUR V1 ( MM, DIZAINE, UNIT).", desc: "" },
          { code: "es-mli__0e", label: "0E — DII — DISTANCE DE RALENTISSEMENT POUR V2 ( MM, MILLIER, CENT).", desc: "" },
          { code: "es-mli__0f", label: "0F — Dii — DISTANCE DE RALENTISSEMENT POUR V2 ( MM, DIZAINE, UNIT).", desc: "" },
        ]
      },
    ]
  },

  'thyssen-d6c': {
    slug: 'thyssen-d6c',
    brandId: 'thyssenkrupp',
    brand: 'ThyssenKrupp',
    title: 'Opérateur portes D6C',
    subtitle: 'Paramètres de réglage opérateur portes Thyssen D6C',
    color: 'purple',
    sections: [
      {
        title: "Paramètres D6C",
        entries: [
          { code: "P1", label: "Course", desc: "" },
          { code: "P2", label: "Point de ralentissement OUVERTURE", desc: "" },
          { code: "P3", label: "Point de ralentissement FERMETURE", desc: "" },
          { code: "P4", label: "Accélération OUVERTURE", desc: "" },
          { code: "P5", label: "Décélération OUVERTURE", desc: "" },
          { code: "P6", label: "Accélération FERMETURE", desc: "" },
          { code: "P7", label: "Décélération FERMETURE", desc: "" },
          { code: "P8", label: "Vitesse Nominale en ouverture", desc: "" },
          { code: "P9", label: "Vitesse fin d'ouverture", desc: "" },
          { code: "P10", label: "Vitesse Nominale en fermeture", desc: "" },
          { code: "P11", label: "Vitesse fin de fermeture", desc: "" },
          { code: "P12", label: "Sensibilité du heurt", desc: "" },
          { code: "P13", label: "Temps d'occultation de la céllule", desc: "" },
          { code: "P14", label: "Vitesse Verrouillage et déverrouillage", desc: "" },
        ]
      },
    ]
  },

  'cg2a-turbo3000b': {
    slug: 'cg2a-turbo3000b',
    brandId: 'autres',
    brand: 'CG2A',
    title: 'Turbo 3000 — V41/V42/V43',
    subtitle: 'Codes défauts et menus CG2A Turbo 3000 (versions V41, V42, V43)',
    color: 'slate',
    sections: [
      {
        title: "Codes Turbo 3000B",
        entries: [
          { code: "00", label: "00 — POSITION ET ÉTAT DE L'ASCENSEUR", desc: "" },
          { code: "01", label: "01 — MODE OPÉRATOIRE \"LIT\" (LECTURE) OU \"CHAN\"(CHANGEMENT)", desc: "" },
          { code: "02", label: "02 — AFFICHAGE OU MODIFICATION DE L' HEURE", desc: "" },
          { code: "03", label: "03 — AFFICHAGE OU MODIFICATION DE LA SEMAINE ET DU JOUR DU MOIS", desc: "" },
          { code: "04", label: "04 — AFFICHAGE OU MODIFICATION DU MOIS ET DE L' ANNÉE", desc: "" },
          { code: "05", label: "05 — AFFICHAGE DES", desc: "" },
          { code: "16", label: "16 — DERNIERS DÉFAUTS", desc: "" },
          { code: "06", label: "06 — AFFICHAGE DU NOMBRE DE DÉPLACEMENTS", desc: "" },
          { code: "07", label: "07 — AFFICHAGE DE L'HEURE D'APPEL JOURNALIER", desc: "" },
          { code: "08", label: "08 — OPTIONS", desc: "" },
          { code: "09", label: "09 — DIGICODES", desc: "" },
          { code: "10", label: "10 — NUMÉRO D'IDENTIFICATION", desc: "" },
          { code: "11", label: "11 — AFFICHAGE PERSONNALISE DES ÉTAGES", desc: "" },
          { code: "12", label: "12 — CODE D'ACCÈS", desc: "" },
          { code: "13", label: "13 — CONSULTATION DE LA COMMUNICATION MULTIPLEX", desc: "" },
          { code: "14", label: "14 — TEMPS DE MARCHE DU MOTEUR DE POMPE HYDRAULIQUE Utilisation des boutons poussoir E", desc: "" },
          { code: "17", label: "17 — Infar", desc: "" },
          { code: "32", label: "32 — Absence ligne téléphonique", desc: "" },
        ]
      },
    ]
  },

  'selcom-rcf1': {
    slug: 'selcom-rcf1',
    brandId: 'autres',
    brand: 'Selcom',
    title: 'Selcom RCF 1 — Programmation',
    subtitle: 'Commande opérateur et programmation portes Selcom RCF 1',
    color: 'slate',
    sections: [
      {
        title: "Fonctions des boutons",
        entries: [
          { code: "rcf1__bouton-1", label: "Bouton 1", desc: "Commande opérateur Pogrammation ___________________________ Bouton Fonction" },
          { code: "rcf1__bouton-1-et-2", label: "Bouton 1 et 2", desc: "(a) Selection type de paramètres (b) U=Vitesse (c) A=couple (d) l=Position (e) - =Mode opératoire/Par" },
          { code: "rcf1__bouton-3-et-4", label: "Bouton 3 et 4", desc: "Choix du paramètre" },
          { code: "rcf1__bouton-5-et-6", label: "Bouton 5 et 6", desc: "Modification de la valeur du paramètre En \"Mode apprentissage automatique\",une ouverture de porte et" },
          { code: "rcf1__bouton-7", label: "Bouton 7", desc: "Chargement des valeurs du paramètre montrées sur les afficheurs Appuyer sur le bouton pendant" },
          { code: "rcf1__bouton-8", label: "Bouton 8", desc: "Chargement des paramètres préréglés en usine Rester en appui pendant la mise sous tension de l'équipe" },
          { code: "rcf1__bouton-7-et-8", label: "Bouton 7 et 8", desc: "(ensemble) Commutation du\"Mode fonction\"au \"Mode insertion\" Rester en appui sur les" },
          { code: "rcf1__bouton-2-et-7", label: "Bouton 2 et 7", desc: "(ensemble) Activation du\"Mode d'apprentissage automatique\"du cycle ___________________________ Paramè" },
          { code: "rcf1__bouton-0", label: "Bouton 0", desc: "Vitesse théorique en position finale de fermeture(les vantaux poussent sur le côté battu) U" },
          { code: "rcf1__bouton-4", label: "Bouton 4", desc: "Vitesse théorique en position finale d'ouverture(les vantaux poussent sur le côté battu) U" },
          { code: "rcf1__bouton-5", label: "Bouton 5", desc: "Durée de l'impultion de freinage à la fin de l'ouverture en position\"I" },
          { code: "rcf1__bouton-6", label: "Bouton 6", desc: "Sensibilité en phase de vitesse constante A" },
          { code: "rcf1__bouton-3", label: "Bouton 3", desc: "Point de désenclenchement de la limitation de la force de fermeture Réduction du couple II" },
          { code: "rcf1__bouton-2", label: "Bouton 2", desc: "Temps de couple en porte verrouillée ou en butée,le couple se réduit en se portant à la valeur de A" },
          { code: "rcf1__bouton-9", label: "Bouton 9", desc: "Couple réduit.C'est la paramètre représentant le couple que dégage le moteur aprés une permanence en" },
        ]
      },
    ]
  },

  'amphitech-ptu': {
    slug: 'amphitech-ptu',
    brandId: 'autres',
    brand: 'Amphitech',
    title: 'Amphitech PTU 61-63',
    subtitle: 'Tableau de programmation PTU 61 à 63 — Amphitech',
    color: 'slate',
    sections: [
      {
        title: "Séquence de programmation",
        entries: [
          { code: "ptu__appuyer-sur-un-bouto", label: "Appuyer sur un bouton en façade Accès au mode programmation", desc: "Appuyer sur la touche * du clavier (2 bips de confirmation) Code secret d'accès à la programmation" },
          { code: "ptu__entrer-le-code-secre", label: "Entrer le code secret XXXX (Code usine", desc: "0000) (2 bips de confirmation) Code de programmation" },
          { code: "ptu__0000-2-bips-de-con", label: "0000) (2 bips de confirmation) Code de programmation", desc: "Entrer le code de programmation XX (Voir ici) (2 bips de confirmation) Paramètre(si nécessaire)" },
        ]
      },
    ]
  },


};

export const getDoc = (slug) => docs[slug];
export const getDocsByBrand = (brandId) => Object.values(docs).filter(d => d.brandId === brandId);
