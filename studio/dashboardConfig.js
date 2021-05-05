export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '6091f873f930bf19db4319b3',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-2-studio-okwdnyjh',
                  apiId: '6b222256-2664-4dda-895c-3b9252bb5057'
                },
                {
                  buildHookId: '6091f87330468a160783ca11',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-2-web-k4gxy8v2',
                  apiId: 'd0b333c9-704c-4092-978e-4ed32002099d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/maxwell108/sanity-eleventy-blog2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-2-web-k4gxy8v2.netlify.app', category: 'apps'}
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
