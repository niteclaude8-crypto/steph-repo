Explication ligne par ligne de pages/creation.html

1: <!DOCTYPE html>
Explication: Déclare le document comme HTML5.

2: <html lang="fr">
Explication: Ouverture de la balise racine HTML et indication que le contenu est en français (`lang="fr"`).

3: <head>
Explication: Début de l'en-tête du document contenant les métadonnées, liens et styles.

4:     <meta charset="UTF-8">
Explication: Définit l'encodage des caractères en UTF-8 pour supporter les caractères spéciaux.

5:     <meta name="viewport" content="width=device-width, initial-scale=1.0">
Explication: Rend la page responsive en adaptant la largeur au périphérique et le niveau de zoom initial.

6:     <title>Créer un poème - Vers en Lumière</title>
Explication: Définit le titre affiché dans l'onglet du navigateur.

7:     <link rel="preconnect" href="https://fonts.googleapis.com">
Explication: Optimise le chargement en établissant une connexion anticipée au service Google Fonts.

8:     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
Explication: Même optimisations pour fonts.gstatic.com; `crossorigin` permet de charger des ressources cross-origin.

9:     <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet">
Explication: Importe plusieurs polices Google Fonts utilisées sur la page.

10:     <link rel="stylesheet" href="../css/style.css">
Explication: Lie la feuille de style principale du site située dans `css/style.css`.

11:     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
Explication: Importe Font Awesome pour utiliser des icônes.

12:     <style>
Explication: Début d'un bloc CSS inline spécifique à cette page.

13:         /* Styles spécifiques à la page de création */
Explication: Commentaire CSS indiquant la section de styles.

14:         .create-hero {
Explication: Sélecteur CSS pour la section hero de création.

15:             min-height: 40vh;
Explication: Hauteur minimale de la section: 40% de la hauteur de la fenêtre.

16:             display: flex;
Explication: Utilise Flexbox pour disposer le contenu.

17:             flex-direction: column;
Explication: Aligne les enfants verticalement (colonne).

18:             justify-content: center;
Explication: Centre verticalement le contenu dans la section.

19:             align-items: center;
Explication: Centre horizontalement les éléments.

20:             text-align: center;
Explication: Centre le texte à l'intérieur.

21:             padding: 3rem 2rem;
Explication: Ajoute un remplissage intérieur: 3rem vertical, 2rem horizontal.

22:             background: radial-gradient(circle at center, rgba(255,214,231,0.1) 0%, transparent 70%);
Explication: Définit un dégradé radial comme fond décoratif.

23:             animation: fadeIn 1s ease-out;
Explication: Applique une animation d'apparition nommée `fadeIn` sur 1 seconde.

24:         }
Explication: Fin du bloc `.create-hero`.

