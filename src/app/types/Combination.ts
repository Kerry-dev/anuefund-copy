export type Combination = {
  title: string;
  data: Array<CombinationData>;
  hasButton: boolean;
};

export type CombinationData = {
  id: number;
  tabName: string;
  imgSrc: string;
  imgMemo: string;
  title: string;
  content: string;
};
