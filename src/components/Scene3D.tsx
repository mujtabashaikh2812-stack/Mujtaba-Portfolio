import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Scene3D: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // 1. SCENE SETUP (Deep Cosmic Void)
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050508, 0.025);

    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 4, 22);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // 2. LIQUID GOLD WAVE SURFACE (Inspired by Kintsugi Gold & Cosmic Nebula reference)
    const waveWidth = 45;
    const waveDepth = 35;
    const cols = 75;
    const rows = 55;
    const particleCount = cols * rows;

    const waveGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    // Crimson & Deep Obsidian Color Palette
    const crimsonColor = new THREE.Color(0xe11d48); // Blood Crimson
    const scarletColor = new THREE.Color(0xef4444); // Bright Scarlet highlight
    const darkObsidian = new THREE.Color(0x1e1e24); // Atmospheric Dark Obsidian

    let idx = 0;
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = (i / cols - 0.5) * waveWidth;
        const z = (j / rows - 0.5) * waveDepth - 5;
        const y = 0;

        positions[idx * 3] = x;
        positions[idx * 3 + 1] = y;
        positions[idx * 3 + 2] = z;

        // Color gradient: Center crimson, outer edges dark obsidian
        const distFromCenter = Math.sqrt(x * x + z * z) / 25;
        const col = distFromCenter < 0.5 
          ? crimsonColor.clone().lerp(scarletColor, Math.random() * 0.4)
          : crimsonColor.clone().lerp(darkObsidian, Math.min(distFromCenter * 0.85, 1));

        colors[idx * 3] = col.r;
        colors[idx * 3 + 1] = col.g;
        colors[idx * 3 + 2] = col.b;

        idx++;
      }
    }

    waveGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    waveGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const waveMat = new THREE.PointsMaterial({
      size: 0.16,
      vertexColors: true,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
    });

    const waveMesh = new THREE.Points(waveGeo, waveMat);
    waveMesh.position.y = -3;
    scene.add(waveMesh);

    // 3. FLOATING GOLDEN COSMIC DUST (Subtle background bokeh)
    const dustCount = 200;
    const dustGeo = new THREE.BufferGeometry();
    const dustPos = new Float32Array(dustCount * 3);
    const dustColors = new Float32Array(dustCount * 3);

    for (let i = 0; i < dustCount; i++) {
      dustPos[i * 3] = (Math.random() - 0.5) * 35;
      dustPos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      dustPos[i * 3 + 2] = (Math.random() - 0.5) * 25;

      const dCol = Math.random() > 0.4 ? crimsonColor : scarletColor;
      dustColors[i * 3] = dCol.r;
      dustColors[i * 3 + 1] = dCol.g;
      dustColors[i * 3 + 2] = dCol.b;
    }

    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
    dustGeo.setAttribute('color', new THREE.BufferAttribute(dustColors, 3));

    const dustMat = new THREE.PointsMaterial({
      size: 0.22,
      vertexColors: true,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
    });

    const dustMesh = new THREE.Points(dustGeo, dustMat);
    scene.add(dustMesh);

    // 4. MOUSE & SCROLL TRACKING
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let scrollY = window.scrollY;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.0006;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.0006;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // 5. RENDER LOOP (Fluid Wave Physics & Kinetic Motion)
    const clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Smooth mouse lerping
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Update liquid wave surface
      const posAttr = waveGeo.attributes.position as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;

      let pIdx = 0;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const u = i / cols;
          const v = j / rows;

          // Undulating fluid sine equation
          const waveHeight =
            Math.sin(u * 6 + time * 1.2) * 1.2 +
            Math.cos(v * 5 + time * 0.9) * 0.9 +
            Math.sin((u + v) * 8 + time * 1.5) * 0.5;

          posArray[pIdx * 3 + 1] = waveHeight;
          pIdx++;
        }
      }
      posAttr.needsUpdate = true;

      // Rotate and drift dust particles
      dustMesh.rotation.y = time * 0.03;
      dustMesh.rotation.x = Math.sin(time * 0.02) * 0.1;

      // Camera parallax and smooth scroll choreography
      const scrollFactor = scrollY * 0.003;
      camera.position.x = targetX * 12;
      camera.position.y = 4 - scrollFactor * 3.2 + targetY * 6;
      camera.position.z = 22 - Math.sin(scrollFactor * 0.5) * 4;
      camera.lookAt(0, -scrollFactor * 2.8, -4);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      waveGeo.dispose();
      waveMat.dispose();
      dustGeo.dispose();
      dustMat.dispose();
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-screen h-screen pointer-events-none z-0 opacity-80"
    />
  );
};
