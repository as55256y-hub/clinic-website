import { Leaf } from "lucide-react";

const Footer = () => {
  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Leaf className="w-5 h-5 text-primary" />
              <span
                className="text-lg font-semibold"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Homeopathy Super Speciality Clinic
              </span>
            </div>
            <p
              className="text-sm opacity-70 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Providing expert homeopathic care with personalized treatments for
              chronic and acute conditions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-80">
              Quick Links
            </h4>
            <div
              className="space-y-2 text-sm opacity-70"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <a
                href="#about"
                onClick={scrollTo("about")}
                className="block hover:text-primary transition-colors"
              >
                About Us
              </a>
              <a
                href="#services"
                onClick={scrollTo("services")}
                className="block hover:text-primary transition-colors"
              >
                Services
              </a>
              <a
                href="#timing"
                onClick={scrollTo("timing")}
                className="block hover:text-primary transition-colors"
              >
                Clinic Hours
              </a>
              <a
                href="#contact"
                onClick={scrollTo("contact")}
                className="block hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-80">
              Contact Info
            </h4>
            <div
              className="space-y-2 text-sm opacity-70"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <p>📍 Dighori, Nagpur, Maharashtra 440034</p>
              <p>📞 +91 93721 64395</p>
              <p>🕐 Mon-Sat: 11 AM – 9:30 PM</p>
              <p>🕐 Sun: 11 AM – 2 PM</p>
            </div>
          </div>
        </div>

        <div
          className="border-t border-background/10 pt-6 text-center text-xs opacity-50"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          © {new Date().getFullYear()} Homeopathy Super Speciality Clinic. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
