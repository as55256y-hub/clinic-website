import { useState, useEffect, useRef } from "react";
import { Phone, Clock, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

function useScrollFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return {
    ref,
    className: `transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
  };
}

const ContactSection = () => {
  const whatsappUrl = "https://wa.me/919209807893";
  const contact = useScrollFadeIn();
  const timing = useScrollFadeIn();

  return (
    <>
      {/* Clinic Hours */}
      <section id="timing" className="py-20 md:py-28 bg-muted/30">
        <div ref={timing.ref} className={`container max-w-6xl mx-auto px-4 ${timing.className}`}>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              Clinic Hours
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Visit Us at Your <span className="text-primary">Convenience</span>
            </h2>
            <p
              className="text-muted-foreground mb-10"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              We maintain convenient hours to ensure you can always find time for
              your health.
            </p>
            <div className="bg-card border border-border/50 rounded-2xl overflow-hidden shadow-lg">
              <div className="grid grid-cols-1 divide-y divide-border/50">
                <div className="flex items-center justify-between p-6">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">
                      Monday – Saturday
                    </span>
                  </div>
                  <span
                    className="text-primary font-bold text-lg"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    11:00 AM – 9:30 PM
                  </span>
                </div>
                <div className="flex items-center justify-between p-6">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">Sunday</span>
                  </div>
                  <span
                    className="text-primary font-bold text-lg"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    11:00 AM – 2:00 PM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Contact */}
      <section id="contact" className="py-20 md:py-28">
        <div
          ref={contact.ref}
          className={`container max-w-6xl mx-auto px-4 ${contact.className}`}
        >
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              Find Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Visit Our <span className="text-primary">Clinic</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Map */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-border/50 h-80 md:h-auto group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.9!2d79.1295!3d21.1005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0ef3fff67af%3A0x2a2b11e3f14e2b1a!2sHomeopathy+Super+Speciality+Clinic!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 320 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic location on Google Maps"
              />
              <a
                href="https://maps.app.goo.gl/CTFjXJxQdGeWf7tt7"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10 flex items-end justify-center pb-4 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <span className="bg-background/90 text-foreground text-sm font-semibold px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" /> Open in Google Maps
                </span>
              </a>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-6">
              <div className="bg-card border border-border/50 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Address</h3>
                    <p
                      className="text-muted-foreground text-sm leading-relaxed"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      444Q+QRM, Umred Rd, Shivam Layout,
                      <br />
                      Rahul Nagar, Dighori, Nagpur,
                      <br />
                      Maharashtra 440034
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border/50 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Phone</h3>
                    <a
                      href="tel:+919372164395"
                      className="text-primary font-semibold hover:underline"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      +91 93721 64395
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border/50 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">
                      Working Hours
                    </h3>
                    <p
                      className="text-muted-foreground text-sm"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Mon–Sat: 11:00 AM – 9:30 PM
                      <br />
                      Sun: 11:00 AM – 2:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button
                  size="lg"
                  className="w-full rounded-xl font-semibold shadow-lg text-base"
                >
                  <MessageCircle className="w-5 h-5 mr-2" /> Chat on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
