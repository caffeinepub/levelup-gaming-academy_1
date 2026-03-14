import { Button } from "@/components/ui/button";
import { Send, Youtube } from "lucide-react";
import { useInView } from "../hooks/useInView";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    aria-label="Instagram"
  >
    <title>Instagram</title>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

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
            <Button
              data-ocid="community.instagram_button"
              size="lg"
              variant="outline"
              className="font-orbitron font-bold uppercase tracking-wider text-sm px-8 hover:bg-pink-500/10"
              style={{
                border: "1px solid rgba(225,48,108,0.4)",
                color: "#e1306c",
              }}
              onClick={() =>
                window.open(
                  "https://www.instagram.com/levelupgamingacademy?igsh=M20yMHA3cGk2dXVv&utm_source=qr",
                  "_blank",
                )
              }
            >
              <InstagramIcon className="w-5 h-5 mr-2" />
              Instagram
            </Button>
          </div>

          {/* Stats row */}
          <div
            className={`mt-14 grid grid-cols-3 gap-4 max-w-lg mx-auto ${inView ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            {[
              { value: "8K+", label: "Community Members" },
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
