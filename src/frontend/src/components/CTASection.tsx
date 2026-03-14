import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import { useInView } from "../hooks/useInView";

export default function CTASection() {
  const { ref, inView } = useInView();
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 px-4 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #050510 0%, #0d0522 50%, #050510 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(139,92,246,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className={`relative z-10 max-w-2xl mx-auto text-center ${inView ? "animate-fade-in-up" : "opacity-0"}`}
      >
        <h2 className="font-orbitron font-black text-4xl sm:text-5xl text-white mb-4">
          Ready to <span className="gradient-text-blue-purple">Level Up?</span>
        </h2>
        <p className="text-white/50 text-lg mb-10">
          Choose your pack and start your journey today.
        </p>
        <Button
          data-ocid="cta.primary_button"
          size="lg"
          onClick={() => scrollTo("#packs")}
          className="font-orbitron font-bold uppercase tracking-wider text-sm px-12 py-7 transition-all duration-300"
          style={{
            background: "linear-gradient(135deg,#00d4ff,#8b5cf6)",
            color: "#050510",
            boxShadow: "0 0 40px rgba(139,92,246,0.4)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
            (e.currentTarget as HTMLElement).style.boxShadow =
              "0 0 60px rgba(139,92,246,0.6)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "scale(1)";
            (e.currentTarget as HTMLElement).style.boxShadow =
              "0 0 40px rgba(139,92,246,0.4)";
          }}
        >
          <Rocket className="w-5 h-5 mr-2" />
          Get Started Now
        </Button>
      </div>
    </section>
  );
}
