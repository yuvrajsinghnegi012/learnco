import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-sky-600">
      <UserButton />
      <div>Hello, Next.js</div>
      <Button variant="destructive">Button</Button>
    </div>
  );
}
