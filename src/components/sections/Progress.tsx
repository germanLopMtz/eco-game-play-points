
import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { BadgePercent, BadgeDollarSign } from "lucide-react";

const MyProgress = () => {
  const [points, setPoints] = useState(425);
  const nextLevel = 500;

  const rewards = [
    {
      name: "Café Gratis",
      location: "Café Verde",
      points: 100,
      type: "discount",
      icon: <BadgePercent className="w-6 h-6 text-accent" />,
      claimed: false
    },
    {
      name: "25% en Cine",
      location: "CineEco",
      points: 250,
      type: "discount",
      icon: <BadgePercent className="w-6 h-6 text-accent" />,
      claimed: false
    },
    {
      name: "Entrada Parque",
      location: "Parque Aventura",
      points: 300,
      type: "ticket",
      icon: <BadgeDollarSign className="w-6 h-6 text-secondary" />,
      claimed: true
    },
    {
      name: "30% en Ropa",
      location: "EcoFashion",
      points: 400,
      type: "discount",
      icon: <BadgePercent className="w-6 h-6 text-accent" />,
      claimed: false
    },
    {
      name: "Libro de Ecología",
      location: "LibroVerde",
      points: 500,
      type: "product",
      icon: <BadgeDollarSign className="w-6 h-6 text-secondary" />,
      claimed: false
    }
  ];

  return (
    <section id="progress" className="section-container bg-gradient-to-br from-purple-50 to-white">
      <h2 className="section-title">
        Mi <span className="text-secondary">Progreso</span>
      </h2>
      
      <div className="max-w-3xl mx-auto">
        <div className="eco-card p-8 mb-12 relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-green-100 opacity-40" />
          <div className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full bg-purple-100 opacity-40" />
          
          <div className="relative">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold">Mis Puntos Ecológicos</h3>
              <span className="text-sm text-gray-500">Nivel Eco-Héroe</span>
            </div>
            
            <div className="flex justify-between items-center mb-2">
              <span className="text-4xl font-bold text-primary">{points}</span>
              <span className="text-gray-500">Meta: {nextLevel}</span>
            </div>
            
            <Progress value={(points / nextLevel) * 100} className="h-3 bg-gray-100" />
            
            <p className="mt-4 text-gray-600">
              Te faltan <span className="font-semibold text-accent">{nextLevel - points} puntos</span> para 
              alcanzar el siguiente nivel y desbloquear más recompensas exclusivas.
            </p>
            
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              {["Total Reciclado", "Contenedores Usados", "Juegos Jugados"].map((stat, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-3">
                  <p className="text-gray-500 text-sm mb-1">{stat}</p>
                  <p className="font-bold text-lg">{[42, 8, 15][i]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <h3 className="text-2xl font-semibold mb-6">Recompensas Disponibles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rewards.map((reward, index) => (
            <div 
              key={index} 
              className={`eco-card ${reward.claimed ? 
                'bg-gray-100' : 
                points >= reward.points ? 'bg-white border-2 border-green-200' : 'bg-white'}`}
            >
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center">
                  <div className="mr-3 p-2 rounded-full bg-gray-100">
                    {reward.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold">{reward.name}</h4>
                    <p className="text-sm text-gray-500">{reward.location}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-medium px-2 py-1 rounded-full bg-gray-100">
                    {reward.points} pts
                  </span>
                </div>
              </div>
              
              <div className="mt-4">
                {reward.claimed ? (
                  <button 
                    disabled 
                    className="w-full py-2 rounded-lg bg-gray-300 text-white font-medium"
                  >
                    Reclamado
                  </button>
                ) : points >= reward.points ? (
                  <button 
                    className="w-full py-2 rounded-lg bg-primary hover:bg-primary/90 text-white font-medium transition-colors"
                  >
                    Canjear Ahora
                  </button>
                ) : (
                  <button 
                    disabled 
                    className="w-full py-2 rounded-lg bg-gray-200 text-gray-500 font-medium"
                  >
                    Puntos Insuficientes
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <button className="eco-button bg-secondary text-white hover:bg-secondary/90">
            Ver Todas las Recompensas
          </button>
        </div>
      </div>
    </section>
  );
};

export default MyProgress;
