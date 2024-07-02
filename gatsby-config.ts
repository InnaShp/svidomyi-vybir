import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `SvidomyiVybir`,
    siteUrl: `https://www.yourdomain.tld`
  },

  graphqlTypegen: true,
  plugins: ["gatsby-plugin-sass"]
};

export default config;
