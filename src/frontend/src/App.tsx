import { Toaster } from "@/components/ui/sonner";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import FooterSection from "./components/FooterSection";
import Navbar from "./components/Navbar";
import CommunityPage from "./pages/CommunityPage";
import ContactPage from "./pages/ContactPage";
import GamesPage from "./pages/GamesPage";
import HomePage from "./pages/HomePage";
import LeaderboardPage from "./pages/LeaderboardPage";
import MembershipPage from "./pages/MembershipPage";
import PaymentFailure from "./pages/PaymentFailure";
import PaymentSuccess from "./pages/PaymentSuccess";
import TournamentsPage from "./pages/TournamentsPage";

function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
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

const layoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "layout",
  component: Layout,
});

const homeRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/",
  component: HomePage,
});
const gamesRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/games",
  component: GamesPage,
});
const membershipRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/membership",
  component: MembershipPage,
});
const tournamentsRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/tournaments",
  component: TournamentsPage,
});
const leaderboardRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/leaderboard",
  component: LeaderboardPage,
});
const communityRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/community",
  component: CommunityPage,
});
const contactRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/contact",
  component: ContactPage,
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
  layoutRoute.addChildren([
    homeRoute,
    gamesRoute,
    membershipRoute,
    tournamentsRoute,
    leaderboardRoute,
    communityRoute,
    contactRoute,
  ]),
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
