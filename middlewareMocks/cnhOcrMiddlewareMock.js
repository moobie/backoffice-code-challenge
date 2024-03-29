const InMemoryDb = require('../repository/InMemoryDb')
const eventEmitter = require('../events/eventEmmiter')

const cnhOcrDb = new InMemoryDb({ 
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00000':
{ cnhFullName: 'Saguas André Renato Oliveira',
  cnhCategory: 'B',
  cnhNumber: '000000000000',
  cnhExpiryDate: '2019-10-06T18:20:34.438Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00000' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00001':
{ cnhFullName: 'Silva Danilo',
  cnhCategory: 'B',
  cnhNumber: '000000000001',
  cnhExpiryDate: '3000-01-01T02:00:00.000Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00001' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00002':
{ cnhFullName: 'Marins Alan Cunha Oliveira',
  cnhCategory: 'B',
  cnhNumber: '000000000002',
  cnhExpiryDate: '2019-11-30T17:48:20.912Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00002' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00003':
{ cnhFullName: 'Cunha Katia Clemer',
  cnhCategory: 'B',
  cnhNumber: '000000000003',
  cnhExpiryDate: '2019-06-29T16:29:49.729Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00003' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00004':
{ cnhFullName: 'Ferreira Lino Naly',
  cnhCategory: 'B',
  cnhNumber: '000000000004',
  cnhExpiryDate: '2019-04-11T10:31:11.094Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00004' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00005':
{ cnhFullName: 'Dias Stonem Apolidorio',
  cnhCategory: 'A',
  cnhNumber: '000000000005',
  cnhExpiryDate: '3000-01-01T02:00:00.000Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00005' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00006':
{ cnhFullName: 'Ismael Brasil',
  cnhCategory: 'B',
  cnhNumber: '000000000006',
  cnhExpiryDate: '2019-08-15T11:51:30.333Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00006' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00007':
{ cnhFullName: 'Josean André Alexandre',
  cnhCategory: 'A',
  cnhNumber: '000000000007',
  cnhExpiryDate: '2019-01-18T21:44:26.182Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00007' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00008':
{ cnhFullName: 'Chagas Thiago Oliveira',
  cnhCategory: 'B',
  cnhNumber: '000000000008',
  cnhExpiryDate: '2019-12-03T12:51:24.947Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00008' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00009':
{ cnhFullName: 'Vinícius Santana Carvalho Bensussam',
  cnhCategory: 'A',
  cnhNumber: '000000000009',
  cnhExpiryDate: '2019-04-11T22:13:01.895Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00009' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00010':
{ cnhFullName: 'Paula Zancheta',
  cnhCategory: 'A',
  cnhNumber: '000000000010',
  cnhExpiryDate: '2019-03-23T08:12:01.734Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00010' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00011':
{ cnhFullName: 'Samuel Wagner',
  cnhCategory: 'B',
  cnhNumber: '000000000011',
  cnhExpiryDate: '2019-08-28T12:33:10.072Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00011' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00012':
{ cnhFullName: 'Padrao De Donizeti',
  cnhCategory: 'A',
  cnhNumber: '000000000012',
  cnhExpiryDate: '2019-03-12T03:02:19.118Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00012' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00013':
{ cnhFullName: 'Wagner Viana Cunha Cristofoli',
  cnhCategory: 'B',
  cnhNumber: '000000000013',
  cnhExpiryDate: '3000-01-01T02:00:00.000Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00013' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00014':
{ cnhFullName: 'Oliveira Almeida',
  cnhCategory: 'A',
  cnhNumber: '000000000014',
  cnhExpiryDate: '2019-12-10T09:14:52.828Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00014' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00015':
{ cnhFullName: 'Arlete Caiado Sergio',
  cnhCategory: 'A',
  cnhNumber: '000000000015',
  cnhExpiryDate: '2019-05-23T10:28:11.909Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00015' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00016':
{ cnhFullName: 'Júnior Rodolfo',
  cnhCategory: 'B',
  cnhNumber: '000000000016',
  cnhExpiryDate: '2019-06-30T23:43:04.385Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00016' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00017':
{ cnhFullName: 'Valença Augusto',
  cnhCategory: 'B',
  cnhNumber: '000000000017',
  cnhExpiryDate: '2019-11-09T21:53:44.152Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00017' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00018':
{ cnhFullName: 'Paula Souza',
  cnhCategory: 'A',
  cnhNumber: '000000000018',
  cnhExpiryDate: '3000-01-01T02:00:00.000Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00018' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00019':
{ cnhFullName: 'Francisco Carvalho Figueiredo Leal',
  cnhCategory: 'B',
  cnhNumber: '000000000019',
  cnhExpiryDate: '2019-05-04T04:02:23.947Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00019' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00020':
{ cnhFullName: 'Souza Da Seródio',
  cnhCategory: 'B',
  cnhNumber: '000000000020',
  cnhExpiryDate: '2019-02-13T18:14:42.823Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00020' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00021':
{ cnhFullName: 'Caldas José',
  cnhCategory: 'A',
  cnhNumber: '000000000021',
  cnhExpiryDate: '2019-05-13T01:49:10.662Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00021' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00022':
{ cnhFullName: 'Donizeti Alves',
  cnhCategory: 'A',
  cnhNumber: '000000000022',
  cnhExpiryDate: '2019-09-13T18:47:42.877Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00022' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00023':
{ cnhFullName: 'Mendes Fischer Ludmila Souza',
  cnhCategory: 'B',
  cnhNumber: '000000000023',
  cnhExpiryDate: '2019-02-11T15:01:48.811Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00023' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00024':
{ cnhFullName: 'Henrique Nádia Campos',
  cnhCategory: 'A',
  cnhNumber: '000000000024',
  cnhExpiryDate: '2019-10-20T20:22:18.568Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00024' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00025':
{ cnhFullName: 'Paula Fischer Antunes',
  cnhCategory: 'B',
  cnhNumber: '000000000025',
  cnhExpiryDate: '3000-01-01T02:00:00.000Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00025' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00026':
{ cnhFullName: 'Augusto Thiago Lourenço Gomes',
  cnhCategory: 'B',
  cnhNumber: '000000000026',
  cnhExpiryDate: '2019-11-12T07:41:30.411Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00026' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00027':
{ cnhFullName: 'Thiago Câmara Anderson',
  cnhCategory: 'B',
  cnhNumber: '000000000027',
  cnhExpiryDate: '2019-11-18T20:06:26.648Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00027' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00028':
{ cnhFullName: 'Christiano Sá',
  cnhCategory: 'B',
  cnhNumber: '000000000028',
  cnhExpiryDate: '2019-04-29T06:56:46.707Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00028' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00029':
{ cnhFullName: 'Donizeti Andre Gustavo',
  cnhCategory: 'B',
  cnhNumber: '000000000029',
  cnhExpiryDate: '2019-11-30T14:52:44.927Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00029' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00030':
{ cnhFullName: 'Kelli Nunes Rodolfo',
  cnhCategory: 'B',
  cnhNumber: '000000000030',
  cnhExpiryDate: '2019-02-18T20:18:45.243Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00030' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00031':
{ cnhFullName: 'Santos Mazzini Diego',
  cnhCategory: 'A',
  cnhNumber: '000000000031',
  cnhExpiryDate: '2019-06-11T14:48:35.276Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00031' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00032':
{ cnhFullName: 'Donizeti Deyvid Costa Renato',
  cnhCategory: 'A',
  cnhNumber: '000000000032',
  cnhExpiryDate: '2019-12-29T11:41:16.314Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00032' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00033':
{ cnhFullName: 'Douglas Mauro Cony Willyson',
  cnhCategory: 'A',
  cnhNumber: '000000000033',
  cnhExpiryDate: '2019-10-26T23:53:27.793Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00033' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00034':
{ cnhFullName: 'Viana Souza',
  cnhCategory: 'B',
  cnhNumber: '000000000034',
  cnhExpiryDate: '2019-03-01T00:54:18.476Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00034' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00035':
{ cnhFullName: 'Wellington Mendes',
  cnhCategory: 'B',
  cnhNumber: '000000000035',
  cnhExpiryDate: '2019-12-04T03:01:13.797Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00035' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00036':
{ cnhFullName: 'Wiilliam Alison',
  cnhCategory: 'B',
  cnhNumber: '000000000036',
  cnhExpiryDate: '2019-06-22T11:18:43.790Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00036' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00037':
{ cnhFullName: 'Souza Mendes Carvalho',
  cnhCategory: 'B',
  cnhNumber: '000000000037',
  cnhExpiryDate: '3000-01-01T02:00:00.000Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00037' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00038':
{ cnhFullName: 'Oliveira Rafael Luck',
  cnhCategory: 'A',
  cnhNumber: '000000000038',
  cnhExpiryDate: '3000-01-01T02:00:00.000Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00038' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00039':
{ cnhFullName: 'Alexandre Pedroso Gomes',
  cnhCategory: 'A',
  cnhNumber: '000000000039',
  cnhExpiryDate: '2019-02-02T07:56:33.906Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00039' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00040':
{ cnhFullName: 'Naly Pedro Camila Fernando',
  cnhCategory: 'A',
  cnhNumber: '000000000040',
  cnhExpiryDate: '3000-01-01T02:00:00.000Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00040' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00041':
{ cnhFullName: 'Augusto Martins Cortes',
  cnhCategory: 'B',
  cnhNumber: '000000000041',
  cnhExpiryDate: '3000-01-01T02:00:00.000Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00041' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00042':
{ cnhFullName: 'Antunes Bruno Anderson',
  cnhCategory: 'A',
  cnhNumber: '000000000042',
  cnhExpiryDate: '2019-12-14T13:02:16.023Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00042' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00043':
{ cnhFullName: 'Campos Giuliani Pedroso',
  cnhCategory: 'A',
  cnhNumber: '000000000043',
  cnhExpiryDate: '2019-10-25T22:44:58.101Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00043' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00044':
{ cnhFullName: 'Weslley Gomes Felipe Caldas',
  cnhCategory: 'A',
  cnhNumber: '000000000044',
  cnhExpiryDate: '3000-01-01T02:00:00.000Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00044' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00045':
{ cnhFullName: 'Diego Arlete Willyson',
  cnhCategory: 'A',
  cnhNumber: '000000000045',
  cnhExpiryDate: '3000-01-01T02:00:00.000Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00045' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00046':
{ cnhFullName: 'Rafael Carvalho Neto',
  cnhCategory: 'B',
  cnhNumber: '000000000046',
  cnhExpiryDate: '3000-01-01T02:00:00.000Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00046' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00047':
{ cnhFullName: 'Silva Ribeiro Dantas Lourenço',
  cnhCategory: 'A',
  cnhNumber: '000000000047',
  cnhExpiryDate: '2019-05-30T10:40:53.919Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00047' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00048':
{ cnhFullName: 'Wagner Alexandre',
  cnhCategory: 'B',
  cnhNumber: '000000000048',
  cnhExpiryDate: '2019-10-16T11:23:57.724Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00048' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00049':
{ cnhFullName: 'Aguilera Naly',
  cnhCategory: 'B',
  cnhNumber: '000000000049',
  cnhExpiryDate: '2019-11-06T07:48:40.125Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00049' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00050':
{ cnhFullName: 'Mazzini Apolidorio',
  cnhCategory: 'B',
  cnhNumber: '000000000050',
  cnhExpiryDate: '2019-12-12T06:40:18.002Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00050' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00051':
{ cnhFullName: 'Vinicius Campos',
  cnhCategory: 'B',
  cnhNumber: '000000000051',
  cnhExpiryDate: '2019-12-05T21:04:55.492Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00051' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00052':
{ cnhFullName: 'Botelho Bensussam',
  cnhCategory: 'B',
  cnhNumber: '000000000052',
  cnhExpiryDate: '2019-04-06T20:17:18.116Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00052' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00053':
{ cnhFullName: 'Mello Francisco Junioss Tertuliano',
  cnhCategory: 'B',
  cnhNumber: '000000000053',
  cnhExpiryDate: '2019-09-23T03:50:23.546Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00053' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00054':
{ cnhFullName: 'Cunha Salvarani Santos',
  cnhCategory: 'B',
  cnhNumber: '000000000054',
  cnhExpiryDate: '3000-01-01T02:00:00.000Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00054' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00055':
{ cnhFullName: 'Sena Clemer Queiroz',
  cnhCategory: 'B',
  cnhNumber: '000000000055',
  cnhExpiryDate: '2019-07-26T16:57:38.780Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00055' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00056':
{ cnhFullName: 'Antunes Costa Torres',
  cnhCategory: 'B',
  cnhNumber: '000000000056',
  cnhExpiryDate: '3000-01-01T02:00:00.000Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00056' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00057':
{ cnhFullName: 'Fernando Pelizer Bensussam',
  cnhCategory: 'A',
  cnhNumber: '000000000057',
  cnhExpiryDate: '2019-09-13T05:02:28.185Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00057' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00058':
{ cnhFullName: 'Christiano Marins Gustavo',
  cnhCategory: 'A',
  cnhNumber: '000000000058',
  cnhExpiryDate: '2019-09-06T03:25:53.185Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00058' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00059':
{ cnhFullName: 'Vilar Paula Santana',
  cnhCategory: 'B',
  cnhNumber: '000000000059',
  cnhExpiryDate: '2019-10-21T05:06:37.028Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00059' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00060':
{ cnhFullName: 'Oliveira Dias',
  cnhCategory: 'A',
  cnhNumber: '000000000060',
  cnhExpiryDate: '3000-01-01T02:00:00.000Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00060' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00061':
{ cnhFullName: 'Brasil Pelizer',
  cnhCategory: 'B',
  cnhNumber: '000000000061',
  cnhExpiryDate: '2019-06-16T13:27:47.175Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00061' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00062':
{ cnhFullName: 'Francisco Vinícius Santos Baptista',
  cnhCategory: 'A',
  cnhNumber: '000000000062',
  cnhExpiryDate: '2019-12-20T23:53:47.116Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00062' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00063':
{ cnhFullName: 'Carlos Gomes',
  cnhCategory: 'B',
  cnhNumber: '000000000063',
  cnhExpiryDate: '2019-01-20T09:01:00.446Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00063' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00064':
{ cnhFullName: 'Galdino Deyvid Jacobsen',
  cnhCategory: 'B',
  cnhNumber: '000000000064',
  cnhExpiryDate: '3000-01-01T02:00:00.000Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00064' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00065':
{ cnhFullName: 'Nunes Luiz Samuel',
  cnhCategory: 'B',
  cnhNumber: '000000000065',
  cnhExpiryDate: '2019-02-14T10:35:42.134Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00065' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00066':
{ cnhFullName: 'Eduardo Carleto Apolidorio',
  cnhCategory: 'B',
  cnhNumber: '000000000066',
  cnhExpiryDate: '2019-05-09T22:28:56.065Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00066' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00067':
{ cnhFullName: 'Thiago Sena',
  cnhCategory: 'B',
  cnhNumber: '000000000067',
  cnhExpiryDate: '3000-01-01T02:00:00.000Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00067' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00068':
{ cnhFullName: 'Bensussam Almeida André Sena',
  cnhCategory: 'B',
  cnhNumber: '000000000068',
  cnhExpiryDate: '2019-09-28T12:37:58.909Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00068' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00069':
{ cnhFullName: 'Renato Mesquita Alex Botelho',
  cnhCategory: 'B',
  cnhNumber: '000000000069',
  cnhExpiryDate: '2019-12-26T14:19:06.306Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00069' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00070':
{ cnhFullName: 'Alex Fernando Samuel',
  cnhCategory: 'B',
  cnhNumber: '000000000070',
  cnhExpiryDate: '2019-09-26T08:46:30.146Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00070' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00071':
{ cnhFullName: 'Willyson Manteigas Renato',
  cnhCategory: 'B',
  cnhNumber: '000000000071',
  cnhExpiryDate: '2019-01-21T12:27:31.878Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00071' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00072':
{ cnhFullName: 'Ávila Tony',
  cnhCategory: 'A',
  cnhNumber: '000000000072',
  cnhExpiryDate: '2019-12-18T00:16:59.815Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00072' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00073':
{ cnhFullName: 'Alex Deyvid',
  cnhCategory: 'B',
  cnhNumber: '000000000073',
  cnhExpiryDate: '3000-01-01T02:00:00.000Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00073' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00074':
{ cnhFullName: 'Botelho Apolidorio',
  cnhCategory: 'A',
  cnhNumber: '000000000074',
  cnhExpiryDate: '2019-09-11T20:19:41.890Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00074' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00075':
{ cnhFullName: 'José Júnior Leandro',
  cnhCategory: 'B',
  cnhNumber: '000000000075',
  cnhExpiryDate: '3000-01-01T02:00:00.000Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00075' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00076':
{ cnhFullName: 'Henrique Renato',
  cnhCategory: 'B',
  cnhNumber: '000000000076',
  cnhExpiryDate: '2019-04-14T16:20:34.919Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00076' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00077':
{ cnhFullName: 'Bruno De Ferreira',
  cnhCategory: 'B',
  cnhNumber: '000000000077',
  cnhExpiryDate: '2019-07-26T11:13:18.856Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00077' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00078':
{ cnhFullName: 'Wallace De Mazzini Irving',
  cnhCategory: 'B',
  cnhNumber: '000000000078',
  cnhExpiryDate: '2019-08-15T01:00:56.311Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00078' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00079':
{ cnhFullName: 'Brasil Giuliani Henrique Paula',
  cnhCategory: 'B',
  cnhNumber: '000000000079',
  cnhExpiryDate: '2019-06-15T02:32:49.369Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00079' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00080':
{ cnhFullName: 'Santana Ribeiro',
  cnhCategory: 'B',
  cnhNumber: '000000000080',
  cnhExpiryDate: '2019-10-18T01:30:32.043Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00080' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00081':
{ cnhFullName: 'Carvalho Rodrigo',
  cnhCategory: 'B',
  cnhNumber: '000000000081',
  cnhExpiryDate: '3000-01-01T02:00:00.000Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00081' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00082':
{ cnhFullName: 'Miguéis Torres',
  cnhCategory: 'A',
  cnhNumber: '000000000082',
  cnhExpiryDate: '2019-09-24T23:40:47.321Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00082' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00083':
{ cnhFullName: 'Francisco Mello Damasceno',
  cnhCategory: 'A',
  cnhNumber: '000000000083',
  cnhExpiryDate: '2019-07-25T13:20:49.952Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00083' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00084':
{ cnhFullName: 'Santos Vilar',
  cnhCategory: 'B',
  cnhNumber: '000000000084',
  cnhExpiryDate: '2019-03-31T06:03:40.454Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00084' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00085':
{ cnhFullName: 'Lino Tony Donizeti Carvalho',
  cnhCategory: 'A',
  cnhNumber: '000000000085',
  cnhExpiryDate: '2019-06-08T22:44:31.621Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00085' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00086':
{ cnhFullName: 'Arlete Leandro Godoi',
  cnhCategory: 'A',
  cnhNumber: '000000000086',
  cnhExpiryDate: '2019-06-28T21:18:59.379Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00086' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00087':
{ cnhFullName: 'Godoi Salvarani',
  cnhCategory: 'B',
  cnhNumber: '000000000087',
  cnhExpiryDate: '3000-01-01T02:00:00.000Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00087' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00088':
{ cnhFullName: 'Luciano Carvalho',
  cnhCategory: 'B',
  cnhNumber: '000000000088',
  cnhExpiryDate: '2019-06-23T05:21:22.382Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00088' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00089':
{ cnhFullName: 'Guilherme Toneli',
  cnhCategory: 'A',
  cnhNumber: '000000000089',
  cnhExpiryDate: '2019-05-21T21:41:28.704Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00089' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00090':
{ cnhFullName: 'Danilo Barbosa Terto',
  cnhCategory: 'B',
  cnhNumber: '000000000090',
  cnhExpiryDate: '2019-02-07T18:01:37.366Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00090' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00091':
{ cnhFullName: 'Pedroso Almeida',
  cnhCategory: 'A',
  cnhNumber: '000000000091',
  cnhExpiryDate: '2019-10-01T13:38:25.442Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00091' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00092':
{ cnhFullName: 'Tony Marco Terto',
  cnhCategory: 'A',
  cnhNumber: '000000000092',
  cnhExpiryDate: '2019-01-24T18:45:07.433Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00092' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00093':
{ cnhFullName: 'Nobre Cunha Oliveira',
  cnhCategory: 'A',
  cnhNumber: '000000000093',
  cnhExpiryDate: '2019-01-27T19:28:42.987Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00093' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00094':
{ cnhFullName: 'Santos Santiago',
  cnhCategory: 'B',
  cnhNumber: '000000000094',
  cnhExpiryDate: '3000-01-01T02:00:00.000Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00094' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00095':
{ cnhFullName: 'Baptista Santos',
  cnhCategory: 'A',
  cnhNumber: '000000000095',
  cnhExpiryDate: '3000-01-01T02:00:00.000Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00095' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00096':
{ cnhFullName: 'Policastro Piriz',
  cnhCategory: 'B',
  cnhNumber: '000000000096',
  cnhExpiryDate: '3000-01-01T02:00:00.000Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00096' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00097':
{ cnhFullName: 'Daniel Gobi',
  cnhCategory: 'B',
  cnhNumber: '000000000097',
  cnhExpiryDate: '2019-07-15T00:40:25.142Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00097' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00098':
{ cnhFullName: 'Argeu Arlete',
  cnhCategory: 'A',
  cnhNumber: '000000000098',
  cnhExpiryDate: '2019-01-12T12:06:23.962Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00098' },
'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00099':
{ cnhFullName: 'Martins Piriz Mauro',
  cnhCategory: 'B',
  cnhNumber: '000000000099',
  cnhExpiryDate: '2019-08-26T12:37:44.256Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00099' } }
)

module.exports = ({userId, cnhPictureUrl} = {}) => cnhOcrDb.get(cnhPictureUrl)
    .then(cnhOcr => eventEmitter.emit('cnhOcr', {userId, cnhPictureUrl, ...cnhOcr})) 