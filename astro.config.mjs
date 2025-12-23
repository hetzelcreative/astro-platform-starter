import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sanityIntegration from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [
        react(),
        sanityIntegration({
            projectId: 'qnvrf2dl',
            dataset: 'production',
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
