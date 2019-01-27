function creator(root, args, context) {
    return context.prisma.event({id : root.id}).creator();
}

function eventLists(root, args, context) {
    console.log(context.prisma.event({id : root.id}))
    return context.prisma.event({id : root.id}).eventLists();
}
module.exports = {
    creator,
    eventLists
}
