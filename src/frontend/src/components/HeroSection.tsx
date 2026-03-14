import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { Gamepad2, Trophy } from "lucide-react";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Ambient glows */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,255,136,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-orbitron font-bold uppercase tracking-widest mb-8 animate-fade-in-up"
          style={{
            background: "rgba(0,212,255,0.1)",
            border: "1px solid rgba(0,212,255,0.3)",
            color: "#00d4ff",
            animationDelay: "0.1s",
            opacity: 0,
          }}
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse-dot"
            style={{ background: "#00ff88" }}
          />
          Elite Gaming Academy
        </div>

        {/* Title */}
        <h1
          className="font-orbitron font-black text-4xl sm:text-6xl lg:text-7xl leading-tight mb-4 animate-fade-in-up"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          <span className="gradient-text-blue-purple">LevelUp</span>
          <br />
          <span className="text-white">Gaming Academy</span>
        </h1>

        {/* Slogan */}
        <p
          className="font-rajdhani font-bold text-2xl sm:text-3xl gradient-text-green mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.35s", opacity: 0 }}
        >
          Train Smart. Play Better. Win More.
        </p>

        {/* Description */}
        <p
          className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.5s", opacity: 0 }}
        >
          Unlock your full gaming potential across shooters, strategy games,
          creative games, and chess. Structured training, real tournaments, and
          an elite community — all in one place.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.65s", opacity: 0 }}
        >
          <Button
            data-ocid="hero.primary_button"
            size="lg"
            onClick={() => navigate({ to: "/games" })}
            className="group relative font-orbitron font-bold uppercase tracking-wider text-sm px-8 py-6 transition-all duration-300"
            style={{
              background: "linear-gradient(135deg,#00d4ff,#0088aa)",
              color: "#050510",
              boxShadow: "0 0 20px rgba(0,212,255,0.3)",
            }}
          >
            <Gamepad2 className="w-4 h-4 mr-2" />
            Select Games
          </Button>
          <Button
            data-ocid="hero.secondary_button"
            size="lg"
            variant="outline"
            onClick={() => navigate({ to: "/tournaments" })}
            className="font-orbitron font-bold uppercase tracking-wider text-sm px-8 py-6 transition-all duration-300 hover:bg-purple-500/10"
            style={{
              border: "1px solid rgba(139,92,246,0.6)",
              color: "#8b5cf6",
            }}
          >
            <Trophy className="w-4 h-4 mr-2" />
            View Tournaments
          </Button>
        </div>

        {/* Stats */}
        <div
          className="flex items-center justify-center gap-8 mt-16 animate-fade-in-up"
          style={{ animationDelay: "0.8s", opacity: 0 }}
        >
          {[
            { value: "10K+", label: "Players Trained" },
            { value: "5", label: "Game Titles" },
            { value: "500+", label: "Tournaments" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="font-orbitron font-black text-2xl"
                style={{ color: "#00d4ff" }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-white/40 font-rajdhani uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-white/40" />
        </div>
      </div>
    </section>
  );
}
