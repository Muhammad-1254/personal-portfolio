import { type SchemaTypeDefinition } from 'sanity'


import post from './schemas/projects'
import author from './schemas/author'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author],
}
