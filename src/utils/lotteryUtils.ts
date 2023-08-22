export const generateUniqueLotteryNumbers = (totalNumbers: number, pick: number, sets: number): number[][] => {
  const allNumbers = Array.from({ length: totalNumbers }, (_, i) => i + 1);
  const uniqueSets: number[][] = [];

  const shuffle = (array: number[]): number[] => {
    let currentIndex = array.length;
    let randomIndex: number;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  };

  while (uniqueSets.length < sets) {
    const shuffled = shuffle([...allNumbers]);
    const potentialSet = shuffled.slice(0, pick).sort((a, b) => a - b);
    const isUnique = !uniqueSets.some(set => JSON.stringify(set) === JSON.stringify(potentialSet));

    if (isUnique) {
      uniqueSets.push(potentialSet);
    }
  }

  return uniqueSets;
};