import { Link } from "@tanstack/react-router";
import { Send, Youtube, Zap } from "lucide-react";

const InstagramIcon = ({
  className,
  style,
}: { className?: string; style?: React.CSSProperties }) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    aria-label="Instagram"
  >
    <title>Instagram</title>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const SOCIAL_LINKS = [
  {
    key: "youtube",
    Icon: ({
      className,
      style,
    }: { className?: string; style?: React.CSSProperties }) => (
      <Youtube className={className} style={style} />
    ),
    color: "#ef4444",
    href: "https://youtube.com/@levelupgamingacademy-f9l?si=LMvCOGhyrLAEvaBO",
    label: "YouTube",
  },
  {
    key: "telegram",
    Icon: ({
      className,
      style,
    }: { className?: string; style?: React.CSSProperties }) => (
      <Send className={className} style={style} />
    ),
    color: "#26a5e4",
    href: "https://t.me/LevelupGamingAcedemy",
    label: "Telegram",
  },
  {
    key: "instagram",
    Icon: InstagramIcon,
    color: "#e1306c",
    href: "https://www.instagram.com/levelupgamingacademy?igsh=M20yMHA3cGk2dXVv&utm_source=qr",
    label: "Instagram",
  },
];

const FOOTER_LINKS = [
  { label: "Home", to: "/" },
  { label: "Games", to: "/games" },
  { label: "Membership Packs", to: "/membership" },
  { label: "Tournaments", to: "/tournaments" },
  { label: "Leaderboard", to: "/leaderboard" },
  { label: "Community", to: "/community" },
];

export default function FooterSection() {
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
            <Link to="/" className="flex items-center gap-2 mb-3">
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
            </Link>
            <p className="text-white/30 text-sm max-w-xs leading-relaxed">
              Train Smart. Play Better. Win More.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-rajdhani font-semibold uppercase tracking-wider text-white/40 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map(({ key, Icon, color, href, label }) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
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
          © 2026 LevelUp Gaming Academy. All rights reserved.{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white/40 transition-colors"
          >
            Built with ❤️ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
