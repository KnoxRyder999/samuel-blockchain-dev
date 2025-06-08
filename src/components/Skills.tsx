
import React from 'react';
import { Code, Smartphone, Zap, Cloud, Brain, Shield } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      title: "Full-Stack Development",
      icon: Code,
      color: "from-blue-400 to-cyan-400",
      skills: [
        { name: "React", level: 95 },
        { name: "Vue.js", level: 90 },
        { name: "Next.js", level: 88 },
        { name: "Node.js", level: 92 },
        { name: "Laravel", level: 85 },
        { name: "Python", level: 80 }
      ]
    },
    {
      title: "Blockchain Development",
      icon: Shield,
      color: "from-purple-400 to-pink-400",
      skills: [
        { name: "Solidity", level: 95 },
        { name: "Web3.js", level: 90 },
        { name: "Ethers.js", level: 88 },
        { name: "Hardhat", level: 85 },
        { name: "IPFS", level: 82 },
        { name: "Smart Contract Auditing", level: 88 }
      ]
    },
    {
      title: "AI & Automation",
      icon: Brain,
      color: "from-green-400 to-teal-400",
      skills: [
        { name: "OpenAI API", level: 90 },
        { name: "GPT Integration", level: 92 },
        { name: "LangChain", level: 78 },
        { name: "Chatbot Development", level: 85 },
        { name: "NLP", level: 75 },
        { name: "Machine Learning", level: 70 }
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      color: "from-yellow-400 to-orange-400",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Docker", level: 88 },
        { name: "GitHub Actions", level: 90 },
        { name: "Vercel", level: 92 },
        { name: "MongoDB", level: 88 },
        { name: "PostgreSQL", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-black/20">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-500"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} bg-opacity-20 mr-4`}>
                    <IconComponent className={`w-6 h-6 bg-gradient-to-r ${category.color} bg-clip-text`} />
                  </div>
                  <h3 className={`text-xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-white/90 font-medium">{skill.name}</span>
                        <span className="text-white/60">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Notable Achievements */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-white/90">Notable Achievements</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "NFT Marketplace Launch", desc: "Full-stack development for PixelMint" },
              { title: "DAO Hackathon Win", desc: "2nd place at CivicChain Hackathon" },
              { title: "Gas Optimization", desc: "30% improvement in contract performance" },
              { title: "Security Audits", desc: "Multiple smart contract audits completed" }
            ].map((achievement, idx) => (
              <div key={idx} className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300">
                <div className="text-2xl mb-2">🏆</div>
                <h4 className="font-semibold text-white/90 mb-2">{achievement.title}</h4>
                <p className="text-sm text-white/60">{achievement.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
