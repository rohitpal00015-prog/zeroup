/**
 * ZEROUP 3D Radar Wireframe Globe Engine
 * Renders the high-tech cybernetic topology sphere seen in the hero constellation.
 * Runs smoothly on 60 FPS Canvas with zero external dependencies.
 */

(function () {
  const canvas = document.getElementById('radar-sphere');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Handle HiDPI displays
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const displayWidth = 220;
  const displayHeight = 220;
  canvas.width = displayWidth * dpr;
  canvas.height = displayHeight * dpr;
  ctx.scale(dpr, dpr);

  let angle = 0;
  let pulse = 0;

  function render() {
    ctx.clearRect(0, 0, displayWidth, displayHeight);

    const cx = displayWidth / 2;
    const cy = displayHeight / 2;
    const r = 54; // sphere radius

    // 1. Radiant Ambient Lime Glow (Atmosphere)
    const glowGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r * 1.5);
    glowGrad.addColorStop(0, 'rgba(212, 255, 0, 0.40)');
    glowGrad.addColorStop(0.25, 'rgba(212, 255, 0, 0.16)');
    glowGrad.addColorStop(0.65, 'rgba(212, 255, 0, 0.04)');
    glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = glowGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, r * 1.5, 0, Math.PI * 2);
    ctx.fill();

    // 2. Outer Tactical Radar Ring
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.22)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.stroke();

    // 3. Radar Dial Graduation Ticks (Every 30 degrees)
    for (let deg = 0; deg < 360; deg += 30) {
      const rad = (deg * Math.PI) / 180;
      const x1 = cx + Math.cos(rad) * (r - 3);
      const y1 = cy + Math.sin(rad) * (r - 3);
      const x2 = cx + Math.cos(rad) * (r + 3);
      const y2 = cy + Math.sin(rad) * (r + 3);

      ctx.strokeStyle = (deg % 90 === 0) ? '#D4FF00' : 'rgba(255, 255, 255, 0.35)';
      ctx.lineWidth = (deg % 90 === 0) ? 1.5 : 0.75;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }

    // 4. Fixed Latitude Parallels (Spherical horizontal rings)
    const latitudes = [-0.72, -0.4, 0, 0.4, 0.72];
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.14)';
    ctx.lineWidth = 0.8;
    latitudes.forEach((yRel) => {
      const yPos = cy + yRel * r;
      const rAtY = Math.sqrt(Math.max(0, r * r - (yRel * r) * (yRel * r)));
      ctx.beginPath();
      ctx.ellipse(cx, yPos, rAtY, rAtY * 0.24, 0, 0, Math.PI * 2);
      ctx.stroke();
    });

    // 5. Rotating 3D Longitude Meridians (Spinning Wireframe)
    const meridians = 8;
    for (let m = 0; m < meridians; m++) {
      const phi = angle + (m * Math.PI) / meridians;
      const cosVal = Math.cos(phi);
      const sinVal = Math.sin(phi);
      const xRadius = Math.abs(cosVal) * r;
      
      // Front meridians glow brighter, back meridians are dimmer
      const isFront = sinVal >= 0;
      const alpha = isFront ? 0.25 + (Math.abs(cosVal) * 0.22) : 0.08 + (Math.abs(cosVal) * 0.1);

      ctx.strokeStyle = isFront ? `rgba(212, 255, 0, ${alpha})` : `rgba(255, 255, 255, ${alpha})`;
      ctx.lineWidth = isFront ? 1 : 0.6;
      ctx.beginPath();
      ctx.ellipse(cx, cy, Math.max(0.5, xRadius), r, 0, 0, Math.PI * 2);
      ctx.stroke();
    }

    // 6. Tactical Crosshairs (HUD Grid)
    ctx.strokeStyle = 'rgba(212, 255, 0, 0.32)';
    ctx.lineWidth = 0.8;
    ctx.setLineDash([2, 4]);
    ctx.beginPath();
    ctx.moveTo(cx - r - 10, cy);
    ctx.lineTo(cx + r + 10, cy);
    ctx.moveTo(cx, cy - r - 10);
    ctx.lineTo(cx, cy + r + 10);
    ctx.stroke();
    ctx.setLineDash([]);

    // 7. Pulsing Central Radiant Core
    const pulseScale = 1 + Math.sin(pulse) * 0.25;
    const coreGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 18 * pulseScale);
    coreGrad.addColorStop(0, '#FFFFFF');
    coreGrad.addColorStop(0.35, '#D4FF00');
    coreGrad.addColorStop(0.7, 'rgba(212, 255, 0, 0.3)');
    coreGrad.addColorStop(1, 'rgba(212, 255, 0, 0)');

    ctx.fillStyle = coreGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, 18 * pulseScale, 0, Math.PI * 2);
    ctx.fill();

    // 8. Sharp Core Pinpoint Center
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.arc(cx, cy, 2.5, 0, Math.PI * 2);
    ctx.fill();

    // 9. Floating Orbital Micro-Particles
    for (let p = 0; p < 4; p++) {
      const pAngle = angle * 1.5 + (p * Math.PI / 2);
      const px = cx + Math.cos(pAngle) * (r * 0.85);
      const py = cy + Math.sin(pAngle * 0.5) * (r * 0.35);
      ctx.fillStyle = '#D4FF00';
      ctx.beginPath();
      ctx.arc(px, py, 1.2, 0, Math.PI * 2);
      ctx.fill();
    }

    angle += 0.005; // calm, elegant orbital spin (reduced from 0.011)
    pulse += 0.020; // gentle slow heartbeat glow (reduced from 0.045)

    requestAnimationFrame(render);
  }

  render();
})();
