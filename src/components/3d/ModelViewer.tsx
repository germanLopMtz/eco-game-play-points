import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html } from '@react-three/drei';
import { Suspense, useState } from 'react';

interface ModelProps {
  modelPath: string;
}

function Model({ modelPath }: ModelProps) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} />;
}

interface ModelViewerProps {
  modelPath: string;
  className?: string;
}

export default function ModelViewer({ modelPath, className = '' }: ModelViewerProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`w-full h-[400px] relative ${className}`}>
      <Canvas
        camera={{ position: [2, 2, 5], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={
          <Html center>
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
              <p className="mt-2 text-primary">Cargando modelo...</p>
            </div>
          </Html>
        }>
          <Model modelPath={modelPath} />
        </Suspense>
        <OrbitControls 
          enableZoom={true}
          minDistance={2}
          maxDistance={10}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
} 