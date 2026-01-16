import AuthForm from "@/components/auth/AuthForm";
import MarketingPanel from "@/components/auth/MarketingPanel";

export default function Home() {
  return (
    <main className="auth-main">
      <section>
        <AuthForm mode="login" />
      </section>

      <section>
        <MarketingPanel />
      </section>
    </main>
  );
}