25: 
26:         .create-hero h1 {
Explication: Styles spécifiques pour le titre principal à l'intérieur de `.create-hero`.

27:             font-family: 'Playfair Display', serif;
Explication: Utilise la police `Playfair Display` pour le titre.

28:             font-size: clamp(2rem, 5vw, 3.5rem);
Explication: Taille du texte responsive: entre 2rem et 3.5rem selon la largeur (`clamp`).

29:             background: linear-gradient(45deg, #ffd6e7, #e6b3ff, #b3ecff);
Explication: Applique un dégradé en tant que fond du texte (pour effet visuel).

30:             -webkit-background-clip: text;
Explication: Permet de découper le fond au niveau du texte (WebKit).

31:             -webkit-text-fill-color: transparent;
Explication: Rend le remplissage du texte transparent pour montrer le dégradé.

32:             background-clip: text;
Explication: Version standard de `background-clip: text`.

33:             margin-bottom: 1rem;
Explication: Ajoute un espace sous le titre.

34:         }
Explication: Fin du bloc `.create-hero h1`.

35: 
36:         .create-hero p {
Explication: Styles pour le paragraphe dans la hero.

37:             font-size: 1.2rem;
Explication: Taille de texte pour le paragraphe.

38:             opacity: 0.9;
Explication: Légère transparence pour atténuer le texte.

39:             max-width: 600px;
Explication: Limite la largeur du paragraphe pour meilleure lisibilité.

40:         }
Explication: Fin du bloc `.create-hero p`.

41: 
42:         .create-container {
Explication: Conteneur principal de la zone de création.

43:             max-width: 900px;
Explication: Largeur maximale du conteneur.

44:             margin: 0 auto;
Explication: Centre le conteneur horizontalement en utilisant marges automatiques.

45:             padding: 2rem;
Explication: Ajoute un remplissage intérieur au conteneur.

46:         }
Explication: Fin du bloc `.create-container`.

47: 
48:         .create-form {
Explication: Styles pour le formulaire de création.

49:             background: rgba(255,255,255,0.05);
Explication: Fond semi-transparent pour l'effet glass.

50:             backdrop-filter: blur(20px);
Explication: Floute l'arrière-plan derrière l'élément (effet verre dépoli).

51:             border-radius: 25px;
Explication: Arrondit les coins du formulaire.

52:             padding: 3rem;
Explication: Espacement intérieur du formulaire.

53:             border: 1px solid rgba(255,255,255,0.1);
Explication: Bordure légère pour délimiter l'élément.

54:             animation: fadeInUp 1s ease-out;
Explication: Applique l'animation `fadeInUp` pour une entrée fluide.

55:         }
Explication: Fin du bloc `.create-form`.

56: 
57:         .form-group {
Explication: Groupe d'éléments de formulaire (label + input/textarea).

58:             margin-bottom: 2rem;
Explication: Espace sous chaque groupe de formulaire.

59:         }
Explication: Fin du bloc `.form-group`.

60: 
61:         .form-group label {
Explication: Styles pour les étiquettes des champs.

62:             display: block;
Explication: Affiche le label sur sa propre ligne.

63:             font-family: 'Playfair Display', serif;
Explication: Police du label.

64:             font-size: 1.2rem;
Explication: Taille du texte du label.

65:             margin-bottom: 0.8rem;
Explication: Espace sous le label.

66:             color: #ffd6e7;
Explication: Couleur du texte du label.

67:         }
Explication: Fin du bloc `.form-group label`.

68: 
69:         .form-group label i {
Explication: Style pour l'icône à l'intérieur du label.

70:             margin-right: 0.5rem;
Explication: Marge à droite pour espacer l'icône du texte.

71:         }
Explication: Fin du bloc `.form-group label i`.

72: 
73:         #poem-title-input {
Explication: Sélecteur pour l'input du titre du poème.

74:             width: 100%;
Explication: L'input prend toute la largeur disponible.

75:             padding: 1rem 1.5rem;
Explication: Espacement intérieur de l'input.

76:             font-size: 1.3rem;
Explication: Taille de police de l'input.

77:             background: rgba(255,255,255,0.1);
Explication: Fond semi-transparent pour l'input.

78:             border: 2px solid rgba(255,255,255,0.2);
Explication: Bordure un peu plus prononcée que le formulaire.

79:             border-radius: 15px;
Explication: Coins arrondis de l'input.

80:             color: #f0e6f6;
Explication: Couleur du texte à l'intérieur de l'input.

81:             font-family: 'Playfair Display', serif;
Explication: Police utilisée par l'input.

82:             transition: all 0.3s ease;
Explication: Transition douce pour changements d'état (focus, hover, etc.).

83:         }
Explication: Fin du bloc `#poem-title-input`.

84: 
85:         #poem-title-input:focus {
Explication: Styles appliqués quand l'input du titre est en focus.

86:             outline: none;
Explication: Retire le contour par défaut du navigateur.

87:             border-color: #ffd6e7;
Explication: Change la couleur de la bordure au focus.

88:             box-shadow: 0 0 20px rgba(255,214,231,0.3);
Explication: Ajoute une lueur autour de l'input pour l'accentuer.

89:         }
Explication: Fin du bloc `#poem-title-input:focus`.

90: 
91:         #poem-title-input::placeholder {
Explication: Styles pour le texte d'espace réservé (placeholder).

92:             color: rgba(255,255,255,0.4);
Explication: Couleur atténuée du placeholder.

93:         }
Explication: Fin du bloc `#poem-title-input::placeholder`.

94: 
95:         #poem-content {
Explication: Sélecteur pour la zone de texte (textarea) du poème.

96:             width: 100%;
Explication: Prend toute la largeur disponible.

97:             min-height: 350px;
Explication: Hauteur minimale de la zone de texte.

98:             padding: 2rem;
Explication: Espacement intérieur généreux pour la zone de texte.

99:             font-size: 1.3rem;
Explication: Taille de police pour le contenu du poème.

100:             line-height: 1.8;
Explication: Hauteur de ligne pour une meilleure lisibilité.

101:             background: rgba(255,255,255,0.08);
Explication: Fond semi-transparent pour la zone de texte.

102:             border: 2px solid rgba(255,255,255,0.15);
Explication: Bordure de la zone de texte.

103:             border-radius: 20px;
Explication: Coins arrondis du textarea.

104:             color: #f0e6f6;
Explication: Couleur du texte dans le textarea.

105:             font-family: 'Cormorant Garamond', serif;
Explication: Police utilisée pour le texte poétique.

106:             resize: vertical;
Explication: Autorise uniquement le redimensionnement vertical par l'utilisateur.

107:             transition: all 0.3s ease;
Explication: Transition douce pour les changements d'état.

108:         }
Explication: Fin du bloc `#poem-content`.

