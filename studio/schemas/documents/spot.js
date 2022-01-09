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
            name: 'mapLink',
            type: 'url',
            title: 'Map Link',
            description: 'Past the google maps long url. Example: https://www.google.com/maps/place/Stumptown+Coffee+Roasters/@40.6888305,-73.9943626,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25bb9844ee7d1:0x4d30449e3f7b7116!8m2!3d40.6888967!4d-73.9921408'
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