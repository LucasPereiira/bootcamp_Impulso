const shell = require('shelljs');
var srv = ['env-1609735.nordeste-idc.saveincloud.net', 'env-8035401.jelastic.saveincloud.net' , 'env-0374130.jelastic.saveincloud.net','env-0271120.jelastic.saveincloud.net','env-2506751.jelastic.saveincloud.net']
const hostname = srv[0];
const {tempo, enviiados, recebidos, perdidos} = hostname;

const status = {
    temp: tempo,
    enviados: enviiados,
    recebiidos: recebidos,
    perdiidos: perdidos,
}

var result = shell.exec(`ping ${hostname} -t(20) > ping.txt`);

console.log(status);