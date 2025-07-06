import { useState } from "react";
import { CalendarClock } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactPage() {
  const [fileName, setFileName] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <section className="max-w-xl mx-auto px-4 py-24">
      <h1 className="text-h1 font-delivery font-bold mb-4">
        We are so excited to work with you!
      </h1>
      <p className="text-h3 mb-8">Please select an available time.</p>

      {/* Reserve */}
      <div>
        <button
          type="button"
          onClick={() => setShowCalendar(true)}
          className="flex items-center gap-2 px-4 py-2 border border-orange-500 text-orange-500 rounded hover:bg-orange-50 transition"
        >
          <CalendarClock className="w-5 h-5" />
          Book an Appointment
        </button>
      </div>

      {/* Embedded Calendar iframe */}
      {showCalendar && (
        <div className="mt-4 border rounded overflow-hidden">
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3GFu2rUM40JHW_5_J2yNjUyrozK32JkTEJBmXtU8MT94CHuUptiX5FOAT3mWyywCPY99UNjdP_?gv=true"
            style={{ border: 0 }}
            width="100%"
            height="1000"
            frameBorder="0"
            scrolling="yes"
            title="Book a meeting"
          ></iframe>
        </div>
      )}
    </section>
  );
}
