import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './src/sanity/schemas';

export default defineConfig({
    name: 'default',
    title: 'Company Name CMS',

    projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || '',
    dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',

    plugins: [
        structureTool({
            structure: (S) =>
                S.list()
                    .title('Content')
                    .items([
                        // Homepage singleton
                        S.listItem()
                            .title('Homepage')
                            .child(S.document().schemaType('homepage').documentId('homepage')),
                        // Site Settings singleton
                        S.listItem()
                            .title('Site Settings')
                            .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
                        // Divider
                        S.divider(),
                        // Regular document types
                        ...S.documentTypeListItems().filter(
                            (listItem) =>
                                !['homepage', 'siteSettings'].includes(listItem.getId() || '')
                        )
                    ])
        }),
        visionTool()
    ],

    schema: {
        types: schemaTypes
    }
});
