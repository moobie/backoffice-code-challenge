const eventEmmiter = require('../eventEmmiter')

module.exports.publishNewUser = (user) => eventEmmiter.emit('newUser', user)
module.exports.publishRequestCnhOcr = ({userId, cnhPictureUrl}) => eventEmmiter.emit('requestCnhOcr', {userId, cnhPictureUrl})
module.exports.publishRequestCnhRestrictions = ({userId, cnhNumber}) => eventEmmiter.emit('requestCnhRestrictions', {userId, cnhNumber})
module.exports.publishRequestFaceRecognition = ({userId, profilePictureUrl, cnhProfilePictureUrl}) => eventEmmiter.emit('requestFaceRecognition', {userId, profilePictureUrl, cnhProfilePictureUrl})
module.exports.publishUserApproved = (user) => eventEmmiter.emit('userApproved', user)
module.exports.publishUserRejected = (user, rejectReason = 'SCORE') => eventEmmiter.emit('userRejected', {...user, rejectReason})
