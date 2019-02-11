import bcrypt from 'bcryptjs'

const Generators = {
    hashPassword (password) {
        if (password.length < 8) {
            throw new Error("Password must atend the required criteria")
        }

        return bcrypt.hash(password, 12)
    },
    generateValidationCode (digits) {
        let string = ""
        for(var i = 1; i <= digits; i++) {
            string += Math.floor(Math.random() * 10)
        }

        return string
    }
}

export { Generators as default } 