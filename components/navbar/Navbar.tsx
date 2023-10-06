"use client";

import Link from "next/link";
import { ThemeToggle } from "../theme/theme-toggle";

export default function Navbar() {
  const categories = [
    {
      title: "Tech",
      href: "tech",
    },
    {
      title: "Lifestyle",
      href: "lifestyle",
    },
    {
      title: "Home",
      href: "home",
    },
    {
      title: "Workplace",
      href: "workplace",
    },
    {
      title: "Carry",
      href: "carry",
    },
    {
      title: "Personal",
      href: "personal",
    },
  ];

  const brands = [
    {
      title: "Apple",
      href: "apple",
    },
    {
      title: "Hardgraft",
      href: "hardgraft",
    },
    {
      title: "Grovemade",
      href: "grovemade",
    },
    {
      title: "Teenage Engineering",
      href: "teenage-engineering",
    },
    {
      title: "Carl Friedrik",
      href: "carl-friedrik",
    },
    {
      title: "Logitech",
      href: "logitech",
    },
  ];

  return (
    <div className="flex flex-row gap-4 justify-between z-20">
      <div className="flex w-1/2 flex-col">
        <div className="mb-3 text-xs font-light text-neutral-500 dark:text-neutral-400">
          Categories
        </div>
        {categories.map((category, i) => (
          <Link
            key={i}
            href={`/category/${category.href}`}
            className="mb-1 hover:cursor-pointer text-sm text-black hover:underline dark:text-neutral-100"
          >
            {category.title}
          </Link>
        ))}
      </div>
      <div className="flex w-1/2 flex-col">
        <div className="mb-3 text-xs font-light text-neutral-500 dark:text-neutral-400">
          Brands
        </div>
        {brands.map((brand, i) => (
          <Link
            key={i}
            href={`/brands/${brand.href}`}
            className="mb-1 hover:cursor-pointer text-sm text-black hover:underline dark:text-neutral-100"
          >
            {brand.title}
          </Link>
        ))}
      </div>
      <div className="w-1/12 flex flex-col items-center gap-2">
        <ThemeToggle />
      </div>
    </div>
  );
}
