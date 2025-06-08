
import React, { useState } from 'react';
import { Mail, Linkedin, MessageCircle, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "sanderberg786@gmail.com",
      link: "mailto:sanderberg786@gmail.com",
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Samuel Lee",
      link: "https://www.linkedin.com/in/ssammylee",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: MessageCircle,
      title: "Telegram",
      value: "@KnoxRyder999",
      link: "https://t.me/KnoxRyder999",
      color: "from-green-400 to-teal-400"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Let's Work Together
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center mb-6">
                <MapPin className="w-6 h-6 text-blue-400 mr-3" />
                <div>
                  <h3 className="text-xl font-semibold text-white">Based in Singapore</h3>
                  <p className="text-white/60">Available for remote work worldwide</p>
                </div>
              </div>
              
              <p className="text-white/80 leading-relaxed mb-6">
                Ready to bring your blockchain vision to life? I specialize in smart contract development, 
                DeFi platforms, and full-stack Web3 applications. Let's discuss your project requirements.
              </p>

              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <a
                      key={index}
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 group"
                    >
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${method.color} bg-opacity-20 mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">{method.title}</h4>
                        <p className="text-white/60 text-sm">{method.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-6 text-white">Send me a message</h3>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-green-400 mb-2">Message Sent!</h4>
                <p className="text-white/60">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-2">Name</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-blue-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-2">Email</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-blue-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">Subject</label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-blue-500"
                    placeholder="Project inquiry"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-blue-500 resize-none"
                    placeholder="Tell me about your project requirements..."
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-3 rounded-xl transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-white/60 text-sm">
            © 2024 Samuel Lee. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};
