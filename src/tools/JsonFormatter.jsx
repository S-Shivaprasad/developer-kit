import { useState } from "react";
import ToolPage from "../components/ToolPage";
import Button from "../components/Button";
import Seo from "../components/Seo";

function JsonFormatter() {
  const [jsonInput, setJsonInput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const formatJson = () => {
    if (!jsonInput.trim()) {
      setError("Please enter some JSON to format.");
      return;
    }

    try {
      const parsedJson = JSON.parse(jsonInput);

      const formattedJson = JSON.stringify(
        parsedJson,
        null,
        2
      );

      setJsonInput(formattedJson);
      setError("");
    } catch {
      setError("Invalid JSON. Please check your input.");
    }
  };

  const copyJson = async () => {
    await navigator.clipboard.writeText(jsonInput);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const clearJson = () => {
    setJsonInput("");
    setError("");
    setCopied(false);
  };

  return (
    <>
      <Seo
        title="JSON Formatter — DevKit"
        description="Format and beautify JSON online with DevKit's free JSON Formatter."
      />
      <ToolPage
        title="JSON Formatter"
        description="Format and beautify your JSON data with proper indentation."
      >

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-xl sm:p-6">
          <label
            htmlFor="json-input"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            JSON Input
          </label>

          <textarea
            id="json-input"
            value={jsonInput}
            onChange={(event) => {
              setJsonInput(event.target.value);
              setError("");
            }}
            placeholder="Paste your JSON here..."
            spellCheck="false"
            className="h-96 w-full resize-y rounded-xl border border-slate-700 bg-slate-950 p-4 font-mono text-sm leading-6 text-white outline-none placeholder:text-slate-600 focus:border-slate-500 focus:ring-2 focus:ring-slate-500/40"
          />

          {error && (
            <p className="mt-3 text-sm text-red-400">
              {error}
            </p>
          )}

          <div className="mt-4 flex flex-wrap gap-3">
            <Button onClick={formatJson}>
              Format JSON
            </Button>

            <button
              onClick={copyJson}
              className="rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-300 transition hover:border-slate-500 hover:text-white"
            >
              {copied ? "Copied ✓" : "Copy"}
            </button>

            <Button
              variant="secondary"
              onClick={clearJson}
            >
              Clear
            </Button>
          </div>
        </div>
      </ToolPage>
    </>
  );
}

export default JsonFormatter;