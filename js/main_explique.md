Explication ligne par ligne de js/main.js

1: /* ========================================
Explication: Début d'un commentaire multi-ligne servant d'en-tête descriptif pour le fichier.

2:    VERS EN LUMIÈRE - Scripts Globaux
Explication: Titre du fichier indiquant qu'il contient des scripts partagés au site.

3:    ======================================== */
Explication: Fin du commentaire d'en-tête.

4: 
5: // Toggle navigation mobile
Explication: Commentaire indiquant que la fonction suivante gère l'ouverture/fermeture du menu mobile.

6: function toggleNav() {
Explication: Déclaration d'une fonction nommée `toggleNav`.

7:     const navLinks = document.getElementById('navLinks');
Explication: Récupère l'élément DOM avec l'id `navLinks` (conteneur des liens de navigation).

8:     navLinks.classList.toggle('active');
Explication: Bascule la classe CSS `active` sur le conteneur pour ouvrir/fermer le menu.

9: }
Explication: Fin de la fonction `toggleNav`.

10: 
11: // Fermer le menu mobile en cliquant sur un lien
Explication: Commentaire décrivant le comportement suivant: fermer le menu lorsqu'un lien est cliqué.

12: document.addEventListener('DOMContentLoaded', function() {
Explication: Attache un écouteur pour exécuter le bloc lorsque le DOM est entièrement chargé.

13:     const navLinks = document.querySelectorAll('.nav-link');
Explication: Sélectionne tous les éléments qui ont la classe `.nav-link`.

14:     navLinks.forEach(link => {
Explication: Itère sur chaque lien de navigation.

15:         link.addEventListener('click', () => {
Explication: Ajoute un écouteur `click` sur chaque lien.

16:             const navLinksContainer = document.getElementById('navLinks');
Explication: Récupère à nouveau le conteneur `navLinks` (sécurise l'opération si absent).

17:             if (navLinksContainer) {
Explication: Vérifie que l'élément existe avant d'agir dessus.

18:                 navLinksContainer.classList.remove('active');
Explication: Retire la classe `active` pour fermer le menu mobile.

19:             }
Explication: Fin du `if`.

20:         });
Explication: Fin de l'écouteur `click` placé sur le lien.

21:     });
Explication: Fin de l'itération `forEach` sur les liens de navigation.

22: });
Explication: Fin de l'écouteur `DOMContentLoaded`.

23: 
24: // Animation au scroll
Explication: Commentaire introduisant la logique d'animations déclenchées au défilement.

25: function initScrollAnimations() {
Explication: Déclaration de la fonction `initScrollAnimations` qui initialise un IntersectionObserver.

26:     const observerOptions = {
Explication: Options de configuration pour l'observateur d'intersection.

27:         threshold: 0.1,
Explication: Seuil d'intersection: l'élément est considéré visible si 10% est dans le viewport.

28:         rootMargin: '0px 0px -50px 0px'
Explication: Marge d'extension du viewport pour déclencher l'intersection plus tôt/plus tard.

29:     };
Explication: Fin de l'objet `observerOptions`.

30: 
31:     const observer = new IntersectionObserver((entries) => {
Explication: Crée un nouvel `IntersectionObserver` qui reçoit les entrées observées.

32:         entries.forEach(entry => {
Explication: Parcourt chaque entrée fournie par l'observer.

33:             if (entry.isIntersecting) {
Explication: Si l'élément entre dans la zone visible selon les options.

34:                 entry.target.classList.add('animate-in');
Explication: Ajoute la classe `animate-in` à l'élément ciblé pour déclencher CSS/animations.

35:             }
Explication: Fin du test `if`.

36:         });
Explication: Fin de l'itération `forEach` sur les entrées.

37:     }, observerOptions);
Explication: Fin de l'initialisation de l'observer en passant les options.

38: 
39:     // Observer les éléments avec la classe .animate-on-scroll
Explication: Commentaire expliquant que tous les éléments tagués `.animate-on-scroll` seront observés.

40:     document.querySelectorAll('.animate-on-scroll').forEach(el => {
Explication: Sélectionne chaque élément avec `.animate-on-scroll`.

41:         observer.observe(el);
Explication: Demande à l'observer d'observer cet élément.

42:     });
Explication: Fin du `forEach`.

43: }
Explication: Fin de la fonction `initScrollAnimations`.

44: 
45: // Effet de parallaxe subtil sur les éléments
Explication: Commentaire décrivant l'initialisation d'un effet parallaxe.

46: function initParallax() {
Explication: Déclaration de la fonction `initParallax`.

47:     const parallaxElements = document.querySelectorAll('.parallax');
Explication: Sélectionne tous les éléments ayant la classe `.parallax`.

48:     
49:     window.addEventListener('scroll', () => {
Explication: Attache un écouteur `scroll` global pour mettre à jour la position des éléments.

50:         const scrolled = window.pageYOffset;
Explication: Récupère la distance verticale déjà défilée (en pixels).

51:         
52:         parallaxElements.forEach(el => {
Explication: Parcourt chaque élément parallaxe pour lui appliquer une transformation.

53:             const speed = el.dataset.speed || 0.5;
Explication: Lit l'attribut `data-speed` de l'élément ou utilise `0.5` par défaut.

54:             el.style.transform = `translateY(${scrolled * speed}px)`;
Explication: Applique une translation verticale proportionnelle au défilement et à la vitesse.

55:         });
Explication: Fin du `forEach`.

56:     });
Explication: Fin de l'écouteur `scroll`.

57: }
Explication: Fin de la fonction `initParallax`.

58: 
59: // Animation du curseur personnalisé (optionnel)
Explication: Commentaire décrivant la fonction d'un curseur personnalisé, désactivée par défaut.

60: function initCustomCursor() {
Explication: Déclaration de la fonction `initCustomCursor`.

61:     // Désactivé par défaut pour ne pas interférer avec l'expérience utilisateur
Explication: Commentaire expliquant pourquoi le curseur est désactivé par défaut.

62:     // Peut être activé en ajoutant la classe .custom-cursor au body
Explication: Indication sur la manière d'activer la fonctionnalité.

63:     if (document.body.classList.contains('custom-cursor')) {
Explication: Vérifie si le `body` contient la classe `custom-cursor` pour activer le comportement.

64:         const cursor = document.createElement('div');
Explication: Crée dynamiquement un élément `div` qui servira de point de curseur.

65:         cursor.className = 'custom-cursor-dot';
Explication: Assigne une classe pour le styliser via CSS.

66:         cursor.style.cssText = `
Explication: Définit plusieurs propriétés CSS inline pour le curseur.

67:             position: fixed;
Explication: Position fixe pour suivre la fenêtre.

68:             width: 20px;
Explication: Largeur du point de curseur.

69:             height: 20px;
Explication: Hauteur du point de curseur.

70:             border: 2px solid rgba(255, 214, 231, 0.5);
Explication: Bordure avec couleur semi-transparente.

71:             border-radius: 50%;
Explication: Rend le div circulaire.

72:             pointer-events: none;
Explication: Évite que le curseur personnalisé capture les événements souris.

73:             z-index: 9999;
Explication: Place le curseur au-dessus de la plupart des éléments.

74:             transition: transform 0.1s ease;
Explication: Transition pour adoucir les transformations (clics, relâchement).

75:             mix-blend-mode: difference;
Explication: Mode de fusion pour un effet visuel contrasté sur différents fonds.

76:         `;
Explication: Fin de l'assignation `cssText`.

77:         document.body.appendChild(cursor);
Explication: Insère l'élément curseur dans le DOM.

78: 
79:         document.addEventListener('mousemove', (e) => {
Explication: Écoute l'événement `mousemove` pour positionner le curseur.

80:             cursor.style.left = e.clientX - 10 + 'px';
Explication: Positionne le curseur horizontalement (centre sur le pointeur en soustrayant la moitié de la largeur).

81:             cursor.style.top = e.clientY - 10 + 'px';
Explication: Positionne le curseur verticalement.

82:         });
Explication: Fin de l'écouteur `mousemove`.

83: 
84:         document.addEventListener('mousedown', () => {
Explication: Écoute `mousedown` pour animer le curseur pendant le clic.

85:             cursor.style.transform = 'scale(0.8)';
Explication: Réduit légèrement la taille du curseur lors du clic.

86:         });
Explication: Fin de l'écouteur `mousedown`.

87: 
88:         document.addEventListener('mouseup', () => {
Explication: Écoute `mouseup` pour restaurer le curseur après le clic.

89:             cursor.style.transform = 'scale(1)';
Explication: Remet la taille d'origine du curseur.

90:         });
Explication: Fin de l'écouteur `mouseup`.

91:     }
Explication: Fin du `if` qui active le curseur si la classe est présente.

92: }
Explication: Fin de la fonction `initCustomCursor`.

93: 
94: // Effet de vague sur les boutons
Explication: Commentaire annonçant la fonctionnalité qui suit (wave effect sur boutons).

95: function initButtonWave() {
Explication: Déclaration de la fonction `initButtonWave`.

96:     document.querySelectorAll('.btn').forEach(button => {
Explication: Sélectionne tous les éléments avec la classe `.btn` et parcourt chacun.

97:         button.addEventListener('mousemove', function(e) {
Explication: Ajoute un écouteur `mousemove` qui calcule la position de la souris sur le bouton.

98:             const rect = this.getBoundingClientRect();
Explication: Récupère la position et la taille du bouton par rapport à la fenêtre.

99:             const x = e.clientX - rect.left;
Explication: Calcule la coordonnée X relative au coin gauche du bouton.

100:             const y = e.clientY - rect.top;
Explication: Calcule la coordonnée Y relative au coin supérieur du bouton.

101:             
102:             this.style.setProperty('--mouse-x', `${x}px`);
Explication: Définit une variable CSS personnalisée `--mouse-x` utilisée par le style pour l'effet visuel.

103:             this.style.setProperty('--mouse-y', `${y}px`);
Explication: Définit la variable CSS `--mouse-y` pour la coordonnée Y.

104:         });
Explication: Fin de l'écouteur `mousemove` attaché au bouton.

105:     });
Explication: Fin de l'itération `forEach` sur les boutons.

106: }
Explication: Fin de la fonction `initButtonWave`.

107: 
108: // Animation de compteur
Explication: Commentaire introduisant la fonction générique d'animation de compteurs.

109: function animateCounter(element, target, duration = 2000) {
Explication: Déclare `animateCounter` qui anime un nombre depuis 0 jusqu'à `target` sur une durée donnée.

110:     const start = 0;
Explication: Valeur initiale de l'animation (0).

111:     const startTime = performance.now();
Explication: Enregistre le timestamp de départ pour calculer l'avancement.

112: 
113:     function update(currentTime) {
Explication: Fonction interne `update` appelée à chaque frame via `requestAnimationFrame`.

114:         const elapsed = currentTime - startTime;
Explication: Temps écoulé depuis le début de l'animation.

115:         const progress = Math.min(elapsed / duration, 1);
Explication: Progrès normalisé entre 0 et 1.

116:         const easeProgress = 1 - Math.pow(1 - progress, 3);
Explication: Application d'un easing cubique pour adoucir l'animation.

117:         const current = Math.floor(start + (target - start) * easeProgress);
Explication: Calcul de la valeur courante interpolée.

118:         
119:         element.textContent = current;
Explication: Met à jour le texte de l'élément DOM avec la valeur numérique courante.

120:         
121:         if (progress < 1) {
Explication: Si l'animation n'est pas terminée, on planifie la prochaine frame.

122:             requestAnimationFrame(update);
Explication: Appelle `update` à la prochaine frame.

123:         }
Explication: Fin du test `if`.

124:     }
Explication: Fin de la fonction `update`.

125: 
126:     requestAnimationFrame(update);
Explication: Lance la boucle d'animation.

127: }
Explication: Fin de la fonction `animateCounter`.

128: 
129: // Sauvegarde dans localStorage (utilisée par les pages)
Explication: Commentaire pour les utilitaires de persistance.

130: function saveToLocalStorage(key, data) {
Explication: Déclare une fonction utilitaire pour sauvegarder des données sérialisées.

131:     try {
Explication: Démarre un bloc `try` pour capturer les erreurs potentielles (par ex. quota dépassé).

132:         localStorage.setItem(key, JSON.stringify(data));
Explication: Sérialise `data` et l'enregistre sous la clé `key`.

133:         return true;
Explication: Retourne `true` si la sauvegarde a réussi.

134:     } catch (e) {
Explication: Capture les exceptions éventuelles.

135:         console.error('Erreur de sauvegarde:', e);
Explication: Log l'erreur dans la console pour le débogage.

136:         return false;
Explication: Retourne `false` pour indiquer l'échec.

137:     }
Explication: Fin du bloc `catch`.

138: }
Explication: Fin de la fonction `saveToLocalStorage`.

139: 
140: // Chargement depuis localStorage
Explication: Commentaire pour la fonction de chargement.

141: function loadFromLocalStorage(key, defaultValue = null) {
Explication: Déclare la fonction qui lit et parse des données depuis `localStorage`.

142:     try {
Explication: Bloc `try` pour attraper d'éventuelles erreurs de parsing.

143:         const data = localStorage.getItem(key);
Explication: Récupère la chaîne associée à `key`.

144:         return data ? JSON.parse(data) : defaultValue;
Explication: Si `data` existe, la parse en JSON sinon retourne la valeur par défaut.

145:     } catch (e) {
Explication: En cas d'erreur (JSON invalide...), on capture l'exception.

146:         console.error('Erreur de chargement:', e);
Explication: Log l'erreur pour aider au débogage.

147:         return defaultValue;
Explication: Retourne la `defaultValue` si le chargement échoue.

148:     }
Explication: Fin du bloc `catch`.

149: }
Explication: Fin de la fonction `loadFromLocalStorage`.

150: 
151: // Fonction utilitaire : debounce
Explication: Commentaire introduisant la fonction `debounce` pour limiter la fréquence d'appel d'une fonction.

152: function debounce(func, wait) {
Explication: Déclare `debounce` qui prend une `func` et un délai `wait` en ms.

153:     let timeout;
Explication: Variable de temporisation interne utilisée pour annuler/planifier l'appel.

154:     return function executedFunction(...args) {
Explication: Retourne une fonction qui encapsule la logique de debounce et rappelle `func` plus tard.

155:         const later = () => {
Explication: Fonction interne exécutée après le délai pour appeler `func`.

156:             clearTimeout(timeout);
Explication: Efface le timer pour éviter doublons.

157:             func(...args);
Explication: Appelle la fonction d'origine avec les arguments fournis.

158:         };
Explication: Fin de la fonction `later`.

159:         clearTimeout(timeout);
Explication: Réinitialise le timer à chaque appel pour repousser l'exécution.

160:         timeout = setTimeout(later, wait);
Explication: Planifie l'exécution de `later` après `wait` millisecondes.

161:     };
Explication: Fin de la fonction retournée par `debounce`.

162: }
Explication: Fin de la fonction `debounce`.

163: 
164: // Fonction utilitaire : throttle
Explication: Commentaire introduisant la fonction `throttle` pour limiter l'exécution à intervalles réguliers.

165: function throttle(func, limit) {
Explication: Déclare `throttle` qui prend une `func` et une limite `limit` en ms.

166:     let inThrottle;
Explication: Drapeau indiquant si la fonction est actuellement en pause/throttle.

167:     return function(...args) {
Explication: Retourne une fonction enveloppante qui applique la logique de throttle.

168:         if (!inThrottle) {
Explication: Si on n'est pas en période de throttle, on exécute `func`.

169:             func.apply(this, args);
Explication: Appelle `func` en conservant le contexte et les arguments.

170:             inThrottle = true;
Explication: Passe le drapeau pour empêcher d'autres exécutions immédiates.

171:             setTimeout(() => inThrottle = false, limit);
Explication: Après `limit` ms, réinitialise le drapeau pour autoriser de nouveau l'exécution.

172:         }
Explication: Fin du test `if`.

173:     };
Explication: Fin de la fonction retournée par `throttle`.

174: }
Explication: Fin de la fonction `throttle`.

175: 
176: // Détection de la préférence de mouvement réduit
Explication: Commentaire pour la fonction vérifiant si l'utilisateur préfère des animations réduites.

177: function prefersReducedMotion() {
Explication: Déclare la fonction `prefersReducedMotion`.

178:     return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
Explication: Retourne vrai si la préférence système indique de réduire les mouvements/animations.

179: }
Explication: Fin de la fonction `prefersReducedMotion`.

180: 
181: // Initialisation globale
Explication: Commentaire pour le bloc d'initialisation exécuté au chargement du DOM.

182: document.addEventListener('DOMContentLoaded', function() {
Explication: Attache un écouteur au chargement du DOM pour initialiser le comportement global.

183:     // Initialiser les animations si l'utilisateur n'a pas de préférence de mouvement réduit
Explication: Vérifie la préférence d'accessibilité avant d'initialiser les animations coûteuses.

184:     if (!prefersReducedMotion()) {
Explication: Si l'utilisateur accepte les animations...

185:         initScrollAnimations();
Explication: Initialise les animations déclenchées au scroll.

186:         initParallax();
Explication: Active l'effet parallaxe sur les éléments concernés.

187:         initButtonWave();
Explication: Initialise l'effet de vague sur les boutons.

188:     }
Explication: Fin du test `if`.

189:     
190:     // Initialiser le curseur personnalisé (désactivé par défaut)
Explication: Commentaire rappelant que le curseur personnalisé est optionnel.

191:     // initCustomCursor();
Explication: Appel commenté pour `initCustomCursor` (laissé désactivé intentionnellement).

192:     
193:     // Ajouter la classe loaded au body pour les animations d'entrée
Explication: Commentaire indiquant l'ajout d'une classe d'état `loaded`.

194:     document.body.classList.add('loaded');
Explication: Ajoute `loaded` au `body` pour déclencher des transitions CSS d'entrée.

195:     
196:     // Gestion du scroll de la navbar
Explication: Commentaire pour la logique masquant/ajoutant le fond de navbar selon le scroll.

197:     let lastScroll = 0;
Explication: Variable pour mémoriser la dernière position de scroll (potentiellement utilisée pour comportements additionnels).

198:     const navbar = document.querySelector('.navbar');
Explication: Récupère l'élément `navbar` pour lui appliquer des styles dynamiques.

199:     
200:     window.addEventListener('scroll', throttle(() => {
Explication: Ajoute un écouteur `scroll` avec `throttle` pour limiter la fréquence d'exécution.

201:         const currentScroll = window.pageYOffset;
Explication: Lit la position verticale actuelle du scroll.

202:         
203:         if (currentScroll > 100) {
Explication: Si l'utilisateur a scrollé de plus de 100px, on modifie l'apparence de la navbar.

204:             navbar.style.background = 'rgba(26, 11, 46, 0.95)';
Explication: Applique un fond plus opaque à la navbar.

205:             navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)';
Explication: Ajoute une ombre portée pour la séparer visuellement du contenu.

206:         } else {
Explication: Sinon, on remet la navbar dans son état par défaut.

207:             navbar.style.background = 'rgba(26, 11, 46, 0.8)';
Explication: Fond un peu plus transparent lorsque l'utilisateur est en haut de la page.

208:             navbar.style.boxShadow = 'none';
Explication: Supprime l'ombre portée.

209:         }
Explication: Fin du test `if`.

210:         
211:         lastScroll = currentScroll;
Explication: Met à jour la variable `lastScroll` avec la position actuelle (préparation pour éventuels usages futurs).

212:     }, 100));
Explication: Fin de l'écouteur `scroll` attaché via `throttle` (limite à 100 ms).

213: });
Explication: Fin de l'écouteur `DOMContentLoaded`.

