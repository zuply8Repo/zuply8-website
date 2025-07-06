import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  ogLocale?: string;
}

export const useSEO = ({
  title,
  description,
  ogTitle,
  ogDescription,
  ogType = "website",
  ogLocale,
}: SEOProps) => {
  useEffect(() => {
    // Update title
    if (title) {
      document.title = title;
    }

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const selector = property
        ? `meta[property="${name}"]`
        : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;

      if (!meta) {
        meta = document.createElement("meta");
        if (property) {
          meta.setAttribute("property", name);
        } else {
          meta.setAttribute("name", name);
        }
        document.head.appendChild(meta);
      }

      meta.setAttribute("content", content);
    };

    // Update description
    if (description) {
      updateMetaTag("description", description);
    }

    // Update Open Graph tags
    if (ogTitle) {
      updateMetaTag("og:title", ogTitle, true);
    }
    if (ogDescription) {
      updateMetaTag("og:description", ogDescription, true);
    }
    if (ogType) {
      updateMetaTag("og:type", ogType, true);
    }
    if (ogLocale) {
      updateMetaTag("og:locale", ogLocale, true);
    }

    // Cleanup function to restore original title if needed
    return () => {
      if (title) {
        document.title = "Zuply8"; // Default title
      }
    };
  }, [title, description, ogTitle, ogDescription, ogType, ogLocale]);
};
