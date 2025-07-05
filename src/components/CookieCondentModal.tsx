import { useEffect, useState } from "react";

export default function CookieConsentModal() {
  const [isVisible, setIsVisible] = useState(false);

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

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#0f172a] text-white p-6 z-50 shadow-md">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-sm sm:text-left text-center">
          We use cookies to enhance your experience and track anonymous usage
          data. If you share contact info, it may be stored for up to 1 year to
          support your business needs. You can revoke consent anytime.
        </div>
        <div className="flex gap-2">
          <button
            onClick={declineCookies}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
          >
            Decline
          </button>
          <button
            onClick={acceptCookies}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded font-semibold"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
