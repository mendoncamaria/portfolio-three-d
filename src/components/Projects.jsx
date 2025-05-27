import React from 'react';
import { Box } from '@react-three/drei'; // Using a simple Box from drei for now
import Section from './Section';

const ProjectsSection = (props) => {
  return (
    <Section {...props} title="My Projects">
      <Box args={[3, 3, 3]} position={[-3, 0, 0]}>
        <meshStandardMaterial color="blue" />
      </Box>
      <Box args={[3, 3, 3]} position={[3, 0, 0]}>
        <meshStandardMaterial color="green" />
      </Box>
      {/* You can load GLTF models here using useGLTF from @react-three/drei */}
      {/* Example: <GLTFLoader url="/path/to/your/model.gltf" position={[0, 0, 0]} /> */}
    </Section>
  );
};

export default ProjectsSection;