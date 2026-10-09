import Hero from "../components/Hero";
import ToolGrid from "../components/ToolGrid";
import Seo from "../components/Seo";

function Home() {
  return (
    <>
      <Seo
        title="DevKit — Free Developer Tools"
        description="Free online developer tools for formatting JSON, validating JSON, encoding Base64, and generating UUIDs."
      />
      <Hero />
      <ToolGrid />
    </>
  );
}

export default Home;