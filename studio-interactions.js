/**
 * ZEROUP — Studio Interactive Experience Engine
 * Handles Custom Cursor, Hero 3D Parallax, Interactive Studio Objects,
 * Fullscreen Multi-Page Studio Book, and Mechanical Keyboard Interactions.
 */

document.addEventListener('DOMContentLoaded', () => {


  // ==========================================
  // 2. HERO 3D DESK STAGE PARALLAX
  // ==========================================
  const deskStage = document.getElementById('hero-desk-stage');
  const parallaxLayers = document.querySelectorAll('[data-parallax-depth]');

  if (deskStage && !isTouchDevice) {
    deskStage.addEventListener('mousemove', (e) => {
      const rect = deskStage.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      parallaxLayers.forEach(layer => {
        const depth = parseFloat(layer.getAttribute('data-parallax-depth')) || 20;
        const moveX = x * depth;
        const moveY = y * depth;
        layer.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
      });

      // Subtle 3D tilt on the main workspace container
      const tiltX = -y * 8;
      const tiltY = x * 10;
      deskStage.style.transform = `perspective(1200px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    });

    deskStage.addEventListener('mouseleave', () => {
      parallaxLayers.forEach(layer => {
        layer.style.transform = `translate3d(0, 0, 0)`;
      });
      deskStage.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg)`;
    });
  }

  // ==========================================
  // 3. INTERACTIVE HERO OBJECT TRIGGERS
  // ==========================================

  // HEADPHONES TRIGGER -> Play Soundtrack
  const headphoneObj = document.getElementById('hero-headphones-trigger');
  if (headphoneObj) {
    headphoneObj.addEventListener('click', () => {
      if (window.ZEROUP_AUDIO) {
        window.ZEROUP_AUDIO.toggle();
      }
    });
  }

  // KEYBOARD TRIGGER -> Mechanical Click SFX + Smooth Scroll to The System / Work
  const keyboardObj = document.getElementById('hero-keyboard-trigger');
  if (keyboardObj) {
    keyboardObj.addEventListener('click', () => {
      if (window.ZEROUP_AUDIO) window.ZEROUP_AUDIO.playKeyClick();
      const target = document.getElementById('system') || document.getElementById('clients');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });

    // Keyboard Key Lighting Animation on hover
    keyboardObj.addEventListener('mouseenter', () => {
      const keys = keyboardObj.querySelectorAll('.kb-key');
      keys.forEach((k, idx) => {
        k.style.animation = `keyGlow 0.4s ease forwards ${idx * 0.04}s`;
      });
    });
  }

  // CLIPBOARD SKETCHBOOK -> Opens Story Modal or Scrolls to About
  const clipboardObj = document.getElementById('hero-clipboard-trigger');
  if (clipboardObj) {
    clipboardObj.addEventListener('click', () => {
      openStudioBook(0); // Opens to Page 1: Story
    });
  }

  // STUDIO BOOK IN HERO -> Opens Fullscreen Multi-page Book
  const studioBookObj = document.getElementById('hero-book-trigger');
  if (studioBookObj) {
    studioBookObj.addEventListener('click', () => {
      openStudioBook(0);
    });
  }

  // STICKY NOTE TRIGGER
  const stickyObj = document.getElementById('hero-sticky-trigger');
  if (stickyObj) {
    stickyObj.addEventListener('click', () => {
      const insight = document.getElementById('sticky-insight-card');
      if (insight) insight.classList.toggle('hidden');
    });
  }

  // ==========================================
  // 4. FULLSCREEN MULTI-PAGE STUDIO BOOK MODAL
  // ==========================================
  const bookModal = document.getElementById('studio-book-modal');
  const bookSpreads = document.querySelectorAll('.studio-spread');
  const prevSpreadBtn = document.getElementById('book-prev-spread');
  const nextSpreadBtn = document.getElementById('book-next-spread');
  const closeBookBtn = document.getElementById('close-studio-book');
  const spreadCounter = document.getElementById('book-spread-counter');
  let currentSpread = 0;
  const totalSpreads = bookSpreads.length;

  function showSpread(index) {
    if (index < 0 || index >= totalSpreads) return;
    currentSpread = index;

    bookSpreads.forEach((s, idx) => {
      if (idx === currentSpread) {
        s.classList.remove('hidden');
        s.style.opacity = '1';
        s.style.transform = 'scale(1)';
      } else {
        s.classList.add('hidden');
        s.style.opacity = '0';
        s.style.transform = 'scale(0.97)';
      }
    });

    if (spreadCounter) {
      spreadCounter.textContent = `SPREAD 0${currentSpread + 1} / 0${totalSpreads}`;
    }

    if (prevSpreadBtn) prevSpreadBtn.disabled = (currentSpread === 0);
    if (nextSpreadBtn) nextSpreadBtn.disabled = (currentSpread === totalSpreads - 1);

    if (window.ZEROUP_AUDIO) {
      window.ZEROUP_AUDIO.playPageFlip();
    }
  }

  function openStudioBook(startingSpread = 0) {
    if (!bookModal) return;
    bookModal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
    showSpread(startingSpread);
  }

  function closeStudioBook() {
    if (!bookModal) return;
    bookModal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }

  // Trigger from existing #dossier section button or anywhere
  document.querySelectorAll('[data-open-studio-book]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const spread = parseInt(btn.getAttribute('data-spread') || '0', 10);
      openStudioBook(spread);
    });
  });

  if (prevSpreadBtn) {
    prevSpreadBtn.addEventListener('click', () => {
      if (currentSpread > 0) showSpread(currentSpread - 1);
    });
  }

  if (nextSpreadBtn) {
    nextSpreadBtn.addEventListener('click', () => {
      if (currentSpread < totalSpreads - 1) showSpread(currentSpread + 1);
    });
  }

  if (closeBookBtn) {
    closeBookBtn.addEventListener('click', closeStudioBook);
  }

  if (bookModal) {
    bookModal.addEventListener('click', (e) => {
      if (e.target === bookModal) closeStudioBook();
    });
  }

  // Keyboard navigation for Studio Book
  window.addEventListener('keydown', (e) => {
    if (bookModal && !bookModal.classList.contains('hidden')) {
      if (e.key === 'Escape') closeStudioBook();
      if (e.key === 'ArrowRight' && currentSpread < totalSpreads - 1) showSpread(currentSpread + 1);
      if (e.key === 'ArrowLeft' && currentSpread > 0) showSpread(currentSpread - 1);
    }
  });

  // ==========================================
  // 5. SHOWREEL MODAL
  // ==========================================
  const showreelModal = document.getElementById('showreel-modal');
  const closeShowreelBtn = document.getElementById('close-showreel');
  document.querySelectorAll('[data-open-showreel]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (showreelModal) {
        showreelModal.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
      }
    });
  });

  if (closeShowreelBtn && showreelModal) {
    closeShowreelBtn.addEventListener('click', () => {
      showreelModal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    });
    showreelModal.addEventListener('click', (e) => {
      if (e.target === showreelModal) {
        showreelModal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      }
    });
  }

});
