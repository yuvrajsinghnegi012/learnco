import { Button } from "@/components/ui/button";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  RedirectToSignIn,
  UserButton,
} from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-sky-600">
      <UserButton />
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      <SignedIn>
        <div>Hello, Next.js</div>
        <Button variant="destructive">Button</Button>
      </SignedIn>
    </div>
  );
}
