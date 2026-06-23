import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars, Float } from '@react-three/drei'

function SpinningKnot() {
  const knotRef = useRef()

  // Dynamic and ultra-smooth continuous rotation loops
  useFrame((state) => {
    if (knotRef.current) {
      // Base rotation loops
      knotRef.current.rotation.x += 0.0008
      knotRef.current.rotation.y += 0.0015
      
      // Subtle elegant programmatic hovering pulsation effect
      const elapsedTime = state.clock.getElapsedTime()
      knotRef.current.position.y = Math.sin(elapsedTime * 0.5) * 0.15
    }
  })

  return (
    <Float floatIntensity={0.6} speed={1.2} rotationIntensity={0.4}>
      <mesh ref={knotRef} position={[0, 0, -4]} scale={[3.8, 3.8, 3.8]}>
        {/* Intricate complex geometric knot mesh */}
        <torusKnotGeometry args={[3, 0.75, 320, 24]} />
        
        {/* Core cyber-indigo neon material configuration */}
        <meshStandardMaterial
          metalness={0.85}
          roughness={0.15}
          color="#6366f1" // Premium Indigo core color mapping to certifications
          emissive="#4338ca" // Violet deep emission spectrum
          emissiveIntensity={0.4}
          transparent
          opacity={0.45} // Perfectly balanced layered glass transparency
          wireframe={true} // High-tech engineering grid topology structure
        />
      </mesh>
    </Float>
  )
}

export default function Scene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-gradient-to-b from-gray-950 to-gray-900">
      <Canvas
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        camera={{ position: [0, 0, 14], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Strategic Ambient & Directional Lighting Hierarchy */}
        <ambientLight intensity={0.4} />
        
        {/* Strong top corner tracking spotlight */}
        <directionalLight position={[8, 10, 5]} intensity={1.8} color="#a5b4fc" />
        
        {/* Multi-angle complementary backlighting for deep edge specularity */}
        <pointLight position={[-8, -5, -2]} intensity={0.9} color="#6366f1" />
        <pointLight position={[0, 5, 8]} intensity={0.5} color="#c084fc" />

        {/* 3D Geometric Mathematical Lattice */}
        <SpinningKnot />

        {/* Immersive Deep Cosmic Background Grid */}
        <Stars
          radius={150}
          depth={80}
          count={2000}
          factor={4.5}
          saturation={0.8}
          fade
          speed={0.8}
        />

        {/* Smooth Camera Space Auto-Rotation controls */}
        <OrbitControls 
          enablePan={false} 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={0.15} 
        />
      </Canvas>
    </div>
  )
}