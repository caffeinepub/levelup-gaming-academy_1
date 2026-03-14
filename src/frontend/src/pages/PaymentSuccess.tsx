import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useEffect } from "react";

export default function PaymentSuccess() {
  useEffect(() => {
    // Store that user has purchased (using Advanced=1 as default after any payment)
    localStorage.setItem("unlockedPack", "1");
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: "#050510" }}
    >
      <div className="text-center max-w-md">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow"
          style={{
            background: "rgba(0,255,136,0.15)",
            border: "2px solid rgba(0,255,136,0.5)",
          }}
        >
          <CheckCircle className="w-10 h-10" style={{ color: "#00ff88" }} />
        </div>
        <h1 className="font-orbitron font-black text-3xl text-white mb-3">
          Payment Successful!
        </h1>
        <p className="text-white/50 mb-8">
          Welcome to LevelUp Gaming Academy. Your pack has been activated and
          your content is now unlocked.
        </p>
        <Button
          className="font-orbitron font-bold uppercase tracking-wider"
          style={{
            background: "linear-gradient(135deg,#00d4ff,#8b5cf6)",
            color: "#050510",
          }}
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Start Training
        </Button>
      </div>
    </div>
  );
}
