"use client";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { getCategoryTitle } from "@/actions/decodeCategoryId";
import { capitalizeFirstLetterOfEachWord } from "@/lib/utils/capitalizeFirstLetterOfEachWord";
import StaffPickBadge from "@/components/product/StaffPickBadge";
import { Product } from "@prisma/client";

interface ItemCardProps {
  item: Product[];
}

const categoryLookupTable: any = {
  1: "tech",
  2: "lifestyle",
  3: "home",
  4: "workplace",
  5: "carry",
  6: "personal",
};

export default function ItemCard({ item }: ItemCardProps) {
  const [isLoading, setLoading] = useState(true);

  return (
    <Card
      className="aspect-none h-screen max-h-[700px] p-0.5 flex flex-col lg:flex-row bg-inherit dark:bg-inherit"
      aria-label={item[0].title}
    >
      {item[0].staffPick ? <StaffPickBadge /> : ""}
      <Link
        href={item[0].linkTo}
        prefetch={false}
        className="w-full lg:w-3/5 h-2/3 md:h-full bg-neutral-100 dark:bg-neutral-900 rounded-lg flex justify-center items-center"
      >
        <Image
          priority
          src={item[0].image}
          alt={item[0].title}
          height={600}
          width={600}
          quality={90}
          className={twMerge(
            "transition-all delay-75 duration-700 ease-out group-hover:scale-90",
            isLoading
              ? "scale-90 blur-lg grayscale"
              : "scale-75 blur-0 grayscale-0"
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </Link>
      <div className="relative flex flex-col my-auto w-full lg:w-1/3">
        <CardHeader className="space-y-2 pl-0 lg:pl-14">
          <div className="flex flex-row gap-1.5 text-neutral-500 text-[14px] font-light dark:text-neutral-400">
            <Link
              href={`/brands/${item[0].brand.replace(/\s/g, "-")}`}
              className="hover:underline"
            >
              {capitalizeFirstLetterOfEachWord(item[0].brand.toLowerCase())}
            </Link>
            <i>·</i>
            <Link
              href={`/category/${categoryLookupTable[item[0].categoryId]}`}
              className="hover:underline"
            >
              {getCategoryTitle(item[0].categoryId)}
            </Link>
          </div>
          <h1 className="font-semibold leading-none tracking-tight">
            {item[0].title}
          </h1>
          <CardDescription>{item[0].description}</CardDescription>
        </CardHeader>
        <CardFooter className="text-sm pl-0 lg:pl-14 text-neutral-500 dark:text-neutral-400">
          <p>{item[0].price} $</p>
        </CardFooter>
      </div>
    </Card>
  );
}
