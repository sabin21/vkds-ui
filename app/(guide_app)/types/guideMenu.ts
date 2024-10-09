
export interface MenuItem {
  id: number;
  title: string;
  url?: string;
  headlineTitle?: string;
  headlineCopy?: string;
  thumbSrc?: string;
  contentSrc?: string;
  children?: MenuItem[];
  linkVkds?: string;
  linkShadcn?: string;
}