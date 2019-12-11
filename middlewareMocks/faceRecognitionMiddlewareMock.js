const InMemoryDb = require('../repository/InMemoryDb')
const eventEmitter = require('../events/eventEmmiter')

const faceRecognitionDb = new InMemoryDb({ 
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00000-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00000':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00001-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00001':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00002-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00002':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00003-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00003':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00004-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00004':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00005-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00005':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00006-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00006':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00007-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00007':
{ picturesMatch: false },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00008-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00008':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00009-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00009':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00010-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00010':
{ picturesMatch: false },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00011-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00011':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00012-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00012':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00013-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00013':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00014-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00014':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00015-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00015':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00016-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00016':
{ picturesMatch: false },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00017-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00017':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00018-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00018':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00019-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00019':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00020-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00020':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00021-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00021':
{ picturesMatch: false },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00022-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00022':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00023-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00023':
{ picturesMatch: false },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00024-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00024':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00025-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00025':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00026-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00026':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00027-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00027':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00028-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00028':
{ picturesMatch: false },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00029-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00029':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00030-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00030':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00031-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00031':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00032-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00032':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00033-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00033':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00034-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00034':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00035-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00035':
{ picturesMatch: false },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00036-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00036':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00037-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00037':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00038-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00038':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00039-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00039':
{ picturesMatch: false },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00040-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00040':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00041-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00041':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00042-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00042':
{ picturesMatch: false },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00043-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00043':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00044-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00044':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00045-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00045':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00046-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00046':
{ picturesMatch: false },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00047-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00047':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00048-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00048':
{ picturesMatch: false },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00049-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00049':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00050-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00050':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00051-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00051':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00052-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00052':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00053-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00053':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00054-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00054':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00055-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00055':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00056-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00056':
{ picturesMatch: false },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00057-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00057':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00058-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00058':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00059-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00059':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00060-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00060':
{ picturesMatch: false },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00061-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00061':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00062-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00062':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00063-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00063':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00064-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00064':
{ picturesMatch: false },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00065-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00065':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00066-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00066':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00067-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00067':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00068-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00068':
{ picturesMatch: false },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00069-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00069':
{ picturesMatch: false },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00070-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00070':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00071-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00071':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00072-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00072':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00073-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00073':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00074-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00074':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00075-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00075':
{ picturesMatch: false },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00076-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00076':
{ picturesMatch: false },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00077-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00077':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00078-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00078':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00079-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00079':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00080-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00080':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00081-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00081':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00082-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00082':
{ picturesMatch: false },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00083-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00083':
{ picturesMatch: false },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00084-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00084':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00085-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00085':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00086-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00086':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00087-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00087':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00088-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00088':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00089-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00089':
{ picturesMatch: false },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00090-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00090':
{ picturesMatch: false },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00091-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00091':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00092-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00092':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00093-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00093':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00094-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00094':
{ picturesMatch: false },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00095-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00095':
{ picturesMatch: false },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00096-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00096':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00097-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00097':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00098-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00098':
{ picturesMatch: true },
'https://image-service.moobie.com.br/api/v1/images/profilePicture-00099-https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00099':
{ picturesMatch: true } }
)

module.exports = ({userId, profilePictureUrl, cnhProfilePictureUrl} = {}) => faceRecognitionDb.get(`${profilePictureUrl}-${cnhProfilePictureUrl}`)
    .then((faceRecognition = {picturesMatch: false}) => eventEmitter.emit('faceRecognition', {userId, profilePictureUrl, cnhProfilePictureUrl, picturesMatch: faceRecognition.picturesMatch}))