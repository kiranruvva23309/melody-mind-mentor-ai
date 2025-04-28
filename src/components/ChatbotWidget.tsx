
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { MessageCircle, X, Send, Music } from 'lucide-react';
import { cn } from "@/lib/utils";
import { toast } from '@/components/ui/sonner';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

// Gemini API configuration
const GEMINI_API_KEY = "AIzaSyBBzm-oHelkUbZMGli4bj6hgrhw8Uq7NRY";
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

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

  // Function to call Gemini API
  const callGeminiAPI = async (userMessage: string) => {
    try {
      const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are a helpful, friendly Music Theory Tutor AI. The user is asking: ${userMessage}. 
                  Focus your response on music theory concepts. If the question is not about music theory,
                  politely redirect the conversation back to music theory topics like scales, chords, 
                  intervals, harmony, rhythm, or reading sheet music. Keep your response concise (under 200 words).`
                }
              ]
            }
          ]
        }),
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      
      // Extract the response text from the data
      const aiResponseText = data.candidates?.[0]?.content?.parts?.[0]?.text || 
        "I'm having trouble connecting to my knowledge base right now. Could you try asking me something else about music theory?";
      
      return aiResponseText;
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      return "Sorry, I encountered an issue processing your request. Let's try again with a different question about music theory.";
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
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
    
    try {
      // Get AI response from Gemini
      const aiResponse = await callGeminiAPI(input);
      
      const aiMessage: Message = {
        id: Date.now().toString(),
        content: aiResponse,
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error in chat completion:", error);
      toast.error("Failed to get a response. Please try again.");
      
      const errorMessage: Message = {
        id: Date.now().toString(),
        content: "I'm having trouble connecting to my knowledge base. Let's try again with a different question about music theory.",
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
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
