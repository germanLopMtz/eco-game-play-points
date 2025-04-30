import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Recycle, Leaf, Gift } from "lucide-react";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Cómo Funciona?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sigue estos simples pasos para comenzar a reciclar y ganar puntos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Recycle className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>1. Recicla</CardTitle>
              <CardDescription>
                Separa tus residuos y deposítalos en los contenedores correspondientes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Utiliza los contenedores de colores para separar papel, plástico, vidrio y otros materiales reciclables.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>2. Escanea</CardTitle>
              <CardDescription>
                Escanea el código QR del contenedor con tu aplicación
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Cada vez que recicles, escanea el código QR del contenedor para registrar tu contribución.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Gift className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>3. Gana Puntos</CardTitle>
              <CardDescription>
                Acumula puntos por cada reciclaje y canjea recompensas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Por cada reciclaje recibirás puntos que podrás canjear por descuentos, productos y más.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-24">
          <p className="text-2xl font-semibold text-gray-900">
            ¡Es así de sencillo!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
