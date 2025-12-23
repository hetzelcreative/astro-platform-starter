import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'service',
    title: 'Service',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Service Title',
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
            name: 'icon',
            title: 'Icon (Emoji or Image)',
            type: 'string',
            description: 'Enter an emoji like 🏠 or upload an image below'
        }),
        defineField({
            name: 'image',
            title: 'Service Image',
            type: 'image',
            options: {
                hotspot: true
            }
        }),
        defineField({
            name: 'shortDescription',
            title: 'Short Description',
            type: 'text',
            description: 'Brief description for service cards (2-3 sentences)',
            rows: 3,
            validation: (Rule) => Rule.required().max(250)
        }),
        defineField({
            name: 'fullDescription',
            title: 'Full Description',
            type: 'array',
            of: [{ type: 'block' }],
            description: 'Detailed description for the service page'
        }),
        defineField({
            name: 'featured',
            title: 'Featured Service',
            type: 'boolean',
            description: 'Show this service on the homepage',
            initialValue: false
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Order in which services appear (lower numbers first)'
        })
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'shortDescription',
            media: 'image'
        }
    }
});
