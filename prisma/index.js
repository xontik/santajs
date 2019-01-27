const { prisma } = require('./generated/prisma-client')
const { GraphQLServer } = require('graphql-yoga')
const Query = require('./resolver/Query')
const Event = require('./resolver/Event')
const EventList = require('./resolver/EventList')
const Gift = require('./resolver/Gift')
const Gifter = require('./resolver/Gifter')
const List = require('./resolver/List')
const User = require('./resolver/User')
const Mutation = require('./resolver/Mutation')
const resolvers = {
    Query,
    Event,
    EventList,
    Gift,
    Gifter,
    List,
    User,
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
