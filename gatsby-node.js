const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    // The “graphql” function allows us to run arbitrary
    // queries against the local WordPress graphql schema. Think of
    // it like the site has a built-in database constructed
    // from the fetched data that you can run queries against.

    // ==== PAGES (WORDPRESS NATIVE) ====
    graphql(
      `
        {
          allWordpressPage {
            edges {
              node {
                id
                slug
                status
                template
                title
                content
              }
            }
          }
        }
      `
    )
      .then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create Page pages.
        const pageTemplate = path.resolve("./src/templates/post.js");
        const historyUnderContentTemplate = path.resolve("./src/templates/historyUnderContent.js");
        // We want to create a detailed page for each
        // page node. We'll just use the WordPress Slug for the slug.
        // The Page ID is prefixed with 'PAGE_'
        _.each(result.data.allWordpressPage.edges, edge => {
          // Gatsby uses Redux to manage its internal state.
          // Plugins and sites can use functions like "createPage"
          // to interact with Gatsby.
          createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: `/${edge.node.slug}/`,
            component: slash(edge.node.template === 'history_under_content.php' ? historyUnderContentTemplate : pageTemplate),
            context: edge.node,
          })
        })
      })
      // ==== END PAGES ====

      // ==== BLOG POST ====
      .then(() => {
        graphql(`
          {
            allWordpressPost{
              edges{
                node{
                  wordpress_id
                  title
                  content
                  excerpt
                  date(formatString: "YYYY/MM/DD hh:mm")
                  slug
                  acf{
                    recommend
                  }
                }
              }
            }
          }
        `).then(result => {
          if (result.errors) {
            console.log(result.errors);
            reject(result.errors);
          }
          const posts = result.data.allWordpressPost.edges;
          const postsPerPage = 3;
          const numberOfPages = Math.ceil(posts.length / postsPerPage);
          const blogPostListTemplate = path.resolve('./src/templates/favoritePostList.js');

          Array.from({ length: numberOfPages }).forEach((page, index) => {
            createPage({
              component: slash(blogPostListTemplate),
              path: index === 0 ? '/favorite' : `/favorite/${index + 1}`,
              context: {
                posts: posts.slice(index * postsPerPage, (index * postsPerPage) + postsPerPage),
                numberOfPages,
                currentPage: index + 1
              },
            });
          });

          const postTemplate = path.resolve("./src/templates/post.js");
          _.each(posts, (post)=> {
            createPage({
              path: `/favorite/${post.node.wordpress_id}`,
              component: slash(postTemplate),
              context: post.node,
            });
          });

          resolve();
        });
      });
  });
};
