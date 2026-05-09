'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function DraggableChip() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(200, 200);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    scene.add(new THREE.AmbientLight(0xffffff, 0.7));
    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);
    const pointLight = new THREE.PointLight(0xc8a96e, 0.5, 10);
    pointLight.position.set(0, 2, 3);
    scene.add(pointLight);

    camera.position.z = 4;

    const chip = new THREE.Group();
    chip.add(new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 0.1, 48), new THREE.MeshStandardMaterial({ color: 0x1a1a1a, metalness: 0.9, roughness: 0.3 })));
    chip.add(new THREE.Mesh(new THREE.CylinderGeometry(0.96, 0.96, 0.105, 48), new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.95, roughness: 0.15 })));
    chip.add(new THREE.Mesh(new THREE.CylinderGeometry(0.88, 0.88, 0.11, 48), new THREE.MeshStandardMaterial({ color: 0x1a1a1a, metalness: 0.9, roughness: 0.2 })));
    chip.add(new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 0.115, 48), new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.92, roughness: 0.12 })));
    chip.add(new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 0.15, 48), new THREE.MeshStandardMaterial({ color: 0x1a1a1a, metalness: 0.9, roughness: 0.25 })));
    for (let i = 0; i < 4; i++) {
      const angle = (i / 4) * Math.PI * 2;
      const cross = new THREE.Mesh(
        new THREE.BoxGeometry(0.05, 0.16, 0.4),
        new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.95, roughness: 0.1 })
      );
      cross.position.set(Math.cos(angle) * 0.18, 0.08, Math.sin(angle) * 0.18);
      cross.rotation.y = angle;
      chip.add(cross);
    }
    const centerDot = new THREE.Mesh(
      new THREE.CylinderGeometry(0.18, 0.18, 0.18, 32),
      new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.98, roughness: 0.05 })
    );
    centerDot.position.y = 0.09;
    chip.add(centerDot);
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const dot = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 0.17, 16),
        new THREE.MeshStandardMaterial({ color: i % 2 === 0 ? 0xffffff : 0x1a1a1a, metalness: 0.9, roughness: 0.15 })
      );
      dot.position.set(Math.cos(angle) * 0.52, 0.085, Math.sin(angle) * 0.52);
      chip.add(dot);
    }
    chip.rotation.set(0.3, 0.5, 0);
    scene.add(chip);

    let isDragging = false;
    let prev = { x: 0, y: 0 };
    let vel = { x: 0, y: 0, z: 0 };

    function getClientXY(e: MouseEvent | TouchEvent) {
      if ('touches' in e) return { x: (e as TouchEvent).touches[0].clientX, y: (e as TouchEvent).touches[0].clientY };
      return { x: (e as MouseEvent).clientX, y: (e as MouseEvent).clientY };
    }

    const onDown = (e: MouseEvent | TouchEvent) => {
      e.preventDefault();
      isDragging = true;
      prev = getClientXY(e);
      vel = { x: 0, y: 0, z: 0 };
      canvas.style.cursor = 'grabbing';
    };
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const cur = getClientXY(e);
      const dx = cur.x - prev.x;
      const dy = cur.y - prev.y;
      vel = { y: dx * 0.01, x: dy * 0.01, z: dx * 0.005 };
      chip.rotation.y += vel.y;
      chip.rotation.x += vel.x;
      chip.rotation.z += vel.z;
      prev = cur;
    };
    const onUp = () => { isDragging = false; canvas.style.cursor = 'grab'; };

    canvas.addEventListener('mousedown', onDown as EventListener);
    canvas.addEventListener('mousemove', onMove as EventListener);
    canvas.addEventListener('mouseup', onUp);
    canvas.addEventListener('mouseleave', onUp);
    canvas.addEventListener('touchstart', onDown as EventListener, { passive: false });
    canvas.addEventListener('touchmove', onMove as EventListener, { passive: false });
    canvas.addEventListener('touchend', onUp);
    canvas.style.cursor = 'grab';

    const homeX = 0.3, homeY = 0.5, homeZ = 0;
    let animId: number;
    function animate() {
      animId = requestAnimationFrame(animate);
      if (isDragging) {
        chip.rotation.y += vel.y;
        chip.rotation.x += vel.x;
        chip.rotation.z += vel.z;
      } else {
        chip.rotation.y += vel.y;
        chip.rotation.x += vel.x;
        chip.rotation.z += vel.z;
        vel.x *= 0.96; vel.y *= 0.96; vel.z *= 0.96;
        const mag = Math.sqrt(vel.x ** 2 + vel.y ** 2 + vel.z ** 2);
        if (mag < 0.01) {
          chip.rotation.x += (homeX - chip.rotation.x) * 0.03;
          chip.rotation.y += (homeY - chip.rotation.y) * 0.03;
          chip.rotation.z += (homeZ - chip.rotation.z) * 0.03;
        }
      }
      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener('mousedown', onDown as EventListener);
      canvas.removeEventListener('mousemove', onMove as EventListener);
      canvas.removeEventListener('mouseup', onUp);
      canvas.removeEventListener('mouseleave', onUp);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      className="absolute right-[5%] top-[10%] w-[200px] h-[200px] z-50"
      style={{ filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.5))', userSelect: 'none' }}
    >
      <canvas ref={canvasRef} className="w-full h-full block" style={{ touchAction: 'none' }} />
    </div>
  );
}
