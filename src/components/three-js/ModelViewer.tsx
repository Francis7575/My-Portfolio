import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model';
import { useState } from 'react';

type ModelViewerProps = {
  path: string;
  scale?: [number, number, number];
  position?: [number, number, number];
  cameraPosition?: [number, number, number];
};

const ModelViewer: React.FC<ModelViewerProps> = ({
  path,
  scale,
  position = [0, 0, 0],
  cameraPosition = [0, 2, 5]
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  return (
    <div>
      <Canvas className='canvas' camera={{ position: cameraPosition }}>
        <ambientLight intensity={4.5} />
        <directionalLight intensity={1.5} />
        <Model path={path} scale={scale} position={position} />
        {!isMobile && (
          <OrbitControls
            enableZoom={false}
            enableRotate={false}
            enableDamping={false}
            dampingFactor={0.1}
            maxPolarAngle={Math.PI / 2} 
          />
        )}
      </Canvas>
      {isMobile && <div className="scroll-overlay"></div>}
    </div>
  );
};

export default ModelViewer;
