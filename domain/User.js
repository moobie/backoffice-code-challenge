module.exports = class User {
    constructor ({userId, fullName, cpf, profilePictureUrl, cnhPictureUrl}) {
        this.userId = String(userId)
        this.fullName = String(fullName)
        this.cpf = String(cpf)
        this.profilePictureUrl = String(profilePictureUrl)
        this.cnhPictureUrl = String(cnhPictureUrl)
    }
}