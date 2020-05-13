export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5ebb84467a239b0d554cd4a7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-124tkmvi',
                  apiId: '79a4429d-6730-48a2-8ac9-0f393db12b64'
                },
                {
                  buildHookId: '5ebb8467873ac0effcd067dc',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-e78476sq',
                  apiId: '3d4d18d7-4367-4706-873a-39976ff5ce04'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/choephix/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-e78476sq.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
