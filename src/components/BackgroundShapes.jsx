import React, { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Box, Torus, Sphere } from '@react-three/drei'
import { useTheme } from './ThemeToggle'
import * as THREE from 'three'

// Add scroll tracking hook
function useScrollPosition() {
    const [scrollY, setScrollY] = React.useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        // Initial scroll position
        setScrollY(window.scrollY);

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return scrollY;
}

// Custom cruciform shape
function Cruciform({ ...props }) {
    const { isDarkMode } = useTheme()

    // Create cruciform geometry
    const geometry = useMemo(() => {
        const shape = new THREE.Shape()

        // Drawing a cross shape
        shape.moveTo(-0.3, -0.8)
        shape.lineTo(-0.3, -0.3)
        shape.lineTo(-0.8, -0.3)
        shape.lineTo(-0.8, 0.3)
        shape.lineTo(-0.3, 0.3)
        shape.lineTo(-0.3, 0.8)
        shape.lineTo(0.3, 0.8)
        shape.lineTo(0.3, 0.3)
        shape.lineTo(0.8, 0.3)
        shape.lineTo(0.8, -0.3)
        shape.lineTo(0.3, -0.3)
        shape.lineTo(0.3, -0.8)
        shape.lineTo(-0.3, -0.8)

        const extrudeSettings = {
            steps: 1,
            depth: 0.4,
            bevelEnabled: true,
            bevelThickness: 0.1,
            bevelSize: 0.1,
            bevelSegments: 2
        }

        return new THREE.ExtrudeGeometry(shape, extrudeSettings)
    }, [])

    // Material based on theme
    const material = isDarkMode ? (
        <meshBasicMaterial
            color={props.color}
            transparent
            opacity={0.2}
        />
    ) : (
        <meshBasicMaterial
            color={props.color}
            transparent
            opacity={0.25}
        />
    )

    return (
        <mesh {...props} geometry={geometry}>
            {material}
        </mesh>
    )
}

function Shape({ position, shapeType, color, rotationSpeed = [0.01, 0.01, 0.01], scale = 1, scrollY, scrollFactor }) {
    const ref = useRef()
    const { isDarkMode } = useTheme()
    const initialY = useRef(position[1])

    // Rotation speed
    const speed = useRef({
        x: rotationSpeed[0] * 0.5,
        y: rotationSpeed[1] * 0.5,
        z: rotationSpeed[2] * 0.5,
    })

    useFrame(() => {
        if (ref.current) {
            // Rotate the shape
            ref.current.rotation.x += speed.current.x
            ref.current.rotation.y += speed.current.y
            ref.current.rotation.z += speed.current.z

            // Apply scroll-based movement - negative scroll factor means shapes move up when scrolling down
            // Multiply by a larger factor for more intense movement
            ref.current.position.y = initialY.current + (scrollY * scrollFactor)
        }
    })

    // Material based on theme
    const material = isDarkMode ? (
        <meshBasicMaterial
            key={`dark-${color}`}
            color={color}
            transparent
            opacity={0.2}
        />
    ) : (
        <meshBasicMaterial
            key={`light-${color}`}
            color={color}
            transparent
            opacity={0.25}
        />
    )

    // Render different shape types
    let shape;
    switch(shapeType) {
        case 'cube':
            shape = <Box args={[1, 1, 1]}>{material}</Box>;
            break;
        case 'torus':
            shape = <Torus args={[0.6, 0.3, 12, 16]}>{material}</Torus>; // Reduced segments
            break;
        case 'sphere':
            shape = <Sphere args={[0.7, 12, 12]}>{material}</Sphere>; // Reduced segments
            break;
        case 'cruciform':
            return <Cruciform ref={ref} position={position} scale={scale} color={color} />;
        default:
            shape = <Sphere args={[0.7, 12, 12]}>{material}</Sphere>; // Reduced segments
    }

    return (
        <group
            ref={ref}
            position={position}
            scale={scale}
        >
            {shape}
        </group>
    )
}

function ContextLossRecovery() {
    const { gl } = useThree()

    useEffect(() => {
        const handleContextLoss = (event) => {
            event.preventDefault()
            console.log("WebGL context lost, attempting to recover...")

            // Force a refresh after a short delay
            setTimeout(() => {
                window.location.reload()
            }, 2000)
        }

        const canvas = gl.domElement
        canvas.addEventListener('webglcontextlost', handleContextLoss)

        return () => {
            canvas.removeEventListener('webglcontextlost', handleContextLoss)
        }
    }, [gl])

    return null
}

