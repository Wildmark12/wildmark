import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShieldCheck, BarChart3, Megaphone, Lightbulb, Globe } from 'lucide-react';
import { CLIENTS } from '../constants';

const Home: React.FC = () => {
  const featuredClients = CLIENTS.slice(0, 5);
  const clientServices = ['Brand Strategy', 'Visual Identity', 'Brand Applications'];

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
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center site-gutter pt-48 md:pt-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] md:w-[700px] md:h-[700px] bg-[#00ff88]/10 blur-[100px] md:blur-[140px] rounded-full -z-10 animate-pulse"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <h1 className="text-5xl sm:text-6xl md:text-9xl font-bold mb-8 leading-[0.88] chrome-text tracking-tighter uppercase">
            Marketing <br /> 
            <span className="text-[#00ff88]">Defined.</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg md:text-2xl max-w-3xl mx-auto mb-10 md:mb-14 font-light">
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
      <section className="site-gutter py-24 md:py-40 relative z-10">
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
          {[
            { title: 'Branding', icon: <ShieldCheck size={32} strokeWidth={1.5} /> },
            { title: 'Marketing', icon: <BarChart3 size={32} strokeWidth={1.5} /> },
            { title: 'Content & Design', icon: <Lightbulb size={32} strokeWidth={1.5} /> },
            { title: 'Advertising', icon: <Megaphone size={32} strokeWidth={1.5} /> },
            { title: 'Web Development', icon: <Globe size={32} strokeWidth={1.5} /> }
          ].map((item, idx) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="glass-card min-h-36 p-5 md:p-6 rounded-2xl group hover:border-[#00ff88]/40 transition-all duration-500 flex flex-col justify-between items-start relative overflow-hidden"
            >
              <span className="absolute -bottom-6 -right-6 text-9xl font-bold text-white/[0.02] pointer-events-none group-hover:text-[#00ff88]/[0.05] transition-colors duration-700">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <div className="relative z-10 text-[#00ff88] group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="relative z-10 text-base md:text-lg font-bold uppercase tracking-[0.16em] leading-tight group-hover:text-[#00ff88]">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Clients Section  */}
      <section className="py-20 md:py-32 relative overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-[#00ff88]/5 pointer-events-none"></div>
        
        <div className="site-gutter relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center mb-14 md:mb-24"
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 uppercase tracking-tighter chrome-text ">
              Our Clients.
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">Selected brands we have built with.</p>
          </motion.div>

          <div className="space-y-14 md:space-y-20">
            {[
              featuredClients.slice(0, 2),
              featuredClients.slice(2, 3),
              featuredClients.slice(3, 5)
            ].map((row, rowIndex) => {
              if (row.length === 0) return null;
              const isSingle = row.length === 1;

              return (
                <div
                  key={`home-client-row-${rowIndex}`}
                  className={isSingle ? '' : 'grid md:grid-cols-2 gap-y-12 md:gap-y-0 md:gap-x-[4%] items-stretch'}
                >
                  {row.map((client, cardIndex) => {
                    const imageIndex = rowIndex * 2 + cardIndex;
                    const image = client.mockups?.[imageIndex % Math.max(client.mockups.length, 1)] ?? client.coverImage;

                    return (
                      <motion.article
                        key={client.id}
                        initial={{ opacity: 0, y: 34 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-120px" }}
                        transition={{ duration: 0.75, delay: imageIndex * 0.04 }}
                        className="group min-w-0"
                      >
                        <Link to={`/works/${client.id}`} className="block">
                          <div className={`relative overflow-hidden bg-[#071026] ${isSingle ? 'w-full max-w-[3000px] mx-auto aspect-[3/2]' : 'h-[340px] md:h-[500px]'}`}>
                            {image && (
                              <img
                                src={image}
                                alt={client.name}
                                loading={imageIndex === 0 ? 'eager' : 'lazy'}
                                decoding="async"
                                className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.03]"
                              />
                            )}
                          </div>

                          <div className="pt-4">
                            <h3 className="text-[22px] md:text-2xl font-bold leading-tight text-white group-hover:text-[#00ff88] transition-colors">
                              {client.name}
                            </h3>
                            <div className="flex flex-wrap gap-2 mt-3">
                              <span className="inline-flex items-center border border-white/45 px-3 py-1 text-xs leading-none text-white/70">
                                {client.industry}
                              </span>
                              {clientServices.map(service => (
                                <span
                                  key={`${client.id}-${service}`}
                                  className="inline-flex items-center border border-white/45 rounded-full px-3 py-1 text-xs leading-none text-white/70"
                                >
                                  {service}
                                </span>
                              ))}
                            </div>
                          </div>
                        </Link>
                      </motion.article>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Home;
