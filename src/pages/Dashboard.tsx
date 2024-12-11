import React from 'react';
import { PiggyBank, Users, CreditCard, ArrowUpRight } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Tableau de bord</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Tontines Actives</p>
              <p className="text-2xl font-bold">3</p>
            </div>
            <PiggyBank className="w-12 h-12 text-green-500" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Total Contributions</p>
              <p className="text-2xl font-bold">XOF2,450</p>
            </div>
            <ArrowUpRight className="w-12 h-12 text-blue-900" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Prêts Actifs</p>
              <p className="text-2xl font-bold">1</p>
            </div>
            <CreditCard className="w-12 h-12 text-orange-500" />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Activités Récentes</h2>
          <div className="space-y-4">
            {/* Activity items */}
            <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded">
                  <PiggyBank className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium">Contribution Mensuelle</p>
                  <p className="text-sm text-gray-500">Successful payment</p>
                </div>
              </div>
              <p className="text-green-600">+XOF200</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Mes Tontines</h2>
          <div className="space-y-4">
            {/* Tontine items */}
            <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium">Tontine de Famille</p>
                  <p className="text-sm text-gray-500">12 membres</p>
                </div>
              </div>
              <button className="text-blue-600 hover:underline">Voir</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}