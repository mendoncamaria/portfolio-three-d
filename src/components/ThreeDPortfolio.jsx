import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Environment } from '@react-three/drei';
import Section from './Section';
import AboutSection from './About';
import ProjectsSection from './Projects';
import ContactSection from './Contact';

const ThreeDPortfolio = () => {
  // You might use a ref to the canvas or controls for programmatic camera movements
  const orbitControlsRef = useRef();

  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 75 }} // Initial camera position and field of view
      className="w-full h-full"
    >
      <Suspense fallback={null}> {/* A simple loading fallback */}
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <directionalLight position={[-10, 10, 0]} intensity={0.8} />

        {/* Environment (optional: adds a skybox or HDR background) */}
        <Environment preset="city" /> {/* Or 'sunset', 'dawn', 'warehouse', 'forest', 'apartment', 'studio', 'park', 'lobby' */}

        {/* Background elements */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

        {/* OrbitControls for development/exploration. Remove or disable for production if you want guided navigation. */}
        <OrbitControls ref={orbitControlsRef} enableZoom enablePan />

        {/* Your Sections */}
        {/* Each section could be positioned at a different Z-coordinate to create a "scroll" effect */}
        <AboutSection position={[0, 0, 0]} />
        <ProjectsSection position={[0, 0, -20]} /> {/* Example: move 20 units back */}
        <ContactSection position={[0, 0, -40]} /> {/* Example: move 40 units back */}

        {/* Example of a generic Section component */}
        {/* <Section position={[0, 0, -60]} title="Extra Content">
          <mesh>
            <boxGeometry args={[5, 5, 5]} />
            <meshStandardMaterial color="hotpink" />
          </mesh>
        </Section> */}

      </Suspense>
    </Canvas>
  );
};

export default ThreeDPortfolio;