import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function BlogAdmin() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    postId: "",
    title: "",
    author: "",
    date: new Date().toISOString().split("T")[0],
    content: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/blog/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Blog post created successfully!");
        setFormData({
          postId: "",
          title: "",
          author: "",
          date: new Date().toISOString().split("T")[0],
          content: "",
        });
      } else {
        alert("Error creating blog post");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error creating blog post");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Blog Admin</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Post ID</label>
          <input
            type="text"
            value={formData.postId}
            onChange={(e) =>
              setFormData({ ...formData, postId: e.target.value })
            }
            className="w-full p-2 border rounded"
            placeholder="e.g., post-3"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            className="w-full p-2 border rounded"
            placeholder="Your blog post title"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Author</label>
          <input
            type="text"
            value={formData.author}
            onChange={(e) =>
              setFormData({ ...formData, author: e.target.value })
            }
            className="w-full p-2 border rounded"
            placeholder="Author name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Date</label>
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Content (Markdown)
          </label>
          <textarea
            value={formData.content}
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
            className="w-full p-2 border rounded h-64"
            placeholder="# Your blog post content in markdown..."
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Create Blog Post
        </button>
      </form>
    </div>
  );
}
