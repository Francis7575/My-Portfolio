import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model'

type ModelViewerProps = {
  path: string;
  scale?: [number, number, number];
};

const ModelViewer: React.FC<ModelViewerProps> = (props) => {
  const CameraSetup = () => {
    const { camera } = useThree();
    camera.position.set(0, 0, 6);
    return null;
  };
  return (
    <Canvas className='canvas'>
      <CameraSetup />
      <ambientLight intensity={4.5} />
      <directionalLight intensity={1.5} />
      <Model {...props} />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default ModelViewer;
