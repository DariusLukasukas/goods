export function normalizeBrandName(brand: string) {
  return brand.toLowerCase().replace(/[- ]/g, " ");
}
