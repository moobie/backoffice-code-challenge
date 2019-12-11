require('./middlewareMocks')
require('./events/listeners')

const {publishNewUser} = require('./events/publishers')

const Users = [ 
    { fullName: 'SAGUAS ANDRE RENATO OLIVEIRA',
    userId: '00000',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00000',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00000',
    birthDate: '1971-05-06T04:24:10.471Z' },
    { fullName: 'SILVA DANILO',
    userId: '00001',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00001',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00001',
    birthDate: '1990-06-20T21:50:26.030Z' },
    { fullName: 'MARINS ALAN CUNHA OLIVEIRA',
    userId: '00002',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00002',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00002',
    birthDate: '1955-06-17T14:31:19.269Z' },
    { fullName: 'CUNHA KATIA CLEMER',
    userId: '00003',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00003',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00003',
    birthDate: '1996-11-15T20:23:14.475Z' },
    { fullName: 'FERREIRA LINO NALY',
    userId: '00004',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00004',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00004',
    birthDate: '1962-07-19T04:38:43.289Z' },
    { fullName: 'DIAS STONEM APOLIDORIO',
    userId: '00005',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00005',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00005',
    birthDate: '1974-11-19T00:39:09.601Z' },
    { fullName: 'ISMAEL BRASIL',
    userId: '00006',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00006',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00006',
    birthDate: '1977-02-23T09:27:30.222Z' },
    { fullName: 'JOSEAN ANDRE ALEXANDRE',
    userId: '00007',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00007',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00007',
    birthDate: '1961-08-05T05:22:07.773Z' },
    { fullName: 'CHAGAS THIAGO OLIVEIRA',
    userId: '00008',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00008',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00008',
    birthDate: new Date().toISOString() },
    { fullName: 'VINICIUS SANTANA CARVALHO BENSUSSAM',
    userId: '00009',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00009',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00009',
    birthDate: new Date().toISOString() },
    { fullName: 'PAULA ZANCHETA',
    userId: '00010',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00010',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00010',
    birthDate: new Date().toISOString() },
    { fullName: 'SAMUEL WAGNER',
    userId: '00011',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00011',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00011',
    birthDate: '1989-03-30T19:59:09.466Z' },
    { fullName: 'PADRAO DE DONIZETI',
    userId: '00012',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00012',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00012',
    birthDate: '1983-02-12T12:57:27.900Z' },
    { fullName: 'WAGNER VIANA CUNHA CRISTOFOLI',
    userId: '00013',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00013',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00013',
    birthDate: '1985-12-15T06:48:40.409Z' },
    { fullName: 'OLIVEIRA ALMEIDA',
    userId: '00014',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00014',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00014',
    birthDate: '1976-12-13T06:43:56.983Z' },
    { fullName: 'ARLETE CAIADO SERGIO',
    userId: '00015',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00015',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00015',
    birthDate: '1996-12-18T17:54:49.173Z' },
    { fullName: 'JUNIOR RODOLFO',
    userId: '00016',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00016',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00016',
    birthDate: '1961-01-16T04:57:45.712Z' },
    { fullName: 'VALENCA AUGUSTO',
    userId: '00017',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00017',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00017',
    birthDate: '1982-08-03T08:22:12.939Z' },
    { fullName: 'PAULA SOUZA',
    userId: '00018',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00018',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00018',
    birthDate: '1968-08-04T00:02:05.780Z' },
    { fullName: 'FRANCISCO CARVALHO FIGUEIREDO LEAL',
    userId: '00019',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00019',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00019',
    birthDate: '1971-08-05T18:06:35.986Z' },
    { fullName: 'SOUZA DA SERODIO',
    userId: '00020',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00020',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00020',
    birthDate: '1963-04-08T06:59:37.846Z' },
    { fullName: 'CALDAS JOSE',
    userId: '00021',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00021',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00021',
    birthDate: '1993-10-09T18:14:38.035Z' },
    { fullName: 'DONIZETI ALVES',
    userId: '00022',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00022',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00022',
    birthDate: '1977-07-23T16:07:38.642Z' },
    { fullName: 'MENDES FISCHER LUDMILA SOUZA',
    userId: '00023',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00023',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00023',
    birthDate: '1993-09-15T03:02:48.964Z' },
    { fullName: 'HENRIQUE NADIA CAMPOS',
    userId: '00024',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00024',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00024',
    birthDate: '1995-07-27T07:16:40.783Z' },
    { fullName: 'PAULA FISCHER ANTUNES',
    userId: '00025',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00025',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00025',
    birthDate: '1960-09-14T05:29:12.683Z' },
    { fullName: 'AUGUSTO THIAGO LOURENCO GOMES',
    userId: '00026',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00026',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00026',
    birthDate: '1956-03-02T07:19:43.769Z' },
    { fullName: 'THIAGO CAMARA ANDERSON',
    userId: '00027',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00027',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00027',
    birthDate: new Date().toISOString() },
    { fullName: 'CHRISTIANO SA',
    userId: '00028',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00028',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00028',
    birthDate: '1981-04-29T02:08:53.580Z' },
    { fullName: 'DONIZETI ANDRE GUSTAVO',
    userId: '00029',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00029',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00029',
    birthDate: new Date().toISOString() },
    { fullName: 'KELLI NUNES RODOLFO',
    userId: '00030',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00030',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00030',
    birthDate: '1980-08-08T00:55:01.597Z' },
    { fullName: 'SANTOS MAZZINI DIEGO',
    userId: '00031',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00031',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00031',
    birthDate: '1957-02-24T16:33:14.540Z' },
    { fullName: 'DONIZETI DEYVID COSTA RENATO',
    userId: '00032',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00032',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00032',
    birthDate: '1985-05-28T00:33:06.614Z' },
    { fullName: 'DOUGLAS MAURO CONY WILLYSON',
    userId: '00033',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00033',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00033',
    birthDate: '1963-02-06T02:56:46.709Z' },
    { fullName: 'VIANA SOUZA',
    userId: '00034',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00034',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00034',
    birthDate: new Date().toISOString() },
    { fullName: 'WELLINGTON MENDES',
    userId: '00035',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00035',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00035',
    birthDate: new Date().toISOString() },
    { fullName: 'WIILLIAM ALISON',
    userId: '00036',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00036',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00036',
    birthDate: '1973-11-14T23:09:21.496Z' },
    { fullName: 'SOUZA MENDES CARVALHO',
    userId: '00037',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00037',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00037',
    birthDate: new Date().toISOString() },
    { fullName: 'OLIVEIRA RAFAEL LUCK',
    userId: '00038',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00038',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00038',
    birthDate: '1964-03-09T08:44:17.682Z' },
    { fullName: 'ALEXANDRE PEDROSO GOMES',
    userId: '00039',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00039',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00039',
    birthDate: '1997-09-22T12:36:26.818Z' },
    { fullName: 'NALY PEDRO CAMILA FERNANDO',
    userId: '00040',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00040',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00040',
    birthDate: '1992-06-08T22:37:13.213Z' },
    { fullName: 'AUGUSTO MARTINS CORTES',
    userId: '00041',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00041',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00041',
    birthDate: new Date().toISOString() },
    { fullName: 'ANTUNES BRUNO ANDERSON',
    userId: '00042',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00042',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00042',
    birthDate: new Date().toISOString() },
    { fullName: 'CAMPOS GIULIANI PEDROSO',
    userId: '00043',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00043',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00043',
    birthDate: new Date().toISOString() },
    { fullName: 'WESLLEY GOMES FELIPE CALDAS',
    userId: '00044',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00044',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00044',
    birthDate: '1955-08-29T01:11:12.289Z' },
    { fullName: 'DIEGO ARLETE WILLYSON',
    userId: '00045',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00045',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00045',
    birthDate: '1978-07-22T11:51:10.670Z' },
    { fullName: 'RAFAEL CARVALHO NETO',
    userId: '00046',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00046',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00046',
    birthDate: '1979-06-11T05:10:56.547Z' },
    { fullName: 'SILVA RIBEIRO DANTAS LOURENCO',
    userId: '00047',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00047',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00047',
    birthDate: '1959-03-04T03:44:44.066Z' },
    { fullName: 'WAGNER ALEXANDRE',
    userId: '00048',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00048',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00048',
    birthDate: '1953-07-06T05:30:49.104Z' },
    { fullName: 'AGUILERA NALY',
    userId: '00049',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00049',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00049',
    birthDate: '2000-07-17T04:33:45.066Z' },
    { fullName: 'MAZZINI APOLIDORIO',
    userId: '00050',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00050',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00050',
    birthDate: '1984-12-05T21:29:45.759Z' },
    { fullName: 'VINICIUS CAMPOS',
    userId: '00051',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00051',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00051',
    birthDate: '1978-10-14T00:57:26.526Z' },
    { fullName: 'BOTELHO BENSUSSAM',
    userId: '00052',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00052',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00052',
    birthDate: '1963-02-13T21:56:32.257Z' },
    { fullName: 'MELLO FRANCISCO JUNIOSS TERTULIANO',
    userId: '00053',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00053',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00053',
    birthDate: '1972-09-07T08:25:47.671Z' },
    { fullName: 'CUNHA SALVARANI SANTOS',
    userId: '00054',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00054',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00054',
    birthDate: '1965-11-19T17:18:12.834Z' },
    { fullName: 'SENA CLEMER QUEIROZ',
    userId: '00055',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00055',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00055',
    birthDate: '1969-12-29T06:58:44.055Z' },
    { fullName: 'ANTUNES COSTA TORRES',
    userId: '00056',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00056',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00056',
    birthDate: '1998-08-29T14:36:10.823Z' },
    { fullName: 'FERNANDO PELIZER BENSUSSAM',
    userId: '00057',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00057',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00057',
    birthDate: '1954-05-08T21:15:18.370Z' },
    { fullName: 'CHRISTIANO MARINS GUSTAVO',
    userId: '00058',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00058',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00058',
    birthDate: new Date().toISOString() },
    { fullName: 'VILAR PAULA SANTANA',
    userId: '00059',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00059',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00059',
    birthDate: '1955-07-14T10:45:57.858Z' },
    { fullName: 'OLIVEIRA DIAS',
    userId: '00060',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00060',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00060',
    birthDate: '1996-04-01T16:32:39.480Z' },
    { fullName: 'BRASIL PELIZER',
    userId: '00061',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00061',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00061',
    birthDate: '1969-04-17T00:57:47.622Z' },
    { fullName: 'FRANCISCO VINICIUS SANTOS BAPTISTA',
    userId: '00062',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00062',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00062',
    birthDate: '1991-10-18T17:08:15.160Z' },
    { fullName: 'CARLOS GOMES',
    userId: '00063',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00063',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00063',
    birthDate: new Date().toISOString() },
    { fullName: 'GALDINO DEYVID JACOBSEN',
    userId: '00064',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00064',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00064',
    birthDate: new Date().toISOString() },
    { fullName: 'NUNES LUIZ SAMUEL',
    userId: '00065',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00065',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00065',
    birthDate: new Date().toISOString() },
    { fullName: 'EDUARDO CARLETO APOLIDORIO',
    userId: '00066',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00066',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00066',
    birthDate: '1973-02-14T06:00:05.228Z' },
    { fullName: 'THIAGO SENA',
    userId: '00067',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00067',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00067',
    birthDate: new Date().toISOString() },
    { fullName: 'BENSUSSAM ALMEIDA ANDRE SENA',
    userId: '00068',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00068',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00068',
    birthDate: new Date().toISOString() },
    { fullName: 'RENATO MESQUITA ALEX BOTELHO',
    userId: '00069',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00069',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00069',
    birthDate: '1958-05-25T02:06:34.628Z' },
    { fullName: 'ALEX FERNANDO SAMUEL',
    userId: '00070',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00070',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00070',
    birthDate: new Date().toISOString() },
    { fullName: 'WILLYSON MANTEIGAS RENATO',
    userId: '00071',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00071',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00071',
    birthDate: '1996-06-16T01:13:14.437Z' },
    { fullName: 'AVILA TONY',
    userId: '00072',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00072',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00072',
    birthDate: '1987-04-16T04:16:36.255Z' },
    { fullName: 'ALEX DEYVID',
    userId: '00073',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00073',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00073',
    birthDate: '1983-11-30T01:38:42.242Z' },
    { fullName: 'BOTELHO APOLIDORIO',
    userId: '00074',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00074',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00074',
    birthDate: '1963-11-28T14:26:00.392Z' },
    { fullName: 'JOSE JUNIOR LEANDRO',
    userId: '00075',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00075',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00075',
    birthDate: '1974-06-07T22:15:50.793Z' },
    { fullName: 'HENRIQUE RENATO',
    userId: '00076',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00076',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00076',
    birthDate: '1952-04-02T16:58:25.566Z' },
    { fullName: 'BRUNO DE FERREIRA',
    userId: '00077',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00077',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00077',
    birthDate: '1991-06-02T03:02:05.113Z' },
    { fullName: 'WALLACE DE MAZZINI IRVING',
    userId: '00078',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00078',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00078',
    birthDate: '1971-05-05T09:51:15.645Z' },
    { fullName: 'BRASIL GIULIANI HENRIQUE PAULA',
    userId: '00079',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00079',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00079',
    birthDate: '1983-05-24T09:09:03.343Z' },
    { fullName: 'SANTANA RIBEIRO',
    userId: '00080',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00080',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00080',
    birthDate: new Date().toISOString() },
    { fullName: 'CARVALHO RODRIGO',
    userId: '00081',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00081',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00081',
    birthDate: '1971-07-02T03:13:54.670Z' },
    { fullName: 'MIGUEIS TORRES',
    userId: '00082',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00082',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00082',
    birthDate: '1985-01-24T06:06:30.176Z' },
    { fullName: 'FRANCISCO MELLO DAMASCENO',
    userId: '00083',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00083',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00083',
    birthDate: '1957-06-25T03:41:30.115Z' },
    { fullName: 'SANTOS VILAR',
    userId: '00084',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00084',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00084',
    birthDate: '1975-05-03T22:04:12.078Z' },
    { fullName: 'LINO TONY DONIZETI CARVALHO',
    userId: '00085',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00085',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00085',
    birthDate: '1993-02-19T22:58:01.916Z' },
    { fullName: 'ARLETE LEANDRO GODOI',
    userId: '00086',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00086',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00086',
    birthDate: '1988-08-21T07:03:03.860Z' },
    { fullName: 'GODOI SALVARANI',
    userId: '00087',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00087',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00087',
    birthDate: '1950-12-27T16:05:00.953Z' },
    { fullName: 'LUCIANO CARVALHO',
    userId: '00088',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00088',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00088',
    birthDate: new Date().toISOString() },
    { fullName: 'GUILHERME TONELI',
    userId: '00089',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00089',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00089',
    birthDate: '1957-04-06T00:27:28.529Z' },
    { fullName: 'DANILO BARBOSA TERTO',
    userId: '00090',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00090',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00090',
    birthDate: '1980-08-17T01:48:12.996Z' },
    { fullName: 'PEDROSO ALMEIDA',
    userId: '00091',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00091',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00091',
    birthDate: '1989-08-28T07:59:23.833Z' },
    { fullName: 'TONY MARCO TERTO',
    userId: '00092',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00092',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00092',
    birthDate: '1960-10-11T20:12:13.610Z' },
    { fullName: 'NOBRE CUNHA OLIVEIRA',
    userId: '00093',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00093',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00093',
    birthDate: '1997-12-12T16:56:41.910Z' },
    { fullName: 'SANTOS SANTIAGO',
    userId: '00094',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00094',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00094',
    birthDate: '1959-11-27T15:06:05.994Z' },
    { fullName: 'BAPTISTA SANTOS',
    userId: '00095',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00095',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00095',
    birthDate: '1971-07-01T03:58:11.959Z' },
    { fullName: 'POLICASTRO PIRIZ',
    userId: '00096',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00096',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00096',
    birthDate: '1963-06-21T21:38:02.359Z' },
    { fullName: 'DANIEL GOBI',
    userId: '00097',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00097',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00097',
    birthDate: '1993-04-29T01:54:45.479Z' },
    { fullName: 'ARGEU ARLETE',
    userId: '00098',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00098',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00098',
    birthDate: new Date().toISOString() },
    { fullName: 'MARTINS PIRIZ MAURO',
    userId: '00099',
    cnhPictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/cnhPicture-00099',
    profilePictureUrl:
    'https://image-service.moobie.com.br/api/v1/images/profilePicture-00099',
    birthDate: '1982-03-16T18:14:33.495Z' } 
]



Users.forEach(publishNewUser)