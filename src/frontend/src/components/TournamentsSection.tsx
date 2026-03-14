import { useQuery } from "@tanstack/react-query";
import { Calendar, Lock, Trophy, User, Users } from "lucide-react";
import { useState } from "react";
import { TournamentStatus, TournamentType } from "../backend";
import { useActor } from "../hooks/useActor";
import { useInView } from "../hooks/useInView";

const GAME_COLORS: Record<string, string> = {
  cod: "#ef4444",
  valorant: "#ff4655",
  fortnite: "#f59e0b",
  roblox: "#00ff88",
  chess: "#8b5cf6",
};

const STATUS_CONFIG = {
  [TournamentStatus.live]: { label: "LIVE", color: "#00ff88", pulse: true },
  [TournamentStatus.upcoming]: {
    label: "Upcoming",
    color: "#00d4ff",
    pulse: false,
  },
  [TournamentStatus.ended]: { label: "Ended", color: "#6b7280", pulse: false },
};

interface Props {
  unlockedPack: number | null;
}

export default function TournamentsSection({ unlockedPack }: Props) {
  const { ref, inView } = useInView();
  const { actor } = useActor();
  const [filter, setFilter] = useState<"all" | TournamentStatus>("all");

  const { data: tournaments } = useQuery({
    queryKey: ["tournaments"],
    queryFn: () => actor!.getTournaments(),
    enabled: !!actor,
  });

  const filtered = (tournaments || []).filter(
    (t) => filter === "all" || t.status === filter,
  );

  const FILTERS = [
    { value: "all", label: "All" },
    { value: TournamentStatus.live, label: "Live" },
    { value: TournamentStatus.upcoming, label: "Upcoming" },
    { value: TournamentStatus.ended, label: "Ended" },
  ] as const;

  return (
    <section
      id="tournaments"
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
              background: "rgba(245,158,11,0.1)",
              border: "1px solid rgba(245,158,11,0.3)",
              color: "#f59e0b",
            }}
          >
            Tournaments
          </div>
          <h2 className="font-orbitron font-black text-3xl sm:text-4xl text-white mb-4">
            Compete & <span className="gradient-text-blue-purple">Win</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Weekly tournaments across all games. Solo and team formats. Real
            prizes.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {FILTERS.map((f) => (
            <button
              type="button"
              key={f.value}
              data-ocid="tournaments.tab"
              onClick={() => setFilter(f.value)}
              className="px-4 py-2 rounded-lg text-xs font-orbitron font-bold uppercase tracking-wider transition-all duration-200"
              style={{
                background:
                  filter === f.value
                    ? "rgba(0,212,255,0.15)"
                    : "rgba(255,255,255,0.04)",
                border:
                  filter === f.value
                    ? "1px solid rgba(0,212,255,0.5)"
                    : "1px solid rgba(255,255,255,0.08)",
                color: filter === f.value ? "#00d4ff" : "rgba(255,255,255,0.5)",
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.length === 0 && (
            <div className="col-span-3 text-center py-12 text-white/30 font-rajdhani text-lg">
              No tournaments found.
            </div>
          )}
          {filtered.map((t, i) => {
            const gc = GAME_COLORS[t.game] || "#00d4ff";
            const sc = STATUS_CONFIG[t.status];
            const isMiniTournament = t.tournamentType === TournamentType.solo;
            const locked = unlockedPack === null && isMiniTournament;

            return (
              <div
                key={`${t.name}-${i}`}
                className="relative rounded-xl p-5 transition-all duration-300 cursor-default"
                style={{ background: "#0d0d1a", border: `1px solid ${gc}20` }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.border =
                    `1px solid ${gc}50`;
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    `0 0 25px ${gc}15`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.border =
                    `1px solid ${gc}20`;
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {locked && (
                  <div
                    className="absolute inset-0 rounded-xl z-10 flex items-center justify-center gap-2"
                    style={{
                      background: "rgba(5,5,16,0.85)",
                      backdropFilter: "blur(3px)",
                    }}
                  >
                    <Lock className="w-4 h-4" style={{ color: gc }} />
                    <span className="text-xs text-white/60 font-rajdhani">
                      Members Only
                    </span>
                  </div>
                )}

                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <div
                      className="inline-block text-xs font-orbitron font-bold uppercase tracking-wider px-2 py-0.5 rounded mb-2"
                      style={{ background: `${gc}15`, color: gc }}
                    >
                      {t.game.toUpperCase()}
                    </div>
                    <h3 className="font-rajdhani font-bold text-white text-base leading-tight">
                      {t.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    {sc.pulse && (
                      <span
                        className="w-2 h-2 rounded-full animate-pulse-dot"
                        style={{ background: sc.color }}
                      />
                    )}
                    <span
                      className="text-xs font-orbitron font-bold"
                      style={{ color: sc.color }}
                    >
                      {sc.label}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-1.5 text-white/50">
                    {t.tournamentType === TournamentType.solo ? (
                      <User className="w-3 h-3" />
                    ) : (
                      <Users className="w-3 h-3" />
                    )}
                    {t.tournamentType === TournamentType.solo ? "Solo" : "Team"}
                  </div>
                  <div className="flex items-center gap-1.5 text-white/50">
                    <Calendar className="w-3 h-3" />
                    {t.date}
                  </div>
                  <div className="flex items-center gap-1.5 col-span-2">
                    <Trophy className="w-3 h-3" style={{ color: "#f59e0b" }} />
                    <span
                      style={{ color: "#f59e0b" }}
                      className="font-semibold"
                    >
                      {t.prize}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
