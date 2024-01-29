const path = require('path')
const slugify = require('slugify')
exports.createPages = async ({ graphql, actions, reporter }) => {
    // Destructure the createPage function from the actions object
    const { createPage } = actions
    const postTemplate = path.resolve(`./src/templates/blogPost.js`)
    const blogPostQuery = await graphql(`
        query {
            allMdx {
                nodes {
                    id
                    frontmatter {
                        title
                        theme
                    }
                    internal {
                        contentFilePath
                    }
                }
            }
        }
    `)


    if (blogPostQuery.errors) {
        reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
    }

    // Create blog post pages.
    const blogPostsAll = blogPostQuery.data.allMdx.nodes

    blogPostsAll.forEach(node => {
        createPage({
            path: `blog/${slugify(node.frontmatter.title)}`,
            component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
            //node.internal.contentFilePath,

            context: { id: node.id },
        })
    })

}
