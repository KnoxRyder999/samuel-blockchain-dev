
import React from 'react';
import { ExternalLink, Github, Calendar, MapPin, User } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: "ChainFarmX – Yield Farming Platform",
      period: "Nov 2023 – May 2024",
      company: "CyberNest Solutions",
      role: "Blockchain Lead Developer",
      tech: ["Solidity", "React", "Web3.js", "Node.js"],
      url: "https://chainfarmx.web.app",
      description: "Led development of secure ERC-20 staking contracts with modular, gas-optimized reward logic. Integrated real-time frontend with staking dashboards, transaction tracking, and analytics.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop",
      color: "from-blue-400 to-cyan-400"
    },
    {
      title: "PixelMint – NFT Marketplace",
      period: "Mar 2022 – Sep 2022",
      company: "CyberNest Solutions",
      role: "Smart Contract & Frontend Developer",
      tech: ["Solidity", "Next.js", "Moralis", "IPFS"],
      url: "https://pixelmint.io",
      description: "Developed full-stack NFT platform with ERC-721 smart contracts, lazy minting, and gas-efficient auctions. Enabled artist profiles, IPFS storage, and MetaMask login.",
      image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&h=400&fit=crop",
      color: "from-purple-400 to-pink-400"
    },
    {
      title: "AutoBrief – AI Business Report Generator",
      period: "Feb 2021 – Jun 2021",
      company: "Softqube Viet",
      role: "Full-Stack Developer",
      tech: ["GPT-4 API", "React", "Python", "MongoDB"],
      url: "https://autobrief-ai.vercel.app",
      description: "Built GPT-powered SaaS tool that converts financial data into natural language summaries. Integrated with Slack and Google Sheets for live team updates and automated report delivery.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      color: "from-green-400 to-teal-400"
    },
    {
      title: "CivicChain – DAO Voting dApp",
      period: "Jul 2023 – Aug 2023",
      company: "Hackathon / Independent",
      role: "Blockchain Developer",
      tech: ["Solidity", "React", "Firebase"],
      url: "https://civicchain-demo.web.app",
      description: "Created a token-gated DAO voting platform with on-chain ballot execution and transparent result tracking. Earned 2nd place at a national Web3 hackathon in Singapore.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop",
      color: "from-yellow-400 to-orange-400",
      award: "🏆 2nd Place Winner"
    },
    {
      title: "LinguaBot – Multilingual AI Chatbot",
      period: "Jan 2021 – Apr 2021",
      company: "Softqube Viet",
      role: "Full-Stack AI Developer",
      tech: ["OpenAI API", "Node.js", "Vue.js"],
      url: "https://linguabot.live",
      description: "Built customizable chatbot supporting 10+ languages with GPT-powered responses, tone control, fallback logic, and basic intent detection for e-commerce platforms.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=400&fit=crop",
      color: "from-indigo-400 to-purple-400"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Highlight Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/30 transition-all duration-500 hover:transform hover:scale-[1.05]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                {project.award && (
                  <div className="absolute top-4 right-4 bg-yellow-500/20 backdrop-blur-sm text-yellow-400 px-3 py-1 rounded-full text-xs font-medium">
                    {project.award}
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                  {project.title}
                </h3>

                <div className="space-y-2 mb-4 text-sm text-white/60">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {project.period}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {project.company}
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    {project.role}
                  </div>
                </div>

                <p className="text-white/80 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-white/10 rounded-md text-xs text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
