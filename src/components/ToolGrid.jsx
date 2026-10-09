import ToolCard from "./ToolCard";

function ToolGrid() {
  return (
    <section
      id="tools"
      className="mx-auto max-w-6xl px-6 pb-20"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <ToolCard
          icon="{}"
          title="JSON Formatter"
          description="Format and beautify your JSON data."
          path="/json-formatter"
        />

        <ToolCard
          icon="✓"
          title="JSON Validator"
          description="Check whether your JSON is valid."
          path="/json-validator"
        />

        <ToolCard
          icon="⇄"
          title="Base64 Encoder"
          description="Encode and decode Base64 strings quickly."
          path="/base64"
        />

        <ToolCard
          icon="#"
          title="UUID Generator"
          description="Generate unique UUIDs instantly."
          path="/uuid"
        />
      </div>
    </section>
  );
}

export default ToolGrid;