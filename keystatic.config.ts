// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: process.env.NODE_ENV === 'development' 
    ? { kind: 'local' } 
    : { 
        kind: 'github', 
        repo: 'your-username/your-repo-name' 
      },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
  },
});