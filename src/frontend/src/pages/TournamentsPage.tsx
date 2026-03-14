import { useEffect, useState } from "react";
import TournamentsSection from "../components/TournamentsSection";

export default function TournamentsPage() {
  const [unlockedPack, setUnlockedPack] = useState<number | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("unlockedPack");
    if (stored !== null) setUnlockedPack(Number.parseInt(stored, 10));
  }, []);

  return (
    <div className="animate-fade-in-page pt-16">
      <div className="text-center pt-10 pb-2 px-4">
        <h1 className="font-orbitron font-black text-3xl sm:text-5xl text-white mb-2">
          Weekly <span className="gradient-text-blue-purple">Tournaments</span>
        </h1>
        <p className="text-white/50 max-w-xl mx-auto">
          Compete in weekly tournaments across all games. Real prizes, real
          glory.
        </p>
      </div>
      <TournamentsSection unlockedPack={unlockedPack} />
    </div>
  );
}
