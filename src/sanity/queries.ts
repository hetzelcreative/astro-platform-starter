import { client } from './client';
import type { Service, Page, SiteSettings } from './client';

// Homepage type
export interface Homepage {
    _id: string;
    title: string;
    metaDescription?: string;
    heroTitle: string;
    heroSubtitle?: string;
    heroBackgroundImage?: any;
    heroCtaText?: string;
    heroCtaLink?: string;
    servicesHeading?: string;
    servicesSubheading?: string;
    showFeaturedServices?: boolean;
}

// Fetch homepage
export async function getHomepage(): Promise<Homepage | null> {
    return await client.fetch(`*[_type == "homepage" && _id == "homepage"][0]`);
}

// Fetch all services
export async function getAllServices(): Promise<Service[]> {
    return await client.fetch(`*[_type == "service"] | order(order asc)`);
}

// Fetch featured services for homepage
export async function getFeaturedServices(): Promise<Service[]> {
    return await client.fetch(`*[_type == "service" && featured == true] | order(order asc)`);
}

// Fetch a single service by slug
export async function getServiceBySlug(slug: string): Promise<Service | null> {
    return await client.fetch(`*[_type == "service" && slug.current == $slug][0]`, { slug });
}

// Fetch all pages
export async function getAllPages(): Promise<Page[]> {
    return await client.fetch(`*[_type == "page"]`);
}

// Fetch a single page by slug
export async function getPageBySlug(slug: string): Promise<Page | null> {
    return await client.fetch(`*[_type == "page" && slug.current == $slug][0]`, { slug });
}

// Fetch site settings
export async function getSiteSettings(): Promise<SiteSettings | null> {
    return await client.fetch(`*[_type == "siteSettings"][0]`);
}
