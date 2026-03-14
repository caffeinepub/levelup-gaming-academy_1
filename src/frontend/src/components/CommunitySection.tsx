import { Button } from "@/components/ui/button";
import { MessageCircle, Send, Youtube } from "lucide-react";
import { useInView } from "../hooks/useInView";

export default function CommunitySection() {
  const { ref, inView } = useInView();
  return (
    <section
      id="community"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 px-4 hex-bg"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className={`${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          <div
            className="inline-block text-xs font-orbitron font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
            style={{
              background: "rgba(0,212,255,0.1)",
              border: "1px solid rgba(0,212,255,0.2)",
              color: "#00d4ff",
            }}
          >
            Community
          </div>
          <h2 className="font-orbitron font-black text-3xl sm:text-4xl text-white mb-4">
            Join Our{" "}
            <span className="gradient-text-blue-purple">Community</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto mb-8 text-base leading-relaxed">
            Connect with thousands of gamers. Find teammates, share gameplay
            clips, discuss strategies, and level up together. Our community is
            your second squad.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              data-ocid="community.discord_button"
              size="lg"
              className="font-orbitron font-bold uppercase tracking-wider text-sm px-8"
              style={{
                background: "#5865F2",
                color: "#fff",
                boxShadow: "0 0 20px rgba(88,101,242,0.4)",
              }}
              onClick={() => window.open("#", "_blank")}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Join Discord
            </Button>
            <Button
              data-ocid="community.youtube_button"
              size="lg"
              variant="outline"
              className="font-orbitron font-bold uppercase tracking-wider text-sm px-8 hover:bg-red-500/10"
              style={{
                border: "1px solid rgba(239,68,68,0.4)",
                color: "#ef4444",
              }}
              onClick={() =>
                window.open(
                  "https://youtube.com/@levelupgamingacademy-f9l?si=LMvCOGhyrLAEvaBO",
                  "_blank",
                )
              }
            >
              <Youtube className="w-5 h-5 mr-2" />
              YouTube
            </Button>
            <Button
              data-ocid="community.telegram_button"
              size="lg"
              variant="outline"
              className="font-orbitron font-bold uppercase tracking-wider text-sm px-8 hover:bg-sky-500/10"
              style={{
                border: "1px solid rgba(38,165,228,0.4)",
                color: "#26a5e4",
              }}
              onClick={() =>
                window.open("https://t.me/LevelupGamingAcedemy", "_blank")
              }
            >
              <Send className="w-5 h-5 mr-2" />
              Telegram
            </Button>
          </div>

          {/* Stats row */}
          <div
            className={`mt-14 grid grid-cols-3 gap-4 max-w-lg mx-auto ${inView ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            {[
              { value: "8K+", label: "Discord Members" },
              { value: "120+", label: "Coaches" },
              { value: "500+", label: "Daily Players" },
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
      </div>
    </section>
  );
}
