
import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowUpCircle, 
  Users, 
  Handshake, 
  RefreshCw, 
  ShieldCheck, 
  BarChart3, 
  Lightbulb, 
  Megaphone, 
  Globe 
} from 'lucide-react';
import { TEAM_MEMBERS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-64 md:pt-32 pb-20 relative">
      {/* Immersive Background Gradients */}
      <div className="absolute top-0 right-0 w-full h-[700px] bg-gradient-to-bl from-emerald-500/10 to-transparent -z-10 pointer-events-none"></div>
      <div className="absolute top-[400px] left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

      <div className="site-gutter mb-16 md:mb-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold chrome-text uppercase mb-6 leading-none">
            Who <span className="text-[#00ff88]">We Are.</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-4xl font-light leading-relaxed">
            Wildmark is a full-service branding, marketing, and ad production agency based in Calicut—built to do more than just promote brands. We provide complete business solutions that help companies launch, grow, and scale with confidence.
          </p>
        </motion.div>
      </div>

      {/* Story & Approach Section */}
      <section className="site-gutter mb-24 md:mb-40 relative z-10">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-[40px]"
          >
            <h2 className="text-[#00ff88] text-xs font-bold tracking-[0.4em] uppercase mb-6">Expertise Beyond Creative</h2>
            <p className="text-gray-400 leading-relaxed font-light">
              While we craft powerful brand identities, execute result-driven marketing strategies, and produce high-quality advertisements, our expertise extends far beyond creative services. We also offer Web development, GST registration & filing, and Trademark registration, ensuring businesses are not only visible but also structured, compliant, and protected.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-[40px]"
          >
            <h2 className="text-[#00ff88] text-xs font-bold tracking-[0.4em] uppercase mb-6">Our Approach</h2>
            <p className="text-gray-400 leading-relaxed font-light">
              Our approach is rooted in understanding each business holistically—from its market position to its operational needs. By combining creative excellence with essential business support services, we act as a one-stop partner for modern businesses, delivering scalable, end-to-end solutions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mt-8">
              {['Reach audience', 'Build credibility', 'Stay compliant', 'Achieve growth'].map((item) => (
                <div key={item} className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 text-[#00ff88] text-[10px] font-bold uppercase tracking-widest text-center rounded-full">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="site-gutter mb-24 md:mb-40 relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-[30px] border-l-4 border-emerald-500"
          >
            <div className="flex items-center gap-4 mb-6 text-[#00ff88]">
              <ArrowUpCircle size={32} strokeWidth={1.5} />
              <h2 className="text-2xl font-bold uppercase tracking-tighter">Our Mission</h2>
            </div>
            <p className="text-gray-400 leading-relaxed font-light">
              Creative Impact with Complete Business Support. To deliver powerful branding, marketing, and ad production while supporting businesses with web development, GST services, and trademark registration. We combine creativity with reliability to help businesses grow, stay compliant, and build a strong foundation.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-[30px] border-l-4 border-emerald-500"
          >
            <div className="flex items-center gap-4 mb-6 text-[#00ff88]">
              <ArrowUpCircle size={32} strokeWidth={1.5} />
              <h2 className="text-2xl font-bold uppercase tracking-tighter">Our Vision</h2>
            </div>
            <p className="text-gray-400 leading-relaxed font-light">
              To Be a Complete Growth Partner for Businesses. To redefine the modern agency by blending creative excellence with essential business services—becoming the go-to partner for brands seeking visibility, structure, and long-term success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="site-gutter mb-24 md:mb-40 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-20"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-4 text-[#00ff88]">
            <ArrowUpCircle size={48} strokeWidth={1.5} />
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold uppercase tracking-tighter">Why Choose Us</h2>
          </div>
          <div className="w-20 h-1.5 bg-[#00ff88] rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10">
          {[
            { 
              title: 'Deep-Rooted Expertise', 
              desc: 'A strong mix of creative professionals and technical experts delivering solutions that are both innovative and practically effective.',
              icon: <Users size={48} strokeWidth={1.5} />
            },
            { 
              title: 'All-in-One Partner', 
              desc: 'Everything under one roof—from branding and marketing to web development and business compliance services.',
              icon: <Handshake size={48} strokeWidth={1.5} />
            },
            { 
              title: 'Insight-Driven Approach', 
              desc: 'Every project is backed by research, strategy, and clear insights to ensure smarter decisions and sustainable growth.',
              icon: <RefreshCw size={48} strokeWidth={1.5} />
            }
          ].map((item, idx) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-[30px] group transition-all duration-500"
            >
              <div className="text-[#00ff88] mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[#00ff88] transition-colors uppercase tracking-tight">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How We Do It Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="site-gutter">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4 text-[#00ff88]">
              <ArrowUpCircle size={48} strokeWidth={1.5} />
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold uppercase tracking-tighter">How We Do It</h2>
            </div>
            <p className="text-gray-400 text-lg max-w-2xl font-light">
              The Wildmark Approach — Strategy, Execution & Continuous Support. Our process is built on clarity, transparency, and results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: 'Research & Understanding', 
                desc: 'Every project begins with deep research. We study your business, audience, and market to build a strong foundation before taking action. By combining insights with experience, we eliminate guesswork and deliver solutions that are precise and effective.' 
              },
              { 
                title: 'Planning with Purpose', 
                desc: 'Whether it’s a branding project, marketing campaign, website development, or business registration service, we provide clear action plans with defined timelines and measurable outcomes. This ensures transparency and keeps every stage aligned with your goals.' 
              },
              { 
                title: 'Execution with Quality Control', 
                desc: 'From creative production to technical services like web development, GST filing, and trademark registration, we maintain strict quality checks at every step. Our layered process ensures that every deliverable meets high standards of performance and reliability.' 
              },
              { 
                title: 'Client Involvement & Ongoing Support', 
                desc: 'We believe in building long-term partnerships. Our clients are involved throughout the process, with consistent updates and clear communication. From campaign performance to compliance services, we provide continuous support to ensure your business grows smoothly and stays on track.' 
              }
            ].map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-6 md:p-8 rounded-2xl md:rounded-3xl group hover:border-[#00ff88]/40 transition-colors"
                style={{ background: 'linear-gradient(135deg, rgba(26, 31, 53, 0.4) 0%, rgba(0, 255, 136, 0.05) 100%)' }}
              >
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter group-hover:text-[#00ff88] transition-colors">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-40 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-emerald-500/5 pointer-events-none"></div>

        <div className="site-gutter relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center mb-14 md:mb-24"
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 uppercase tracking-tighter text-[#00ff88]">Our Services.</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Complete Solutions for Creative Growth</p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-8">
          {[
            { 
              title: 'Branding', 
              desc: 'Strategic identity development from the ground up and maintaining consistency over time.', 
              icon: <ShieldCheck size={40} strokeWidth={1.5} />
            },
            { 
              title: 'Marketing', 
              desc: 'Performance-driven social, digital, and influencer campaigns that deliver measurable results.', 
              icon: <BarChart3 size={40} strokeWidth={1.5} />
            },
            { 
              title: 'Advertising', 
              desc: 'High-impact visual storytelling and ad production that turn casual scrollers into loyal advocates.', 
              icon: <Megaphone size={40} strokeWidth={1.5} />
            },
            { 
              title: 'Content & Design', 
              desc: 'Purpose-driven content, graphic design, and copywriting tailored to your unique audience.', 
              icon: <Lightbulb size={40} strokeWidth={1.5} />
            },
            { 
              title: 'Web Development', 
              desc: 'Responsive, scalable, and user-focused digital hubs combining performance with modern design.', 
              icon: <Globe size={40} strokeWidth={1.5} />
            }
          ].map((service, idx) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.35rem)] p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-[30px] hover:border-[#00ff88]/50 transition-all duration-500 group relative overflow-hidden flex flex-col items-start"
            >
              <div className="text-[#00ff88] mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[#00ff88] transition-colors">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{service.desc}</p>
              <div className="absolute -bottom-6 -right-6 text-9xl font-bold text-white/[0.02] pointer-events-none group-hover:text-[#00ff88]/[0.05] transition-colors duration-700">0{idx + 1}</div>
            </motion.div>
          ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 md:py-40 relative overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-600/10 to-transparent pointer-events-none"></div>
        <div className="site-gutter text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8 md:mb-12 uppercase tracking-tighter max-w-4xl mx-auto leading-none">
              Your Complete <span className="text-[#00ff88]">Growth Partner.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed font-light">
              "From building your brand to supporting your business, we grow with you every step of the way."
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
