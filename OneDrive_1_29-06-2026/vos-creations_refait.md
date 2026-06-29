Explication ligne par ligne de pages/vos-creations.html

1: <!DOCTYPE html>
Explication: Déclare le document comme HTML5.

2: <html lang="fr">
Explication: Balise racine indiquant que le contenu est en français (`lang="fr"`).

3: <head>
Explication: Début de l'en-tête contenant métadonnées, styles et scripts.

4:     <meta charset="UTF-8">
Explication: Définit l'encodage des caractères en UTF-8 pour prendre en charge les accents et symboles.

5:     <meta name="viewport" content="width=device-width, initial-scale=1.0">
Explication: Rend la page responsive en adaptant l'échelle au dispositif.

6:     <title>Vos créations - Vers en Lumière</title>
Explication: Titre affiché dans l'onglet du navigateur.

7:     <link rel="preconnect" href="https://fonts.googleapis.com">
Explication: Préconnecte à Google Fonts pour accélérer le chargement des polices.

8:     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
Explication: Préconnecte à fonts.gstatic.com avec `crossorigin` pour les fontes externes.

9:     <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet">
Explication: Importe plusieurs familles de polices Google utilisées sur la page.

10:     <link rel="stylesheet" href="../css/style.css">
Explication: Lie la feuille de style globale localisée dans `css/style.css`.

11:     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
Explication: Importe Font Awesome pour utiliser des icônes.

12:     <style>
Explication: Début d'un bloc CSS inline spécifique à la page `vos-creations`.

13:         /* Styles spécifiques à la page Vos créations */
Explication: Commentaire signalant le début des styles.

14:         .gallery-hero {
Explication: Sélecteur pour la section hero (bannière) de la galerie.

15:             min-height: 35vh;
Explication: Hauteur minimale de la section: 35% de la fenêtre.

16:             display: flex;
Explication: Utilise Flexbox pour centrer le contenu.

17:             flex-direction: column;
Explication: Aligne les enfants verticalement.

18:             justify-content: center;
Explication: Centre verticalement le contenu.

19:             align-items: center;
Explication: Centre horizontalement le contenu.

20:             text-align: center;
Explication: Centre le texte à l'intérieur.

21:             padding: 3rem 2rem;
Explication: Ajoute un rembourrage intérieur.

22:             background: radial-gradient(circle at center, rgba(179,236,255,0.1) 0%, transparent 70%);
Explication: Fond décoratif en dégradé radial bleu pâle.

23:             animation: fadeIn 1s ease-out;
Explication: Applique l'animation `fadeIn` d'une seconde.

24:         }
Explication: Fin du bloc `.gallery-hero`.

