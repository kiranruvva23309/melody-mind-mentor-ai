
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { MessageCircle, X, Send, Music } from 'lucide-react';
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hi! I\'m your AI Music Theory Tutor. What would you like to learn about today? (examples: scales, chords, intervals, rhythm)',
      isUser: false,
      timestamp: new Date(),
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === '') return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      isUser: true,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    
    // Simulate AI response with delay
    setTimeout(() => {
      let response = '';
      const userText = input.toLowerCase();
      
      if (userText.includes('beginner') || userText.includes('start')) {
        response = "Great! For beginners, I recommend starting with the basics of reading sheet music and understanding basic note values. Would you like me to explain that first, or would you prefer to start with another topic?";
      } else if (userText.includes('chord') || userText.includes('chords')) {
        response = "Chords are groups of notes played together. The most basic chord is the triad, which consists of three notes: the root, third, and fifth. For example, a C major triad contains C, E, and G. Would you like to learn about different chord types?";
      } else if (userText.includes('scale') || userText.includes('scales')) {
        response = "Scales are sequences of notes organized by pitch. The most common scale is the major scale, which follows the pattern: whole, whole, half, whole, whole, whole, half step. For example, the C major scale is C, D, E, F, G, A, B, C. Would you like to explore other scales?";
      } else if (userText.includes('interval') || userText.includes('intervals')) {
        response = "Intervals are the distances between notes. We measure them by counting the number of steps on the staff. For example, from C to E is a major third. Intervals are crucial for understanding harmony and melody. What specific intervals would you like to know about?";
      } else if (userText.includes('rhythm') || userText.includes('beat') || userText.includes('time')) {
        response = "Rhythm refers to the pattern of time in music. It involves note durations, rests, and time signatures. The most common time signature is 4/4, which means there are 4 beats per measure and a quarter note gets 1 beat. Would you like to learn about note values or time signatures?";
      } else if (userText.includes('note') || userText.includes('read') || userText.includes('sheet')) {
        response = "Reading sheet music involves understanding the five-line staff, clefs, notes, and their positions. Notes on lines and spaces represent different pitches. In the treble clef, the lines from bottom to top are E, G, B, D, F ('Every Good Boy Does Fine'), and the spaces spell FACE. Would you like more details about reading music notation?";
      } else if (userText.includes('hello') || userText.includes('hi') || userText.includes('hey')) {
        response = "Hello! I'm your AI Music Theory Tutor. What's your current level of music theory knowledge? (beginner, intermediate, advanced) This will help me tailor my explanations for you.";
      } else {
        response = "That's an interesting topic! I can help you understand music theory concepts like scales, chords, intervals, rhythm, or reading sheet music. What specific aspect would you like me to explain?";
      }
      
      const aiMessage: Message = {
        id: Date.now().toString(),
        content: response,
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          onClick={toggleChat}
          className={cn(
            "h-14 w-14 rounded-full shadow-lg transition-all duration-300",
            !isOpen ? "bg-music-600 hover:bg-music-700" : "bg-gray-600 hover:bg-gray-700"
          )}
        >
          {!isOpen ? <MessageCircle className="h-6 w-6" /> : <X className="h-6 w-6" />}
        </Button>
      </div>
      
      {/* Chat Window */}
      <div
        className={cn(
          "fixed bottom-24 right-6 w-[350px] sm:w-[400px] z-50 transition-all duration-300 transform",
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
        )}
      >
        <Card className="glass-card overflow-hidden shadow-xl border border-music-200">
          <CardHeader className="bg-music-500 text-white p-4">
            <div className="flex items-center space-x-2">
              <Music className="h-6 w-6" />
              <h3 className="font-medium text-lg">Music Theory Tutor</h3>
            </div>
          </CardHeader>
          
          <CardContent className="p-0">
            <div className="h-[400px] overflow-y-auto p-4 bg-white/50 backdrop-blur-sm">
              {messages.map(message => (
                <div 
                  key={message.id} 
                  className={cn(
                    "mb-4 max-w-[85%] animate-slide-up",
                    message.isUser ? "ml-auto" : "mr-auto"
                  )}
                >
                  <div 
                    className={cn(
                      "rounded-xl p-3 shadow-sm",
                      message.isUser 
                        ? "bg-music-500 text-white rounded-br-none" 
                        : "bg-gray-100 rounded-bl-none"
                    )}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex space-x-2 items-center mb-4 max-w-[85%] mr-auto">
                  <div className="bg-gray-100 rounded-xl p-3 shadow-sm rounded-bl-none">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse"></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </CardContent>
          
          <CardFooter className="p-3 bg-white border-t border-gray-100">
            <form onSubmit={handleSubmit} className="flex w-full space-x-2">
              <Input
                placeholder="Ask about music theory..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-grow bg-white"
              />
              <Button type="submit" size="icon" disabled={isTyping || input.trim() === ''}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default ChatbotWidget;
