import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, type Variants } from 'motion/react';
import { CLIENTS } from '../constants';

type FadeImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  wrapperClassName: string;
};

const FadeImage: React.FC<FadeImageProps> = ({ wrapperClassName, className = '', onLoad, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const hasTransparentBg = wrapperClassName.includes('bg-transparent');

  return (
    <div className={`relative overflow-hidden bg-[#071026] ${wrapperClassName}`}>
      {!isLoaded && (
        <div className={`absolute inset-0 animate-pulse ${hasTransparentBg ? 'bg-white/[0.03]' : 'bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent'}`} />
      )}
      {!hasTransparentBg && <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none z-10"></div>}
      <img
        {...props}
        onLoad={(event) => {
          setIsLoaded(true);
          onLoad?.(event);
        }}
        decoding="async"
        className={`${className} ${isLoaded ? 'opacity-90' : 'opacity-0'} group-hover:opacity-100 transition-[opacity,transform] duration-700 ease-out`}
      />
    </div>
  );
};

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const client = CLIENTS.find(c => c.id === id);
  const smoothEase = [0.215, 0.61, 0.355, 1] as const;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.16,
        delayChildren: 0.08,
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
    overview: client.aboutText ? nextSectionLabel('Overview') : '',
  };
  const services = ['Brand Strategy', 'Visual Identity', 'Art Direction', 'Brand Applications'];
  const leadImage = client.mockups?.[0] ?? client.coverImage;
  const secondaryImages = client.mockups?.slice(1) ?? [];
  const nextClient = CLIENTS.find(c => c.id !== client.id);

  return (
    <div className="bg-[#050a1b] min-h-screen text-white">
      <section className="pt-64 md:pt-32 pb-14 md:pb-20 border-b border-white/10">
        <div className="site-gutter">
          <Link to="/works" className="inline-flex items-center gap-2 text-white/45 hover:text-[#00ff88] font-bold text-xs uppercase tracking-[0.3em] md:tracking-[0.35em] mb-10 md:mb-14 transition-colors">
            <span>&larr;</span> Work
          </Link>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-[minmax(0,1fr)_360px] gap-12 lg:gap-24 items-end"
          >
            <div>
              <motion.span variants={itemVariants} className="text-[#00ff88] font-bold text-xs tracking-[0.32em] md:tracking-[0.45em] uppercase mb-6 block">
                {client.industry}
              </motion.span>
              <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-8xl font-bold chrome-text uppercase leading-none">
                {client.name}
              </motion.h1>
            </div>

            <motion.div variants={itemVariants} className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6 md:gap-8 border-t lg:border-t-0 lg:border-l border-white/15 pt-8 lg:pt-0 lg:pl-10">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/40 mb-3">Industry</p>
                <p className="text-lg md:text-xl font-medium">{client.industry}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/40 mb-3">What We Did</p>
                <p className="text-lg md:text-xl font-medium leading-snug">{services.join(', ')}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-b border-white/10">
        <div className="site-gutter">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-[360px_minmax(0,1fr)] gap-12 lg:gap-24"
          >
            <motion.p variants={itemVariants} className="text-xs font-bold uppercase tracking-[0.4em] text-[#00ff88]">
              {sectionLabels.overview}
            </motion.p>
            <div>
                <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase leading-tight mb-6 md:mb-8">
                {client.mainCampaign}
              </motion.h2>
              {client.aboutText && (
                <motion.p variants={itemVariants} className="text-white/70 leading-relaxed font-light text-base sm:text-lg md:text-xl max-w-4xl">
                  {client.aboutText}
                </motion.p>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {leadImage && (
        <section className="pt-2 md:pt-3 pb-4">
          <div className="site-gutter">
            <FadeImage
              wrapperClassName="w-full max-w-[3000px] mx-auto aspect-[3/2] group"
              loading="eager"
              src={leadImage}
              alt={`${client.name} hero application`}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>
      )}

      {secondaryImages.length > 0 && (
        <section className="site-gutter pb-4">
          <div className="grid md:grid-cols-2 gap-4">
            {secondaryImages.map((mockup, idx) => (
              <FadeImage
                key={mockup}
                wrapperClassName={`${idx === 2 ? 'md:col-span-2 w-full max-w-[3000px] mx-auto aspect-[3/2]' : 'aspect-[4/5]'} group`}
                loading="lazy"
                src={mockup}
                alt={`${client.name} brand application ${idx + 2}`}
                className="w-full h-full object-cover group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
            ))}
          </div>
        </section>
      )}

      <section className="py-20 md:py-28 border-t border-white/10">
        <div className="site-gutter flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 mb-5">Next Project</p>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight">{nextClient?.name ?? 'Works'}</h2>
          </div>
          <Link
            to={nextClient ? `/works/${nextClient.id}` : '/works'}
            className="inline-flex w-fit items-center gap-3 border border-white/25 px-6 md:px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] md:tracking-[0.3em] hover:border-[#00ff88] hover:text-[#00ff88] transition-colors"
          >
            View Case
            <span>&rarr;</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
