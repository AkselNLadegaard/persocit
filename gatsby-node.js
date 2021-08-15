const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
	// Destructure the createPage function from the actions object
	const { createPage } = actions

	const blogPostQuery = await graphql(`
		query {
			allMdx(filter: { frontmatter: { category: { eq: "blogPost" } } }) {
				edges {
					node {
						id
						slug
					}
				}
			}
		}
	`)

	if (blogPostQuery.errors) {
		reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
	}

	// Create blog post pages.
	const blogPosts = blogPostQuery.data.allMdx.edges

	blogPosts.forEach(({ node }, index) => {
		createPage({
			path: `blog/${node.slug}`,
			component: path.resolve(`./src/templates/blogPost.js`),
			// You can use the values in this context in
			// our page layout component
			context: { id: node.id },
		})
	})
}
