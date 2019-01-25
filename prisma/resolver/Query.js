const { getUserId } = require('../utils')


function users(root, args, context) {
    return context.prisma.users();
}
function checkLogin(root, args, context) {
    const userId = getUserId(context);
    return "Your Are Authentified : " + userId
}

module.exports = {
    users,
    checkLogin,
}
