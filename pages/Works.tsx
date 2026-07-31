import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CLIENTS } from '../constants';
import { Client } from '../types';

const services = ['Brand Strategy', 'Visual Identity', 'Brand Applications'];

type WorkRow =
  | { type: 'pair'; clients: Client[]; rowIndex: number }
  | { type: 'single'; client: Client; rowIndex: number };

const buildWorkRows = (clients: Client[]): WorkRow[] => {
  const rows: WorkRow[] = [];
  let clientIndex = 0;
  let rowIndex = 0;

  while (clientIndex < clients.length) {
    const pair = clients.slice(clientIndex, clientIndex + 2);
    rows.push({ type: 'pair', clients: pair, rowIndex });
    clientIndex += pair.length;
    rowIndex += 1;

    if (clientIndex < clients.length) {
      rows.push({ type: 'single', client: clients[clientIndex], rowIndex });
      clientIndex += 1;
      rowIndex += 1;
    }
  }

  return rows;
};

type WorkCardProps = {
  client: Client;
  image: string | undefined;
  imageHeightClass: string;
  index: number;
};

const WorkCard: React.FC<WorkCardProps> = ({ client, image, imageHeightClass, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.75, delay: index * 0.04 }}
      className="group min-w-0"
    >
      <Link to={`/works/${client.id}`} className="block">
        <div className={`relative overflow-hidden bg-[#071026] ${imageHeightClass}`}>
          {image && (
            <img
              src={image}
              alt={client.name}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.03]"
            />
          )}
        </div>

        <div className="pt-4">
          <h2 className="text-[22px] md:text-2xl font-bold leading-tight text-white group-hover:text-[#00ff88] transition-colors">
            {client.name}
          </h2>
          <div className="flex flex-wrap gap-2 mt-3">
            <span className="inline-flex items-center border border-white/45 px-3 py-1 text-xs leading-none text-white/70">
              {client.industry}
            </span>
            {services.map(service => (
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
};

const Works: React.FC = () => {
  const workRows = buildWorkRows(CLIENTS);
  let cardIndex = 0;

  return (
    <div className="bg-[#050a1b] min-h-screen text-white">
      <section className="pt-64 md:pt-32 pb-14 md:pb-20">
        <div className="site-gutter">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold chrome-text uppercase mb-6 leading-none">
              Our Works.</h1>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed font-light max-w-4xl">
              We partner with ambitious brands to build identities, campaigns and visual systems that move with culture.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="site-gutter pb-20 md:pb-28">
        <div className="space-y-14 md:space-y-20">
          {workRows.map(row => {
            if (row.type === 'single') {
              const index = cardIndex++;
              const image = row.client.mockups?.[index % Math.max(row.client.mockups.length, 1)] ?? row.client.coverImage;

              return (
                <WorkCard
                  key={`single-${row.client.id}`}
                  client={row.client}
                  image={image}
                  imageHeightClass="w-full max-w-[3000px] mx-auto aspect-[3/2]"
                  index={index}
                />
              );
            }

            return (
              <div key={`pair-${row.rowIndex}`} className="grid md:grid-cols-2 gap-y-12 md:gap-y-0 md:gap-x-[4%] items-stretch">
                {row.clients.map(client => {
                  const index = cardIndex++;
                  const image = client.mockups?.[index % Math.max(client.mockups.length, 1)] ?? client.coverImage;

                  return (
                    <WorkCard
                      key={client.id}
                      client={client}
                      image={image}
                      imageHeightClass="h-[340px] md:h-[500px]"
                      index={index}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};

export default Works;
