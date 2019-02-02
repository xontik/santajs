const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')

async function signup(parent, args, context, info) {

    const password = await bcrypt.hash(args.password, 10)
    /**@TODO check existing email on create  */
    console.log(args)
    let existingUser = await context.prisma.user({pseudo: 'xontik'})
    if (existingUser) {
        throw Error('pseudo')
    }
    existingUser = await context.prisma.user({email: args.email})
    if (existingUser) {
        throw Error('mail')
    }
    const user = await context.prisma.createUser({ ...args, password })

    const token = jwt.sign({ userId: user.id }, APP_SECRET)

    /**@TODO mail confirmation system return string instead of AuhtPayload */
    return {
        token,
        user,
    }

}

async function login(parent, args, context, info) {
    const user = await context.prisma.user({email: args.email })

    if (!user) {
        throw new Error('No such user found')
    }

    const valid = await bcrypt.compare(args.password, user.password)
    if (!valid) {
        throw new Error('Invalid password')
    }

    const token = jwt.sign({ userId: user.id }, APP_SECRET)

    return {
        token,
        user,
    }
}

module.exports = {
    signup,
    login,
}
