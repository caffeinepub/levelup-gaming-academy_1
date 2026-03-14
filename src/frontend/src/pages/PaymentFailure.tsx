import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";

export default function PaymentFailure() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: "#050510" }}
    >
      <div className="text-center max-w-md">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{
            background: "rgba(239,68,68,0.15)",
            border: "2px solid rgba(239,68,68,0.5)",
          }}
        >
          <XCircle className="w-10 h-10" style={{ color: "#ef4444" }} />
        </div>
        <h1 className="font-orbitron font-black text-3xl text-white mb-3">
          Payment Cancelled
        </h1>
        <p className="text-white/50 mb-8">
          No charge was made. You can try again whenever you're ready.
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
          Back to Home
        </Button>
      </div>
    </div>
  );
}
