import React from 'react';
import {
  BookOpen,
  Users,
  BarChart3,
  PlayCircle,
  Compass,
  Trophy,
  ArrowRight,
  GraduationCap
} from 'lucide-react';

function FeatureCard({ icon: Icon, title, description }: { 
  icon: React.ElementType, 
  title: string, 
  description: string 
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-indigo-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function App() {
  const features = [
    {
      icon: Compass,
      title: "Personalized Learning Paths",
      description: "Customized content and recommendations based on your learning style and progress."
    },
    {
      icon: BookOpen,
      title: "Interactive Modules",
      description: "Engage with dynamic content through quizzes, animations, and hands-on activities."
    },
    {
      icon: Users,
      title: "Community & Collaboration",
      description: "Connect with peers, join study groups, and participate in academic discussions."
    },
    {
      icon: BarChart3,
      title: "Performance Tracking",
      description: "Monitor your progress with detailed analytics and performance insights."
    },
    {
      icon: PlayCircle,
      title: "Live Sessions & Recordings",
      description: "Attend live lectures or watch recorded sessions at your convenience."
    },
    {
      icon: Trophy,
      title: "Achievement System",
      description: "Earn badges and certificates as you progress through your learning journey."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <GraduationCap className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Welcome to MindSync
            </h1>
            <p className="text-xl mb-8 text-indigo-100">
              Empowering students with personalized learning experiences and collaborative opportunities.
            </p>
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-colors inline-flex items-center">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 -mt-10">
        <div className="bg-white rounded-lg shadow-lg p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-600">10,000+</div>
            <div className="text-gray-600">Active Students</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-600">500+</div>
            <div className="text-gray-600">Course Materials</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-600">95%</div>
            <div className="text-gray-600">Student Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Learning Experience?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already benefiting from our innovative learning platform.
          </p>
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors">
            Join Now
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 MindSync. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;