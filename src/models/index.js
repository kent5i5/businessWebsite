// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Businesss } = initSchema(schema);

export {
  Businesss
};