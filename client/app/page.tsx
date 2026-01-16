import AuthForm from "@/components/auth/AuthForm";
import MarketingPanel from "@/components/auth/MarketingPanel";

export default function Home() {
  return (
    <main className="grid grid-cols-2 w-screen min-h-screen">
      {/* Left: Auth */}
      <section className="flex items-center justify-center">
        <AuthForm mode="login" />
      </section>

      {/* Right: Marketing */}
      <section className="flex items-center justify-center">
        <MarketingPanel />
      </section>
    </main>
  );
}
