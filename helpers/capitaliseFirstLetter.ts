export default function capitaliseFirstLetter(word: string): string {
  return word.at(0)?.toUpperCase() + word.slice(1);
}
