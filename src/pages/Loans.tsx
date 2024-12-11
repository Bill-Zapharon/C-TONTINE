import React, { useState } from 'react';
import { CreditCard, ArrowUpRight, ArrowDownLeft } from 'lucide-react';

export default function Loans() {
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [formData, setFormData] = useState({
    amount: '',
    purpose: '',
    paymentMethod: 'celtisCash',
    phoneNumber: '',
    bankName: '',
    accountNumber: '',
    accountHolder: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle loan request submission
    setShowRequestForm(false);
  };

  return (
    <div className="p-6">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Prêt</h1>
          <p className="text-gray-600">Gérer vos prêts et payements </p>
        </div>
        <button
          onClick={() => setShowRequestForm(true)}
          className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 flex items-center space-x-2"
        >
          <CreditCard className="w-5 h-5" />
          <span>Demande de prêt</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Prêt Actif</h2>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Prêt Personnel</span>
                <span className="text-orange-500">500 XOF</span>
              </div>
              <div className="text-sm text-gray-600">
                <p>Date: March 30, 2024</p>
                <div className="mt-2 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
                <p className="mt-1">60% payé</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4"> Historique de Payement</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded">
                  <ArrowUpRight className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium">Payement de Prêt</p>
                  <p className="text-sm text-gray-500">March 15, 2024</p>
                </div>
              </div>
              <p className="text-green-600">100 XOF</p>
            </div>
          </div>
        </div>
      </div>

      {showRequestForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Demander un Prêt</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Montant (XOF)
                </label>
                <input
                  type="number"
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Justificatif
                </label>
                <textarea
                  value={formData.purpose}
                  onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  rows={3}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                Methode de Payement
                </label>
                <select
                  value={formData.paymentMethod}
                  onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                >
                  <option value="celtisCash">Celtis Cash</option>
                </select>
              </div>

              {formData.paymentMethod === 'celtisCash' ? (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="+229 XXXXXXXX"
                    required
                  />
                </div>
              ) : (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bank Name
                    </label>
                    <input
                      type="text"
                      value={formData.bankName}
                      onChange={(e) => setFormData({ ...formData, bankName: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Account Number
                    </label>
                    <input
                      type="text"
                      value={formData.accountNumber}
                      onChange={(e) => setFormData({ ...formData, accountNumber: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Account Holder Name
                    </label>
                    <input
                      type="text"
                      value={formData.accountHolder}
                      onChange={(e) => setFormData({ ...formData, accountHolder: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>
                </>
              )}

              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800"
                >
                  Soumettre
                </button>
                <button
                  type="button"
                  onClick={() => setShowRequestForm(false)}
                  className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300"
                >
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}