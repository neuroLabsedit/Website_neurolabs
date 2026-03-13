/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Scissors, MessageSquare, Video, Wand2, ArrowRight, Sparkles, Terminal } from 'lucide-react';
import { Analytics } from "@vercel/analytics/react";
import { useState, FormEvent } from 'react';

const Logo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00f0ff" />
        <stop offset="100%" stopColor="#b026ff" />
      </linearGradient>
    </defs>
    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" stroke="url(#logoGradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" stroke="url(#logoGradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.599 6.5A3 3 0 0 0 14 6" stroke="url(#logoGradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.4 6.5A3 3 0 0 1 10 6" stroke="url(#logoGradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 18a3 3 0 0 0 3.599-2.5" stroke="url(#logoGradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 18a3 3 0 0 1-3.599-2.5" stroke="url(#logoGradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 9.5L15 12.5L10 15.5V9.5Z" fill="url(#logoGradient)" stroke="url(#logoGradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function App() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

const handleJoinWaitlist = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID_HERE'; // Replace with your Formspree form hash from dashboard

    setStatus('loading');

    const formData = new FormData();
    formData.append('email', email);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <>
      <div className="min-h-screen relative selection:bg-neon-cyan/30 selection:text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-neon-purple/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-neon-cyan/20 blur-[120px]" />
        <div className="absolute top-[40%] left-[50%] translate-x-[-50%] w-[60%] h-[20%] rounded-full bg-neon-purple/10 blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      {/* Navbar */}
      <nav className="relative z-10 border-b border-white/5 bg-deep-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Logo className="w-8 h-8" />
            <span className="font-display font-bold text-xl tracking-tight">NeuroEdit<span className="text-white/50">Labs</span></span>
          </div>
          <a href="#waitlist" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            Join Waitlist
          </a>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card mb-8">
              <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
              <span className="text-xs font-medium tracking-wide uppercase text-white/80">NeuroEditLabs is in development</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[1.1] mb-6">
              Stop Editing.<br />
              <span className="gradient-text">Start Prompting.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              The world's first truly prompt-driven AI video editor. Auto-cut, dynamic captions, and B-roll integration—all powered by your words.
            </p>

            <form onSubmit={handleJoinWaitlist} className="max-w-md mx-auto relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              <div className="relative flex items-center bg-deep-black rounded-xl border border-white/10 p-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  disabled={status === 'loading'}
                  className="w-full bg-transparent px-4 py-3 text-white placeholder:text-white/40 focus:outline-none disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors whitespace-nowrap disabled:opacity-60"
                >
                  {status === 'loading' ? 'Joining...' : <> Join Waitlist <ArrowRight className="w-4 h-4" /> </>}
                </button>
              </div>
              {status === 'success' && <p className="mt-3 text-neon-cyan text-sm">✅ You're on the waitlist! We'll be in touch.</p>}
              {status === 'error' && <p className="mt-3 text-red-400 text-sm">❌ Something went wrong. Please try again.</p>}
            </form>
          </motion.div>
        </section>

        {/* Feature Stack */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">The Feature Stack</h2>
            <p className="text-white/60">Everything you need to create viral content, without the timeline timeline.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <Scissors className="w-6 h-6 text-neon-cyan" />,
                title: "Auto-Cut & Flow",
                description: "Removes silences and filler words instantly. Keep your audience hooked with perfect pacing."
              },
              {
                icon: <MessageSquare className="w-6 h-6 text-neon-purple" />,
                title: "Dynamic Captioning",
                description: "Viral-style animated subtitles generated in one click. Fully customizable and perfectly synced."
              },
              {
                icon: <Video className="w-6 h-6 text-neon-cyan" />,
                title: "Auto B-Rolls",
                description: "Intelligent stock footage integration based on your script. We find the clips, you take the credit."
              },
              {
                icon: <Wand2 className="w-6 h-6 text-neon-purple" />,
                title: "Cinematic Effects",
                description: "Automatic zoom-ins, transitions, and several pro-effects applied exactly where they matter."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-card p-8 rounded-2xl hover:border-white/20 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* The Magic Feature */}
        <section className="py-24 px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-1 md:p-2 glow-border relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/20 blur-[80px] rounded-full pointer-events-none" />
            
            <div className="bg-deep-black/80 rounded-[1.3rem] p-8 md:p-12 border border-white/5">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-purple/10 text-neon-purple text-xs font-medium mb-6 border border-neon-purple/20">
                    <Terminal className="w-3 h-3" /> The Magic Feature
                  </div>
                  <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                    Edit at the speed of thought.
                  </h2>
                  <p className="text-lg text-white/60 mb-8">
                    Our prompt interface is a chat-like box where you can type commands to instantly modify your video. No more digging through complex menus.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Make the intro faster",
                      "Add a zoom-in on the punchline",
                      "Change captions to yellow",
                      "Insert a dramatic pause here"
                    ].map((prompt, i) => (
                      <li key={i} className="flex items-center gap-3 text-white/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan" />
                        "{prompt}"
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex-1 w-full">
                  <div className="glass-card rounded-xl border border-white/10 overflow-hidden shadow-2xl">
                    <div className="h-8 border-b border-white/10 bg-white/5 flex items-center px-4 gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <div className="p-6 bg-deep-black/50">
                      <div className="space-y-4 mb-6">
                        <div className="flex gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-cyan to-blue-500 shrink-0" />
                          <div className="glass-card rounded-2xl rounded-tl-none px-4 py-2 text-sm">
                            Add a subtle zoom-in when I say "mind-blowing".
                          </div>
                        </div>
                        <div className="flex gap-3 flex-row-reverse">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-purple to-pink-500 shrink-0 flex items-center justify-center">
                            <Sparkles className="w-4 h-4 text-white" />
                          </div>
                          <div className="bg-white/10 rounded-2xl rounded-tr-none px-4 py-2 text-sm">
                            Done! Added a 110% scale keyframe at 00:14.
                          </div>
                        </div>
                      </div>
                      <div className="relative">
                        <input 
                          type="text" 
                          disabled
                          placeholder="Type an editing command..." 
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white/50"
                        />
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded bg-white/10 flex items-center justify-center">
                          <ArrowRight className="w-4 h-4 text-white/50" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Crowdfunding Section */}
        <section className="py-24 px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 mix-blend-overlay" />
            <div className="glass-card border-white/10 p-8 md:p-16 text-center relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
                <span className="w-2 h-2 rounded-full bg-neon-purple animate-pulse" />
                <span className="text-xs font-medium tracking-wide uppercase text-white/80">Live Campaign</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                Help us build this <span className="gradient-text">faster.</span>
              </h2>
              <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10">
                We are raising crowdfunding to bring NeuroEditLabs to life as soon as possible. By backing us today, you can help accelerate development and secure exclusive lifetime access before we launch to the public.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="https://buymeacoffee.com/neuroeditlabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-purple text-white font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(176,38,255,0.3)]"
                >
                  Support Our Campaign <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#waitlist" className="w-full sm:w-auto px-8 py-4 rounded-xl glass-card border border-white/10 text-white font-medium hover:bg-white/5 transition-colors flex items-center justify-center">
                  Just join waitlist
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Waitlist & Growth */}
        <section id="waitlist" className="py-32 px-6 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Join the revolution.
            </h2>
            <p className="text-xl text-white/60 mb-12">
              We are currently in the labs and raising initial crowd funds to build the smoothest editing experience for creators.
            </p>
            
            <div className="glass-card p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-neon-cyan/5 to-transparent pointer-events-none" />
              <h3 className="text-2xl font-display font-bold mb-8">Secure your early-access spot.</h3>
              
              <form onSubmit={handleJoinWaitlist} className="max-w-md mx-auto relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                <div className="relative flex flex-col sm:flex-row items-center bg-deep-black rounded-xl border border-white/10 p-1 gap-1 sm:gap-0">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    disabled={status === 'loading'}
                    className="w-full bg-transparent px-4 py-3 text-white placeholder:text-white/40 focus:outline-none text-center sm:text-left disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors whitespace-nowrap disabled:opacity-60"
                  >
                    {status === 'loading' ? 'Joining...' : 'Join 2026 Waitlist'}
                  </button>
                </div>
                {status === 'success' && <p className="mt-3 text-neon-cyan text-sm">✅ You're on the waitlist! We'll be in touch.</p>}
                {status === 'error' && <p className="mt-3 text-red-400 text-sm">❌ Something went wrong. Please try again.</p>}
              </form>
              <p className="text-sm text-white/40 mt-6">No spam. Unsubscribe anytime.</p>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Logo className="w-6 h-6" />
            <span className="font-display font-bold tracking-tight">NeuroEditLabs</span>
          </div>
          <p className="text-sm text-white/40">
            © 2026 NeuroEditLabs. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
    <Analytics />
  </>
);
}
