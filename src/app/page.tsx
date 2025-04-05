"use client";

import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ui/shared/ThemeToggle";

export default function Home() {
  return (
    <div className="p-5">
      <div className=" flex justify-end">
        <ThemeToggle />
      </div>
      <h1 className="font-barlow text-3xl font-bold text-red-500">
        Welcome new project React.JS
      </h1>
      <Button variant={"destructive"}>Click here</Button>
    </div>
  );
}
