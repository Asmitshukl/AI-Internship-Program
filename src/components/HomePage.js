import React, { useState } from 'react';
import { MapPin, Search, Bot, MessageCircle, X, Send, Clock, Star, Users, Filter } from 'lucide-react';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showChatbot, setShowChatbot] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [durationFilter, setDurationFilter] = useState('');
  const [stipendFilter, setStipendFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const mockInternships = [
    {
      id: 1,
      title: "Product Management Intern",
      company: "TechCorp",
      location: "Delhi",
      duration: "3 months",
      type: "Remote",
      skills: ["Product Strategy", "Analytics"],
      rating: 4.8,
      stipend: "₹25,000/month",
      applicants: 156,
      description: "Work on product roadmap and user research with senior PMs",
      posted: "2 days ago"
    },
    {
      id: 2,
      title: "Associate Product Manager",
      company: "StartupHub",
      location: "Bangalore",
      duration: "6 months",
      type: "Hybrid",
      skills: ["Agile", "Data Analysis"],
      rating: 4.6,
      stipend: "₹30,000/month",
      applicants: 89,
      description: "Lead cross-functional teams and drive product development",
      posted: "1 week ago"
    },
    {
      id: 3,
      title: "Junior PM Intern",
      company: "InnovateLabs",
      location: "Mumbai",
      duration: "4 months",
      type: "On-site",
      skills: ["SQL", "A/B Testing"],
      rating: 4.7,
      stipend: "₹22,000/month",
      applicants: 234,
      description: "Support product team with market research and analysis",
      posted: "3 days ago"
    },
    {
      id: 4,
      title: "Digital Marketing Intern",
      company: "MarketPro",
      location: "Pune",
      duration: "3 months",
      type: "Remote",
      skills: ["SEO", "Content Marketing"],
      rating: 4.5,
      stipend: "₹18,000/month",
      applicants: 178,
      description: "Create marketing campaigns and analyze performance metrics",
      posted: "1 day ago"
    },
    {
      id: 5,
      title: "Software Development Intern",
      company: "CodeCraft",
      location: "Hyderabad",
      duration: "6 months",
      type: "On-site",
      skills: ["Python", "React", "Node.js"],
      rating: 4.9,
      stipend: "₹35,000/month",
      applicants: 312,
      description: "Build scalable web applications using modern technologies",
      posted: "5 days ago"
    }
  ];

  const locations = ["Delhi", "Bangalore", "Mumbai", "Pune", "Hyderabad", "Chennai", "Gurgaon", "Noida"];
  const durations = ["3 months", "4 months", "5 months", "6 months"];
  const types = ["Remote", "On-site", "Hybrid"];
  const stipendRanges = ["₹10,000-15,000", "₹15,000-20,000", "₹20,000-25,000", "₹25,000-30,000", "₹30,000+"];

  const handleChatSubmit = () => {
    if (!chatInput.trim()) return;
    
    setChatMessages(prev => [...prev, { type: 'user', content: chatInput }]);
    
    setTimeout(() => {
      let response = "I can help you with skill development! What specific area interests you?";
      if (chatInput.toLowerCase().includes('sql')) {
        response = "Great! For SQL, try W3Schools tutorial and practice with sample databases. Also check out SQLBolt for interactive exercises.";
      } else if (chatInput.toLowerCase().includes('analytics')) {
        response = "Analytics is crucial! Try Google Analytics Course and focus on data visualization. Also learn Excel and PowerBI for better data analysis.";
      } else if (chatInput.toLowerCase().includes('strategy')) {
        response = "Product strategy is key! Read 'Inspired' by Marty Cagan and practice creating roadmaps. Also study successful product case studies.";
      } else if (chatInput.toLowerCase().includes('python')) {
        response = "Python is in high demand! Start with Python.org tutorial, then try Codecademy. Practice with real projects on GitHub.";
      } else if (chatInput.toLowerCase().includes('design')) {
        response = "UI/UX Design is exciting! Learn Figma, study design principles, and build a portfolio. Check out Google's UX Design course.";
      } else if (chatInput.toLowerCase().includes('marketing')) {
        response = "Digital marketing is growing fast! Learn Google Ads, Facebook Ads, and content creation. HubSpot Academy has great free courses.";
      }
      setChatMessages(prev => [...prev, { type: 'bot', content: response }]);
    }, 500);
    
    setChatInput('');
  };

  const filteredInternships = mockInternships.filter(internship => {
    const matchesSearch = searchQuery === '' || 
      internship.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      internship.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      internship.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesLocation = locationFilter === '' || internship.location === locationFilter;
    const matchesDuration = durationFilter === '' || internship.duration === durationFilter;
    const matchesType = typeFilter === '' || internship.type === typeFilter;
    
    const matchesStipend = stipendFilter === '' || (() => {
      const stipendAmount = parseInt(internship.stipend.replace(/[₹,/month]/g, ''));
      switch(stipendFilter) {
        case '₹10,000-15,000': return stipendAmount >= 10000 && stipendAmount <= 15000;
        case '₹15,000-20,000': return stipendAmount >= 15000 && stipendAmount <= 20000;
        case '₹20,000-25,000': return stipendAmount >= 20000 && stipendAmount <= 25000;
        case '₹25,000-30,000': return stipendAmount >= 25000 && stipendAmount <= 30000;
        case '₹30,000+': return stipendAmount >= 30000;
        default: return true;
      }
    })();
    
    return matchesSearch && matchesLocation && matchesDuration && matchesType && matchesStipend;
  });

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Find Your Perfect Internship</h1>
          <p className="text-xl mb-8">AI-powered recommendations based on your skills and location</p>
          <div className="flex justify-center items-center space-x-4">
            <div className="bg-white text-gray-700 px-4 py-2 rounded-lg flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              <span>India</span>
            </div>
            <button className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
              Customize Search
            </button>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow p-4 mb-4">
          <div className="flex gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search internships, companies, or skills..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 flex items-center transition-colors"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Search
            </button>
          </div>
          
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4 border-t">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <select 
                  value={locationFilter} 
                  onChange={(e) => setLocationFilter(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">All Locations</option>
                  {locations.map(loc => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                <select 
                  value={durationFilter} 
                  onChange={(e) => setDurationFilter(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">All Durations</option>
                  {durations.map(duration => (
                    <option key={duration} value={duration}>{duration}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                <select 
                  value={typeFilter} 
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">All Types</option>
                  {types.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Stipend Range</label>
                <select 
                  value={stipendFilter} 
                  onChange={(e) => setStipendFilter(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">All Stipends</option>
                  {stipendRanges.map(range => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>
        
        <div className="text-sm text-gray-600 mb-4">
          Showing {filteredInternships.length} of {mockInternships.length} internships
        </div>
      </div>

      {/* Internships */}
      <div className="max-w-6xl mx-auto px-4 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInternships.map((internship) => (
            <div key={internship.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{internship.title}</h3>
                  <p className="text-blue-600 font-medium">{internship.company}</p>
                </div>
                <div className="bg-green-100 px-2 py-1 rounded flex items-center">
                  <Star className="h-3 w-3 text-green-600 mr-1" />
                  <span className="text-sm text-green-700">{internship.rating}</span>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm mb-3">{internship.description}</p>
              
              <div className="space-y-2 mb-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <MapPin className="h-3 w-3 mr-2" />
                  <span>{internship.location}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-3 w-3 mr-2" />
                  <span>{internship.duration} • {internship.type}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-3 w-3 mr-2" />
                  <span>{internship.applicants} applicants • {internship.posted}</span>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-xs text-gray-500 mb-2">Required Skills:</p>
                <div className="flex flex-wrap gap-1">
                  {internship.skills.map((skill, index) => (
                    <span key={index} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="font-bold text-green-600">{internship.stipend}</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {filteredInternships.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <p className="text-gray-500 text-lg mb-2">No internships found matching your criteria.</p>
            <p className="text-gray-400 text-sm">Try adjusting your filters or search terms.</p>
          </div>
        )}
      </div>

      {/* Floating Chat Button */}
      {!showChatbot && (
        <button
          onClick={() => setShowChatbot(true)}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          <MessageCircle className="h-5 w-5" />
        </button>
      )}

      {/* Chatbot */}
      {showChatbot && (
        <div className="fixed bottom-4 right-4 w-80 bg-white rounded-lg shadow-xl border z-50">
          <div className="bg-blue-600 text-white p-3 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center">
              <Bot className="h-4 w-4 mr-2" />
              <span className="font-medium">AI Skills Assistant</span>
            </div>
            <button 
              onClick={() => setShowChatbot(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          
          <div className="h-64 overflow-y-auto p-3">
            {chatMessages.length === 0 ? (
              <div className="text-gray-600 text-sm">
                Hi! I'm here to help you improve your skills for better internship opportunities. 
                Tell me what you'd like to learn - SQL, Python, Analytics, Design, Marketing, or anything else!
              </div>
            ) : (
              <div className="space-y-3">
                {chatMessages.map((message, index) => (
                  <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs p-3 rounded-lg text-sm ${
                      message.type === 'user' 
                        ? 'bg-blue-600 text-white rounded-br-sm' 
                        : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                    }`}>
                      {message.content}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="p-3 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask about skills you want to improve..."
                className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                onKeyPress={(e) => e.key === 'Enter' && handleChatSubmit()}
              />
              <button 
                onClick={handleChatSubmit}
                className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors"
              >
                <Send className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;