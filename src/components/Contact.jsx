import React from 'react';
import { TorusKnot } from '@react-three/drei';
import Section from './Section';
import { Text } from '@react-three/drei';

const ContactSection = (props) => {
  return (
    <Section {...props} title="Contact Me">
      <TorusKnot args={[1, 0.4, 128, 32]} scale={2}>
        <meshStandardMaterial color="orange" />
      </TorusKnot>
      <Text
        fontSize={0.8}
        color="white"
        anchorX="center"
        anchorY="middle"
        position={[0, -3, 0]}
        maxWidth={8}
        textAlign="center"
      >
        Reach out via email or social media!
      </Text>
      {/* Add interactive elements like mailto links or social media icons as 3D objects */}
    </Section>
  );
};

export default ContactSection;