109: 
110:         #poem-content:focus {
Explication: Styles appliqués quand le textarea est en focus.

111:             outline: none;
Explication: Supprime le contour par défaut.

112:             box-shadow: 0 0 30px rgba(255,214,231,0.3);
Explication: Ajoute une lueur plus prononcée au focus.

113:             border-color: #ffd6e7;
Explication: Change la couleur de la bordure au focus.

114:         }
Explication: Fin du bloc `#poem-content:focus`.

115: 
116:         #poem-content::placeholder {
Explication: Styles du placeholder du textarea.

117:             color: rgba(255,255,255,0.4);
Explication: Couleur atténuée pour le placeholder.

118:             font-style: italic;
Explication: Met le placeholder en italique pour un style poétique.

119:         }
Explication: Fin du bloc `#poem-content::placeholder`.

120: 
121:         .form-actions {
Explication: Conteneur des boutons d'action du formulaire.

122:             display: flex;
Explication: Utilise Flexbox pour disposer les boutons.

123:             gap: 1.5rem;
Explication: Espace entre les boutons.

124:             justify-content: center;
Explication: Centre les boutons horizontalement.

125:             margin-top: 2rem;
Explication: Espace au-dessus des actions.

126:             flex-wrap: wrap;
Explication: Autorise le retour à la ligne si l'espace est restreint.

127:         }
Explication: Fin du bloc `.form-actions`.

128: 
129:         .btn {
Explication: Styles de base pour les boutons.

130:             padding: 1rem 2.5rem;
Explication: Espacement intérieur des boutons.

131:             font-size: 1.1rem;
Explication: Taille de police des boutons.

132:             border: none;
Explication: Retire la bordure native.

133:             border-radius: 50px;
Explication: Boutons très arrondis (pill-shaped).

134:             cursor: pointer;
Explication: Change le curseur pour indiquer l'interactivité.

135:             font-family: 'Cormorant Garamond', serif;
Explication: Police utilisée pour les boutons.

136:             font-weight: 600;
Explication: Poids de police pour rendre le texte légèrement plus gras.

137:             transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
Explication: Transition personnalisée pour les effets d'interaction.

138:             position: relative;
Explication: Position relative pour pouvoir placer des pseudo-éléments internes.

139:             overflow: hidden;
Explication: Cache le débordement utilisé pour l'effet hover du pseudo-élément.

140:         }
Explication: Fin du bloc `.btn`.

141: 
142:         .btn::before {
Explication: Pseudo-élément décoratif pour les boutons (effet bande lumineuse).

143:             content: '';
Explication: Nécessaire pour rendre le pseudo-élément visible.

144:             position: absolute;
Explication: Positionnement absolu à l'intérieur du bouton parent.

145:             top: 0;
Explication: Position en haut du parent.

146:             left: -100%;
Explication: Commence hors du bouton, à gauche.

147:             width: 100%;
Explication: Largeur égale au bouton.

148:             height: 100%;
Explication: Hauteur égale au bouton.

149:             background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
Explication: Dégradé utilisé pour l'effet de survol.

150:             transition: left 0.6s;
Explication: Transition du déplacement horizontal du pseudo-élément.

151:         }
Explication: Fin du bloc `.btn::before`.

152: 
153:         .btn:hover::before {
Explication: Lors du hover, le pseudo-élément traverse le bouton pour l'effet visuel.

154:             left: 100%;
Explication: Déplace le pseudo-élément à droite du bouton.

155:         }
Explication: Fin du bloc `.btn:hover::before`.

