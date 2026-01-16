import AuthForm from "@/components/auth/AuthForm";
import MarketingPanel from "@/components/auth/MarketingPanel";

export default function Register() {
  return (
    <main className="auth-main">
      <section>
        <AuthForm mode="register" />
      </section>

      <section>
        <MarketingPanel />
      </section>
    </main>
  );
}
