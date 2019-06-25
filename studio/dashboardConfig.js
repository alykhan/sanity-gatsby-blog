export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d11d0a48c58a48072c91529',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-v7zp9vjf',
                  apiId: 'd28f020b-5ed2-4de2-ad9a-27da5b709b14'
                },
                {
                  buildHookId: '5d11d0a4b453bf2fab60ba75',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-uygro8gj',
                  apiId: '2bad28e1-a922-4427-a862-d0afcecb9e64'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alykhan/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-uygro8gj.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
