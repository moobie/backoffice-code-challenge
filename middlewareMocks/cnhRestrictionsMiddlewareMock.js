const InMemoryDb = require('../repository/InMemoryDb')
const eventEmitter = require('../events/eventEmmiter')

const cnhRestrictionsDb = new InMemoryDb( {
    '000000000000':
    { score: '10',
    hasRestriction: false },
    '000000000001':
    { score: '29',
    hasRestriction: false },
    '000000000002':
    { score: '14',
    hasRestriction: true },
    '000000000003':
    { score: '15',
    hasRestriction: false },
    '000000000004':
    { score: '29',
    hasRestriction: true },
    '000000000005':
    { score: '5',
    hasRestriction: false },
    '000000000006':
    { score: '14',
    hasRestriction: false },
    '000000000007':
    { score: '6',
    hasRestriction: false },
    '000000000008':
    { score: '29',
    hasRestriction: false },
    '000000000009':
    { score: '16',
    hasRestriction: true },
    '000000000010':
    { score: '6',
    hasRestriction: false },
    '000000000011':
    { score: '14',
    hasRestriction: false },
    '000000000012':
    { score: '29',
    hasRestriction: false },
    '000000000013':
    { score: '25',
    hasRestriction: false },
    '000000000014':
    { score: '12',
    hasRestriction: false },
    '000000000015':
    { score: '15',
    hasRestriction: false },
    '000000000016':
    { score: '26',
    hasRestriction: false },
    '000000000017':
    { score: '5',
    hasRestriction: false },
    '000000000018':
    { score: '16',
    hasRestriction: false },
    '000000000019':
    { score: '13',
    hasRestriction: false },
    '000000000020':
    { score: '0',
    hasRestriction: false },
    '000000000021':
    { score: '17',
    hasRestriction: false },
    '000000000022':
    { score: '4',
    hasRestriction: false },
    '000000000023':
    { score: '5',
    hasRestriction: false },
    '000000000024':
    { score: '24',
    hasRestriction: true },
    '000000000025':
    { score: '21',
    hasRestriction: false },
    '000000000026':
    { score: '4',
    hasRestriction: false },
    '000000000027':
    { score: '26',
    hasRestriction: false },
    '000000000028':
    { score: '19',
    hasRestriction: false },
    '000000000029':
    { score: '18',
    hasRestriction: false },
    '000000000030':
    { score: '11',
    hasRestriction: true },
    '000000000031':
    { score: '6',
    hasRestriction: false },
    '000000000032':
    { score: '6',
    hasRestriction: false },
    '000000000033':
    { score: '14',
    hasRestriction: true },
    '000000000034':
    { score: '13',
    hasRestriction: false },
    '000000000035':
    { score: '26',
    hasRestriction: false },
    '000000000036':
    { score: '10',
    hasRestriction: true },
    '000000000037':
    { score: '6',
    hasRestriction: false },
    '000000000038':
    { score: '28',
    hasRestriction: true },
    '000000000039':
    { score: '9',
    hasRestriction: false },
    '000000000040':
    { score: '15',
    hasRestriction: false },
    '000000000041':
    { score: '5',
    hasRestriction: true },
    '000000000042':
    { score: '13',
    hasRestriction: false },
    '000000000043':
    { score: '2',
    hasRestriction: false },
    '000000000044':
    { score: '26',
    hasRestriction: false },
    '000000000045':
    { score: '17',
    hasRestriction: true },
    '000000000046':
    { score: '9',
    hasRestriction: false },
    '000000000047':
    { score: '23',
    hasRestriction: false },
    '000000000048':
    { score: '20',
    hasRestriction: false },
    '000000000049':
    { score: '8',
    hasRestriction: true },
    '000000000050':
    { score: '3',
    hasRestriction: false },
    '000000000051':
    { score: '27',
    hasRestriction: false },
    '000000000052':
    { score: '5',
    hasRestriction: false },
    '000000000053':
    { score: '25',
    hasRestriction: false },
    '000000000054':
    { score: '20',
    hasRestriction: true },
    '000000000055':
    { score: '4',
    hasRestriction: false },
    '000000000056':
    { score: '25',
    hasRestriction: false },
    '000000000057':
    { score: '27',
    hasRestriction: false },
    '000000000058':
    { score: '29',
    hasRestriction: false },
    '000000000059':
    { score: '20',
    hasRestriction: false },
    '000000000060':
    { score: '5',
    hasRestriction: false },
    '000000000061':
    { score: '20',
    hasRestriction: false },
    '000000000062':
    { score: '2',
    hasRestriction: false },
    '000000000063':
    { score: '12',
    hasRestriction: true },
    '000000000064':
    { score: '7',
    hasRestriction: false },
    '000000000065':
    { score: '21',
    hasRestriction: false },
    '000000000066':
    { score: '20',
    hasRestriction: true },
    '000000000067':
    { score: '24',
    hasRestriction: false },
    '000000000068':
    { score: '16',
    hasRestriction: false },
    '000000000069':
    { score: '24',
    hasRestriction: false },
    '000000000070':
    { score: '29',
    hasRestriction: true },
    '000000000071':
    { score: '26',
    hasRestriction: false },
    '000000000072':
    { score: '27',
    hasRestriction: false },
    '000000000073':
    { score: '16',
    hasRestriction: true },
    '000000000074':
    { score: '16',
    hasRestriction: false },
    '000000000075':
    { score: '19',
    hasRestriction: false },
    '000000000076':
    { score: '14',
    hasRestriction: false },
    '000000000077':
    { score: '19',
    hasRestriction: false },
    '000000000078':
    { score: '4',
    hasRestriction: false },
    '000000000079':
    { score: '15',
    hasRestriction: false },
    '000000000080':
    { score: '17',
    hasRestriction: false },
    '000000000081':
    { score: '29',
    hasRestriction: false },
    '000000000082':
    { score: '2',
    hasRestriction: false },
    '000000000083':
    { score: '13',
    hasRestriction: false },
    '000000000084':
    { score: '24',
    hasRestriction: false },
    '000000000085':
    { score: '16',
    hasRestriction: true },
    '000000000086':
    { score: '9',
    hasRestriction: false },
    '000000000087':
    { score: '14',
    hasRestriction: false },
    '000000000088':
    { score: '29',
    hasRestriction: false },
    '000000000089':
    { score: '2',
    hasRestriction: true },
    '000000000090':
    { score: '10',
    hasRestriction: true },
    '000000000091':
    { score: '0',
    hasRestriction: false },
    '000000000092':
    { score: '0',
    hasRestriction: true },
    '000000000093':
    { score: '28',
    hasRestriction: false },
    '000000000094':
    { score: '7',
    hasRestriction: false },
    '000000000095':
    { score: '0',
    hasRestriction: false },
    '000000000096':
    { score: '17',
    hasRestriction: false },
    '000000000097':
    { score: '25',
    hasRestriction: false },
    '000000000098':
    { score: '21',
    hasRestriction: false },
    '000000000099':
    { score: '16',
    hasRestriction: false } 
})


module.exports = ({userId, cnhNumber} = {}) => cnhRestrictionsDb.get(cnhNumber)
    .then(cnhRestriction => eventEmitter.emit('cnhRestrictions', {userId, cnhNumber, ...cnhRestriction}))
