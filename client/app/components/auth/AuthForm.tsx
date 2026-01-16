"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "@/components/ui/logo";
import AuthInput from "@/components/auth/AuthInput";
import { Eye } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "@/app/components/theme/ThemeToggle";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

interface AuthFormProps {
  mode: "login" | "register";
}

export default function AuthForm({ mode }: AuthFormProps) {
  const isLogin = mode === "login";
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const payload = isLogin
      ? {
          email: formData.get("email"),
          password: formData.get("password"),
        }
      : {
          first_name: formData.get("first_name"),
          last_name: formData.get("last_name"),
          email: formData.get("email"),
          country: formData.get("country"),
          password: formData.get("password"),
          confirm_password: formData.get("confirm_password"),
        };

    try {
      const res = await fetch(
        `${API_BASE_URL}/auth/${isLogin ? "login" : "register"}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.detail || "Authentication failed");
      }

      localStorage.setItem("codex_token", data.access_token);
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-md px-6 py-10 md:px-8 md:py-12 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-gray-100 dark:border-zinc-800 transition-all">
      <div className="flex flex-col items-center mb-8">
        <Logo size={32} showText />
        <h1 className="text-2xl md:text-3xl font-bold mt-6 text-gray-900 dark:text-white">
          {isLogin ? "Welcome Back" : "Create Your Account"}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm text-center">
          {isLogin 
            ? "Enter your details to access your dashboard" 
            : "Join us today and start managing your workflow"}
        </p>
      </div>

      {error && (
        <div className="mb-6 rounded-lg bg-red-50 dark:bg-red-900/20 p-4 text-sm text-red-700 dark:text-red-400 border border-red-100 dark:border-red-900/30">
          {error}
        </div>
      )}

      <form className="space-y-4" onSubmit={handleSubmit}>
        {!isLogin && (
          <div className="grid grid-cols-2 gap-4">
            <AuthInput
              name="first_name"
              label="First Name"
              type="text"
              placeholder="Jane"
              required
            />
            <AuthInput
              name="last_name"
              label="Last Name"
              type="text"
              placeholder="Doe"
              required
            />
          </div>
        )}

        <AuthInput
          name="email"
          label="Email Address"
          type="email"
          placeholder="name@company.com"
          required
        />

        {!isLogin && (
          <AuthInput
            name="country"
            label="Country / Region"
            type="text"
            placeholder="e.g. United Kingdom"
          />
        )}

        <AuthInput
          name="password"
          label="Password"
          type="password"
          placeholder="••••••••"
          required
          icon={<Eye className="h-4 w-4 text-gray-400" />}
        />

        {!isLogin && (
          <AuthInput
            name="confirm_password"
            label="Confirm Password"
            type="password"
            placeholder="••••••••"
            required
            icon={<Eye className="h-4 w-4 text-gray-400" />}
          />
        )}

        <button
          type="submit"
          disabled={loading}
          className={`w-full mt-4 rounded-lg py-3.5 font-semibold text-white transition-all transform active:scale-[0.98] disabled:opacity-70 ${
            isLogin 
              ? "bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200 dark:shadow-none" 
              : "bg-green-600 hover:bg-green-700 shadow-lg shadow-green-200 dark:shadow-none"
          }`}
        >
          {loading 
            ? (isLogin ? "Signing in..." : "Creating account...") 
            : (isLogin ? "Sign In" : "Get Started")}
        </button>
      </form>

      <div className="mt-8 pt-6 border-t border-gray-100 dark:border-zinc-800 flex justify-between items-center text-sm">
        <p className="text-gray-600 dark:text-gray-400">
          {isLogin ? "New here?" : "Already joined?"}{" "}
          <Link 
            href={isLogin ? "/register" : "/"} 
            className="font-semibold text-blue-600 dark:text-blue-400 hover:underline"
          >
            {isLogin ? "Create an account" : "Log in to account"}
          </Link>
        </p>

        <ThemeToggle />
      </div>
    </div>
  );
}