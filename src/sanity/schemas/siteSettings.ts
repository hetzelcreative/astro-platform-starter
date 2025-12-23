import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        defineField({
            name: 'businessName',
            title: 'Business Name',
            type: 'string',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: {
                hotspot: true
            }
        }),
        defineField({
            name: 'address',
            title: 'Business Address',
            type: 'object',
            fields: [
                { name: 'street', title: 'Street Address', type: 'string' },
                { name: 'city', title: 'City', type: 'string' },
                { name: 'state', title: 'State', type: 'string' },
                { name: 'zip', title: 'ZIP Code', type: 'string' }
            ]
        }),
        defineField({
            name: 'phone',
            title: 'Phone Number',
            type: 'string',
            description: 'Format: (555) 123-4567'
        }),
        defineField({
            name: 'email',
            title: 'Email Address',
            type: 'string'
        }),
        defineField({
            name: 'socialMedia',
            title: 'Social Media',
            type: 'object',
            fields: [
                { name: 'facebook', title: 'Facebook URL', type: 'url' },
                { name: 'instagram', title: 'Instagram URL', type: 'url' },
                { name: 'twitter', title: 'Twitter/X URL', type: 'url' },
                { name: 'linkedin', title: 'LinkedIn URL', type: 'url' },
                { name: 'youtube', title: 'YouTube URL', type: 'url' }
            ]
        }),
        defineField({
            name: 'officeHours',
            title: 'Office Hours',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'day', title: 'Day', type: 'string' },
                        { name: 'hours', title: 'Hours', type: 'string' }
                    ]
                }
            ]
        }),
        defineField({
            name: 'licenses',
            title: 'License Numbers',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Add license numbers like "LIC #34071"'
        })
    ],
    preview: {
        select: {
            title: 'businessName'
        }
    }
});
