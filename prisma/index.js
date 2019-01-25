const { prisma } = require('./generated/prisma-client')
const { GraphQLServer } = require('graphql-yoga')
const Query = require('./resolver/Query')
const Mutation = require('./resolver/Mutation')
const resolvers = {
    Query,
    Mutation
}

const server = new GraphQLServer({
    typeDefs: './schema.graphql',
    resolvers,
    context: request => {
        return {
            ...request,
            prisma,
        }
    },
})
server.start({playground: '/playground'},() => console.log('Server is running on http://api.santajs.test'))
