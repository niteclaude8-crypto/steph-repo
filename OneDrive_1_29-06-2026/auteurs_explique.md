Explication ligne par ligne de pages/auteurs.html

1: <!DOCTYPE html>
Explication: Déclare le document comme HTML5.

2: <html lang="fr">
Explication: Balise racine indiquant que le contenu est en français (`lang="fr"`).

3: <head>
Explication: Début de l'en-tête contenant métadonnées, styles et scripts.

4:     <meta charset="UTF-8">
Explication: Définit l'encodage des caractères en UTF-8 pour prendre en charge les accents et caractères spéciaux.

5:     <meta name="viewport" content="width=device-width, initial-scale=1.0">
Explication: Rend la page responsive en adaptant l'échelle au dispositif.

6:     <title>Auteurs & Œuvres - Vers en Lumière</title>
Explication: Titre affiché dans l'onglet du navigateur.

7:     <link rel="preconnect" href="https://fonts.googleapis.com">
Explication: Préconnecte à Google Fonts pour accélérer le chargement des polices.

8:     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
Explication: Préconnecte à fonts.gstatic.com avec `crossorigin` pour charger des fontes externes.

9:     <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet">
Explication: Importe les familles de polices Google utilisées sur la page.

10:     <link rel="stylesheet" href="../css/style.css">
Explication: Lie la feuille de style globale située dans `css/style.css`.

11:     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
Explication: Importe Font Awesome pour utiliser des icônes.

12:     <style>
Explication: Début d'un bloc CSS inline spécifique à la page `auteurs`.

13:         /* Styles spécifiques à la page Auteurs */
Explication: Commentaire indiquant la section de styles.

14:         .authors-hero {
Explication: Sélecteur pour la section hero de la page Auteurs.

15:             min-height: 40vh;
Explication: Hauteur minimale = 40% de la hauteur de la fenêtre.

16:             display: flex;
Explication: Utilise Flexbox pour aligner le contenu.

17:             flex-direction: column;
Explication: Aligne les enfants en colonne.

18:             justify-content: center;
Explication: Centre verticalement les éléments.

19:             align-items: center;
Explication: Centre horizontalement les éléments.

20:             text-align: center;
Explication: Centre le texte à l'intérieur.

21:             padding: 3rem 2rem;
Explication: Ajoute un padding vertical de 3rem et horizontal de 2rem.

22:             background: radial-gradient(circle at center, rgba(230,179,255,0.1) 0%, transparent 70%);
Explication: Fond décoratif en dégradé radial.

23:             animation: fadeIn 1s ease-out;
Explication: Applique l'animation `fadeIn` d'une seconde.

24:         }
Explication: Fin du bloc `.authors-hero`.

