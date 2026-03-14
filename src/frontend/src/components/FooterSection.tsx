import { MessageCircle, Send, Youtube, Zap } from "lucide-react";

const SOCIAL_LINKS = [
  {
    Icon: Youtube,
    color: "#ef4444",
    href: "https://youtube.com/@levelupgamingacademy-f9l?si=LMvCOGhyrLAEvaBO",
    label: "YouTube",
  },
  { Icon: MessageCircle, color: "#5865F2", href: "#", label: "Discord" },
  {
    Icon: Send,
    color: "#26a5e4",
    href: "https://t.me/LevelupGamingAcedemy",
    label: "Telegram",
  },
];

export default function FooterSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <footer
      className="py-12 px-4"
      style={{
        background: "#030308",
        borderTop: "1px solid rgba(0,212,255,0.08)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg,#00d4ff,#8b5cf6)",
                }}
              >
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span
                className="font-orbitron font-black text-lg"
                style={{ color: "#00d4ff" }}
              >
                LevelUp
              </span>
            </div>
            <p className="text-white/30 text-sm max-w-xs leading-relaxed">
              Train Smart. Play Better. Win More.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { label: "Home", href: "#home" },
              { label: "Training", href: "#training" },
              { label: "Tournaments", href: "#tournaments" },
              { label: "Community", href: "#community" },
            ].map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm font-rajdhani font-semibold uppercase tracking-wider text-white/40 hover:text-white transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map(({ Icon, color, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{
                  background: `${color}15`,
                  border: `1px solid ${color}30`,
                }}
              >
                <Icon className="w-4 h-4" style={{ color }} />
              </a>
            ))}
          </div>
        </div>

        <div
          className="mt-8 pt-6 text-center text-xs text-white/20 font-rajdhani uppercase tracking-wider"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          © 2026 LevelUp Gaming Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
