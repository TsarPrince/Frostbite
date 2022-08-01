import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import pet from './workers';
import student from './student';
import faculty from './faculty';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([ pet, student, faculty ]),
})
