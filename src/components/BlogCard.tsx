import { Link } from "react-router-dom";

export const BlogCard = ({ id, title, date, author, summary }: any) => (
  console.log({ id }),
  (
    <Link to={`/blog/${id}`}>
      <div className="rounded-2xl p-4 shadow hover:shadow-lg transition mb-4 bg-white">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-sm text-gray-500">
          {date} • {author}
        </p>
        <p className="mt-2">{summary}</p>
      </div>
    </Link>
  )
);
