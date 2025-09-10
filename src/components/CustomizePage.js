import React, { useState } from 'react';
import { Bot, MessageCircle, X, Send, Award } from 'lucide-react';

const CustomizePage = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [showChatbot, setShowChatbot] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');

  const skillsList = [
    "Product Strategy", "Analytics", "User Research", "Agile", "Data Analysis", "SQL", 
    "Python", "Excel", "SEO", "Content Marketing", "React", "Node.js", "Machine Learning", 
    "Figma", "PowerBI", "Prototyping", "Content Writing", "WordPress", "Financial Analysis", 
    "PowerPoint", "Recruitment", "Communication", "MS Office", "Research", "Report Writing",
    "Cybersecurity", "Network Security", "React Native", "Flutter", "Firebase", "Social Media",
    "Canva", "AWS", "Docker", "Kubernetes", "Sales", "CRM", "Photoshop", "Illustrator",
    "InDesign", "Testing", "Selenium", "JIRA", "Operations", "Process Improvement"
  ];

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

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow p-8">
          <h1 className="text-3xl font-bold mb-2">Customize Your Search</h1>
          <p className="text-gray-600 mb-8">Select your skills to get personalized recommendations</p>

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Award className="h-5 w-5 mr-2 text-blue-600" />
              Your Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {skillsList.map((skill) => (
                <button
                  key={skill}
                  onClick={() => {
                    setSelectedSkills(prev => 
                      prev.includes(skill) 
                        ? prev.filter(s => s !== skill)
                        : [...prev, skill]
                    );
                  }}
                  className={`p-3 rounded-lg border text-sm transition-all ${
                    selectedSkills.includes(skill)
                      ? 'border-blue-500 bg-blue-100 text-blue-700'
                      : 'border-gray-200 hover:border-blue-300 text-gray-700'
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>

          {selectedSkills.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Selected Skills ({selectedSkills.length})</h3>
              <div className="flex flex-wrap gap-2">
                {selectedSkills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm flex items-center"
                  >
                    {skill}
                    <button
                      onClick={() => setSelectedSkills(prev => prev.filter(s => s !== skill))}
                      className="ml-2 hover:bg-blue-700 rounded-full p-0.5"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-4">
            <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Find Matching Internships ({selectedSkills.length} skills selected)
            </button>
            <button 
              onClick={() => setShowChatbot(true)}
              className="bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 flex items-center transition-colors"
            >
              <Bot className="h-4 w-4 mr-2" />
              Get AI Help
            </button>
          </div>
        </div>
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

export default CustomizePage;