const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')
const { createError } = require('apollo-errors');

const EmailAlreadyExistError = createError("EmailAlreadyExistError", {
    message: "This email already exist in the database"
});

const PseudoAlreadyExistError = createError("PseudoAlreadyExistError", {
    message: "This email already exist in the database"
});

async function signup(parent, args, context, info) {

    const password = await bcrypt.hash(args.password, 10)

    let existingUser = await context.prisma.$exists.user({pseudo: args.pseudo})
    if (existingUser && args.pseudo) {
        throw new PseudoAlreadyExistError()
    }
    existingUser = await context.prisma.$exists.user({email: args.email})
    if (existingUser) {
        throw new EmailAlreadyExistError()
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
