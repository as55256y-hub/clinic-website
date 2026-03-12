import { useState, useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";

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

const stats = [
  { num: "15+", label: "Years Experience" },
  { num: "10K+", label: "Happy Patients" },
  { num: "100%", label: "Natural Remedies" },
  { num: "50+", label: "Conditions Treated" },
];

const features = [
  "Personalized treatment plans",
  "Advanced constitutional analysis",
  "Family-friendly care",
  "Evidence-based homeopathy",
  "Follow-up & progress tracking",
];

const AboutSection = () => {
  const about = useScrollFadeIn();

  return (
    <section id="about" className="py-20 md:py-28 bg-muted/30">
      <div ref={about.ref} className={`container max-w-6xl mx-auto px-4 ${about.className}`}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text + Stats */}
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
              Advanced Homeopathy for a{" "}
              <span className="text-primary">Healthier You</span>
            </h2>
            <p
              className="text-muted-foreground leading-relaxed mb-4"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              At Homeopathy Super Speciality Clinic, located in the heart of
              Dighori, Nagpur, we bring decades of expertise in treating complex
              and chronic conditions through the science of homeopathy.
            </p>
            <p
              className="text-muted-foreground leading-relaxed mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Our clinic specializes in deep-acting constitutional treatments
              that address the root cause of diseases — not just the symptoms.
              From skin disorders to hormonal imbalances, respiratory issues to
              digestive ailments, we offer safe and effective solutions for the
              entire family.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card rounded-xl p-4 border border-border/50 text-center"
                >
                  <p className="text-2xl font-bold text-primary">{stat.num}</p>
                  <p
                    className="text-xs text-muted-foreground mt-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Features */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-accent/30 rounded-3xl p-8 md:p-12">
              <div className="space-y-6">
                {features.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <ChevronRight className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span
                      className="text-foreground font-medium text-sm"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
