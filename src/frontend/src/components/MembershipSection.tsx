import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Check, Loader2, Star } from "lucide-react";
import { toast } from "sonner";
import { useActor } from "../hooks/useActor";
import { useCreateCheckoutSession } from "../hooks/useCheckout";
import { useInView } from "../hooks/useInView";

const PACK_STYLES = [
  { color: "#00d4ff" },
  { color: "#8b5cf6" },
  { color: "#00ff88" },
];

export default function MembershipSection() {
  const { ref, inView } = useInView();
  const { actor } = useActor();
  const checkout = useCreateCheckoutSession();

  const { data: packs } = useQuery({
    queryKey: ["packs"],
    queryFn: () => actor!.getMembershipPacks(),
    enabled: !!actor,
  });

  const handleBuy = async (packName: string) => {
    try {
      const priceId = `${packName.toLowerCase().replace(/\s+/g, "_")}_pack`;
      const session = await checkout.mutateAsync([
        { name: packName, priceId, quantity: BigInt(1) },
      ]);
      if (!session?.url) throw new Error("Missing session URL");
      window.location.href = session.url;
    } catch {
      toast.error("Payment setup required. Please configure Stripe first.");
    }
  };

  const fallbackPacks = [
    {
      name: "Beginner Pack",
      price: BigInt(10),
      features:
        "Basic training guides per game\nAccess to community\nWeekly tips\nMini-game challenges for Roblox and Chess",
    },
    {
      name: "Advanced Pack",
      price: BigInt(15),
      features:
        "Everything in Beginner\nAdvanced game strategies per game\nAccess to mini-tournaments for all games\nProgress tracking",
    },
    {
      name: "Pro Pack",
      price: BigInt(20),
      features:
        "Everything in Advanced\nOne-on-one coaching (COD, Valorant, Fortnite)\nPriority leaderboard placement\nExclusive challenges for Roblox and Chess\nPersonalized improvement plan",
    },
  ];

  const displayPacks = packs && packs.length > 0 ? packs : fallbackPacks;

  return (
    <section
      id="packs"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 px-4"
      style={{
        background: "linear-gradient(180deg, #080814 0%, #050510 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-14 ${inView ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div
            className="inline-block text-xs font-orbitron font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
            style={{
              background: "rgba(139,92,246,0.1)",
              border: "1px solid rgba(139,92,246,0.3)",
              color: "#8b5cf6",
            }}
          >
            Membership Packs
          </div>
          <h2 className="font-orbitron font-black text-3xl sm:text-4xl text-white mb-4">
            Choose Your <span className="gradient-text-blue-purple">Level</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Unlock training content, tournaments, and coaching with a plan built
            for your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayPacks.map((pack, i) => {
            const style = PACK_STYLES[i % PACK_STYLES.length];
            const features = pack.features.split("\n").filter(Boolean);
            const isPopular = i === 1;

            return (
              <div
                key={pack.name}
                data-ocid={`packs.item.${i + 1}`}
                className={`relative rounded-2xl p-6 transition-all duration-300 cursor-default ${inView ? "animate-fade-in-up" : "opacity-0"}`}
                style={{
                  background: isPopular
                    ? "linear-gradient(160deg, #0d0a1a, #0a0d1a)"
                    : "#0d0d1a",
                  border: `1px solid ${style.color}${isPopular ? "50" : "25"}`,
                  animationDelay: `${0.1 + i * 0.15}s`,
                  boxShadow: isPopular ? `0 0 40px ${style.color}15` : "none",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "scale(1.03)";
                  el.style.border = `1px solid ${style.color}80`;
                  el.style.boxShadow = `0 0 50px ${style.color}25`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "scale(1)";
                  el.style.border = `1px solid ${style.color}${isPopular ? "50" : "25"}`;
                  el.style.boxShadow = isPopular
                    ? `0 0 40px ${style.color}15`
                    : "none";
                }}
              >
                {isPopular && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 px-4 py-1 rounded-full text-xs font-orbitron font-bold uppercase tracking-wider"
                    style={{ background: style.color, color: "#050510" }}
                  >
                    <Star className="w-3 h-3" /> Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-orbitron font-black text-xl text-white mb-1">
                    {pack.name}
                  </h3>
                  <div className="flex items-end gap-1">
                    <span
                      className="font-orbitron font-black text-4xl"
                      style={{ color: style.color }}
                    >
                      ${Number(pack.price)}
                    </span>
                    <span className="text-white/40 text-sm mb-1">/month</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: `${style.color}20` }}
                      >
                        <Check
                          className="w-3 h-3"
                          style={{ color: style.color }}
                        />
                      </div>
                      <span className="text-white/70">{feat}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  data-ocid={`packs.buy_button.${i + 1}`}
                  className="w-full font-orbitron font-bold uppercase tracking-wider text-sm py-6 transition-all duration-200"
                  style={{
                    background: isPopular ? style.color : `${style.color}15`,
                    color: isPopular ? "#050510" : style.color,
                    border: `1px solid ${style.color}40`,
                  }}
                  disabled={checkout.isPending}
                  onClick={() => handleBuy(pack.name)}
                >
                  {checkout.isPending ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Buy Now"
                  )}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
