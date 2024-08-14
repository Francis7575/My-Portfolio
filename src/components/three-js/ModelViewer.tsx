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
            enableZoom={false}  // Disables zooming with the mouse wheel or touch pinch gestures
            enableRotate={false} // Disables rotation of the camera around the target object
            enableDamping={false} // Disables damping (smooth transition) for the controls
            dampingFactor={0.1} // Sets the damping factor for smoothing the camera movement (not used since damping is disabled)
            maxPolarAngle={Math.PI / 2} // Limits the maximum polar angle to prevent flipping the camera upside down
          />
        )}
      </Canvas>
    </div>
  );
};

export default ModelViewer;
