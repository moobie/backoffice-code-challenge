module.exports = class FaceRecognition {
    constructor ({userId, profilePictureUrl, cnhProfilePictureUrl, picturesMatch}) {
        this.userId = String(userId)
        this.profilePictureUrl = String(profilePictureUrl)
        this.cnhProfilePictureUrl = String(cnhProfilePictureUrl)
        this.picturesMatch = Boolean(picturesMatch)
    }
}