import {BillIcon} from '@sanity/icons'

export default {
    name: 'list',
    type: 'document',
    icon: BillIcon,
    title: 'List',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'slug',
            type: 'slug',
            description: 'Used in the url of the website',
            options: {
                source: 'name',
                maxLength: 96
            },
            validation: (Rule) => Rule.required()
        },
        {
            name: 'image',
            type: 'mainImage',
            title: 'Main image',
            description: 'Add one photo that distinguishes this spot from others in the category'
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description'
        },
        {
            name: 'spots',
            type: 'array',
            title: 'Spots',
            of: [
                {
                    type: 'reference',
                    to: {
                        type: 'spot'
                    }
                }
            ]
        }
    ],
    preview: {
        select: {
            title: 'name',
            slug: 'slug',
            media: 'image'
        },
        prepare({title = 'No title', slug, media}) {
            const path = `/list/${slug.current}`
            return {
                title,
                media,
                subtitle: path
            }
        }
    }
}