function ToolPage({ title, description, children }) {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <div className="mb-8">
        <p className="text-sm font-medium text-slate-400">
          Developer Tool
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h1>

        <p className="mt-3 max-w-2xl text-slate-400">
          {description}
        </p>
      </div>

      {children}
    </main>
  );
}

export default ToolPage;