25: 
26:         .gallery-hero h1 {
Explication: Styles pour le titre principal de la hero.

27:             font-family: 'Playfair Display', serif;
Explication: Police élégante pour le titre.

28:             font-size: clamp(2rem, 5vw, 3.5rem);
Explication: Taille responsive du titre via `clamp`.

29:             background: linear-gradient(45deg, #ffd6e7, #e6b3ff, #b3ecff);
Explication: Applique un dégradé de couleur au texte via `background-clip`.

30:             -webkit-background-clip: text;
Explication: Découpe le fond au niveau du texte (WebKit).

31:             -webkit-text-fill-color: transparent;
Explication: Rend le remplissage du texte transparent pour montrer le dégradé.

32:             background-clip: text;
Explication: Version standard de `background-clip: text`.

33:             margin-bottom: 1rem;
Explication: Espace sous le titre.

34:         }
Explication: Fin du bloc `.gallery-hero h1`.

35: 
36:         .gallery-hero p {
Explication: Styles pour le paragraphe d'accroche.

37:             font-size: 1.2rem;
Explication: Taille du texte du paragraphe.

38:             opacity: 0.9;
Explication: Légère transparence.

39:             max-width: 600px;
Explication: Limite la largeur pour lisibilité.

40:         }
Explication: Fin du bloc `.gallery-hero p`.

41: 
42:         .gallery-stats {
Explication: Conteneur qui affiche des statistiques (nombre de poèmes, mots, jours).

43:             display: flex;
Explication: Utilise Flexbox pour disposer les stats.

44:             gap: 3rem;
Explication: Espace entre chaque élément de statistique.

45:             margin-top: 2rem;
Explication: Espace au-dessus des statistiques.

46:             flex-wrap: wrap;
Explication: Autorise le retour à la ligne si l'espace est restreint.

47:             justify-content: center;
Explication: Centre les éléments horizontalement.

48:         }
Explication: Fin du bloc `.gallery-stats`.

49: 
50:         .stat-item {
Explication: Style pour chaque bloc de statistique.

51:             text-align: center;
Explication: Centre le contenu du bloc.

52:             animation: fadeInUp 0.8s ease-out;
Explication: Applique une animation d'entrée pour chaque statistique.

53:         }
Explication: Fin du bloc `.stat-item`.

54: 
55:         .stat-number {
Explication: Style du nombre animé (valeur numérique).

56:             font-family: 'Playfair Display', serif;
Explication: Police élégante pour la valeur.

57:             font-size: 2.5rem;
Explication: Taille du nombre pour mise en valeur.

58:             color: #ffd6e7;
Explication: Couleur rose pour contraste.

59:             display: block;
Explication: Affiche le nombre sur sa propre ligne.

60:         }
Explication: Fin du bloc `.stat-number`.

61: 
62:         .stat-label {
Explication: Style du libellé de la statistique.

63:             opacity: 0.8;
Explication: Légère transparence pour adoucir le texte.

64:             font-size: 0.9rem;
Explication: Taille plus petite pour le libellé.

65:         }
Explication: Fin du bloc `.stat-label`.

66: 
67:         .gallery-container {
Explication: Conteneur principal pour la galerie des poèmes.

68:             max-width: 1200px;
Explication: Largeur maximale pour mise en page.

69:             margin: 0 auto;
Explication: Centre le conteneur horizontalement.

70:             padding: 2rem;
Explication: Ajoute un rembourrage intérieur.

71:         }
Explication: Fin du bloc `.gallery-container`.

72: 
73:         .gallery-filters {
Explication: Conteneur des boutons de filtrage (Tous, Récents, Les plus longs).

74:             display: flex;
Explication: Utilise Flexbox pour aligner les boutons.

75:             gap: 1rem;
Explication: Espace entre boutons.

76:             justify-content: center;
Explication: Centre les boutons horizontalement.

77:             margin-bottom: 3rem;
Explication: Espace sous la ligne de filtres.

78:             flex-wrap: wrap;
Explication: Autorise retour à la ligne.

79:         }
Explication: Fin du bloc `.gallery-filters`.

80: 
81:         .filter-btn {
Explication: Style des boutons de filtrage.

82:             padding: 0.6rem 1.5rem;
Explication: Espacement intérieur.

83:             background: rgba(255,255,255,0.1);
Explication: Fond semi-transparent.

84:             border: 1px solid rgba(255,255,255,0.2);
Explication: Bordure légère.

85:             border-radius: 50px;
Explication: Boutons arrondis en forme de pilule.

86:             color: #f0e6f6;
Explication: Couleur du texte.

87:             cursor: pointer;
Explication: Curseur indiquant que c'est cliquable.

88:             font-family: 'Cormorant Garamond', serif;
Explication: Police utilisée pour le label du bouton.

89:             font-size: 1rem;
Explication: Taille de texte des boutons.

90:             transition: all 0.3s ease;
Explication: Transition pour effets hover.

91:         }
Explication: Fin du bloc `.filter-btn`.

92: 
93:         .filter-btn:hover, .filter-btn.active {
Explication: Styles communs pour bouton actif et au survol.

94:             background: linear-gradient(45deg, #ff6b9d, #c44569);
Explication: Fond en dégradé rose/rouge.

95:             border-color: transparent;
Explication: Retire la bordure pour harmonie visuelle.

96:             transform: translateY(-2px);
Explication: Soulève légèrement le bouton pour effet d'interaction.

97:         }
Explication: Fin du bloc `.filter-btn:hover, .filter-btn.active`.

98: 
99:         .poems-grid {
Explication: Grille contenant les cartes de poèmes.

100:             display: grid;
Explication: Utilise CSS Grid pour la mise en page des cartes.

101:             grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
Explication: Colonnes adaptatives pour responsive.

102:             gap: 2rem;
Explication: Espace entre les cartes.

103:         }
Explication: Fin du bloc `.poems-grid`.

104: 
105:         .poem-card {
Explication: Style pour chaque carte de poème.

106:             background: rgba(255,255,255,0.05);
Explication: Fond semi-transparent pour effet glass.

107:             backdrop-filter: blur(20px);
Explication: Floute l'arrière-plan derrière la carte.

108:             border-radius: 25px;
Explication: Coins arrondis.

109:             padding: 2.5rem;
Explication: Espacement intérieur de la carte.

110:             border: 1px solid rgba(255,255,255,0.1);
Explication: Bordure discrète.

111:             transition: all 0.4s ease;
Explication: Transition pour hover effects.

112:             position: relative;
Explication: Permet pseudo-éléments et positionnement absolu de decor.

113:             overflow: hidden;
Explication: Cache les éléments débordants.

114:             animation: fadeInUp 0.8s ease-out;
Explication: Anime l'apparition de la carte.

115:         }
Explication: Fin du bloc `.poem-card`.

116: 
117:         .poem-card::before {
Explication: Pseudo-élément décoratif ajoutant une guillemet stylisée.

118:             content: '"';
Explication: Contenu du pseudo-élément: guillemet.

119:             position: absolute;
Explication: Positionnement absolu à l'intérieur de la carte.

120:             top: -10px;
Explication: Décalage vers le haut pour l'effet décoratif.

121:             left: 15px;
Explication: Décalage depuis la gauche.

122:             font-size: 6rem;
Explication: Très grande taille pour l'ornement.

123:             color: rgba(255,214,231,0.1);
Explication: Couleur pâle pour ne pas gêner la lecture.

124:             font-family: 'Playfair Display', serif;
Explication: Police choisie pour cohérence graphique.

125:             line-height: 1;
Explication: Assure que le guillemet occupe l'espace vertical prévu.

126:         }
Explication: Fin du bloc `.poem-card::before`.

127: 
128:         .poem-card:hover {
Explication: Effet au survol de la carte.

129:             transform: translateY(-10px);
Explication: Soulève la carte.

130:             box-shadow: 0 20px 40px rgba(255,255,255,0.1);
Explication: Ajoute une ombre portée.

131:             border-color: rgba(255, 214, 231, 0.3);
Explication: Change la bordure pour accentuer le hover.

132:         }
Explication: Fin du bloc `.poem-card:hover`.

133: 
134:         .poem-card h3 {
Explication: Style du titre à l'intérieur de la carte.

135:             font-family: 'Playfair Display', serif;
Explication: Police du titre.

136:             font-size: 1.6rem;
Explication: Taille du titre.

137:             color: #ffd6e7;
Explication: Couleur rose.

138:             margin-bottom: 0.5rem;
Explication: Petit espace sous le titre.

139:             padding-right: 2rem;
Explication: Espace pour éviter chevauchement avec l'ornement.

140:         }
Explication: Fin du bloc `.poem-card h3`.

141: 
142:         .poem-card .poem-date {
Explication: Style pour la date affichée sous le titre.

143:             color: #b3ecff;
Explication: Couleur bleutée.

144:             font-style: italic;
Explication: Italique pour style.

145:             font-size: 0.9rem;
Explication: Taille réduite.

146:             margin-bottom: 1.5rem;
Explication: Espace sous la date.

147:         }
Explication: Fin du bloc `.poem-card .poem-date`.

148: 
149:         .poem-card .poem-content {
Explication: Style pour l'extrait du poème affiché sur la carte.

150:             font-size: 1.1rem;
Explication: Taille du texte.

151:             line-height: 1.8;
Explication: Hauteur de ligne pour lisibilité.

152:             opacity: 0.9;
Explication: Légère transparence.

153:             margin-bottom: 1.5rem;
Explication: Espace sous le contenu.

154:             display: -webkit-box;
Explication: Technique CSS pour limiter le nombre de lignes (`-webkit-line-clamp`).

155:             -webkit-line-clamp: 6;
Explication: Limite l'affichage à 6 lignes avant de masquer le reste.

156:             -webkit-box-orient: vertical;
Explication: Orientation verticale pour la boîte flexible.

157:             overflow: hidden;
Explication: Cache le texte dépassant la limite de lignes.

158:         }
Explication: Fin du bloc `.poem-card .poem-content`.

159: 
160:         .poem-card .poem-actions {
Explication: Conteneur pour les boutons d'action sur chaque carte.

161:             display: flex;
Explication: Disposition en ligne des actions.

162:             gap: 1rem;
Explication: Espace entre les boutons.

163:             justify-content: flex-end;
Explication: Aligne les actions à droite.

164:         }
Explication: Fin du bloc `.poem-card .poem-actions`.

165: 
166:         .poem-card .poem-actions button {
Explication: Styles pour les boutons d'action (lire, supprimer).

167:             background: none;
Explication: Pas de fond pour les boutons.

168:             border: none;
Explication: Pas de bordure.

169:             color: rgba(255,255,255,0.6);
Explication: Couleur légèrement transparente.

170:             cursor: pointer;
Explication: Curseur indiquant cliquabilité.

171:             font-size: 1.1rem;
Explication: Taille du texte/icône des boutons.

172:             transition: all 0.3s ease;
Explication: Transition pour l'effet hover.

173:             padding: 0.5rem;
Explication: Remplissage autour des icônes.

174:         }
Explication: Fin du bloc `.poem-card .poem-actions button`.

175: 
176:         .poem-card .poem-actions button:hover {
Explication: Effet au survol des boutons d'action.

177:             color: #ff6b9d;
Explication: Change la couleur au hover.

178:             transform: scale(1.2);
Explication: Agrandit légèrement l'icône pour feedback visuel.

179:         }
Explication: Fin du bloc `.poem-card .poem-actions button:hover`.

180: 
181:         /* Modal de lecture */
Explication: Commentaire pour la section modal qui affiche un poème en entier.

182:         .modal-overlay {
Explication: Couche d'overlay couvrant l'écran lorsque le modal est ouvert.

183:             position: fixed;
Explication: Position fixe pour couvrir tout l'écran.

184:             top: 0;
Explication: Position en haut.

185:             left: 0;
Explication: Position à gauche.

186:             right: 0;
Explication: S'étend jusqu'au bord droit.

187:             bottom: 0;
Explication: S'étend jusqu'au bord inférieur.

188:             background: rgba(0,0,0,0.8);
Explication: Fond sombre semi-opaque.

189:             backdrop-filter: blur(10px);
Explication: Floute l'arrière-plan sous l'overlay.

190:             z-index: 1000;
Explication: Assure que l'overlay soit au-dessus des autres éléments.

191:             display: none;
Explication: Masqué par défaut.

192:             justify-content: center;
Explication: Centre horizontalement le contenu modal.

193:             align-items: center;
Explication: Centre verticalement le contenu modal.

194:             padding: 2rem;
Explication: Ajoute du padding pour petits écrans.

195:         }
Explication: Fin du bloc `.modal-overlay`.

196: 
197:         .modal-overlay.active {
Explication: État actif de l'overlay lorsque la classe `active` est ajoutée.

198:             display: flex;
Explication: Affiche le modal en flex pour centrer son contenu.

199:             animation: fadeIn 0.3s ease-out;
Explication: Anime l'apparition du modal.

200:         }
Explication: Fin du bloc `.modal-overlay.active`.

201: 
202:         .modal-content {
Explication: Conteneur du contenu modal (titre, date, texte).

203:             background: linear-gradient(135deg, #1a0b2e 0%, #2e1a47 100%);
Explication: Fond sombre dégradé pour le modal.

204:             border-radius: 25px;
Explication: Coins arrondis.

205:             padding: 3rem;
Explication: Espacement interne généreux.

206:             max-width: 700px;
Explication: Limite la largeur du modal.

207:             width: 100%;
Explication: Prend la largeur disponible.

208:             max-height: 80vh;
Explication: Limite la hauteur pour permettre un scroll interne si nécessaire.

209:             overflow-y: auto;
Explication: Active le défilement vertical si contenu dépasse.

210:             border: 1px solid rgba(255,255,255,0.2);
Explication: Bordure discrète.

211:             position: relative;
Explication: Permet positionnement absolu du bouton de fermeture.

212:             animation: scaleIn 0.3s ease-out;
Explication: Anime l'apparition du modal (scale effect).

213:         }
Explication: Fin du bloc `.modal-content`.

214: 
215:         @keyframes scaleIn {
Explication: Définition de l'animation `scaleIn`.

216:             from { transform: scale(0.8); opacity: 0; }
Explication: Début: réduit et transparent.

217:             to { transform: scale(1); opacity: 1; }
Explication: Fin: taille normale et opaque.

218:         }
Explication: Fin de `@keyframes scaleIn`.

219: 
220:         .modal-close {
Explication: Style du bouton de fermeture du modal.

221:             position: absolute;
Explication: Position absolue à l'intérieur du modal.

222:             top: 1rem;
Explication: Décalage depuis le haut.

223:             right: 1.5rem;
Explication: Décalage depuis la droite.

224:             background: none;
Explication: Pas de fond pour le bouton.

225:             border: none;
Explication: Pas de bordure.

226:             color: rgba(255,255,255,0.6);
Explication: Couleur du symbole de fermeture.

227:             font-size: 1.5rem;
Explication: Taille de l'icône.

228:             cursor: pointer;
Explication: Indique que le bouton est cliquable.

229:             transition: all 0.3s ease;
Explication: Transition pour l'effet hover.

230:         }
Explication: Fin du bloc `.modal-close`.

231: 
232:         .modal-close:hover {
Explication: Effet au survol du bouton de fermeture.

233:             color: #ff6b9d;
Explication: Change la couleur au hover.

234:             transform: rotate(90deg);
Explication: Rotation pour un effet visuel.

235:         }
Explication: Fin du bloc `.modal-close:hover`.

236: 
237:         .modal-content h2 {
Explication: Style du titre dans le modal.

238:             font-family: 'Playfair Display', serif;
Explication: Police élégante pour le titre.

239:             font-size: 2rem;
Explication: Taille du titre.

240:             color: #ffd6e7;
Explication: Couleur rose pour le titre.

241:             margin-bottom: 0.5rem;
Explication: Espace sous le titre.

242:         }
Explication: Fin du bloc `.modal-content h2`.

243: 
244:         .modal-content .modal-date {
Explication: Style pour la date affichée dans le modal.

245:             color: #b3ecff;
Explication: Couleur bleutée.

246:             font-style: italic;
Explication: Italique pour la date.

247:             margin-bottom: 2rem;
Explication: Espace sous la date.

248:         }
Explication: Fin du bloc `.modal-content .modal-date`.

249: 
250:         .modal-content .modal-text {
Explication: Style du texte de poème complet dans le modal.

251:             font-size: 1.3rem;
Explication: Taille de texte légèrement plus grande pour lecture.

252:             line-height: 2;
Explication: Hauteur de ligne généreuse.

253:             white-space: pre-wrap;
Explication: Conserve les retours à la ligne du texte.

254:         }
Explication: Fin du bloc `.modal-content .modal-text`.

255: 
256:         /* Message vide */
Explication: Commentaire pour la section d'état vide lorsque aucun poème n'est présent.

257:         .empty-state {
Explication: Style pour le message d'état vide.

258:             text-align: center;
Explication: Centre le texte.

259:             padding: 5rem 2rem;
Explication: Espacement interne large.

260:             animation: fadeIn 1s ease-out;
Explication: Animation d'entrée.

261:         }
Explication: Fin du bloc `.empty-state`.

262: 
263:         .empty-state i {
Explication: Style pour l'icône dans l'état vide.

264:             font-size: 4rem;
Explication: Grande taille de l'icône.

265:             color: rgba(255,255,255,0.3);
Explication: Couleur pâle.

266:             margin-bottom: 2rem;
Explication: Espace sous l'icône.

267:             display: block;
Explication: Affiche l'icône sur sa propre ligne.

268:         }
Explication: Fin du bloc `.empty-state i`.

269: 
270:         .empty-state h3 {
Explication: Style du titre dans l'état vide.

271:             font-family: 'Playfair Display', serif;
Explication: Police du titre.

272:             font-size: 1.8rem;
Explication: Taille du titre.

273:             color: #e6b3ff;
Explication: Couleur violette.

274:             margin-bottom: 1rem;
Explication: Espace sous le titre.

275:         }
Explication: Fin du bloc `.empty-state h3`.

276: 
277:         .empty-state p {
Explication: Style du paragraphe d'accompagnement dans l'état vide.

278:             opacity: 0.8;
Explication: Légère transparence.

279:             margin-bottom: 2rem;
Explication: Espace sous le paragraphe.

280:         }
Explication: Fin du bloc `.empty-state p`.

281: 
282:         .empty-state .btn {
Explication: Style du bouton d'appel à l'action dans l'état vide.

283:             display: inline-block;
Explication: Affiche le bouton en ligne mais permet padding.

284:             padding: 1rem 2.5rem;
Explication: Espacement intérieur du bouton.

285:             background: linear-gradient(45deg, #ff6b9d, #c44569);
Explication: Fond en dégradé rose/rouge.

286:             color: white;
Explication: Texte blanc pour contraste.

287:             text-decoration: none;
Explication: Retire la décoration de lien.

288:             border-radius: 50px;
Explication: Bouton en forme de pilule.

289:             font-family: 'Cormorant Garamond', serif;
Explication: Police du bouton.

290:             font-weight: 600;
Explication: Poids de police pour emphase.

291:             transition: all 0.4s ease;
Explication: Transition pour l'effet hover.

292:         }
Explication: Fin du bloc `.empty-state .btn`.

293: 
294:         .empty-state .btn:hover {
Explication: Effet au survol du bouton.

295:             transform: translateY(-3px);
Explication: Soulève légèrement le bouton.

296:             box-shadow: 0 10px 30px rgba(255,107,157,0.4);
Explication: Ajoute une ombre pour profondeur.

297:         }
Explication: Fin du bloc `.empty-state .btn:hover`.

298: 
299:         @keyframes fadeIn {
Explication: Définition de l'animation `fadeIn`.

300:             from { opacity: 0; }
Explication: Début transparent.

301:             to { opacity: 1; }
Explication: Fin opaque.

302:         }
Explication: Fin de `@keyframes fadeIn`.

303: 
304:         @keyframes fadeInUp {
Explication: Définition de l'animation `fadeInUp`.

305:             from { opacity: 0; transform: translateY(30px); }
Explication: Départ invisible et décalé vers le bas.

306:             to { opacity: 1; transform: translateY(0); }
Explication: Arrivée visible et à sa place.

307:         }
Explication: Fin de `@keyframes fadeInUp`.

308: 
309:         /* Responsive */
Explication: Section pour règles adaptatives.

310:         @media (max-width: 768px) {
Explication: Règles appliquées pour écrans <= 768px.

311:             .poems-grid {
Explication: Ajuste la grille pour mobile.

312:                 grid-template-columns: 1fr;
Explication: Une colonne sur petits écrans.

313:             }
Explication: Fin du bloc `.poems-grid` dans la media query.

314:             
315:             .gallery-stats {
Explication: Ajuste l'espacement des statistiques sur mobile.

316:                 gap: 1.5rem;
Explication: Réduit l'espace entre éléments.

317:             }
Explication: Fin du bloc `.gallery-stats` dans la media query.

318:             
319:             .modal-content {
Explication: Ajuste le padding du modal sur mobile.

320:                 padding: 2rem 1.5rem;
Explication: Réduit le padding pour s'adapter aux petits écrans.

321:             }
Explication: Fin du bloc `.modal-content` dans la media query.

322:         }
Explication: Fin de la media query responsive.

323:     </style>
Explication: Fin du bloc de styles inline.

324: </head>
Explication: Fin de l'en-tête du document.

325: <body>
Explication: Début du corps du document (contenu visible).

326:     <!-- Navigation -->
Explication: Commentaire pour la section de navigation.

327:     <nav class="navbar">
Explication: Balise `nav` pour la barre de navigation principale.

328:         <div class="nav-container">
Explication: Conteneur interne de la navigation.

329:             <a href="../index.html" class="logo">
Explication: Lien logo pointant vers la page d'accueil.

330:                 <i class="fas fa-feather-alt"></i>
Explication: Icône plume via Font Awesome.

331:                 <span>Vers en Lumière</span>
Explication: Nom du site affiché dans la navigation.

332:             </a>
Explication: Fin du lien logo.

333:             <button class="nav-toggle" onclick="toggleNav()">
Explication: Bouton pour basculer la navigation sur mobile; appelle `toggleNav()`.

334:                 <i class="fas fa-bars"></i>
Explication: Icône hamburger.

335:             </button>
Explication: Fin du bouton nav-toggle.

336:             <div class="nav-links" id="navLinks">
Explication: Conteneur des liens de navigation; `id` utilisé pour le toggle.

337:                 <a href="../index.html" class="nav-link">Accueil</a>
Explication: Lien vers la page d'accueil.

338:                 <a href="creation.html" class="nav-link">Créer un poème</a>
Explication: Lien vers la page de création.

339:                 <a href="vos-creations.html" class="nav-link active">Vos créations</a>
Explication: Lien vers la page courante marqué `active`.

340:                 <a href="auteurs.html" class="nav-link">Auteurs & Œuvres</a>
Explication: Lien vers la page des auteurs.

341:             </div>
Explication: Fin du conteneur `nav-links`.

342:         </div>
Explication: Fin du conteneur `nav-container`.

343:     </nav>
Explication: Fin de la barre de navigation.

344: 
345:     <!-- Hero Section -->
Explication: Commentaire pour la section hero.

346:     <section class="gallery-hero">
Explication: Section d'introduction pour la galerie.

347:         <h1>Vos créations</h1>
Explication: Titre de la page.

348:         <p>Votre bibliothèque poétique personnelle, où chaque vers raconte une histoire.</p>
Explication: Texte d'accroche.

349:         <div class="gallery-stats">
Explication: Conteneur affichant les statistiques.

350:             <div class="stat-item">
Explication: Premier élément de statistique (nombre de poèmes).

351:                 <span class="stat-number" id="statCount">0</span>
Explication: Valeur animée affichant le nombre de poèmes; initialisée à 0.

352:                 <span class="stat-label">Poèmes</span>
Explication: Libellé pour la statistique.

353:             </div>
Explication: Fin du premier élément de statistique.

354:             <div class="stat-item">
Explication: Deuxième élément de statistique (mots écrits).

355:                 <span class="stat-number" id="statWords">0</span>
Explication: Valeur animée pour le nombre de mots écrits.

356:                 <span class="stat-label">Mots écrits</span>
Explication: Libellé pour la statistique mots.

357:             </div>
Explication: Fin du deuxième élément de statistique.

358:             <div class="stat-item">
Explication: Troisième élément de statistique (jours de création).

359:                 <span class="stat-number" id="statDays">0</span>
Explication: Valeur animée pour le nombre de jours uniques de création.

360:                 <span class="stat-label">Jours de création</span>
Explication: Libellé pour la statistique jours.

361:             </div>
Explication: Fin du troisième élément de statistique.

362:         </div>
Explication: Fin du conteneur `gallery-stats`.

363:     </section>
Explication: Fin de la section hero.

364: 
365:     <!-- Gallery Section -->
Explication: Commentaire pour la section galerie.

366:     <section class="gallery-container">
Explication: Conteneur principal pour la galerie et les filtres.

367:         <div class="gallery-filters">
Explication: Conteneur pour les boutons de filtrage.

368:             <button class="filter-btn active" onclick="filterPoems('all')">Tous</button>
Explication: Bouton actif par défaut qui affiche tous les poèmes.

369:             <button class="filter-btn" onclick="filterPoems('recent')">Récents</button>
Explication: Bouton pour afficher les poèmes récents.

370:             <button class="filter-btn" onclick="filterPoems('long')">Les plus longs</button>
Explication: Bouton pour trier par longueur de contenu.

371:         </div>
Explication: Fin du conteneur `gallery-filters`.

372: 
373:         <div class="poems-grid" id="poemsGrid">
Explication: Grille vide où les cartes de poèmes seront injectées par JavaScript.

374:             <!-- Les poèmes seront injectés ici -->
Explication: Commentaire indiquant l'emplacement d'injection.

375:         </div>
Explication: Fin du conteneur `poems-grid`.

376: 
377:         <div class="empty-state" id="emptyState" style="display: none;">
Explication: État affiché lorsque la bibliothèque est vide; masqué par défaut.

378:             <i class="fas fa-book-open"></i>
Explication: Icône représentant un livre ouvert.

379:             <h3>Votre bibliothèque est vide</h3>
Explication: Titre pour l'état vide.

380:             <p>Commencez votre voyage poétique en créant votre premier poème.</p>
Explication: Incitation à créer un poème.

381:             <a href="creation.html" class="btn">Créer un poème</a>
Explication: Lien stylisé menant à la page de création.

382:         </div>
Explication: Fin du conteneur `empty-state`.

383:     </section>
Explication: Fin de la section galerie.

384: 
385:     <!-- Modal de lecture -->
Explication: Commentaire pour la structure du modal de lecture.

386:     <div class="modal-overlay" id="readModal">
Explication: Overlay modal masqué par défaut; affiché lorsque `active` est ajouté.

387:         <div class="modal-content">
Explication: Conteneur du contenu modal (titre, date, texte).

388:             <button class="modal-close" onclick="closeModal()">
Explication: Bouton de fermeture qui appelle `closeModal()`.

389:                 <i class="fas fa-times"></i>
Explication: Icône croix.

390:             </button>
Explication: Fin du bouton de fermeture.

391:             <h2 id="modalTitle"></h2>
Explication: Élément qui recevra le titre du poème via JavaScript.

392:             <p class="modal-date" id="modalDate"></p>
Explication: Élément pour afficher la date du poème.

393:             <div class="modal-text" id="modalText"></div>
Explication: Élément qui affichera le texte intégral du poème.

394:         </div>
Explication: Fin du conteneur `modal-content`.

395:     </div>
Explication: Fin de l'overlay modal.

396: 
397:     <!-- Footer -->
Explication: Commentaire pour le pied de page.

398:     <footer>
Explication: Balise footer contenant le texte bas de page.

399:         <p><i class="fas fa-book-open"></i> <i class="fas fa-pen-fancy"></i>Vers en Lumière - Où chaque mot trouve sa lumière</p>
Explication: Texte du footer avec icônes.

400:     </footer>
Explication: Fin du footer.

401: 
402:     <script src="../js/main.js"></script>
Explication: Inclusion du script principal (navigation, utilitaires, etc.).

403:     <script>
Explication: Début du script inline contenant la logique de gestion des poèmes sauvegardés.

404:         let allPoems = [];
Explication: Déclare un tableau pour stocker tous les poèmes chargés depuis `localStorage`.

405:         let currentFilter = 'all';
Explication: Variable qui garde le filtre actif (`all`, `recent`, `long`).

406: 
407:         // Charger les poèmes
Explication: Commentaire pour la fonction `loadPoems`.

408:         function loadPoems() {
Explication: Déclare la fonction qui récupère les poèmes depuis `localStorage` et met à jour l'affichage.

409:             allPoems = JSON.parse(localStorage.getItem('versEnLumierePoems')) || [];
Explication: Récupère la liste de poèmes depuis le navigateur, ou initialise un tableau vide si aucune donnée.

410:             updateStats();
Explication: Met à jour les compteurs statistiques après chargement.

411:             displayPoems();
Explication: Affiche la liste (ou l'état vide) sur la page.

412:         }
Explication: Fin de la fonction `loadPoems`.

413: 
414:         // Mettre à jour les statistiques
Explication: Commentaire pour `updateStats`.

415:         function updateStats() {
Explication: Déclare la fonction qui calcule et anime les statistiques.

416:             const count = allPoems.length;
Explication: Nombre total de poèmes.

417:             const words = allPoems.reduce((total, poem) => total + poem.content.split(/\s+/).length, 0);
Explication: Calcule le nombre total de mots en sommant les longueurs (séparées par espaces) de chaque `content`.

418:             
419:             // Calculer les jours de création uniques
Explication: Commentaire pour le calcul des jours uniques.

420:             const dates = allPoems.map(p => new Date(p.timestamp).toDateString());
Explication: Convertit chaque timestamp en date lisible (string de jour) pour regrouper par jour.

421:             const uniqueDays = new Set(dates).size;
Explication: Utilise un `Set` pour compter le nombre de jours uniques de création.

422: 
423:             animateNumber('statCount', count);
Explication: Anime le compteur du nombre de poèmes jusqu'à `count`.

424:             animateNumber('statWords', words);
Explication: Anime le compteur du nombre de mots jusqu'à `words`.

425:             animateNumber('statDays', uniqueDays);
Explication: Anime le compteur des jours jusqu'à `uniqueDays`.

426:         }
Explication: Fin de la fonction `updateStats`.

427: 
428:         // Animation des nombres
Explication: Commentaire pour la fonction `animateNumber`.

429:         function animateNumber(id, target) {
Explication: Déclare la fonction qui anime un nombre d'un élément DOM jusqu'à une valeur cible.

430:             const element = document.getElementById(id);
Explication: Récupère l'élément DOM par son `id`.

431:             const duration = 1500;
Explication: Durée de l'animation en millisecondes.

432:             const start = 0;
Explication: Valeur de départ de l'animation.

433:             const startTime = performance.now();
Explication: Enregistre le temps de départ précis pour l'animation.

434: 
435:             function update(currentTime) {
Explication: Fonction appelée chaque frame par `requestAnimationFrame` pour mettre à jour la valeur.

436:                 const elapsed = currentTime - startTime;
Explication: Temps écoulé depuis le début de l'animation.

437:                 const progress = Math.min(elapsed / duration, 1);
Explication: Progrès normalisé entre 0 et 1.

438:                 const easeProgress = 1 - Math.pow(1 - progress, 3);
Explication: Courbe d'easing cubique pour une animation plus douce.

439:                 const current = Math.floor(start + (target - start) * easeProgress);
Explication: Valeur courante interpolée entre `start` et `target`.

440:                 element.textContent = current;
Explication: Met à jour le texte de l'élément avec la valeur courante.

441:                 
442:                 if (progress < 1) {
Explication: Si l'animation n'est pas terminée, demande la prochaine frame.

443:                     requestAnimationFrame(update);
Explication: Planifie l'appel suivant pour poursuivre l'animation.

444:                 }
Explication: Fin du bloc conditionnel.

445:             }
Explication: Fin de la fonction `update`.

446: 
447:             requestAnimationFrame(update);
Explication: Lance la boucle d'animation.

448:         }
Explication: Fin de la fonction `animateNumber`.

449: 
450:         // Afficher les poèmes
Explication: Commentaire pour la fonction `displayPoems`.

451:         function displayPoems() {
Explication: Déclare la fonction qui construit et affiche les cartes de poèmes sur la page.

452:             const grid = document.getElementById('poemsGrid');
Explication: Récupère l'élément conteneur des poèmes.

453:             const emptyState = document.getElementById('emptyState');
Explication: Récupère l'élément d'état vide.

454:             
455:             let poemsToShow = [...allPoems];
Explication: Copie le tableau `allPoems` dans une nouvelle variable pour tri/filtrage sans muter l'original.

456:             
457:             // Appliquer les filtres
Explication: Commentaire pour la logique de filtrage.

458:             if (currentFilter === 'recent') {
Explication: Si le filtre courant est `recent`.

459:                 poemsToShow = poemsToShow.slice(0, 5);
Explication: Garde uniquement les 5 premiers poèmes (supposés être les plus récents si l'ordre est récent en premier).

460:             } else if (currentFilter === 'long') {
Explication: Si le filtre courant est `long`.

461:                 poemsToShow.sort((a, b) => b.content.length - a.content.length);
Explication: Trie les poèmes par longueur décroissante du contenu.

462:             }
Explication: Fin du bloc de filtrage.

463: 
464:             if (poemsToShow.length === 0) {
Explication: Si aucune carte à afficher, montrer l'état vide.

465:                 grid.style.display = 'none';
Explication: Masque la grille.

466:                 emptyState.style.display = 'block';
Explication: Affiche le message d'état vide.

467:                 return;
Explication: Interrompt la fonction.

468:             }
Explication: Fin du bloc conditionnel pour état vide.

469: 
470:             grid.style.display = 'grid';
Explication: Affiche la grille en mode `grid`.

471:             emptyState.style.display = 'none';
Explication: Masque l'état vide.

472:             grid.innerHTML = '';
Explication: Vide le contenu précédent du conteneur pour reconstruction.

473: 
474:             poemsToShow.forEach((poem, index) => {
Explication: Parcourt chaque poème à afficher et crée une carte.

475:                 const card = createPoemCard(poem, index);
Explication: Crée la carte DOM via `createPoemCard`.

476:                 grid.appendChild(card);
Explication: Ajoute la carte à la grille.

477:             });
Explication: Fin du `forEach`.

478:         }
Explication: Fin de la fonction `displayPoems`.

479: 
480:         // Créer une carte de poème
Explication: Commentaire pour `createPoemCard`.

481:         function createPoemCard(poem, index) {
Explication: Déclare la fonction qui construit une carte HTML à partir d'un objet `poem`.

482:             const card = document.createElement('div');
Explication: Crée un élément `div` représentant la carte.

483:             card.className = 'poem-card';
Explication: Assigne la classe CSS `poem-card`.

484:             card.style.animationDelay = `${index * 0.1}s`;
Explication: Décale l'animation d'apparition selon l'index pour effet en cascade.

485:             
486:             card.innerHTML = `
Explication: Construit le HTML interne de la carte en utilisant l'interpolation.

487:                 <h3>${escapeHtml(poem.title)}</h3>
Explication: Titre du poème, passé par `escapeHtml` pour éviter l'injection HTML.

488:                 <p class="poem-date">${poem.date}</p>
Explication: Affiche la date formatée fournie dans l'objet `poem`.

489:                 <div class="poem-content">${escapeHtml(poem.content)}</div>
Explication: Affiche un extrait du contenu (échappé) dans la carte.

490:                 <div class="poem-actions">
Explication: Conteneur des boutons d'action.

491:                     <button onclick="readPoem(${index})" title="Lire">
Explication: Bouton qui appelle `readPoem(index)` pour ouvrir le modal de lecture.

492:                         <i class="fas fa-eye"></i>
Explication: Icône d'œil pour lire.

493:                     </button>
Explication: Fin du bouton Lire.

494:                     <button onclick="deletePoem(${index})" title="Supprimer">
Explication: Bouton qui appelle `deletePoem(index)` pour supprimer le poème.

495:                         <i class="fas fa-trash"></i>
Explication: Icône poubelle pour la suppression.

496:                     </button>
Explication: Fin du bouton Supprimer.

497:                 </div>
Explication: Fin du conteneur `poem-actions`.

498:             `;
Explication: Fin de l'assignation `innerHTML`.

499:             
500:             return card;
Explication: Retourne l'élément DOM de la carte prêt à être inséré.

501:         }
Explication: Fin de la fonction `createPoemCard`.

502: 
503:         // Échapper le HTML
Explication: Commentaire pour la fonction `escapeHtml`.

504:         function escapeHtml(text) {
Explication: Déclare une fonction utilitaire sécurisant le texte pour insertion HTML.

505:             const div = document.createElement('div');
Explication: Crée un conteneur temporaire.

506:             div.textContent = text;
Explication: Assigne le texte dans `textContent` pour échapper automatiquement tout HTML.

507:             return div.innerHTML;
Explication: Retourne la version échappée (sécurisée) du texte.

508:         }
Explication: Fin de la fonction `escapeHtml`.

509: 
510:         // Filtrer les poèmes
Explication: Commentaire pour la fonction `filterPoems`.

511:         function filterPoems(filter) {
Explication: Déclare la fonction appelée par les boutons de filtrage.

512:             currentFilter = filter;
Explication: Met à jour la variable de filtre courant.

513:             
514:             // Mettre à jour les boutons actifs
Explication: Commentaire pour la mise à jour visuelle des boutons.

515:             document.querySelectorAll('.filter-btn').forEach(btn => {
Explication: Sélectionne tous les boutons de filtre.

516:                 btn.classList.remove('active');
Explication: Retire la classe `active` de chaque bouton.

517:             });
Explication: Fin du `forEach`.

518:             event.target.classList.add('active');
Explication: Ajoute la classe `active` au bouton cliqué (utilise l'objet `event` global).

519:             
520:             displayPoems();
Explication: Met à jour l'affichage des poèmes en appliquant le filtre.

521:         }
Explication: Fin de la fonction `filterPoems`.

522: 
523:         // Lire un poème
Explication: Commentaire pour la fonction `readPoem`.

524:         function readPoem(index) {
Explication: Déclare la fonction qui ouvre le modal et affiche le poème sélectionné.

525:             const poem = allPoems[index];
Explication: Récupère l'objet poème correspondant à l'index.

526:             document.getElementById('modalTitle').textContent = poem.title;
Explication: Place le titre dans l'élément modal.

527:             document.getElementById('modalDate').textContent = poem.date;
Explication: Place la date dans le modal.

528:             document.getElementById('modalText').textContent = poem.content;
Explication: Place le texte intégral du poème dans le modal.

529:             document.getElementById('readModal').classList.add('active');
Explication: Ajoute la classe `active` pour afficher l'overlay modal.

530:             document.body.style.overflow = 'hidden';
Explication: Désactive le défilement page pendant l'affichage du modal.

531:         }
Explication: Fin de la fonction `readPoem`.

532: 
533:         // Fermer le modal
Explication: Commentaire pour la fonction `closeModal`.

534:         function closeModal() {
Explication: Déclare la fonction qui masque le modal.

535:             document.getElementById('readModal').classList.remove('active');
Explication: Retire la classe `active` pour cacher l'overlay.

536:             document.body.style.overflow = '';
Explication: Restaure le comportement de défilement par défaut.

537:         }
Explication: Fin de la fonction `closeModal`.

538: 
539:         // Supprimer un poème
Explication: Commentaire pour la fonction `deletePoem`.

540:         function deletePoem(index) {
Explication: Déclare la fonction qui supprime un poème de la bibliothèque.

541:             if (confirm('Êtes-vous sûr de vouloir supprimer ce poème ?')) {
Explication: Demande une confirmation utilisateur avant suppression.

542:                 allPoems.splice(index, 1);
Explication: Retire l'élément du tableau `allPoems` à l'index donné.

543:                 localStorage.setItem('versEnLumierePoems', JSON.stringify(allPoems));
Explication: Met à jour `localStorage` avec la nouvelle liste sérialisée.

544:                 loadPoems();
Explication: Recharge les poèmes et met à jour l'interface.

545:             }
Explication: Fin du bloc conditionnel de confirmation.

546:         }
Explication: Fin de la fonction `deletePoem`.

547: 
548:         // Fermer le modal en cliquant sur l'overlay
Explication: Ajout d'un écouteur pour fermer le modal si l'utilisateur clique en dehors du contenu.

549:         document.getElementById('readModal').addEventListener('click', function(e) {
Explication: Écoute l'événement `click` sur l'overlay modal.

550:             if (e.target === this) {
Explication: Vérifie que le clic est bien sur l'overlay (et non sur le contenu interne).

551:                 closeModal();
Explication: Ferme le modal si l'overlay est cliqué.

552:             }
Explication: Fin du `if`.

553:         });
Explication: Fin de l'écouteur d'événement.

554: 
555:         // Fermer avec Escape
Explication: Ajout d'un raccourci clavier pour fermer le modal avec `Escape`.

556:         document.addEventListener('keydown', function(e) {
Explication: Écoute l'événement global `keydown`.

557:             if (e.key === 'Escape') {
Explication: Vérifie si la touche pressée est `Escape`.

558:                 closeModal();
Explication: Ferme le modal si `Escape` est pressée.

559:             }
Explication: Fin du `if`.

560:         });
Explication: Fin de l'écouteur `keydown`.

561: 
562:         // Initialisation
Explication: Commentaire pour l'initialisation au chargement du DOM.

563:         document.addEventListener('DOMContentLoaded', loadPoems);
Explication: Appelle `loadPoems` lorsque le DOM est prêt, ce qui affiche les poèmes et les stats.

564:     </script>
Explication: Fin du bloc script inline.

565: </body>
Explication: Fin du corps du document.

566: </html>
Explication: Fin du document HTML.
