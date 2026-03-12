import { Heart, MapPin, Phone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20">
      {/* Background Gradient (no image dependency) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/20 to-background" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <Heart className="w-3.5 h-3.5" /> Trusted Homeopathic Care
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-5">
            Homeopathy{" "}
            <span className="text-primary">Super Speciality</span>{" "}
            Clinic
          </h1>

          <p
            className="text-lg text-muted-foreground leading-relaxed mb-8"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Experience the power of advanced homeopathic medicine. We provide
            gentle, effective, and personalized treatments for chronic and acute
            conditions — naturally.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button
              size="lg"
              onClick={scrollTo("book")}
              className="rounded-full px-8 font-semibold shadow-lg hover:shadow-xl transition-all text-base"
            >
              Book Appointment <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
            <a href="#services" onClick={scrollTo("services")}>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 font-semibold text-base"
              >
                View Treatments
              </Button>
            </a>
          </div>

          <div className="flex items-center gap-6 mt-10">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              Dighori, Nagpur
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4 text-primary" />
              +91 93721 64395
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
