"use client";

import { Card, CardContent, CardFooter } from "../ui/card";
import Image from "next/image";
import { ProductWithCategory } from "./Products";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { useRouter } from "next/navigation";
import StaffPickBadge from "./StaffPickBadge";

interface ProductCardProps {
  product: ProductWithCategory;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isLoading, setLoading] = useState(true);

  const router = useRouter();

  const handleClick = () => {
    if (!product.slug) {
      console.error("Product slug is not defined");
      return;
    }

    router.push(`/items/${product.slug}`);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  return (
    <Card onKeyDown={handleKeyDown} onClick={handleClick}>
      {product.staffPick ? <StaffPickBadge /> : ""}
      <CardContent className="group">
        <div className="aspect-w-1 aspect-h-1 scale-75 overflow-hidden w-full bg-neutral-100 dark:bg-neutral-900">
          <Image
            priority
            src={product.image}
            alt={product.title}
            height={400}
            width={400}
            quality={80}
            className={twMerge(
              "transition-all delay-0 duration-1000 ease-out group-hover:scale-90",
              isLoading
                ? "scale-90 blur-lg grayscale"
                : "scale-75 blur-0 grayscale-0"
            )}
            onLoadingComplete={() => setLoading(false)}
          />
        </div>
      </CardContent>
      <CardFooter className="absolute bottom-0 w-full items-end antialiased">
        <div className="flex w-full flex-col space-y-1">
          <h2 className="text-xs text-neutral-500 dark:text-neutral-400">
            {product.category && product.category.name}
          </h2>
          <div className="flex w-full flex-row justify-between text-sm dark:text-neutral-100">
            <h1 className="font-medium">{product.title}</h1>
            <p className="font-light whitespace-nowrap dark:text-neutral-400 text-neutral-500">
              {product.price} $
            </p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
