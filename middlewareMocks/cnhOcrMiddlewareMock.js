const InMemoryDb = require('../repository/InMemoryDb')
const eventEmitter = require('../events/eventEmmiter')

const cnhOcrDb = new InMemoryDb({
    'https://image-service.moobie.com.br/695f97d0-29fc-11e8-af10-53938bb7d0b9': {
        cnhFullName: '',
        cnhCpf: '',
        cnhNumber: '00000000010', 
        cnhExpiryDate: '2019-12-06T20:36:48.885Z', 
        cnhProfilePictureUrl: 'https://image-service.moobie.com.br/25214e10-0f88-11ea-b9da-c9796c4a2a9d'
    },
    'https://image-service.moobie.com.br/ae30f2f0-aa71-11e8-b15d-5b17193ce78c': {
        cnhFullName: '',
        cnhCpf: '',    
        cnhNumber: '00000000020', 
        cnhExpiryDate: '2019-12-06T20:36:48.885Z', 
        cnhProfilePictureUrl: 'https://image-service.moobie.com.br/20d5abe0-25e6-11e8-af10-53938bb7d0b9'
    },
    'https://image-service.moobie.com.br/1b12e750-272f-11e8-af10-53938bb7d0b9': {
        cnhFullName: '',
        cnhCpf: '',
        cnhNumber: '00000000030', 
        cnhExpiryDate: '2019-12-06T20:36:48.885Z', 
        cnhProfilePictureUrl: 'https://image-service.moobie.com.br/646b35e0-885b-11e9-8840-b3d46d9faffd'
    },
    'https://image-service.moobie.com.br/c09d9900-2779-11e8-af10-53938bb7d0b9': {
        cnhFullName: '',
        cnhCpf: '',
        cnhNumber: '00000000040', 
        cnhExpiryDate: '2019-12-06T20:36:48.885Z', 
        cnhProfilePictureUrl: 'https://image-service.moobie.com.br/a4614310-2b91-11e8-af10-53938bb7d0b9'
    }
})

module.exports = ({userId, cnhPictureUrl}) => cnhOcrDb.get(cnhPictureUrl)
    .then(cnhOcr => eventEmitter.emit('cnhOcr', {userId, cnhPictureUrl, ...cnhOcr})) 