import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Model({ scrollY, ...props }) {
  const { nodes, materials, scene } = useGLTF('/shattered_glass.glb')
  const groupRef = useRef()

  // GLB içeriğini console'da göster
  useEffect(() => {
    console.log('GLB Nodes:', nodes)
    console.log('GLB Materials:', materials)
    console.log('GLB Scene:', scene)
    
    // Materyalleri optimize et - CAM için beyaz renk
    if (materials) {
      Object.values(materials).forEach(material => {
        if (material.transparent !== undefined) {
          material.transparent = true
          material.opacity = 0.85 // Hafif saydam
          material.color = new THREE.Color(0xffffff) // Beyaz renk
          material.emissive = new THREE.Color(0x222222) // Hafif beyaz ışıma
          material.metalness = 0.1 // Cam için düşük metalness
          material.roughness = 0.05 // Çok parlak yüzey
          material.envMapIntensity = 3 // Güçlü environment yansıması
          material.clearcoat = 1.0 // Cam için clearcoat
          material.clearcoatRoughness = 0.1 // Parlak clearcoat
        }
      })
    }
  }, [nodes, materials, scene])

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Scroll pozisyonu fazları
      const phase1 = 500   // İlk faz: Ortada kalma
      const phase2 = 1500  // İkinci faz: Zoom + sağa hareket
      const phase3 = 2500  // Üçüncü faz: Sola hareket
      
      // Sürekli yavaş rotasyon (her zaman çalışır)
      groupRef.current.rotation.z += delta * 0.05
      
      if (scrollY < phase1) {
        // FAZ 1: Başlangıç - Ortada yavaş hareketler
        groupRef.current.position.x = 0
        groupRef.current.position.y = Math.sin(scrollY * 0.005) * 0.3
        groupRef.current.position.z = 0
        groupRef.current.rotation.y = scrollY * 0.001
        groupRef.current.rotation.x = Math.sin(scrollY * 0.003) * 0.1
        
      } else if (scrollY < phase2) {
        // FAZ 2: Zoom + Sağa hareket
        const progress = (scrollY - phase1) / (phase2 - phase1) // 0-1 arası
        
        groupRef.current.position.x = progress * 1.5 // Sağa hareket
        groupRef.current.position.y = Math.sin(scrollY * 0.005) * 0.2
        groupRef.current.position.z = progress * 2 // Yaklaş (zoom)
        groupRef.current.rotation.y = scrollY * 0.002
        groupRef.current.rotation.x = Math.sin(scrollY * 0.003) * 0.15
        
      } else if (scrollY < phase3) {
        // FAZ 3: Sola hareket
        const progress = (scrollY - phase2) / (phase3 - phase2) // 0-1 arası
        
        groupRef.current.position.x = 1.5 - (progress * 3) // Sağdan sola hareket
        groupRef.current.position.y = Math.sin(scrollY * 0.005) * 0.2
        groupRef.current.position.z = 2 + (progress * 1) // Daha da yaklaş
        groupRef.current.rotation.y = scrollY * 0.002
        groupRef.current.rotation.x = Math.sin(scrollY * 0.003) * 0.2
        
      } else {
        // FAZ 4: Sola pozisyonda kalma
        groupRef.current.position.x = -1.5 // Sola sabit
        groupRef.current.position.y = Math.sin(scrollY * 0.005) * 0.15
        groupRef.current.position.z = 3 // Çok yakın
        groupRef.current.rotation.y = scrollY * 0.003
        groupRef.current.rotation.x = Math.sin(scrollY * 0.003) * 0.25
      }
    }
  })

  return (
    <group ref={groupRef} {...props} dispose={null}>
      {/* Daha büyük scale ile render et */}
      <primitive object={scene} scale={[2.5, 2.5, 2.5]} />
    </group>
  )
}

useGLTF.preload('/shattered_glass.glb')
