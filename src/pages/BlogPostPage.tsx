import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { BlogPost } from "../components/BlogPost";
import { useSEO } from "../hooks/useSEO";

export default function BlogPostPage() {
  const { id } = useParams();

  const { i18n } = useTranslation();
  const [post, setPost] = useState<null | {
    title: string;
    date: string;
    author: string;
    content: string;
  }>(null);

  useEffect(() => {
    const allPosts = import.meta.glob("/src/blog/*.json");
    const key = `/src/blog/${id}.json`;

    const loader = allPosts[key];

    if (!loader) {
      console.error(`Post file not found for key: ${key}`);
      return;
    }

    loader()
      .then(async (mod: any) => {
        const translation = mod.default.translations?.[i18n.language];
        if (!translation) {
          console.warn("Translation not found for language:", i18n.language);
          return;
        }

        const { title, date, author, content: mdPath } = translation;

        // Load the actual markdown file
        const res = await fetch(mdPath);
        if (!res.ok) {
          console.error(`Markdown file not found: ${mdPath}`);
          return;
        }
        const markdown = await res.text();

        setPost({ title, date, author, content: markdown });
      })
      .catch((err: any) => {
        console.error("Post loading error:", err);
      });
  }, [id, i18n.language]);

  // Use our custom SEO hook
  useSEO({
    title: post ? `${post.title} | Zuply8 Blog` : undefined,
    description: post ? post.content.slice(0, 150) : undefined,
    ogTitle: post ? post.title : undefined,
    ogDescription: post ? post.content.slice(0, 150) : undefined,
    ogType: "article",
    ogLocale: i18n.language,
  });

  if (!post) return <p>Loading post...</p>;

  return (
    <div className="max-w-2xl mx-auto px-4 pt-6">
      <BlogPost {...post} />
    </div>
  );
}
