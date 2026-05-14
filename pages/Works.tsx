import React from 'react';
import { Link } from 'react-router-dom';
import { CLIENTS } from '../constants';
// import { CLIENTS, IG_STORIES } from '../constants';
// import AutoSlider from '../components/AutoSlider';

const Works: React.FC = () => {
  // const storyCards = IG_STORIES.map(story => (
  //   <div key={story.id} className="w-[280px] h-[500px] flex-shrink-0 group relative cursor-pointer">
  //     <div className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-transparent group-hover:border-[#00ff88] transition-all duration-300">
  //       <img src={story.imageUrl} alt={story.clientName} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
  //       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
  //         <p className="text-[#00ff88] text-[10px] font-bold uppercase tracking-widest mb-1">Story Creation</p>
  //         <h4 className="text-lg font-bold">{story.clientName}</h4>
  //       </div>
  //     </div>
  //   </div>
  // ));

  return (
    <div className="pt-32 pb-20 relative">
      {/* Background gradient wash */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-emerald-500/10 to-transparent -z-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 mb-20 relative z-10">
        <h1 className="text-6xl md:text-8xl font-bold chrome-text uppercase mb-6">Our <br /><span className="text-[#00ff88]">Creations.</span></h1>
        <p className="text-gray-400 text-xl max-w-2xl">
          Exploring the boundaries of digital aesthetics through branding and social storytelling.
        </p>
      </div>

      {/* Section 1: Branding */}
      <section className="container mx-auto px-6 mb-40 relative z-10">
        <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-6">
          <h2 className="text-3xl font-bold uppercase tracking-tighter">Branding</h2>
          <span className="text-gray-500 font-bold text-sm tracking-widest uppercase">{CLIENTS.length} PROJECTS</span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {CLIENTS.map(client => (
            <Link to={`/works/${client.id}`} key={client.id} className="group">
              <div 
                className="glass-card rounded-none overflow-hidden p-6 transition-all duration-500 hover:border-[#00ff88]/50 flex flex-col items-center justify-center aspect-square text-center relative bg-[#050a1b]"
              >
                {client.coverImage && (
                  <img src={client.coverImage} alt={client.name} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                )}
                {/* Overlay to reduce intensity and make text clear */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none"></div>
                <h3 className="text-xl font-semibold uppercase tracking-[0.3em] text-white z-10 group-hover:scale-110 transition-transform duration-500 relative">{client.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/*
      Section 2: Social Media (Instagram Stories Slider)
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-emerald-500/5 pointer-events-none"></div>
        
        <div className="container mx-auto px-6 mb-12 relative z-10">
          <div className="flex items-end justify-between border-b border-white/10 pb-6">
            <h2 className="text-3xl font-bold uppercase tracking-tighter">02. Social Media</h2>
          </div>
        </div>
        
        <div className="relative z-10">
          <AutoSlider items={storyCards} speed="fast" />
          
          <AutoSlider items={[...storyCards].reverse()} speed="fast" reverse={true} delay={800} />
        </div>
      </section>
      */}
    </div>
  );
};

export default Works;
