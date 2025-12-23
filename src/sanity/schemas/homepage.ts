import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'homepage',
    title: 'Homepage',
    type: 'document',
    fields: [
        // SEO Fields
        defineField({
            name: 'title',
            title: 'Page Title',
            type: 'string',
            description: 'SEO title for the homepage',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'metaDescription',
            title: 'Meta Description',
            type: 'text',
            description: 'SEO description (150-160 characters)',
            rows: 3,
            validation: (Rule) => Rule.max(160)
        }),

        // Hero Section
        defineField({
            name: 'heroTitle',
            title: 'Hero Title',
            type: 'string',
            description: 'Main headline on the hero section',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'heroSubtitle',
            title: 'Hero Subtitle',
            type: 'text',
            description: 'Supporting text below the hero title',
            rows: 3
        }),
        defineField({
            name: 'heroBackgroundImage',
            title: 'Hero Background Image',
            type: 'image',
            options: {
                hotspot: true
            },
            description: 'Full-width background image for hero section'
        }),
        defineField({
            name: 'heroCtaText',
            title: 'Hero CTA Button Text',
            type: 'string',
            description: 'Text for the call-to-action button',
            initialValue: 'Schedule Service Today'
        }),
        defineField({
            name: 'heroCtaLink',
            title: 'Hero CTA Button Link',
            type: 'string',
            description: 'Where the CTA button links to (e.g., /contact)',
            initialValue: '/contact'
        }),

        // Services Section
        defineField({
            name: 'servicesHeading',
            title: 'Services Section Heading',
            type: 'string',
            description: 'Heading above the services section',
            initialValue: 'Our Services'
        }),
        defineField({
            name: 'servicesSubheading',
            title: 'Services Section Subheading',
            type: 'text',
            description: 'Supporting text below services heading',
            rows: 2
        }),
        defineField({
            name: 'showFeaturedServices',
            title: 'Show Featured Services Only',
            type: 'boolean',
            description: 'If true, only shows services marked as "featured"',
            initialValue: true
        })
    ],
    preview: {
        select: {
            title: 'heroTitle',
            media: 'heroBackgroundImage'
        },
        prepare({ title, media }) {
            return {
                title: 'Homepage',
                subtitle: title,
                media
            };
        }
    }
});
