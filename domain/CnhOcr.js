module.exports = class CnhOcr {
    constructor ({userId, cnhFullName, cnhCpf, cnhPictureUrl, cnhNumber, cnhExpiryDate, cnhProfilePictureUrl}) {
        this.userId = String(userId)
        this.cnhFullName = String(cnhFullName)
        this.cnhCpf = String(cnhCpf)
        this.cnhPictureUrl = String(cnhPictureUrl)
        this.cnhNumber = String(cnhNumber)
        this.cnhExpiryDate = new Date(cnhExpiryDate)
        this.cnhProfilePictureUrl = String(cnhProfilePictureUrl)
    }
}