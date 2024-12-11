import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';

export default function CreateTontine() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    contributionAmount: '',
    frequency: 'monthly',
    maxMembers: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Créer Nouvelle Tontine</h1>
        <p className="text-gray-600">Mettez en place une nouvelle tontine et invitez des membres</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nom de la Tontine
          </label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            rows={4}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Montant de Contribution
            </label>
            <input
              type="number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.contributionAmount}
              onChange={(e) => setFormData({ ...formData, contributionAmount: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Fréquence
            </label>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.frequency}
              onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
              required
            >
              <option value="weekly">Hebdomadaire</option>
              <option value="monthly">Mensuel</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Menbres Maximum
          </label>
          <input
            type="number"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={formData.maxMembers}
            onChange={(e) => setFormData({ ...formData, maxMembers: e.target.value })}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-900 text-white py-3 px-6 rounded-lg hover:bg-blue-800 flex items-center justify-center space-x-2"
        >
          <PlusCircle className="w-5 h-5" />
          <span>Créer Tontine</span>
        </button>
      </form>
    </div>
  );
}