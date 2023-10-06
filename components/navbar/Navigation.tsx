"use client";

import Navbar from "@/components/navbar/Navbar";
import { Card, CardFooter } from "@/components/ui/card";

export default function Navigation() {
  return (
    <div className="group aspect-h-6 aspect-w-5 z-10">
      <Navbar />
      <CardFooter className="absolute bottom-0 items-end px-0">
        <div className="flex flex-col text-sm">
          <div className="dark:text-neutral-200">
            <div className="-mb-3 w-fit rotate-12 text-clip text-5xl select-none">
              *
            </div>
            <p className="italic">Quality over quantity.</p>
            <p>
              Discover beautifully designed
              <br />
              physical products. Updated weekly.
            </p>
          </div>
          <p className="mt-4 w-full text-xs text-neutral-500 dark:text-neutral-400">
            © 2023 Goods.tech → Beta 0.0.1
          </p>
        </div>
      </CardFooter>
    </div>
  );
}
