import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sanityIntegration from '@sanity/astro';
import 'dotenv/config';

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [
        react(),
        sanityIntegration({
            projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
            dataset: process.env.PUBLIC_SANITY_DATASET || 'production',
            useCdn: false,
            apiVersion: '2024-01-01',
            studioBasePath: '/studio'
        })
    ],
    adapter: netlify({
        devFeatures: {
            environmentVariables: true
        }
    })
});
