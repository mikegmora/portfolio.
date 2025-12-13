
const btn = document.getElementById('menuToggle');
const nav = document.getElementById('mainNav');

btn?.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    nav.setAttribute('aria-hidden', String(expanded));
    nav.classList.toggle('open');
    btn.classList.toggle('open');
});

document.addEventListener('click', (e) => {
    const isMenuOpen = btn.getAttribute('aria-expanded') === 'true';
    const clickedNav = nav.contains(e.target);
    const clickedBtn = btn.contains(e.target);

    if (isMenuOpen && !clickedNav && !clickedBtn) {
        btn.click();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const el = document.getElementById('h1');
    if (!el) return;
    const text = el.textContent;
    el.textContent = '';
    let i = 0;

    function type() {
        if (i < text.length) {
            el.textContent += text.charAt(i);
            i++;
            setTimeout(type, 60); // speed in ms
        }
    }
    type();
});

