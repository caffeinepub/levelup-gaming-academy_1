import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Training", href: "#training" },
  { label: "Tournaments", href: "#tournaments" },
  { label: "Leaderboard", href: "#leaderboard" },
  { label: "Community", href: "#community" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(5,5,16,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,212,255,0.1)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <button
          type="button"
          className="flex items-center gap-2 cursor-pointer bg-transparent border-0 p-0"
          onClick={() => scrollTo("#home")}
          onKeyDown={(e) => e.key === "Enter" && scrollTo("#home")}
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg,#00d4ff,#8b5cf6)" }}
          >
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span
            className="font-orbitron font-black text-lg"
            style={{ color: "#00d4ff" }}
          >
            LevelUp
          </span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <button
              type="button"
              key={link.href}
              data-ocid="navbar.link"
              onClick={() => scrollTo(link.href)}
              className="px-4 py-2 text-sm font-rajdhani font-semibold text-white/70 hover:text-white transition-colors uppercase tracking-wider"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex">
          <Button
            type="button"
            data-ocid="navbar.primary_button"
            size="sm"
            onClick={() => scrollTo("#packs")}
            className="font-orbitron font-bold uppercase tracking-wider text-xs"
            style={{
              background: "linear-gradient(135deg,#00d4ff,#8b5cf6)",
              color: "#050510",
            }}
          >
            Get Started
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div
          className="md:hidden"
          style={{
            background: "rgba(5,5,16,0.98)",
            borderTop: "1px solid rgba(0,212,255,0.1)",
          }}
        >
          {NAV_LINKS.map((link) => (
            <button
              type="button"
              key={link.href}
              data-ocid="navbar.link"
              onClick={() => scrollTo(link.href)}
              className="block w-full text-left px-6 py-3 text-sm font-rajdhani font-semibold uppercase tracking-wider text-white/70 hover:text-white hover:bg-white/5 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="px-6 pb-4 pt-2">
            <Button
              type="button"
              data-ocid="navbar.primary_button"
              className="w-full font-orbitron font-bold uppercase text-xs"
              onClick={() => scrollTo("#packs")}
              style={{
                background: "linear-gradient(135deg,#00d4ff,#8b5cf6)",
                color: "#050510",
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
