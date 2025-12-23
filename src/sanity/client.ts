import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
    projectId: 'qnvrf2dl',
    dataset: 'production',
    useCdn: false, // Use CDN in production for faster responses
    apiVersion: '2024-01-01'
});

// Helper to generate image URLs from Sanity image objects
const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
    return builder.image(source);
}

// Type definitions for your content
export interface Service {
    _id: string;
    title: string;
    slug: { current: string };
    icon?: string;
    image?: any;
    shortDescription: string;
    fullDescription?: any[];
    featured?: boolean;
    order?: number;
}

export interface Page {
    _id: string;
    title: string;
    slug: { current: string };
    metaDescription?: string;
    content?: any[];
    heroImage?: any;
    heroTitle?: string;
    heroSubtitle?: string;
}

export interface SiteSettings {
    _id: string;
    businessName: string;
    logo?: any;
    address?: {
        street: string;
        city: string;
        state: string;
        zip: string;
    };
    phone?: string;
    email?: string;
    socialMedia?: {
        facebook?: string;
        instagram?: string;
        twitter?: string;
        linkedin?: string;
        youtube?: string;
    };
    officeHours?: Array<{
        day: string;
        hours: string;
    }>;
    licenses?: string[];
}
