import ReactMarkdown from "react-markdown";

type BlogPostProps = {
  title: string;
  date: string;
  author: string;
  content: string;
};

export const BlogPost = ({ title, date, author, content }: BlogPostProps) => (
  <article className="mb-8 p-4 border rounded-2xl shadow">
    <img className="object-cover" src="" alt="" />
    <h2 className="text-2xl font-bold">{title}</h2>
    <p className="text-sm text-gray-500">
      {date} • {author}
    </p>
    <div className="mt-4 prose  max-w-none">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  </article>
);
