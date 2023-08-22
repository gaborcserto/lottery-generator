export interface LotteryType {
  pick: number;
  total: number;
  label: string;
  key: string;
}

export const LOTTERY_TYPES: LotteryType[] = [
  { pick: 7, total: 35, label: 'Lottery seven', key: 'seven' },
  { pick: 6, total: 45, label: 'Lottery six', key: 'six' },
  { pick: 5, total: 90, label: 'Lottery five', key: 'five' },
];

export function getColumnProps(chunkCount: number) {
  switch (chunkCount) {
    case 1:
      return { lg: 12 };
    case 2:
      return { lg: 6 };
    case 3:
      return { mb: 6, lg: 4 };
    case 4:
      return { lg: 6 };
    default:
      return { mb: 6, lg: 4 };
  }
}