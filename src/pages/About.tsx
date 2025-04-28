
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Music,
  FileText,
  BookOpen,
  Clock,
  Binary,
  LayoutGrid
} from 'lucide-react';
import ChatbotWidget from '@/components/ChatbotWidget';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-music-100 to-music-200 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About MelodyMind</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Your interactive AI companion for mastering music theory concepts at your own pace.
          </p>
        </div>
      </section>
      
      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 gradient-text">Our Mission</h2>
              <p className="text-gray-700 mb-6">
                At MelodyMind, we believe that understanding music theory should be accessible to everyone. 
                Our mission is to demystify music theory concepts through interactive, personalized learning 
                experiences powered by artificial intelligence.
              </p>
              <p className="text-gray-700">
                Whether you're a beginner just starting to read sheet music or an intermediate musician 
                looking to understand complex chord progressions, our AI tutor adapts to your level 
                and learning style to help you master music theory concepts effectively.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-music-100 p-8 rounded-full w-64 h-64 flex items-center justify-center animate-pulse-subtle">
                <Music className="h-32 w-32 text-music-500" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* What You Can Learn */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text">
            What You Can Learn
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="bg-music-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Music className="h-6 w-6 text-music-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Scales & Keys</h3>
              <p className="text-gray-600">
                Learn about major, minor, and modal scales. Understand key signatures and their relationships.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="bg-music-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <LayoutGrid className="h-6 w-6 text-music-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Chords & Harmony</h3>
              <p className="text-gray-600">
                Master chord construction, progressions, inversions, and harmonic analysis.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="bg-music-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-music-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Reading Notation</h3>
              <p className="text-gray-600">
                Develop sight-reading skills, understand clefs, notes, accidentals, and musical symbols.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="bg-music-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-music-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Rhythm & Time</h3>
              <p className="text-gray-600">
                Explore time signatures, note values, rhythmic patterns, and tempo markings.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="bg-music-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-music-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Form & Analysis</h3>
              <p className="text-gray-600">
                Understand musical structure, phrases, motifs, and compositional techniques.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="bg-music-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Binary className="h-6 w-6 text-music-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Ear Training</h3>
              <p className="text-gray-600">
                Develop your ability to identify intervals, chords, scales, and melodic patterns by ear.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text">
            How Our AI Tutor Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto bg-music-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-music-600">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Tell Us Your Level</h3>
              <p className="text-gray-600">
                Start by letting our AI know if you're a beginner, intermediate, or advanced student.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto bg-music-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-music-600">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Ask Questions</h3>
              <p className="text-gray-600">
                Ask about any music theory concept you want to learn or practice.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto bg-music-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-music-600">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Learn & Practice</h3>
              <p className="text-gray-600">
                Get personalized explanations and interactive exercises to master the concepts.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-music-500 to-music-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Musical Journey?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of students already learning music theory with our AI tutor.
          </p>
          <Link to="/">
            <Button size="lg" className="bg-white text-music-600 hover:bg-gray-100">
              Start Learning Now
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Chatbot Widget */}
      <ChatbotWidget />
    </div>
  );
};

export default About;
