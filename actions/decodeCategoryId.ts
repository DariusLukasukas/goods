// categoryMapping.ts
const categoryIdsToTitles: Record<number, string> = {
  1: "Tech",
  2: "Lifestyle",
  3: "Home",
  4: "Workplace",
  5: "Carry",
  6: "Personal",
};

export function getCategoryTitle(categoryId: number): string {
  return categoryIdsToTitles[categoryId] || "Unknown";
}
