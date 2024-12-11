import React from 'react';
import { Calendar, ArrowUpRight, ArrowDownLeft } from 'lucide-react';

export default function History() {
  const transactions = [
    {
      id: 1,
      type: 'contribution',
      amount: 200,
      date: '2024-03-15',
      description: 'Contribution Mensuelle',
      status: 'completé'
    },
    {
      id: 2,
      type: 'loan',
      amount: -500,
      date: '2024-03-10',
      description: 'Demande de Prêt',
      status: 'completé'
    },
    {
      id: 3,
      type: 'payement',
      amount: 100,
      date: '2024-03-05',
      description: 'Payement de Prêt',
      status: 'completé'
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Historique de Transaction</h1>
      
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-4 border-b last:border-0">
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-full ${
                  transaction.amount > 0 ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  {transaction.amount > 0 ? (
                    <ArrowUpRight className="w-5 h-5 text-green-600" />
                  ) : (
                    <ArrowDownLeft className="w-5 h-5 text-red-600" />
                  )}
                </div>
                <div>
                  <p className="font-medium">{transaction.description}</p>
                  <p className="text-sm text-gray-500">{transaction.date}</p>
                </div>
              </div>
              <span className={`font-medium ${
                transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                {transaction.amount > 0 ? '+' : ''}{transaction.amount} XOF
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}