import { ClerkLoaded, ClerkLoading, SignUp } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-[100svh] grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center justify-center">
        <div className="text-center space-y-4 pt-16 lg:pt-0">
          <h1 className="font-bold text-3xl lg:text-4xl text-[#2e2a47]">
            Welcome Back!
          </h1>
          <p className="text-base text-[#7e8ca0]">
            Log in Create account to get back to your dashboard
          </p>
        </div>
        <div className="flex items-center justify-center mt-8">
          <ClerkLoaded>
            <SignUp path="/sign-in" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin text-muted-foreground" />
          </ClerkLoading>
        </div>
      </div>
      <div className="h-full bg-[var(--main-bg-color)] hidden lg:flex items-center justify-center">
        <Image src="/learn.svg" alt="mascot" width={300} height={300} />
      </div>
    </div>
  );
}
