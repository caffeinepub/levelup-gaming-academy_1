import LeaderboardSection from "../components/LeaderboardSection";

export default function LeaderboardPage() {
  return (
    <div className="animate-fade-in-page pt-16">
      <div className="text-center pt-10 pb-2 px-4">
        <h1 className="font-orbitron font-black text-3xl sm:text-5xl text-white mb-2">
          Top <span className="gradient-text-blue-purple">Players</span>
        </h1>
        <p className="text-white/50 max-w-xl mx-auto">
          Weekly leaderboards across all games. Climb the ranks and claim your
          spot.
        </p>
      </div>
      <LeaderboardSection />
    </div>
  );
}
