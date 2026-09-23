// Частицы
(function createParticles() {
  const container = document.getElementById('particles');
  const count = window.innerWidth < 600 ? 16 : 28;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('span');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = (9 + Math.random() * 10) + 's';
    p.style.animationDelay = (Math.random() * 12) + 's';
    const size = 2 + Math.random() * 3;
    p.style.width = size + 'px';
    p.style.height = size + 'px';
    container.appendChild(p);
  }
})();

const envelope = document.getElementById('envelope');
const modal = document.getElementById('modal');
let isOpening = false;

function openModal() {
  if (isOpening) return;
  isOpening = true;
  envelope.classList.add('opened');
  setTimeout(() => {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    isOpening = false;
  }, 550);
}

function closeModal() {
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  setTimeout(() => envelope.classList.remove('opened'), 500);
}

envelope.addEventListener('click', openModal);

modal.querySelectorAll('[data-close]').forEach(el => {
  el.addEventListener('click', closeModal);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
});

// Защита от двойного тапа
let lastTap = 0;
envelope.addEventListener('touchend', (e) => {
  const now = Date.now();
  if (now - lastTap < 300) e.preventDefault();
  lastTap = now;
}, { passive: false });