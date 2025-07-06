import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { X, Cookie, Shield, Settings } from "lucide-react";

export default function CookieConsentModal() {
  const { t, i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookieConsent");
    if (!accepted) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "false");
    setIsVisible(false);
  };

  const acceptEssential = () => {
    localStorage.setItem("cookieConsent", "essential");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50 p-4">
      <div className="bg-white rounded-t-xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Cookie className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Cookie Preferences
              </h3>
              <p className="text-sm text-gray-600">
                Manage your cookie settings
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed">
              We use cookies to enhance your experience, analyze site traffic,
              and personalize content. Some cookies are essential for the
              website to function properly, while others help us improve your
              experience.
            </p>
          </div>

          {/* Cookie Categories */}
          <div className="space-y-4 mb-6">
            {/* Essential Cookies */}
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="p-2 bg-green-100 rounded-lg mt-1">
                <Shield className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 mb-1">
                  Essential Cookies
                </h4>
                <p className="text-sm text-gray-600">
                  Required for the website to function properly. These cannot be
                  disabled.
                </p>
              </div>
              <div className="flex items-center">
                <span className="text-sm text-green-600 font-medium">
                  Always Active
                </span>
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="p-2 bg-blue-100 rounded-lg mt-1">
                <Settings className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 mb-1">
                  Analytics Cookies
                </h4>
                <p className="text-sm text-gray-600">
                  Help us understand how visitors interact with our website to
                  improve performance.
                </p>
              </div>
              <div className="flex items-center">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    defaultChecked
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-600">
              <strong>Note:</strong> You can change your cookie preferences at
              any time by visiting our
              <a href="/cookies" className="text-blue-600 hover:underline ml-1">
                Cookie Policy
              </a>
              .
            </p>
          </div>
        </div>

        {/* Footer with Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 p-6 border-t border-gray-200 bg-gray-50">
          <button
            onClick={declineCookies}
            className="flex-1 sm:flex-none px-6 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            Decline All
          </button>
          <button
            onClick={acceptEssential}
            className="flex-1 sm:flex-none px-6 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            Essential Only
          </button>
          <button
            onClick={acceptCookies}
            className="flex-1 sm:flex-none px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
