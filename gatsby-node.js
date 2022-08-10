const path = require('path')
const slugify = require('slugify')
exports.createPages = async ({graphql, actions, reporter}) => {
    // Destructure the createPage function from the actions object
    const {createPage} = actions

    const blogPostQueryAksel = await graphql(`
		query {
			allMdx(filter: { frontmatter: { type: { eq: "blogPostAksel" } } }) {
				edges {
					node {
						id
						frontmatter {
							title
						}
					}
				}
			}
		}
	`)

    if (blogPostQueryAksel.errors) {
        reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
    }

    // Create blog post pages.
    const blogPostsAksel = blogPostQueryAksel.data.allMdx.edges

    blogPostsAksel.forEach(({node}, index) => {
        createPage({
                       path:      `blog/${slugify(node.frontmatter.title)}`,
                       component: path.resolve(`./src/templates/blogPost.js`),
                       // You can use the values in this context in
                       // our page layout component
                       context: {id: node.id},
                   })
    })

    const blogPostQueryKlima = await graphql(`
		query {
			allMdx(filter: { frontmatter: { type: { eq: "blogPostKlima" } } }) {
				edges {
					node {
						id
						slug
						frontmatter {
							title
						}
					}
				}
			}
		}
	`)

    if (blogPostQueryKlima.errors) {
        reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
    }

    // Create blog post pages.
    const blogPostsKlima = blogPostQueryKlima.data.allMdx.edges

    blogPostsKlima.forEach(({node}, index) => {
        createPage({
                       path:      `klimaStrikkeKlub/blog/${slugify(node.frontmatter.title)}`,
                       component: path.resolve(`./src/templates/blogPost.js`),
                       // You can use the values in this context in
                       // our page layout component
                       context: {id: node.id},
                   })
    })
}
