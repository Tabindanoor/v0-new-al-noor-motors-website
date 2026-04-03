'use client'

import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

function Car3D({ rotationSpeed = 0.005 }) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += rotationSpeed
    }
  })

  return (
    <group ref={groupRef}>
      {/* Main car body - simplified 3D car shape */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[2, 1, 4.5]} />
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Car roof */}
      <mesh position={[0, 0.8, -0.3]} castShadow receiveShadow>
        <boxGeometry args={[1.8, 0.8, 2]} />
        <meshStandardMaterial
          color="#0a0a0a"
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>

      {/* Front windshield */}
      <mesh position={[0, 0.6, 2]} castShadow receiveShadow>
        <boxGeometry args={[1.9, 1, 0.2]} />
        <meshStandardMaterial
          color="#1a3a4a"
          metalness={0.1}
          roughness={0.1}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Left wheel */}
      <mesh position={[-1.2, -0.5, 1]} castShadow receiveShadow>
        <cylinderGeometry args={[0.45, 0.45, 0.3, 32]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial
          color="#2a2a2a"
          metalness={0.6}
          roughness={0.4}
        />
      </mesh>

      {/* Left wheel 2 */}
      <mesh position={[-1.2, -0.5, -1.3]} castShadow receiveShadow>
        <cylinderGeometry args={[0.45, 0.45, 0.3, 32]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial
          color="#2a2a2a"
          metalness={0.6}
          roughness={0.4}
        />
      </mesh>

      {/* Right wheel */}
      <mesh position={[1.2, -0.5, 1]} castShadow receiveShadow>
        <cylinderGeometry args={[0.45, 0.45, 0.3, 32]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial
          color="#2a2a2a"
          metalness={0.6}
          roughness={0.4}
        />
      </mesh>

      {/* Right wheel 2 */}
      <mesh position={[1.2, -0.5, -1.3]} castShadow receiveShadow>
        <cylinderGeometry args={[0.45, 0.45, 0.3, 32]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial
          color="#2a2a2a"
          metalness={0.6}
          roughness={0.4}
        />
      </mesh>

      {/* Headlights */}
      <mesh position={[-0.6, 0.3, 2.2]} castShadow receiveShadow>
        <cylinderGeometry args={[0.25, 0.25, 0.1, 32]} rotation={[0, 0, Math.PI / 2]} />
        <meshStandardMaterial
          color="#ffdb4d"
          emissive="#ffdb4d"
          emissiveIntensity={0.6}
        />
      </mesh>

      <mesh position={[0.6, 0.3, 2.2]} castShadow receiveShadow>
        <cylinderGeometry args={[0.25, 0.25, 0.1, 32]} rotation={[0, 0, Math.PI / 2]} />
        <meshStandardMaterial
          color="#ffdb4d"
          emissive="#ffdb4d"
          emissiveIntensity={0.6}
        />
      </mesh>
    </group>
  )
}

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[4, 3, 4]} />
      <OrbitControls
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        autoRotate
        autoRotateSpeed={2}
      />
      <Environment preset="studio" />
      <Car3D rotationSpeed={0} />
    </>
  )
}

export function Car3DViewer() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <div className="w-full h-96 bg-secondary rounded-lg animate-pulse" />
  }

  return (
    <div className="w-full h-96 bg-secondary rounded-lg overflow-hidden border border-border">
      <Canvas shadows>
        <Scene />
      </Canvas>
    </div>
  )
}
