export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    return (
      "Your andrew ID may be a combination of your first name,  " +
      "your middle initial, and your last name, or any combination of  " +
      "and initials and numbers if it is already taken."
    );
  }

  
  const largestMatch = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)?/);
  if (largestMatch) {
    const x: number = parseInt(largestMatch[1]);
    const y: number = parseInt(largestMatch[2]);
    const z: number = parseInt(largestMatch[3]);

    return (Math.max(x, y, z).toString());
  }

  const multiplyMatch = query.match(/What is (\d+) multiplied by (\d+)?/);
  if (multiplyMatch) {
    const x: number = parseInt(multiplyMatch[1]);
    const y: number = parseInt(multiplyMatch[2]);

    return ((x * y).toString());
  }

  return "";
}


