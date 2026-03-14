import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useQuery } from "@tanstack/react-query";
import { Crown, Medal } from "lucide-react";
import type { Game } from "../backend";
import { useActor } from "../hooks/useActor";
import { useInView } from "../hooks/useInView";

const GAMES = [
  { key: "cod" as Game, label: "COD", color: "#ef4444" },
  { key: "valorant" as Game, label: "Valorant", color: "#ff4655" },
  { key: "fortnite" as Game, label: "Fortnite", color: "#f59e0b" },
  { key: "roblox" as Game, label: "Roblox", color: "#00ff88" },
  { key: "chess" as Game, label: "Chess", color: "#8b5cf6" },
];

const RANK_STYLES = [
  { color: "#FFD700", bg: "rgba(255,215,0,0.12)" },
  { color: "#C0C0C0", bg: "rgba(192,192,192,0.08)" },
  { color: "#CD7F32", bg: "rgba(205,127,50,0.1)" },
];

const SKELETON_ROWS = ["sk-1", "sk-2", "sk-3", "sk-4", "sk-5"];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function hashColor(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++)
    h = (h * 31 + seed.charCodeAt(i)) & 0xffffff;
  const colors = [
    "#00d4ff",
    "#8b5cf6",
    "#00ff88",
    "#ef4444",
    "#f59e0b",
    "#06b6d4",
  ];
  return colors[h % colors.length];
}

export default function LeaderboardSection() {
  const { ref, inView } = useInView();
  const { actor } = useActor();

  const { data: allBoards } = useQuery({
    queryKey: ["leaderboards"],
    queryFn: () => actor!.getAllLeaderboards(),
    enabled: !!actor,
  });

  const boards = Object.fromEntries(
    (allBoards || []).map(([game, entries]) => [game, entries]),
  ) as Record<
    Game,
    Array<{
      rank: bigint;
      playerName: string;
      points: bigint;
      avatarSeed: string;
    }>
  >;

  return (
    <section
      id="leaderboard"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 px-4"
      style={{
        background: "linear-gradient(180deg, #050510 0%, #08080f 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto">
        <div
          className={`text-center mb-12 ${inView ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div
            className="inline-block text-xs font-orbitron font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
            style={{
              background: "rgba(255,215,0,0.1)",
              border: "1px solid rgba(255,215,0,0.3)",
              color: "#FFD700",
            }}
          >
            Leaderboard
          </div>
          <h2 className="font-orbitron font-black text-3xl sm:text-4xl text-white mb-4">
            Top Players{" "}
            <span className="gradient-text-blue-purple">This Week</span>
          </h2>
        </div>

        <Tabs defaultValue="cod">
          <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent mb-8 h-auto">
            {GAMES.map((g) => (
              <TabsTrigger
                key={g.key}
                value={g.key}
                data-ocid="leaderboard.tab"
                className="font-orbitron font-bold uppercase tracking-wider text-xs px-4 py-2 rounded-lg data-[state=active]:text-white transition-all"
                style={{ border: "1px solid rgba(255,255,255,0.1)" }}
              >
                {g.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {GAMES.map((g) => {
            const entries = (boards[g.key] || []).slice(0, 10);
            return (
              <TabsContent key={g.key} value={g.key}>
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{ border: `1px solid ${g.color}20` }}
                >
                  {entries.length === 0
                    ? SKELETON_ROWS.map((skId, i) => (
                        <div
                          key={skId}
                          className="flex items-center gap-4 p-4 animate-pulse"
                          style={{
                            background: i % 2 === 0 ? "#0d0d1a" : "#0a0a16",
                          }}
                        >
                          <div className="w-8 h-8 rounded-full bg-white/10" />
                          <div className="w-8 h-8 rounded-full bg-white/10" />
                          <div className="h-4 w-32 rounded bg-white/10" />
                          <div className="ml-auto h-4 w-16 rounded bg-white/10" />
                        </div>
                      ))
                    : entries.map((entry, idx) => {
                        const rankStyle = RANK_STYLES[idx] || null;
                        const avatarColor = hashColor(entry.avatarSeed);
                        const isTop3 = idx < 3;
                        return (
                          <div
                            key={String(entry.rank)}
                            className="flex items-center gap-4 px-5 py-3 animate-slide-in transition-all duration-200 hover:bg-white/5"
                            style={{
                              background: isTop3
                                ? rankStyle!.bg
                                : idx % 2 === 0
                                  ? "#0d0d1a"
                                  : "#0a0a16",
                              animationDelay: `${idx * 0.05}s`,
                              borderLeft: isTop3
                                ? `3px solid ${rankStyle!.color}`
                                : "3px solid transparent",
                            }}
                          >
                            <div className="w-8 text-center">
                              {isTop3 ? (
                                idx === 0 ? (
                                  <Crown
                                    className="w-5 h-5 mx-auto"
                                    style={{ color: rankStyle!.color }}
                                  />
                                ) : (
                                  <Medal
                                    className="w-4 h-4 mx-auto"
                                    style={{ color: rankStyle!.color }}
                                  />
                                )
                              ) : (
                                <span className="font-orbitron font-bold text-sm text-white/40">
                                  #{idx + 1}
                                </span>
                              )}
                            </div>

                            <div
                              className="w-9 h-9 rounded-full flex items-center justify-center font-orbitron font-black text-xs shrink-0"
                              style={{
                                background: `${avatarColor}20`,
                                border: `1.5px solid ${avatarColor}60`,
                                color: avatarColor,
                              }}
                            >
                              {getInitials(entry.playerName)}
                            </div>

                            <span
                              className="font-rajdhani font-bold text-base flex-1"
                              style={{
                                color: isTop3
                                  ? rankStyle!.color
                                  : "rgba(255,255,255,0.8)",
                              }}
                            >
                              {entry.playerName}
                            </span>

                            <div className="text-right">
                              <span
                                className="font-orbitron font-black text-sm"
                                style={{ color: g.color }}
                              >
                                {Number(entry.points).toLocaleString()}
                              </span>
                              <span className="text-xs text-white/30 ml-1">
                                pts
                              </span>
                            </div>
                          </div>
                        );
                      })}
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}
