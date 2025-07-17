import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, Stars } from '@react-three/drei'
import Model from './Model'

export default function Scene({ scrollY }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: -1 
      }}
    >
      <Suspense fallback={null}>
        {/* Güçlü beyaz ışıklandırma cam için */}
        <ambientLight intensity={1.2} color="#ffffff" />
        <directionalLight position={[10, 10, 5]} intensity={2.5} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={2} color="#ffffff" />
        <pointLight position={[5, 5, 5]} intensity={2} color="#ffffff" />
        <pointLight position={[-5, -5, -5]} intensity={1.8} color="#ffffff" />
        <pointLight position={[0, 10, 0]} intensity={1.5} color="#ffffff" />
        
        {/* Cam için beyaz spot light */}
        <spotLight
          position={[0, 10, 10]}
          angle={0.3}
          penumbra={0.5}
          intensity={3}
          color="#ffffff"
          castShadow={true}
        />
        
        <spotLight
          position={[10, 0, 5]}
          angle={0.4}
          penumbra={0.3}
          intensity={2.5}
          color="#ffffff"
        />
        
        <spotLight
          position={[-10, 0, 5]}
          angle={0.4}
          penumbra={0.3}
          intensity={2}
          color="#ffffff"
        />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
        
        <Environment preset="studio" background={false} />
        
        <Model scrollY={scrollY} />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.3}
        />
      </Suspense>
    </Canvas>
  )
}
