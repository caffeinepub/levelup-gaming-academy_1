import { useMutation } from "@tanstack/react-query";
import { useActor } from "./useActor";

export type CheckoutSession = { id: string; url: string };

export interface ShoppingItem {
  name: string;
  priceId: string;
  quantity: bigint;
}

export function useCreateCheckoutSession() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (items: ShoppingItem[]): Promise<CheckoutSession> => {
      if (!actor) throw new Error("Actor not available");
      const baseUrl = `${window.location.protocol}//${window.location.host}`;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const stripeActor = actor as any;
      if (typeof stripeActor.createCheckoutSession !== "function") {
        throw new Error("Stripe not configured");
      }
      const result = await stripeActor.createCheckoutSession(
        items,
        `${baseUrl}/payment-success`,
        `${baseUrl}/payment-failure`,
      );
      const session = JSON.parse(result) as CheckoutSession;
      if (!session?.url) throw new Error("Stripe session missing url");
      return session;
    },
  });
}
