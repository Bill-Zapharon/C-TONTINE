import React from 'react';
import { Users, ArrowRight } from 'lucide-react';

export default function JoinTontine() {
  const tontines = [
    {
      id: 1,
      name: "Community Savings Group",
      members: 15,
      contributionAmount: 100,
      frequency: "Mensuelle"
    },
    // Add more mock data as needed
  ];

  const handleJoinRequest = (tontineId: number) => {
    // Handle join request
    alert("Votre demande a été soumis avec succès. L'administrateur vous reviendra plus tard.");
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Rejoinndre Une Tontine</h1>
        <p className="text-gray-600">Rechercher les tontines disponibles et envoyez une demande</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tontines.map((tontine) => (
          <div key={tontine.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-100 p-2 rounded">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold">{tontine.name}</h2>
            </div>
            
            <div className="space-y-2 mb-6">
              <p className="text-gray-600">
                <span className="font-medium">Membres:</span> {tontine.members}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Contribution:</span> ${tontine.contributionAmount}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Frequence:</span> {tontine.frequency}
              </p>
            </div>

            <button
              onClick={() => handleJoinRequest(tontine.id)}
              className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 flex items-center justify-center space-x-2"
            >
              <span>Demande d'adhésion</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}