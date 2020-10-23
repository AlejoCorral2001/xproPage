const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async({graphql, actions})=>{
    const {createPage} = actions
    const result = await graphql(`
    query{
    allContentfulCncMachine {
        edges {
            node{
                title
            }
       
        }
      }
    }
    `)
    result.data.allContentfulCncMachine.edges.forEach(({node})=>{
        createPage({
            path: '/'+(node.title),
            component: path.resolve(`./src/templates/template.js`),
            context: {
                title : (node.title),
            }
        })
    }

    )
}