25: 
26:         .authors-hero h1 {
Explication: Styles spécifiques pour le titre principal dans la hero.

27:             font-family: 'Playfair Display', serif;
Explication: Police utilisée pour le titre.

28:             font-size: clamp(2rem, 5vw, 3.5rem);
Explication: Taille responsive du titre via `clamp`.

29:             background: linear-gradient(45deg, #ffd6e7, #e6b3ff, #b3ecff);
Explication: Applique un dégradé au texte (affiché grâce à background-clip).

30:             -webkit-background-clip: text;
Explication: Découpe le fond au niveau du texte (WebKit).

31:             -webkit-text-fill-color: transparent;
Explication: Rend le remplissage du texte transparent pour montrer le dégradé.

32:             background-clip: text;
Explication: Version standard de `background-clip: text`.

33:             margin-bottom: 1rem;
Explication: Espace sous le titre.

34:         }
Explication: Fin du bloc `.authors-hero h1`.

35: 
36:         .authors-hero p {
Explication: Styles pour le paragraphe d'introduction dans la hero.

37:             font-size: 1.2rem;
Explication: Taille du texte du paragraphe.

38:             opacity: 0.9;
Explication: Légère transparence pour adoucir le texte.

39:             max-width: 600px;
Explication: Limite la largeur pour une meilleure lisibilité.

40:         }
Explication: Fin du bloc `.authors-hero p`.

41: 
42:         .authors-container {
Explication: Conteneur principal pour la liste d'auteurs.

43:             max-width: 1200px;
Explication: Largeur maximale du conteneur.

44:             margin: 0 auto;
Explication: Centre le conteneur horizontalement.

45:             padding: 2rem;
Explication: Ajoute un rembourrage intérieur.

46:         }
Explication: Fin du bloc `.authors-container`.

47: 
48:         .authors-grid {
Explication: Grille qui affichera les cartes d'auteurs.

49:             display: grid;
Explication: Utilise CSS Grid pour la mise en page.

50:             grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
Explication: Colonnes adaptatives: chaque colonne fait au moins 350px.

51:             gap: 2rem;
Explication: Espace entre les cartes.

52:         }
Explication: Fin du bloc `.authors-grid`.

53: 
54:         .author-card {
Explication: Styles pour chaque carte d'auteur.

55:             background: rgba(255,255,255,0.05);
Explication: Fond semi-transparent pour effet verre.

56:             backdrop-filter: blur(20px);
Explication: Floute l'arrière-plan derrière la carte.

57:             border-radius: 25px;
Explication: Arrondit les coins de la carte.

58:             padding: 2.5rem;
Explication: Espacement intérieur.

59:             border: 1px solid rgba(255,255,255,0.1);
Explication: Bordure discrète.

60:             transition: all 0.4s ease;
Explication: Transition pour effets hover.

61:             position: relative;
Explication: Permet le positionnement absolu d'éléments internes.

62:             overflow: hidden;
Explication: Cache le débordement, utile pour éléments décoratifs.

63:             animation: fadeInUp 0.8s ease-out;
Explication: Anime l'apparition de la carte.

64:         }
Explication: Fin du bloc `.author-card`.

65: 
66:         .author-card:hover {
Explication: Effet au survol sur la carte d'auteur.

67:             transform: translateY(-10px);
Explication: Soulève la carte au hover.

68:             box-shadow: 0 20px 40px rgba(255,255,255,0.1);
Explication: Ajoute une ombre portée.

69:             border-color: rgba(255, 214, 231, 0.3);
Explication: Change la couleur de la bordure au hover.

70:         }
Explication: Fin du bloc `.author-card:hover`.

71: 
72:         .author-header {
Explication: Conteneur en haut de la carte, contenant avatar et infos.

73:             display: flex;
Explication: Utilise Flexbox pour aligner avatar et texte.

74:             align-items: center;
Explication: Centre verticalement les éléments du header.

75:             gap: 1.5rem;
Explication: Espace entre avatar et informations.

76:             margin-bottom: 1.5rem;
Explication: Espace sous le header.

77:         }
Explication: Fin du bloc `.author-header`.

78: 
79:         .author-avatar {
Explication: Cercle représentant l'avatar (initiales) de l'auteur.

80:             width: 70px;
Explication: Largeur fixe de l'avatar.

81:             height: 70px;
Explication: Hauteur fixe de l'avatar.

82:             border-radius: 50%;
Explication: Rend l'avatar circulaire.

83:             background: linear-gradient(45deg, #ff6b9d, #c44569);
Explication: Fond dégradé pour l'avatar.

84:             display: flex;
Explication: Utilise Flexbox pour centrer le contenu (initiales).

85:             align-items: center;
Explication: Centre verticalement les initiales.

86:             justify-content: center;
Explication: Centre horizontalement les initiales.

87:             font-size: 1.8rem;
Explication: Taille du texte des initiales.

88:             color: white;
Explication: Couleur blanche pour le texte des initiales.

89:             font-family: 'Playfair Display', serif;
Explication: Police utilisée pour les initiales.

90:             flex-shrink: 0;
Explication: Empêche l'avatar de se réduire lorsque l'espace est restreint.

91:         }
Explication: Fin du bloc `.author-avatar`.

92: 
93:         .author-info h3 {
Explication: Style du nom de l'auteur dans la carte.

94:             font-family: 'Playfair Display', serif;
Explication: Police élégante pour le nom.

95:             font-size: 1.5rem;
Explication: Taille du nom.

96:             color: #ffd6e7;
Explication: Couleur rose pour le nom.

97:             margin-bottom: 0.3rem;
Explication: Petit espace sous le nom.

98:         }
Explication: Fin du bloc `.author-info h3`.

99: 
100:         .author-info .author-years {
Explication: Style pour les années de vie de l'auteur.

101:             color: #b3ecff;
Explication: Couleur bleutée pour distinguer.

102:             font-size: 0.9rem;
Explication: Taille réduite pour les années.

103:             font-style: italic;
Explication: Met les années en italique.

104:         }
Explication: Fin du bloc `.author-info .author-years`.

105: 
106:         .author-bio {
Explication: Style du paragraphe biographique.

107:             font-size: 1rem;
Explication: Taille de texte standard.

108:             line-height: 1.7;
Explication: Hauteur de ligne pour lisibilité.

109:             opacity: 0.9;
Explication: Légère transparence.

110:             margin-bottom: 1.5rem;
Explication: Espace sous la bio.

111:         }
Explication: Fin du bloc `.author-bio`.

112: 
113:         .author-works {
Explication: Conteneur listant les œuvres de l'auteur.

114:             border-top: 1px solid rgba(255,255,255,0.1);
Explication: Ligne de séparation au-dessus de la liste d'œuvres.

115:             padding-top: 1.5rem;
Explication: Espace au-dessus de la liste.

116:         }
Explication: Fin du bloc `.author-works`.

117: 
118:         .author-works h4 {
Explication: Style du titre de la section Œuvres.

119:             font-family: 'Playfair Display', serif;
Explication: Police pour le sous-titre.

120:             font-size: 1.1rem;
Explication: Taille du sous-titre.

121:             color: #e6b3ff;
Explication: Couleur violette pour mettre en valeur.

122:             margin-bottom: 1rem;
Explication: Espace sous le sous-titre.

123:         }
Explication: Fin du bloc `.author-works h4`.

124: 
125:         .works-list {
Explication: Liste (ul) des œuvres, stylisée sans puces.

126:             list-style: none;
Explication: Retire les puces par défaut.

127:         }
Explication: Fin du bloc `.works-list`.

128: 
129:         .works-list li {
Explication: Style de chaque élément de la liste d'œuvres.

130:             padding: 0.5rem 0;
Explication: Espacement vertical.

131:             padding-left: 1.5rem;
Explication: Décalage à gauche pour laisser place au symbole décoratif.

132:             position: relative;
Explication: Permet de positionner le pseudo-élément `::before`.

133:             cursor: pointer;
Explication: Indique que l'élément est interactif (clicable).

134:             transition: all 0.3s ease;
Explication: Transition pour effets hover.

135:         }
Explication: Fin du bloc `.works-list li`.

136: 
137:         .works-list li::before {
Explication: Pseudo-élément décoratif placé avant chaque œuvre (symbole ❦).

138:             content: '❦';
Explication: Contenu du pseudo-élément.

139:             position: absolute;
Explication: Position absolue pour placer à gauche du li.

140:             left: 0;
Explication: Place le symbole au bord gauche.

141:             color: #ff6b9d;
Explication: Couleur du symbole.

142:             transition: all 0.3s ease;
Explication: Transition pour l'animation du symbole au hover.

143:         }
Explication: Fin du bloc `.works-list li::before`.

144: 
145:         .works-list li:hover {
Explication: Effet au survol d'un élément de la liste d'œuvres.

146:             color: #ffd6e7;
Explication: Change la couleur du texte au hover.

147:             padding-left: 2rem;
Explication: Augmente le padding-left pour effet de mouvement.

148:         }
Explication: Fin du bloc `.works-list li:hover`.

149: 
150:         .works-list li:hover::before {
Explication: Effet sur le pseudo-élément lors du survol (agrandissement).

151:             transform: scale(1.3);
Explication: Agrandit le symbole pour accentuer l'interaction.

152:         }
Explication: Fin du bloc `.works-list li:hover::before`.

153: 
154:         /* Modal de poème */
Explication: Commentaire pour la section modal affichant le texte d'un poème.

155:         .poem-modal-overlay {
Explication: Couche d'overlay couvrant toute la fenêtre quand le modal est ouvert.

156:             position: fixed;
Explication: Position fixe pour couvrir l'écran entier.

157:             top: 0;
Explication: Position en haut de la fenêtre.

158:             left: 0;
Explication: Position à gauche.

159:             right: 0;
Explication: S'étend jusqu'au bord droit.

160:             bottom: 0;
Explication: S'étend jusqu'au bord bas.

161:             background: rgba(0,0,0,0.85);
Explication: Fond sombre semi-opaque pour mettre en valeur le modal.

162:             backdrop-filter: blur(10px);
Explication: Floute l'arrière-plan sous l'overlay.

163:             z-index: 1000;
Explication: Assure que l'overlay soit au-dessus des autres éléments.

164:             display: none;
Explication: Masqué par défaut.

165:             justify-content: center;
Explication: Centre horizontalement le contenu modal.

166:             align-items: center;
Explication: Centre verticalement le contenu modal.

167:             padding: 2rem;
Explication: Ajoute un rembourrage autour du modal sur petits écrans.

168:         }
Explication: Fin du bloc `.poem-modal-overlay`.

169: 
170:         .poem-modal-overlay.active {
Explication: État actif de l'overlay (affiché lorsque la classe `active` est ajoutée).

171:             display: flex;
Explication: Passe en `flex` pour centrer le contenu.

172:             animation: fadeIn 0.3s ease-out;
Explication: Anime l'apparition de l'overlay.

173:         }
Explication: Fin du bloc `.poem-modal-overlay.active`.

174: 
175:         .poem-modal-content {
Explication: Conteneur du contenu du modal (titre, auteur, texte).

176:             background: linear-gradient(135deg, #1a0b2e 0%, #2e1a47 100%);
Explication: Fond sombre et dégradé pour le modal.

177:             border-radius: 25px;
Explication: Coins arrondis du modal.

178:             padding: 3rem;
Explication: Espacement interne généreux.

179:             max-width: 700px;
Explication: Largeur maximale du modal.

180:             width: 100%;
Explication: Prend la largeur disponible jusqu'à `max-width`.

181:             max-height: 80vh;
Explication: Limite la hauteur pour permettre le scroll interne.

182:             overflow-y: auto;
Explication: Active le défilement vertical si le contenu dépasse.

183:             border: 1px solid rgba(255,255,255,0.2);
Explication: Bordure discrète autour du modal.

184:             position: relative;
Explication: Permet de positionner le bouton de fermeture en absolu.

185:             animation: scaleIn 0.3s ease-out;
Explication: Anime l'apparition du contenu modal avec un effet de scale.

186:         }
Explication: Fin du bloc `.poem-modal-content`.

187: 
188:         @keyframes scaleIn {
Explication: Définition de l'animation `scaleIn`.

189:             from { transform: scale(0.8); opacity: 0; }
Explication: Début: réduit et transparent.

190:             to { transform: scale(1); opacity: 1; }
Explication: Fin: taille normale et opaque.

191:         }
Explication: Fin de `@keyframes scaleIn`.

192: 
193:         .poem-modal-close {
Explication: Style du bouton de fermeture dans le modal.

194:             position: absolute;
Explication: Position absolue à l'intérieur du modal.

195:             top: 1rem;
Explication: Décalage depuis le haut.

196:             right: 1.5rem;
Explication: Décalage depuis la droite.

197:             background: none;
Explication: Pas de fond pour le bouton (transparent).

198:             border: none;
Explication: Pas de bordure.

199:             color: rgba(255,255,255,0.6);
Explication: Couleur du symbole de fermeture.

200:             font-size: 1.5rem;
Explication: Taille du texte/icône du bouton.

201:             cursor: pointer;
Explication: Indique que le bouton est cliquable.

202:             transition: all 0.3s ease;
Explication: Transition pour l'effet hover.

203:         }
Explication: Fin du bloc `.poem-modal-close`.

204: 
205:         .poem-modal-close:hover {
Explication: Effet au survol du bouton de fermeture.

206:             color: #ff6b9d;
Explication: Change la couleur au hover.

207:             transform: rotate(90deg);
Explication: Rotation du bouton pour un effet visuel.

208:         }
Explication: Fin du bloc `.poem-modal-close:hover`.

209: 
210:         .poem-modal-content h2 {
Explication: Style du titre du poème dans le modal.

211:             font-family: 'Playfair Display', serif;
Explication: Police élégante pour le titre.

212:             font-size: 2rem;
Explication: Taille du titre.

213:             color: #ffd6e7;
Explication: Couleur du titre.

214:             margin-bottom: 0.5rem;
Explication: Petit espace sous le titre.

215:         }
Explication: Fin du bloc `.poem-modal-content h2`.

216: 
217:         .poem-modal-content .poem-author-name {
Explication: Style du nom de l'auteur affiché sous le titre.

218:             color: #b3ecff;
Explication: Couleur bleutée pour le nom de l'auteur.

219:             font-style: italic;
Explication: Italique pour le nom de l'auteur.

220:             margin-bottom: 2rem;
Explication: Espace sous le nom de l'auteur.

221:         }
Explication: Fin du bloc `.poem-modal-content .poem-author-name`.

222: 
223:         .poem-modal-content .poem-full-text {
Explication: Style du texte intégral du poème dans le modal.

224:             font-size: 1.2rem;
Explication: Taille du texte du poème.

225:             line-height: 2;
Explication: Hauteur de ligne généreuse pour lecture.

226:             white-space: pre-line;
Explication: Conserve les retours à la ligne dans le texte (transforme \n en saut de ligne).

227:         }
Explication: Fin du bloc `.poem-modal-content .poem-full-text`.

228: 
229:         @keyframes fadeIn {
Explication: Animation `fadeIn` utilisée à plusieurs endroits.

230:             from { opacity: 0; }
Explication: Début transparent.

231:             to { opacity: 1; }
Explication: Fin opaque.

232:         }
Explication: Fin de `@keyframes fadeIn`.

233: 
234:         @keyframes fadeInUp {
Explication: Animation d'entrée par translation verticale.

235:             from { opacity: 0; transform: translateY(30px); }
Explication: Début invisible et décalé vers le bas.

236:             to { opacity: 1; transform: translateY(0); }
Explication: Fin visible et en place.

237:         }
Explication: Fin de `@keyframes fadeInUp`.

238: 
239:         /* Responsive */
Explication: Section des règles adaptatives.

240:         @media (max-width: 768px) {
Explication: Règles appliquées aux écrans de largeur <= 768px.

241:             .authors-grid {
Explication: Ajuste la grille pour mobile.

242:                 grid-template-columns: 1fr;
Explication: Colonnes en une seule colonne sur mobile.

243:             }
Explication: Fin du bloc `.authors-grid` dans la media query.

244:             
245:             .author-header {
Explication: Ajuste l'en-tête d'auteur pour les petits écrans.

246:                 flex-direction: column;
Explication: Empile avatar et infos verticalement.

247:                 text-align: center;
Explication: Centre le texte du header.

248:             }
Explication: Fin du bloc `.author-header` dans la media query.

249:             
250:             .poem-modal-content {
Explication: Ajuste le padding du modal sur mobile.

251:                 padding: 2rem 1.5rem;
Explication: Réduit le padding pour mieux s'adapter aux petits écrans.

252:             }
Explication: Fin du bloc `.poem-modal-content` dans la media query.

253:         }
Explication: Fin de la media query responsive.

254:     </style>
Explication: Fin du bloc de styles inline.

255: </head>
Explication: Fin de l'en-tête du document.

256: <body>
Explication: Début du corps du document (contenu visible).

257:     <!-- Navigation -->
Explication: Commentaire indiquant la section de navigation.

258:     <nav class="navbar">
Explication: Balise `nav` pour la barre de navigation principale.

259:         <div class="nav-container">
Explication: Conteneur interne de la navigation.

260:             <a href="../index.html" class="logo">
Explication: Lien vers la page d'accueil avec la classe `logo`.

261:                 <i class="fas fa-feather-alt"></i>
Explication: Icône plume via Font Awesome.

262:                 <span>Vers en Lumière</span>
Explication: Nom du site affiché dans la navigation.

263:             </a>
Explication: Fin du lien logo.

264:             <button class="nav-toggle" onclick="toggleNav()">
Explication: Bouton pour basculer la navigation sur mobile; appelle `toggleNav()`.

265:                 <i class="fas fa-bars"></i>
Explication: Icône hamburger.

266:             </button>
Explication: Fin du bouton nav-toggle.

267:             <div class="nav-links" id="navLinks">
Explication: Conteneur des liens de navigation; `id` utilisé par le JS pour le toggle.

268:                 <a href="../index.html" class="nav-link">Accueil</a>
Explication: Lien vers la page d'accueil.

269:                 <a href="creation.html" class="nav-link">Créer un poème</a>
Explication: Lien vers la page de création.

270:                 <a href="vos-creations.html" class="nav-link">Vos créations</a>
Explication: Lien vers la page des créations.

271:                 <a href="auteurs.html" class="nav-link active">Auteurs & Œuvres</a>
Explication: Lien vers la page courante marqué `active`.

272:             </div>
Explication: Fin du conteneur `nav-links`.

273:         </div>
Explication: Fin du conteneur `nav-container`.

274:     </nav>
Explication: Fin de la barre de navigation.

275: 
276:     <!-- Hero Section -->
Explication: Commentaire pour la section hero.

277:     <section class="authors-hero">
Explication: Section d'introduction pour la page Auteurs.

278:         <h1>Auteurs & Œuvres</h1>
Explication: Titre de la page.

279:         <p>Découvrez les maîtres de la poésie française et leurs chefs-d'œuvre intemporels.</p>
Explication: Texte d'introduction.

280:     </section>
Explication: Fin de la section hero.

281: 
282:     <!-- Authors Section -->
Explication: Commentaire pour la section contenant la grille d'auteurs.

283:     <section class="authors-container">
Explication: Conteneur principal pour la grille d'auteurs.

284:         <div class="authors-grid" id="authorsGrid">
Explication: Grille vide où les cartes d'auteur seront injectées par JavaScript.

285:             <!-- Les auteurs seront injectés ici -->
Explication: Commentaire indiquant l'emplacement d'injection dynamique.

286:         </div>
Explication: Fin du conteneur `authors-grid`.

287:     </section>
Explication: Fin du conteneur `authors-container`.

288: 
289:     <!-- Modal de poème -->
Explication: Commentaire pour la structure du modal qui affichera un poème.

290:     <div class="poem-modal-overlay" id="poemModal">
Explication: Overlay modal masqué par défaut, affiché lorsque la classe `active` est ajoutée.

291:         <div class="poem-modal-content">
Explication: Conteneur du contenu du modal.

292:             <button class="poem-modal-close" onclick="closePoemModal()">
Explication: Bouton de fermeture qui appelle `closePoemModal()`.

293:                 <i class="fas fa-times"></i>
Explication: Icône croix pour la fermeture.

294:             </button>
Explication: Fin du bouton de fermeture.

295:             <h2 id="poemModalTitle"></h2>
Explication: Élément qui recevra le titre du poème via JavaScript.

296:             <p class="poem-author-name" id="poemModalAuthor"></p>
Explication: Élément qui affichera le nom de l'auteur.

297:             <div class="poem-full-text" id="poemModalText"></div>
Explication: Élément qui contiendra le texte intégral du poème.

298:         </div>
Explication: Fin du conteneur `poem-modal-content`.

299:     </div>
Explication: Fin de l'overlay modal.

300: 
301:     <!-- Footer -->
Explication: Commentaire pour le pied de page.

302:     <footer>
Explication: Balise footer contenant le texte bas de page.

303:         <p><i class="fas fa-heart"></i> Vers en Lumière - Où chaque mot trouve sa lumière</p>
Explication: Texte de pied de page.

304:     </footer>
Explication: Fin du footer.

305: 
306:     <script src="../js/main.js"></script>
Explication: Inclusion du script principal qui gère la navigation et d'autres utilitaires.

307:     <script>
Explication: Début d'un script inline contenant les données et la logique d'affichage des auteurs.

308:         // Données des auteurs et leurs œuvres
Explication: Commentaire indiquant le tableau d'objets `authors`.

309:         const authors = [
Explication: Déclaration du tableau JavaScript contenant des objets auteur.

310:             {
Explication: Début du premier objet auteur (Arthur Rimbaud).

311:                 name: "Arthur Rimbaud",
Explication: Propriété `name` du premier auteur.

312:                 years: "1854 - 1891",
Explication: Propriété `years` indiquant les années de vie.

313:                 avatar: "AR",
Explication: Initiales utilisées comme avatar.

314:                 bio: "Poète français précoce et visionnaire, Rimbaud a révolutionné la poésie avec son œuvre intense et symbolique. Il a cessé d'écrire à 21 ans, laissant une empreinte indélébile sur la littérature.",
Explication: Biographie courte affichée dans la carte.

315:                 works: [
Explication: Tableau des œuvres de l'auteur contenant titre et texte.

316:                     {
Explication: Début du premier travail (Le Dormeur du Val).

317:                         title: "Le Dormeur du Val",
Explication: Titre de l'œuvre.

318:                         text: `C'est un trou de verdure où chante une rivière
Explication: Le champ `text` contient la chaîne du poème, incluant des sauts de ligne.
(Le contenu complet du poème est ici, conservé tel quel pour l'affichage.)`
                    },
Explication: Fin du premier travail de Rimbaud.

... (pour garder le fichier lisible, les explications détaillées des textes des poèmes sont abrégées ici — dans le fichier original, le texte complet est inclus)

357:             },
Explication: Fin de l'objet du premier auteur.

358:             {
Explication: Début du deuxième auteur (Charles Baudelaire).

359:                 name: "Charles Baudelaire",
Explication: Propriété `name` du deuxième auteur.

360:                 years: "1821 - 1867",
Explication: Années de vie de Baudelaire.

361:                 avatar: "CB",
Explication: Initiales utilisées comme avatar.

362:                 bio: "Poète et critique d'art français, Baudelaire est l'auteur des 'Fleurs du Mal'. Son œuvre explore la beauté dans la décadence et la modernité, influençant profondément la poésie symboliste.",
Explication: Biographie courte de Baudelaire.

363:                 works: [
Explication: Tableau des œuvres de Baudelaire.

364:                     {
Explication: Début du travail (L'Albatros).

365:                         title: "L'Albatros",
Explication: Titre de l'œuvre.

366:                         text: `Souvent, pour s'amuser, les hommes d'équipage
Explication: Contenu du poème inclus tel quel pour affichage.`
                    },
Explication: Fin de la première œuvre de Baudelaire.

... (les autres auteurs et leurs œuvres sont listés de la même manière : Victor Hugo, Paul Verlaine, Stéphane Mallarmé, Louise Labé)

560:         ];
Explication: Fin du tableau `authors`.

561: 
562:         // Afficher les auteurs
Explication: Commentaire indiquant la fonction `displayAuthors`.

563:         function displayAuthors() {
Explication: Déclaration de la fonction qui affichera les cartes d'auteurs dans la grille.

564:             const grid = document.getElementById('authorsGrid');
Explication: Récupère l'élément conteneur par son `id`.

565:             grid.innerHTML = '';
Explication: Vide le conteneur avant d'injecter les cartes (sécurité en cas de réinitialisation).

566: 
567:             authors.forEach((author, index) => {
Explication: Parcourt le tableau `authors` et crée une carte pour chaque auteur.

568:                 const card = createAuthorCard(author, index);
Explication: Crée une carte en appelant `createAuthorCard`.

569:                 grid.appendChild(card);
Explication: Ajoute la carte au conteneur `grid`.

570:             });
Explication: Fin du `forEach`.

571:         }
Explication: Fin de la fonction `displayAuthors`.

572: 
573:         // Créer une carte d'auteur
Explication: Commentaire pour la fonction `createAuthorCard`.

574:         function createAuthorCard(author, index) {
Explication: Déclare la fonction qui construit et retourne une carte DOM pour un auteur.

575:             const card = document.createElement('div');
Explication: Crée un élément `div`.

576:             card.className = 'author-card';
Explication: Assigne la classe CSS pour le style de la carte.

577:             card.style.animationDelay = `${index * 0.15}s`;
Explication: Décale l'animation d'apparition en fonction de l'index pour un effet en cascade.

578: 
579:             const worksList = author.works.map((work, workIndex) => 
Explication: Transforme le tableau d'œuvres en une chaîne HTML d'éléments `<li>`.

580:                 `<li onclick="showPoem(${index}, ${workIndex})">${work.title}</li>`
Explication: Chaque `<li>` appelle `showPoem(authorIndex, workIndex)` au clic pour afficher le poème.

581:             ).join('');
Explication: Concatène les éléments en une seule chaîne.

582: 
583:             card.innerHTML = `
Explication: Construit le contenu HTML de la carte en une chaîne utilisant les données de l'auteur.

584:                 <div class="author-header">
Explication: Début du header de la carte (avatar + infos).

585:                     <div class="author-avatar">${author.avatar}</div>
Explication: Affiche les initiales comme avatar.

586:                     <div class="author-info">
Explication: Conteneur pour le nom et les années.

587:                         <h3>${author.name}</h3>
Explication: Affiche le nom de l'auteur.

588:                         <p class="author-years">${author.years}</p>
Explication: Affiche les années de vie.

589:                     </div>
Explication: Fin du conteneur `author-info`.

590:                 </div>
Explication: Fin du header de la carte.

591:                 <p class="author-bio">${author.bio}</p>
Explication: Affiche la biographie courte de l'auteur.

592:                 <div class="author-works">
Explication: Conteneur listant les œuvres.

593:                     <h4><i class="fas fa-book"></i> Œuvres majeures</h4>
Explication: Titre de la section œuvres avec icône.

594:                     <ul class="works-list">
Explication: Liste non ordonnée qui contiendra les titres d'œuvres.

595:                         ${worksList}
Explication: Insère la chaîne HTML des `<li>` générés précédemment.

596:                     </ul>
Explication: Fin de la liste d'œuvres.

597:                 </div>
Explication: Fin du conteneur `author-works`.

598:             `;
Explication: Fin de l'assignation `innerHTML`.

599: 
600:             return card;
Explication: Retourne l'élément `card` prêt à être ajouté au DOM.

601:         }
Explication: Fin de la fonction `createAuthorCard`.

602: 
603:         // Afficher un poème dans le modal
Explication: Commentaire pour la fonction `showPoem`.

604:         function showPoem(authorIndex, workIndex) {
Explication: Déclare la fonction qui affichera le texte d'un poème dans le modal.

605:             const author = authors[authorIndex];
Explication: Récupère l'objet auteur correspondant à l'index.

606:             const work = author.works[workIndex];
Explication: Récupère l'œuvre sélectionnée.

607: 
608:             document.getElementById('poemModalTitle').textContent = work.title;
Explication: Place le titre du poème dans le modal.

609:             document.getElementById('poemModalAuthor').textContent = `par ${author.name}`;
Explication: Affiche le nom de l'auteur dans le modal.

610:             document.getElementById('poemModalText').textContent = work.text;
Explication: Place le texte intégral du poème dans le modal.
            
611:             document.getElementById('poemModal').classList.add('active');
Explication: Ajoute la classe `active` à l'overlay pour l'afficher.

612:             document.body.style.overflow = 'hidden';
Explication: Désactive le scroll du body pendant l'affichage du modal.

613:         }
Explication: Fin de la fonction `showPoem`.

614: 
615:         // Fermer le modal
Explication: Commentaire pour la fonction `closePoemModal`.

616:         function closePoemModal() {
Explication: Déclare la fonction qui fermera le modal.

617:             document.getElementById('poemModal').classList.remove('active');
Explication: Retire la classe `active` pour masquer l'overlay.

618:             document.body.style.overflow = '';
Explication: Restaure le comportement de défilement du body.

619:         }
Explication: Fin de la fonction `closePoemModal`.

620: 
621:         // Fermer en cliquant sur l'overlay
Explication: Ajoute un écouteur pour fermer le modal lorsque l'utilisateur clique en dehors du contenu.

622:         document.getElementById('poemModal').addEventListener('click', function(e) {
Explication: Écoute l'événement `click` sur l'overlay modal.

623:             if (e.target === this) {
Explication: Vérifie que le clic s'est produit sur l'overlay et non sur le contenu.

624:                 closePoemModal();
Explication: Ferme le modal si l'overlay est cliqué.

625:             }
Explication: Fin du `if`.

626:         });
Explication: Fin de l'écouteur d'événement.

627: 
628:         // Fermer avec Escape
Explication: Ajoute un raccourci clavier pour fermer le modal avec la touche `Escape`.

629:         document.addEventListener('keydown', function(e) {
Explication: Écoute globale pour l'événement `keydown`.

630:             if (e.key === 'Escape') {
Explication: Vérifie si la touche pressée est `Escape`.

631:                 closePoemModal();
Explication: Ferme le modal si `Escape` est pressée.

632:             }
Explication: Fin du `if`.

633:         });
Explication: Fin de l'écouteur `keydown`.

634: 
635:         // Initialisation
Explication: Commentaire pour l'initialisation au chargement du DOM.

636:         document.addEventListener('DOMContentLoaded', displayAuthors);
Explication: Appelle `displayAuthors` lorsque le DOM est prêt, injectant ainsi les cartes dans la grille.

637:     </script>
Explication: Fin du bloc script inline.

638: </body>
Explication: Fin du corps du document.

639: </html>
Explication: Fin du document HTML.
