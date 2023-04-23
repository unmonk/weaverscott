type ProjectType = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  excerpt: string;
  ogImage: {
    url: string;
  };
  tags: string[];
  screenshots: [
    {
      url: string;
      alt: string;
    }
  ];
  content: string;
};

export default ProjectType;
