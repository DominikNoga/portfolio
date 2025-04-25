export type Project = {
  id: number;
  name: string;
  description: string;
  img: string;
  links: {
    repo: string;
    app: string;
  };
};
