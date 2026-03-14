import { Button } from "@/components/ui/button";
import { Send, Star, X } from "lucide-react";
import { useState } from "react";

const GAMES = [
  {
    key: "codm",
    label: "Call of Duty Mobile",
    short: "CODM",
    emoji: "🎯",
    color: "#ef4444",
    tagline: "Dominate the Battlefield",
    description:
      "Master aim mechanics, recoil control, map awareness, and competitive loadout strategies. From movement drills to ranked match tactics — train like a pro.",
    skills: [
      "Aim Training",
      "Map Control",
      "Loadout Optimization",
      "Team Tactics",
    ],
  },
  {
    key: "valorant",
    label: "Valorant",
    short: "VAL",
    emoji: "🗡️",
    color: "#ff4655",
    tagline: "Sharpen Your Tactical Edge",
    description:
      "From crosshair placement and spray patterns to agent ability synergies and post-plant strategies. Build the fundamentals that separate Radiant from Iron.",
    skills: [
      "Crosshair Placement",
      "Agent Abilities",
      "Economy Management",
      "Site Executes",
    ],
  },
  {
    key: "fortnite",
    label: "Fortnite",
    short: "FN",
    emoji: "⛏️",
    color: "#f59e0b",
    tagline: "Build. Edit. Eliminate.",
    description:
      "Develop elite building speed, edit mechanics, box-fighting technique, and late-game storm strategies. React faster, build smarter, win more.",
    skills: [
      "Build Speed",
      "Edit Mechanics",
      "Box Fighting",
      "Zone Strategies",
    ],
  },
  {
    key: "roblox",
    label: "Roblox",
    short: "ROB",
    emoji: "🎮",
    color: "#00ff88",
    tagline: "Level Up in Every Game Mode",
    description:
      "Navigate competitive Roblox mini-games with strategies for Obby, Tower Defense, PvP games, and more. Mini-game challenges available for all members.",
    skills: [
      "PvP Mechanics",
      "Obby Techniques",
      "Tower Defense",
      "Mini-Game Challenges",
    ],
  },
  {
    key: "chess",
    label: "Chess",
    short: "CHE",
    emoji: "♟️",
    color: "#8b5cf6",
    tagline: "Think Deeper. Win Faster.",
    description:
      "Study openings, endgames, tactical patterns, and positional play. Interactive challenges and guided curriculum for beginners through advanced players.",
    skills: [
      "Opening Theory",
      "Tactical Patterns",
      "Endgame Mastery",
      "Positional Play",
    ],
  },
];

const PLANS = [
  {
    id: "begainer",
    name: "Beginner",
    price: 10,
    color: "#00d4ff",
    popular: false,
    features: [
      "Basic training guides per game",
      "Access to community",
      "Weekly tips",
      "Mini-game challenges (Roblox & Chess)",
      "3 weekly tournaments included",
    ],
  },
  {
    id: "advance",
    name: "Advanced",
    price: 15,
    color: "#8b5cf6",
    popular: true,
    features: [
      "Everything in Beginner",
      "Advanced strategies per game",
      "Mini-tournaments for all games",
      "5 weekly practice sessions",
      "Progress tracking",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: 20,
    color: "#00ff88",
    popular: false,
    features: [
      "Everything in Advanced",
      "One-on-one coaching (CODM, Valorant, Fortnite)",
      "Priority leaderboard placement",
      "Exclusive challenges (Roblox & Chess)",
      "Personalized improvement plan",
      "Daily training exercises",
    ],
  },
];

function PlanModal({
  game,
  onClose,
}: {
  game: (typeof GAMES)[0];
  onClose: () => void;
}) {
  const handleSelectPlan = (planId: string) => {
    const command = `${game.key}_${planId}`;
    const url = `https://t.me/LevelupGamingAcademy1_bot?start=${command}`;
    window.open(url, "_blank");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(5,5,16,0.93)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      onKeyDown={(e) => e.key === "Escape" && onClose()}
    >
      <div
        data-ocid="plan_modal.modal"
        className="relative w-full max-w-4xl rounded-2xl p-6 sm:p-8 overflow-y-auto max-h-[90vh]"
        style={{
          background: "#0d0d1a",
          border: `1px solid ${game.color}40`,
          boxShadow: `0 0 80px ${game.color}15`,
        }}
      >
        {/* Close */}
        <button
          type="button"
          data-ocid="plan_modal.close_button"
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
          style={{ background: "rgba(255,255,255,0.07)" }}
        >
          <X className="w-4 h-4 text-white/60" />
        </button>

        {/* Header */}
        <div className="mb-8 text-center">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-3"
            style={{ background: `${game.color}15` }}
          >
            {game.emoji}
          </div>
          <div
            className="inline-block text-xs font-orbitron font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2"
            style={{ background: `${game.color}15`, color: game.color }}
          >
            {game.label}
          </div>
          <h2 className="font-orbitron font-black text-2xl sm:text-3xl text-white mt-2">
            Select Your <span style={{ color: game.color }}>Plan</span>
          </h2>
          <p className="text-white/45 text-sm mt-2 max-w-md mx-auto">
            Choose a plan below. You’ll be taken directly to our Telegram bot to
            get started.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {PLANS.map((plan, i) => (
            <div
              key={plan.id}
              data-ocid={`plan_modal.item.${i + 1}`}
              className="relative rounded-xl p-5 flex flex-col transition-all duration-300"
              style={{
                background: plan.popular
                  ? "linear-gradient(160deg, #0e0a1e, #0a0e1e)"
                  : "#111120",
                border: `1px solid ${plan.color}${plan.popular ? "55" : "28"}`,
                boxShadow: plan.popular ? `0 0 35px ${plan.color}14` : "none",
              }}
            >
              {plan.popular && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1 rounded-full text-xs font-orbitron font-bold uppercase tracking-wider whitespace-nowrap"
                  style={{ background: plan.color, color: "#050510" }}
                >
                  <Star className="w-3 h-3" /> Most Popular
                </div>
              )}

              <div className="mb-4">
                <h3
                  className="font-orbitron font-black text-lg mb-1"
                  style={{ color: plan.color }}
                >
                  {plan.name}
                </h3>
                <div className="flex items-end gap-1">
                  <span className="font-orbitron font-black text-4xl text-white">
                    ${plan.price}
                  </span>
                  <span className="text-white/35 text-xs mb-1">/month</span>
                </div>
              </div>

              <ul className="space-y-2 mb-6 flex-1">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2 text-xs">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-[10px]"
                      style={{
                        background: `${plan.color}20`,
                        color: plan.color,
                      }}
                    >
                      ✓
                    </div>
                    <span className="text-white/60">{feat}</span>
                  </li>
                ))}
              </ul>

              <Button
                type="button"
                data-ocid={`plan_modal.continue_button.${i + 1}`}
                className="w-full font-orbitron font-bold uppercase tracking-wider text-xs py-5 transition-all duration-200 group"
                style={{
                  background: plan.popular ? plan.color : `${plan.color}18`,
                  color: plan.popular ? "#050510" : plan.color,
                  border: `1px solid ${plan.color}45`,
                }}
                onClick={() => handleSelectPlan(plan.id)}
              >
                <Send className="w-3 h-3 mr-1.5 inline" />
                Continue with this Plan
              </Button>
            </div>
          ))}
        </div>

        {/* Telegram note */}
        <p className="text-center text-white/30 text-xs mt-6">
          You’ll be redirected to{" "}
          <span className="text-[#29a6e8]">@LevelupGamingAcademy1_bot</span> on
          Telegram to complete your enrollment.
        </p>
      </div>
    </div>
  );
}

