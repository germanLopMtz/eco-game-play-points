
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-green-50 to-purple-50 pt-20 pb-10 px-4"
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-primary">Cuida</span> tu ciudad, 
            <span className="text-secondary"> juega</span> y 
            <span className="text-accent"> gana</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Contenedores inteligentes que transforman el reciclaje en una experiencia divertida. 
            ¡Tira tu basura, juega y obtén puntos ecológicos canjeables por recompensas!
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button className="eco-button text-lg bg-primary hover:bg-primary/90" size="lg">
              ¿Cómo Empezar?
            </Button>
            <Button 
              className="eco-button text-lg bg-secondary/90 hover:bg-secondary" 
              size="lg"
            >
              Ver Recompensas
            </Button>
          </div>
        </div>
        
        <div className="relative order-first md:order-last mx-auto w-full max-w-md animate-scale-in">
          <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center overflow-hidden shadow-2xl">
            <div className="absolute inset-2 bg-white/60 rounded-2xl backdrop-blur-sm flex items-center justify-center">
              <div className="text-center p-6">
                <div className="w-32 h-32 mx-auto mb-4 relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent animate-bounce-slow">
                    <div className="absolute inset-2 rounded-full bg-white flex items-center justify-center">
                      <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                        EG
                      </span>
                    </div>
                  </div>
                </div>
                <h2 className="text-2xl font-bold">¡Juega y Recicla!</h2>
                <p className="text-gray-600 mt-2">Descarga nuestra app y comienza a acumular puntos ecológicos</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-full flex items-center justify-center text-white font-bold animate-bounce-slow">
            ¡Nuevo!
          </div>
        </div>
      </div>
      
      <div className="container mx-auto mt-16 md:mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "Fácil de Usar", 
              description: "Simplemente acércate a uno de nuestros contenedores inteligentes e inicia tu experiencia" 
            },
            { 
              title: "Divertido", 
              description: "Juega mientras contribuyes al cuidado del medio ambiente y tu ciudad" 
            },
            { 
              title: "Recompensas Reales", 
              description: "Acumula puntos ecológicos y canjéalos por premios y descuentos" 
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="eco-card backdrop-blur-sm bg-white/70"
            >
              <h3 className="text-xl font-semibold text-primary mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
