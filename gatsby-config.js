module.exports = {
    siteMetadata: {
        siteUrl:     'https://persocitmain.gatsbyjs.io/',
        title:       'Aksels personal site ==> perso-cite ==> persocit',
        author:      'Aksel Nordvig Ladegaard',
        description: 'A little personal site for playing with the frontend!',
    },
    plugins:      [
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
        'gatsby-plugin-gatsby-cloud',
        'gatsby-plugin-image',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',

        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/icon.png',
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth:     1200,
                            quality:      75,
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                defaults: {
                    formats:          [`auto`, `webp`],
                    placeholder:      `dominantColor`,
                    quality:          1,
                    breakpoints:      [750, 1080, 1366, 1920],
                    backgroundColor:  `transparent`,
                    tracedSVGOptions: {},
                    blurredOptions:   {},
                    jpgOptions:       {},
                    pngOptions:       {},
                    webpOptions:      {},
                    avifOptions:      {},
                }
            }
        },
        'gatsby-transformer-sharp',
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
            __key:   'pages',
        },
    ],
}
