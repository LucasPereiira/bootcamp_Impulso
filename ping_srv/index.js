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

var result = shell.exec(`for /f "tokens=* delims= " %i in ('ping -n 4 ${hostname} ^| findstr /i "Mínimo"') do set "Resultado= %i"`);

const convert = result.stdout

const {minimo, maximo, media} = convert

const statuus = {
    min: minimo,
    max: maximo,
    med: media
}


console.log(result);
console.log(convert);