import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react"; // or any icon library you use
import { useState } from "react";

export function LanguageSelector() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  return (
    <div className="relative ml-6">
      <button
        onClick={() => setOpen(!open)}
        className="text-gray-800 hover:text-orange-500 flex items-center gap-1"
      >
        <Globe className="w-5 h-5" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-28 bg-white shadow-lg rounded border z-50">
          <button
            onClick={() => changeLanguage("en")}
            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
          >
            English
          </button>
          <button
            onClick={() => changeLanguage("de")}
            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
          >
            Deutsch
          </button>
          <button
            onClick={() => changeLanguage("es")}
            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
          >
            Español
          </button>
        </div>
      )}
    </div>
  );
}
