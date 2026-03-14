import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send, Youtube } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

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

const SOCIALS = [
  {
    key: "youtube",
    label: "YouTube",
    href: "https://youtube.com/@levelupgamingacademy-f9l?si=LMvCOGhyrLAEvaBO",
    color: "#ef4444",
    Icon: ({ className }: { className?: string }) => (
      <Youtube className={className} />
    ),
    desc: "Watch tutorials and highlights",
  },
  {
    key: "telegram",
    label: "Telegram",
    href: "https://t.me/LevelupGamingAcedemy",
    color: "#26a5e4",
    Icon: ({ className }: { className?: string }) => (
      <Send className={className} />
    ),
    desc: "Join our Telegram group",
  },
  {
    key: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/levelupgamingacademy?igsh=M20yMHA3cGk2dXVv&utm_source=qr",
    color: "#e1306c",
    Icon: InstagramIcon,
    desc: "Follow us on Instagram",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSending(false);
    setForm({ name: "", email: "", message: "" });
    toast.success("Message sent! We'll get back to you soon.");
  };

  return (
    <div className="animate-fade-in-page pt-16">
      <section className="py-20 px-4" style={{ background: "#08080f" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div
              className="inline-block text-xs font-orbitron font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
              style={{
                background: "rgba(0,212,255,0.1)",
                border: "1px solid rgba(0,212,255,0.3)",
                color: "#00d4ff",
              }}
            >
              Contact Us
            </div>
            <h1 className="font-orbitron font-black text-3xl sm:text-5xl text-white mb-4">
              Get In <span className="gradient-text-blue-purple">Touch</span>
            </h1>
            <p className="text-white/50 max-w-xl mx-auto">
              Have questions about training, memberships, or tournaments? Send
              us a message or reach out on social media.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div
              className="rounded-2xl p-8"
              style={{
                background: "#0d0d1a",
                border: "1px solid rgba(0,212,255,0.15)",
              }}
            >
              <h2 className="font-orbitron font-black text-xl text-white mb-6">
                Send a Message
              </h2>
              <form
                data-ocid="contact.dialog"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div>
                  <Label
                    htmlFor="contact-name"
                    className="font-rajdhani font-semibold text-white/70 uppercase tracking-wider text-xs mb-2 block"
                  >
                    Your Name
                  </Label>
                  <Input
                    id="contact-name"
                    data-ocid="contact.input"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, name: e.target.value }))
                    }
                    required
                    className="font-rajdhani bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-neon-blue"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="contact-email"
                    className="font-rajdhani font-semibold text-white/70 uppercase tracking-wider text-xs mb-2 block"
                  >
                    Email Address
                  </Label>
                  <Input
                    id="contact-email"
                    data-ocid="contact.input"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, email: e.target.value }))
                    }
                    required
                    className="font-rajdhani bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-neon-blue"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="contact-message"
                    className="font-rajdhani font-semibold text-white/70 uppercase tracking-wider text-xs mb-2 block"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="contact-message"
                    data-ocid="contact.textarea"
                    placeholder="How can we help you?"
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
                    }
                    required
                    rows={5}
                    className="font-rajdhani bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-neon-blue resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  data-ocid="contact.submit_button"
                  disabled={sending}
                  className="w-full font-orbitron font-bold uppercase tracking-wider text-sm py-6"
                  style={{
                    background: "linear-gradient(135deg,#00d4ff,#8b5cf6)",
                    color: "#050510",
                  }}
                >
                  {sending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-6">
              <div
                className="rounded-2xl p-8"
                style={{
                  background: "#0d0d1a",
                  border: "1px solid rgba(139,92,246,0.15)",
                }}
              >
                <h2 className="font-orbitron font-black text-xl text-white mb-6">
                  Find Us Online
                </h2>
                <div className="space-y-4">
                  {SOCIALS.map(({ key, label, href, color, Icon, desc }) => (
                    <a
                      key={key}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      data-ocid={`contact.${key === "youtube" ? "primary_button" : key === "telegram" ? "secondary_button" : "button"}`}
                      className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 group"
                      style={{
                        background: `${color}08`,
                        border: `1px solid ${color}20`,
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = `${color}15`;
                        el.style.border = `1px solid ${color}50`;
                        el.style.transform = "translateX(4px)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = `${color}08`;
                        el.style.border = `1px solid ${color}20`;
                        el.style.transform = "";
                      }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: `${color}20` }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div
                          className="font-orbitron font-bold text-sm"
                          style={{ color }}
                        >
                          {label}
                        </div>
                        <div className="text-white/40 text-xs font-rajdhani mt-0.5">
                          {desc}
                        </div>
                      </div>
                      <div className="ml-auto text-white/20 group-hover:text-white/60 transition-colors">
                        →
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div
                className="rounded-2xl p-6"
                style={{
                  background: "#0d0d1a",
                  border: "1px solid rgba(0,255,136,0.15)",
                }}
              >
                <h3 className="font-orbitron font-bold text-white text-base mb-2">
                  Response Time
                </h3>
                <p className="text-white/50 text-sm font-rajdhani leading-relaxed">
                  We typically respond within{" "}
                  <span style={{ color: "#00ff88" }} className="font-bold">
                    24 hours
                  </span>
                  . For urgent inquiries, reach us directly on Telegram.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
