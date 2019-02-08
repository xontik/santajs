const jwt = require('jsonwebtoken')
const APP_SECRET = 'jaimefannyencoreplus'


function getUserId(context) {
    const Authorization = context.request.get('Authorization')
    if (Authorization) {
        const token = Authorization.replace('Bearer ', '')
        const { userId } = jwt.verify(token, APP_SECRET)
        return userId
    }

    throw new Error('Not authenticated')
}

function getAuthPayload(user) {
    const token = jwt.sign({ userId: user.id }, APP_SECRET)

    return {
        token,
        user,
    }
}

module.exports = {
    APP_SECRET,
    getUserId,
    getAuthPayload
}
