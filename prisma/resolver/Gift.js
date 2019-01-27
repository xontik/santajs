function lists(root, args, context) {
    return context.prisma.gift({id : root.id}).lists();
}

function gifters(root, args, context) {
    return context.prisma.gift({id : root.id}).gifters();
}

module.exports = {
    lists,
    gifters
}
