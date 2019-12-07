const eventEmitter = require('../events/eventEmmiter')

const cnhOcrMiddleware = require('./cnhOcrMiddlewareMock')
const cnhRestrictionsMiddleware = require('./cnhRestrictionsMiddlewareMock')
const faceRecognitionMiddleware = require('./faceRecognitionMiddlewareMock')

eventEmitter.on('requestCnhOcr', cnhOcrMiddleware)
eventEmitter.on('requestCnhRestrictions', cnhRestrictionsMiddleware)
eventEmitter.on('requestFaceRecognition', faceRecognitionMiddleware)