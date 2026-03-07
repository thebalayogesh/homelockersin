import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  // Allows both static pages and the dynamic Keystatic API
  output: 'static', 
  
  // Use the Cloudflare adapter for the Keystatic Admin API
  adapter: cloudflare(),

  integrations: [
    react(), 
    markdoc(), 
    keystatic()
  ],
});