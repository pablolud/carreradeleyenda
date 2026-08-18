// Mega Base de Datos de Equipos Oficial Temporada 2026/27 (200 Clubes)
const baseDatosEquipos = [
    // --- ESPAÑA: LALIGA EA SPORTS (20 Equipos) ---
    { nombre: "Real Madrid", nivel: 93, liga: "LaLiga" },
    { nombre: "FC Barcelona", nivel: 91, liga: "LaLiga" },
    { nombre: "Atlético de Madrid", nivel: 87, liga: "LaLiga" },
    { nombre: "Athletic Club", nivel: 84, liga: "LaLiga" },
    { nombre: "Real Sociedad", nivel: 83, liga: "LaLiga" },
    { nombre: "Villarreal CF", nivel: 82, liga: "LaLiga" },
    { nombre: "Real Betis", nivel: 81, liga: "LaLiga" },
    { nombre: "Sevilla FC", nivel: 80, liga: "LaLiga" },
    { nombre: "Valencia CF", nivel: 79, liga: "LaLiga" },
    { nombre: "CA Osasuna", nivel: 78, liga: "LaLiga" },
    { nombre: "Celta de Vigo", nivel: 78, liga: "LaLiga" },
    { nombre: "RCD Espanyol", nivel: 77, liga: "LaLiga" },
    { nombre: "Deportivo Alavés", nivel: 76, liga: "LaLiga" },
    { nombre: "Getafe CF", nivel: 76, liga: "LaLiga" },
    { nombre: "Rayo Vallecano", nivel: 76, liga: "LaLiga" },
    { nombre: "Levante UD", nivel: 75, liga: "LaLiga" }, // ¡Ascendido 26/27!
    { nombre: "RC Deportivo de La Coruña", nivel: 75, liga: "LaLiga" }, // ¡Ascendido 26/27!
    { nombre: "Málaga CF", nivel: 75, liga: "LaLiga" }, // ¡Ascendido 26/27!
    { nombre: "Racing de Santander", nivel: 74, liga: "LaLiga" }, // ¡Ascendido 26/27!
    { nombre: "Elche CF", nivel: 74, liga: "LaLiga" }, // ¡Ascendido 26/27!

    // --- ESPAÑA: LALIGA HYPERMOTION (20 Equipos) ---
    { nombre: "RCD Mallorca", nivel: 76, liga: "LaLiga Hypermotion" }, // Descendido
    { nombre: "Girona FC", nivel: 76, liga: "LaLiga Hypermotion" }, // Descendido
    { nombre: "UD Las Palmas", nivel: 75, liga: "LaLiga Hypermotion" },
    { nombre: "Real Valladolid", nivel: 75, liga: "LaLiga Hypermotion" },
    { nombre: "CD Leganés", nivel: 75, liga: "LaLiga Hypermotion" },
    { nombre: "UD Almería", nivel: 74, liga: "LaLiga Hypermotion" },
    { nombre: "Cádiz CF", nivel: 74, liga: "LaLiga Hypermotion" },
    { nombre: "Granada CF", nivel: 74, liga: "LaLiga Hypermotion" },
    { nombre: "SD Eibar", nivel: 73, liga: "LaLiga Hypermotion" },
    { nombre: "Real Zaragoza", nivel: 73, liga: "LaLiga Hypermotion" },
    { nombre: "Real Oviedo", nivel: 73, liga: "LaLiga Hypermotion" },
    { nombre: "Sporting de Gijón", nivel: 72, liga: "LaLiga Hypermotion" },
    { nombre: "Burgos CF", nivel: 72, liga: "LaLiga Hypermotion" },
    { nombre: "CD Tenerife", nivel: 71, liga: "LaLiga Hypermotion" },
    { nombre: "SD Huesca", nivel: 71, liga: "LaLiga Hypermotion" },
    { nombre: "Racing de Ferrol", nivel: 71, liga: "LaLiga Hypermotion" },
    { nombre: "Albacete Balompié", nivel: 70, liga: "LaLiga Hypermotion" },
    { nombre: "FC Cartagena", nivel: 70, liga: "LaLiga Hypermotion" },
    { nombre: "CD Mirandés", nivel: 69, liga: "LaLiga Hypermotion" },
    { nombre: "CD Eldense", nivel: 69, liga: "LaLiga Hypermotion" },

    // --- INGLATERRA: PREMIER LEAGUE (20 Equipos) ---
    { nombre: "Manchester City", nivel: 94, liga: "Premier League" },
    { nombre: "Arsenal FC", nivel: 90, liga: "Premier League" },
    { nombre: "Liverpool FC", nivel: 89, liga: "Premier League" },
    { nombre: "Chelsea FC", nivel: 86, liga: "Premier League" },
    { nombre: "Tottenham Hotspur", nivel: 85, liga: "Premier League" },
    { nombre: "Manchester United", nivel: 84, liga: "Premier League" },
    { nombre: "Aston Villa", nivel: 84, liga: "Premier League" },
    { nombre: "Newcastle United", nivel: 84, liga: "Premier League" },
    { nombre: "West Ham United", nivel: 81, liga: "Premier League" },
    { nombre: "Brighton", nivel: 80, liga: "Premier League" },
    { nombre: "Crystal Palace", nivel: 79, liga: "Premier League" },
    { nombre: "Bournemouth", nivel: 78, liga: "Premier League" },
    { nombre: "Fulham", nivel: 78, liga: "Premier League" },
    { nombre: "Everton", nivel: 77, liga: "Premier League" },
    { nombre: "Brentford", nivel: 77, liga: "Premier League" },
    { nombre: "Nottingham Forest", nivel: 76, liga: "Premier League" },
    { nombre: "Leeds United", nivel: 76, liga: "Premier League" }, // Ascendido
    { nombre: "Coventry City", nivel: 75, liga: "Premier League" }, // Ascendido
    { nombre: "Sunderland", nivel: 75, liga: "Premier League" }, // Ascendido
    { nombre: "Hull City", nivel: 74, liga: "Premier League" }, // Ascendido

    // --- INGLATERRA: CHAMPIONSHIP (20 Equipos) ---
    { nombre: "Wolverhampton", nivel: 76, liga: "Championship" }, // Descendido
    { nombre: "Leicester City", nivel: 75, liga: "Championship" }, // Descendido
    { nombre: "Southampton", nivel: 75, liga: "Championship" }, // Descendido
    { nombre: "Ipswich Town", nivel: 74, liga: "Championship" },
    { nombre: "Burnley", nivel: 74, liga: "Championship" },
    { nombre: "Sheffield United", nivel: 74, liga: "Championship" },
    { nombre: "Luton Town", nivel: 73, liga: "Championship" },
    { nombre: "West Bromwich", nivel: 73, liga: "Championship" },
    { nombre: "Norwich City", nivel: 73, liga: "Championship" },
    { nombre: "Middlesbrough", nivel: 72, liga: "Championship" },
    { nombre: "Watford", nivel: 72, liga: "Championship" },
    { nombre: "Bristol City", nivel: 71, liga: "Championship" },
    { nombre: "Swansea City", nivel: 71, liga: "Championship" },
    { nombre: "Stoke City", nivel: 71, liga: "Championship" },
    { nombre: "QPR", nivel: 70, liga: "Championship" },
    { nombre: "Blackburn Rovers", nivel: 70, liga: "Championship" },
    { nombre: "Sheffield Wed", nivel: 70, liga: "Championship" },
    { nombre: "Millwall", nivel: 69, liga: "Championship" },
    { nombre: "Cardiff City", nivel: 69, liga: "Championship" },
    { nombre: "Preston NE", nivel: 69, liga: "Championship" },

    // --- ITALIA: SERIE A (20 Equipos) ---
    { nombre: "Inter de Milán", nivel: 89, liga: "Serie A" },
    { nombre: "AC Milan", nivel: 86, liga: "Serie A" },
    { nombre: "Juventus", nivel: 86, liga: "Serie A" },
    { nombre: "Atalanta", nivel: 85, liga: "Serie A" },
    { nombre: "Napoli", nivel: 84, liga: "Serie A" },
    { nombre: "AS Roma", nivel: 83, liga: "Serie A" },
    { nombre: "Lazio", nivel: 82, liga: "Serie A" },
    { nombre: "Bologna", nivel: 81, liga: "Serie A" },
    { nombre: "Fiorentina", nivel: 81, liga: "Serie A" },
    { nombre: "Torino", nivel: 78, liga: "Serie A" },
    { nombre: "Genoa", nivel: 77, liga: "Serie A" },
    { nombre: "Monza", nivel: 76, liga: "Serie A" },
    { nombre: "Sassuolo", nivel: 76, liga: "Serie A" }, // Ascendido
    { brought_back: "Frosinone", nombre: "Frosinone Calcio", nivel: 75, liga: "Serie A" }, // Ascendido
    { nombre: "Lecce", nivel: 75, liga: "Serie A" },
    { nombre: "Udinese", nivel: 75, liga: "Serie A" },
    { nombre: "Cagliari", nivel: 74, liga: "Serie A" },
    { nombre: "Parma", nivel: 74, liga: "Serie A" },
    { nombre: "Como", nivel: 73, liga: "Serie A" },
    { nombre: "Venezia", nivel: 73, liga: "Serie A" },

    // --- ITALIA: SERIE B (20 Equipos) ---
    { nombre: "Hellas Verona", nivel: 74, liga: "Serie B" }, // Descendido
    { nombre: "Empoli", nivel: 74, liga: "Serie B" }, // Descendido
    { nombre: "Salernitana", nivel: 73, liga: "Serie B" },
    { nombre: "Palermo", nivel: 73, liga: "Serie B" },
    { nombre: "Cremonese", nivel: 73, liga: "Serie B" },
    { nombre: "Sampdoria", nivel: 72, liga: "Serie B" },
    { nombre: "Brescia", nivel: 72, liga: "Serie B" },
    { nombre: "Catanzaro", nivel: 72, liga: "Serie B" },
    { nombre: "Spezia", nivel: 71, liga: "Serie B" },
    { nombre: "Pisa", nivel: 71, liga: "Serie B" },
    { nombre: "Sudtirol", nivel: 70, liga: "Serie B" },
    { nombre: "Reggiana", nivel: 70, liga: "Serie B" },
    { nombre: "Modena", nivel: 70, liga: "Serie B" },
    { nombre: "Cosenza", nivel: 69, liga: "Serie B" },
    { nombre: "Bari", nivel: 69, liga: "Serie B" },
    { nombre: "Mantova", nivel: 68, liga: "Serie B" },
    { nombre: "Cesena", nivel: 68, liga: "Serie B" },
    { nombre: "Cittadella", nivel: 68, liga: "Serie B" },
    { nombre: "Juve Stabia", nivel: 67, liga: "Serie B" },
    { nombre: "Carrarese", nivel: 67, liga: "Serie B" },

    // --- ALEMANIA: BUNDESLIGA (20 Equipos) ---
    { nombre: "Bayern Múnich", nivel: 91, liga: "Bundesliga" },
    { nombre: "Bayer Leverkusen", nivel: 89, liga: "Bundesliga" },
    { nombre: "Borussia Dortmund", nivel: 86, liga: "Bundesliga" },
    { nombre: "RB Leipzig", nivel: 85, liga: "Bundesliga" },
    { nombre: "VfB Stuttgart", nivel: 83, liga: "Bundesliga" },
    { nombre: "Eintracht Frankfurt", nivel: 81, liga: "Bundesliga" },
    { nombre: "SC Freiburg", nivel: 79, liga: "Bundesliga" },
    { nombre: "Hoffenheim", nivel: 78, liga: "Bundesliga" },
    { nombre: "Werder Bremen", nivel: 77, liga: "Bundesliga" },
    { nombre: "Union Berlin", nivel: 77, liga: "Bundesliga" },
    { nombre: "Mönchengladbach", nivel: 77, liga: "Bundesliga" },
    { nombre: "Augsburg", nivel: 76, liga: "Bundesliga" },
    { nombre: "Mainz 05", nivel: 76, liga: "Bundesliga" },
    { nombre: "Schalke 04", nivel: 75, liga: "Bundesliga" }, // Ascendido
    { nombre: "Hamburgo S.V.", nivel: 75, liga: "Bundesliga" }, // Ascendido
    { nombre: "1. FC Köln", nivel: 75, liga: "Bundesliga" }, // Ascendido
    { nombre: "Paderborn 07", nivel: 74, liga: "Bundesliga" }, // Ascendido
    { nombre: "SV Elversberg", nivel: 74, liga: "Bundesliga" }, // Ascendido
    { nombre: "Heidenheim", nivel: 74, liga: "Bundesliga" },
    { nombre: "Wolfsburg", nivel: 74, liga: "Bundesliga" },

    // --- ALEMANIA: 2. BUNDESLIGA (20 Equipos) ---
    { nombre: "VfL Bochum", nivel: 74, liga: "2. Bundesliga" }, // Descendido
    { nombre: "St. Pauli", nivel: 74, liga: "2. Bundesliga" }, // Descendido
    { nombre: "Holstein Kiel", nivel: 73, liga: "2. Bundesliga" }, // Descendido
    { nombre: "Fortuna Düsseldorf", nivel: 73, liga: "2. Bundesliga" },
    { nombre: "Karlsruher SC", nivel: 72, liga: "2. Bundesliga" },
    { nombre: "Hannover 96", nivel: 72, liga: "2. Bundesliga" },
    { nombre: "Hertha Berlin", nivel: 72, liga: "2. Bundesliga" },
    { nombre: "Greuther Fürth", nivel: 71, liga: "2. Bundesliga" },
    { nombre: "Darmstadt 98", nivel: 71, liga: "2. Bundesliga" },
    { nombre: "Nürnberg", nivel: 71, liga: "2. Bundesliga" },
    { nombre: "Magdeburg", nivel: 70, liga: "2. Bundesliga" },
    { nombre: "Kaiserslautern", nivel: 70, liga: "2. Bundesliga" },
    { nombre: "Wehen Wiesbaden", nivel: 69, liga: "2. Bundesliga" },
    { nombre: "Eintracht Braunschweig", nivel: 69, liga: "2. Bundesliga" },
    { nombre: "Hansa Rostock", nivel: 69, liga: "2. Bundesliga" },
    { nombre: "VfL Osnabrück", nivel: 68, liga: "2. Bundesliga" },
    { nombre: "SSV Ulm", nivel: 68, liga: "2. Bundesliga" },
    { nombre: "Preußen Münster", nivel: 68, liga: "2. Bundesliga" },
    { nombre: "Jahn Regensburg", nivel: 68, liga: "2. Bundesliga" },
    { nombre: "SV Sandhausen", nivel: 67, liga: "2. Bundesliga" },

    // --- FRANCIA: LIGUE 1 (20 Equipos) ---
    { nombre: "PSG", nivel: 89, liga: "Ligue 1" },
    { nombre: "AS Monaco", nivel: 82, liga: "Ligue 1" },
    { nombre: "Lille OSC", nivel: 81, liga: "Ligue 1" },
    { nombre: "Olympique Marsella", nivel: 81, liga: "Ligue 1" },
    { nombre: "Olympique Lyon", nivel: 80, liga: "Ligue 1" },
    { nombre: "RC Lens", nivel: 79, liga: "Ligue 1" },
    { nombre: "OGC Nice", nivel: 79, liga: "Ligue 1" },
    { nombre: "Stade Rennais", nivel: 78, liga: "Ligue 1" },
    { nombre: "Stade Brestois", nivel: 78, liga: "Ligue 1" },
    { nombre: "Stade de Reims", nivel: 76, liga: "Ligue 1" },
    { nombre: "Toulouse FC", nivel: 76, liga: "Ligue 1" },
    { nombre: "Montpellier", nivel: 75, liga: "Ligue 1" },
    { nombre: "Strasbourg", nivel: 75, liga: "Ligue 1" },
    { nombre: "FC Nantes", nivel: 75, liga: "Ligue 1" },
    { nombre: "Le Havre", nivel: 74, liga: "Ligue 1" },
    { nombre: "AJ Auxerre", nivel: 73, liga: "Ligue 1" },
    { nombre: "Saint-Étienne", nivel: 73, liga: "Ligue 1" },
    { nombre: "Angers SCO", nivel: 72, liga: "Ligue 1" },
    { nombre: "FC Metz", nivel: 72, liga: "Ligue 1" },
    { nombre: "Lorient", nivel: 72, liga: "Ligue 1" },

    // --- FRANCIA: LIGUE 2 (20 Equipos) ---
    { nombre: "Clermont Foot", nivel: 72, liga: "Ligue 2" },
    { nombre: "Troyes", nivel: 71, liga: "Ligue 2" },
    { nombre: "Paris FC", nivel: 71, liga: "Ligue 2" },
    { nombre: "Bordeaux", nivel: 71, liga: "Ligue 2" },
    { nombre: "Guingamp", nivel: 70, liga: "Ligue 2" },
    { nombre: "Amiens SC", nivel: 70, liga: "Ligue 2" },
    { nombre: "SM Caen", nivel: 70, liga: "Ligue 2" },
    { nombre: "Rodez", nivel: 70, liga: "Ligue 2" },
    { nombre: "Pau FC", nivel: 69, liga: "Ligue 2" },
    { nombre: "Grenoble Foot", nivel: 69, liga: "Ligue 2" },
    { nombre: "Laval", nivel: 69, liga: "Ligue 2" },
    { nombre: "Annecy", nivel: 68, liga: "Ligue 2" },
    { nombre: "Ajaccio", nivel: 68, liga: "Ligue 2" },
    { nombre: "Bastia", nivel: 68, liga: "Ligue 2" },
    { nombre: "Dunkerque", nivel: 67, liga: "Ligue 2" },
    { nombre: "Valenciennes", nivel: 67, liga: "Ligue 2" },
    { nombre: "Martigues", nivel: 66, liga: "Ligue 2" },
    { nombre: "Red Star", nivel: 66, liga: "Ligue 2" },
    { nombre: "Concarneau", nivel: 66, liga: "Ligue 2" },
    { nombre: "QRM", nivel: 66, liga: "Ligue 2" }
];