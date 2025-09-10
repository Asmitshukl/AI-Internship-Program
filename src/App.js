import React, { useState } from 'react';
import { Briefcase } from 'lucide-react';
import HomePage from './components/HomePage';
import CustomizePage from './components/CustomizePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import SignupPage from './components/SignupPage';
import StatesPage from './components/StatesPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderNavigation = () => (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Briefcase className="h-6 w-6 text-blue-600 mr-2" />
            <span className="text-xl font-bold">InternAI</span>
          </div>
          <div className="flex space-x-6">
            <button
              onClick={() => setCurrentPage('home')}
              className={currentPage === 'home' ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'}
            >
              Home
            </button>
            <button
              onClick={() => setCurrentPage('customize')}
              className={currentPage === 'customize' ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'}
            >
              Customize
            </button>
            <button
              onClick={() => setCurrentPage('states')}
              className={currentPage === 'states' ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'}
            >
              States Data
            </button>
            <button
              onClick={() => setCurrentPage('about')}
              className={currentPage === 'about' ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'}
            >
              About Us
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className={currentPage === 'contact' ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'}
            >
              Contact
            </button>
            <button
              onClick={() => setCurrentPage('signup')}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );

  const renderCurrentPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage />;
      case 'customize':
        return <CustomizePage />;
      case 'states':
        return <StatesPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'signup':
        return <SignupPage onSuccess={() => setCurrentPage('home')} />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {renderNavigation()}
      {renderCurrentPage()}
    </div>
  );
}

export default App;