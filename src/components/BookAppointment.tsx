import { useState } from "react";
import { Heart, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase, isSupabaseConfigured } from "@/lib/supabaseClient";
import { toast } from "sonner";

const serviceOptions = [
  "General Consultation",
  "Skin Treatment",
  "Hair Treatment",
  "Chronic Disease",
  "Allergies & Asthma",
  "Digestive Issues",
  "Other",
];

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    client_name: "",
    client_email: "",
    phone_number: "",
    service_type: "",
    appointment_date: "",
    appointment_time: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Save booking to Supabase
      const { error } = await supabase.from("bookings").insert({
        client_name: formData.client_name,
        client_email: formData.client_email,
        phone_number: formData.phone_number,
        service_type: formData.service_type,
        appointment_date: formData.appointment_date,
        appointment_time: formData.appointment_time,
      });

      if (error) {
        toast.error("Failed to book appointment", {
          description: error.message,
        });
        setLoading(false);
        return;
      }

      toast.success("Appointment booked successfully! 🎉");

      // Also open WhatsApp with the booking details
      const msg = `Hello Homeopathy Super Speciality Clinic, I would like to book an appointment.\n\nName: ${formData.client_name}\nEmail: ${formData.client_email}\nPhone: ${formData.phone_number}\nService: ${formData.service_type}\nDate: ${formData.appointment_date}\nTime: ${formData.appointment_time}`;
      window.open(
        `https://wa.me/919209807893?text=${encodeURIComponent(msg)}`,
        "_blank"
      );

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          client_name: "",
          client_email: "",
          phone_number: "",
          service_type: "",
          appointment_date: "",
          appointment_time: "",
        });
      }, 3000);
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="book" className="py-20 md:py-28 bg-muted/30">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Appointments
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Book Your <span className="text-primary">Appointment</span>
          </h2>
          <p
            className="text-muted-foreground max-w-lg mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Fill in your details below and we'll confirm your appointment. You'll
            also be redirected to WhatsApp for instant confirmation.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          {submitted ? (
            <div className="py-16 text-center animate-fade-in">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-primary" />
              </div>
              <p className="font-semibold text-foreground text-2xl mb-2">
                Thank You!
              </p>
              <p className="text-muted-foreground">
                Your appointment has been booked. Redirecting to WhatsApp…
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border/50 rounded-2xl p-8 shadow-lg space-y-5"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <CalendarDays className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  Appointment Details
                </h3>
              </div>

              {!isSupabaseConfigured && (
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-amber-800 text-xs leading-relaxed">
                  ⚠️ <strong>Dev note:</strong> Supabase is not configured. Update{" "}
                  <code className="bg-amber-100 px-1 rounded">.env.local</code> with your
                  project URL and anon key. The form will still work (opens WhatsApp)
                  but data won't be saved to the database.
                </div>
              )}

              {/* Full Name */}
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">
                  Full Name
                </label>
                <Input
                  id="booking-name"
                  required
                  placeholder="Enter your full name"
                  value={formData.client_name}
                  onChange={(e) =>
                    setFormData({ ...formData, client_name: e.target.value })
                  }
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">
                  Email Address
                </label>
                <Input
                  id="booking-email"
                  required
                  type="email"
                  placeholder="your@email.com"
                  value={formData.client_email}
                  onChange={(e) =>
                    setFormData({ ...formData, client_email: e.target.value })
                  }
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">
                  Phone Number
                </label>
                <Input
                  id="booking-phone"
                  required
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone_number}
                  onChange={(e) =>
                    setFormData({ ...formData, phone_number: e.target.value })
                  }
                />
              </div>

              {/* Service */}
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">
                  Service Needed
                </label>
                <select
                  id="booking-service"
                  required
                  value={formData.service_type}
                  onChange={(e) =>
                    setFormData({ ...formData, service_type: e.target.value })
                  }
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date + Time */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Preferred Date
                  </label>
                  <Input
                    id="booking-date"
                    required
                    type="date"
                    value={formData.appointment_date}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        appointment_date: e.target.value,
                      })
                    }
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Preferred Time
                  </label>
                  <Input
                    id="booking-time"
                    required
                    type="time"
                    value={formData.appointment_time}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        appointment_time: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="w-full rounded-xl font-semibold text-base mt-2"
              >
                {loading ? "Booking..." : "Confirm & Book via WhatsApp"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookAppointment;
