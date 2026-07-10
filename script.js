function switchLanguage(lang, isClick = false) {
    const esElements = document.querySelectorAll('.lang-es');
    const enElements = document.querySelectorAll('.lang-en');
    const btnEs = document.querySelector('button[onclick*="es"]');
    const btnEn = document.querySelector('button[onclick*="en"]');

    if (isClick) {
        const manifestos = document.querySelectorAll('.hero-manifesto');
        manifestos.forEach(el => {
            el.style.animationDelay = '0s';
            el.style.animationDuration = '0.2s';
        });
    }

    if (lang === 'es') {
        esElements.forEach(el => el.classList.remove('d-none'));
        enElements.forEach(el => el.classList.add('d-none'));
        if(btnEs) btnEs.classList.add('active');
        if(btnEn) btnEn.classList.remove('active');
    } else if (lang === 'en') {
        esElements.forEach(el => el.classList.add('d-none'));
        enElements.forEach(el => el.classList.remove('d-none'));
        if(btnEs) btnEs.classList.remove('active');
        if(btnEn) btnEn.classList.add('active');
    }
    localStorage.setItem('maison_privee_lang', lang);
}

// 1. TRANSICIÓN CINEMATOGRÁFICA + ACTIVACIÓN SENSORIAL DE MÚSICA
function enterTheMaison() {
    const heroScreen = document.getElementById('hero-screen');
    const agathaScreen = document.getElementById('agatha-screen');
    const maisonAudio = document.getElementById('maison-ambient-sound');

    // Intenta reproducir el sonido de fondo (se activa porque el usuario interactuó con el botón)
    if (maisonAudio) {
        maisonAudio.volume = 0.3; // Volumen suave al 30% para no asustar, elegancia pura
        maisonAudio.play().catch(error => {
            console.log("El navegador bloqueó el audio temporalmente:", error);
        });
    }

    heroScreen.classList.add('zoom-out-effect');

    setTimeout(() => {
        heroScreen.classList.add('d-none');
        agathaScreen.classList.remove('d-none-flex');
        agathaScreen.style.display = 'block'; 
    }, 1800);
}

function revealCatalog() {
    const agathaScreen = document.getElementById('agatha-screen');
    const atelierBrand = document.getElementById('atelier-brand');

    agathaScreen.classList.add('fade-out-luxury');

    setTimeout(() => {
        agathaScreen.style.display = 'none';
        atelierBrand.classList.remove('d-none');
        document.body.style.overflow = 'auto'; 
    }, 1200);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('maison_privee_lang');
    if (savedLang) {
        switchLanguage(savedLang, false);
    }
});