#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createBlogPost(
  postId,
  title,
  author,
  date = new Date().toISOString().split("T")[0]
) {
  const blogDir = path.join(__dirname, "../src/blog");
  const publicDir = path.join(__dirname, "../public");

  // Create the JSON structure
  const blogPost = {
    id: postId,
    translations: {
      en: {
        title: title,
        date: date,
        author: author,
        content: `/${postId}.en.md`,
      },
      es: {
        title: title, // You can customize per language
        date: date,
        author: author,
        content: `/${postId}.es.md`,
      },
      de: {
        title: title, // You can customize per language
        date: date,
        author: author,
        content: `/${postId}.de.md`,
      },
    },
  };

  // Create markdown templates
  const markdownTemplate = `# ${title}

Write your blog post content here...

## Key Points

- Point 1
- Point 2
- Point 3

## Conclusion

Your conclusion here.
`;

  // Write JSON file
  const jsonPath = path.join(blogDir, `${postId}.json`);
  fs.writeFileSync(jsonPath, JSON.stringify(blogPost, null, 2));
  console.log(`✅ Created ${jsonPath}`);

  // Write markdown files
  const languages = ["en", "es", "de"];
  languages.forEach((lang) => {
    const mdPath = path.join(publicDir, `${postId}.${lang}.md`);
    fs.writeFileSync(mdPath, markdownTemplate);
    console.log(`✅ Created ${mdPath}`);
  });

  console.log(`\n🎉 Blog post "${title}" created successfully!`);
  console.log(`📝 Edit the markdown files in /public/ to add your content`);
  console.log(`📄 Edit ${jsonPath} to customize titles per language`);
}

// Get command line arguments
const args = process.argv.slice(2);
if (args.length < 3) {
  console.log(
    "Usage: node create-blog-post.js <post-id> <title> <author> [date]"
  );
  console.log(
    'Example: node create-blog-post.js post-3 "My New Post" "John Doe" "2025-01-15"'
  );
  process.exit(1);
}

const [postId, title, author, date] = args;
createBlogPost(postId, title, author, date);
