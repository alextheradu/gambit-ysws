'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function RollingDice() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(120, 120);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);
    const pointLight = new THREE.PointLight(0xc8a96e, 0.4, 10);
    pointLight.position.set(-3, 5, 3);
    scene.add(pointLight);

    camera.position.z = 6;

    function addFaceDots(group: THREE.Group, positions: { x: number; y: number; z: number }[], size: number) {
      const dotGeo = new THREE.SphereGeometry(size, 24, 24);
      const dotMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, metalness: 0.2, roughness: 0.5 });
      positions.forEach(pos => {
        const dot = new THREE.Mesh(dotGeo, dotMat);
        dot.position.set(pos.x, pos.y, pos.z);
        group.add(dot);
      });
    }

    const diceGroup = new THREE.Group();
    diceGroup.add(new THREE.Mesh(
      new THREE.BoxGeometry(1.8, 1.8, 1.8),
      new THREE.MeshStandardMaterial({ color: 0xf5f5f5, metalness: 0.1, roughness: 0.4 })
    ));
    addFaceDots(diceGroup, [{ x: 0, y: 0, z: 0.91 }], 0.22);
    addFaceDots(diceGroup, [{ x: -0.5, y: 0.5, z: -0.91 }, { x: 0.5, y: -0.5, z: -0.91 }], 0.18);
    addFaceDots(diceGroup, [{ x: 0.91, y: 0.5, z: 0.5 }, { x: 0.91, y: 0, z: 0 }, { x: 0.91, y: -0.5, z: -0.5 }], 0.18);
    addFaceDots(diceGroup, [{ x: -0.91, y: 0.5, z: 0.5 }, { x: -0.91, y: 0.5, z: -0.5 }, { x: -0.91, y: -0.5, z: 0.5 }, { x: -0.91, y: -0.5, z: -0.5 }], 0.16);
    addFaceDots(diceGroup, [{ x: 0, y: 0.91, z: 0 }, { x: -0.5, y: 0.91, z: 0.5 }, { x: 0.5, y: 0.91, z: 0.5 }, { x: -0.5, y: 0.91, z: -0.5 }, { x: 0.5, y: 0.91, z: -0.5 }], 0.16);
    addFaceDots(diceGroup, [{ x: -0.5, y: -0.91, z: 0.6 }, { x: -0.5, y: -0.91, z: 0 }, { x: -0.5, y: -0.91, z: -0.6 }, { x: 0.5, y: -0.91, z: 0.6 }, { x: 0.5, y: -0.91, z: 0 }, { x: 0.5, y: -0.91, z: -0.6 }], 0.16);
    diceGroup.rotation.set(0.4, 0.6, 0);
    scene.add(diceGroup);

    let isRolling = false;
    let positionY = 0;
    let velocityY = 0;
    let rollStartTime = 0;
    let lastClickTime = 0;
    let targetRotation = { x: 0, y: 0, z: 0 };

    function onClick(e: MouseEvent | Touch) {
      const now = Date.now();
      if (now - lastClickTime < 300) return;
      lastClickTime = now;
      if (isRolling && now - rollStartTime > 3000) isRolling = false;
      if (isRolling) return;
      (e as MouseEvent).preventDefault?.();
      (e as MouseEvent).stopPropagation?.();
      isRolling = true;
      rollStartTime = now;
      velocityY = 0.35;
      const faces = [
        { x: 0, y: 0, z: 0 }, { x: 0, y: Math.PI, z: 0 },
        { x: 0, y: Math.PI / 2, z: 0 }, { x: 0, y: -Math.PI / 2, z: 0 },
        { x: -Math.PI / 2, y: 0, z: 0 }, { x: Math.PI / 2, y: 0, z: 0 },
      ];
      const base = faces[Math.floor(Math.random() * faces.length)];
      targetRotation = {
        x: base.x + (Math.floor(Math.random() * 3) + 2) * Math.PI * 2 * (Math.random() > 0.5 ? 1 : -1),
        y: base.y + (Math.floor(Math.random() * 3) + 2) * Math.PI * 2 * (Math.random() > 0.5 ? 1 : -1),
        z: base.z + (Math.floor(Math.random() * 2) + 1) * Math.PI * 2 * (Math.random() > 0.5 ? 1 : -1),
      };
    }

    const handleClick = (e: MouseEvent) => onClick(e);
    const handleTouch = (e: TouchEvent) => { e.preventDefault(); onClick(e.touches[0]); };
    canvas.addEventListener('click', handleClick);
    canvas.addEventListener('touchstart', handleTouch, { passive: false });

    let animId: number;
    function animate() {
      animId = requestAnimationFrame(animate);
      if (isRolling && Date.now() - rollStartTime > 4000) {
        isRolling = false; velocityY = 0; positionY = 0;
        diceGroup.position.y = 0;
        diceGroup.rotation.set(targetRotation.x, targetRotation.y, targetRotation.z);
      }
      if (isRolling) {
        positionY += velocityY;
        velocityY -= 0.015;
        if (positionY <= 0) {
          positionY = 0;
          velocityY = -velocityY * 0.4;
          if (Math.abs(velocityY) < 0.015) {
            isRolling = false; velocityY = 0;
            diceGroup.rotation.set(targetRotation.x, targetRotation.y, targetRotation.z);
          }
        }
        diceGroup.position.y = positionY;
        const dist = Math.abs(diceGroup.rotation.x - targetRotation.x) + Math.abs(diceGroup.rotation.y - targetRotation.y) + Math.abs(diceGroup.rotation.z - targetRotation.z);
        const lf = Math.max(0.03, Math.min(0.1, dist * 0.02));
        diceGroup.rotation.x += (targetRotation.x - diceGroup.rotation.x) * lf;
        diceGroup.rotation.y += (targetRotation.y - diceGroup.rotation.y) * lf;
        diceGroup.rotation.z += (targetRotation.z - diceGroup.rotation.z) * lf;
      } else {
        diceGroup.position.y = Math.sin(Date.now() * 0.002) * 0.03;
      }
      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener('click', handleClick);
      canvas.removeEventListener('touchstart', handleTouch);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      className="absolute right-[8%] top-[15%] w-[160px] h-[200px] z-50"
      style={{ filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.4))', userSelect: 'none' }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ cursor: 'pointer', touchAction: 'none' }}
      />
    </div>
  );
}
