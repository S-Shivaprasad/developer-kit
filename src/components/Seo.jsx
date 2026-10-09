import { useEffect } from "react";

function Seo({ title, description }) {
  useEffect(() => {
    document.title = title;

    const descriptionTag = document.querySelector(
      'meta[name="description"]'
    );

    if (descriptionTag) {
      descriptionTag.setAttribute(
        "content",
        description
      );
    }
    const ogTitleTag = document.querySelector(
      'meta[property="og:title"]'
    );

    if (ogTitleTag) {
      ogTitleTag.setAttribute("content", title);
    }

    const ogDescriptionTag = document.querySelector(
      'meta[property="og:description"]'
    );

    if (ogDescriptionTag) {
      ogDescriptionTag.setAttribute(
        "content",
        description
      );
    }
  }, [title, description]);

  return null;
}

export default Seo;