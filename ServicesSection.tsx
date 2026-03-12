import { useState, useEffect, useRef } from "react";
import { Heart, Leaf, Stethoscope, Shield } from "lucide-react";

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

const services = [
  {
    icon: Heart,
    title: "Chronic Disease Management",
    desc: "Expert treatment for long-standing health conditions using advanced homeopathic protocols.",
  },
  {
    icon: Leaf,
    title: "Natural Healing",
    desc: "100% natural remedies with zero side effects for holistic wellness and vitality.",
  },
  {
    icon: Stethoscope,
    title: "Personalized Consultation",
    desc: "In-depth case analysis and individualized treatment plans tailored to your constitution.",
  },
  {
    icon: Shield,
    title: "Preventive Care",
    desc: "Strengthen your immunity and prevent recurring ailments with constitutional treatments.",
  },
];

const ServicesSection = () => {
  const anim = useScrollFadeIn();

  return (
    <section id="services" className="py-20 md:py-28">
      <div
        ref={anim.ref}
        className={`container max-w-6xl mx-auto px-4 text-center ${anim.className}`}
      >
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
          Our Services
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Comprehensive{" "}
          <span className="text-primary">Homeopathic Care</span>
        </h2>
        <p
          className="text-muted-foreground max-w-lg mx-auto mb-12"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          We offer a wide range of specialized treatments to support your journey
          to complete wellness.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card border border-border/50 rounded-2xl p-6 text-left hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2 text-base">
                {service.title}
              </h3>
              <p
                className="text-muted-foreground text-sm leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
