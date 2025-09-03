export interface SiteConfig {
  name: string;
  site?: string;
  base?: string;
  trailingSlash?: boolean | "never" | "always" | "ignore";
  transformPage?: [RegExp, string];
}

export interface MetaData {
  title?: string;
  ignoreTitleTemplate?: boolean;
  canonical?: string;
  robots?: MetaDataRobots;
  description?: string;
  openGraph?: MetaDataOpenGraph;
  twitter?: MetaDataTwitter;
  verification?: MetaDataVerification;
}

export interface MetaDataRobots {
  index?: boolean;
  follow?: boolean;
  googleBot?: string;
}

export interface MetaDataImage {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
}

export interface MetaDataOpenGraph {
  url?: string;
  siteName?: string;
  images?: Array<MetaDataImage>;
  locale?: string;
  type?: string;
}

export interface MetaDataTwitter {
  handle?: string;
  site?: string;
  cardType?: string;
}

export interface MetaDataVerification {
  google?: string;
  yandex?: string;
  yahoo?: string;
  other?: { [key: string]: string };
}

export interface ViewTransitions {
  name?: string;
}

export interface SearchPageData {
  title: string;
  description?: string;
  image?: MetaDataImage;
}

export interface PageSEO {
  title: string;
  description?: string;
  image?: MetaDataImage;
  article?: boolean;
}

export interface LayoutSEO {
  title: string;
  description?: string;
  openGraph?: MetaDataOpenGraph;
  twitter?: MetaDataTwitter;
  verification?: MetaDataVerification;
}

export interface GenerateSEO {
  title: string;
  description?: string;
  canonical?: string;
  openGraph?: MetaDataOpenGraph;
  twitter?: MetaDataTwitter;
  verification?: MetaDataVerification;
}

export interface BlogSEO {
  title: string;
  description?: string;
  canonical?: string;
  openGraph?: MetaDataOpenGraph;
  article?: MetaDataOpenGraph;
  twitter?: MetaDataTwitter;
}

export interface AstroGlobal {
  site: SiteConfig;
  generateMetaDescription?: (context?: any) => string;
  name?: string;
  favicon?: string;
  siteUrl?: string;
  image?: string;
  twitter?: string;
  company?: {
    "@type": string;
    name: string;
    url: string;
    logo: string;
  };
  creator?: {
    "@type": string;
    name: string;
    url: string;
  };
}

export interface DefaultValues {
  pages: {
    blog: {
      title: string;
      description: string;
      image: MetaDataImage;
    };
    about: {
      title: string;
      description: string;
      image: MetaDataImage;
    };
    portfolio: {
      title: string;
      description: string;
      image: MetaDataImage;
    };
    contact: {
      title: string;
      description: string;
      image: MetaDataImage;
    };
  };
}

export interface Link {
  link: string;
  text: string;
  ariaLabel?: string;
}

