import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="border-b border-slate-800 px-6 py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link
          to="/"
          className="text-xl font-bold tracking-tight transition hover:text-slate-300"
        >
          DevKit
        </Link>

        <div className="flex items-center gap-6 text-sm text-slate-400">
          <Link
            to="/"
            className="rounded-md px-2 py-2 transition hover:bg-slate-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-400"
          >
            Tools
          </Link>

          <a
            href="#"
            className="rounded-md px-2 py-2 transition hover:bg-slate-900 hover:text-white"
          >
            About
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;