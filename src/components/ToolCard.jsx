import { Link } from "react-router-dom";

function ToolCard({ icon, title, description, path }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-slate-600">
      <div className="mb-4 text-3xl">
        {icon}
      </div>

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-400">
        {description}
      </p>

      <Link
        to={path}
        className="mt-5 inline-block rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-900"
      >
        Open Tool →
      </Link>
    </div>
  );
}

export default ToolCard;