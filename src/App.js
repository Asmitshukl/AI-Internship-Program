import React, { useState } from 'react';
import { MapPin, Search, Bot, MessageCircle, X, Send, Briefcase, Clock, Star, Users, Award, Filter, Mail, Phone, Building, Globe, User, Eye, EyeOff } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [showChatbot, setShowChatbot] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [locationFilter, setLocationFilter] = useState('');
  const [durationFilter, setDurationFilter] = useState('');
  const [stipendFilter, setStipendFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    college: ''
  });
  const [showPassword, setShowPassword] = useState(false);

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
    },
    {
      id: 6,
      title: "Data Science Intern",
      company: "DataViz Inc",
      location: "Chennai",
      duration: "4 months",
      type: "Hybrid",
      skills: ["Python", "Machine Learning", "SQL"],
      rating: 4.6,
      stipend: "₹28,000/month",
      applicants: 156,
      description: "Work on predictive models and data visualization projects",
      posted: "1 week ago"
    },
    {
      id: 7,
      title: "UI/UX Design Intern",
      company: "DesignStudio",
      location: "Gurgaon",
      duration: "3 months",
      type: "Remote",
      skills: ["Figma", "User Research", "Prototyping"],
      rating: 4.7,
      stipend: "₹20,000/month",
      applicants: 98,
      description: "Design user interfaces and conduct usability testing",
      posted: "2 days ago"
    },
    {
      id: 8,
      title: "Business Analyst Intern",
      company: "ConsultCorp",
      location: "Noida",
      duration: "5 months",
      type: "On-site",
      skills: ["Excel", "PowerBI", "SQL"],
      rating: 4.4,
      stipend: "₹26,000/month",
      applicants: 203,
      description: "Analyze business processes and create detailed reports",
      posted: "4 days ago"
    },
    {
      id: 9,
      title: "Content Writing Intern",
      company: "MediaHub",
      location: "Delhi",
      duration: "3 months",
      type: "Remote",
      skills: ["Content Writing", "SEO", "WordPress"],
      rating: 4.3,
      stipend: "₹15,000/month",
      applicants: 145,
      description: "Create engaging content for blogs and social media",
      posted: "1 week ago"
    },
    {
      id: 10,
      title: "Finance Intern",
      company: "FinCorp",
      location: "Mumbai",
      duration: "4 months",
      type: "On-site",
      skills: ["Financial Analysis", "Excel", "PowerPoint"],
      rating: 4.6,
      stipend: "₹24,000/month",
      applicants: 167,
      description: "Support financial planning and analysis activities",
      posted: "3 days ago"
    },
    {
      id: 11,
      title: "HR Intern",
      company: "PeopleFirst",
      location: "Bangalore",
      duration: "3 months",
      type: "Hybrid",
      skills: ["Recruitment", "Communication", "MS Office"],
      rating: 4.4,
      stipend: "₹16,000/month",
      applicants: 89,
      description: "Assist with recruitment and employee engagement activities",
      posted: "2 days ago"
    },
    {
      id: 12,
      title: "Research Intern",
      company: "InnoResearch",
      location: "Pune",
      duration: "6 months",
      type: "On-site",
      skills: ["Research", "Data Analysis", "Report Writing"],
      rating: 4.5,
      stipend: "₹20,000/month",
      applicants: 76,
      description: "Conduct market research and prepare detailed reports",
      posted: "5 days ago"
    },
    {
      id: 13,
      title: "Cybersecurity Intern",
      company: "SecureNet",
      location: "Bangalore",
      duration: "4 months",
      type: "On-site",
      skills: ["Cybersecurity", "Python", "Network Security"],
      rating: 4.8,
      stipend: "₹32,000/month",
      applicants: 234,
      description: "Work on security assessments and threat analysis",
      posted: "6 days ago"
    },
    {
      id: 14,
      title: "Mobile App Development Intern",
      company: "AppMakers",
      location: "Hyderabad",
      duration: "5 months",
      type: "Hybrid",
      skills: ["React Native", "Flutter", "Firebase"],
      rating: 4.7,
      stipend: "₹27,000/month",
      applicants: 189,
      description: "Develop cross-platform mobile applications",
      posted: "1 week ago"
    },
    {
      id: 15,
      title: "Social Media Marketing Intern",
      company: "SocialBuzz",
      location: "Delhi",
      duration: "3 months",
      type: "Remote",
      skills: ["Social Media", "Canva", "Analytics"],
      rating: 4.2,
      stipend: "₹14,000/month",
      applicants: 267,
      description: "Manage social media accounts and create engaging content",
      posted: "2 days ago"
    },
    {
      id: 16,
      title: "DevOps Intern",
      company: "CloudTech",
      location: "Chennai",
      duration: "6 months",
      type: "On-site",
      skills: ["AWS", "Docker", "Kubernetes"],
      rating: 4.9,
      stipend: "₹38,000/month",
      applicants: 145,
      description: "Work with cloud infrastructure and deployment pipelines",
      posted: "4 days ago"
    },
    {
      id: 17,
      title: "Sales Intern",
      company: "SalesPro",
      location: "Gurgaon",
      duration: "4 months",
      type: "Hybrid",
      skills: ["Sales", "CRM", "Communication"],
      rating: 4.3,
      stipend: "₹19,000/month",
      applicants: 198,
      description: "Support sales team with lead generation and client outreach",
      posted: "3 days ago"
    },
    {
      id: 18,
      title: "Graphic Design Intern",
      company: "CreativeStudio",
      location: "Mumbai",
      duration: "3 months",
      type: "Remote",
      skills: ["Photoshop", "Illustrator", "InDesign"],
      rating: 4.6,
      stipend: "₹17,000/month",
      applicants: 156,
      description: "Create visual designs for marketing materials and websites",
      posted: "1 week ago"
    },
    {
      id: 19,
      title: "Quality Assurance Intern",
      company: "TestLab",
      location: "Pune",
      duration: "5 months",
      type: "On-site",
      skills: ["Testing", "Selenium", "JIRA"],
      rating: 4.5,
      stipend: "₹23,000/month",
      applicants: 123,
      description: "Perform manual and automated testing of software applications",
      posted: "2 days ago"
    },
    {
      id: 20,
      title: "Operations Intern",
      company: "OpsCorp",
      location: "Noida",
      duration: "4 months",
      type: "Hybrid",
      skills: ["Operations", "Process Improvement", "Excel"],
      rating: 4.4,
      stipend: "₹21,000/month",
      applicants: 167,
      description: "Optimize operational processes and support daily operations",
      posted: "5 days ago"
    }
  ];

  const skillsList = [
    "Product Strategy", "Analytics", "User Research", "Agile", "Data Analysis", "SQL", 
    "Python", "Excel", "SEO", "Content Marketing", "React", "Node.js", "Machine Learning", 
    "Figma", "PowerBI", "Prototyping", "Content Writing", "WordPress", "Financial Analysis", 
    "PowerPoint", "Recruitment", "Communication", "MS Office", "Research", "Report Writing",
    "Cybersecurity", "Network Security", "React Native", "Flutter", "Firebase", "Social Media",
    "Canva", "AWS", "Docker", "Kubernetes", "Sales", "CRM", "Photoshop", "Illustrator",
    "InDesign", "Testing", "Selenium", "JIRA", "Operations", "Process Improvement"
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

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    alert('Account created successfully! You can now access personalized internship recommendations.');
    setCurrentPage('home');
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

  if (currentPage === 'signup') {
    return (
      <div className="min-h-screen bg-gray-50">
        {renderNavigation()}
        <div className="max-w-md mx-auto px-4 py-12">
          <div className="bg-white rounded-lg shadow p-8">
            <h1 className="text-2xl font-bold text-center mb-6">Create Your Account</h1>
            <p className="text-gray-600 text-center mb-6">Join thousands of students finding their dream internships</p>
            <form onSubmit={handleSignupSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={signupData.name}
                  onChange={(e) => setSignupData({...signupData, name: e.target.value})}
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={signupData.email}
                  onChange={(e) => setSignupData({...signupData, email: e.target.value})}
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={signupData.password}
                    onChange={(e) => setSignupData({...signupData, password: e.target.value})}
                    placeholder="Create a strong password"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-2.5"
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
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={signupData.phone}
                  onChange={(e) => setSignupData({...signupData, phone: e.target.value})}
                  placeholder="+91 9876543210"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">College/University</label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={signupData.college}
                  onChange={(e) => setSignupData({...signupData, college: e.target.value})}
                  placeholder="Enter your college name"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Create Account
              </button>
            </form>
            <p className="text-center text-sm text-gray-600 mt-4">
              Already have an account? <span className="text-blue-600 cursor-pointer hover:underline">Sign in</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'about') {
    return (
      <div className="min-h-screen bg-gray-50">
        {renderNavigation()}
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-white rounded-lg shadow p-8">
            <h1 className="text-3xl font-bold mb-6">About InternAI</h1>
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-6 text-lg">
                InternAI is India's leading internship platform that connects students with top companies 
                for meaningful internship opportunities. We use AI-powered matching to help students find 
                the perfect internships based on their skills, interests, and career goals.
              </p>
              
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                To bridge the gap between students and industry by providing personalized internship 
                recommendations and skill development resources. We believe every student deserves 
                access to quality internships that can shape their career trajectory.
              </p>

              <h2 className="text-2xl font-bold mb-4">Why Choose InternAI?</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <Bot className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">AI-Powered Matching</h3>
                    <p className="text-gray-600 text-sm">
                      Our advanced algorithms match you with internships that align perfectly with your skills, interests, and career aspirations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Building className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Top Companies</h3>
                    <p className="text-gray-600 text-sm">
                      Partner with leading companies across various industries including tech, finance, marketing, and more for quality internships.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Skill Development</h3>
                    <p className="text-gray-600 text-sm">
                      Get personalized learning recommendations to improve your skills and increase your chances of landing your dream internship.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Community Support</h3>
                    <p className="text-gray-600 text-sm">
                      Join a community of like-minded students and get guidance from industry experts and successful alumni.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Our Impact</h2>
              <div className="grid grid-cols-3 gap-6 text-center mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">15K+</div>
                  <div className="text-gray-600">Active Students</div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">800+</div>
                  <div className="text-gray-600">Partner Companies</div>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600">95%</div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Our Journey</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2020, InternAI started with a simple vision: to make quality internships accessible 
                to every student in India. Today, we're proud to have helped thousands of students kickstart 
                their careers with meaningful internship experiences.
              </p>
              <p className="text-gray-600">
                Our platform continues to evolve, incorporating the latest in AI technology and user feedback 
                to provide the best possible experience for both students and employers.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'contact') {
    return (
      <div className="min-h-screen bg-gray-50">
        {renderNavigation()}
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-white rounded-lg shadow p-8">
            <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
            <p className="text-gray-600 mb-8">
              Have questions or need support? We're here to help! Reach out to us through any of the channels below.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-600 mr-3" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-gray-600">support@internai.com</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-600 mr-3" />
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="text-gray-600">+91 9876543210</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                    <div>
                      <div className="font-medium">Address</div>
                      <div className="text-gray-600">123 Tech Park, Sector 62, Noida, UP 201301</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-blue-600 mr-3" />
                    <div>
                      <div className="font-medium">Website</div>
                      <div className="text-gray-600">www.internai.com</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-3">Office Hours</h3>
                  <div className="space-y-1 text-gray-600">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                  <div className="space-y-2">
                    <div className="text-blue-600 cursor-pointer hover:underline">FAQ</div>
                    <div className="text-blue-600 cursor-pointer hover:underline">Help Center</div>
                    <div className="text-blue-600 cursor-pointer hover:underline">Terms of Service</div>
                    <div className="text-blue-600 cursor-pointer hover:underline">Privacy Policy</div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Send us a Message</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>General Inquiry</option>
                      <option>Technical Support</option>
                      <option>Account Issues</option>
                      <option>Partnership</option>
                      <option>Feedback</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {renderNavigation()}

      {currentPage === 'home' ? (
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
                <button 
                  onClick={() => setCurrentPage('customize')}
                  className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
                >
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
        </>
      ) : (
        <>
          {/* Customize Page */}
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
                <button 
                  onClick={() => setCurrentPage('home')}
                  className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
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
        </>
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
    </div>
  );
}

export default App;