function ShapesScene() {
    const { viewport } = useThree()
    const scrollY = useScrollPosition()
    const normalizedScrollY = scrollY * 0.003 // Increased multiplier for more dramatic effect

    const shapeCount = 12 // Number of shapes
    const { isDarkMode } = useTheme()

    // Strategic placement of shapes
    const shapes = useMemo(() => {
        const result = []

        // Colors for light and dark themes
        const colors = isDarkMode ? [
            '#3B4252', // dark blue-gray
            '#4C566A', // slate
            '#5E81AC', // blue
            '#8FBCBB', // cyan
            '#A3BE8C', // green
            '#B48EAD', // purple
        ] : [
            '#7B9CD1', // medium blue
            '#93B1A7', // sage green
            '#D1A096', // dusty rose
            '#D3B084', // sand
            '#9E9CD1', // lavender
            '#A7B393', // olive
        ]

        const shapeTypes = ['cube', 'torus', 'sphere', 'cruciform']

        // Left border shapes (45% of shapes)
        for (let i = 0; i < shapeCount * 0.45; i++) {
            const y = (Math.random() * 2 - 1) * viewport.height
            const z = (Math.random() - 0.5) * 5 - 5 // behind content

            // Each shape gets a different scroll factor for parallax effect
            // Higher values = more intense movement
            const scrollFactor = 0.5 + Math.random() * 1.5; // Positive values move up when scrolling down

            result.push({
                position: [-viewport.width/2 + Math.random() * 3, y, z],
                shapeType: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
                color: colors[Math.floor(Math.random() * colors.length)],
                scale: 0.4 + Math.random() * 0.8,
                rotationSpeed: [
                    (Math.random() - 0.5) * 0.01,
                    (Math.random() - 0.5) * 0.01,
                    (Math.random() - 0.5) * 0.01,
                ],
                scrollFactor,
                id: `left-${i}`
            })
        }

        // Right border shapes (45% of shapes)
        for (let i = 0; i < shapeCount * 0.45; i++) {
            const y = (Math.random() * 2 - 1) * viewport.height
            const z = (Math.random() - 0.5) * 5 - 5 // behind content

            // Different scroll factor for variety
            const scrollFactor = 0.8 + Math.random() * 1.2;

            result.push({
                position: [viewport.width/2 - Math.random() * 3, y, z],
                shapeType: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
                color: colors[Math.floor(Math.random() * colors.length)],
                scale: 0.4 + Math.random() * 0.8,
                rotationSpeed: [
                    (Math.random() - 0.5) * 0.01,
                    (Math.random() - 0.5) * 0.01,
                    (Math.random() - 0.5) * 0.01,
                ],
                scrollFactor,
                id: `right-${i}`
            })
        }

        // Between blocks (10% of shapes) - fewer in content area
        for (let i = 0; i < shapeCount * 0.1; i++) {
            const x = (Math.random() * 2 - 1) * (viewport.width / 3)
            const y = (i % 3 - 1) * (viewport.height / 2)
            const z = (Math.random() - 0.5) * 5 - 5 // behind content

            // Still noticeable but less intense movement for content-area shapes
            const scrollFactor = 0.3 + Math.random() * 0.7;

            result.push({
                position: [x, y, z],
                shapeType: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
                color: colors[Math.floor(Math.random() * colors.length)],
                scale: 0.25 + Math.random() * 0.5,
                rotationSpeed: [
                    (Math.random() - 0.5) * 0.01,
                    (Math.random() - 0.5) * 0.01,
                    (Math.random() - 0.5) * 0.01,
                ],
                scrollFactor,
                id: `between-${i}`
            })
        }

        return result
    }, [viewport, isDarkMode])

    return shapes.map((props) => (
        <Shape
            key={props.id}
            position={props.position}
            shapeType={props.shapeType}
            color={props.color}
            rotationSpeed={props.rotationSpeed}
            scale={props.scale}
            scrollY={normalizedScrollY}
            scrollFactor={props.scrollFactor}
        />
    ))
}

export default function BackgroundShapes() {
    const { isDarkMode } = useTheme()

    return (
        <div className="background-shapes">
            {isDarkMode ? (
                <Canvas
                    camera={{ position: [0, 0, 10], fov: 60 }}
                    gl={{
                        alpha: true,
                        antialias: true,
                        powerPreference: 'default',
                        preserveDrawingBuffer: true
                    }}
                >
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    <ShapesScene />
                    <ContextLossRecovery />
                </Canvas>
            ) : (
                <Canvas
                    camera={{ position: [0, 0, 10], fov: 60 }}
                    gl={{
                        alpha: true,
                        antialias: true,
                        powerPreference: 'default',
                        preserveDrawingBuffer: true
                    }}
                >
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    <ShapesScene />
                    <ContextLossRecovery />
                </Canvas>
            )}
        </div>
    )
}