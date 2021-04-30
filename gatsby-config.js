// In your gatsby-config.js
module.exports = {
  siteMetadata: {
    title: `Portfolio Website James Hernandez`,
    description: `Portfolio and contact information website for freelance front-end jobs and opportunities.`,
    author: `James A. Hernandez`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        useResolveUrlLoader: {
          options: {
            debug: true,
            sourceMap: true,
          },
        },
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: ['G-VFZEZQXCGB'],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Open Sans`,
          `Open Sans Condensed`,
          `Barlow Condensed`,
          `Nothing You Could Do`,
          `Permanent Marker`,
        ],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-prettier-eslint',
      options: {
        prettier: {
          patterns: [
            // the pattern "**/*.{js,jsx,ts,tsx}" is not used because we will rely on `eslint --fix`
            '**/*.{css,scss,less}',
            '**/*.{json,json5}',
            '**/*.{graphql}',
            '**/*.{md,mdx}',
            '**/*.{html}',
            '**/*.{yaml,yml}',
          ],
        },
        eslint: {
          patterns: '**/*.{js,jsx,ts,tsx}',
          customOptions: {
            fix: true,
            cache: true,
          },
        },
      },
    },
  ],
}