214: 
215: // Gestion des erreurs globales
Explication: Commentaire pour l'enregistrement des erreurs non capturées.

216: window.addEventListener('error', function(e) {
Explication: Écoute des erreurs globales non interceptées.

217:     console.error('Erreur globale:', e.error);
Explication: Affiche un message d'erreur détaillé dans la console pour le débogage.

218: });
Explication: Fin de l'écouteur `error`.

219: 
220: // Gestion des rejets de promesses non traités
Explication: Commentaire pour attraper les promesses rejetées sans `catch`.

221: window.addEventListener('unhandledrejection', function(e) {
Explication: Écoute les événements de promesses non traitées.

222:     console.error('Promesse rejetée:', e.reason);
Explication: Log l'objet raison du rejet pour diagnostic.

223: });
Explication: Fin de l'écouteur `unhandledrejection`.

224: 
225: 
226: Notes et recommandations :
Explication: Section finale avec remarques pratiques pour l'auteur du code.

227: - Accessibilité: la fonction `prefersReducedMotion` est bien utilisée; envisager d'exposer une option utilisateur si nécessaire.
Explication: Suggère d'ajouter une option visible pour activer/désactiver les animations.

228: - Performance: les écouteurs `scroll` sont throttlés, ce qui est bonne pratique; surveiller l'impact si beaucoup d'éléments `.parallax` existent.
Explication: Recommande de mesurer performance si la page contient beaucoup d'éléments animés.

229: - Sécurité: éviter d'utiliser `innerHTML` sur des données non sûres; préférer `textContent` ou échapper les entrées utilisateur.
Explication: Rappel sur la prudence avec `innerHTML` pour prévenir XSS.

230: - Robustesse: ajouter des vérifications nulles (`if (navbar) ...`) avant de manipuler certains éléments pour éviter des erreurs sur pages sans navbar.
Explication: Recommande de protéger les accès DOM pour rendre le script réutilisable sur toutes les pages.
