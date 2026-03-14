import { Toaster } from "@/components/ui/sonner";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { useEffect, useState } from "react";
import AboutSection from "./components/AboutSection";
import CTASection from "./components/CTASection";
import CommunitySection from "./components/CommunitySection";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import LeaderboardSection from "./components/LeaderboardSection";
import MembershipSection from "./components/MembershipSection";
import Navbar from "./components/Navbar";
import TournamentsSection from "./components/TournamentsSection";
import TrainingSection from "./components/TrainingSection";
import PaymentFailure from "./pages/PaymentFailure";
import PaymentSuccess from "./pages/PaymentSuccess";

function HomePage() {
  const [unlockedPack, setUnlockedPack] = useState<number | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("unlockedPack");
    if (stored !== null) setUnlockedPack(Number.parseInt(stored, 10));
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <TrainingSection unlockedPack={unlockedPack} />
        <MembershipSection />
        <TournamentsSection unlockedPack={unlockedPack} />
        <LeaderboardSection />
        <CommunitySection />
        <CTASection />
      </main>
      <FooterSection />
    </>
  );
}

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <Toaster />
    </>
  ),
});
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});
const successRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/payment-success",
  component: PaymentSuccess,
});
const failureRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/payment-failure",
  component: PaymentFailure,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  successRoute,
  failureRoute,
]);
const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
