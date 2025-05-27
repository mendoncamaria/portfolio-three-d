import React from 'react';
import { Text } from '@react-three/drei';
import Section from './Section';

const AboutSection = (props) => {
  return (
    <Section {...props} title="About Me">
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="rebeccapurple" />
      </mesh>
      <Text
        fontSize={0.8}
        color="white"
        anchorX="center"
        anchorY="middle"
        position={[0, -1.5, 0]}
        maxWidth={8}
        textAlign="center"
      >
        Hi, I'm a passionate developer building awesome 3D experiences!
      </Text>
      {/* Add more 3D objects related to your About section */}
    </Section>
  );
};

export default AboutSection;