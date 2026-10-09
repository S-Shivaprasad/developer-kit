import { useState } from "react";
import ToolPage from "../components/ToolPage";
import Button from "../components/Button";
import Seo from "../components/Seo";

function UuidGenerator() {
  const [uuid, setUuid] = useState("");
  const [copied, setCopied] = useState(false);
  const [multipleUuids, setMultipleUuids] = useState([]);

  const generateUuid = () => {
    setUuid(crypto.randomUUID());
  };

  const generateMultipleUuids = () => {
    const newUuids = Array.from(
      { length: 5 },
      () => crypto.randomUUID()
    );

    setMultipleUuids(newUuids);
  };

  const copyUuid = async () => {
    if (!uuid) {
      return;
    }

    await navigator.clipboard.writeText(uuid);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const clearTool = () => {
    setUuid("");
    setMultipleUuids([]);
    setCopied(false);
  };

  return (
    <>
      <Seo
        title="UUID Generator — DevKit"
        description="Generate unique UUIDs online with DevKit's free UUID Generator."
      />
      <ToolPage
        title="UUID Generator"
        description="Generate unique UUIDs instantly in your browser."
      >

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-xl sm:p-6">

          {/* Buttons */}
          <div className="flex flex-wrap gap-3">
            <Button onClick={generateUuid}>
              Generate UUID
            </Button>

            <Button
              variant="secondary"
              onClick={generateMultipleUuids}
            >
              Generate 5 UUIDs
            </Button>

            <Button
              variant="secondary"
              onClick={copyUuid}
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

          {/* Single UUID */}
          <div className="mt-6">
            <label
              htmlFor="uuid-output"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Generated UUID
            </label>

            <input
              id="uuid-output"
              type="text"
              value={uuid}
              readOnly
              placeholder="Your UUID will appear here..."
              className="w-full rounded-xl border border-slate-800 bg-slate-950/60 p-4 font-mono text-sm leading-6 text-slate-300 outline-none placeholder:text-slate-600 focus:border-slate-600 focus:ring-2 focus:ring-slate-500/40"
            />
          </div>

          {/* Multiple UUIDs */}
          {multipleUuids.length > 0 && (
            <div className="mt-6">
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Generated UUIDs
              </label>

              <div className="space-y-2">
                {multipleUuids.map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-slate-800 bg-slate-950/60 p-3 font-mono text-xs leading-6 text-slate-300 transition hover:border-slate-700 sm:text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </ToolPage>
    </>
  );
}

export default UuidGenerator;