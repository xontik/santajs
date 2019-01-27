
function lists(root, args, context) {
    return context.prisma.user({id : root.id}).lists();
}

function events(root, args, context) {
    return context.prisma.user({id : root.id}).events();
}

function gifteds(root, args, context) {
    return context.prisma.user({id : root.id}).gifters();
}


module.exports = {
    lists,
    events,
    gifteds
}
