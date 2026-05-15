import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CLIENTS } from '../constants';

const services = ['Brand Strategy', 'Visual Identity', 'Brand Applications'];

const Works: React.FC = () => {
  return (
    <div className="bg-[#050a1b] min-h-screen text-white">
      <section className="pt-52 md:pt-64 pb-14 md:pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl"
          >
            <h1 className="text-[19vw] md:text-[13vw] lg:text-[10rem] font-black uppercase leading-[0.78] tracking-tight mb-10">
              Our Work
            </h1>
            <p className="text-white/70 text-3xl md:text-5xl lg:text-6xl leading-[1.05] font-light max-w-5xl">
              We partner with ambitious brands to build identities, campaigns and visual systems that move with culture.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-2 md:px-3 pb-3">
        <div className="grid lg:grid-cols-12 gap-2 md:gap-3 items-start">
          {CLIENTS.map((client, idx) => {
            const image = client.mockups?.[idx % Math.max(client.mockups.length, 1)] ?? client.coverImage;
            const isFeature = idx % 3 === 0;
            const placement = isFeature
              ? 'lg:col-span-7'
              : idx % 3 === 1
                ? 'lg:col-span-5 lg:mt-32'
                : 'lg:col-span-6 lg:col-start-4';

            return (
              <motion.article
                key={client.id}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.75, delay: idx * 0.06 }}
                className={`group ${placement}`}
              >
                <Link to={`/works/${client.id}`} className="block">
                  <div className={`relative overflow-hidden bg-[#071026] ${isFeature ? 'aspect-[5/4]' : 'aspect-[4/5]'}`}>
                    {image && (
                      <img
                        src={image}
                        alt={client.name}
                        loading={idx === 0 ? 'eager' : 'lazy'}
                        decoding="async"
                        className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    )}
                  </div>

                  <div className="grid md:grid-cols-[minmax(0,1fr)_220px] gap-5 md:gap-8 pt-5 md:pt-6 pb-14 md:pb-20">
                    <div>
                      <h2 className="text-4xl md:text-6xl font-black uppercase leading-[0.86] tracking-tight mb-4 group-hover:text-[#00ff88] transition-colors">
                        {client.name}
                      </h2>
                      <p className="text-white/65 text-lg md:text-xl leading-snug max-w-2xl">
                        {client.description}
                      </p>
                    </div>

                    <div className="text-[10px] font-black uppercase tracking-[0.28em] text-white/45 space-y-5">
                      <div>
                        <p className="text-white/25 mb-2">Sector</p>
                        <p className="text-white/65">{client.industry}</p>
                      </div>
                      <div>
                        <p className="text-white/25 mb-2">Services</p>
                        <p className="text-white/65 leading-relaxed">{services.join(', ')}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-white/10">
        <div className="container mx-auto px-6">
          <p className="text-[#00ff88] text-xs font-black uppercase tracking-[0.4em] mb-8">Archive</p>
          <p className="text-white/70 text-3xl md:text-5xl leading-tight max-w-5xl">
            More case studies are coming soon as we continue building identities, social systems and campaigns for growing brands.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Works;
