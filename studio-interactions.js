/**
 * ZEROUP — Studio Interactive Experience Engine
 * Handles 3D Hero Parallax, Interactive Studio Objects,
 * Media Empire Simulator, Live Cyber CLI Terminal, Audio Deck HUD,
 * and Sticky Note Secret Memo.
 */

document.addEventListener('DOMContentLoaded', () => {
  const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

  // ==========================================
  // 1. HERO 3D DESK STAGE PARALLAX & MOUSE GLOW
  // ==========================================
  const deskStage = document.getElementById('hero-studio-stage');
  const parallaxLayers = document.querySelectorAll('[data-parallax-depth]');
  const heroMouseGlow = document.getElementById('hero-mouse-glow');

  if (deskStage && !isTouchDevice) {
    deskStage.addEventListener('mousemove', (e) => {
      const rect = deskStage.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      // Parallax objects
      parallaxLayers.forEach(layer => {
        const depth = parseFloat(layer.getAttribute('data-parallax-depth')) || 20;
        const moveX = x * depth;
        const moveY = y * depth;
        layer.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
      });

      // Perspective tilt on hero container
      const tiltX = -y * 6;
      const tiltY = x * 8;
      deskStage.style.transform = `perspective(1200px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;

      // Mouse torch light
      if (heroMouseGlow) {
        const px = e.clientX - rect.left;
        const py = e.clientY - rect.top;
        heroMouseGlow.style.opacity = '1';
        heroMouseGlow.style.left = `${px}px`;
        heroMouseGlow.style.top = `${py}px`;
      }
    });

    deskStage.addEventListener('mouseleave', () => {
      parallaxLayers.forEach(layer => {
        layer.style.transform = `translate3d(0, 0, 0)`;
      });
      deskStage.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg)`;
      if (heroMouseGlow) heroMouseGlow.style.opacity = '0';
    });
  }

  // ==========================================
  // 2. INTERACTIVE HERO OBJECT TRIGGERS
  // ==========================================

  // HEADPHONES TRIGGER -> Play Soundtrack + Sync Floating Audio Deck
  const headphoneObj = document.getElementById('hero-headphones-trigger');
  if (headphoneObj) {
    headphoneObj.addEventListener('click', () => {
      toggleAudio();
    });
  }

  // KEYBOARD TRIGGER -> Mechanical Click SFX + Scroll to System
  const keyboardObj = document.getElementById('hero-keyboard-trigger');
  if (keyboardObj) {
    keyboardObj.addEventListener('click', () => {
      if (window.ZEROUP_AUDIO) window.ZEROUP_AUDIO.playKeyClick();
      const target = document.getElementById('system-simulator') || document.getElementById('system') || document.getElementById('clients');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // CLIPBOARD SKETCHBOOK -> Opens Story Modal
  const clipboardObj = document.getElementById('hero-clipboard-trigger');
  if (clipboardObj) {
    clipboardObj.addEventListener('click', () => {
      openStudioBook(0);
    });
  }

  // STICKY NOTE TRIGGER -> Secret Studio Memo Modal
  const stickyObj = document.getElementById('hero-sticky-trigger');
  const stickyMemo = document.getElementById('sticky-memo-modal');
  const closeStickyMemo = document.getElementById('close-sticky-memo');

  if (stickyObj && stickyMemo) {
    stickyObj.addEventListener('click', () => {
      stickyMemo.classList.remove('hidden');
      if (window.ZEROUP_AUDIO) window.ZEROUP_AUDIO.playPageFlip();
    });
  }

  if (closeStickyMemo && stickyMemo) {
    closeStickyMemo.addEventListener('click', () => {
      stickyMemo.classList.add('hidden');
    });
    stickyMemo.addEventListener('click', (e) => {
      if (e.target === stickyMemo) stickyMemo.classList.add('hidden');
    });
  }

  // ==========================================
  // 3. FLOATING AUDIO VISUALIZER DECK HUD
  // ==========================================
  const floatingAudioDeck = document.getElementById('floating-audio-deck');
  const audioDeckStatus = document.getElementById('audio-deck-status');
  const eqBars = document.querySelectorAll('.eq-bar');

  function toggleAudio() {
    if (window.ZEROUP_AUDIO) {
      window.ZEROUP_AUDIO.toggle();
      const isPlaying = window.ZEROUP_AUDIO.isPlaying;
      updateAudioUI(isPlaying);
    }
  }

  function updateAudioUI(isPlaying) {
    if (audioDeckStatus) {
      audioDeckStatus.textContent = isPlaying ? 'CINEMATIC SYNTH · LIVE ♫' : 'AMBIENT SYNTH · OFF';
      audioDeckStatus.className = isPlaying ? 'text-accent font-bold animate-pulse' : 'text-textMuted font-medium';
    }
    if (floatingAudioDeck) {
      if (isPlaying) {
        floatingAudioDeck.classList.add('border-accent', 'shadow-[0_0_25px_rgba(212,255,0,0.3)]');
      } else {
        floatingAudioDeck.classList.remove('border-accent', 'shadow-[0_0_25px_rgba(212,255,0,0.3)]');
      }
    }
    eqBars.forEach((bar, idx) => {
      if (isPlaying) {
        bar.style.animation = `eqBounce ${0.4 + idx * 0.15}s ease-in-out infinite alternate`;
      } else {
        bar.style.animation = 'none';
        bar.style.height = `${(idx % 2 === 0 ? 6 : 10)}px`;
      }
    });
  }

  if (floatingAudioDeck) {
    floatingAudioDeck.addEventListener('click', () => {
      toggleAudio();
    });
  }

  // ==========================================
  // 4. LIVE CYBER STUDIO TERMINAL (CLI)
  // ==========================================
  const terminalToggle = document.getElementById('terminal-toggle-btn');
  const terminalModal = document.getElementById('terminal-modal');
  const terminalClose = document.getElementById('terminal-close-btn');
  const terminalInput = document.getElementById('terminal-cli-input');
  const terminalOutput = document.getElementById('terminal-output');

  function openTerminal() {
    if (!terminalModal) return;
    terminalModal.classList.remove('hidden');
    if (terminalInput) terminalInput.focus();
  }

  function closeTerminal() {
    if (!terminalModal) return;
    terminalModal.classList.add('hidden');
  }

  if (terminalToggle) {
    terminalToggle.addEventListener('click', openTerminal);
  }

  if (terminalClose) {
    terminalClose.addEventListener('click', closeTerminal);
  }

  // Keyboard shortcut '~' or '`' to open terminal
  window.addEventListener('keydown', (e) => {
    if (e.key === '`' || e.key === '~') {
      if (document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        e.preventDefault();
        if (terminalModal.classList.contains('hidden')) {
          openTerminal();
        } else {
          closeTerminal();
        }
      }
    } else if (e.key === 'Escape' && terminalModal && !terminalModal.classList.contains('hidden')) {
      closeTerminal();
    }
  });

  const commands = {
    help: () => `
<div class="text-accent font-bold">AVAILABLE COMMANDS:</div>
<div class="grid grid-cols-2 gap-2 text-xs text-textSecondary pt-1">
  <div><span class="text-white font-mono">system</span> : View the 5 ZEROUP production engines</div>
  <div><span class="text-white font-mono">empire</span> : Print the Media Empire Thesis</div>
  <div><span class="text-white font-mono">audio</span>  : Toggle ambient cinematic Web Audio</div>
  <div><span class="text-white font-mono">clients</span>: List active partner productions</div>
  <div><span class="text-white font-mono">hq</span>     : Display studio coordinates (Prayagraj)</div>
  <div><span class="text-white font-mono">clear</span>  : Clear terminal logs</div>
</div>`,
    system: () => `
<div class="text-accent font-bold">ZEROUP ARCHITECTURE · ONE SYSTEM. FIVE ENGINES:</div>
<div class="text-xs text-textSecondary font-mono space-y-1 pt-1">
  <div>01 STRATEGY    → Know what to say (Audience, thesis, pillars)</div>
  <div>02 CONTENT     → Turn ideas into media (Long-form, 4K, micro-assets)</div>
  <div>03 DISTRIBUTION→ Put content where attention lives (7 native surfaces)</div>
  <div>04 FOUNDER     → Turn founders into media brands (Authority & IP)</div>
  <div>05 MEDIA IP    → Compounding audience assets (Show franchises)</div>
</div>`,
    empire: () => `
<div class="text-accent font-bold text-sm">“WE BUILD YOUR MEDIA EMPIRE.”</div>
<div class="text-xs text-white/90 font-mono pt-1">
  IDEA → STRATEGY → CONTENT → DISTRIBUTION → AUDIENCE → MEDIA IP
</div>
<div class="text-xs text-textSecondary pt-1">
  Services fund the capabilities. Capabilities build compounding media equity.
</div>`,
    audio: () => {
      toggleAudio();
      return `<div class="text-accent">Web Audio toggled. Status: ${window.ZEROUP_AUDIO && window.ZEROUP_AUDIO.isPlaying ? 'LIVE ♫' : 'MUTED'}</div>`;
    },
    sound: () => {
      toggleAudio();
      return `<div class="text-accent">Web Audio toggled. Status: ${window.ZEROUP_AUDIO && window.ZEROUP_AUDIO.isPlaying ? 'LIVE ♫' : 'MUTED'}</div>`;
    },
    clients: () => `
<div class="text-accent font-bold">ACTIVE PRODUCTIONS:</div>
<div class="text-xs text-textSecondary font-mono space-y-1 pt-1">
  <div>✦ Prayagraj Rooms  : Flagship City Living Media IP</div>
  <div>✦ Vindhya Millets   : Agritech Founder Storytelling</div>
  <div>✦ PathSync Learning : EdTech High-Retention System</div>
</div>`,
    hq: () => `
<div class="text-accent font-bold">ZEROUP HEADQUARTERS:</div>
<div class="text-xs text-textSecondary font-mono pt-1">
  Civil Lines & Sangam Hub, Prayagraj, UP, India · 211001<br>
  GEO: 25.4358° N, 81.8463° E · DIRECT: HELLO@ZEROUP.STUDIO
</div>`,
    clear: () => {
      if (terminalOutput) terminalOutput.innerHTML = '';
      return '';
    }
  };

  function executeCommand(cmdStr) {
    const raw = cmdStr.trim().toLowerCase();
    if (!raw) return;

    // Log user command
    const userLine = document.createElement('div');
    userLine.className = 'flex items-center gap-2 text-white font-mono text-xs';
    userLine.innerHTML = `<span class="text-accent">zeroup@studio:~$</span> <span>${raw}</span>`;
    terminalOutput.appendChild(userLine);

    if (commands[raw]) {
      const resp = commands[raw]();
      if (resp) {
        const respLine = document.createElement('div');
        respLine.className = 'font-mono text-xs py-1';
        respLine.innerHTML = resp;
        terminalOutput.appendChild(respLine);
      }
    } else {
      const errLine = document.createElement('div');
      errLine.className = 'font-mono text-xs text-red-400';
      errLine.textContent = `Command not recognized: '${raw}'. Type 'help' for available commands.`;
      terminalOutput.appendChild(errLine);
    }

    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }

  if (terminalInput) {
    terminalInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        executeCommand(terminalInput.value);
        terminalInput.value = '';
      }
    });
  }

  // Quick command pills in terminal
  document.querySelectorAll('[data-terminal-cmd]').forEach(pill => {
    pill.addEventListener('click', () => {
      const cmd = pill.getAttribute('data-terminal-cmd');
      executeCommand(cmd);
    });
  });

  // ==========================================
  // 5. MEDIA EMPIRE SIMULATOR
  // ==========================================
  const formatButtons = document.querySelectorAll('.simulator-format-btn');
  const hoursSlider = document.getElementById('sim-hours-slider');
  const hoursDisplay = document.getElementById('sim-hours-display');
  
  // Output nodes
  const statMasters = document.getElementById('stat-masters');
  const statShorts = document.getElementById('stat-shorts');
  const statWritten = document.getElementById('stat-written');
  const statReach = document.getElementById('stat-reach');
  const statLeverage = document.getElementById('stat-leverage');

  let selectedFormat = 'founder'; // 'founder' | 'docu' | 'brand'
  let selectedHours = 2;

  const formatMultipliers = {
    founder: { mastersPerHr: 1.5, shortsPerHr: 6, writtenPerHr: 2.5, reachBase: 120000, leverage: '8.4x' },
    docu:    { mastersPerHr: 0.75, shortsPerHr: 8, writtenPerHr: 3, reachBase: 300000, leverage: '12.2x' },
    brand:   { mastersPerHr: 1.0, shortsPerHr: 7, writtenPerHr: 2, reachBase: 180000, leverage: '9.5x' }
  };

  function updateSimulator() {
    const config = formatMultipliers[selectedFormat];
    const masters = Math.max(1, Math.round(selectedHours * config.mastersPerHr));
    const shorts = Math.round(selectedHours * config.shortsPerHr);
    const written = Math.round(selectedHours * config.writtenPerHr);
    const reachMin = Math.round((selectedHours * config.reachBase) / 1000);
    const reachMax = Math.round(reachMin * 2.4);

    if (hoursDisplay) hoursDisplay.textContent = `${selectedHours} hrs / month`;
    if (statMasters) statMasters.textContent = `${masters}x Episodes`;
    if (statShorts) statShorts.textContent = `${shorts}x Reels & Shorts`;
    if (statWritten) statWritten.textContent = `${written}x Written Essays`;
    if (statReach) statReach.textContent = `${reachMin}K – ${reachMax}K`;
    if (statLeverage) statLeverage.textContent = config.leverage;
  }

  formatButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      formatButtons.forEach(b => {
        b.classList.remove('bg-accent', 'text-[#08090C]', 'font-bold');
        b.classList.add('bg-surface', 'text-textSecondary');
      });
      btn.classList.add('bg-accent', 'text-[#08090C]', 'font-bold');
      btn.classList.remove('bg-surface', 'text-textSecondary');

      selectedFormat = btn.getAttribute('data-format');
      updateSimulator();
    });
  });

  if (hoursSlider) {
    hoursSlider.addEventListener('input', (e) => {
      selectedHours = parseInt(e.target.value, 10);
      updateSimulator();
    });
    updateSimulator(); // Initial run
  }

  // ==========================================
  // 6. FULLSCREEN MULTI-PAGE STUDIO BOOK MODAL
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

  // ==========================================
  // 7. SHOWREEL MODAL
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
