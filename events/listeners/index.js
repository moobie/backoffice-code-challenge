const eventEmitter = require('../eventEmmiter')

const newUserListener = require('./newUserListener')
const cnhOcrListener = require('./cnhOcrListener')
const cnhRestrictionsListener = require('./cnhRestrictionsListener')
const faceRecognitionListener = require('./faceRecognitionListener')

eventEmitter.on('newUser', newUserListener)
eventEmitter.on('cnhOcr', cnhOcrListener)
eventEmitter.on('cnhRestrictions', cnhRestrictionsListener)
eventEmitter.on('faceRecognition', faceRecognitionListener)
eventEmitter.on('userApproved', (user) => console.log(`User APPROVED!`, JSON.stringify(user)))
eventEmitter.on('userRejected', (user) => console.log(`User REJECTED!`, JSON.stringify(user)))