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
            validation: Rule => Rule.required(),
        },
        {
            name: 'rollno',
            title: 'Roll Number',
            type: 'string',
            validation: Rule => Rule.required(),
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
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }]
        },
        {
          name: 'room_no',
          title: 'Room Number',
          type: 'number'
        },
        {
          name: 'branch',
          title: 'Branch',
          type: 'string'
        },
        {
          name: 'linkedinProfile',
          title: 'Linkedin Profile',
          type: 'string'
        },
        {
          name: 'year',
          title: 'Year',
          type: 'number'
        },
        {
            name: 'dob',
            title: 'Date of Birth',
            type: 'date'
        }
    ]
}