const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.site-header nav');

menuButton?.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

const galleryItems = [...document.querySelectorAll('.everyday-card, .print-card, .concrete-card, .terrace-card')];

if (galleryItems.length) {
  const lightbox = document.createElement('dialog');
  lightbox.className = 'lightbox';
  lightbox.setAttribute('aria-label', 'Forstørret billede');
  lightbox.innerHTML = `
    <button class="lightbox-button lightbox-close" type="button" aria-label="Luk">×</button>
    <button class="lightbox-button lightbox-prev" type="button" aria-label="Forrige billede">‹</button>
    <img class="lightbox-image" alt="">
    <button class="lightbox-button lightbox-next" type="button" aria-label="Næste billede">›</button>
    <p class="lightbox-caption"></p>`;
  document.body.append(lightbox);

  const image = lightbox.querySelector('.lightbox-image');
  const caption = lightbox.querySelector('.lightbox-caption');
  let currentIndex = 0;

  const showImage = (index) => {
    currentIndex = (index + galleryItems.length) % galleryItems.length;
    const item = galleryItems[currentIndex];
    const thumbnail = item.querySelector('img');
    image.src = thumbnail.src;
    image.alt = thumbnail.alt;
    caption.textContent = item.querySelector('figcaption')?.textContent || '';
  };

  galleryItems.forEach((item, index) => {
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');
    item.setAttribute('aria-label', `Forstør billede: ${item.querySelector('figcaption')?.textContent || index + 1}`);
    const open = () => { showImage(index); lightbox.showModal(); };
    item.addEventListener('click', open);
    item.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); open(); }
    });
  });

  lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
  lightbox.querySelector('.lightbox-prev').addEventListener('click', () => showImage(currentIndex - 1));
  lightbox.querySelector('.lightbox-next').addEventListener('click', () => showImage(currentIndex + 1));
  lightbox.addEventListener('click', (event) => { if (event.target === lightbox) lightbox.close(); });
  lightbox.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') showImage(currentIndex - 1);
    if (event.key === 'ArrowRight') showImage(currentIndex + 1);
  });
}
