
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, type Variants } from 'motion/react';
import { CLIENTS } from '../constants';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const client = CLIENTS.find(c => c.id === id);
  const smoothEase = [0.215, 0.61, 0.355, 1] as const;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: smoothEase,
      },
    },
  };

  const revealVariants: Variants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1,
        ease: smoothEase,
      },
    },
  };

  if (!client) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050a1b]">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Project Not Found</h2>
          <Link to="/works" className="text-[#00ff88] font-bold underline">Go back to Works</Link>
        </div>
      </div>
    );
  }

  let sectionIndex = 1;
  const nextSectionLabel = (title: string) => `${String(sectionIndex++).padStart(2, '0')} ${title}`;
  const sectionLabels = {
    description: client.aboutText ? nextSectionLabel('Project Description') : '',
    colorPalette: client.colorPaletteImage ? nextSectionLabel('Color Palette') : '',
    mockups: client.mockups && client.mockups.length > 0 ? nextSectionLabel('Mockups') : '',
    logoConstruction: client.logoConstruction ? nextSectionLabel('Logo Construction') : '',
  };

  return (
    <div className="pt-56 pb-40 bg-[#050a1b] min-h-screen text-white">
      <div className="container mx-auto px-6">
        <Link to="/works" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#00ff88] font-bold text-xs uppercase tracking-widest mb-16 transition-colors">
          <span>&larr;</span> Back to Works
        </Link>
        
        {/* Hero Section (No Image) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-6 max-w-4xl"
        >
          <motion.span variants={itemVariants} className="text-[#00ff88] font-bold text-xs tracking-[0.4em] uppercase mb-4 block">{client.industry}</motion.span>
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold chrome-text uppercase mb-6 leading-none tracking-tighter">{client.name}</motion.h1>
          <motion.div 
            variants={revealVariants}
            style={{ originX: 0 }}
            className="w-16 h-1 bg-[#00ff88] mb-8"
          ></motion.div>
        </motion.div>

        {/* Project Description */}
        {client.aboutText && (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-3xl mb-24"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#00ff88]">{sectionLabels.description}</p>
              <p className="text-gray-300 leading-relaxed font-light text-lg md:text-xl">{client.aboutText}</p>
            </motion.div>
          </motion.div>
        )}

        {/* Visual System: Typography & Color Palette */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-20 mb-24"
        >
          {/* Color Palette Image */}
          {client.colorPaletteImage && (
            <motion.div variants={itemVariants} className="flex flex-col gap-8">
              <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-[#00ff88]">{sectionLabels.colorPalette}</h2>
              
              <div className="glass-card rounded-none w-full relative group overflow-hidden mb-6">
                <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none"></div>
                <img 
                  src={client.colorPaletteImage} 
                  alt="Color Palette" 
                  className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" 
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Mockups Section */}
        {client.mockups && client.mockups.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-24"
          >
            <div className="flex items-end justify-between mb-12">
              <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-[#00ff88]">{sectionLabels.mockups}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {client.mockups.map((mockup, idx) => (
                <div key={idx} className={`glass-card rounded-none overflow-hidden relative group ${idx === 0 && client.mockups!.length > 2 ? 'md:col-span-2 aspect-video' : 'aspect-square'}`}>
                  <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none"></div>
                  <img 
                    src={mockup} 
                    alt={`Mockup ${idx + 1}`} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" 
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Logo Construction */}
        {client.logoConstruction && (
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-24"
          >
            <div className="flex items-end justify-between mb-12">
              <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-[#00ff88]">{sectionLabels.logoConstruction}</h2>
            </div>
            <div className="glass-card rounded-none overflow-hidden aspect-video relative group">
              <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none"></div>
              <img 
                src={client.logoConstruction} 
                alt="Logo Construction" 
                className="w-full h-full object-contain p-4 md:p-8 opacity-80 group-hover:opacity-100 transition-opacity duration-700" 
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        )}




      </div>

    </div>
  );
};

export default ProjectDetail;
