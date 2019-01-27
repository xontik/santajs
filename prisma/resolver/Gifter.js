function list(root, args, context) {
    return context.prisma.gifter({id : root.id}).list();
}
function user(root, args, context) {
    return context.prisma.gifter({id : root.id}).user();
}
function gift(root, args, context) {
    return context.prisma.gifter({id : root.id}).gift();
}

module.exports = {
    list,
    user,
    gift
}
