"use client";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

export default function GoBack() {
  const router = useRouter();

  return (
    <button
      type="button"
      aria-label="Go Back"
      onClick={() => router.back()}
      className="flex flex-row items-center text-xs text-blue-500 dark:text-blue-500 w-ful mb-4 p-1"
    >
      <ChevronLeftIcon className="w-5 h-5" />
      <div>Back</div>
    </button>
  );
}
