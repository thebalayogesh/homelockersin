import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: 
  // import.meta.env.DEV
    // ? { kind: "local" } // Uses your local hard drive when running 'bun dev'
    // : 
    {
        kind: "github", // Uses GitHub API when live on Cloudflare
        repo: "thebalayogesh/homelockersin",
      },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/content/posts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        content: fields.markdoc({ label: "Content" }),
      },
    }),
  },
});