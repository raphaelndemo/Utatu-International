import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'eventDate',
            title: 'Event Date',
            type: 'datetime',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'time',
            title: 'Time',
            type: 'string',
            description: 'Display time (e.g., "10:00 AM - 12:00 PM")',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [
                {
                    type: 'block',
                },
            ],
        }),
        defineField({
            name: 'image',
            title: 'Event Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text',
                },
            ],
        }),
    ],
    preview: {
        select: {
            title: 'title',
            date: 'eventDate',
            location: 'location',
            media: 'image',
        },
        prepare(selection) {
            const { title, date, location, media } = selection
            return {
                title,
                subtitle: `${new Date(date).toLocaleDateString()} - ${location}`,
                media,
            }
        },
    },
})
