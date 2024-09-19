import MainContent from "@/components/main-content";
import MainNavBar from "@/components/main-navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <MainNavBar />
      <MainContent />
    </main>
  );
}
