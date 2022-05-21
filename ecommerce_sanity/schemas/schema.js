import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import pet from './pet';
import student from './student';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([ pet, student ]),
})
