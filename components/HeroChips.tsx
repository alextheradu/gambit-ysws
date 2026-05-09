'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroChips() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);

    camera.position.z = 15;

    const chipCount = 20;
    const fallSpeed = 0.08;

    function createChip() {
      const group = new THREE.Group();
      const geometry = new THREE.CylinderGeometry(0.85, 0.85, 0.1, 48);
      const material = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, metalness: 0.9, roughness: 0.3 });
      group.add(new THREE.Mesh(geometry, material));

      for (let r = 0.82; r > 0.7; r -= 0.03) {
        const isWhite = Math.floor((0.82 - r) / 0.03) % 2 === 0;
        const stripe = new THREE.Mesh(
          new THREE.CylinderGeometry(r, r, 0.11, 48),
          new THREE.MeshStandardMaterial({ color: isWhite ? 0xffffff : 0x1a1a1a, metalness: 0.95, roughness: 0.15 })
        );
        group.add(stripe);
      }

      for (let i = 0; i < 16; i++) {
        const angle = (i / 16) * Math.PI * 2;
        const dash = new THREE.Mesh(
          new THREE.BoxGeometry(0.06, 0.02, 0.02),
          new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.95, roughness: 0.1 })
        );
        dash.position.set(Math.cos(angle) * 0.76, 0.06, Math.sin(angle) * 0.76);
        dash.rotation.y = angle;
        group.add(dash);
      }

      group.add(new THREE.Mesh(
        new THREE.CylinderGeometry(0.68, 0.68, 0.12, 48),
        new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.92, roughness: 0.12 })
      ));
      group.add(new THREE.Mesh(
        new THREE.CylinderGeometry(0.6, 0.6, 0.13, 48),
        new THREE.MeshStandardMaterial({ color: 0x1a1a1a, metalness: 0.9, roughness: 0.25 })
      ));

      for (let i = 0; i < 4; i++) {
        const angle = (i / 4) * Math.PI * 2;
        const cross = new THREE.Mesh(
          new THREE.BoxGeometry(0.04, 0.14, 0.35),
          new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.95, roughness: 0.1 })
        );
        cross.position.set(Math.cos(angle) * 0.15, 0.07, Math.sin(angle) * 0.15);
        cross.rotation.y = angle;
        group.add(cross);
      }

      const centerDot = new THREE.Mesh(
        new THREE.CylinderGeometry(0.15, 0.15, 0.15, 32),
        new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.98, roughness: 0.05 })
      );
      centerDot.position.y = 0.075;
      group.add(centerDot);

      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const dot = new THREE.Mesh(
          new THREE.CylinderGeometry(0.04, 0.04, 0.14, 16),
          new THREE.MeshStandardMaterial({ color: i % 2 === 0 ? 0xffffff : 0x1a1a1a, metalness: 0.9, roughness: 0.15 })
        );
        dot.position.set(Math.cos(angle) * 0.45, 0.07, Math.sin(angle) * 0.45);
        group.add(dot);
      }

      group.position.set((Math.random() - 0.5) * 25, 12 + Math.random() * 15, (Math.random() - 0.5) * 10 - 5);
      group.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);

      return {
        mesh: group,
        rotationSpeed: { x: (Math.random() - 0.5) * 0.03, y: (Math.random() - 0.5) * 0.03, z: (Math.random() - 0.5) * 0.02 },
        chipFallSpeed: fallSpeed + Math.random() * 0.05,
        wobbleSpeed: Math.random() * 0.002,
        wobbleOffset: Math.random() * Math.PI * 2,
      };
    }

    const chips = Array.from({ length: chipCount }, () => {
      const chip = createChip();
      scene.add(chip.mesh);
      return chip;
    });

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    let animId: number;
    function animate() {
      animId = requestAnimationFrame(animate);
      const time = Date.now();
      chips.forEach((chip) => {
        chip.mesh.position.y -= chip.chipFallSpeed;
        chip.mesh.position.x += Math.sin(time * chip.wobbleSpeed + chip.wobbleOffset) * 0.02;
        chip.mesh.rotation.x += chip.rotationSpeed.x;
        chip.mesh.rotation.y += chip.rotationSpeed.y;
        chip.mesh.rotation.z += chip.rotationSpeed.z;
        if (chip.mesh.position.y < -12) {
          chip.mesh.position.y = 12 + Math.random() * 5;
          chip.mesh.position.x = (Math.random() - 0.5) * 25;
          chip.mesh.position.z = (Math.random() - 0.5) * 10 - 5;
        }
      });
      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
}
