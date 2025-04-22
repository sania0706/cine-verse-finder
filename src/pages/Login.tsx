
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LogIn } from "lucide-react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  // No real authentication logic, frontend UI only

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#9b87f5] via-[#6E59A5] to-[#1A1F2C]">
      <form
        className="bg-white/95 px-8 py-10 rounded-lg shadow-xl flex flex-col gap-5 w-full max-w-sm animate-fade-in"
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <div className="flex items-center gap-2 mb-2 justify-center">
          <LogIn className="w-8 h-8 text-[#9b87f5]" />
          <h2 className="text-2xl font-bold text-[#221F26] tracking-tight">Login</h2>
        </div>
        <Input
          type="email"
          placeholder="Email"
          autoComplete="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          required
          value={pwd}
          onChange={e => setPwd(e.target.value)}
        />
        <Button
          type="submit"
          className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white text-base font-semibold w-full shadow transition-colors"
        >
          Login
        </Button>
        <p className="text-xs text-center text-gray-500">
          Demo only – connect Supabase for real authentication!
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
