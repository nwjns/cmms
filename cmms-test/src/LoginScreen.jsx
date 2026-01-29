import React, { useState } from 'react';
//import { useAuth } from './context/AuthContext';
import { Lock, User, LogIn, AlertCircle } from 'lucide-react';

export const LoginScreen = () => {
//  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showCredentials, setShowCredentials] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    const success = login(username, password);
    if (!success) {
      setError('Invalid username or password');
    }
  };

  const quickLogin = (user, pass) => {
    setUsername(user);
    setPassword(pass);
    setTimeout(() => {
      login(user, pass);
    }, 100);
  };

  const credentials = [
    { username: 'admin', password: 'admin123', role: 'System Admin' },
    { username: 'manager', password: 'pass123', role: 'Maint. Manager' },
    { username: 'super', password: 'pass123', role: 'Supervisor' },
    { username: 'tech', password: 'pass123', role: 'Technician' },
    { username: 'parts', password: 'pass123', role: 'Inventory Mgr' },
    { username: 'asset', password: 'pass123', role: 'Asset Mgr' },
    { username: 'user', password: 'pass123', role: 'Requester' },
    { username: 'ops', password: 'pass123', role: 'Ops Manager' },
    { username: 'safety', password: 'pass123', role: 'Safety Officer' },
  ];

  return (
<div style={{ background: 'red', minHeight: '100vh' }}>
      <div className="w-full max-w-md">
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <div className="bg-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-600/50">
            <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h1 className="text-4xl text-white mb-2">NexusMaint</h1>
          <p className="text-blue-200">Computerized Maintenance Management System</p>
        </div>

        {/* Login Card */}
        <div className="bg-slate-800 rounded-2xl shadow-2xl p-8 border border-slate-700">
          <h2 className="text-2xl text-slate-50 mb-6">Sign In</h2>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Username */}
            <div>
              <label className="block text-sm text-slate-300 mb-2">Username</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-slate-900 text-slate-50 pl-10 pr-4 py-3 rounded-lg border border-slate-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="Enter username"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm text-slate-300 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-900 text-slate-50 pl-10 pr-4 py-3 rounded-lg border border-slate-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="Enter password"
                  required
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-900/30 border border-red-600 rounded-lg p-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                <p className="text-sm text-red-400">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              <LogIn className="w-5 h-5" />
              Sign In
            </button>
          </form>

          {/* Demo Credentials Toggle */}
          <button
            onClick={() => setShowCredentials(!showCredentials)}
            className="w-full mt-4 text-sm text-blue-400 hover:text-blue-300 transition-colors"
          >
            {showCredentials ? 'Hide' : 'Show'} Demo Credentials
          </button>
        </div>

        {/* Demo Credentials */}
        {showCredentials && (
          <div className="mt-4 bg-slate-800 rounded-2xl shadow-2xl p-6 border border-slate-700">
            <h3 className="text-lg text-slate-50 mb-4">Quick Login (Demo)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {credentials.map((cred) => (
                <button
                  key={cred.username}
                  onClick={() => quickLogin(cred.username, cred.password)}
                  className="bg-slate-900 hover:bg-slate-700 border border-slate-700 rounded-lg p-3 text-left transition-colors group"
                >
                  <p className="text-sm text-slate-50 group-hover:text-blue-400 transition-colors">{cred.role}</p>
                  <p className="text-xs text-slate-500 mt-1">{cred.username}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <p className="text-center text-slate-500 text-sm mt-6">
          NexusMaint v2.0 • Prototype Demo
        </p>
      </div>
    </div>
  );
};