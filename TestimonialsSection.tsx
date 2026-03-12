import { useState, useEffect, useRef } from "react";
import { Star } from "lucide-react";

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

const testimonials = [
  {
    name: "Priya Sharma",
    text: "After years of struggling with migraines, Dr. provided a treatment that finally gave me lasting relief. Truly grateful!",
    rating: 5,
  },
  {
    name: "Rajesh Patil",
    text: "The personalized approach here is unmatched. My chronic skin condition improved dramatically within months.",
    rating: 5,
  },
  {
    name: "Anita Deshmukh",
    text: "A very professional and caring clinic. The homeopathic treatment for my child's allergies has been incredibly effective.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const anim = useScrollFadeIn();

  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div
        ref={anim.ref}
        className={`container max-w-6xl mx-auto px-4 text-center ${anim.className}`}
      >
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
          Testimonials
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          What Our <span className="text-primary">Patients Say</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card border border-border/50 rounded-2xl p-6 text-left hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <p
                className="text-muted-foreground text-sm leading-relaxed mb-5"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                "{t.text}"
              </p>
              <p className="font-semibold text-foreground text-sm">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
