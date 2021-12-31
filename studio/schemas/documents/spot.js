import {PinIcon, LinkIcon} from '@sanity/icons'

export default {
    name: 'spot',
    type: 'document',
    icon: PinIcon,
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            description: 'What is the name of the spot',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'slug',
            type: 'slug',
            description: 'Used in the url of the website',
            options: {
                source: 'title',
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
            type: 'bodyPortableText',
            title: 'Description',
            description: 'Why did this spot make the list?'
        },
        {
            name: 'location',
            type: 'geopoint',
            title: 'Geo Location'
        },
        {
            name: 'cities',
            type: 'array',
            title: 'Cities',
            of: [
                {
                    type: 'reference',
                    to: {
                        type: 'city'
                    }
                }
            ]
        },
        {
            name: 'categories',
            type: 'array',
            title: 'categories',
            of: [
                {
                    type: 'reference',
                    to: {
                        type: 'category'
                    }
                }
            ]
        },
        {
            name: 'links',
            type: 'array',
            title: 'Links',
            //fieldset: 'details',
            of: [
                {
                    type: 'link',
                    title: 'Link',
                    icon: LinkIcon
                }
            ]
        }
    ],
    preview: {
        select: {
            title: 'title',
            slug: 'slug',
            media: 'image'
        },
        prepare({title = 'No title', slug, media}) {
            const path = `/spot/${slug.current}/`
            return {
                title,
                media,
                subtitle: path
            }
        }
    }
}