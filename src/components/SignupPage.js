import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const SignupPage = ({ onSuccess, onSwitchToLogin }) => {
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    college: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      alert('Account created successfully! You can now access personalized internship recommendations.');
      if (onSuccess) {
        onSuccess();
      }
    }, 1000);
  };

  const handleChange = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value
    });
  };

  const handleSwitchToLogin = () => {
    if (onSwitchToLogin) {
      onSwitchToLogin();
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Create Your Account</h1>
        <p className="text-gray-600 text-center mb-6">Join thousands of students finding their dream internships</p>
        
        <form onSubmit={handleSignupSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={signupData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={signupData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                value={signupData.password}
                onChange={handleChange}
                placeholder="Create a strong password"
              />
              <button
                type="button"
                className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={signupData.phone}
              onChange={handleChange}
              placeholder="+91 9876543210"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">College/University</label>
            <input
              type="text"
              name="college"
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={signupData.college}
              onChange={handleChange}
              placeholder="Enter your college name"
            />
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-lg font-medium transition-colors ${
              loading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700'
            } text-white`}
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>
        
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{' '}
          <button 
            type="button"
            className="text-blue-600 hover:underline font-medium cursor-pointer"
            onClick={handleSwitchToLogin}
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;