import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model';


type ModelViewerProps = {
  path: string;
  scale?: [number, number, number];
  position?: [number, number, number];
  cameraPosition?: [number, number, number];
};

const ModelViewer: React.FC<ModelViewerProps> = ({ path, scale, position = [0, 0, 0], cameraPosition = [0, 2, 5] }) => {
  return (
    <Canvas className='canvas' camera={{ position: cameraPosition }}>
      <ambientLight intensity={4.5} />
      <directionalLight intensity={1.5} />
      <Model path={path} scale={scale} position={position} />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default ModelViewer;
