const { getUserId } = require('../utils')

function users(root, args, context) {
    return context.prisma.users();
}
function checkLogin(root, args, context) {
    const userId = getUserId(context);
    return "Your Are Authentified : " + userId
}
function hello(root, args, context) {
    return "Hello : " + args.name
}

function emailExist(root, args, context) {
    return context.prisma.$exists.user({email: args.email})
}

function pseudoExist(root, args, context) {
    return context.prisma.$exists.user({pseudo: args.pseudo})
}
module.exports = {
    users,
    checkLogin,
    pseudoExist,
    emailExist,
    hello,
}
