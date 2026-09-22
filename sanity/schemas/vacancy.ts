import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'vacancy',
    title: 'Job Vacancy',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Job Title',
            type: 'string',
            description: 'e.g. Cambridge IGCSE Mathematics & Physics Teacher',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'isActive',
            title: 'Active / Accepting Applications',
            type: 'boolean',
            description: 'Turn off to mark role as closed without deleting the listing.',
            initialValue: true,
        }),
        defineField({
            name: 'category',
            title: 'Category / Department',
            type: 'string',
            options: {
                list: [
                    { title: 'Foundation Stage (Early Years)', value: 'Foundation Stage' },
                    { title: 'Cambridge Primary (Year 1-6)', value: 'Cambridge Primary' },
                    { title: 'Junior High (Year 7-9 Checkpoint)', value: 'Junior High' },
                    { title: 'Senior High (IGCSE / A-Level)', value: 'Senior High' },
                    { title: 'Special Needs Education (SEN)', value: 'Special Needs' },
                    { title: 'Administration & Student Support', value: 'Administration' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'employmentType',
            title: 'Employment Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Hybrid (Remote + Nairobi)', value: 'Hybrid' },
                    { title: 'Full-time', value: 'Full-time' },
                    { title: 'Part-time', value: 'Part-time' },
                    { title: 'Contract', value: 'Contract' },
                ],
            },
            initialValue: 'Hybrid',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
            initialValue: 'Karen, Nairobi (Hybrid)',
        }),
        defineField({
            name: 'closingDate',
            title: 'Application Deadline',
            type: 'date',
        }),
        defineField({
            name: 'shortDescription',
            title: 'Short Description',
            type: 'text',
            rows: 3,
            validation: (Rule) => Rule.required().max(250),
        }),
        defineField({
            name: 'requirements',
            title: 'Key Requirements',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Add qualification bullet points (e.g. Cambridge curriculum experience)',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'category',
            active: 'isActive',
        },
        prepare({ title, subtitle, active }) {
            return {
                title,
                subtitle: `${subtitle} • ${active ? '🟢 Open' : '🔴 Closed'}`,
            };
        },
    },
});
