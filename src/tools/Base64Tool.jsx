import { useState } from "react";
import ToolPage from "../components/ToolPage";
import Button from "../components/Button";
import Seo from "../components/Seo";

function Base64Tool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const clearTool = () => {
    setInput("");
    setOutput("");
    setError("");
    setCopied(false);
  };

  const encodeBase64 = () => {
    if (!input.trim()) {
      setError("Please enter some text to encode.");
      setOutput("");
      return;
    }

    try {
      const encoded = btoa(input);

      setOutput(encoded);
      setError("");
    } catch {
      setOutput("");
      setError("Unable to encode this text.");
    }
  };

  const decodeBase64 = () => {
    if (!input.trim()) {
      setError("Please enter some Base64 to decode.");
      setOutput("");
      return;
    }

    try {
      const decoded = atob(input);

      setOutput(decoded);
      setError("");
    } catch {
      setOutput("");
      setError("Invalid Base64 input.");
    }
  };

  const copyOutput = async () => {
    if (!output) {
      return;
    }

    await navigator.clipboard.writeText(output);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <>
      <Seo
        title="Base64 Encoder & Decoder — DevKit"
        description="Encode and decode Base64 online with DevKit's free Base64 tool."
      />
      <ToolPage
        title="Base64 Encoder / Decoder"
        description="Encode text to Base64 or decode Base64 back to text."
      >

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-xl sm:p-6">
          <label
            htmlFor="base64-input"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Input
          </label>

          <textarea
            id="base64-input"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Enter text or Base64..."
            spellCheck="false"
            className="h-64 w-full resize-y rounded-xl border border-slate-700 bg-slate-950 p-4 font-mono text-sm leading-6 text-white outline-none placeholder:text-slate-600 focus:ring-2 focus:ring-slate-500/40"
          />

          <div className="mt-4 flex flex-wrap gap-3">
            <Button onClick={encodeBase64}>
              Encode
            </Button>
            {error && (
              <p className="mt-4 text-sm text-red-400">
                {error}
              </p>
            )}
            <Button onClick={decodeBase64}>
              Decode
            </Button>

            <Button
              variant="secondary"
              onClick={copyOutput}
            >
              {copied ? "Copied ✓" : "Copy"}
            </Button>

            <Button
              variant="secondary"
              onClick={clearTool}
            >
              Clear
            </Button>
          </div>

          <div className="mt-8">
            <label
              htmlFor="base64-output"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Output
            </label>

            <textarea
              id="base64-output"
              value={output}
              readOnly
              placeholder="Result will appear here..."
              className="h-64 w-full resize-y rounded-xl border border-slate-800 bg-slate-950/60 p-4 font-mono text-sm leading-6 text-slate-300 outline-none placeholder:text-slate-600 focus:ring-2 focus:ring-slate-500/40"
            />
          </div>
        </div>
      </ToolPage>
    </>
  );
}

export default Base64Tool;