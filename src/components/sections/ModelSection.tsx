import ModelViewer from '../3d/ModelViewer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

const ModelSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-white via-green-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-0 bg-white/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">
                Nuestros Contenedores Inteligentes
              </CardTitle>
              <CardDescription className="text-center text-lg">
                Descubre cómo funcionan nuestros contenedores de reciclaje inteligentes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg overflow-hidden">
                <ModelViewer 
                  modelPath="/models/modelo3Dprototipo.glb" 
                  className="w-full h-[400px]"
                />
              </div>
              <div className="mt-6 text-center space-y-4">
                <p className="text-gray-700">
                  Interactúa con el modelo 3D de nuestros contenedores inteligentes.
                  Usa el ratón para rotar y el scroll para hacer zoom.
                </p>
                <div className="flex justify-center gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-sm">Materiales Reciclables</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span className="text-sm">Sensores Inteligentes</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ModelSection; 