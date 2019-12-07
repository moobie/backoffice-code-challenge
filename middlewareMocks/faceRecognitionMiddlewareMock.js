const InMemoryDb = require('../repository/InMemoryDb')
const eventEmitter = require('../events/eventEmmiter')

const faceRecognitionDb = new InMemoryDb({
    'https://image-service.moobie.com.br/b539b7b0-5929-11e8-a5bb-4523f1372346-https://image-service.moobie.com.br/25214e10-0f88-11ea-b9da-c9796c4a2a9d':{

    },
    'https://image-service.moobie.com.br/8b2fec40-272f-11e8-af10-53938bb7d0b9-https://image-service.moobie.com.br/20d5abe0-25e6-11e8-af10-53938bb7d0b9':{

    },
    'https://image-service.moobie.com.br/17207860-0a9c-11e8-9911-0bf5eeb5f98a-https://image-service.moobie.com.br/646b35e0-885b-11e9-8840-b3d46d9faffd':{

    },
    'https://image-service.moobie.com.br/fbc6c120-2ac9-11e8-af10-53938bb7d0b9-https://image-service.moobie.com.br/a4614310-2b91-11e8-af10-53938bb7d0b9':{

    }
})

module.exports = ({userId, profilePicture, cnhProfilePicture}) => faceRecognitionDb.get(`${profilePicture}-${cnhProfilePicture}`)
    .then(faceRecognition => eventEmitter.emit('faceRecognition', {userId, profilePicture, cnhProfilePicture, ...faceRecognition}))