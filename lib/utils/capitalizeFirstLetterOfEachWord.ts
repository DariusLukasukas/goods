export function capitalizeFirstLetterOfEachWord(string: string) {
  return string
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
