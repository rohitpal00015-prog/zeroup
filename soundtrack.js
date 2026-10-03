/**
 * ZEROUP — Cinematic Art & Film Audio Engine
 * Pure Web Audio API synthesiser for ambient film score, page-turn SFX, & mechanical key clicks.
 * Includes floating audio control deck and headphones audio sync.
 */

class CinematicSoundtrack {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.masterGain = null;
    this.nodes = [];
    this.uiButtons = [];
    this.floatingPlayer = null;
    this.isMinimized = false;
  }

  initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggle() {
    this.initContext();
    if (this.isPlaying) {
      this.stop();
    } else {
      this.play();
    }
  }

  play() {
    if (this.isPlaying) return;
    this.isPlaying = true;
    const now = this.ctx.currentTime;

    // Fade in master gain smoothly
    this.masterGain.gain.cancelScheduledValues(now);
    this.masterGain.gain.setValueAtTime(0.001, now);
    this.masterGain.gain.exponentialRampToValueAtTime(0.28, now + 2.5);

    // 1. Deep Cinematic Sub Drone (D1 / D2 Warm Bass)
    const subOsc = this.ctx.createOscillator();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(73.42, now); // D2

    const subFilter = this.ctx.createBiquadFilter();
    subFilter.type = 'lowpass';
    subFilter.frequency.setValueAtTime(140, now);

    const subGain = this.ctx.createGain();
    subGain.gain.setValueAtTime(0.5, now);

    subOsc.connect(subFilter);
    subFilter.connect(subGain);
    subGain.connect(this.masterGain);
    subOsc.start(now);
    this.nodes.push(subOsc);

    // 2. Harmonic Pad Layer (D Minor 9th chord: D3, A3, C4, E4, F4)
    const chordFreqs = [146.83, 220.00, 261.63, 329.63, 349.23];
    chordFreqs.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      osc.type = idx % 2 === 0 ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(freq, now);

      // Subtle detune for lush analog tape chorusing
      osc.detune.setValueAtTime((idx - 2) * 4.5, now);

      // LFO for breathing volume swell
      const lfo = this.ctx.createOscillator();
      lfo.frequency.setValueAtTime(0.12 + idx * 0.04, now);
      const lfoGain = this.ctx.createGain();
      lfoGain.gain.setValueAtTime(0.06, now);

      const oscGain = this.ctx.createGain();
      oscGain.gain.setValueAtTime(0.12, now);

      lfo.connect(lfoGain);
      lfoGain.connect(oscGain.gain);

      // Warm analog filter
      const padFilter = this.ctx.createBiquadFilter();
      padFilter.type = 'lowpass';
      padFilter.frequency.setValueAtTime(450 + idx * 120, now);
      padFilter.Q.setValueAtTime(1.5, now);

      osc.connect(padFilter);
      padFilter.connect(oscGain);
      oscGain.connect(this.masterGain);

      osc.start(now);
      lfo.start(now);
      this.nodes.push(osc, lfo);
    });

    // 3. Vintage Tape Vinyl Texture (Subtle warm analog crackle/hiss)
    const bufferSize = this.ctx.sampleRate * 2;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      const crackle = Math.random() > 0.997 ? (Math.random() - 0.5) * 3 : 0;
      output[i] = (white * 0.08) + crackle;
    }

    const noiseSource = this.ctx.createBufferSource();
    noiseSource.buffer = noiseBuffer;
    noiseSource.loop = true;

    const noiseFilter = this.ctx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.setValueAtTime(1200, now);
    noiseFilter.Q.setValueAtTime(0.8, now);

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.04, now);

    noiseSource.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(this.masterGain);

    noiseSource.start(now);
    this.nodes.push(noiseSource);

    this.showFloatingPlayer();
    this.updateUI(true);
  }

  stop() {
    if (!this.isPlaying) return;
    this.isPlaying = false;
    const now = this.ctx.currentTime;

    // Fade out gently
    this.masterGain.gain.cancelScheduledValues(now);
    this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
    this.masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

    setTimeout(() => {
      this.nodes.forEach(n => {
        try { n.stop(); } catch (e) {}
        try { n.disconnect(); } catch (e) {}
      });
      this.nodes = [];
    }, 1300);

    this.updateUI(false);
  }

  // Realistic Archival Page Turn SFX (Triggered when 3D book opens)
  playPageFlip() {
    try {
      this.initContext();
      const now = this.ctx.currentTime;
      
      const bufferSize = this.ctx.sampleRate * 0.35;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1800, now);
      filter.frequency.exponentialRampToValueAtTime(450, now + 0.3);
      filter.Q.setValueAtTime(2.2, now);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.18, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      noise.start(now);
    } catch (e) {
      // Silent fail if audio not initialized
    }
  }

  // Mechanical Keyboard Switch Click SFX
  playKeyClick() {
    try {
      this.initContext();
      const now = this.ctx.currentTime;

      // High crisp snap
      const osc = this.ctx.createOscillator();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(900, now);
      osc.frequency.exponentialRampToValueAtTime(120, now + 0.04);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.045);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.05);

      // Low mechanical body clack
      const clickBuf = this.ctx.createBuffer(1, this.ctx.sampleRate * 0.03, this.ctx.sampleRate);
      const data = clickBuf.getChannelData(0);
      for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;

      const noise = this.ctx.createBufferSource();
      noise.buffer = clickBuf;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(550, now);

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.15, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);

      noise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(this.ctx.destination);

      noise.start(now);
    } catch (e) {
      // Silent fail
    }
  }

  registerButton(btnElement) {
    if (!btnElement) return;
    this.uiButtons.push(btnElement);
    btnElement.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggle();
    });
  }

  showFloatingPlayer() {
    if (this.floatingPlayer) {
      this.floatingPlayer.classList.remove('hidden');
      return;
    }

    const player = document.createElement('div');
    player.id = 'zeroup-floating-player';
    player.className = 'fixed bottom-6 right-6 z-50 bg-[#0F1117]/95 border border-[#D4FF00]/40 rounded-2xl p-4 shadow-[0_0_35px_rgba(212,255,0,0.2)] backdrop-blur-xl flex items-center gap-4 text-xs font-mono transition-all transform duration-300';
    player.innerHTML = `
      <div class="flex items-center gap-3">
        <div class="w-2.5 h-2.5 rounded-full bg-[#D4FF00] animate-pulse shadow-[0_0_8px_#D4FF00]"></div>
        <div class="flex flex-col">
          <span class="text-white font-bold tracking-wider uppercase text-[11px]">ZEROUP · ANALOG TAPE SCORE</span>
          <span class="text-white/60 text-[10px]">D-Minor 9th Pads · 24 FPS Ambient</span>
        </div>
      </div>
      <div class="flex items-end gap-1 h-4 px-2">
        <span class="audio-bar w-[2px] h-1.5 bg-[#D4FF00]"></span>
        <span class="audio-bar w-[2px] h-3.5 bg-[#D4FF00]"></span>
        <span class="audio-bar w-[2px] h-2 bg-[#D4FF00]"></span>
        <span class="audio-bar w-[2px] h-4 bg-[#D4FF00]"></span>
        <span class="audio-bar w-[2px] h-2.5 bg-[#D4FF00]"></span>
      </div>
      <div class="flex items-center gap-2 pl-2 border-l border-white/10">
        <button id="floating-play-toggle" class="p-2 rounded-lg bg-[#D4FF00] text-[#08090C] font-bold hover:scale-105 transition-transform" title="Pause / Play">
          <span id="floating-btn-icon">⏸</span>
        </button>
        <button id="floating-player-close" class="p-2 text-white/60 hover:text-white transition-colors" title="Close Player">
          ✕
        </button>
      </div>
    `;

    document.body.appendChild(player);
    this.floatingPlayer = player;

    player.querySelector('#floating-play-toggle').addEventListener('click', () => this.toggle());
    player.querySelector('#floating-player-close').addEventListener('click', () => {
      this.stop();
      player.classList.add('hidden');
    });
  }

  updateUI(playing) {
    this.uiButtons.forEach(btn => {
      const label = btn.querySelector('[data-audio-label]');
      const waves = btn.querySelectorAll('.audio-bar');

      if (playing) {
        btn.classList.add('audio-active');
        btn.classList.remove('audio-inactive');
        if (label) label.textContent = 'CINEMATIC SCORE: ON';
        waves.forEach((bar, i) => {
          bar.style.animation = `audioWave 0.8s ease-in-out infinite alternate ${i * 0.15}s`;
        });
      } else {
        btn.classList.remove('audio-active');
        btn.classList.add('audio-inactive');
        if (label) label.textContent = 'SOUNDTRACK: PLAY';
        waves.forEach(bar => {
          bar.style.animation = 'none';
          bar.style.height = '4px';
        });
      }
    });

    // Update headphones wave visualizer in hero
    const hpWaves = document.querySelectorAll('.headphone-wave');
    hpWaves.forEach(w => {
      if (playing) {
        w.classList.add('animate-ping', 'opacity-80');
        w.classList.remove('opacity-0');
      } else {
        w.classList.remove('animate-ping', 'opacity-80');
        w.classList.add('opacity-0');
      }
    });

    // Update floating player icon
    if (this.floatingPlayer) {
      const icon = this.floatingPlayer.querySelector('#floating-btn-icon');
      if (icon) icon.textContent = playing ? '⏸' : '▶';
    }
  }
}

// Global Singleton
window.ZEROUP_AUDIO = new CinematicSoundtrack();

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-soundtrack-toggle]').forEach(btn => {
    window.ZEROUP_AUDIO.registerButton(btn);
  });
});
