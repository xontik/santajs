function event(root, args, context) {
    return context.prisma.eventList({id : root.id}).event();
}

function user(root, args, context) {
    return context.prisma.eventList({id : root.id}).user();
}
function list(root, args, context) {
    return context.prisma.eventList({id : root.id}).list();
}

module.exports = {
    event,
    user,
    list
}
