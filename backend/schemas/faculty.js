export default {
    name: 'faculty',
    title: 'Faculty',
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
            validation: Rule => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 40
            }
        },
        { 
            name: 'phone_number',
            title: 'Phone Number',
            type: 'number',
            validation: Rule => Rule.required().min(1000000000).max(9999999999)
        },
        {
            name: 'email',
            title: 'Email',
            type: 'email',
            validation: (Rule) =>
                Rule.required().regex(
                  /[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'+/=?^_`{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                  {
                    name: "email", 
                    invert: false, 
                  }
                ),
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