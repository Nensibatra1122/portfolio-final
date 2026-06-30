import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const currentContainer = canvasRef.current;
    if (!currentContainer) return;

    // Core Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    currentContainer.appendChild(renderer.domElement);

    camera.position.z = 25;

    // Custom Glowing Node Texture (Cyan-Teal Soft Core)
    function createNodeTexture() {
      const canvas = document.createElement('canvas');
      canvas.width = 16;
      canvas.height = 16;
      const context = canvas.getContext('2d');
      const gradient = context.createRadialGradient(8, 8, 0, 8, 8, 8);
      
      gradient.addColorStop(0, 'rgba(34, 211, 238, 1)');   // Cyan Center
      gradient.addColorStop(0.3, 'rgba(14, 165, 233, 0.6)'); // Light Blue Border
      gradient.addColorStop(1, 'rgba(0,0,0,0)');
      
      context.fillStyle = gradient;
      context.fillRect(0, 0, canvas.width, canvas.height);
      return new THREE.CanvasTexture(canvas);
    }

    // Geometry Generation (Fewer particles but interconnected for a unique look)
    const particleCount = 120;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = [];

    for (let i = 0; i < particleCount; i++) {
      // Placing positions in a controlled container box area
      positions[i * 3] = (Math.random() - 0.5) * 45;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 45;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 45;

      // Small vector speed shifts for fluid natural movement
      velocities.push({
        x: (Math.random() - 0.5) * 0.03,
        y: (Math.random() - 0.5) * 0.03,
        z: (Math.random() - 0.5) * 0.03
      });
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Material definitions
    const material = new THREE.PointsMaterial({
      size: 0.8,
      map: createNodeTexture(),
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const networkNodes = new THREE.Points(geometry, material);
    scene.add(networkNodes);

    // Dynamic Line Connections for Neural/Tech Constellation Look
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x6366f1, // Sleek Indigo Connecting Vectors
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending
    });

    let lineMesh = new THREE.LineSegments(new THREE.BufferGeometry(), lineMaterial);
    scene.add(lineMesh);

    // Active Frame Rotation Loops
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const posAttribute = geometry.getAttribute('position');
      const localPositions = posAttribute.array;

      const linePositions = [];

      // Animate node positions with speed checks
      for (let i = 0; i < particleCount; i++) {
        localPositions[i * 3] += velocities[i].x;
        localPositions[i * 3 + 1] += velocities[i].y;
        localPositions[i * 3 + 2] += velocities[i].z;

        // Boundary reflection checks
        if (Math.abs(localPositions[i * 3]) > 22) velocities[i].x *= -1;
        if (Math.abs(localPositions[i * 3 + 1]) > 22) velocities[i].y *= -1;
        if (Math.abs(localPositions[i * 3 + 2]) > 22) velocities[i].z *= -1;
      }
      posAttribute.needsUpdate = true;

      // Generate visual connection lines based on close physical proximity
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dx = localPositions[i * 3] - localPositions[j * 3];
          const dy = localPositions[i * 3 + 1] - localPositions[j * 3 + 1];
          const dz = localPositions[i * 3 + 2] - localPositions[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          // If nodes are near to each other, draw a barik line segment connection
          if (dist < 9) {
            linePositions.push(
              localPositions[i * 3], localPositions[i * 3 + 1], localPositions[i * 3 + 2],
              localPositions[j * 3], localPositions[j * 3 + 1], localPositions[j * 3 + 2]
            );
          }
        }
      }

      // Re-render lines efficiently
      if (linePositions.length > 0) {
        lineMesh.geometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
        lineMesh.geometry.computeBoundingSphere();
        lineMesh.visible = true;
      } else {
        lineMesh.visible = false;
      }

      // Slow elegant global mesh translation rotate
      networkNodes.rotation.y += 0.0006;
      lineMesh.rotation.y += 0.0006;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    // Memory Disposal phase
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      
      if (currentContainer && renderer.domElement) {
        currentContainer.removeChild(renderer.domElement);
      }
      
      material.map.dispose();
      geometry.dispose();
      material.dispose();
      lineMaterial.dispose();
      lineMesh.geometry.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={canvasRef} 
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-35 select-none"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}