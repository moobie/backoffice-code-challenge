const InMemoryDb = require('../repository/InMemoryDb')
const eventEmitter = require('../events/eventEmmiter')

const cnhRestrictionsDb = new InMemoryDb({
    '00000000010': {
        score: '20', 
        hasRestriction: true
    },
    '00000000020': {
        score: '14', 
        hasRestriction: false
    },
    '00000000030': {
        score: '0', 
        hasRestriction: false
    },
    '00000000040': {
        score: '40', 
        hasRestriction: true
    }
})


module.exports = ({userId, cnhNumber}) => cnhRestrictionsDb.get(cnhNumber)
    .then(cnhRestriction => eventEmitter.emit('cnhRestrictions', {userId, cnhNumber, ...cnhRestriction}))
