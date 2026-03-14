import { useEffect, useState } from "react";
import TrainingSection from "../components/TrainingSection";

export default function TrainingPage() {
  const [unlockedPack, setUnlockedPack] = useState<number | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("unlockedPack");
    if (stored !== null) setUnlockedPack(Number.parseInt(stored, 10));
  }, []);

  return (
    <div className="animate-fade-in-page pt-16">
      <TrainingSection unlockedPack={unlockedPack} />
    </div>
  );
}
