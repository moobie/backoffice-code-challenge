module.exports = class CnhRestrictions {
    constructor ({userId, cnhNumber, score, hasRestriction}) {
        this.userId = String(userId)
        this.cnhNumber = String(cnhNumber)
        this.score = String(score)
        this.hasRestriction = Boolean(hasRestriction)
    }
}