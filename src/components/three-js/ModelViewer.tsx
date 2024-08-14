import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model';
import { useState, useEffect } from 'react';

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

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="canvas-container">
      <Canvas className="canvas" camera={{ position: cameraPosition }}>
        <ambientLight intensity={4.5} />
        <directionalLight intensity={1.5} />
        <Model path={path} scale={scale} position={position} />
        {!isMobile && (
          <OrbitControls
            enableZoom={false} // Disables zooming with the mouse wheel or touch pinch gestures
            enablePan={false} // Disables panning (moving) the camera with drag or touch
            enableRotate={false} // Disables rotation of the camera around the target object
            enableDamping={false} // Disables damping (smooth transition) for the controls
            dampingFactor={0.1} // Sets the damping factor for smoothing the camera movement (not used since damping is disabled)
            maxPolarAngle={Math.PI / 2} // Limits the maximum polar angle to prevent flipping the camera upside down
          />
        )}
      </Canvas>
      {isMobile && <div className="scroll-overlay"></div>}
    </div>
  );
};

export default ModelViewer;
