import React, { useState } from 'react';
import { User, Lock, Bell, CreditCard } from 'lucide-react';

export default function Settings() {
  const [personalInfo, setPersonalInfo] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+229 97000000'
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Paramètre</h1>
      
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center space-x-3 mb-4">
            <User className="w-5 h-5 text-blue-600" />
            <h2 className="text-xl font-semibold">Informations Personnelles</h2>
          </div>
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nom complet
              </label>
              <input
                type="text"
                value={personalInfo.name}
                onChange={(e) => setPersonalInfo({ ...personalInfo, name: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={personalInfo.email}
                onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Téléphone
              </label>
              <input
                type="tel"
                value={personalInfo.phone}
                onChange={(e) => setPersonalInfo({ ...personalInfo, phone: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
          </form>
        </div>

        

            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800"
            >
              Save Changes
            </button>

        </div>
    </div>
  );
}