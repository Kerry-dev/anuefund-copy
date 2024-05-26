export type Lipper = {
  id: number;
  title: string;
  data: Array<LipperData>;
  rankName: string;
};

export type LipperData = {
  title: string;
  date: string;
  worth: number;
  rank: number;
  month6: number;
  year1: number | null;
  year2: number | null;
  year3: number | null;
};
