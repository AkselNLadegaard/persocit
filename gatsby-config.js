const adapter = require("gatsby-adapter-netlify").default



module.exports = {

    adapter: adapter({
        excludeDatastoreFromEngineFunction: false,
        imageCDN: false,
    }),
    siteMetadata: {
        siteUrl: 'https://persocitmain.gatsbyjs.io/',
        title: 'Aksel Nordvigs personal site',
        author: 'Aksel Nordvig ',
        description: 'Where I try to, play with the frontend, link to interesting stuff and someday have a portfolio.',
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /assets/,
                },
            },
        },
        'gatsby-plugin-emotion',
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/abstracts/typography`,
            },
        },
        'gatsby-plugin-sitemap',

        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/icon.png',
            },
        },

        `gatsby-transformer-sharp`,
        'gatsby-plugin-image',
        `gatsby-plugin-sharp`,

        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1200,
                            withWebp: true,
                        },
                    },
                ],
            },
        },

        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images/`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: `blogPosts`,
                path: `${__dirname}/blogPosts`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: './src/pages/',
            },
            __key: 'pages',
        },
    ],


}
