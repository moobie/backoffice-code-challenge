module.exports = class InMemoryDb {
    constructor (db = {}) {
        this.create = async (id, object) => db[id] = {id, ...object}
        this.remove = async (id) => delete db[id]
        this.update = async (id, update) => db[id] = {id, ...db[id], ...update}
        this.get = async (id) => db[id]
    }
}