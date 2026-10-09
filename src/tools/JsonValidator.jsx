import { useState } from "react";
import ToolPage from "../components/ToolPage";
import Button from "../components/Button";
import Seo from "../components/Seo";

function JsonValidator() {
  const [jsonInput, setJsonInput] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const validateJson = () => {
    if (!jsonInput.trim()) {
      setStatus("");
      setError("Please enter some JSON to validate.");
      return;
    }

    try {
      JSON.parse(jsonInput);

      setStatus("valid");
      setError("");
    } catch (error) {
      setStatus("invalid");
      setError(`Invalid JSON: ${error.message}`);
    }
  };

  const clearJson = () => {
    setJsonInput("");
    setStatus("");
    setError("");
  };

  return (
    <>
      <Seo
        title="JSON Validator — DevKit"
        description="Check and validate JSON online with DevKit's free JSON Validator."
      />
      <ToolPage
        title="JSON Validator"
        description="Check whether your JSON data is valid."
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
            onChange={(event) => setJsonInput(event.target.value)}
            placeholder="Paste your JSON here..."
            spellCheck="false"
            className="h-96 w-full resize-y rounded-xl border border-slate-700 bg-slate-950 p-4 font-mono text-sm leading-6 text-white outline-none placeholder:text-slate-600 focus:border-slate-500 focus:ring-2 focus:ring-slate-500/40"
          />

          <div className="mt-4 flex flex-wrap gap-3">
            <Button onClick={validateJson}>
              Validate JSON
            </Button>

            <Button
              variant="secondary"
              onClick={clearJson}
            >
              Clear
            </Button>
          </div>

          {status === "valid" && (
            <div className="mt-4 rounded-lg border border-green-900 bg-green-950/40 p-4">
              <p className="text-sm font-medium text-green-400">
                ✓ Valid JSON
              </p>
            </div>
          )}

          {status === "invalid" && (
            <div className="mt-4 rounded-lg border border-red-900 bg-red-950/40 p-4">
              <p className="text-sm font-medium text-red-400">
                ✕ Invalid JSON
              </p>

              <p className="mt-1 text-sm text-red-300/70">
                {error}
              </p>
            </div>
          )}
        </div>
      </ToolPage>
    </>
  );
}

export default JsonValidator;