export default function GamesPage() {
  const [selectedGame, setSelectedGame] = useState<(typeof GAMES)[0] | null>(
    null,
  );

  return (
    <div className="animate-fade-in-page pt-16">
      <section className="py-20 px-4" style={{ background: "#08080f" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div
              className="inline-block text-xs font-orbitron font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
              style={{
                background: "rgba(0,212,255,0.1)",
                border: "1px solid rgba(0,212,255,0.3)",
                color: "#00d4ff",
              }}
            >
              Supported Games
            </div>
            <h1 className="font-orbitron font-black text-3xl sm:text-5xl text-white mb-4">
              Choose Your{" "}
              <span className="gradient-text-blue-purple">Game</span>
            </h1>
            <p className="text-white/50 max-w-xl mx-auto text-base">
              Select a game, pick your plan, and our Telegram bot will get you
              started instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GAMES.map((game, idx) => (
              <div
                key={game.key}
                data-ocid={`games.item.${idx + 1}`}
                className="group relative rounded-2xl p-6 transition-all duration-300 flex flex-col"
                style={{
                  background: "#0d0d1a",
                  border: `1px solid ${game.color}25`,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-4px) scale(1.01)";
                  el.style.border = `1px solid ${game.color}65`;
                  el.style.boxShadow = `0 14px 44px ${game.color}22`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "";
                  el.style.border = `1px solid ${game.color}25`;
                  el.style.boxShadow = "none";
                }}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-6 right-6 h-px"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${game.color}65, transparent)`,
                  }}
                />

                <div className="mb-4 flex-1">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl mb-4"
                    style={{ background: `${game.color}15` }}
                  >
                    {game.emoji}
                  </div>
                  <div
                    className="inline-block text-xs font-orbitron font-bold uppercase tracking-wider px-2 py-0.5 rounded mb-2"
                    style={{ background: `${game.color}15`, color: game.color }}
                  >
                    {game.tagline}
                  </div>
                  <h2 className="font-orbitron font-black text-xl text-white mt-2 mb-3">
                    {game.label}
                  </h2>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">
                    {game.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {game.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2 py-1 rounded-full font-rajdhani font-semibold"
                        style={{
                          background: `${game.color}10`,
                          border: `1px solid ${game.color}30`,
                          color: game.color,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  type="button"
                  data-ocid={`games.choose_plan_button.${idx + 1}`}
                  className="w-full mt-5 font-orbitron font-bold uppercase tracking-wider text-xs py-5 transition-all duration-200"
                  style={{
                    background: `${game.color}18`,
                    color: game.color,
                    border: `1px solid ${game.color}45`,
                  }}
                  onClick={() => setSelectedGame(game)}
                >
                  Choose Plan →
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedGame && (
        <PlanModal game={selectedGame} onClose={() => setSelectedGame(null)} />
      )}
    </div>
  );
}
