const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;

function drawStar(x, y, size, rotation, alpha) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.globalAlpha = alpha;

    ctx.beginPath();
    for (let i = 0; i < 8; i++) {
        const angle = (i * Math.PI) / 4;
        const r = i % 2 === 0 ? size : size * 0.12;
        if (i === 0) ctx.moveTo(Math.cos(angle) * r, Math.sin(angle) * r);
        else ctx.lineTo(Math.cos(angle) * r, Math.sin(angle) * r);
    }
    ctx.closePath();
    ctx.fillStyle = 'white';
    ctx.fill();

    ctx.restore();
}

const stars = [];
for (let i = 0; i < 20; i++) {
    stars.push({
        x:        Math.random() * canvas.width,
        y:        Math.random() * canvas.height,
        size:     Math.random() * 15 + 5,
        speed:    Math.random() * 1.5 + 0.3,
        phase:    Math.random() * Math.PI * 2,
        rotation: Math.random() * Math.PI,
        rotSpeed: (Math.random() - 0.5) * 0.01
    });
}

let mouseStars = [];

window.addEventListener('mousemove', e => {
    if (Math.random() < 0.2) {
        mouseStars.push({
            x:        e.clientX,
            y:        e.clientY,
            size:     Math.random() * 5 + 2,
            alpha:    1,
            t:        0,
            rotation: Math.random() * Math.PI
        });
    }
});

window.addEventListener('resize', () => {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
});

let t = 0;

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {
        const scale = 0.7 + 0.3 * Math.sin(t * star.speed + star.phase);
        star.rotation += star.rotSpeed;
        drawStar(star.x, star.y, star.size * scale, star.rotation, 1);
    });

    mouseStars = mouseStars.filter(ms => ms.alpha > 0.02);
    mouseStars.forEach(ms => {
        ms.t        += 0.05;
        ms.alpha    *= 0.92;
        ms.size     *= 1.03;
        ms.rotation += 0.05;
        drawStar(ms.x, ms.y, ms.size, ms.rotation, ms.alpha);
    });

    t += 0.016;
}

animate();

// ── DONNÉES DES PROJETS ──────────────
const projets = {
    groupie: {
        titre:  'Groupie Trackers',
        tech:   'Golang · JavaScript · HTML/CSS · Figma · Postman',
        desc:   'Site web qui consomme une API pour afficher des informations sur des cartes pokémon.',
        github: 'https://github.com/LilianLPV/Groupie-Trackers',
        screens: ['/static/images/maquette-groupie.png', '/static/images/accueil-groupie.png', '/static/images/recherche-groupie.png']
    },
    portfolio: {
        titre:  'Portfolio',
        tech:   'Golang · HTML/CSS · JavaScript',
        desc:   'Portfolio personnel développé avec Go pour le backend et une animation canvas en JavaScript.',
        github: 'https://github.com/LilianLPV/Portfolio-2025',
        screens: ['/static/images/maquette-portfolio.png', '/static/images/accueil-portfolio.png']
    },
    php: {
        titre:  'Projet PHP',
        tech:   'PHP · CSS · JavaScript',
        desc:   'Site web développé en PHP avec une gestion dynamique du contenu.',
        github: 'https://github.com/LilianLPV/Projet-PHP-B2',
        screens: ['/static/images/maquette-php.png', '/static/images/accueil-php.png', '/static/images/affiche-film-php.png', '/static/images/information-film-php.png', '/static/images/reservation-siege-php.png']
    }
};

function ouvrirModale(id) {


 
    const projet  = projets[id];
    const modale  = document.getElementById('modale');

    document.getElementById('modale-titre').textContent = projet.titre;
    document.getElementById('modale-tech').textContent  = projet.tech;
    document.getElementById('modale-desc').textContent  = projet.desc;
    document.getElementById('modale-github').href       = projet.github;

    const screensEl = document.getElementById('modale-screens');
    if (projet.screens.length > 0) {
        screensEl.innerHTML = projet.screens
            .map(src => `<img src="${src}" alt="${projet.titre}">`)
            .join('');
    } else {
        screensEl.innerHTML = `
            <div class="screen-placeholder">Screenshot bientôt disponible</div>
            <div class="screen-placeholder">Screenshot bientôt disponible</div>
        `;
    }

    modale.classList.add('active');
    document.body.classList.add('modale-open');

}

function fermerModale() {
    document.getElementById('modale').classList.remove('active');
    document.body.classList.remove('modale-open');
}

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') fermerModale();
});

