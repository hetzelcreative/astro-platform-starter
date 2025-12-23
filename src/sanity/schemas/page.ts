import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'page',
    title: 'Page',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Page Title',
            type: 'string',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            },
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
        defineField({
            name: 'content',
            title: 'Page Content',
            type: 'array',
            of: [{ type: 'block' }]
        }),
        defineField({
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
            options: {
                hotspot: true
            }
        }),
        defineField({
            name: 'heroTitle',
            title: 'Hero Title',
            type: 'string'
        }),
        defineField({
            name: 'heroSubtitle',
            title: 'Hero Subtitle',
            type: 'text',
            rows: 2
        })
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'slug.current',
            media: 'heroImage'
        }
    }
});
