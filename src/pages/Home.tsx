
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Music, BookOpen, Headphones, Book } from 'lucide-react';
import ChatbotWidget from '@/components/ChatbotWidget';

const Home = () => {
  const [showChat, setShowChat] = useState(false);
  
  const handleStartLearning = () => {
    setShowChat(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-music-100 to-music-200 py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 rounded-full bg-music-300/30 -top-20 -left-20 blur-3xl"></div>
          <div className="absolute w-96 h-96 rounded-full bg-music-400/20 bottom-10 right-10 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text leading-tight animate-slide-up">
                Learn Music Theory with AI!
              </h1>
              <p className="text-lg text-gray-700 mb-8 max-w-lg animate-slide-up" style={{ animationDelay: "0.1s" }}>
                Master music theory at your own pace with our interactive AI tutor.
                From scales and chords to rhythm and harmony, we've got you covered.
              </p>
              <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <Button 
                  size="lg" 
                  onClick={handleStartLearning}
                  className="bg-music-600 hover:bg-music-700 text-white px-8"
                >
                  Start Learning
                </Button>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="border-music-500 text-music-600 hover:bg-music-100">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-white/80 backdrop-blur-md rounded-full border border-music-200 shadow-lg"></div>
                <div className="absolute top-10 left-10 music-note">
                  <Music className="h-16 w-16 text-music-500" />
                </div>
                <div className="absolute top-20 right-10 music-note">
                  <BookOpen className="h-12 w-12 text-music-600" />
                </div>
                <div className="absolute bottom-20 left-20 music-note">
                  <Headphones className="h-14 w-14 text-music-400" />
                </div>
                <div className="absolute bottom-14 right-20 music-note">
                  <Book className="h-10 w-10 text-music-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
            Why Learn with MelodyMind?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-music-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <BookOpen className="h-7 w-7 text-music-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Personalized Learning</h3>
              <p className="text-gray-600">
                Our AI tutor adapts to your level and learning style, providing customized lessons and examples.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-music-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Music className="h-7 w-7 text-music-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Interactive Exercises</h3>
              <p className="text-gray-600">
                Practice what you learn with interactive exercises and get immediate feedback to improve.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-music-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Headphones className="h-7 w-7 text-music-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Learn Anytime</h3>
              <p className="text-gray-600">
                Access your music theory tutor 24/7, learn at your own pace, and revisit concepts as needed.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Ready to Master Music Theory?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-lg mx-auto">
            Start your journey with our AI tutor and unlock the language of music at your fingertips.
          </p>
          <Button 
            size="lg" 
            onClick={handleStartLearning}
            className="bg-music-600 hover:bg-music-700 text-white px-8"
          >
            Start Learning Now
          </Button>
        </div>
      </section>
      
      {/* Chatbot Widget */}
      <ChatbotWidget />
    </div>
  );
};

export default Home;
