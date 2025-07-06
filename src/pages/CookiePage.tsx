import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";
import { useSEO } from "../hooks/useSEO";

export default function CookiePage() {
  const { i18n } = useTranslation();
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCookieContent = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/cookies.${i18n.language}.md`);

        if (!response.ok) {
          console.warn(
            `Cookie content not found for language: ${i18n.language}, falling back to English`
          );
          // Fallback to English if the current language file doesn't exist
          const fallbackResponse = await fetch("/cookies.en.md");
          if (fallbackResponse.ok) {
            const fallbackContent = await fallbackResponse.text();
            setContent(fallbackContent);
          } else {
            setContent(
              "# Cookie Policy\n\nCookie policy content not available."
            );
          }
        } else {
          const markdownContent = await response.text();
          setContent(markdownContent);
        }
      } catch (error) {
        console.error("Error loading cookie content:", error);
        setContent("# Cookie Policy\n\nError loading cookie policy content.");
      } finally {
        setLoading(false);
      }
    };

    loadCookieContent();
  }, [i18n.language]);

  // SEO setup
  useSEO({
    title: "Cookie Policy | Zuply8",
    description:
      "Learn about how Zuply8 uses cookies and similar technologies to enhance your experience.",
    ogTitle: "Cookie Policy | Zuply8",
    ogDescription:
      "Learn about how Zuply8 uses cookies and similar technologies to enhance your experience.",
    ogType: "website",
    ogLocale: i18n.language,
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading cookie policy...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Cookie Policy
          </h1>
          <p className="text-gray-600">
            Last updated: {new Date().toLocaleDateString(i18n.language)}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-12">
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>
            If you have any questions about this Cookie Policy, please contact
            us.
          </p>
        </div>
      </div>
    </div>
  );
}
