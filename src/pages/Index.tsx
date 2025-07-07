
import React, { useState, useEffect } from 'react';
import Login from '../components/Login';
import Dashboard from './Dashboard';
import { LocalStorageKeys, getFromLocalStorage, saveToLocalStorage, removeFromLocalStorage } from '../utils/localStorage';

const Index: React.FC = () => {
  const [username, setUsername] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing login on component mount
  useEffect(() => {
    const savedUsername = getFromLocalStorage(LocalStorageKeys.USERNAME);
    if (savedUsername) {
      setUsername(savedUsername);
    }
    setIsLoading(false);
  }, []);

  const handleLogin = (username: string) => {
    setUsername(username);
    saveToLocalStorage(LocalStorageKeys.USERNAME, username);
  };

  const handleLogout = () => {
    setUsername(null);
    removeFromLocalStorage(LocalStorageKeys.USERNAME);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return username ? (
    <Dashboard username={username} onLogout={handleLogout} />
  ) : (
    <Login onLogin={handleLogin} />
  );
};

export default Index;
