import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShieldCheck, BarChart3, Megaphone, Lightbulb, Globe, Handshake } from 'lucide-react';
import { CLIENTS } from '../constants';
import AutoSlider from '../components/AutoSlider';

const Home: React.FC = () => {
  const companyLogos = CLIENTS.map(client => (
    <Link to={`/works/${client.id}`} key={client.id} className="group relative flex flex-col items-center gap-4 pb-4 mx-4">
      <div className="w-64 h-40 glass-card rounded-2xl flex items-center justify-center transition-all duration-700 overflow-hidden relative bg-[#1a1a1a]">
        {client.coverImage && (
          <img 
            src={client.coverImage} 
            alt={client.name} 
            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
            referrerPolicy="no-referrer"
          />
        )}
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500 z-0"></div>
        <h3 className="text-sm font-bold tracking-[0.2em] text-white z-10 uppercase">{client.name}</h3>
      </div>
    </Link>
  ));

  return (
    <div className="relative">
      {/* Immersive Blue-Green Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[#050a1b]"></div>
        
        {/* Large flowing blue gradient */}
        <div className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" style={{ animationDuration: '8s' }}></div>
        
        {/* Large flowing green gradient */}
        <div className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] bg-[#00ff88]/5 blur-[120px] rounded-full animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }}></div>
        
        {/* Deep center blue glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-blue-900/10 via-transparent to-transparent opacity-50"></div>
        
        {/* Bottom green accent */}
        <div className="absolute -bottom-[10%] left-[15%] w-[50%] h-[50%] bg-[#00ff88]/10 blur-[150px] rounded-full"></div>
      </div>

      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#00ff88]/10 blur-[140px] rounded-full -z-10 animate-pulse"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <h1 className="text-6xl md:text-9xl font-bold mb-8 leading-[0.85] chrome-text tracking-tighter uppercase">
            Marketing <br /> 
            <span className="text-[#00ff88]">Defined.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-14 font-light">
            Wildmark is a full-service branding, marketing, and ad production agency based in Calicut. We build digital ecosystems that scale businesses with confidence.
          </p>
          <div className="flex justify-center items-center">
            <Link to="/works" className="w-full sm:w-auto px-12 py-5 bg-white text-black font-bold text-xs rounded-full hover:bg-[#00ff88] transition-all duration-300 uppercase tracking-widest shadow-xl hover:shadow-[#00ff88]/20">
              View Our Work
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 2. Services Section */}
      <section className="py-40 relative">
        {/* Enhanced background wash with blue-green mix */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-emerald-500/5 pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center mb-24"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 uppercase tracking-tighter text-[#00ff88]">Our Services.</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Complete Solutions for Creative Growth & Business Support</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              },
              { 
                title: 'Business Services', 
                desc: 'Supporting your growth with company incorporation, GST registration, and trademark filing.', 
                icon: <Handshake size={40} strokeWidth={1.5} />
              }
            ].map((service, idx) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-card p-10 rounded-[30px] hover:border-[#00ff88]/50 transition-all duration-500 group relative overflow-hidden flex flex-col items-start"
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

      {/* 3. Partners Section  */}
      <section className="py-32 relative overflow-hidden border-y border-white/5">
        {/* Smooth blue to green transition wash */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-[#00ff88]/5 pointer-events-none"></div>
        
        <div className="container mx-auto px-6 mb-16 text-center relative z-10">
          <p className="text-[#00ff88]/60 text-[11px] font-bold tracking-[0.6em] uppercase">Our Clients</p>
        </div>
        <div className="relative z-10">
          <AutoSlider items={companyLogos} type="continuous" speed="normal" />
        </div>
      </section>
      
    </div>
  );
};

export default Home;
