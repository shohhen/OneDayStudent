import React, { Suspense, useMemo, useRef, useEffect, useState } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { Billboard, Text, TrackballControls } from '@react-three/drei'
import { useTheme } from './ThemeToggle'
import * as THREE from 'three'

/*
  Transparent words globe with depth-based styling:
  - Front-facing words: larger and more opaque (bolder)
  - Back-facing words: smaller and more transparent (thinner)
  - No sphere, no orbits, transparent background
  - Theme-aware text colors
*/

const DEFAULT_WORDS = [
    'IT','AI','Data','Medicine','Biology','Chemistry','Physics','Math','Economics','Finance','Law',
    'Design','Art','Music','Languages','History','Engineering','Architecture','Sociology','Psychology',
    'Geology','Ecology','Education','Agriculture','Logistics','Tourism','Marketing','Cybersecurity'
]

function Word({
                  children,
                  baseFontSize = 0.2,
                  baseOpacity = 0.7,
                  ...props
              }) {
    const textRef = useRef(null)
    const { camera } = useThree()
    const { isDarkMode } = useTheme() // Get theme context
    const [hovered, setHovered] = useState(false)
    const [fontSize, setFontSize] = useState(baseFontSize)
    const [opacity, setOpacity] = useState(baseOpacity)

    // Base text color according to theme
    const baseColor = isDarkMode ? '#e6e6e6' : '#1e3a8a' // Light gray in dark mode, navy in light mode

    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto'
        return () => { document.body.style.cursor = 'auto' }
    }, [hovered])

    // Compute word position relative to camera for depth effect
    useFrame(() => {
        if (!textRef.current) return

        const mesh = textRef.current
        const worldPos = new THREE.Vector3()
        mesh.getWorldPosition(worldPos)

        // Direction from origin to word (assuming sphere at origin)
        const normal = worldPos.clone().normalize()
        // Direction from word to camera
        const viewDir = camera.position.clone().sub(worldPos).normalize()

        // Dot product: 1 = facing camera, -1 = facing away
        const dot = normal.dot(viewDir)
        // Remap to 0...1 range
        const facing = Math.min(1, Math.max(0, (dot + 1) / 2))

        // Calculate fontSize based on facing value (bigger in front)
        const newFontSize = baseFontSize * (0.85 + facing * 0.5) * (hovered ? 1.05 : 1)
        if (Math.abs(fontSize - newFontSize) > 0.001) {
            setFontSize(newFontSize)
        }

        // Calculate opacity based on facing value (more opaque in front)
        const newOpacity = 0.3 + facing * 0.65 + (hovered ? 0.05 : 0)
        if (Math.abs(opacity - newOpacity) > 0.01) {
            setOpacity(newOpacity)
        }

        // Set color brightness based on facing
        if (mesh.material) {
            // Adjust color brightness based on facing and theme
            if (isDarkMode) {
                const gray = 0.7 + facing * 0.3
                mesh.material.color.setRGB(gray, gray, gray)
            } else {
                // In light mode, adjust saturation of navy blue
                const intensity = 0.2 + facing * 0.8
                const color = new THREE.Color(baseColor).lerp(new THREE.Color('#0f2d78'), intensity)
                mesh.material.color.copy(color)
            }
        }
    })

    return (
        <Billboard {...props}>
            <Text
                ref={textRef}
                onPointerOver={(e) => { e.stopPropagation(); setHovered(true) }}
                onPointerOut={() => setHovered(false)}
                onClick={() => console.log('clicked:', children)}
                color={baseColor}
                fontSize={fontSize}
                letterSpacing={-0.02}
                lineHeight={1}
                anchorX="center"
                anchorY="middle"
                material-toneMapped={false}
                material-transparent
                material-opacity={opacity}
            >
                {children}
            </Text>
        </Billboard>
    )
}

