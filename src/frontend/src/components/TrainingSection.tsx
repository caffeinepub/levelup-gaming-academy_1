import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { BookOpen, Lock, Zap } from "lucide-react";
import { useState } from "react";
import type { Game } from "../backend";
import { useActor } from "../hooks/useActor";
import { useInView } from "../hooks/useInView";
import TutorialModal from "./TutorialModal";

const GAMES = [
  { key: "cod" as Game, label: "COD", emoji: "🎯", color: "#ef4444" },
  { key: "valorant" as Game, label: "Valorant", emoji: "🗡️", color: "#ff4655" },
  { key: "fortnite" as Game, label: "Fortnite", emoji: "⛏️", color: "#f59e0b" },
  { key: "roblox" as Game, label: "Roblox", emoji: "🎮", color: "#00ff88" },
  { key: "chess" as Game, label: "Chess", emoji: "♟️", color: "#8b5cf6" },
];

interface Props {
  unlockedPack: number | null;
}

export default function TrainingSection({ unlockedPack }: Props) {
  const { ref, inView } = useInView();
  const { actor } = useActor();
  const navigate = useNavigate();
  const [modalGame, setModalGame] = useState<"chess" | "roblox" | null>(null);

  const { data: allGuides } = useQuery({
    queryKey: ["allGuides"],
    queryFn: () => actor!.getAllTrainingGuides(),
    enabled: !!actor,
  });

  const guidesMap = Object.fromEntries(
    (allGuides || []).map(([game, guides]) => [game, guides]),
  ) as Record<Game, Array<{ title: string; tips: string[] }>>;

  const maxGuides = (_game: Game) => {
    if (unlockedPack === null || unlockedPack === 0) return 2;
    return 99;
  };

  return (
    <section
      id="training"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 px-4"
      style={{ background: "#08080f" }}
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-12 ${inView ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div
            className="inline-block text-xs font-orbitron font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
            style={{
              background: "rgba(0,255,136,0.1)",
              border: "1px solid rgba(0,255,136,0.2)",
              color: "#00ff88",
            }}
          >
            Training Programs
          </div>
          <h2 className="font-orbitron font-black text-3xl sm:text-4xl text-white mb-4">
            Game-Specific{" "}
            <span className="gradient-text-blue-purple">Guides</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Master every title with structured training paths built by elite
            players.
          </p>
        </div>

        <Tabs defaultValue="cod">
          <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent mb-8 h-auto">
            {GAMES.map((g) => (
              <TabsTrigger
                key={g.key}
                value={g.key}
                data-ocid="training.tab"
                className="font-orbitron font-bold uppercase tracking-wider text-xs px-4 py-2 rounded-lg data-[state=active]:text-white transition-all"
                style={{ border: "1px solid rgba(255,255,255,0.1)" }}
              >
                {g.emoji} {g.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {GAMES.map((g) => {
            const guides = guidesMap[g.key] || [];
            const limit = maxGuides(g.key);
            return (
              <TabsContent key={g.key} value={g.key}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {guides.length === 0
                    ? Array.from({ length: 3 }).map((_, idx) => (
                        <div
                          key={`skeleton-${g.key}-${idx}`}
                          className="rounded-xl p-5 animate-pulse"
                          style={{ background: "#0d0d1a", height: 180 }}
                        />
                      ))
                    : guides.map((guide, idx) => {
                        const locked = idx >= limit;
                        const isChallenge =
                          (g.key === "chess" || g.key === "roblox") &&
                          idx === 0;
                        return (
                          <div
                            key={guide.title}
                            className="group relative rounded-xl p-5 transition-all duration-300 cursor-default"
                            style={{
                              background: "#0d0d1a",
                              border: `1px solid ${g.color}20`,
                            }}
                            onMouseEnter={(e) => {
                              if (!locked) {
                                (
                                  e.currentTarget as HTMLElement
                                ).style.transform = "scale(1.02)";
                                (e.currentTarget as HTMLElement).style.border =
                                  `1px solid ${g.color}60`;
                                (
                                  e.currentTarget as HTMLElement
                                ).style.boxShadow = `0 0 25px ${g.color}25`;
                              }
                            }}
                            onMouseLeave={(e) => {
                              (e.currentTarget as HTMLElement).style.transform =
                                "scale(1)";
                              (e.currentTarget as HTMLElement).style.border =
                                `1px solid ${g.color}20`;
                              (e.currentTarget as HTMLElement).style.boxShadow =
                                "none";
                            }}
                          >
                            {locked && (
                              <div
                                className="absolute inset-0 rounded-xl flex flex-col items-center justify-center gap-3 z-10"
                                style={{
                                  background: "rgba(5,5,16,0.85)",
                                  backdropFilter: "blur(4px)",
                                }}
                              >
                                <Lock
                                  className="w-6 h-6"
                                  style={{ color: g.color }}
                                />
                                <p className="text-xs text-white/60 font-rajdhani text-center px-4">
                                  Unlock with Advanced or Pro Pack
                                </p>
                                <Button
                                  size="sm"
                                  className="text-xs font-orbitron font-bold"
                                  style={{
                                    background: g.color,
                                    color: "#050510",
                                  }}
                                  onClick={() =>
                                    navigate({ to: "/membership" })
                                  }
                                >
                                  Upgrade Pack
                                </Button>
                              </div>
                            )}

                            <div className="flex items-center gap-2 mb-3">
                              <div
                                className="w-8 h-8 rounded-lg flex items-center justify-center"
                                style={{ background: `${g.color}15` }}
                              >
                                <BookOpen
                                  className="w-4 h-4"
                                  style={{ color: g.color }}
                                />
                              </div>
                              <h3 className="font-rajdhani font-bold text-white text-base flex-1">
                                {guide.title}
                              </h3>
                            </div>
                            <ul className="space-y-1">
                              {guide.tips.map((tip, ti) => (
                                <li
                                  key={`tip-${guide.title}-${ti}`}
                                  className="flex items-start gap-2 text-xs text-white/60"
                                >
                                  <Zap
                                    className="w-3 h-3 mt-0.5 shrink-0"
                                    style={{ color: g.color }}
                                  />
                                  {tip}
                                </li>
                              ))}
                            </ul>

                            {isChallenge && !locked && (
                              <Button
                                data-ocid={`training.challenge_button.${g.key === "chess" ? "1" : "2"}`}
                                size="sm"
                                className="mt-4 w-full font-orbitron font-bold text-xs uppercase tracking-wider"
                                style={{
                                  background: `${g.color}15`,
                                  color: g.color,
                                  border: `1px solid ${g.color}40`,
                                }}
                                onClick={() =>
                                  setModalGame(g.key as "chess" | "roblox")
                                }
                              >
                                View Challenge
                              </Button>
                            )}
                          </div>
                        );
                      })}
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>

      {modalGame && (
        <TutorialModal
          game={modalGame}
          isOpen={!!modalGame}
          onClose={() => setModalGame(null)}
        />
      )}
    </section>
  );
}
