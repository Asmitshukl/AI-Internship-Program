import React from 'react';
import { Bot, Building, Award, Users } from 'lucide-react';

const AboutPage = () => {
  return (
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
  );
};

export default AboutPage;