/**
 * ZEROUP 3D Particle Wave Background Engine
 * Renders an organic, undulating 3D particle terrain using Three.js & WebGL.
 * Inspired by topological waveform visualization & high-end generative design.
 */

(function () {
  // Check if Three.js is available
  if (typeof THREE === 'undefined') {
    console.warn('Three.js is required for 3D Particle Wave background.');
    return;
  }

  // Ensure container exists
  let container = document.getElementById('wave-bg');
  if (!container) {
    container = document.createElement('div');
    container.id = 'wave-bg';
    container.className = 'fixed inset-0 pointer-events-none z-0 opacity-40 overflow-hidden';
    document.body.insertBefore(container, document.body.firstChild);
  }

  const SEPARATION = 38;
  const AMOUNTX = 70;
  const AMOUNTY = 70;

  let camera, scene, renderer;
  let particles, count = 0;
  let mouseX = 0, mouseY = -150;
  let windowHalfX = window.innerWidth / 2;
  let windowHalfY = window.innerHeight / 2;

  init();
  animate();

  function init() {
    camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 1100;
    camera.position.y = 520;

    scene = new THREE.Scene();

    const numParticles = AMOUNTX * AMOUNTY;
    const positions = new Float32Array(numParticles * 3);
    const scales = new Float32Array(numParticles);

    let i = 0, j = 0;
    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        positions[i] = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2); // x
        positions[i + 1] = 0; // y
        positions[i + 2] = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2); // z
        scales[j] = 1;
        i += 3;
        j++;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

    // High-resolution circular glowing dot texture
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.3, 'rgba(235, 255, 200, 0.9)');
    gradient.addColorStop(0.6, 'rgba(212, 255, 0, 0.35)'); // subtle neon lime ambient aura
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 32, 32);

    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 13,
      map: texture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    particles = new THREE.Points(geometry, material);
    scene.add(particles);

    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch (e) {
      console.warn('WebGL not supported for particle wave:', e);
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // 100% transparent canvas
    container.appendChild(renderer.domElement);

    document.addEventListener('mousemove', onDocumentMouseMove, { passive: true });
    window.addEventListener('resize', onWindowResize, { passive: true });
  }

  function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function onDocumentMouseMove(event) {
    mouseX = (event.clientX - windowHalfX) * 0.25;
    mouseY = (event.clientY - windowHalfY) * 0.25;
  }

  function animate() {
    requestAnimationFrame(animate);
    render();
  }

  function render() {
    // Smooth camera interpolation based on cursor
    camera.position.x += (mouseX - camera.position.x) * 0.018;
    camera.position.y += (-mouseY + 480 - camera.position.y) * 0.018;
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    const positions = particles.geometry.attributes.position.array;
    let i = 0;
    
    // Multi-harmonic compound wave equations (produces the undulating dunes & valleys from user video)
    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        const w1 = Math.sin((ix * 0.16) + (count * 0.8)) * 50;
        const w2 = Math.cos((iy * 0.20) + (count * 0.6)) * 50;
        const w3 = Math.sin((ix * 0.11 + iy * 0.14) + (count * 1.1)) * 38;
        positions[i + 1] = w1 + w2 + w3;
        i += 3;
      }
    }

    particles.geometry.attributes.position.needsUpdate = true;
    renderer.render(scene, camera);
    count += 0.010; // Calmed, slow, cinematic tempo (reduced from 0.035)
  }
})();
