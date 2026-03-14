import CommunitySection from "../components/CommunitySection";

export default function CommunityPage() {
  return (
    <div className="animate-fade-in-page pt-16">
      <div className="text-center pt-10 pb-2 px-4">
        <h1 className="font-orbitron font-black text-3xl sm:text-5xl text-white mb-2">
          Our <span className="gradient-text-blue-purple">Community</span>
        </h1>
        <p className="text-white/50 max-w-xl mx-auto">
          Join thousands of gamers. Find teammates, share clips, and level up
          together.
        </p>
      </div>
      <CommunitySection />
    </div>
  );
}