function Cloud({
                   count = 8,
                   radius = 1.6,
                   wordsList = DEFAULT_WORDS,
                   minBaseFont = 0.16,
                   maxBaseFont = 0.32
               }) {
    // Create a count x count distribution of words on a sphere
    const items = useMemo(() => {
        const temp = []
        const spherical = new THREE.Spherical()
        const phiSpan = Math.PI / (count + 1)
        const thetaSpan = (Math.PI * 2) / count
        let idx = 0
        for (let i = 1; i < count + 1; i++) {
            for (let j = 0; j < count; j++) {
                const pos = new THREE.Vector3().setFromSpherical(
                    spherical.set(radius, phiSpan * i, thetaSpan * j)
                )
                const word = wordsList[idx % wordsList.length]

                // Apply some natural variation to base sizes
                const t = (idx % 7) / 6 // 0..1
                const baseFontSize = THREE.MathUtils.lerp(minBaseFont, maxBaseFont, t)
                const baseOpacity = THREE.MathUtils.lerp(0.5, 0.9, 1 - t)

                temp.push({ pos, word, baseFontSize, baseOpacity })
                idx++
            }
        }
        return temp
    }, [count, radius, wordsList, minBaseFont, maxBaseFont])

    return items.map(({ pos, word, baseFontSize, baseOpacity }, i) => (
        <Word
            key={i}
            position={pos}
            baseFontSize={baseFontSize}
            baseOpacity={baseOpacity}
        >
            {word}
        </Word>
    ))
}

// Fit the camera so the whole cloud is inside the viewport
function FitCameraToCloud({ radius, maxBaseFont = 0.32, maxSizeMul = 1.35, padding = 1.15 }) {
    const { camera, size } = useThree()

    useEffect(() => {
        // Total estimated content radius including largest possible text
        const contentRadius = (radius + maxBaseFont * maxSizeMul) * padding
        const diameter = contentRadius * 2

        // Calculate camera distance needed to fit content
        const fovRad = THREE.MathUtils.degToRad(camera.fov)
        const fovH = 2 * Math.atan(Math.tan(fovRad / 2) * camera.aspect)

        const zForHeight = diameter / (2 * Math.tan(fovRad / 2))
        const zForWidth = diameter / (2 * Math.tan(fovH / 2))
        const targetZ = Math.max(zForHeight, zForWidth)

        // Position camera to fit content
        camera.position.z = targetZ
        camera.updateProjectionMatrix()
    }, [camera, size.width, size.height, radius, maxBaseFont, maxSizeMul, padding])

    return null
}

// Rotating Group Component
function RotatingGroup({ children }) {
    const groupRef = useRef()

    useFrame(({ clock }) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = clock.getElapsedTime() * 0.05
        }
    })

    return <group ref={groupRef}>{children}</group>
}

export default function Globe({
                                  words = DEFAULT_WORDS,
                                  count = 8,
                                  radius = 1.6,
                                  enableControls = true
                              }) {
    const { isDarkMode } = useTheme()

    // Force re-render when theme changes by using key
    return (
        <Canvas
            key={`globe-${isDarkMode ? 'dark' : 'light'}`}
            dpr={[1, 2]}
            camera={{ position: [0, 0, 4.2], fov: 50 }}
            gl={{ antialias: true, alpha: true }}
            onCreated={({ gl, scene }) => {
                // Fully transparent canvas
                gl.setClearColor(0x000000, 0)
                scene.background = null
            }}
        >
            <Suspense fallback={null}>
                <RotatingGroup>
                    <group rotation={[0.2, 0.7, 0]}>
                        <Cloud count={count} radius={radius} wordsList={words} />
                    </group>
                </RotatingGroup>
                <FitCameraToCloud radius={radius} maxBaseFont={0.32} maxSizeMul={1.35} padding={1.15} />
            </Suspense>

            {enableControls && <TrackballControls rotateSpeed={2.0} zoomSpeed={0.9} panSpeed={0.6} />}
        </Canvas>
    )
}