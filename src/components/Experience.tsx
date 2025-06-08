
import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      company: "Freelance Blockchain Developer",
      role: "Blockchain Developer & Consultant",
      period: "Feb 2024 – Present",
      location: "Remote — Singapore-based",
      description: "End-to-end blockchain development and consulting, including DeFi tools, DAO systems, and NFT utility contracts.",
      highlights: [
        "Managing multiple Web3 ventures and startups",
        "Smart contract audits and security consulting",
        "Full-stack dApp development",
        "Tokenomics design and implementation"
      ],
      color: "from-blue-400 to-cyan-400"
    },
    {
      company: "CyberNest Solutions",
      role: "Smart Contract & dApp Developer",
      period: "Sep 2021 – Jan 2024",
      location: "Remote — Singapore-based",
      description: "Web3 product studio delivering smart contract-based platforms for NFTs, DAOs, and DeFi ecosystems.",
      highlights: [
        "Audited and deployed smart contracts (ERC-20, ERC-721) on EVM chains",
        "Built dApps with MetaMask, Moralis, React/Next.js integration",
        "Optimized gas usage and security design in Solidity projects",
        "Led blockchain architecture decisions"
      ],
      color: "from-purple-400 to-pink-400",
      link: "https://www.linkedin.com/company/cybernestsolutions/"
    },
    {
      company: "Softqube Viet",
      role: "Full-Stack Developer with Blockchain & AI Focus",
      period: "Dec 2019 – Aug 2021",
      location: "Remote — Vietnam-based",
      description: "Software development firm delivering AI-powered SaaS and enterprise-grade solutions.",
      highlights: [
        "Developed role-based SaaS platforms with payment integration",
        "Integrated GPT-based reporting and chatbot systems",
        "Led CI/CD improvements via GitHub Actions and AWS",
        "Built scalable microservices architecture"
      ],
      color: "from-green-400 to-teal-400",
      link: "https://www.softqubesolutions.com"
    },
    {
      company: "SkyBit Labs",
      role: "Frontend Developer → Full-Stack Developer",
      period: "Jun 2017 – Nov 2019",
      location: "Remote — Singapore-based",
      description: "Remote-first software studio building productivity tools for startups and distributed teams.",
      highlights: [
        "Built real-time Kanban dashboards with Vue.js and WebSocket",
        "Integrated REST APIs and optimized cloud-based deployment",
        "Participated in internal blockchain R&D (late 2018)",
        "Mentored junior developers"
      ],
      color: "from-yellow-400 to-orange-400",
      link: "https://www.crunchbase.com/organization/skybit-labs"
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-black/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-500 hover:transform hover:scale-[1.02]"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <h3 className={`text-2xl font-bold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                      {exp.company}
                    </h3>
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-3 p-1 text-white/50 hover:text-blue-400 transition-colors duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <h4 className="text-xl text-white/90 mb-2">{exp.role}</h4>
                  <p className="text-white/70 leading-relaxed mb-4">{exp.description}</p>
                </div>
                
                <div className="md:text-right space-y-2 md:ml-6">
                  <div className="flex items-center md:justify-end text-blue-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>
                  <div className="flex items-center md:justify-end text-white/60">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h5 className="text-lg font-semibold text-white/90 mb-3">Key Achievements:</h5>
                <div className="grid md:grid-cols-2 gap-3">
                  {exp.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} mt-2 mr-3 flex-shrink-0`}></div>
                      <span className="text-white/80 text-sm leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
