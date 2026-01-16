import AuthForm from "@/components/auth/AuthForm";
import MarketingPanel from "@/components/auth/MarketingPanel";

function Register(){
    return (
        <main className="grid grid-cols-2 w-screen min-h-screen">    
              {/* Left: Marketing */}
              <section className="flex items-center justify-center">
                <MarketingPanel />
              </section>

              {/* Right: Auth */}
              <section className="flex items-center justify-center">
                <AuthForm mode="register" />
              </section>
            </main>
    )
}
export default Register;