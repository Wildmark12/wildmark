
import React from 'react';

const Footer = () => {
  const phoneNumber = '+91 94466 18973';
  const whatsappNumber = '919446618973';
  const contactLinks = [
    { label: 'Instagram', href: 'https://www.instagram.com/wildmark.in/', external: true },
    { label: 'WhatsApp', href: `https://wa.me/${whatsappNumber}`, external: true },
    { label: 'Call Us', href: `tel:${phoneNumber.replace(/\s/g, '')}`, external: false },
  ];

  return (
    <footer id="contact" className="bg-[#050a1b] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-5xl font-bold mb-6 chrome-text uppercase leading-none">
              Let's create something <br />
              <span className="text-[#00ff88]">Legendary.</span>
            </h2>
            <p className="text-gray-400 max-w-md text-lg mb-8">
              Wildmark is a full-service branding, marketing, and ad production agency based in Calicut. Your complete growth partner.
            </p>
            <div className="text-xs text-gray-500 font-bold uppercase tracking-[0.4em]">
              Location: Calicut, Kerala
            </div>
          </div>
          <div className="space-y-6">
            <div className="glass-card p-6 rounded-2xl">
              <p className="text-[#00ff88] text-xs font-bold uppercase tracking-widest mb-2">Email Us</p>
              <p className="text-2xl font-bold">wildmark.web@gmail.com</p>
            </div>
            <div className="flex flex-wrap gap-4">
              {contactLinks.map(contact => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.external ? '_blank' : undefined}
                  rel={contact.external ? 'noreferrer' : undefined}
                  className="flex flex-1 min-w-[120px] min-h-14 items-center justify-center text-center glass-card px-4 py-4 rounded-xl text-sm font-bold hover:bg-white/10 hover:text-[#00ff88] hover:border-[#00ff88]/30 transition-all duration-500 ease-in-out uppercase tracking-widest"
                >
                  {contact.label}
                </a>
              ))}
            </div>
            <div className="text-right">
              <p className="text-gray-500 text-[10px] uppercase tracking-[0.3em] mb-1">Direct Contact</p>
              <a href={`tel:${phoneNumber.replace(/\s/g, '')}`} className="text-white font-bold tracking-tighter text-xl group hover:text-[#00ff88] transition-colors cursor-pointer">
                {phoneNumber}
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6 text-sm text-gray-500">
          <p>&copy; 2024 WILDMARK. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <button className="hover:text-white transition-colors duration-300">PRIVACY POLICY</button>
            <button className="hover:text-white transition-colors duration-300">TERMS OF SERVICE</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
