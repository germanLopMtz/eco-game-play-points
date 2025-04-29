
import { 
  Award, 
  CirclePlay, 
  Gift, 
  Trash2
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Trash2 size={48} className="text-primary" />,
      title: "Deposita tu basura",
      description: "Acércate a uno de nuestros contenedores inteligentes y deposita tu basura correctamente"
    },
    {
      icon: <CirclePlay size={48} className="text-secondary" />,
      title: "Juega un minijuego",
      description: "Los contenedores cuentan con divertidos juegos como máquina de garra o ruleta"
    },
    {
      icon: <Award size={48} className="text-accent" />,
      title: "Gana puntos ecológicos",
      description: "Cada vez que juegas, acumulas puntos en tu cuenta personal"
    },
    {
      icon: <Gift size={48} className="text-primary" />,
      title: "Canjea recompensas",
      description: "Usa tus puntos para obtener descuentos y premios en nuestros establecimientos aliados"
    }
  ];

  return (
    <section id="how-it-works" className="section-container bg-gradient-to-br from-green-50 to-white">
      <h2 className="section-title">
        ¿Cómo <span className="text-primary">Funciona</span>?
      </h2>
      
      <div className="mt-12 relative">
        {/* Connection Line */}
        <div className="hidden md:block absolute left-1/2 top-24 bottom-24 w-1 bg-gradient-to-b from-primary via-secondary to-accent -translate-x-1/2 z-0" />
        
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {steps.map((step, index) => (
            <div key={index} className={`relative z-10 ${
              index % 2 === 1 ? "md:translate-y-24" : ""
            }`}>
              <div className="eco-card flex flex-col items-center text-center p-8 bg-white">
                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              
              {/* Numbered Circle */}
              <div className="absolute -top-5 -left-2 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold text-lg">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-20 text-center max-w-2xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4">
          ¡Es así de sencillo!
        </h3>
        <p className="text-gray-600 mb-8">
          Nuestros contenedores inteligentes están revolucionando la forma en que interactuamos con los residuos. 
          Convirtiendo una tarea diaria en una experiencia divertida y gratificante.
        </p>
        <button className="eco-button bg-secondary text-white hover:bg-secondary/90">
          Busca el contenedor más cercano
        </button>
      </div>
    </section>
  );
};

export default HowItWorks;
