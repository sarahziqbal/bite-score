"use client";

import Link from "next/link";
import Button from "./Button";
import { useState } from "react";

export default function Banner() {
  const [active, setActive] = useState<"map" | "ratings">("map");

  return (
    <header className="bg-background border-b border-foreground/10">
      <div className="flex items-center justify-between px-6 py-3">
        
        {/*add logo here when we make it*/}
        <div className="flex-1"></div>

        <div className="flex gap-4">
          <Link href="/">
            <Button active={active === "map"} onClick={() => setActive("map")} bold>Map</Button>
          </Link>
          <Link href="/ratings">
            <Button active={active === "ratings"} onClick={() => setActive("ratings")} bold>Ratings</Button>
          </Link>
        </div>

        <div className="flex-1 flex justify-end">
          <Button>My Account</Button>
        </div>

      </div>
    </header>
  );
}