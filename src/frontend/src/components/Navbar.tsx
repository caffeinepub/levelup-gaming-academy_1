import { Button } from "@/components/ui/button";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Training", to: "/training" },
  { label: "Games", to: "/games" },
  { label: "Membership", to: "/membership" },
  { label: "Tournaments", to: "/tournaments" },
  { label: "Leaderboard", to: "/leaderboard" },
  { label: "Community", to: "/community" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const isActive = (to: string) =>
    to === "/" ? currentPath === "/" : currentPath.startsWith(to);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(5,5,16,0.95)" : "rgba(5,5,16,0.7)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(0,212,255,0.1)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2"
          data-ocid="navbar.link"
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
        </Link>

        <div className="hidden lg:flex items-center gap-0.5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-ocid="navbar.link"
              onClick={() => setOpen(false)}
              className="px-3 py-2 text-xs font-rajdhani font-semibold uppercase tracking-wider transition-all duration-200 rounded-lg"
              style={{
                color: isActive(link.to) ? "#00d4ff" : "rgba(255,255,255,0.65)",
                background: isActive(link.to)
                  ? "rgba(0,212,255,0.1)"
                  : "transparent",
                textShadow: isActive(link.to)
                  ? "0 0 12px rgba(0,212,255,0.6)"
                  : "none",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex">
          <Link to="/membership">
            <Button
              type="button"
              data-ocid="navbar.primary_button"
              size="sm"
              className="font-orbitron font-bold uppercase tracking-wider text-xs"
              style={{
                background: "linear-gradient(135deg,#00d4ff,#8b5cf6)",
                color: "#050510",
              }}
            >
              Get Started
            </Button>
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div
          className="lg:hidden"
          style={{
            background: "rgba(5,5,16,0.98)",
            borderTop: "1px solid rgba(0,212,255,0.1)",
          }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-ocid="navbar.link"
              onClick={() => setOpen(false)}
              className="block w-full px-6 py-3 text-sm font-rajdhani font-semibold uppercase tracking-wider transition-colors"
              style={{
                color: isActive(link.to) ? "#00d4ff" : "rgba(255,255,255,0.7)",
                background: isActive(link.to)
                  ? "rgba(0,212,255,0.08)"
                  : "transparent",
              }}
            >
              {link.label}
            </Link>
          ))}
          <div className="px-6 pb-4 pt-2">
            <Link to="/membership" onClick={() => setOpen(false)}>
              <Button
                type="button"
                data-ocid="navbar.primary_button"
                className="w-full font-orbitron font-bold uppercase text-xs"
                style={{
                  background: "linear-gradient(135deg,#00d4ff,#8b5cf6)",
                  color: "#050510",
                }}
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
