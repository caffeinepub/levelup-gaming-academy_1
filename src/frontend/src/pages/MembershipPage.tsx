import MembershipSection from "../components/MembershipSection";

export default function MembershipPage() {
  return (
    <div className="animate-fade-in-page pt-16">
      <div className="text-center pt-10 pb-2 px-4">
        <h1 className="font-orbitron font-black text-3xl sm:text-5xl text-white mb-2">
          Membership <span className="gradient-text-blue-purple">Packs</span>
        </h1>
        <p className="text-white/50 max-w-xl mx-auto">
          Choose your level and unlock training, tournaments, and coaching.
        </p>
      </div>
      <MembershipSection />
    </div>
  );
}
