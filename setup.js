import fs from 'fs';
import path from 'path';

const clients = ['lumira_lux', 'vertex_tech', 'ecosphere', 'velocity_motors', 'aether_studios', 'nova_health'];
const types = ['mockups', 'logo_variants', 'color_palette', 'logo_construction', 'portfolio'];

clients.forEach(c => {
  types.forEach(t => {
    fs.mkdirSync(path.join('public', 'clients', c, t), { recursive: true });
  });
});
console.log('Directories created successfully.');
