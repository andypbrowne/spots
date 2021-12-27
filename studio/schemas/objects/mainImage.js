export default {
    name: 'mainImage',
    type: 'image',
    title: 'Image',
    options: {
        hotspot: true
    },
    fields: [
        {
            name: 'caption',
            type: 'string',
            title: 'Caption',
            options: {
                isHighlighted: true
            }
        },
        {
            // Editing this field in the studio will be hidden behind the "Edit" button
            name: 'attribution',
            type: 'string',
            title: 'Attribution',
            description: 'Optionally add the source of the image'
        },
        {
            name: 'alt',
            type: 'string',
            title: 'Alternative text',
            description: 'Important for SEO and accessibility',
            validation: Rule => Rule.error('You have to fill out the alternative text').required(),
            options: {
                isHighlighted: true
            }
        }
    ],
    preview: {
        select: {
            imageUrl: 'asset.url',
            title: 'caption'
        }
    }
}