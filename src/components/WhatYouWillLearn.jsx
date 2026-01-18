import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight, Sparkles, TrendingUp, Shield, BarChart3, Bot, Zap } from 'lucide-react';

const features = {
  main: {
    number: "1",
    title: "Financial Independence",
    description: "Unleash your potential with our comprehensive wealth building strategies and market insights.",
    points: [
      "A → Z of Wealth Creation",
      "Advanced Market Psychology & Mindset",
      "Strategic Portfolio Management"
    ]
  },
  cards: [
    {
      number: "2",
      title: "Market Mastery",
      points: [
        "Technical Analysis Deep Dive",
        "Chart Patterns & Indicators",
        "Price Action Trading",
        "Volume Analysis",
        "Market Cycles"
      ],
      icon: TrendingUp
    },
    {
      number: "3",
      title: "Risk Management",
      points: [
        "How, where & when to enter trades?",
        "Position Sizing Mastery",
        "Stop-Loss Strategies",
        "Portfolio Diversification",
        "Drawdown Control"
      ],
      icon: Shield
    },
    {
      number: "4",
      title: "AI Trading Studio",
      description: "Leverage cutting-edge AI to automate analysis and spot opportunities 24/7.",
      isNew: true,
      icon: Bot
    }
  ]
};

const DotPattern = () => (
    <div className="absolute inset-0 opacity-[0.03]" 
        style={{ 
            backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', 
            backgroundSize: '24px 24px' 
        }} 
    />
);

const CardNumber = ({ children }) => (
    <span className="text-6xl md:text-8xl font-black text-foreground/5 font-playfair absolute top-4 left-6 select-none pointer-events-none">
        {children}
    </span>
);

export default function WhatYouWillLearn() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            
          {/* Main Large Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-card/30 border border-border/40 rounded-[2rem] p-6 md:p-12 relative overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 group"
          >
            <DotPattern />
            {/* Glow Effect */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

            <div className="grid md:grid-cols-2 gap-12 relative z-10 items-center">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <div className="flex items-baseline gap-4">
                            <span className="text-6xl md:text-9xl font-black text-foreground/10 font-playfair leading-[0.8] select-none">1</span>
                            <div>
                                <h3 className="text-4xl md:text-5xl font-bold font-playfair leading-tight">
                                    Financial<br/>
                                    <span className="text-primary">Independence</span>
                                </h3>
                            </div>
                        </div>
                        <p className="text-lg text-muted-foreground pl-2 max-w-md">
                            {features.main.description}
                        </p>
                    </div>
                    <Button className="rounded-full text-base px-8 h-12 bg-primary text-secondary-foreground hover:bg-primary/90 font-bold ml-2 shadow-[0_0_20px_-5px_var(--color-primary)]">
                        Join Waitlist
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                </div>

                <div className="bg-background/20 rounded-3xl p-8 border border-border/40 backdrop-blur-md relative overflow-hidden">
                     {/* Gradient overlay for interaction */}
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10">
                        <div className="flex gap-4 mb-8">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20 flex items-center justify-center">
                                <BarChart3 className="w-6 h-6 text-blue-500" />
                            </div>
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/20 flex items-center justify-center">
                                <Zap className="w-6 h-6 text-purple-500" />
                            </div>
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/10 border border-primary/20 flex items-center justify-center">
                                <Sparkles className="w-6 h-6 text-primary" />
                            </div>
                        </div>
                        <ul className="space-y-4">
                            {features.main.points.map((point, i) => (
                                <li key={i} className="flex items-start gap-3 text-lg">
                                    <span className="text-primary mt-1">＋</span>
                                    <span className="text-foreground/90 font-medium">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
          </motion.div>

          {/* Secondary Cards */}
          {features.cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card/20 border border-border/40 rounded-[2rem] p-6 md:p-8 min-h-[400px] relative overflow-hidden group hover:border-primary/20 hover:shadow-lg transition-all duration-300"
            >
                <DotPattern />
                <CardNumber>{card.number}</CardNumber>
                
                {card.isNew && (
                    <div className="absolute top-8 right-8 z-20">
                        <span className="bg-violet-600 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg shadow-violet-900/20">
                            <Sparkles className="w-3 h-3" /> New
                        </span>
                    </div>
                )}

                <div className="relative z-10 pt-24 h-full flex flex-col">
                    <h3 className="text-2xl font-bold mb-6 font-playfair">{card.title}</h3>
                    
                    {card.description ? (
                        <div className="mb-8 flex-grow">
                             <p className="text-muted-foreground leading-relaxed">
                                {card.description}
                            </p>
                             <div className="mt-8 flex gap-3">
                                <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
                                    <Bot className="w-8 h-8 text-blue-500" />
                                </div>
                                <div className="p-3 bg-indigo-500/10 rounded-xl border border-indigo-500/20">
                                    <Sparkles className="w-8 h-8 text-indigo-500" />
                                </div>
                             </div>
                        </div>
                    ) : (
                        <ul className="space-y-3 mb-8 flex-grow">
                            {card.points.map((point, i) => (
                                <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                                    <span className="text-primary/50 text-xs mt-1">＋</span>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    )}

                    {/* Decorative bottom graphic for specific cards */}
                    {index === 0 && (
                        <div className="absolute bottom-0 left-0 w-full h-32 opacity-30 pointer-events-none">
                            <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                                <path d="M0 40 L0 30 Q 20 10 40 25 T 80 15 L 100 5 L 100 40 Z" fill="url(#gradient-chart)" />
                                <path d="M0 40 L0 35 Q 20 20 40 30 T 80 20 L 100 15 L 100 40 Z" fill="url(#gradient-chart)" opacity="0.5" />
                                <defs>
                                    <linearGradient id="gradient-chart" x1="0" x2="0" y1="0" y2="1">
                                        <stop offset="0%" stopColor="var(--color-primary)" />
                                        <stop offset="100%" stopColor="transparent" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    )}
                    
                    {index === 1 && (
                         <div className="absolute bottom-[-20px] right-[-20px] w-40 h-40 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl" />
                    )}
                     {index === 2 && (
                         <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.15),transparent_40%)] pointer-events-none" />
                    )}
                </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
