import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { BlogCard } from "./assets/Components/BlogCard";

// This assumes blog posts are stored locally
//const blogPostFiles = ["/src/blog/post-1.json"];
const blogFiles = import.meta.glob("/src/blog/*.json"); // Glob all blog JSONs

// Is this peace of code static contraproductive. Can I save better the name of a post in a secuence format post-1, post-2 and program this way to not have an static variable and find according how many post exist.

export default function Blog() {
  const { i18n } = useTranslation();
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      const globbed = import.meta.glob("/src/blog/*.json");
      const entries = Object.entries(globbed);

      const postModules = await Promise.all(
        entries.map(async ([path, loader]) => {
          const mod = await loader();
          const id =
            mod.default?.id ||
            path.split("/").pop()?.replace(".json", "") ||
            "unknown";
          const translation = mod.default?.translations?.[i18n.language];
          return translation ? { id, ...translation } : null;
        })
      );

      const filtered = postModules.filter(Boolean); // remove nulls
      setPosts(filtered);

      //const postModules = await Promise.all(
      //  Object.values(globbed).map((loader) => loader())
      //);
      //const translated = postModules
      //  .map((m) => m.default?.translations?.[i18n.language])
      //  .filter(Boolean);
      //setPosts(translated);
    };

    loadPosts();
  }, [i18n.language]);

  return (
    <div className="max-w-2xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      {posts.map(
        (p) => (console.log({ p }), (<BlogCard key={p.id} {...p} id={p.id} />))
      )}
    </div>
  );
}
