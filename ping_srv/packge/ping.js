const https = require('http');
var srv = ['env-1609735.nordeste-idc.saveincloud.net', 'env-8035401.jelastic.saveincloud.net' , 'env-0374130.jelastic.saveincloud.net','env-0271120.jelastic.saveincloud.net','env-2506751.jelastic.saveincloud.net']
const hostname = srv[0];


setInterval(()=>{
  let startRequest  =  new Date().getTime();
  const req = https.request({
    hostname: hostname
  }, function (res){
	//const pingTime =  new Date().getTime() - startRequest;
  const pingTime = https.ClientRequest
  const ping = pingTime.require
    console.log(`${res.statusCode} | ${hostname} | ${ping} MS | ${new Date().toISOString().slice(0,19).replace('T',' ')}`);
  });
  req.on('error',(e)=>{
    console.log('Erro: '+e);
  });
  req.on('connect',(e)=>{
   startRequest  =  new Date().getTime();
  });
  req.end();
},500);