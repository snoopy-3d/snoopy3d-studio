import { photos } from './gallery-data.js';

const photoURL = (p, thumb = false) => p.legacy ? `./${p.id}.webp` : `./photos/${p.id}${thumb ? '-thumb' : ''}.webp`;
const link = p => `#gallery/${p.id}`;
const caption = p => `${p.title} — фото ${p.number}`;

function photoCard(p, ribbon = false, duplicate = false) {
  return `<a class="${ribbon ? 'ribbon-card' : 'gallery-card'}" href="${link(p)}" ${duplicate ? 'tabindex="-1"' : ''} ${ribbon ? '' : `id="photo-${p.id}"`} aria-label="Открыть: ${caption(p)}"><div class="gallery-photo"><img src="${photoURL(p, true)}" alt="${caption(p)}" loading="lazy" decoding="async" width="560" height="560"><span class="photo-open" aria-hidden="true">Смотреть ↗</span></div><div class="gallery-caption"><span>${p.title}</span><small>${String(p.number).padStart(2, '0')} / SNOOPY3D</small></div></a>`;
}

export function filmstrip() {
  const uploaded = photos.filter(p => !p.legacy);
  // Interleave series so adjacent cards show a variety of objects.
  const ordered = [];
  for (let column = 0; column < 8; column++)
    for (let row = column; row < uploaded.length; row += 8) ordered.push(uploaded[row]);
  return `<section class="home-section photo-showcase" id="home-works" aria-labelledby="works-title"><div class="section-head"><div><span class="home-kicker">ИЗ МОЕЙ МАСТЕРСКОЙ</span><h2 id="works-title">От идеи — к готовой вещи</h2><p class="muted">${uploaded.length} фотографий реальных работ. Нажмите на снимок, чтобы рассмотреть детали.</p></div><a class="quiet-link" href="#gallery">Вся галерея ↗</a></div><div class="ribbon-toolbar"><span class="small">Светильники, декор и полезные вещи</span><button class="secondary" id="ribbon-toggle" aria-pressed="false">Остановить ленту</button></div><div class="photo-ribbon" role="region" aria-label="Фотолента готовых изделий"><div class="ribbon-track" style="--ribbon-duration:${uploaded.length * 13}s"><div class="ribbon-group">${ordered.map(p => photoCard(p, true)).join('')}</div><div class="ribbon-group" aria-hidden="true">${ordered.map(p => photoCard(p, true, true)).join('')}</div></div></div></section>`;
}

export function galleryPage() {
  return `<section class="gallery-intro"><span class="home-kicker">SNOOPY3D / ГОТОВЫЕ ИЗДЕЛИЯ</span><h2>Вещи, которые обрели форму</h2><p class="muted">${photos.filter(p => !p.legacy).length} новых фотографий и работы из прежней коллекции. Откройте снимок — остальные можно листать стрелками.</p><a class="quiet-link" href="#home/works">← Вернуться к фотоленте</a></section><div class="gallery-grid">${photos.map(p => photoCard(p)).join('')}</div><dialog class="photo-dialog" aria-labelledby="photo-title"><div class="photo-dialog-head"><h2 id="photo-title"></h2><button class="secondary" id="photo-close" aria-label="Закрыть фотографию">✕</button></div><div class="photo-view"><img id="photo-full" alt=""></div><div class="photo-dialog-foot"><button class="secondary" id="photo-prev" aria-label="Предыдущая фотография">←</button><span id="photo-count" role="status" aria-live="polite"></span><button class="secondary" id="photo-next" aria-label="Следующая фотография">→</button></div></dialog>`;
}

let cleanup = () => {};
export function disposeGallery() { cleanup(); cleanup = () => {}; }

export function mountGallery() {
  const ribbon = document.querySelector('.photo-ribbon');
  const toggle = document.querySelector('#ribbon-toggle');
  if (ribbon && toggle) {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    let paused = reduced.matches;
    const update = () => {
      ribbon.classList.toggle('is-paused', paused);
      toggle.setAttribute('aria-pressed', String(paused));
      toggle.disabled = reduced.matches;
      toggle.textContent = reduced.matches ? 'Анимация отключена' : paused ? 'Запустить ленту' : 'Остановить ленту';
    };
    toggle.onclick = () => { paused = !paused; update(); };
    const onPreference = () => { paused = reduced.matches; update(); };
    reduced.addEventListener('change', onPreference);
    update();
    cleanup = () => reduced.removeEventListener('change', onPreference);
  }
  const dialog = document.querySelector('.photo-dialog');
  if (!dialog) return;
  const id = location.hash.split('/')[1];
  let index = photos.findIndex(p => p.id === id);
  if (index < 0) return;
  const selected = document.getElementById(`photo-${id}`);
  selected?.scrollIntoView({ block: 'center', behavior: 'instant' });
  selected?.focus({ preventScroll: true });
  const show = () => {
    const p = photos[index], img = dialog.querySelector('#photo-full');
    img.src = photoURL(p); img.alt = caption(p);
    dialog.querySelector('#photo-title').textContent = p.title;
    dialog.querySelector('#photo-count').textContent = `${index + 1} / ${photos.length}`;
    history.replaceState(null, '', link(p));
  };
  const oldOverflow = document.body.style.overflow;
  const close = () => {
    const p = photos[index];
    history.replaceState(null, '', '#gallery');
    dialog.close();
    document.body.style.overflow = oldOverflow;
    const card = document.getElementById(`photo-${p.id}`);
    card?.scrollIntoView({ block: 'center', behavior: 'instant' });
    card?.focus({ preventScroll: true });
  };
  const step = offset => { index = (index + offset + photos.length) % photos.length; show(); };
  dialog.querySelector('#photo-close').onclick = close;
  dialog.querySelector('#photo-prev').onclick = () => step(-1);
  dialog.querySelector('#photo-next').onclick = () => step(1);
  dialog.oncancel = e => { e.preventDefault(); close(); };
  dialog.onkeydown = e => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { e.preventDefault(); step(e.key === 'ArrowLeft' ? -1 : 1); }
  };
  dialog.onclick = e => { if (e.target === dialog) { const r = dialog.getBoundingClientRect(); if(e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) close(); } };
  show(); dialog.showModal(); document.body.style.overflow = 'hidden';
  cleanup = () => { dialog.close(); document.body.style.overflow = oldOverflow; };
}
