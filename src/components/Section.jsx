import React from 'react';
import { Text } from '@react-three/drei';

const Section = ({ position, children, title }) => {
  return (
    <group position={position}>
      {/* Optional: A subtle plane as a floor for each section */}
      <mesh rotation-x={-Math.PI / 2} position={[0, -2, 0]} visible={false}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="gray" transparent opacity={0.1} />
      </mesh>

      {title && (
        <Text
          fontSize={2}
          color="white"
          anchorX="center"
          anchorY="middle"
          position={[0, 5, 0]} // Position the title above the section
        >
          {title}
        </Text>
      )}

      {children}
    </group>
  );
};

export default Section;