156: 
157:         .btn.primary {
Explication: Styles spécifiques pour le bouton principal (primaire).

158:             background: linear-gradient(45deg, #ff6b9d, #c44569);
Explication: Fond en dégradé pour le bouton primaire.

159:             color: white;
Explication: Texte en blanc pour contraste.

160:             box-shadow: 0 10px 30px rgba(255,107,157,0.4);
Explication: Ombre portée pour un effet de profondeur.

161:         }
Explication: Fin du bloc `.btn.primary`.

162: 
163:         .btn.primary:hover {
Explication: Effet au survol pour le bouton primaire.

164:             transform: translateY(-3px) scale(1.05);
Explication: Soulève et agrandit légèrement le bouton au hover.

165:             box-shadow: 0 20px 40px rgba(255,107,157,0.6);
Explication: Augmente l'ombre pour renforcer l'effet.

166:         }
Explication: Fin du bloc `.btn.primary:hover`.

167: 
168:         .btn.secondary {
Explication: Styles pour le bouton secondaire.

169:             background: rgba(255,255,255,0.1);
Explication: Fond semi-transparent pour contraste plus doux.

170:             color: #f0e6f6;
Explication: Couleur du texte pour le bouton secondaire.

171:             backdrop-filter: blur(10px);
Explication: Floute légèrement l'arrière-plan sous le bouton.

172:             border: 1px solid rgba(255,255,255,0.2);
Explication: Bordure fine pour le bouton secondaire.

173:         }
Explication: Fin du bloc `.btn.secondary`.

174: 
175:         .btn.secondary:hover {
Explication: Effet au survol pour le bouton secondaire.

176:             background: rgba(255,255,255,0.2);
Explication: Rend le fond légèrement plus visible au hover.

177:             transform: translateY(-3px);
Explication: Soulève légèrement le bouton au hover.

178:         }
Explication: Fin du bloc `.btn.secondary:hover`.

179: 
180:         /* Prévisualisation */
Explication: Commentaire indiquant la section de styles pour la prévisualisation.

181:         .preview-section {
Explication: Conteneur pour la section de prévisualisation.

182:             margin-top: 3rem;
Explication: Espace au-dessus de la section de prévisualisation.

183:             animation: fadeInUp 1s ease-out;
Explication: Animation d'entrée pour la prévisualisation.

184:         }
Explication: Fin du bloc `.preview-section`.

185: 
186:         .preview-title {
Explication: Style du titre de la section de prévisualisation.

187:             text-align: center;
Explication: Centre le texte du titre.

188:             font-family: 'Playfair Display', serif;
Explication: Police du titre.

189:             font-size: 1.8rem;
Explication: Taille du titre.

190:             margin-bottom: 2rem;
Explication: Espace sous le titre.

191:             color: #e6b3ff;
Explication: Couleur du titre.

192:         }
Explication: Fin du bloc `.preview-title`.

193: 
194:         .preview-card {
Explication: Carte contenant la prévisualisation du poème.

195:             background: rgba(255,255,255,0.05);
Explication: Fond semi-transparent pour la carte.

196:             backdrop-filter: blur(20px);
Explication: Effet verre dépoli sur la carte.

197:             border-radius: 25px;
Explication: Coins arrondis de la carte.

198:             padding: 3rem;
Explication: Espacement interne de la carte.

199:             border: 1px solid rgba(255,255,255,0.1);
Explication: Bordure discrète.

200:             text-align: center;
Explication: Centre le contenu textuel de la carte.

201:             position: relative;
Explication: Permet l'utilisation de pseudo-éléments positionnés.

202:             overflow: hidden;
Explication: Cache le débordement pour les éléments décoratifs.

203:         }
Explication: Fin du bloc `.preview-card`.

204: 
205:         .preview-card::before {
Explication: Pseudo-élément décoratif pour la carte (guillemet décoratif).

206:             content: '"';
Explication: Place une guillemet décorative en pseudo-élément.

207:             position: absolute;
Explication: Positionne le guillemet de manière absolue.

208:             top: -20px;
Explication: Décale le guillemet vers le haut en dehors de la carte.

209:             left: 20px;
Explication: Décale le guillemet depuis la gauche.

210:             font-size: 8rem;
Explication: Très grande taille pour l'effet décoratif.

211:             color: rgba(255,214,231,0.1);
Explication: Couleur très pâle pour ne pas gêner la lecture.

212:             font-family: 'Playfair Display', serif;
Explication: Police utilisée pour le guillemet.

213:         }
Explication: Fin du bloc `.preview-card::before`.

214: 
215:         .preview-card h3 {
Explication: Style pour le titre de la carte de prévisualisation.

216:             font-family: 'Playfair Display', serif;
Explication: Police du sous-titre.

217:             font-size: 2rem;
Explication: Taille du sous-titre.

218:             color: #ffd6e7;
Explication: Couleur du titre.

219:             margin-bottom: 0.5rem;
Explication: Petit espace sous le titre.

220:         }
Explication: Fin du bloc `.preview-card h3`.

221: 
222:         .preview-card .preview-date {
Explication: Style pour la date affichée dans la carte.

223:             color: #b3ecff;
Explication: Couleur de la date.

224:             font-style: italic;
Explication: Met la date en italique.

225:             margin-bottom: 2rem;
Explication: Espace sous la date.

226:         }
Explication: Fin du bloc `.preview-card .preview-date`.

227: 
228:         .preview-card .preview-text {
Explication: Style pour le texte du poème dans la prévisualisation.

229:             font-size: 1.3rem;
Explication: Taille du texte du poème.

230:             line-height: 2;
Explication: Hauteur de ligne généreuse pour lecture.

231:             white-space: pre-wrap;
Explication: Respecte les sauts de ligne saisis par l'utilisateur et les renvoie.

232:             text-align: left;
Explication: Aligne le texte du poème à gauche pour une lecture naturelle.

233:             max-width: 600px;
Explication: Largeur maximale du texte pour garder la lisibilité.

234:             margin: 0 auto;
Explication: Centre le bloc horizontalement à l'intérieur de la carte.

235:         }
Explication: Fin du bloc `.preview-card .preview-text`.

236: 
237:         /* Message de succès */
Explication: Commentaire pour la section message de succès.

238:         .success-message {
Explication: Style de la boîte de message momentanée.

239:             position: fixed;
Explication: Position fixe à l'écran pour rester visible.

240:             top: 20px;
Explication: Décalage depuis le haut de la fenêtre.

241:             right: 20px;
Explication: Décalage depuis la droite de la fenêtre.

242:             background: linear-gradient(45deg, #ff6b9d, #c44569);
Explication: Fond en dégradé pour attirer l'attention.

243:             color: white;
Explication: Texte en blanc pour contraste.

244:             padding: 1rem 2rem;
Explication: Espacement interne du message.

245:             border-radius: 50px;
Explication: Coins très arrondis pour l'aspect pill.

246:             z-index: 1000;
Explication: Valeur z-index élevée pour qu'il apparaisse au-dessus des autres éléments.

247:             animation: slideIn 0.5s ease-out, fadeOut 0.5s ease-out 2.5s forwards;
Explication: Animation combinée: apparition puis disparition auto.

248:             box-shadow: 0 10px 30px rgba(255,107,157,0.4);
Explication: Ombre portée pour profondeur.

249:         }
Explication: Fin du bloc `.success-message`.

250: 
251:         @keyframes slideIn {
Explication: Définition de l'animation `slideIn`.

252:             from { transform: translateX(100%); opacity: 0; }
Explication: Début: hors de l'écran à droite et transparent.

253:             to { transform: translateX(0); opacity: 1; }
Explication: Fin: position normale et pleinement opaque.

254:         }
Explication: Fin `@keyframes slideIn`.

255: 
256:         @keyframes fadeOut {
Explication: Définition de l'animation `fadeOut`.

257:             from { opacity: 1; }
Explication: Début opaque.

258:             to { opacity: 0; }
Explication: Fin transparent.

259:         }
Explication: Fin `@keyframes fadeOut`.

260: 
261:         @keyframes fadeIn {
Explication: Définition de l'animation `fadeIn`.

262:             from { opacity: 0; }
Explication: Commence transparent.

263:             to { opacity: 1; }
Explication: Termine opaque.

264:         }
Explication: Fin `@keyframes fadeIn`.

265: 
266:         @keyframes fadeInUp {
Explication: Définition de l'animation `fadeInUp`.

267:             from { opacity: 0; transform: translateY(30px); }
Explication: Commence décalé vers le bas et transparent.

268:             to { opacity: 1; transform: translateY(0); }
Explication: Termine en place et visible.

269:         }
Explication: Fin `@keyframes fadeInUp`.

270: 
271:         /* Responsive */
Explication: Section pour règles CSS adaptatives.

272:         @media (max-width: 768px) {
Explication: Règles appliquées pour écrans de largeur <= 768px.

273:             .create-form {
Explication: Ajustements pour le formulaire sur petits écrans.

274:                 padding: 2rem 1rem;
Explication: Réduit le padding pour s'adapter aux petits écrans.

275:             }
Explication: Fin du bloc `.create-form` sous la media query.

276:             
277:             .form-actions {
Explication: Ajuste l'affichage des actions sur mobile.

278:                 flex-direction: column;
Explication: Empile les boutons verticalement.

279:                 align-items: center;
Explication: Centre les boutons.

280:             }
Explication: Fin du bloc `.form-actions` sous media query.

281:             
282:             .btn {
Explication: Ajustement des boutons sur mobile.

283:                 width: 100%;
Explication: Les boutons prennent toute la largeur disponible.

284:                 max-width: 300px;
Explication: Limite la largeur maximale pour éviter qu'ils deviennent trop larges.

285:             }
Explication: Fin du bloc `.btn` sous media query.

286:         }
Explication: Fin de la media query responsive.

287:     </style>
Explication: Fin du bloc de styles inline.

288: </head>
Explication: Fin de l'en-tête du document.

289: <body>
Explication: Début du corps du document contenant le contenu visible.

290:     <!-- Navigation -->
Explication: Commentaire indiquant la section de navigation.

291:     <nav class="navbar">
Explication: Balise nav pour la barre de navigation principale.

292:         <div class="nav-container">
Explication: Conteneur interne de la navigation.

293:             <a href="../index.html" class="logo">
Explication: Lien vers la page d'accueil avec la classe `logo`.

294:                 <i class="fas fa-feather-alt"></i>
Explication: Icône Font Awesome représentant une plume.

295:                 <span>Vers en Lumière</span>
Explication: Nom du site affiché dans la navigation.

296:             </a>
Explication: Fin du lien logo.

297:             <button class="nav-toggle" onclick="toggleNav()">
Explication: Bouton pour ouvrir/fermer la navigation sur mobile; appelle `toggleNav()`.

298:                 <i class="fas fa-bars"></i>
Explication: Icône hamburger (bars) pour le menu.

299:             </button>
Explication: Fin du bouton nav-toggle.

300:             <div class="nav-links" id="navLinks">
Explication: Conteneur des liens de navigation; `id` utilisé pour manipulation JS.

301:                 <a href="../index.html" class="nav-link">Accueil</a>
Explication: Lien vers la page d'accueil.

302:                 <a href="creation.html" class="nav-link active">Créer un poème</a>
Explication: Lien vers la page actuelle; `active` indique l'état actif.

303:                 <a href="vos-creations.html" class="nav-link">Vos créations</a>
Explication: Lien vers la page listant les créations de l'utilisateur.

304:                 <a href="auteurs.html" class="nav-link">Auteurs & Œuvres</a>
Explication: Lien vers la page des auteurs et œuvres.

305:             </div>
Explication: Fin du conteneur `nav-links`.

306:         </div>
Explication: Fin du conteneur `nav-container`.

307:     </nav>
Explication: Fin de la barre de navigation.

308: 
309:     <!-- Hero Section -->
Explication: Commentaire pour la section hero.

310:     <section class="create-hero">
Explication: Section visuelle d'introduction à la création.

311:         <h1>Créez votre poème</h1>
Explication: Titre principal de la page.

312:         <p>Laissez votre plume danser sur le papier numérique. Chaque mot est une étincelle de lumière.</p>
Explication: Texte d'accroche / sous-titre.

313:     </section>
Explication: Fin de la section hero.

314: 
315:     <!-- Formulaire de création -->
Explication: Commentaire pour la section contenant le formulaire.

316:     <section class="create-container">
Explication: Conteneur principal pour le formulaire et la prévisualisation.

317:         <form id="poem-form" class="create-form">
Explication: Début du formulaire de création avec `id` pour ciblage JS.

318:             <div class="form-group">
Explication: Groupe pour le titre du poème.

319:                 <label for="poem-title-input"><i class="fas fa-heading"></i> Titre de votre poème</label>
Explication: Label lié à l'input du titre; inclut une icône.

320:                 <input type="text" id="poem-title-input" placeholder="Entrez le titre de votre chef-d'œuvre..." required>
Explication: Champ texte pour le titre, avec placeholder et attribut `required`.

321:             </div>
Explication: Fin du groupe titre.

322:             
323:             <div class="form-group">
Explication: Groupe pour le contenu du poème.

324:                 <label for="poem-content"><i class="fas fa-pen-fancy"></i> Vos vers</label>
Explication: Label pour le textarea du poème, avec icône.

325:                 <textarea id="poem-content" placeholder="Écrivez ici les vers de votre âme...\n\nLa poésie est le journal d'un animal marin qui vit sur terre et qui voudrait voler." required></textarea>
Explication: Zone de texte pour écrire le poème; placeholder multi-lignes et `required`.

326:             </div>
Explication: Fin du groupe contenu.

327:             
328:             <div class="form-actions">
Explication: Conteneur des boutons d'action.

329:                 <button type="button" class="btn secondary" onclick="previewPoem()">
Explication: Bouton qui déclenche la prévisualisation sans soumettre le formulaire.

330:                     <i class="fas fa-eye"></i> Prévisualiser
Explication: Icône et texte du bouton Prévisualiser.

331:                 </button>
Explication: Fin du bouton Prévisualiser.

332:                 <button type="submit" class="btn primary">
Explication: Bouton de soumission du formulaire (sauvegarde).

333:                     <i class="fas fa-save"></i> Sauvegarder
Explication: Icône et texte du bouton Sauvegarder.

334:                 </button>
Explication: Fin du bouton Sauvegarder.

335:             </div>
Explication: Fin du conteneur `form-actions`.

336:         </form>
Explication: Fin du formulaire.

337: 
338:         <!-- Section de prévisualisation -->
Explication: Commentaire pour la section de prévisualisation.

339:         <div class="preview-section" id="previewSection" style="display: none;">
Explication: Conteneur de prévisualisation, masqué par défaut (`display: none`).

340:             <h2 class="preview-title"><i class="fas fa-magic"></i> Prévisualisation</h2>
Explication: Titre de la section de prévisualisation avec icône.

341:             <div class="preview-card">
Explication: Carte qui affichera le rendu du poème.

342:                 <h3 id="preview-title">Titre du poème</h3>
Explication: Élément qui recevra le titre du poème en JS.

343:                 <p class="preview-date" id="preview-date"></p>
Explication: Élément pour afficher la date de prévisualisation.

344:                 <div class="preview-text" id="preview-text"></div>
Explication: Élément qui affichera le contenu du poème en prévisualisation.

345:             </div>
Explication: Fin de la carte de prévisualisation.

346:         </div>
Explication: Fin de la section de prévisualisation.

347:     </section>
Explication: Fin du conteneur de création.

348: 
349:     <!-- Footer -->
Explication: Commentaire pour le pied de page.

350:     <footer>
Explication: Balise footer contenant les crédits ou texte bas de page.

351:         <p><i class="fas fa-heart"></i> Vers en Lumière - Où chaque mot trouve sa lumière</p>
Explication: Texte de pied de page avec icône cœur.

352:     </footer>
Explication: Fin du footer.

353: 
354:     <script src="../js/main.js"></script>
Explication: Inclusion d'un fichier JS global principal (navigation, utilitaires, etc.).

355:     <script>
Explication: Début d'un script inline spécifique à cette page.

356:         // Prévisualisation du poème
Explication: Commentaire indiquant la fonction de prévisualisation.

357:         function previewPoem() {
Explication: Déclaration de la fonction `previewPoem` utilisée par le bouton Prévisualiser.

358:             const title = document.getElementById('poem-title-input').value || 'Sans titre';
Explication: Récupère le titre saisi ou utilise 'Sans titre' si vide.

359:             const content = document.getElementById('poem-content').value;
Explication: Récupère le contenu du textarea.
            
360:             if (!content.trim()) {
Explication: Vérifie si le contenu est vide ou ne contient que des espaces.

361:                 showMessage('Veuillez écrire quelques vers avant de prévisualiser.', 'warning');
Explication: Affiche un message d'alerte demandant d'écrire avant prévisualisation.

362:                 return;
Explication: Interrompt la fonction si aucun contenu.

363:             }
Explication: Fin du bloc de vérification du contenu.

364: 
365:             document.getElementById('preview-title').textContent = title;
Explication: Place le titre récupéré dans l'élément de prévisualisation.

366:             document.getElementById('preview-date').textContent = new Date().toLocaleDateString('fr-FR', {
Explication: Génère une date locale formatée en français pour l'afficher.

367:                 weekday: 'long',
Explication: Option: affiche le jour de la semaine en toutes lettres.

368:                 year: 'numeric',
Explication: Option: affiche l'année en chiffres.

369:                 month: 'long',
Explication: Option: affiche le mois en toutes lettres.

370:                 day: 'numeric'
Explication: Option: affiche le jour du mois.

371:             });
Explication: Fin de l'appel `toLocaleDateString`.

372:             document.getElementById('preview-text').textContent = content;
Explication: Affecte le contenu du poème à l'élément de texte de prévisualisation.

373:             
374:             const previewSection = document.getElementById('previewSection');
Explication: Récupère l'élément de la section de prévisualisation.

375:             previewSection.style.display = 'block';
Explication: Rend la section visible.

376:             previewSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
Explication: Défile en douceur pour amener la section au centre de la vue.

377:             
378:             // Animation d'entrée
Explication: Commentaire pour le bloc d'animation.

379:             previewSection.style.opacity = '0';
Explication: Définit l'opacité initiale pour l'animation.

380:             previewSection.style.transform = 'translateY(30px)';
Explication: Décale initialement la section vers le bas pour l'animation.

381:             setTimeout(() => {
Explication: Délai court pour déclencher la transition CSS après affichage.

382:                 previewSection.style.transition = 'all 0.6s ease';
Explication: Définit la transition qui animera l'entrée.

383:                 previewSection.style.opacity = '1';
Explication: Rend la section visible graduellement.

384:                 previewSection.style.transform = 'translateY(0)';
Explication: Ramène la section à sa position normale.

385:             }, 100);
Explication: Fin du `setTimeout` avec délai de 100ms.

386:         }
Explication: Fin de la fonction `previewPoem`.

387: 
388:         // Sauvegarde du poème
Explication: Commentaire pour la logique de sauvegarde.

389:         document.getElementById('poem-form').addEventListener('submit', function(e) {
Explication: Ajoute un écouteur d'événement pour l'envoi du formulaire.

390:             e.preventDefault();
Explication: Empêche le comportement par défaut (rechargement de la page).
            
391:             const title = document.getElementById('poem-title-input').value;
Explication: Récupère le titre saisi.

392:             const content = document.getElementById('poem-content').value;
Explication: Récupère le contenu saisi.
            
393:             const poem = {
Explication: Crée un objet `poem` contenant les données à sauvegarder.

394:                 title: title,
Explication: Propriété `title` contenant le titre.

395:                 content: content,
Explication: Propriété `content` contenant le texte du poème.

396:                 date: new Date().toLocaleDateString('fr-FR', {
Explication: Propriété `date` formatée en français avec date et heure.

397:                     weekday: 'long',
Explication: Affiche le jour en toutes lettres dans la date.

398:                     year: 'numeric',
Explication: Affiche l'année en chiffres.

399:                     month: 'long',
Explication: Affiche le mois en toutes lettres.

400:                     day: 'numeric',
Explication: Affiche le jour du mois en chiffres.

401:                     hour: '2-digit',
Explication: Affiche l'heure en format 2 chiffres.

402:                     minute: '2-digit'
Explication: Affiche les minutes en format 2 chiffres.

403:                 }),
Explication: Fin de l'objet date formatée.

404:                 timestamp: Date.now()
Explication: Propriété `timestamp` utilisée pour trier ou identifier l'enregistrement (nombre de ms depuis 1970).

405:             };
Explication: Fin de la création de l'objet `poem`.
            
406:             savePoem(poem);
Explication: Appelle la fonction `savePoem` pour persister le poème.
            
407:             // Reset form
Explication: Commentaire: réinitialisation du formulaire.

408:             this.reset();
Explication: Réinitialise tous les champs du formulaire à leurs valeurs initiales.

409:             document.getElementById('previewSection').style.display = 'none';
Explication: Cache la section de prévisualisation après sauvegarde.

410:             
411:             // Message de succès
Explication: Commentaire pour l'affichage du message de réussite.

412:             showMessage('Poème sauvegardé avec succès ! ✨', 'success');
Explication: Affiche un message de confirmation à l'utilisateur.

413:         });
Explication: Fin du gestionnaire d'événement `submit`.

414: 
415:         // Fonction de sauvegarde
Explication: Commentaire pour la fonction `savePoem`.

416:         function savePoem(poem) {
Explication: Déclaration de la fonction qui sauvegarde le poème en local.

417:             let savedPoems = JSON.parse(localStorage.getItem('versEnLumierePoems')) || [];
Explication: Récupère la liste existante depuis `localStorage` ou initialise un tableau vide.

418:             savedPoems.unshift(poem);
Explication: Ajoute le nouveau poème au début du tableau (ordre récent en premier).

419:             localStorage.setItem('versEnLumierePoems', JSON.stringify(savedPoems));
Explication: Sauvegarde le tableau mis à jour dans `localStorage` sous forme JSON.

420:         }
Explication: Fin de la fonction `savePoem`.

421: 
422:         // Afficher un message
Explication: Commentaire pour la fonction `showMessage`.

423:         function showMessage(text, type) {
Explication: Déclare la fonction qui affiche un message temporaire.

424:             const existing = document.querySelector('.success-message');
Explication: Recherche s'il existe déjà un message affiché.

425:             if (existing) existing.remove();
Explication: Supprime l'ancien message s'il existe pour éviter duplications.
            
426:             const message = document.createElement('div');
Explication: Crée un nouvel élément `div` pour le message.

427:             message.className = 'success-message';
Explication: Assigne la classe CSS pour le style du message.

428:             message.textContent = text;
Explication: Définit le texte du message.

429:             
430:             if (type === 'warning') {
Explication: Si le type est `warning`, change le style pour refléter l'alerte.

431:                 message.style.background = 'linear-gradient(45deg, #ffa726, #ff7043)';
Explication: Applique un dégradé orange pour indiquer une alerte.

432:             }
Explication: Fin de la condition sur le type de message.
            
433:             document.body.appendChild(message);
Explication: Ajoute le message au corps du document pour l'afficher.

434:             setTimeout(() => message.remove(), 3000);
Explication: Supprime automatiquement le message après 3 secondes.

435:         }
Explication: Fin de la fonction `showMessage`.

436: 
437:         // Animation d'entrée du formulaire
Explication: Commentaire pour l'animation d'entrée du formulaire au chargement.

438:         document.addEventListener('DOMContentLoaded', function() {
Explication: Exécute le code à l'événement DOMContentLoaded (quand le DOM est prêt).

439:             const form = document.querySelector('.create-form');
Explication: Récupère l'élément du formulaire.

440:             form.style.opacity = '0';
Explication: Définit l'opacité initiale à 0 pour l'animation.

441:             form.style.transform = 'translateY(30px)';
Explication: Décale initialement le formulaire vers le bas.
            
442:             setTimeout(() => {
Explication: Déclenche la transition après un court délai.

443:                 form.style.transition = 'all 0.8s ease';
Explication: Définit la transition qui animera le formulaire.

444:                 form.style.opacity = '1';
Explication: Rend le formulaire progressivement visible.

445:                 form.style.transform = 'translateY(0)';
Explication: Ramène le formulaire à sa position normale.

446:             }, 200);
Explication: Délai de 200ms avant de lancer l'animation d'entrée.

447:         });
Explication: Fin du gestionnaire `DOMContentLoaded`.

448:     </script>
Explication: Fin du bloc script inline.

449: </body>
Explication: Fin du corps du document.

450: </html>
Explication: Fin du document HTML.
