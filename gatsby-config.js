module.exports = {
	siteMetadata: {
		siteUrl: 'https://persocitmain.gatsbyjs.io/',
		title: 'Persocite',
		author: 'Aksel',
		description:
			'Personal site for learning, having fun and possible a CV and portfolio in the future!',
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
		'gatsby-plugin-mdx',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							// It's important to specify the maxWidth (in pixels) of
							// the content container as this plugin uses this as the
							// base for generating different widths of each image.
							maxWidth: 590,
						},
					},
					`gatsby-remark-autolink-headers`,
				],
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
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
