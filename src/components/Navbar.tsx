import { useState } from "react";
import { Leaf, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "book", label: "Book" },
  { id: "testimonials", label: "Reviews" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border/40">
      <div className="container max-w-6xl mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Leaf className="w-5 h-5 text-primary" />
          </div>
          <div>
            <span
              className="text-lg font-semibold text-foreground"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Homeopathy
            </span>
            <p className="text-[10px] text-muted-foreground leading-none tracking-wide uppercase">
              Super Speciality Clinic
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={scrollTo(link.id)}
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            onClick={scrollTo("book")}
            className="rounded-full px-5 font-semibold shadow-md hover:shadow-lg transition-shadow hidden sm:inline-flex"
          >
            Book Appointment
          </Button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-md">
          <nav className="flex flex-col px-4 py-3 gap-1 text-sm font-medium text-muted-foreground">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={scrollTo(item.id)}
                className="py-2.5 px-3 rounded-lg hover:bg-accent hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button
              size="sm"
              onClick={scrollTo("book")}
              className="rounded-full mt-2 font-semibold"
            >
              Book Appointment
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
