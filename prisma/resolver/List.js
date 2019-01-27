
function owner(root, args, context) {
    return context.prisma.list({id: root.id}).owner();
}
function gifts(root, args, context) {
    return context.prisma.list({id: root.id}).gifts();
}
function events(root, args, context) {
    return context.prisma.list({id: root.id}).events();
}

module.exports = {
    owner,
    gifts,
    events
}
