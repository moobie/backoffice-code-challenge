const eventEmitter = require('../eventEmmiter')

const newUserListener = require('./newUserListener')
const cnhOcrListener = require('./cnhOcrListener')
const cnhRestrictionsListener = require('./cnhRestrictionsListener')
const faceRecognitionListener = require('./faceRecognitionListener')

eventEmitter.on('newUser', newUserListener)
eventEmitter.on('cnhOcr', cnhOcrListener)
eventEmitter.on('cnhRestrictions', cnhRestrictionsListener)
eventEmitter.on('faceRecognition', faceRecognitionListener)
eventEmitter.on('userApproved', ({userId}) => console.log(`User ${userId} APPROVED!`))
eventEmitter.on('userRejected', ({userId, rejectReason}) => console.log(`User ${userId} REJECTED due to ${rejectReason}!`))