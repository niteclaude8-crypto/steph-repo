// Données des poèmes des auteurs
const poems = [
    {
        title: "Le Dormeur du Val",
        author: "Arthur Rimbaud",
        text: "C'est un trou de verdure où chante une rivière...<br>Accrochant follement aux herbes des haillons<br>D'argent ; où le soleil, de la montagne fière..."
    },
    {
        title: "L'Albatros",
        author: "Charles Baudelaire",
        text: "Souvent, pour s'amuser, les hommes d'équipage<br>Prennent des albatros, vastes oiseaux des mers,<br>Qui suivent, indolents compagnons de voyage..."
    },
    {
        title: "Demain, dès l'aube",
        author: "Victor Hugo",
        text: "Demain, dès l'aube, à l'heure où blanchit la campagne,<br>Je partirai. Vois-tu, je sais que tu m'attends.<br>J'irai par la forêt, j'irai par la montagne..."
    }
];

let currentPoemIndex = 0;
const poemsList = document.getElementById('saved-poems');
const bgMusic = document.getElementById('bg-music');

// Fonction pour afficher une section
function showSection(sectionName) {
    // Cacher toutes les sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });
    
    // Afficher la section demandée
    document.getElementById(sectionName).classList.remove('hidden');
    
    // Scroll en haut
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    if (sectionName === 'gallery') {
        loadSavedPoems();
    }
}

// Navigation poèmes
function nextPoem() {
    currentPoemIndex = (currentPoemIndex + 1) % poems.length;
    displayCurrentPoem();
}

function displayCurrentPoem() {
    const poem = poems[currentPoemIndex];
    document.getElementById('poem-title').textContent = poem.title;
    document.getElementById('poem-author').textContent = poem.author;
    document.getElementById('poem-text').innerHTML = poem.text;
}

// Création de poème
document.getElementById('poem-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const title = document.getElementById('poem-title-input').value;
    const content = document.getElementById('poem-content').value;
    
    const poem = {
        title: title,
        content: content,
        date: new Date().toLocaleDateString('fr-FR')
    };
    
    // Sauvegarder
    savePoem(poem);
    
    // Reset form
    this.reset();
    
    // Aller à la galerie
    showSection('gallery');
    
    // Animation de succès
    showSuccessMessage();
});

function previewPoem() {
    const title = document.getElementById('poem-title-input').value || 'Sans titre';
    const content = document.getElementById('poem-content').value;
    
    if (content.trim()) {
        // Animation de prévisualisation
        const preview = document.createElement('div');
        preview.className = 'poem-preview';
        preview.innerHTML = `<h3>${title}</h3><div>${content.replace(/\n/g, '<br>')}</div>`;
        document.body.appendChild(preview);
        
        setTimeout(() => {
            preview.remove();
        }, 3000);
    }
}

// Sauvegarde localStorage
function savePoem(poem) {
    let savedPoems = JSON.parse(localStorage.getItem('versEnLumierePoems')) || [];
    savedPoems.unshift(poem); // Ajouter en haut
    localStorage.setItem('versEnLumierePoems', JSON.stringify(savedPoems));
}

function loadSavedPoems() {
    const savedPoems = JSON.parse(localStorage.getItem('versEnLumierePoems')) || [];
    poemsList.innerHTML = '';
    
    if (savedPoems.length === 0) {
        poemsList.innerHTML = '<p style="text-align: center; opacity: 0.7;">Aucun poème sauvegardé. Crée ton premier poème !</p>';
        return;
    }
    
    savedPoems.forEach((poem, index) => {
        const card = document.createElement('div');
        card.className = 'poem-card';
        card.innerHTML = `
            <h3>${poem.title}</h3>
            <div class="poem-content">${poem.content.replace(/\n/g, '<br>')}</div>
            <small>${poem.date}</small>
            <button class="btn delete-btn" onclick="deletePoem(${index})">Supprimer</button>
        `;
        poemsList.appendChild(card);
    });
}

function deletePoem(index) {
    let savedPoems = JSON.parse(localStorage.getItem('versEnLumierePoems')) || [];
    savedPoems.splice(index, 1);
    localStorage.setItem('versEnLumierePoems', JSON.stringify(savedPoems));
    loadSavedPoems();
}

// Messages de succès
function showSuccessMessage() {
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed; top: 20px; right: 20px; background: rgba(255,107,157,0.9);
        color: white; padding: 1rem 2rem; border-radius: 50px; z-index: 1000;
        animation: slideIn 0.5s ease-out;
    `;
    message.textContent = 'Poème sauvegardé ! ✨';
    document.body.appendChild(message);
    
    setTimeout(() => message.remove(), 3000);
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    displayCurrentPoem();
});

// Animations CSS supplémentaires (à ajouter dans style.css)
/*
.poem-preview {
    position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
    background: rgba(255,255,255,0.1); backdrop-filter: blur(20px);
    padding: 3rem; border-radius: 20px; z-index: 1000;
    animation: zoomIn 0.5s ease-out;
}
*/