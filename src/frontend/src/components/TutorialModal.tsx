import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";

const TUTORIALS = {
  chess: {
    title: "Opening Mastery Challenge",
    description:
      "Master the fundamentals of chess openings to control the board from move one.",
    steps: [
      {
        id: "s1",
        title: "Step 1: Control the Center",
        body: "Open with 1.e4 or 1.d4 to immediately contest the central squares (e4, d4, e5, d5). Central control gives your pieces maximum mobility and restricts your opponent.",
      },
      {
        id: "s2",
        title: "Step 2: Develop Your Pieces",
        body: "Move each piece only once in the opening. Develop knights before bishops, aiming for squares like Nf3, Nc3, Bc4, Bb5. Avoid moving the same piece twice early.",
      },
      {
        id: "s3",
        title: "Step 3: Neutralize Your Opponent",
        body: "If your opponent plays 1...e5, respond with 2.Nf3 attacking the pawn. If they play the Sicilian (1...c5), learn the Open Sicilian (2.Nf3 followed by 3.d4) to keep initiative.",
      },
      {
        id: "s4",
        title: "Step 4: Castle Early",
        body: "Castle within the first 10 moves to tuck your king to safety. Connect your rooks and prepare for the middlegame battle. Kingside castling (0-0) is usually safer.",
      },
      {
        id: "s5",
        title: "Step 5: Launch Your Attack",
        body: "Once developed and castled, identify your best pawn breaks and piece routes. Look for weak squares in the opponent's camp, outpost your knights, and coordinate your pieces for a winning attack.",
      },
    ],
  },
  roblox: {
    title: "Mini-Game Blitz Challenge",
    description:
      "Dominate Roblox mini-games with these pro strategies for speed, survival, and team play.",
    steps: [
      {
        id: "r1",
        title: "Step 1: Speed Run Setup",
        body: "Before the mini-game starts, memorize the map layout. Identify the shortest route to objectives. Pre-position your camera angle to minimize blind spots and maximize reaction time.",
      },
      {
        id: "r2",
        title: "Step 2: Resource Collection Priority",
        body: "In games with resource gathering, prioritize high-value loot in low-traffic zones first. Avoid crowded spawn areas early — circle the edges and collect safely before engaging.",
      },
      {
        id: "r3",
        title: "Step 3: Trap Avoidance",
        body: "Watch for environmental traps (lava floors, falling platforms, turrets). Move cautiously through unfamiliar sections. When in doubt, watch another player attempt it first and learn from their mistakes.",
      },
      {
        id: "r4",
        title: "Step 4: Team Coordination",
        body: "Assign roles if playing in a team: one scout, one defender, one attacker. Use the in-game chat or markers to call out enemy positions. Stick together in high-risk zones and split only when farming resources.",
      },
      {
        id: "r5",
        title: "Step 5: Final Push",
        body: "In the end-game, shift to aggressive plays. Eliminate weakened opponents, rush objectives, and protect your team lead. Time your power-ups or special abilities for the final 30 seconds.",
      },
    ],
  },
};

type TutorialGame = "chess" | "roblox";

interface Props {
  game: TutorialGame;
  isOpen: boolean;
  onClose: () => void;
}

export default function TutorialModal({ game, isOpen, onClose }: Props) {
  const [step, setStep] = useState(0);
  const tutorial = TUTORIALS[game];
  const total = tutorial.steps.length;
  const current = tutorial.steps[step];

  const handleClose = () => {
    setStep(0);
    onClose();
  };

  const gameColor = game === "chess" ? "#8b5cf6" : "#00ff88";
  const gameBg =
    game === "chess" ? "rgba(139,92,246,0.1)" : "rgba(0,255,136,0.1)";

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent
        className="max-w-lg border-0 p-0 overflow-hidden"
        style={{ background: "#0a0a18", border: `1px solid ${gameColor}40` }}
      >
        <div
          className="p-6 pb-4"
          style={{ borderBottom: `1px solid ${gameColor}20` }}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <div
                className="inline-block text-xs font-orbitron font-bold uppercase tracking-widest px-2 py-1 rounded mb-2"
                style={{ background: gameBg, color: gameColor }}
              >
                {game === "chess" ? "♟ Chess Challenge" : "🎮 Roblox Challenge"}
              </div>
              <DialogHeader>
                <DialogTitle
                  className="font-orbitron text-xl font-bold"
                  style={{ color: gameColor }}
                >
                  {tutorial.title}
                </DialogTitle>
              </DialogHeader>
              <p className="text-sm text-muted-foreground mt-1">
                {tutorial.description}
              </p>
            </div>
            <button
              type="button"
              data-ocid="tutorial.close_button"
              onClick={handleClose}
              className="shrink-0 p-1 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div
            key={current.id}
            className="animate-fade-in rounded-lg p-4 mb-4"
            style={{ background: gameBg, border: `1px solid ${gameColor}20` }}
          >
            <h3
              className="font-rajdhani font-bold text-lg mb-2"
              style={{ color: gameColor }}
            >
              {current.title}
            </h3>
            <p className="text-sm text-foreground/80 leading-relaxed">
              {current.body}
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 mb-4">
            {tutorial.steps.map((s, i) => (
              <button
                type="button"
                key={s.id}
                onClick={() => setStep(i)}
                className="rounded-full transition-all duration-200"
                style={{
                  width: i === step ? "24px" : "8px",
                  height: "8px",
                  background: i === step ? gameColor : `${gameColor}40`,
                }}
              />
            ))}
          </div>

          <div className="flex items-center justify-between">
            <Button
              data-ocid="tutorial.pagination_prev"
              variant="outline"
              size="sm"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className="border-white/10 hover:bg-white/5"
            >
              <ChevronLeft className="w-4 h-4 mr-1" /> Previous
            </Button>
            <span className="text-xs text-muted-foreground font-orbitron">
              {step + 1} / {total}
            </span>
            {step < total - 1 ? (
              <Button
                data-ocid="tutorial.pagination_next"
                size="sm"
                onClick={() => setStep((s) => s + 1)}
                style={{ background: gameColor, color: "#050510" }}
                className="font-bold"
              >
                Next <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            ) : (
              <Button
                data-ocid="tutorial.close_button"
                size="sm"
                onClick={handleClose}
                style={{ background: gameColor, color: "#050510" }}
                className="font-bold"
              >
                Complete!
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
