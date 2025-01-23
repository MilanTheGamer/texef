import type { SchemaTypeDefinition } from "sanity";
import { articleType } from "./articleType";
import { authorType } from "./authorType";
import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [articleType, authorType, categoryType, blockContentType],
};
