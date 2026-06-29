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

... (fichier complet copié) ...
