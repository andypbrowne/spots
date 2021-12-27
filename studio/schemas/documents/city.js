import {EarthAmericasIcon} from '@sanity/icons'

export default {
  name: 'city',
  type: 'document',
  icon: EarthAmericasIcon,
  title: 'City',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'City',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    }
  ]
}