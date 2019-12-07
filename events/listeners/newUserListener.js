const {publishUserRejected} = require('../publishers')
module.exports = (newUser) => {
    publishUserRejected(newUser)
}