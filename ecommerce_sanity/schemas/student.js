export default {
    name: 'student',
    title: 'Student',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'rollno',
            title: 'Roll Number',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'rollno',
                maxLength: 20
            }
        },
        {
            name: 'gender',
            title: 'Gender',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'string' }]
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }]
        }
    ]
}