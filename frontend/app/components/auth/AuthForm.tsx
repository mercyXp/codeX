"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "@/components/ui/logo";
import AuthInput from "@/components/auth/AuthInput";
import { Eye } from "lucide-react";
import Link from "next/link";

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
    <div className="w-full max-w-md px-8 py-12 bg-white rounded-lg shadow-md">
      <Logo size={28} showText />
      <br />

      <h1 className="text-3xl font-semibold mb-8 text-center">
        {isLogin ? "Welcome Back" : "Create Your Account"}
      </h1>

      {error && (
        <div className="mb-4 rounded-md bg-red-50 p-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {isLogin ? (
        <form className="space-y-5" onSubmit={handleSubmit}>
          <AuthInput
            name="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
          />
          <AuthInput
            name="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
            icon={<Eye className="h-4 w-4 text-gray-400" />}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-blue-600 py-3 font-medium text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      ) : (
        <form className="space-y-5" onSubmit={handleSubmit}>
          <AuthInput
            name="first_name"
            label="First Name"
            type="text"
            placeholder="Enter your first name"
          />
          <AuthInput
            name="last_name"
            label="Last Name"
            type="text"
            placeholder="Enter your last name"
          />
          <AuthInput
            name="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
          />
          <AuthInput
            name="country"
            label="Country / Region (Optional)"
            type="text"
            placeholder="Enter your country or region"
          />
          <AuthInput
            name="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
            icon={<Eye className="h-4 w-4 text-gray-400" />}
          />
          <AuthInput
            name="confirm_password"
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
            icon={<Eye className="h-4 w-4 text-gray-400" />}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-green-600 py-3 font-medium text-white hover:bg-green-700 disabled:opacity-50"
          >
            {loading ? "Creating account..." : "Register"}
          </button>
        </form>
      )}

      <div className="mt-8 flex justify-between items-center text-sm">
        {isLogin ? (
          <p>
            New here?{" "}
            <Link href="/register" className="text-blue-600 hover:underline">
              Create an account
            </Link>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <Link href="/" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        )}

        <button className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
          🌙
        </button>
      </div>
    </div>
  );
}
