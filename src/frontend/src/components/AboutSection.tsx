import { BookOpen, Trophy, Users } from "lucide-react";
import { useInView } from "../hooks/useInView";

const FEATURES = [
  {
    icon: BookOpen,
    title: "Structured Training",
    desc: "Game-specific guides built by pro players. Learn mechanics, strategies, and advanced techniques across 5 titles — at your own pace.",
    color: "#00d4ff",
  },
  {
    icon: Trophy,
    title: "Weekly Tournaments",
    desc: "Compete in solo and team tournaments every week. Climb the leaderboard, earn prizes, and prove your rank among the best.",
    color: "#8b5cf6",
  },
  {
    icon: Users,
    title: "Active Community",
    desc: "Connect with thousands of players, find teammates, share clips, and discuss strategies in our Discord community.",
    color: "#00ff88",
  },
];

export default function AboutSection() {
  const { ref, inView } = useInView();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 px-4"
      style={{
        background: "linear-gradient(180deg, #050510 0%, #080814 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div
          className={`text-center mb-16 ${inView ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div
            className="inline-block text-xs font-orbitron font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
            style={{
              background: "rgba(0,212,255,0.1)",
              border: "1px solid rgba(0,212,255,0.2)",
              color: "#00d4ff",
            }}
          >
            About The Academy
          </div>
          <h2 className="font-orbitron font-black text-3xl sm:text-4xl text-white mb-4">
            Built for{" "}
            <span className="gradient-text-blue-purple">Champions</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-base leading-relaxed">
            LevelUp Gaming Academy provides structured training programs,
            competitive tournaments, and a supportive community for players of
            all skill levels — from beginner to pro.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className={`group rounded-xl p-6 cursor-default transition-all duration-300 hover:scale-[1.03] ${
                inView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{
                background: "#0d0d1a",
                border: `1px solid ${f.color}20`,
                animationDelay: `${0.1 + i * 0.15}s`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.border =
                  `1px solid ${f.color}60`;
                (e.currentTarget as HTMLElement).style.boxShadow =
                  `0 0 30px ${f.color}20`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.border =
                  `1px solid ${f.color}20`;
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${f.color}15` }}
              >
                <f.icon className="w-6 h-6" style={{ color: f.color }} />
              </div>
              <h3 className="font-orbitron font-bold text-white text-lg mb-2">
                {f.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
