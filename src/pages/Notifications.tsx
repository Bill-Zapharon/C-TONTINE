import React from 'react';
import { Bell, UserPlus, CreditCard } from 'lucide-react';

export default function Notifications() {
  const notifications = [
    {
      id: 1,
      type: 'joinRequest',
      message: 'John Doe requested to join Family Tontine',
      time: '2 hours ago',
      read: false
    },
    {
      id: 2,
      type: 'loanRequest',
      message: 'Your loan request has been approved',
      time: '1 day ago',
      read: true
    },
    {
      id: 3,
      type: 'payment',
      message: 'Monthly contribution received',
      time: '2 days ago',
      read: true
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Notifications</h1>
      
      <div className="bg-white rounded-lg shadow">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 border-b last:border-0 ${
              !notification.read ? 'bg-blue-50' : ''
            }`}
          >
            <div className="flex items-start space-x-4">
              <div className={`p-2 rounded-full ${
                notification.type === 'joinRequest' ? 'bg-green-100' :
                notification.type === 'loanRequest' ? 'bg-orange-100' : 'bg-blue-100'
              }`}>
                {notification.type === 'joinRequest' ? (
                  <UserPlus className="w-5 h-5 text-green-600" />
                ) : notification.type === 'loanRequest' ? (
                  <CreditCard className="w-5 h-5 text-orange-600" />
                ) : (
                  <Bell className="w-5 h-5 text-blue-600" />
                )}
              </div>
              <div className="flex-1">
                <p className={`${!notification.read ? 'font-medium' : ''}`}>
                  {notification.message}
                </p>
                <p className="text-sm text-gray-500">{notification.time}</p>
              </div>
              {!notification.read && (
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}