export interface SocialLink extends Link {
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  github?: string;
  tech: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface BlogConfig {
  disabled?: boolean;
  postsPerPage?: number;
  blog?: {
    disabled?: boolean;
    postsPerPage?: number;
    list?: {
      disabled?: boolean;
      pathname?: string;
    };
    post?: {
      disabled?: boolean;
      permalink?: string;
    };
    category?: {
      disabled?: boolean;
      pathname?: string;
    };
    tag?: {
      disabled?: boolean;
      pathname?: string;
    };
  };
}

export interface SEOConfig {
  disabled?: boolean;
  title?: string;
  titleTemplate?: string;
  description?: string;
  site?: string;
  canonical?: string;
  openGraph?: {
    basic?: {
      disabled?: boolean;
      type?: string;
      image?: string;
    };
    optional?: {
      disabled?: boolean;
      imageWidth?: number;
      imageHeight?: number;
      siteName?: string;
    };
  };
  twitter?: {
    disabled?: boolean;
    handle?: string;
    site?: string;
  };
  robots?: {
    disabled?: boolean;
    noIndex?: boolean;
    noFollow?: boolean;
    googleBot?: string;
  };
}

export interface SiteConfig {
  name: string;
  site?: string;
  base?: string;
  trailingSlash?: boolean | "never" | "always" | "ignore";
  transformPage?: [RegExp, string];
}

export interface AstroConfig {
  site: SiteConfig;
  base: string;
  trailingSlash: boolean | "never" | "always" | "ignore";
  build: {
    format: "file" | "directory";
  };
  vite: {
    ssr: {
      external: string[];
    };
  };
}

export interface Config {
  name: string;
  site: string;
  base: string;
  trailingSlash: boolean | "never" | "always" | "ignore";
  title: string;
  titleTemplate: string;
  description: string;
  image: string;
  type: string;
  robots: {
    index: boolean;
    follow: boolean;
    googleBot: string;
  };
  openGraph: {
    type: string;
    siteName: string;
    images: {
      path: string;
      width: number;
      height: number;
      alt: string;
    }[];
  };
  twitter: {
    handle: string;
    site: string;
    cardType: string;
  };
  verification: {
    google: string;
    yandex: string;
    yahoo: string;
    other: { [key: string]: string };
  };
  links: Link[];
  socials: SocialLink[];
  projects: Project[];
  skills: Skill[];
  blog: BlogConfig;
  seo: SEOConfig;
}

export const SITE = {
  name: "Mina Sameh",
  site: "https://www.minasameh.dev",
  base: "/",
  trailingSlash: false,
  title: "Mina Sameh - Backend Developer",
  description:
    "Backend developer passionate about building scalable and efficient systems. I write about development, and anything that catches my eye. I also like to read tech blogs and articles, if you have a good one send it my way.",
  defaultLanguage: "en_US",
  // twitter: "@minasameh",
  github: "Minasameh1",
  linkedin: "mina-sameh-dev",
};

export const METADATA = {
  disabled: false,
  title: SITE.title,
  titleTemplate: `%s | ${SITE.name}`,
  description: SITE.description,
  canonical: SITE.site,
  openGraph: {
    type: "website",
    siteName: SITE.name,
    images: [
      {
        path: "/placeholder-hero.jpg",
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
  },
  // twitter: {
  //   handle: SITE.twitter,
  //   site: SITE.twitter,
  //   cardType: "summary_large_image",
  // },
  robots: {
    index: true,
    follow: true,
    googleBot: "index, follow",
  },
  verification: {
    google: "",
    yandex: "",
    yahoo: "",
    other: {},
  },
};

export const LINKS = [
  {
    link: "/",
    text: "Home",
  },
  {
    link: "/about",
    text: "About",
  },
  {
    link: "/blog",
    text: "Blog",
  },
  {
    link: "/portfolio",
    text: "Portfolio",
  },
];

export const SOCIALS = [
  {
    link: "https://github.com/Minasameh1",
    ariaLabel: "GitHub",
    icon: "mdi:github",
    text: "GitHub",
  },
  {
    link: "https://www.linkedin.com/in/mina-sameh-dev/",
    ariaLabel: "LinkedIn",
    icon: "mdi:linkedin",
    text: "LinkedIn",
  },
  {
    link: "mailto:me@minasameh.dev",
    ariaLabel: "Email",
    icon: "mdi:email",
    text: "Email",
  },
];

export const PROJECTS = [
  {
    title: "My Neovim config",
    description: "A highly customizable Neovim configuration",
    image: "/neovim.png",
    // link: "https://github.com/MinaSameh1/nvim-config",
    github: "https://github.com/MinaSameh1/nvim-config",
    tech: ["Lua", "Vimscript", "Neovim"],
  },
  {
    title: "NestBank Finance",
    description: "A NestJS based banking API with transactions and e2e",
    image: "/nestjs.png",
    github: "https://github.com/MinaSameh1/nestbank-finance",
    tech: ["TypeScript", "NestJS", "PostgreSQL", "Docker", "Jest"],
  },
  {
    title: "Tiny Parser",
    description: "A simple parser combinator library in TypeScript",
    image: "/nodejs.png",
    github: "https://github.com/MinaSameh1/tinyparser",
    tech: ["TypeScript", "Node.js", "Nodejs Builtin Test runner"],
  },
  {
    title: "Store Backend",
    description:
      "A project made for udacity nano degree, I created a store backend with a custom validation schema parser.",
    image: "/nodejs.png",
    github: "https://github.com/MinaSameh1/Storefront_Backend.git",
    tech: ["TypeScript", "Node.js", "PostgreSQL", "db-migrate", "Jasmine"],
  },
  {
    title: "Information Tracker backend",
    description:
      "A backend for tracking information using Node.js and Express, with permission management and JWT authentication.",
    image: "/nodejs.png",
    github: "https://github.com/MinaSameh1/info-tracker-backend.git",
    tech: ["Typescript", "Node.js", "Express", "Zod", "MongoDB"],
  },
];

export const SKILLS = [
  {
    name: "Node.js",
    category: "Backend",
  },
  {
    name: "Python",
    category: "Automation",
  },
  {
    name: "JavaScript",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    category: "Backend",
  },
  {
    name: "Tailwind",
    category: "Frontend",
  },
  {
    name: "PostgreSQL",
    category: "Database",
  },
  {
    name: "MongoDB",
    category: "Database",
  },
  {
    name: "Redis",
    category: "Caching",
  },
  {
    name: "Docker",
    category: "DevOps",
  },
  {
    name: "Kubernetes",
    category: "DevOps",
  },
  {
    name: "CI/CD",
    category: "DevOps",
  },
  {
    name: "Google Cloud",
    category: "Cloud",
  },
  {
    name: "Cloudflare (DNS)",
    category: "Cloud",
  },
  {
    name: "Git",
    category: "DevTools",
  },
  {
    name: "OpenAI API",
    category: "AI",
  },
];

export const BLOG = {
  disabled: false,
  postsPerPage: 6,
  blog: {
    disabled: false,
    postsPerPage: 6,
    list: {
      disabled: false,
      pathname: "blog",
    },
    post: {
      disabled: false,
      permalink: "/blog/%slug%",
    },
    category: {
      disabled: false,
      pathname: "category",
    },
    tag: {
      disabled: false,
      pathname: "tag",
    },
  },
};

export const SEO = {
  disabled: false,
  title: METADATA.title,
  titleTemplate: METADATA.titleTemplate,
  description: METADATA.description,
  site: SITE.site,
  canonical: METADATA.canonical,
  openGraph: {
    basic: {
      disabled: false,
      type: METADATA.openGraph.type,
      image: METADATA.openGraph.images[0].path,
    },
    optional: {
      disabled: false,
      imageWidth: METADATA.openGraph.images[0].width,
      imageHeight: METADATA.openGraph.images[0].height,
      siteName: METADATA.openGraph.siteName,
    },
  },
  // twitter: {
  //   disabled: false,
  //   handle: METADATA.twitter.handle,
  //   site: METADATA.twitter.site,
  // },
  robots: {
    disabled: false,
    noIndex: METADATA.robots.index,
    noFollow: METADATA.robots.follow,
    googleBot: METADATA.robots.googleBot,
  },
};

export const CONFIG = {
  name: SITE.name,
  site: SITE.site,
  base: SITE.base,
  trailingSlash: SITE.trailingSlash,
  title: METADATA.title,
  titleTemplate: METADATA.titleTemplate,
  description: METADATA.description,
  image: METADATA.openGraph.images[0].path,
  type: METADATA.openGraph.type,
  robots: METADATA.robots,
  openGraph: METADATA.openGraph,
  // twitter: METADATA.twitter,
  verification: METADATA.verification,
  links: LINKS,
  socials: SOCIALS,
  projects: PROJECTS,
  skills: SKILLS,
  blog: BLOG,
  seo: SEO,
} as Config;
