export type Blog = {
  title: string;
  imgSrc: string;
  imgHeight?: number;
  href: string;
  articleList: Array<BlogArticle>;
};

export type BlogArticle = {
  title: string;
  href: string;
  date: string;
  isHot: boolean;
};
